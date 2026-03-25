"""DingTalk backend — invokes the real Node.js SDK via a bridge script.

The bridge loads the local ``@alicloud/dingtalk`` SDK and exposes module
discovery, method inspection, and generic API calls.  This module is
the **only** place that shells out to ``node``.
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
from pathlib import Path
from typing import Any, Dict, List, Optional, Union


def find_node() -> Optional[str]:
    """Find the ``node`` binary or return None."""
    return shutil.which("node")


def require_node() -> str:
    """Find the ``node`` binary or raise with install instructions."""
    path = find_node()
    if path:
        return path
    raise RuntimeError(
        "Node.js is not installed.  Install it with:\n"
        "  apt install nodejs   # Debian/Ubuntu\n"
        "  brew install node    # macOS\n"
        "  https://nodejs.org/  # Official installer"
    )


class DingTalkBackend:
    """Wrapper that talks to the DingTalk Node.js SDK through ``node_bridge.js``."""

    def __init__(self, project_root: Optional[Union[str, Path]] = None):
        if project_root is not None:
            self.project_root = Path(project_root)
        else:
            # Auto-detect: walk up from this file to find the directory
            # containing ts/dist/index.js (the SDK repo root).
            here = Path(__file__).resolve().parent  # utils/
            candidate = here.parents[3]  # 4 levels: utils -> pkg -> cli_anything -> agent-harness -> repo
            if (candidate / "ts" / "dist" / "index.js").is_file():
                self.project_root = candidate
            else:
                # Fallback: try common parent offsets
                for offset in range(6):
                    c = here.parents[offset]
                    if (c / "ts" / "dist" / "index.js").is_file():
                        self.project_root = c
                        break
                else:
                    self.project_root = candidate  # best guess
        self.bridge = Path(__file__).resolve().parent / "node_bridge.js"

    # ── Low-level runner ──────────────────────────────────────────────

    def _run(self, payload: Dict[str, Any]) -> Any:
        """Send a JSON payload to the bridge and return the result."""
        node = require_node()
        proc = subprocess.run(
            [node, str(self.bridge)],
            input=json.dumps(payload),
            text=True,
            capture_output=True,
            cwd=str(self.project_root),
        )
        if proc.returncode != 0:
            raise RuntimeError(proc.stderr.strip() or proc.stdout.strip() or "node bridge failed")
        data = json.loads(proc.stdout)
        if not data.get("ok", False):
            raise RuntimeError(data.get("error", "backend call failed"))
        return data["result"]

    # ── Module discovery ──────────────────────────────────────────────

    def list_modules(self) -> Dict[str, Any]:
        """List all SDK modules."""
        return self._run({"action": "list_modules"})

    def module_methods(self, module: str) -> Dict[str, Any]:
        """List methods in a given module."""
        return self._run({"action": "module_methods", "module": module})

    def module_describe(self, module: str) -> Dict[str, Any]:
        """Describe a module with method signatures and request/response fields.

        Returns full schemas with nested type resolution, required/example
        annotations, API metadata (HTTP method, pathname, authType), and
        parameter locations (body/query/path).
        """
        return self._run({"action": "module_describe", "module": module})

    def method_describe(self, module: str, method: str) -> Dict[str, Any]:
        """Describe a single method with deep schema introspection.

        Returns the same rich schema as ``module_describe`` but with deeper
        nesting resolution (6 levels) for a single method.  Includes:

        - ``request``: deep field schema with types, wireName, required, example
        - ``response``: deep response body schema
        - ``headers``: header class schema
        - ``api``: HTTP method, pathname, authType, paramLocations, pathParams
        - ``description``: method description from JSDoc
        """
        return self._run({
            "action": "method_describe",
            "module": module,
            "method": method,
        })

    def modules_stats(self) -> Dict[str, Any]:
        """Get statistics about all SDK modules."""
        return self._run({"action": "modules_stats"})

    # ── Convenience wrappers ──────────────────────────────────────────

    def get_access_token(self, app_key: str, app_secret: str) -> Any:
        """Shortcut for ``oauth2_1_0.getAccessToken``."""
        return self._run({
            "action": "call",
            "module": "oauth2_1_0",
            "method": "getAccessToken",
            "args": {"appKey": app_key, "appSecret": app_secret},
        })

    def get_user(self, union_id: str, access_token: str) -> Any:
        """Shortcut for ``contact_1_0.getUser``."""
        return self._run({
            "action": "call",
            "module": "contact_1_0",
            "method": "getUser",
            "args": union_id,
            "headers": {"xAcsDingtalkAccessToken": access_token},
        })

    # ── Generic invocation ────────────────────────────────────────────

    def generic_call(
        self,
        module: str,
        method: str,
        args: Any = None,
        headers: Optional[Dict[str, Any]] = None,
    ) -> Any:
        """Invoke any module method with arbitrary args and headers."""
        return self._run({
            "action": "call",
            "module": module,
            "method": method,
            "args": args,
            "headers": headers or {},
        })

    # ── Availability check ────────────────────────────────────────────

    def is_available(self) -> bool:
        """Check whether the Node bridge can load the SDK."""
        try:
            self.list_modules()
            return True
        except Exception:
            return False

    # ── Diagnostics ───────────────────────────────────────────────────

    def check_enhanced(self) -> Dict[str, Any]:
        """Enhanced availability check with detailed environment info.

        Returns a dict with:
        - ``available``: bool — whether the full pipeline works
        - ``node_path``: str or None — path to the node binary
        - ``node_version``: str or None — node version string
        - ``sdk_path``: str — path to the SDK root
        - ``dist_exists``: bool — whether ts/dist/index.js exists
        - ``node_modules_exists``: bool — whether ts/node_modules exists
        - ``package_version``: str or None — SDK version from package.json
        - ``module_count``: int or None — number of loadable modules
        """
        info: Dict[str, Any] = {
            "available": False,
            "node_path": None,
            "node_version": None,
            "sdk_path": str(self.project_root),
            "dist_exists": False,
            "node_modules_exists": False,
            "package_version": None,
            "module_count": None,
        }

        # Node.js
        node = find_node()
        info["node_path"] = node
        if node:
            try:
                proc = subprocess.run(
                    [node, "--version"], capture_output=True, text=True, timeout=10)
                if proc.returncode == 0:
                    info["node_version"] = proc.stdout.strip()
            except Exception:
                pass

        # SDK paths
        dist_index = self.project_root / "ts" / "dist" / "index.js"
        info["dist_exists"] = dist_index.is_file()
        info["node_modules_exists"] = (self.project_root / "ts" / "node_modules").is_dir()

        # Package version from package.json
        pkg_json = self.project_root / "ts" / "package.json"
        if pkg_json.is_file():
            try:
                with open(pkg_json, "r") as f:
                    pkg = json.load(f)
                info["package_version"] = pkg.get("version")
            except Exception:
                pass

        # Try full pipeline
        try:
            result = self.list_modules()
            modules = result.get("modules", [])
            info["module_count"] = len(modules)
            info["available"] = True
        except Exception:
            pass

        return info

    def diagnose(self) -> Dict[str, Any]:
        """Run a full diagnostic check with pass/fail for each prerequisite.

        Returns a dict with:
        - ``checks``: list of ``{"name": str, "status": "pass"|"fail"|"warn",
          "message": str, "fix": str|None}``
        - ``all_passed``: bool
        - ``summary``: str
        """
        checks: List[Dict[str, Any]] = []

        # 1. Node.js installed
        node = find_node()
        if node:
            # Get version
            ver = None
            try:
                proc = subprocess.run(
                    [node, "--version"], capture_output=True, text=True, timeout=10)
                if proc.returncode == 0:
                    ver = proc.stdout.strip()
            except Exception:
                pass
            if ver:
                # Check minimum version (>= 16)
                try:
                    major = int(ver.lstrip("v").split(".")[0])
                    if major >= 16:
                        checks.append({
                            "name": "node_installed",
                            "status": "pass",
                            "message": f"Node.js {ver} found at {node}",
                            "fix": None,
                        })
                    else:
                        checks.append({
                            "name": "node_version",
                            "status": "fail",
                            "message": f"Node.js {ver} is too old (need >= 16)",
                            "fix": "Upgrade Node.js to version 16 or later.",
                        })
                except (ValueError, IndexError):
                    checks.append({
                        "name": "node_installed",
                        "status": "pass",
                        "message": f"Node.js found at {node} (version: {ver})",
                        "fix": None,
                    })
            else:
                checks.append({
                    "name": "node_installed",
                    "status": "warn",
                    "message": f"Node.js found at {node} but version check failed",
                    "fix": None,
                })
        else:
            checks.append({
                "name": "node_installed",
                "status": "fail",
                "message": "Node.js is not installed.",
                "fix": "Install Node.js (>= 16): apt install nodejs / brew install node / https://nodejs.org/",
            })

        # 2. SDK source exists (ts/ directory)
        ts_dir = self.project_root / "ts"
        if ts_dir.is_dir():
            checks.append({
                "name": "sdk_source",
                "status": "pass",
                "message": f"SDK source directory found: {ts_dir}",
                "fix": None,
            })
        else:
            checks.append({
                "name": "sdk_source",
                "status": "fail",
                "message": f"SDK source directory not found: {ts_dir}",
                "fix": "Clone the DingTalk Node.js SDK repository.",
            })

        # 3. npm dependencies installed (ts/node_modules exists)
        node_modules = ts_dir / "node_modules"
        if node_modules.is_dir():
            checks.append({
                "name": "npm_installed",
                "status": "pass",
                "message": "npm dependencies installed (ts/node_modules exists).",
                "fix": None,
            })
        else:
            checks.append({
                "name": "npm_installed",
                "status": "fail",
                "message": "npm dependencies not installed (ts/node_modules missing).",
                "fix": f"Run: cd {ts_dir} && npm install",
            })

        # 4. SDK built (ts/dist/index.js exists)
        dist_index = ts_dir / "dist" / "index.js"
        if dist_index.is_file():
            checks.append({
                "name": "sdk_built",
                "status": "pass",
                "message": "SDK is built (ts/dist/index.js exists).",
                "fix": None,
            })
        else:
            checks.append({
                "name": "sdk_built",
                "status": "fail",
                "message": "SDK is not built (ts/dist/index.js missing).",
                "fix": f"Run: cd {ts_dir} && npm run build",
            })

        # 5. Bridge script exists
        if self.bridge.is_file():
            checks.append({
                "name": "bridge_script",
                "status": "pass",
                "message": f"Bridge script found: {self.bridge}",
                "fix": None,
            })
        else:
            checks.append({
                "name": "bridge_script",
                "status": "fail",
                "message": f"Bridge script missing: {self.bridge}",
                "fix": "Reinstall the CLI harness: pip install -e .",
            })

        # 6. Full pipeline test (only if all above pass)
        all_infra_pass = all(
            c["status"] == "pass"
            for c in checks
            if c["name"] in ("node_installed", "sdk_built", "bridge_script")
        )
        if all_infra_pass:
            try:
                result = self.list_modules()
                module_count = len(result.get("modules", []))
                checks.append({
                    "name": "sdk_loadable",
                    "status": "pass",
                    "message": f"SDK loads successfully ({module_count} modules).",
                    "fix": None,
                })
            except Exception as exc:
                checks.append({
                    "name": "sdk_loadable",
                    "status": "fail",
                    "message": f"SDK failed to load: {exc}",
                    "fix": "Rebuild the SDK: cd ts && npm run build",
                })
        else:
            checks.append({
                "name": "sdk_loadable",
                "status": "fail",
                "message": "Skipped — prerequisite checks failed.",
                "fix": "Fix the above issues first.",
            })

        all_passed = all(c["status"] == "pass" for c in checks)
        fail_count = sum(1 for c in checks if c["status"] == "fail")
        warn_count = sum(1 for c in checks if c["status"] == "warn")

        if all_passed:
            summary = "All prerequisites satisfied. CLI is ready to use."
        else:
            parts = []
            if fail_count:
                parts.append(f"{fail_count} failed")
            if warn_count:
                parts.append(f"{warn_count} warnings")
            summary = f"Prerequisites incomplete: {', '.join(parts)}."

        return {
            "checks": checks,
            "all_passed": all_passed,
            "summary": summary,
        }

    def setup_sdk(self, *, skip_install: bool = False,
                  skip_build: bool = False) -> Dict[str, Any]:
        """Run npm install and npm run build in the ts/ directory.

        Returns a dict with step results and overall success.
        """
        ts_dir = self.project_root / "ts"
        node = find_node()
        npm = shutil.which("npm")
        steps: List[Dict[str, Any]] = []

        if not ts_dir.is_dir():
            return {
                "success": False,
                "steps": [],
                "error": f"SDK source directory not found: {ts_dir}",
            }

        if not node:
            return {
                "success": False,
                "steps": [],
                "error": "Node.js is not installed.",
            }

        if not npm:
            return {
                "success": False,
                "steps": [],
                "error": "npm is not installed (comes with Node.js).",
            }

        # Step 1: npm install
        if not skip_install:
            try:
                proc = subprocess.run(
                    [npm, "install"],
                    cwd=str(ts_dir),
                    capture_output=True,
                    text=True,
                    timeout=300,
                )
                steps.append({
                    "name": "npm_install",
                    "success": proc.returncode == 0,
                    "returncode": proc.returncode,
                    "stdout_tail": proc.stdout[-500:] if proc.stdout else "",
                    "stderr_tail": proc.stderr[-500:] if proc.stderr else "",
                })
                if proc.returncode != 0:
                    return {"success": False, "steps": steps,
                            "error": "npm install failed."}
            except subprocess.TimeoutExpired:
                steps.append({
                    "name": "npm_install",
                    "success": False,
                    "returncode": -1,
                    "stdout_tail": "",
                    "stderr_tail": "Timed out after 300 seconds.",
                })
                return {"success": False, "steps": steps,
                        "error": "npm install timed out."}

        # Step 2: npm run build
        if not skip_build:
            try:
                proc = subprocess.run(
                    [npm, "run", "build"],
                    cwd=str(ts_dir),
                    capture_output=True,
                    text=True,
                    timeout=300,
                )
                steps.append({
                    "name": "npm_build",
                    "success": proc.returncode == 0,
                    "returncode": proc.returncode,
                    "stdout_tail": proc.stdout[-500:] if proc.stdout else "",
                    "stderr_tail": proc.stderr[-500:] if proc.stderr else "",
                })
                if proc.returncode != 0:
                    return {"success": False, "steps": steps,
                            "error": "npm run build failed."}
            except subprocess.TimeoutExpired:
                steps.append({
                    "name": "npm_build",
                    "success": False,
                    "returncode": -1,
                    "stdout_tail": "",
                    "stderr_tail": "Timed out after 300 seconds.",
                })
                return {"success": False, "steps": steps,
                        "error": "npm run build timed out."}

        # Verify
        dist_ok = (ts_dir / "dist" / "index.js").is_file()

        return {
            "success": dist_ok,
            "steps": steps,
            "dist_exists": dist_ok,
            "error": None if dist_ok else "Build completed but dist/index.js not found.",
        }

"""End-to-end and subprocess tests for cli-anything-dingtalk-nodejs-sdk.

- Backend integration tests invoke the real Node.js bridge against the local SDK.
- CLI subprocess tests invoke the installed ``cli-anything-dingtalk-nodejs-sdk``
  command (or fallback to ``python -m``) and verify JSON output.

No live DingTalk credentials are needed -- tests exercise offline operations
(module discovery, method inspection, state management, export).
"""

from __future__ import annotations

import csv
import json
import os
import shutil
import subprocess
import sys

import pytest

from cli_anything.dingtalk_nodejs_sdk.utils.dingtalk_backend import DingTalkBackend


# ── Fixtures ──────────────────────────────────────────────────────────

@pytest.fixture
def tmp_dir(tmp_path):
    return str(tmp_path)


# ══════════════════════════════════════════════════════════════════════
# Backend integration tests (real Node bridge, local SDK)
# ══════════════════════════════════════════════════════════════════════

class TestBackendIntegration:
    """Tests that invoke the real Node.js bridge and SDK."""

    @pytest.fixture(autouse=True)
    def _backend(self):
        self.backend = DingTalkBackend()

    def test_backend_list_modules(self):
        result = self.backend.list_modules()
        modules = result["modules"]
        assert isinstance(modules, list)
        assert len(modules) >= 100, f"Expected 100+ modules, got {len(modules)}"
        assert "oauth2_1_0" in modules
        assert "contact_1_0" in modules
        print(f"\n  Modules found: {len(modules)}")

    def test_backend_module_methods_oauth2(self):
        result = self.backend.module_methods("oauth2_1_0")
        methods = result["methods"]
        assert "getAccessToken" in methods
        assert "getAccessTokenWithOptions" in methods
        print(f"\n  oauth2_1_0 methods: {len(methods)}")

    def test_backend_module_methods_contact(self):
        result = self.backend.module_methods("contact_1_0")
        methods = result["methods"]
        assert "getUser" in methods or "getUserWithOptions" in methods
        print(f"\n  contact_1_0 methods: {len(methods)}")

    def test_backend_module_methods_robot(self):
        result = self.backend.module_methods("robot_1_0")
        methods = result["methods"]
        assert "batchSendOTO" in methods
        print(f"\n  robot_1_0 methods: {len(methods)}")

    def test_backend_module_methods_invalid(self):
        with pytest.raises(RuntimeError, match="Unknown module"):
            self.backend.module_methods("nonexistent_module_999")

    def test_backend_is_available(self):
        assert self.backend.is_available() is True

    def test_backend_module_info_structure(self):
        result = self.backend.module_methods("calendar_1_0")
        assert "methods" in result
        assert len(result["methods"]) > 0
        print(f"\n  calendar_1_0 methods: {len(result['methods'])}")

    def test_backend_module_describe(self):
        result = self.backend.module_describe("oauth2_1_0")
        assert result["module"] == "oauth2_1_0"
        assert result["primaryMethods"] > 0
        assert "methods" in result
        # Verify getAccessToken has request fields with enhanced schema
        gat = result["methods"].get("getAccessToken")
        assert gat is not None
        assert gat["request"] is not None
        assert "appKey" in gat["request"]["fields"]
        assert "appSecret" in gat["request"]["fields"]
        # Verify enhanced field schema includes wireName and type
        appKey = gat["request"]["fields"]["appKey"]
        assert appKey["type"] == "string"
        assert appKey["wireName"] == "appKey"
        assert appKey.get("required") is True
        # Verify API metadata is present
        assert gat.get("api") is not None
        assert gat["api"]["method"] == "POST"
        assert "/oauth2/accessToken" in gat["api"]["pathname"]
        assert gat["api"]["authType"] == "Anonymous"
        # Verify param locations
        assert gat["api"]["paramLocations"]["appKey"] == "body"
        # Verify description is present
        assert gat.get("description") is not None
        assert len(gat["description"]) > 0
        print(f"\n  oauth2_1_0 describe: {result['primaryMethods']} primary methods")

    def test_backend_module_describe_query_params(self):
        """Verify query parameters are detected correctly."""
        result = self.backend.module_describe("oauth2_1_0")
        gai = result["methods"].get("getAuthInfo")
        assert gai is not None
        assert gai["api"]["method"] == "GET"
        assert gai["api"]["paramLocations"]["authCorpId"] == "query"
        # Verify response has nested model types
        resp = gai["response"]
        assert resp is not None
        auth_corp_info = resp["fields"].get("authCorpInfo")
        assert auth_corp_info is not None
        assert auth_corp_info["type"]["type"] == "model"
        assert "fields" in auth_corp_info["type"]

    def test_backend_module_describe_invalid(self):
        with pytest.raises(RuntimeError, match="Unknown module"):
            self.backend.module_describe("nonexistent_module_999")

    def test_backend_method_describe(self):
        """Test the method_describe action for deep single-method schema."""
        result = self.backend.method_describe("oauth2_1_0", "getAccessToken")
        assert result["module"] == "oauth2_1_0"
        assert result["method"] == "getAccessToken"
        assert result["hasWithOptions"] is True
        # Request schema
        req = result["request"]
        assert req["className"] == "GetAccessTokenRequest"
        assert req["fields"]["appKey"]["type"] == "string"
        assert req["fields"]["appKey"]["wireName"] == "appKey"
        assert req["fields"]["appKey"].get("required") is True
        assert req["fields"]["appSecret"]["type"] == "string"
        # Response schema
        resp = result["response"]
        assert resp["className"] == "GetAccessTokenResponseBody"
        assert resp["fields"]["accessToken"]["type"] == "string"
        assert resp["fields"]["expireIn"]["type"] == "number"
        # API metadata
        api = result["api"]
        assert api["method"] == "POST"
        assert api["pathname"] == "/v1.0/oauth2/accessToken"
        assert api["authType"] == "Anonymous"
        assert api["paramLocations"]["appKey"] == "body"
        # Description
        assert result["description"] is not None
        print(f"\n  method_describe: getAccessToken schema verified")

    def test_backend_method_describe_with_examples(self):
        """Test that @example annotations are extracted."""
        result = self.backend.method_describe("contact_1_0", "addAccountMapping")
        req = result["request"]
        assert req["fields"]["domain"].get("required") is True
        assert req["fields"]["domain"].get("example") == "BizName1"
        assert req["fields"]["outId"].get("example") == "o_123"
        # Response also has example
        resp = result["response"]
        assert resp["fields"]["result"].get("example") == "true"

    def test_backend_method_describe_nested_types(self):
        """Test that nested model types are recursively resolved."""
        result = self.backend.method_describe("contact_1_0", "addContactHideBySceneSetting")
        req = result["request"]
        # nodeListSceneConfig should be a nested model
        nlsc = req["fields"]["nodeListSceneConfig"]
        assert nlsc["type"]["type"] == "model"
        assert "active" in nlsc["type"]["fields"]
        assert nlsc["type"]["fields"]["active"]["type"] == "boolean"
        # excludeDeptIds should be an array
        assert req["fields"]["excludeDeptIds"]["type"]["type"] == "array"
        assert req["fields"]["excludeDeptIds"]["type"]["itemType"] == "number"

    def test_backend_method_describe_path_params(self):
        """Test that path parameters are detected from pathname template."""
        result = self.backend.method_describe("oauth2_1_0", "getToken")
        api = result["api"]
        assert api.get("pathParams") is not None
        assert "corpId" in api["pathParams"]
        assert "${corpId}" in api["pathname"]

    def test_backend_method_describe_invalid(self):
        with pytest.raises(RuntimeError, match="Unknown method"):
            self.backend.method_describe("oauth2_1_0", "nonExistentMethod999")

    def test_backend_modules_stats(self):
        result = self.backend.modules_stats()
        assert result["moduleCount"] >= 100
        assert result["totalPrimaryMethods"] > 2000
        assert "modules" in result
        assert "oauth2_1_0" in result["modules"]
        print(f"\n  SDK stats: {result['moduleCount']} modules, "
              f"{result['totalPrimaryMethods']} primary methods")


# ══════════════════════════════════════════════════════════════════════
# CLI subprocess tests
# ══════════════════════════════════════════════════════════════════════

def _resolve_cli(name):
    """Resolve installed CLI command; falls back to python -m for dev.

    Set env CLI_ANYTHING_FORCE_INSTALLED=1 to require the installed command.
    """
    force = os.environ.get("CLI_ANYTHING_FORCE_INSTALLED", "").strip() == "1"
    path = shutil.which(name)
    if path:
        print(f"[_resolve_cli] Using installed command: {path}")
        return [path]
    if force:
        raise RuntimeError(f"{name} not found in PATH. Install with: pip install -e .")
    module = "cli_anything.dingtalk_nodejs_sdk.dingtalk_nodejs_sdk_cli"
    print(f"[_resolve_cli] Falling back to: {sys.executable} -m {module}")
    return [sys.executable, "-m", module]


class TestCLISubprocess:
    """Tests that invoke the installed CLI command via subprocess."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    # ── Basic commands ────────────────────────────────────────────────

    def test_help(self):
        result = self._run(["--help"])
        assert result.returncode == 0
        assert "modules" in result.stdout
        assert "oauth2" in result.stdout
        assert "state" in result.stdout
        assert "project" in result.stdout
        assert "export" in result.stdout

    def test_version(self):
        result = self._run(["--version"])
        assert result.returncode == 0
        assert "1.2.0" in result.stdout

    # ── Module discovery via subprocess ───────────────────────────────

    def test_modules_list_json(self):
        result = self._run(["--json", "modules", "list"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "modules" in data
        assert len(data["modules"]) >= 100
        print(f"\n  CLI modules list: {len(data['modules'])} modules")

    def test_module_methods_json(self):
        result = self._run(["--json", "module", "methods", "oauth2_1_0"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "methods" in data
        assert "getAccessToken" in data["methods"]

    def test_module_info_json(self):
        result = self._run(["--json", "module", "info", "contact_1_0"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "primary_methods" in data
        assert data["primary_methods"] > 0

    # ── State management via subprocess ───────────────────────────────

    def test_state_show_json(self):
        result = self._run(["--json", "state", "show"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "selected_module" in data

    def test_state_set_module_json(self):
        result = self._run(["--json", "state", "set-module", "oauth2_1_0"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["selected_module"] == "oauth2_1_0"

    # ── Backend check via subprocess ──────────────────────────────────

    def test_backend_check_json(self):
        result = self._run(["--json", "backend", "check"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["available"] is True

    # ── New discovery commands via subprocess ─────────────────────────

    def test_modules_search_json(self):
        result = self._run(["--json", "modules", "search", "im"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["query"] == "im"
        assert data["count"] >= 2
        assert "im_1_0" in data["modules"]

    def test_modules_search_glob_json(self):
        result = self._run(["--json", "modules", "search", "im_*"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "im_1_0" in data["modules"]
        assert "im_2_0" in data["modules"]
        # glob should not match "impaas_1_0"
        assert "impaas_1_0" not in data["modules"]

    def test_modules_categories_json(self):
        result = self._run(["--json", "modules", "categories"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "categories" in data
        assert "summary" in data
        assert "messaging" in data["categories"]
        assert "im_1_0" in data["categories"]["messaging"]
        assert data["summary"]["messaging"] >= 2

    def test_modules_stats_json(self):
        result = self._run(["--json", "modules", "stats"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["module_count"] >= 100
        assert data["total_primary_methods"] > 2000
        assert len(data["top_10_modules"]) == 10
        assert "methods_by_domain" in data
        print(f"\n  SDK stats: {data['module_count']} modules, "
              f"{data['total_primary_methods']} primary methods")

    def test_module_describe_json(self):
        result = self._run(["--json", "module", "describe", "oauth2_1_0"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        # Verify schema envelope
        assert "$schema" in envelope
        assert envelope["$schema"]["kind"] == "module_schema"
        assert envelope["$schema"]["version"] == "1.0.0"
        assert envelope["$schema"]["source"]["module"] == "oauth2_1_0"
        data = envelope["data"]
        assert data["module"] == "oauth2_1_0"
        assert data["primaryMethods"] > 0
        assert "getAccessToken" in data["methods"]
        gat = data["methods"]["getAccessToken"]
        assert gat["hasWithOptions"] is True
        # Enhanced schema: fields now have wireName, type, and annotations
        assert "appKey" in gat["request"]["fields"]
        assert gat["request"]["fields"]["appKey"]["type"] == "string"
        assert gat["request"]["fields"]["appKey"]["wireName"] == "appKey"
        assert gat["request"]["fields"]["appKey"].get("required") is True
        # API metadata present
        assert gat.get("api") is not None
        assert gat["api"]["method"] == "POST"
        assert gat["api"]["paramLocations"]["appKey"] == "body"
        print(f"\n  oauth2_1_0 describe: {data['primaryMethods']} primary methods")

    def test_module_describe_with_filter_json(self):
        result = self._run(["--json", "module", "describe", "oauth2_1_0",
                            "--method", "getAccessToken"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        assert "$schema" in envelope
        data = envelope["data"]
        assert data["filter"] == "getAccessToken"
        assert data["matched_methods"] == 1
        assert "getAccessToken" in data["methods"]

    def test_module_method_schema_json(self):
        result = self._run(["--json", "module", "method-schema", "oauth2_1_0", "getAccessToken"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        # Verify schema envelope
        assert "$schema" in envelope
        assert envelope["$schema"]["kind"] == "method_schema"
        assert envelope["$schema"]["source"]["method"] == "getAccessToken"
        data = envelope["data"]
        assert data["module"] == "oauth2_1_0"
        assert data["method"] == "getAccessToken"
        # Request schema
        assert data["request"]["fields"]["appKey"]["type"] == "string"
        assert data["request"]["fields"]["appKey"].get("required") is True
        # API metadata
        assert data["api"]["method"] == "POST"
        assert data["api"]["paramLocations"]["appKey"] == "body"
        # Description
        assert data["description"] is not None
        print(f"\n  method-schema: getAccessToken verified")

    def test_module_method_schema_nested_json(self):
        """Test method-schema with nested types via subprocess."""
        result = self._run(["--json", "module", "method-schema", "contact_1_0",
                            "addContactHideBySceneSetting"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        req = data["request"]
        # Nested model resolved
        nlsc = req["fields"]["nodeListSceneConfig"]
        assert nlsc["type"]["type"] == "model"
        assert "active" in nlsc["type"]["fields"]

    def test_module_compare_json(self):
        result = self._run(["--json", "module", "compare", "oauth2_1_0", "contact_1_0"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["module_a"] == "oauth2_1_0"
        assert data["module_b"] == "contact_1_0"
        assert data["method_count_a"] > 0
        assert data["method_count_b"] > 0
        assert isinstance(data["only_in_a"], list)
        assert isinstance(data["only_in_b"], list)
        print(f"\n  Compare: oauth2={data['method_count_a']}, "
              f"contact={data['method_count_b']}, shared={data['shared_count']}")

    # ── Project management via subprocess ─────────────────────────────

    def test_project_new_json(self, tmp_dir):
        out = os.path.join(tmp_dir, "proj.json")
        result = self._run(["--json", "project", "new", "-o", out,
                            "--name", "testproj"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["created"] == out
        assert os.path.isfile(out)
        with open(out) as f:
            proj = json.load(f)
        assert proj["name"] == "testproj"
        print(f"\n  Project file: {out} ({os.path.getsize(out)} bytes)")

    # ── Export via subprocess ─────────────────────────────────────────

    def test_export_json_cli(self, tmp_dir):
        out = os.path.join(tmp_dir, "state.json")
        result = self._run(["--json", "export", "json", "-o", out, "--overwrite"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["format"] == "json"
        assert os.path.isfile(out)
        assert os.path.getsize(out) > 0
        print(f"\n  Exported state JSON: {out} ({data['file_size']} bytes)")

    def test_export_modules_cli(self, tmp_dir):
        out = os.path.join(tmp_dir, "modules.json")
        result = self._run(["--json", "export", "modules", "-o", out, "--overwrite"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["format"] == "json"
        assert os.path.isfile(out)
        # Verify exported content
        with open(out) as f:
            exported = json.load(f)
        assert exported["module_count"] >= 100
        print(f"\n  Exported modules JSON: {out} ({data['file_size']} bytes)")

    def test_export_csv_cli(self, tmp_dir):
        out = os.path.join(tmp_dir, "modules.csv")
        result = self._run(["--json", "export", "csv", "-o", out, "--overwrite"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["format"] == "csv"
        assert data["row_count"] >= 100
        assert os.path.isfile(out)
        # Verify CSV content
        with open(out) as f:
            reader = csv.reader(f)
            rows = list(reader)
        assert len(rows) >= 101  # header + 100+ data rows
        assert rows[0][0] == "module"  # header
        print(f"\n  Exported CSV: {out} ({data['file_size']} bytes, {data['row_count']} rows)")

    # ── Export methods via subprocess ─────────────────────────────────

    def test_export_methods_json_cli(self, tmp_dir):
        out = os.path.join(tmp_dir, "methods.json")
        result = self._run(["--json", "export", "methods", "-o", out,
                            "--overwrite", "--module", "oauth2"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["format"] == "json"
        assert os.path.isfile(out)
        with open(out) as f:
            exported = json.load(f)
        assert exported["module_count"] == 1
        assert "oauth2_1_0" in exported["modules"]
        print(f"\n  Exported methods JSON: {out} ({data['file_size']} bytes)")

    def test_export_methods_csv_cli(self, tmp_dir):
        out = os.path.join(tmp_dir, "methods.csv")
        result = self._run(["--json", "export", "methods", "-o", out,
                            "--overwrite", "--module", "oauth2"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["format"] == "csv"
        assert data["row_count"] > 0
        assert os.path.isfile(out)
        with open(out) as f:
            reader = csv.DictReader(f)
            rows = list(reader)
        assert len(rows) > 0
        assert rows[0]["module"] == "oauth2_1_0"
        assert "method" in rows[0]
        assert "request_fields" in rows[0]
        print(f"\n  Exported methods CSV: {out} ({data['file_size']} bytes, {data['row_count']} rows)")


# ══════════════════════════════════════════════════════════════════════
# Workflow tests (multi-step scenarios via subprocess)
# ══════════════════════════════════════════════════════════════════════

class TestWorkflowSubprocess:
    """Multi-step workflow tests via subprocess."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_discovery_pipeline(self, tmp_dir):
        """Workflow 1: SDK Discovery Pipeline."""
        # Step 1: List modules
        r1 = self._run(["--json", "modules", "list"])
        assert r1.returncode == 0
        modules = json.loads(r1.stdout)["modules"]
        assert len(modules) >= 100

        # Step 2: Inspect oauth2 module
        r2 = self._run(["--json", "module", "info", "oauth2_1_0"])
        assert r2.returncode == 0
        info = json.loads(r2.stdout)
        assert info["primary_methods"] > 0

        # Step 3: Get contact methods
        r3 = self._run(["--json", "module", "methods", "contact_1_0"])
        assert r3.returncode == 0
        methods = json.loads(r3.stdout)["methods"]
        assert len(methods) > 0

        # Step 4: Export module list
        out = os.path.join(tmp_dir, "discovery.json")
        r4 = self._run(["--json", "export", "modules", "-o", out, "--overwrite"])
        assert r4.returncode == 0
        with open(out) as f:
            exported = json.load(f)
        assert exported["module_count"] == len(modules)
        print(f"\n  Discovery pipeline: {len(modules)} modules -> {out}")

    def test_project_and_state_workflow(self, tmp_dir):
        """Workflow 2: Project Setup and State Management."""
        proj_path = os.path.join(tmp_dir, "workflow.json")
        session_path = os.path.join(tmp_dir, "session.json")

        # Step 1: Create project
        r = self._run(["--json", "project", "new", "-o", proj_path,
                        "--name", "workflow-test", "--app-key", "AK123"])
        assert r.returncode == 0

        # Step 2: Verify project info
        r = self._run(["--json", "--project", proj_path, "project", "info"])
        assert r.returncode == 0
        info = json.loads(r.stdout)
        assert info["name"] == "workflow-test"

        # Step 3: State management
        r = self._run(["--json", "state", "set-module", "oauth2_1_0"])
        assert r.returncode == 0
        data = json.loads(r.stdout)
        assert data["selected_module"] == "oauth2_1_0"

        # Step 4: Show state
        r = self._run(["--json", "state", "show"])
        assert r.returncode == 0

        print(f"\n  Workflow project: {proj_path}")

    def test_export_pipeline(self, tmp_dir):
        """Workflow 3: Export Pipeline."""
        json_out = os.path.join(tmp_dir, "mods.json")
        csv_out = os.path.join(tmp_dir, "mods.csv")
        state_out = os.path.join(tmp_dir, "state.json")

        # Step 1: Export modules as JSON
        r1 = self._run(["--json", "export", "modules", "-o", json_out, "--overwrite"])
        assert r1.returncode == 0
        assert os.path.getsize(json_out) > 0

        # Step 2: Export modules as CSV
        r2 = self._run(["--json", "export", "csv", "-o", csv_out, "--overwrite"])
        assert r2.returncode == 0
        assert os.path.getsize(csv_out) > 0

        # Step 3: Export session state
        r3 = self._run(["--json", "export", "json", "-o", state_out, "--overwrite"])
        assert r3.returncode == 0
        assert os.path.getsize(state_out) > 0

        # Verify JSON content
        with open(json_out) as f:
            mods = json.load(f)
        assert mods["module_count"] >= 100

        # Verify CSV content
        with open(csv_out) as f:
            reader = csv.reader(f)
            rows = list(reader)
        assert len(rows) >= 101  # header + data

        print(f"\n  Export pipeline:")
        print(f"    JSON: {json_out} ({os.path.getsize(json_out):,} bytes)")
        print(f"    CSV:  {csv_out} ({os.path.getsize(csv_out):,} bytes)")
        print(f"    State: {state_out} ({os.path.getsize(state_out):,} bytes)")

    def test_deep_inspection_workflow(self, tmp_dir):
        """Workflow 4: Deep Module Inspection Pipeline.

        Simulates: Developer doing a deep dive into messaging modules.
        """
        # Step 1: Search for IM modules
        r1 = self._run(["--json", "modules", "search", "im"])
        assert r1.returncode == 0
        matches = json.loads(r1.stdout)["modules"]
        assert len(matches) >= 2
        assert "im_1_0" in matches

        # Step 2: Get SDK stats to understand the landscape
        r2 = self._run(["--json", "modules", "stats"])
        assert r2.returncode == 0
        stats = json.loads(r2.stdout)
        assert stats["module_count"] >= 100

        # Step 3: Describe the IM module to see method signatures
        r3 = self._run(["--json", "module", "describe", "im_1_0",
                         "--method", "sendMessage"])
        assert r3.returncode == 0
        envelope = json.loads(r3.stdout)
        desc = envelope["data"]
        assert desc["matched_methods"] >= 1

        # Step 4: Compare im_1_0 vs im_2_0
        r4 = self._run(["--json", "module", "compare", "im_1_0", "im_2_0"])
        assert r4.returncode == 0
        comp = json.loads(r4.stdout)
        assert comp["method_count_a"] > comp["method_count_b"]

        # Step 5: Export IM methods as CSV
        out = os.path.join(tmp_dir, "im_methods.csv")
        r5 = self._run(["--json", "export", "methods", "-o", out,
                         "--overwrite", "--module", "im_1_0"])
        assert r5.returncode == 0
        assert os.path.isfile(out)
        with open(out) as f:
            reader = csv.DictReader(f)
            rows = list(reader)
        assert len(rows) > 50

        print(f"\n  Deep inspection workflow:")
        print(f"    Found {len(matches)} IM modules")
        print(f"    im_1_0: {comp['method_count_a']} methods")
        print(f"    im_2_0: {comp['method_count_b']} methods")
        print(f"    Exported {len(rows)} methods to {out}")

    def test_categories_to_export_workflow(self, tmp_dir):
        """Workflow 5: Categorize then Export.

        Simulates: Generating a categorized SDK overview for documentation.
        """
        # Step 1: Get categories
        r1 = self._run(["--json", "modules", "categories"])
        assert r1.returncode == 0
        cats = json.loads(r1.stdout)
        assert len(cats["categories"]) >= 15

        # Step 2: Pick a category and describe its modules
        messaging_mods = cats["categories"].get("messaging", [])
        assert len(messaging_mods) >= 2

        # Step 3: Export the messaging modules' methods
        out = os.path.join(tmp_dir, "messaging_methods.json")
        # Use the first messaging module
        r3 = self._run(["--json", "export", "methods", "-o", out,
                         "--overwrite", "--module", messaging_mods[0]])
        assert r3.returncode == 0
        assert os.path.isfile(out)
        with open(out) as f:
            exported = json.load(f)
        assert exported["module_count"] >= 1

        print(f"\n  Categories->Export workflow:")
        print(f"    {len(cats['categories'])} categories")
        print(f"    {len(messaging_mods)} messaging modules")
        print(f"    Exported to {out}")


# ══════════════════════════════════════════════════════════════════════
# New feature tests: Template, Validate, JSON input, Structured errors
# ══════════════════════════════════════════════════════════════════════

class TestTemplateSubprocess:
    """Tests for the new ``module template`` command."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_template_basic_json(self):
        result = self._run(["--json", "module", "template",
                            "oauth2_1_0", "getAccessToken"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        # Verify envelope
        assert "$schema" in envelope
        assert envelope["$schema"]["kind"] == "template"
        assert envelope["$schema"]["source"]["module"] == "oauth2_1_0"
        assert envelope["$schema"]["source"]["method"] == "getAccessToken"
        data = envelope["data"]
        assert data["module"] == "oauth2_1_0"
        assert data["method"] == "getAccessToken"
        # Template should have required field
        assert "appKey" in data["template"]
        # Curl hint present
        assert data["curl_hint"] is not None
        assert "curl -X POST" in data["curl_hint"]
        assert "/oauth2/accessToken" in data["curl_hint"]
        # CLI hint present
        assert data["cli_hint"] is not None
        assert "--body-json" in data["cli_hint"]
        print(f"\n  Template: getAccessToken -> {list(data['template'].keys())}")

    def test_template_all_fields_json(self):
        result = self._run(["--json", "module", "template",
                            "oauth2_1_0", "getAccessToken", "--all-fields"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        # With --all-fields, both appKey and appSecret should be present
        assert "appKey" in data["template"]
        assert "appSecret" in data["template"]

    def test_template_with_examples_json(self):
        """Test that @example values appear in templates."""
        result = self._run(["--json", "module", "template",
                            "contact_1_0", "addAccountMapping"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        # domain has @example "BizName1"
        assert data["template"]["domain"] == "BizName1"
        # outId has @example "o_123"
        assert data["template"]["outId"] == "o_123"

    def test_template_with_headers_json(self):
        """Test template for method that requires headers."""
        result = self._run(["--json", "module", "template",
                            "contact_1_0", "getUser", "--all-fields"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        # getUser has headers class with xAcsDingtalkAccessToken
        assert data["headers_template"] is not None
        assert "xAcsDingtalkAccessToken" in data["headers_template"]

    def test_template_invalid_module(self):
        result = self._run(["--json", "module", "template",
                            "nonexistent_999", "getAccessToken"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "UNKNOWN_MODULE"

    def test_template_invalid_method(self):
        result = self._run(["--json", "module", "template",
                            "oauth2_1_0", "nonExistentMethod999"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "UNKNOWN_METHOD"


class TestValidateSubprocess:
    """Tests for the new ``backend validate`` command."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_validate_valid_request(self):
        body = json.dumps({"appKey": "test_key", "appSecret": "test_secret"})
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", body])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        assert "$schema" in envelope
        assert envelope["$schema"]["kind"] == "validation"
        data = envelope["data"]
        assert data["valid"] is True
        assert data["errors"] == []
        assert data["field_locations"]["appKey"] == "body"

    def test_validate_missing_required(self):
        body = json.dumps({"appSecret": "test_secret"})
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", body])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        assert data["valid"] is False
        assert any(e["field"] == "appKey" for e in data["errors"])
        print(f"\n  Validate errors: {[e['field'] for e in data['errors']]}")

    def test_validate_unknown_field_warning(self):
        body = json.dumps({"appKey": "test", "unknownField": "val"})
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", body])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        assert data["valid"] is True  # warnings don't fail
        assert any(w["field"] == "unknownField" for w in data["warnings"])

    def test_validate_strict_mode(self):
        body = json.dumps({"appKey": "test", "unknownField": "val"})
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", body,
                            "--strict"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        assert data["valid"] is False
        assert any(e["field"] == "unknownField" for e in data["errors"])

    def test_validate_with_body_file(self, tmp_dir):
        body_path = os.path.join(tmp_dir, "body.json")
        with open(body_path, "w") as f:
            json.dump({"appKey": "from_file", "appSecret": "sec"}, f)
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-file", body_path])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        assert envelope["data"]["valid"] is True

    def test_validate_invalid_module(self):
        result = self._run(["--json", "backend", "validate",
                            "--module", "nonexistent_999",
                            "--method", "getAccessToken",
                            "--body-json", "{}"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "UNKNOWN_MODULE"

    def test_validate_empty_body(self):
        """Validate with no body should report missing required fields."""
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken"])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        assert data["valid"] is False
        assert any(e["field"] == "appKey" for e in data["errors"])

    def test_validate_query_params(self):
        """Validate field locations for GET methods with query params."""
        body = json.dumps({"authCorpId": "corp123"})
        result = self._run(["--json", "backend", "validate",
                            "--module", "oauth2_1_0",
                            "--method", "getAuthInfo",
                            "--body-json", body])
        assert result.returncode == 0
        envelope = json.loads(result.stdout)
        data = envelope["data"]
        assert data["field_locations"]["authCorpId"] == "query"


class TestJsonInputSubprocess:
    """Tests for --body-json, --body-file, --header-json, --header-file options."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_body_json_and_arg_conflict(self):
        """Cannot combine --arg with --body-json."""
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--arg", "appKey=test",
                            "--body-json", '{"appKey":"test"}'], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "INPUT_ERROR"
        assert "Cannot combine" in output["error"]["message"]

    def test_body_json_and_body_file_conflict(self):
        """Cannot combine --body-json with --body-file."""
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", '{"a":1}',
                            "--body-file", "/tmp/nonexistent.json"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "INPUT_ERROR"

    def test_header_json_and_header_conflict(self):
        """Cannot combine --header with --header-json."""
        result = self._run(["--json", "backend", "call",
                            "--module", "contact_1_0",
                            "--method", "getUser",
                            "--body-json", '{"userId":"u1"}',
                            "--header", "x-token=tok",
                            "--header-json", '{"x-token":"tok"}'], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "INPUT_ERROR"

    def test_body_file_loading(self, tmp_dir):
        """Test that --body-file loads JSON correctly."""
        body_path = os.path.join(tmp_dir, "body.json")
        with open(body_path, "w") as f:
            json.dump({"appKey": "from_file", "appSecret": "from_file_secret"}, f)
        # This will fail at the API level (invalid credentials) but
        # should parse the body correctly. We check for structured error.
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-file", body_path], check=False)
        # Either success or structured backend error
        output = json.loads(result.stdout)
        if result.returncode != 0:
            assert "error" in output
            assert output["error"]["code"] == "BACKEND_ERROR"
        # The important thing is that it didn't fail with INPUT_ERROR

    def test_header_file_loading(self, tmp_dir):
        """Test that --header-file loads JSON correctly."""
        header_path = os.path.join(tmp_dir, "headers.json")
        with open(header_path, "w") as f:
            json.dump({"xAcsDingtalkAccessToken": "test_token"}, f)
        # Use --body-json with a valid JSON object for the request body
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", '{"appKey":"k","appSecret":"s"}',
                            "--header-file", header_path], check=False)
        output = json.loads(result.stdout)
        # Should not be INPUT_ERROR — means header file was loaded OK
        if result.returncode != 0:
            assert output["error"]["code"] != "INPUT_ERROR"

    def test_invalid_body_json(self):
        """Invalid JSON string should produce INPUT_ERROR."""
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", "not{valid}json"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "INPUT_ERROR"
        assert "Invalid JSON" in output["error"]["message"]

    def test_body_file_not_found(self):
        """Missing file should produce INPUT_ERROR."""
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-file", "/tmp/definitely_not_exists_12345.json"],
                           check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "INPUT_ERROR"


class TestStructuredErrorsSubprocess:
    """Tests for structured error output."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_unknown_module_error(self):
        result = self._run(["--json", "backend", "call",
                            "--module", "nonexistent_999",
                            "--method", "getAccessToken",
                            "--body-json", "{}"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert "$schema" in output
        assert output["$schema"]["kind"] == "error"
        assert output["error"]["code"] == "UNKNOWN_MODULE"
        assert "nonexistent_999" in output["error"]["message"]

    def test_unknown_method_error(self):
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "nonExistentMethod999",
                            "--body-json", "{}"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "UNKNOWN_METHOD"

    def test_validation_error_on_call(self):
        """Test --validate flag on backend call with invalid input."""
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", '{}',
                            "--validate"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "VALIDATION_ERROR"
        assert output["error"]["detail"] is not None
        assert output["error"]["detail"]["valid"] is False

    def test_describe_unknown_module_error(self):
        result = self._run(["--json", "module", "describe",
                            "nonexistent_999"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "UNKNOWN_MODULE"

    def test_method_schema_unknown_method_error(self):
        result = self._run(["--json", "module", "method-schema",
                            "oauth2_1_0", "nonExistentMethod999"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        assert output["error"]["code"] == "UNKNOWN_METHOD"

    def test_error_envelope_structure(self):
        """Verify the full structure of a structured error."""
        result = self._run(["--json", "backend", "call",
                            "--module", "nonexistent_999",
                            "--method", "foo",
                            "--body-json", "{}"], check=False)
        assert result.returncode != 0
        output = json.loads(result.stdout)
        # Full envelope check
        assert "$schema" in output
        assert "version" in output["$schema"]
        assert "kind" in output["$schema"]
        assert "generatedAt" in output["$schema"]
        assert "source" in output["$schema"]
        assert output["$schema"]["source"]["sdk"] == "@alicloud/dingtalk"
        assert "error" in output
        assert "code" in output["error"]
        assert "message" in output["error"]
        assert "detail" in output["error"]


class TestAgentWorkflowSubprocess:
    """Agent workflow tests combining new features."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_schema_then_validate_then_template_workflow(self, tmp_dir):
        """Workflow: Agent discovers schema, validates, gets template.

        Simulates an agent preparing to call an API:
        1. Get the method schema
        2. Generate a request template
        3. Validate the template
        """
        # Step 1: Get method schema
        r1 = self._run(["--json", "module", "method-schema",
                         "oauth2_1_0", "getAccessToken"])
        assert r1.returncode == 0
        schema_envelope = json.loads(r1.stdout)
        assert schema_envelope["$schema"]["kind"] == "method_schema"
        schema_data = schema_envelope["data"]
        assert schema_data["request"]["fields"]["appKey"]["required"] is True

        # Step 2: Generate template
        r2 = self._run(["--json", "module", "template",
                         "oauth2_1_0", "getAccessToken", "--all-fields"])
        assert r2.returncode == 0
        tmpl_envelope = json.loads(r2.stdout)
        tmpl = tmpl_envelope["data"]["template"]
        assert "appKey" in tmpl
        assert "appSecret" in tmpl

        # Step 3: Fill in template and validate
        tmpl["appKey"] = "my_app_key"
        tmpl["appSecret"] = "my_app_secret"
        body = json.dumps(tmpl)
        r3 = self._run(["--json", "backend", "validate",
                         "--module", "oauth2_1_0",
                         "--method", "getAccessToken",
                         "--body-json", body])
        assert r3.returncode == 0
        val_envelope = json.loads(r3.stdout)
        assert val_envelope["data"]["valid"] is True
        print(f"\n  Agent workflow: schema -> template -> validate -> OK")

    def test_validate_fix_retry_workflow(self):
        """Workflow: Agent submits bad request, reads errors, fixes it.

        1. Submit with missing required field
        2. Parse the validation error
        3. Fix and resubmit
        """
        # Step 1: Bad request
        r1 = self._run(["--json", "backend", "validate",
                         "--module", "oauth2_1_0",
                         "--method", "getAccessToken",
                         "--body-json", '{"appSecret":"sec"}'])
        assert r1.returncode == 0
        val1 = json.loads(r1.stdout)["data"]
        assert val1["valid"] is False
        missing = [e["field"] for e in val1["errors"]]
        assert "appKey" in missing

        # Step 2: Fix by adding the missing field
        fixed_body = json.dumps({"appKey": "fixed_key", "appSecret": "sec"})
        r2 = self._run(["--json", "backend", "validate",
                         "--module", "oauth2_1_0",
                         "--method", "getAccessToken",
                         "--body-json", fixed_body])
        assert r2.returncode == 0
        val2 = json.loads(r2.stdout)["data"]
        assert val2["valid"] is True
        print(f"\n  Fix-retry workflow: {missing} -> fixed -> valid")

    def test_body_file_workflow(self, tmp_dir):
        """Workflow: Agent writes body to file, validates from file, calls.

        1. Generate template
        2. Save to file
        3. Validate from file
        """
        # Step 1: Generate template
        r1 = self._run(["--json", "module", "template",
                         "oauth2_1_0", "getAccessToken", "--all-fields"])
        assert r1.returncode == 0
        tmpl = json.loads(r1.stdout)["data"]["template"]
        tmpl["appKey"] = "file_key"
        tmpl["appSecret"] = "file_secret"

        # Step 2: Save to file
        body_path = os.path.join(tmp_dir, "request.json")
        with open(body_path, "w") as f:
            json.dump(tmpl, f)

        # Step 3: Validate from file
        r3 = self._run(["--json", "backend", "validate",
                         "--module", "oauth2_1_0",
                         "--method", "getAccessToken",
                         "--body-file", body_path])
        assert r3.returncode == 0
        val = json.loads(r3.stdout)["data"]
        assert val["valid"] is True
        print(f"\n  File workflow: template -> {body_path} -> validate OK")


# ══════════════════════════════════════════════════════════════════════
# New v1.2.0: Prerequisites, diagnostics, setup, project auth
# ══════════════════════════════════════════════════════════════════════

class TestBackendCheckEnhanced:
    """Tests for the enhanced ``backend check`` command."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_check_enhanced_json(self):
        """Enhanced check returns detailed environment info."""
        result = self._run(["--json", "backend", "check"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["available"] is True
        assert data["node_path"] is not None
        assert data["node_version"] is not None
        assert data["node_version"].startswith("v")
        assert data["sdk_path"] is not None
        assert data["dist_exists"] is True
        assert data["node_modules_exists"] is True
        assert data["package_version"] is not None
        assert data["module_count"] >= 100
        print(f"\n  Enhanced check: Node {data['node_version']}, "
              f"SDK v{data['package_version']}, {data['module_count']} modules")

    def test_check_diagnose_json(self):
        """Diagnose returns pass/fail for each prerequisite."""
        result = self._run(["--json", "backend", "check", "--diagnose"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["all_passed"] is True
        assert "All prerequisites satisfied" in data["summary"]
        checks = data["checks"]
        assert len(checks) >= 6
        check_names = [c["name"] for c in checks]
        assert "node_installed" in check_names
        assert "sdk_source" in check_names
        assert "npm_installed" in check_names
        assert "sdk_built" in check_names
        assert "bridge_script" in check_names
        assert "sdk_loadable" in check_names
        for check in checks:
            assert check["status"] == "pass"
            assert check["fix"] is None
        print(f"\n  Diagnose: {len(checks)} checks, all passed")

    def test_check_diagnose_human_output(self):
        """Diagnose human-readable output has checkmarks."""
        result = self._run(["backend", "check", "--diagnose"])
        assert result.returncode == 0
        assert "PASS" in result.stdout
        assert "node_installed" in result.stdout
        assert "sdk_built" in result.stdout
        assert "All prerequisites satisfied" in result.stdout

    def test_check_no_diagnose_backward_compat(self):
        """Check without --diagnose returns JSON with available key."""
        result = self._run(["--json", "backend", "check"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert "available" in data


class TestBackendSetupSubprocess:
    """Tests for the ``backend setup`` command."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_setup_skip_both(self):
        """Setup with both skips does nothing but succeeds if SDK is built."""
        result = self._run(["--json", "backend", "setup",
                            "--skip-install", "--skip-build"])
        assert result.returncode == 0
        data = json.loads(result.stdout)
        assert data["success"] is True
        assert data["dist_exists"] is True
        assert len(data["steps"]) == 0
        print(f"\n  Setup (skip both): success={data['success']}")

    def test_setup_skip_install_json(self):
        """Setup with --skip-install only runs build."""
        result = self._run(["--json", "backend", "setup", "--skip-install"],
                           check=False)
        data = json.loads(result.stdout)
        # Should succeed since SDK is already built
        assert data["success"] is True
        step_names = [s["name"] for s in data["steps"]]
        assert "npm_install" not in step_names
        assert "npm_build" in step_names
        print(f"\n  Setup (skip install): {step_names}")

    def test_setup_human_output(self):
        """Setup human-readable output shows step results."""
        result = self._run(["backend", "setup",
                            "--skip-install", "--skip-build"])
        assert result.returncode == 0
        assert "Setup complete" in result.stdout


class TestOAuth2RefreshSubprocess:
    """Tests for oauth2 commands with project integration."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_get_access_token_requires_credentials(self):
        """get-access-token without credentials shows INPUT_ERROR."""
        result = self._run(["--json", "oauth2", "get-access-token"], check=False)
        assert result.returncode != 0
        data = json.loads(result.stdout)
        assert data["error"]["code"] == "INPUT_ERROR"
        assert "app_key" in data["error"]["message"]

    def test_refresh_token_no_project(self):
        """refresh-token without project shows INPUT_ERROR."""
        result = self._run(["--json", "oauth2", "refresh-token"], check=False)
        assert result.returncode != 0
        data = json.loads(result.stdout)
        assert data["error"]["code"] == "INPUT_ERROR"
        assert "No project" in data["error"]["message"]

    def test_refresh_token_no_credentials(self, tmp_dir):
        """refresh-token with project but no credentials shows INPUT_ERROR."""
        proj_path = os.path.join(tmp_dir, "empty_proj.json")
        self._run(["--json", "project", "new", "-o", proj_path, "--name", "empty"])
        result = self._run(["--json", "--project", proj_path,
                            "oauth2", "refresh-token"], check=False)
        assert result.returncode != 0
        data = json.loads(result.stdout)
        assert data["error"]["code"] == "INPUT_ERROR"
        assert "app_key" in data["error"]["message"]


class TestProjectAuthInjection:
    """Tests for project-based auth injection into backend call."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_no_auto_token_flag(self):
        """--no-auto-token prevents token injection."""
        result = self._run(["--json", "backend", "call",
                            "--module", "oauth2_1_0",
                            "--method", "getAccessToken",
                            "--body-json", '{"appKey":"k","appSecret":"s"}',
                            "--no-auto-token"], check=False)
        # This will fail at the API level (no real credentials),
        # but should NOT fail with INPUT_ERROR
        output = json.loads(result.stdout)
        if result.returncode != 0:
            assert output["error"]["code"] != "INPUT_ERROR"

    def test_help_shows_auto_token(self):
        """backend call --help mentions auto-token."""
        result = self._run(["backend", "call", "--help"])
        assert result.returncode == 0
        assert "auto-token" in result.stdout.lower()


class TestPrerequisiteWorkflow:
    """Workflow tests for the prerequisites features."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True):
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
        )

    def test_full_setup_verification_workflow(self, tmp_dir):
        """Workflow: Diagnose -> Setup -> Check -> Use.

        Simulates a new user verifying their environment is ready.
        """
        # Step 1: Run diagnostics
        r1 = self._run(["--json", "backend", "check", "--diagnose"])
        assert r1.returncode == 0
        diag = json.loads(r1.stdout)
        assert diag["all_passed"] is True

        # Step 2: Enhanced check
        r2 = self._run(["--json", "backend", "check"])
        assert r2.returncode == 0
        info = json.loads(r2.stdout)
        assert info["available"] is True
        assert info["module_count"] >= 100

        # Step 3: Create project
        proj_path = os.path.join(tmp_dir, "setup_test.json")
        r3 = self._run(["--json", "project", "new", "-o", proj_path,
                         "--name", "setup-test"])
        assert r3.returncode == 0

        # Step 4: Verify project
        r4 = self._run(["--json", "--project", proj_path, "project", "info"])
        assert r4.returncode == 0
        pinfo = json.loads(r4.stdout)
        assert pinfo["name"] == "setup-test"

        # Step 5: Use the CLI for inspection
        r5 = self._run(["--json", "modules", "list"])
        assert r5.returncode == 0
        mods = json.loads(r5.stdout)
        assert len(mods["modules"]) >= 100

        print(f"\n  Prerequisites workflow: diagnose -> check -> project -> use OK")

    def test_project_token_lifecycle(self, tmp_dir):
        """Workflow: Create project with creds -> ensure token fields exist.

        Note: actual token refresh requires live DingTalk credentials,
        so we just verify the project structure supports the flow.
        """
        proj_path = os.path.join(tmp_dir, "token_test.json")

        # Step 1: Create project with credentials
        r1 = self._run(["--json", "project", "new", "-o", proj_path,
                         "--name", "token-test",
                         "--app-key", "fake_key_123",
                         "--app-secret", "fake_secret_456"])
        assert r1.returncode == 0

        # Step 2: Verify project has credential fields
        with open(proj_path) as f:
            proj = json.load(f)
        assert proj["app_key"] == "fake_key_123"
        assert proj["app_secret"] == "fake_secret_456"
        assert proj["access_token"] == ""
        assert proj["token_expires_at"] == 0

        # Step 3: Project info shows no token
        r3 = self._run(["--json", "--project", proj_path, "project", "info"])
        assert r3.returncode == 0
        info = json.loads(r3.stdout)
        assert info["token_status"] == "none"
        assert info["app_key"] == "fake_key..."

        print(f"\n  Token lifecycle: project created with creds, "
              f"token fields ready for refresh")


class TestEnvVarCredentials:
    """Tests for DINGTALK_APP_KEY / DINGTALK_APP_SECRET environment variable support."""

    CLI_BASE = _resolve_cli("cli-anything-dingtalk-nodejs-sdk")

    def _run(self, args, check=True, env_override=None):
        env = os.environ.copy()
        # Always clear DingTalk env vars to start clean
        env.pop("DINGTALK_APP_KEY", None)
        env.pop("DINGTALK_APP_SECRET", None)
        if env_override:
            env.update(env_override)
        return subprocess.run(
            self.CLI_BASE + args,
            capture_output=True,
            text=True,
            check=check,
            env=env,
        )

    def test_get_access_token_from_env_vars(self):
        """get-access-token uses DINGTALK_APP_KEY/SECRET when no flags or project."""
        # Will fail at the API level (fake creds), but should NOT fail with INPUT_ERROR
        result = self._run(
            ["--json", "oauth2", "get-access-token"],
            check=False,
            env_override={
                "DINGTALK_APP_KEY": "env_test_key",
                "DINGTALK_APP_SECRET": "env_test_secret",
            },
        )
        data = json.loads(result.stdout)
        if result.returncode != 0:
            # Should be a BACKEND_ERROR (API call failed), not INPUT_ERROR
            assert data["error"]["code"] != "INPUT_ERROR", \
                "Env vars should have been picked up — got INPUT_ERROR instead"

    def test_get_access_token_no_env_no_flags(self):
        """get-access-token without any credentials shows INPUT_ERROR mentioning env vars."""
        result = self._run(
            ["--json", "oauth2", "get-access-token"],
            check=False,
        )
        assert result.returncode != 0
        data = json.loads(result.stdout)
        assert data["error"]["code"] == "INPUT_ERROR"
        assert "DINGTALK_APP_KEY" in data["error"]["message"]

    def test_project_new_picks_up_env_vars(self, tmp_dir):
        """project new uses env vars when --app-key/--app-secret not provided."""
        proj_path = os.path.join(tmp_dir, "env_proj.json")
        result = self._run(
            ["--json", "project", "new", "-o", proj_path, "--name", "env-test"],
            env_override={
                "DINGTALK_APP_KEY": "env_key_for_proj",
                "DINGTALK_APP_SECRET": "env_secret_for_proj",
            },
        )
        assert result.returncode == 0
        with open(proj_path) as f:
            proj = json.load(f)
        assert proj["app_key"] == "env_key_for_proj"
        assert proj["app_secret"] == "env_secret_for_proj"

    def test_project_new_flags_override_env(self, tmp_dir):
        """project new --app-key/--app-secret override env vars."""
        proj_path = os.path.join(tmp_dir, "flag_proj.json")
        result = self._run(
            ["--json", "project", "new", "-o", proj_path, "--name", "flag-test",
             "--app-key", "flag_key", "--app-secret", "flag_secret"],
            env_override={
                "DINGTALK_APP_KEY": "env_key_ignored",
                "DINGTALK_APP_SECRET": "env_secret_ignored",
            },
        )
        assert result.returncode == 0
        with open(proj_path) as f:
            proj = json.load(f)
        assert proj["app_key"] == "flag_key"
        assert proj["app_secret"] == "flag_secret"

    def test_help_mentions_env_vars(self):
        """oauth2 get-access-token --help mentions environment variables."""
        result = self._run(["oauth2", "get-access-token", "--help"])
        assert result.returncode == 0
        # Help text should mention env var support
        assert "DINGTALK_APP_KEY" in result.stdout or "env" in result.stdout.lower()

    def test_project_new_picks_up_robot_code_env(self, tmp_dir):
        """project new uses DINGTALK_ROBOT_CODE env var."""
        proj_path = os.path.join(tmp_dir, "robot_proj.json")
        result = self._run(
            ["--json", "project", "new", "-o", proj_path, "--name", "robot-test"],
            env_override={"DINGTALK_ROBOT_CODE": "env_robot_code"},
        )
        assert result.returncode == 0
        with open(proj_path) as f:
            proj = json.load(f)
        assert proj["robot_code"] == "env_robot_code"

    def test_project_new_flag_overrides_robot_code_env(self, tmp_dir):
        """project new --robot-code overrides DINGTALK_ROBOT_CODE env var."""
        proj_path = os.path.join(tmp_dir, "robot_flag_proj.json")
        result = self._run(
            ["--json", "project", "new", "-o", proj_path, "--name", "flag-test",
             "--robot-code", "flag_robot"],
            env_override={"DINGTALK_ROBOT_CODE": "env_ignored"},
        )
        assert result.returncode == 0
        with open(proj_path) as f:
            proj = json.load(f)
        assert proj["robot_code"] == "flag_robot"

    def test_project_new_all_env_vars(self, tmp_dir):
        """project new picks up all three env vars."""
        proj_path = os.path.join(tmp_dir, "all_env.json")
        result = self._run(
            ["--json", "project", "new", "-o", proj_path, "--name", "all-env"],
            env_override={
                "DINGTALK_APP_KEY": "ek",
                "DINGTALK_APP_SECRET": "es",
                "DINGTALK_ROBOT_CODE": "er",
            },
        )
        assert result.returncode == 0
        with open(proj_path) as f:
            proj = json.load(f)
        assert proj["app_key"] == "ek"
        assert proj["app_secret"] == "es"
        assert proj["robot_code"] == "er"

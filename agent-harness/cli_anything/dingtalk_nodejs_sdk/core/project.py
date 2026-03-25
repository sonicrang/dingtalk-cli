"""Project / configuration management for the DingTalk CLI harness.

A "project" here is a JSON file that stores DingTalk connection settings
(app key, app secret, cached access token, default module, saved headers)
so users do not need to repeat credentials on every command.

Credentials are resolved in this priority order:
1. Explicit CLI flags (``--app-key`` / ``--app-secret``)
2. Project file fields (``app_key`` / ``app_secret``)
3. Environment variables (``DINGTALK_APP_KEY`` / ``DINGTALK_APP_SECRET``)
"""

from __future__ import annotations

import json
import os
import time
from pathlib import Path
from typing import Any, Dict, Optional


# ── Environment variable names ────────────────────────────────────────

ENV_APP_KEY = "DINGTALK_APP_KEY"
ENV_APP_SECRET = "DINGTALK_APP_SECRET"
ENV_ROBOT_CODE = "DINGTALK_ROBOT_CODE"


# ── Default project skeleton ──────────────────────────────────────────

_DEFAULT_PROJECT: Dict[str, Any] = {
    "version": 1,
    "name": "",
    "app_key": "",
    "app_secret": "",
    "robot_code": "",
    "access_token": "",
    "token_expires_at": 0,
    "default_module": "",
    "saved_headers": {},
    "notes": "",
    "created_at": 0,
    "updated_at": 0,
}


def _locked_save_json(path: str, data: dict, **dump_kwargs) -> None:
    """Atomically write JSON with exclusive file locking."""
    try:
        f = open(path, "r+")               # no truncation on open
    except FileNotFoundError:
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        f = open(path, "w")                # first save
    with f:
        _locked = False
        try:
            import fcntl
            fcntl.flock(f.fileno(), fcntl.LOCK_EX)
            _locked = True
        except (ImportError, OSError):
            pass
        try:
            f.seek(0)
            f.truncate()
            json.dump(data, f, **dump_kwargs)
            f.flush()
        finally:
            if _locked:
                import fcntl
                fcntl.flock(f.fileno(), fcntl.LOCK_UN)


# ── Public API ────────────────────────────────────────────────────────

def create_project(
    name: str = "default",
    app_key: str = "",
    app_secret: str = "",
    robot_code: str = "",
    output_path: Optional[str] = None,
) -> Dict[str, Any]:
    """Create a new project config and optionally persist it.

    Returns the project dict.
    """
    now = time.time()
    proj = {**_DEFAULT_PROJECT, "name": name, "app_key": app_key,
            "app_secret": app_secret, "robot_code": robot_code,
            "created_at": now, "updated_at": now}
    if output_path:
        _locked_save_json(output_path, proj, indent=2, ensure_ascii=False)
    return proj


def load_project(path: str) -> Dict[str, Any]:
    """Load a project config from a JSON file."""
    with open(path, "r") as f:
        data = json.load(f)
    # Merge with defaults so old files gain new keys
    merged = {**_DEFAULT_PROJECT, **data}
    return merged


def save_project(proj: Dict[str, Any], path: str) -> None:
    """Save a project config to a JSON file (locked)."""
    proj["updated_at"] = time.time()
    _locked_save_json(path, proj, indent=2, ensure_ascii=False)


def update_project(proj: Dict[str, Any], **kwargs: Any) -> Dict[str, Any]:
    """Update project fields and return the updated dict."""
    for k, v in kwargs.items():
        if k in _DEFAULT_PROJECT:
            proj[k] = v
    proj["updated_at"] = time.time()
    return proj


def project_info(proj: Dict[str, Any]) -> Dict[str, Any]:
    """Return a summary of the project suitable for display."""
    token_status = "none"
    if proj.get("access_token"):
        if proj.get("token_expires_at", 0) > time.time():
            token_status = "valid"
        else:
            token_status = "expired"
    return {
        "name": proj.get("name", ""),
        "app_key": proj.get("app_key", "")[:8] + "..." if proj.get("app_key") else "",
        "default_module": proj.get("default_module", ""),
        "token_status": token_status,
        "saved_headers_count": len(proj.get("saved_headers", {})),
        "notes": proj.get("notes", ""),
    }


def has_credentials(proj: Dict[str, Any]) -> bool:
    """Check if the project has app_key and app_secret set."""
    return bool(proj.get("app_key")) and bool(proj.get("app_secret"))


def resolve_credentials(
    *,
    cli_key: Optional[str] = None,
    cli_secret: Optional[str] = None,
    proj: Optional[Dict[str, Any]] = None,
) -> tuple:
    """Resolve app_key and app_secret from CLI flags, project, or env vars.

    Priority order:
    1. Explicit CLI flags (*cli_key* / *cli_secret*)
    2. Project file fields
    3. Environment variables (``DINGTALK_APP_KEY`` / ``DINGTALK_APP_SECRET``)

    Returns
    -------
    tuple[str, str, str]
        ``(app_key, app_secret, source)`` where *source* is one of
        ``"cli"``, ``"project"``, ``"env"``, or ``""`` if not resolved.
    """
    # 1. CLI flags
    if cli_key and cli_secret:
        return cli_key, cli_secret, "cli"

    # 2. Project file
    if proj:
        pk = proj.get("app_key", "")
        ps = proj.get("app_secret", "")
        if pk and ps:
            return pk, ps, "project"

    # 3. Environment variables
    ek = os.environ.get(ENV_APP_KEY, "")
    es = os.environ.get(ENV_APP_SECRET, "")
    if ek and es:
        return ek, es, "env"

    # Partial matches: return whatever we have (caller decides if enough)
    key = cli_key or (proj.get("app_key", "") if proj else "") or ek
    secret = cli_secret or (proj.get("app_secret", "") if proj else "") or es
    return key, secret, ""


def resolve_robot_code(
    *,
    cli_robot_code: Optional[str] = None,
    proj: Optional[Dict[str, Any]] = None,
) -> tuple:
    """Resolve robot_code from CLI flag, project, or env var.

    Priority order:
    1. Explicit CLI flag (``--robot-code``)
    2. Project file field (``robot_code``)
    3. Environment variable (``DINGTALK_ROBOT_CODE``)

    Returns
    -------
    tuple[str, str]
        ``(robot_code, source)`` where *source* is one of
        ``"cli"``, ``"project"``, ``"env"``, or ``""`` if not resolved.
    """
    if cli_robot_code:
        return cli_robot_code, "cli"
    if proj and proj.get("robot_code", ""):
        return proj["robot_code"], "project"
    env_val = os.environ.get(ENV_ROBOT_CODE, "")
    if env_val:
        return env_val, "env"
    return "", ""


def token_is_valid(proj: Dict[str, Any]) -> bool:
    """Check if the project has a non-expired access token."""
    return (
        bool(proj.get("access_token"))
        and proj.get("token_expires_at", 0) > time.time()
    )


def refresh_token(proj: Dict[str, Any], backend) -> Dict[str, Any]:
    """Fetch a new access token using the project's credentials.

    Updates the project dict in-place with the new token and expiry,
    and returns it.

    Parameters
    ----------
    proj : dict
        A project config dict with ``app_key`` and ``app_secret``.
    backend : DingTalkBackend
        The backend instance to make the API call.

    Returns
    -------
    dict
        The updated project dict.

    Raises
    ------
    RuntimeError
        If the token fetch fails.
    ValueError
        If the project lacks credentials.
    """
    if not has_credentials(proj):
        raise ValueError(
            "Project has no app_key/app_secret. "
            "Set them with: project set --field app_key=KEY --field app_secret=SECRET")

    result = backend.get_access_token(proj["app_key"], proj["app_secret"])

    # The DingTalk API returns different shapes depending on how it's called:
    # - Direct: {"accessToken": "...", "expireIn": 7200}
    # - Via SDK: {"headers": {...}, "statusCode": 200, "body": {"accessToken": "...", "expireIn": 7200}}
    if isinstance(result, dict):
        # Unwrap SDK envelope if present
        body = result.get("body", result) if "body" in result else result
        if isinstance(body, dict):
            token = body.get("accessToken") or body.get("access_token", "")
            expire_in = body.get("expireIn") or body.get("expire_in", 7200)
        else:
            token = ""
            expire_in = 7200
    else:
        raise RuntimeError(f"Unexpected token response: {result}")

    if not token:
        raise RuntimeError(f"Token fetch returned empty token. Response: {result}")

    proj["access_token"] = token
    proj["token_expires_at"] = time.time() + int(expire_in) - 60  # 60s safety margin
    proj["updated_at"] = time.time()
    return proj


def ensure_token(proj: Dict[str, Any], backend, *,
                 proj_path: Optional[str] = None) -> Dict[str, Any]:
    """Ensure the project has a valid access token, refreshing if needed.

    Parameters
    ----------
    proj : dict
        A project config dict.
    backend : DingTalkBackend
        The backend instance.
    proj_path : str, optional
        If provided, auto-saves the project after refreshing.

    Returns
    -------
    dict
        The (possibly updated) project dict.
    """
    if token_is_valid(proj):
        return proj

    if not has_credentials(proj):
        return proj  # nothing we can do

    proj = refresh_token(proj, backend)

    if proj_path:
        save_project(proj, proj_path)

    return proj

"""cli-anything-dingtalk-nodejs-sdk -- CLI harness for the DingTalk Node.js SDK.

Provides both one-shot subcommands and a REPL for interactive use.
Every command supports ``--json`` for machine-readable output.

Agent-oriented features:
- Unified schema envelope on all schema outputs (``$schema.version``)
- Schema validation before calls (``backend validate``)
- JSON body/header input (``--body-json / --body-file / --header-json / --header-file``)
- Structured JSON error output with error codes
- Request template generation (``module template``)
"""

from __future__ import annotations

import json
import os
import shlex
import sys
from typing import Any, Dict, Optional, Tuple

import click

from .core.session import SessionState
from .core.project import (
    create_project,
    load_project,
    save_project,
    update_project,
    project_info,
    has_credentials,
    resolve_credentials,
    resolve_robot_code,
    token_is_valid,
    refresh_token,
    ensure_token,
    ENV_APP_KEY,
    ENV_APP_SECRET,
    ENV_ROBOT_CODE,
)
from .core.export import export_json, export_csv, export_modules_summary, format_api_result
from .core.discovery import (
    categorize_modules,
    search_modules,
    compute_stats,
    compare_modules,
)
from .core.schema_envelope import (
    wrap_schema,
    wrap_error,
    SCHEMA_VERSION,
    VALIDATION_ERROR,
    BACKEND_ERROR,
    UNKNOWN_MODULE,
    UNKNOWN_METHOD,
    INPUT_ERROR,
    FILE_ERROR,
)
from .core.validation import validate_request, generate_template
from .utils.dingtalk_backend import DingTalkBackend

__version__ = "1.2.0"

# ── Globals (lazy-initialised per invocation) ─────────────────────────

SESSION = SessionState()
BACKEND = DingTalkBackend()


# ── Helpers ───────────────────────────────────────────────────────────

def parse_kv(pairs: Tuple[str, ...]) -> Dict[str, str]:
    """Parse ``key=value`` pairs from CLI arguments."""
    out: Dict[str, str] = {}
    for pair in pairs:
        if "=" not in pair:
            raise click.ClickException(f"Expected key=value, got: {pair}")
        key, value = pair.split("=", 1)
        out[key] = value
    return out


def _load_json_input(json_str: Optional[str], file_path: Optional[str],
                     label: str) -> Optional[Dict[str, Any]]:
    """Load JSON from a literal string or a file path.

    Exactly one of *json_str* or *file_path* may be provided.
    Returns ``None`` when neither is given.
    """
    if json_str and file_path:
        raise click.ClickException(
            f"Cannot specify both --{label}-json and --{label}-file.")
    if json_str:
        try:
            data = json.loads(json_str)
        except json.JSONDecodeError as exc:
            raise click.ClickException(
                f"Invalid JSON in --{label}-json: {exc}")
        if not isinstance(data, dict):
            raise click.ClickException(
                f"--{label}-json must be a JSON object, got {type(data).__name__}.")
        return data
    if file_path:
        if not os.path.isfile(file_path):
            raise click.ClickException(
                f"File not found: {file_path}")
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
        except json.JSONDecodeError as exc:
            raise click.ClickException(
                f"Invalid JSON in --{label}-file '{file_path}': {exc}")
        if not isinstance(data, dict):
            raise click.ClickException(
                f"--{label}-file must contain a JSON object, got {type(data).__name__}.")
        return data
    return None


def emit(payload, as_json: bool):
    """Print *payload* as JSON or human-friendly text."""
    if as_json:
        click.echo(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        if isinstance(payload, dict):
            for k, v in payload.items():
                if isinstance(v, (list, dict)):
                    click.echo(f"{k}: {json.dumps(v, ensure_ascii=False)}")
                else:
                    click.echo(f"{k}: {v}")
        elif isinstance(payload, list):
            for item in payload:
                click.echo(item)
        else:
            click.echo(str(payload))


def emit_error(code: str, message: str, as_json: bool, *,
               detail: Any = None,
               source_module: Optional[str] = None,
               source_method: Optional[str] = None) -> None:
    """Emit a structured error and exit with code 1."""
    if as_json:
        payload = wrap_error(code, message, detail=detail,
                             source_module=source_module,
                             source_method=source_method)
        click.echo(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        click.echo(f"error [{code}]: {message}", err=True)
        if detail:
            click.echo(f"  detail: {json.dumps(detail, ensure_ascii=False)}", err=True)
    sys.exit(1)


# ── Main group ────────────────────────────────────────────────────────

@click.group(invoke_without_command=True)
@click.option("--json", "as_json", is_flag=True, help="Emit machine-readable JSON output.")
@click.option("--project", "project_path", default=None, type=click.Path(),
              help="Path to a project JSON file.")
@click.version_option(version=__version__, prog_name="cli-anything-dingtalk-nodejs-sdk")
@click.pass_context
def cli(ctx, as_json: bool, project_path: str | None):
    """CLI harness for the DingTalk Node.js SDK."""
    ctx.ensure_object(dict)
    ctx.obj["json"] = as_json
    ctx.obj["project_path"] = project_path

    # Load project if given
    if project_path and os.path.isfile(project_path):
        proj = load_project(project_path)
        ctx.obj["project"] = proj
    else:
        ctx.obj["project"] = None

    if ctx.invoked_subcommand is None:
        ctx.invoke(repl_cmd, project_path=project_path)


# ── REPL ──────────────────────────────────────────────────────────────

@cli.command("repl", hidden=True)
@click.option("--project", "project_path", default=None, type=click.Path())
@click.pass_context
def repl_cmd(ctx, project_path: str | None):
    """Enter the interactive REPL."""
    as_json = ctx.obj.get("json", False)

    try:
        from .utils.repl_skin import ReplSkin

        skin = ReplSkin("dingtalk_nodejs_sdk", version=__version__)
        skin.print_banner()
        pt_session = skin.create_prompt_session()
    except Exception:
        skin = None
        pt_session = None

    proj_name = ""
    if project_path and os.path.isfile(project_path):
        try:
            proj = load_project(project_path)
            proj_name = proj.get("name", os.path.basename(project_path))
        except Exception:
            proj_name = os.path.basename(project_path)

    while True:
        try:
            if skin and pt_session:
                line = skin.get_input(pt_session, project_name=proj_name)
            elif skin:
                raw = skin.prompt(project_name=proj_name)
                line = input(raw).strip()
            else:
                line = click.prompt("dingtalk", prompt_suffix="> ",
                                    default="", show_default=False)
        except (EOFError, KeyboardInterrupt):
            if skin:
                skin.print_goodbye()
            else:
                click.echo()
            break

        line = line.strip()
        if not line:
            continue
        if line in {"exit", "quit"}:
            if skin:
                skin.print_goodbye()
            break
        if line == "help":
            _repl_help(skin)
            continue

        try:
            extra = []
            if as_json:
                extra.append("--json")
            if project_path:
                extra.extend(["--project", project_path])
            cli.main(
                args=extra + shlex.split(line),
                prog_name="",
                standalone_mode=False,
                obj={"json": as_json, "project_path": project_path, "project": ctx.obj.get("project")},
            )
        except SystemExit:
            pass
        except click.ClickException as exc:
            if skin:
                skin.error(str(exc.format_message()))
            else:
                click.echo(f"error: {exc.format_message()}")
        except Exception as exc:
            if skin:
                skin.error(str(exc))
            else:
                click.echo(f"error: {exc}")


def _repl_help(skin):
    """Print REPL help."""
    cmds = {
        "modules list": "List all SDK modules",
        "modules search <query>": "Search modules by name",
        "modules categories": "Group modules by domain",
        "modules stats": "SDK-wide statistics",
        "module methods <name>": "Show methods for a module",
        "module info <name>": "Show summary info about a module",
        "module describe <name>": "Method signatures and fields",
        "module method-schema <mod> <method>": "Detailed method schema (envelope)",
        "module template <mod> <method>": "Generate minimal request template",
        "module compare <a> <b>": "Compare two modules",
        "oauth2 get-access-token": "Get an access token",
        "oauth2 refresh-token": "Refresh project access token",
        "contact get-user": "Get user by union ID",
        "backend call": "Generic invocation (supports --body-json)",
        "backend validate": "Validate request against schema",
        "backend check": "Check backend availability",
        "backend check --diagnose": "Full prerequisite diagnostics",
        "backend setup": "Install npm deps and build SDK",
        "project new": "Create a new project config",
        "project info": "Show current project info",
        "project set": "Update project fields",
        "export json": "Export data to JSON",
        "export csv": "Export data to CSV",
        "export modules": "Export module list",
        "export methods": "Export methods detail",
        "state show": "Show current session state",
        "state set-module <name>": "Select a module",
        "state set-header k=v": "Set a saved header",
        "state history": "Show mutation history",
        "state reset": "Reset session to defaults",
        "state undo / redo": "Undo or redo a mutation",
        "state save / load": "Persist / restore session",
        "help": "Show this help",
        "exit": "Quit",
    }
    if skin:
        skin.help(cmds)
    else:
        for cmd, desc in cmds.items():
            click.echo(f"  {cmd:<35} {desc}")


# ── modules ───────────────────────────────────────────────────────────

@cli.group()
def modules():
    """SDK module discovery commands."""


@modules.command("list")
@click.pass_context
def modules_list(ctx):
    """List all available SDK modules."""
    result = BACKEND.list_modules()
    emit(result, ctx.obj["json"])


@modules.command("search")
@click.argument("query")
@click.pass_context
def modules_search(ctx, query):
    """Search modules by name pattern (substring or glob)."""
    mods = BACKEND.list_modules()
    matches = search_modules(mods.get("modules", []), query)
    emit({"query": query, "count": len(matches), "modules": matches}, ctx.obj["json"])


@modules.command("categories")
@click.pass_context
def modules_categories(ctx):
    """Group modules by domain category."""
    mods = BACKEND.list_modules()
    grouped = categorize_modules(mods.get("modules", []))
    summary = {domain: len(mods_list) for domain, mods_list in grouped.items()}
    emit({"categories": grouped, "summary": summary}, ctx.obj["json"])


@modules.command("stats")
@click.pass_context
def modules_stats_cmd(ctx):
    """Show SDK-wide statistics (module counts, top modules, domain breakdown)."""
    raw = BACKEND.modules_stats()
    stats = compute_stats(raw)
    emit(stats, ctx.obj["json"])


# ── module ────────────────────────────────────────────────────────────

@cli.group()
def module():
    """Inspect a single SDK module."""


@module.command("methods")
@click.argument("module_name")
@click.pass_context
def module_methods(ctx, module_name):
    """List methods exposed by MODULE_NAME."""
    SESSION.apply_mutation(f"select module {module_name}", {"selected_module": module_name})
    result = BACKEND.module_methods(module_name)
    emit(result, ctx.obj["json"])


@module.command("info")
@click.argument("module_name")
@click.pass_context
def module_info(ctx, module_name):
    """Show summary info about MODULE_NAME."""
    methods = BACKEND.module_methods(module_name)
    method_list = methods.get("methods", [])
    # Separate WithOptions methods from primary methods
    primary = [m for m in method_list if not m.endswith("WithOptions")]
    info = {
        "module": module_name,
        "total_methods": len(method_list),
        "primary_methods": len(primary),
        "primary_method_names": primary,
    }
    emit(info, ctx.obj["json"])


@module.command("describe")
@click.argument("module_name")
@click.option("--method", "method_filter", default=None,
              help="Filter to a specific method name.")
@click.pass_context
def module_describe(ctx, module_name, method_filter):
    """Describe MODULE_NAME with method signatures and request/response fields.

    Output is wrapped in a stable schema envelope when using --json.
    """
    as_json = ctx.obj["json"]
    SESSION.apply_mutation(f"describe module {module_name}", {"selected_module": module_name})
    try:
        result = BACKEND.module_describe(module_name)
    except RuntimeError as exc:
        msg = str(exc)
        if "Unknown module" in msg:
            emit_error(UNKNOWN_MODULE, msg, as_json, source_module=module_name)
        else:
            emit_error(BACKEND_ERROR, msg, as_json, source_module=module_name)
        return
    if method_filter:
        methods = result.get("methods", {})
        filtered = {k: v for k, v in methods.items() if method_filter.lower() in k.lower()}
        result = {
            "module": result.get("module"),
            "filter": method_filter,
            "matched_methods": len(filtered),
            "methods": filtered,
        }
    if as_json:
        wrapped = wrap_schema(result, kind="module_schema",
                              source_module=module_name)
        emit(wrapped, True)
    else:
        emit(result, False)


@module.command("method-schema")
@click.argument("module_name")
@click.argument("method_name")
@click.pass_context
def module_method_schema(ctx, module_name, method_name):
    """Show detailed request/response schema for a specific method.

    Returns deep type resolution with nested models, required/example
    annotations, API metadata (HTTP method, pathname, authType), and
    parameter locations (body/query/path).

    Output is wrapped in a stable schema envelope with version metadata.
    """
    as_json = ctx.obj["json"]
    try:
        result = BACKEND.method_describe(module_name, method_name)
    except RuntimeError as exc:
        msg = str(exc)
        if "Unknown module" in msg:
            emit_error(UNKNOWN_MODULE, msg, as_json, source_module=module_name)
        elif "Unknown method" in msg:
            emit_error(UNKNOWN_METHOD, msg, as_json,
                       source_module=module_name, source_method=method_name)
        else:
            emit_error(BACKEND_ERROR, msg, as_json,
                       source_module=module_name, source_method=method_name)
        return
    if as_json:
        wrapped = wrap_schema(result, kind="method_schema",
                              source_module=module_name,
                              source_method=method_name)
        emit(wrapped, True)
    else:
        emit(result, False)


@module.command("template")
@click.argument("module_name")
@click.argument("method_name")
@click.option("--all-fields", is_flag=True, default=False,
              help="Include all fields, not just required/example fields.")
@click.pass_context
def module_template(ctx, module_name, method_name, all_fields):
    """Generate a minimal request template for a specific API method.

    Produces a ready-to-use JSON request body with placeholder values
    derived from the schema. By default, only required fields and fields
    with @example annotations are included.  Use --all-fields to include
    every field.

    Output is wrapped in a stable schema envelope.
    """
    as_json = ctx.obj["json"]
    try:
        schema = BACKEND.method_describe(module_name, method_name)
    except RuntimeError as exc:
        msg = str(exc)
        if "Unknown module" in msg:
            emit_error(UNKNOWN_MODULE, msg, as_json, source_module=module_name)
        elif "Unknown method" in msg:
            emit_error(UNKNOWN_METHOD, msg, as_json,
                       source_module=module_name, source_method=method_name)
        else:
            emit_error(BACKEND_ERROR, msg, as_json,
                       source_module=module_name, source_method=method_name)
        return
    tmpl = generate_template(schema, required_only=not all_fields)
    if as_json:
        wrapped = wrap_schema(tmpl, kind="template",
                              source_module=module_name,
                              source_method=method_name)
        emit(wrapped, True)
    else:
        emit(tmpl, False)


@module.command("compare")
@click.argument("module_a")
@click.argument("module_b")
@click.pass_context
def module_compare(ctx, module_a, module_b):
    """Compare two modules side by side."""
    desc_a = BACKEND.module_describe(module_a)
    desc_b = BACKEND.module_describe(module_b)
    result = compare_modules(desc_a, desc_b)
    emit(result, ctx.obj["json"])


# ── oauth2 ────────────────────────────────────────────────────────────

@cli.group()
def oauth2():
    """OAuth2 authentication commands."""


@oauth2.command("get-access-token")
@click.option("--app-key", default=None, help="DingTalk app key (or from project / env).")
@click.option("--app-secret", default=None, help="DingTalk app secret (or from project / env).")
@click.pass_context
def get_access_token(ctx, app_key, app_secret):
    """Obtain an access token.

    Credentials are resolved in priority order:
    1. --app-key / --app-secret flags
    2. Project file (via --project)
    3. Environment variables DINGTALK_APP_KEY / DINGTALK_APP_SECRET
    """
    as_json = ctx.obj["json"]
    proj = ctx.obj.get("project")

    app_key, app_secret, source = resolve_credentials(
        cli_key=app_key, cli_secret=app_secret, proj=proj)

    if not app_key or not app_secret:
        emit_error(INPUT_ERROR,
                   "app_key and app_secret are required. "
                   "Provide via --app-key/--app-secret, a project file (--project), "
                   f"or environment variables ({ENV_APP_KEY} / {ENV_APP_SECRET}).",
                   as_json)
        return

    try:
        result = BACKEND.get_access_token(app_key, app_secret)
    except RuntimeError as exc:
        emit_error(BACKEND_ERROR, str(exc), as_json)
        return
    if isinstance(result, dict):
        result["credential_source"] = source
    emit(result, as_json)


@oauth2.command("refresh-token")
@click.pass_context
def oauth2_refresh_token(ctx):
    """Refresh the project's access token.

    Requires a --project with app_key and app_secret set, or
    DINGTALK_APP_KEY / DINGTALK_APP_SECRET environment variables.
    Fetches a new token and saves it to the project file.
    """
    as_json = ctx.obj["json"]
    proj = ctx.obj.get("project")
    proj_path = ctx.obj.get("project_path")

    if proj is None:
        emit_error(INPUT_ERROR,
                   "No project loaded. Use --project <path>.",
                   as_json)
        return

    # Patch in env-var credentials if project has none
    if not has_credentials(proj):
        _ak, _as, _src = resolve_credentials(proj=proj)
        if _ak and _as:
            proj["app_key"] = _ak
            proj["app_secret"] = _as
        else:
            emit_error(INPUT_ERROR,
                       "Project has no app_key/app_secret and no environment variables set. "
                       "Set them with: project set --field app_key=KEY --field app_secret=SECRET, "
                       f"or export {ENV_APP_KEY} and {ENV_APP_SECRET}.",
                       as_json)
            return

    try:
        proj = refresh_token(proj, BACKEND)
    except (RuntimeError, ValueError) as exc:
        emit_error(BACKEND_ERROR, str(exc), as_json)
        return

    # Save updated token to project file
    if proj_path:
        save_project(proj, proj_path)
    ctx.obj["project"] = proj

    info = {
        "refreshed": True,
        "token_preview": proj["access_token"][:16] + "..." if proj.get("access_token") else "",
        "expires_at": proj.get("token_expires_at", 0),
    }
    emit(info, as_json)


# ── contact ───────────────────────────────────────────────────────────

@cli.group()
def contact():
    """Contact / user management commands."""


@contact.command("get-user")
@click.option("--union-id", required=True, help="User union ID.")
@click.option("--access-token", required=True, help="Access token.")
@click.pass_context
def get_user(ctx, union_id, access_token):
    """Get user info by union ID."""
    result = BACKEND.get_user(union_id, access_token)
    emit(result, ctx.obj["json"])


# ── backend ───────────────────────────────────────────────────────────

@cli.group()
def backend():
    """Generic backend invocation."""


@backend.command("call")
@click.option("--module", "module_name", required=True, help="SDK module name.")
@click.option("--method", required=True, help="Method name to invoke.")
@click.option("--arg", "args_kv", multiple=True,
              help="Key=value argument pairs (simple values).")
@click.option("--body-json", "body_json", default=None,
              help="Request body as a JSON string.")
@click.option("--body-file", "body_file", default=None, type=click.Path(),
              help="Path to a JSON file for the request body.")
@click.option("--header", "header_kv", multiple=True,
              help="Key=value header pairs.")
@click.option("--header-json", "header_json_str", default=None,
              help="Headers as a JSON string.")
@click.option("--header-file", "header_file", default=None, type=click.Path(),
              help="Path to a JSON file for headers.")
@click.option("--validate/--no-validate", "do_validate", default=False,
              help="Validate request against schema before calling.")
@click.option("--auto-token/--no-auto-token", "auto_token", default=True,
              help="Auto-inject project access token into headers (default: on).")
@click.pass_context
def backend_call(ctx, module_name, method, args_kv,
                 body_json, body_file,
                 header_kv, header_json_str, header_file,
                 do_validate, auto_token):
    """Invoke any SDK module method.

    Request body can be provided via:
    - --arg key=value pairs (simple string values)
    - --body-json '{"key": "value"}' (structured JSON)
    - --body-file path/to/body.json (JSON file)

    Headers can be provided via:
    - --header key=value pairs
    - --header-json '{"key": "value"}'
    - --header-file path/to/headers.json

    Use --validate to check the request against the schema before calling.

    When a --project is loaded with app_key/app_secret, the access token
    is automatically fetched/refreshed and injected into headers unless
    --no-auto-token is specified.
    """
    as_json = ctx.obj["json"]

    # ── Resolve body ──────────────────────────────────────────────
    try:
        json_body = _load_json_input(body_json, body_file, "body")
    except click.ClickException as exc:
        emit_error(INPUT_ERROR, exc.format_message(), as_json,
                   source_module=module_name, source_method=method)
        return

    if args_kv and json_body:
        emit_error(INPUT_ERROR,
                   "Cannot combine --arg with --body-json/--body-file.",
                   as_json, source_module=module_name, source_method=method)
        return

    if args_kv:
        try:
            args = parse_kv(args_kv)
        except click.ClickException as exc:
            emit_error(INPUT_ERROR, exc.format_message(), as_json,
                       source_module=module_name, source_method=method)
            return
    elif json_body:
        args = json_body
    else:
        args = None

    # ── Resolve headers ───────────────────────────────────────────
    try:
        json_headers = _load_json_input(header_json_str, header_file, "header")
    except click.ClickException as exc:
        emit_error(INPUT_ERROR, exc.format_message(), as_json,
                   source_module=module_name, source_method=method)
        return

    if header_kv and json_headers:
        emit_error(INPUT_ERROR,
                   "Cannot combine --header with --header-json/--header-file.",
                   as_json, source_module=module_name, source_method=method)
        return

    if header_kv:
        try:
            headers = parse_kv(header_kv)
        except click.ClickException as exc:
            emit_error(INPUT_ERROR, exc.format_message(), as_json,
                       source_module=module_name, source_method=method)
            return
    elif json_headers:
        headers = json_headers
    else:
        headers = None

    # ── Auto-inject project token ─────────────────────────────────
    if auto_token:
        proj = ctx.obj.get("project")
        proj_path = ctx.obj.get("project_path")

        # Try project credentials first, then fall back to env vars
        _ak, _as, _src = resolve_credentials(proj=proj)
        if _ak and _as:
            if proj is None:
                # Create a transient project from env vars for token management
                proj = create_project(app_key=_ak, app_secret=_as)
            elif not has_credentials(proj):
                # Patch env-var credentials into the project
                proj["app_key"] = _ak
                proj["app_secret"] = _as

            try:
                proj = ensure_token(proj, BACKEND, proj_path=proj_path)
                ctx.obj["project"] = proj
            except (RuntimeError, ValueError):
                pass  # best-effort; don't block the call
            if proj.get("access_token"):
                if headers is None:
                    headers = {}
                # Only inject if not already set
                if "xAcsDingtalkAccessToken" not in headers:
                    headers["xAcsDingtalkAccessToken"] = proj["access_token"]

    # ── Optional pre-call validation ──────────────────────────────
    if do_validate:
        try:
            schema = BACKEND.method_describe(module_name, method)
        except RuntimeError as exc:
            emit_error(BACKEND_ERROR, str(exc), as_json,
                       source_module=module_name, source_method=method)
            return
        vresult = validate_request(schema, args)
        if not vresult["valid"]:
            emit_error(VALIDATION_ERROR,
                       "Request failed schema validation.",
                       as_json,
                       detail=vresult,
                       source_module=module_name,
                       source_method=method)
            return

    # ── Execute ───────────────────────────────────────────────────
    try:
        result = BACKEND.generic_call(module_name, method,
                                       args=args, headers=headers)
    except RuntimeError as exc:
        msg = str(exc)
        if "Unknown module" in msg:
            code = UNKNOWN_MODULE
        elif "Unknown method" in msg:
            code = UNKNOWN_METHOD
        else:
            code = BACKEND_ERROR
        emit_error(code, msg, as_json,
                   source_module=module_name, source_method=method)
        return
    emit(result, as_json)


@backend.command("validate")
@click.option("--module", "module_name", required=True, help="SDK module name.")
@click.option("--method", required=True, help="Method name to validate against.")
@click.option("--body-json", "body_json", default=None,
              help="Request body as a JSON string.")
@click.option("--body-file", "body_file", default=None, type=click.Path(),
              help="Path to a JSON file for the request body.")
@click.option("--strict", is_flag=True, default=False,
              help="Treat unknown fields as errors instead of warnings.")
@click.pass_context
def backend_validate(ctx, module_name, method, body_json, body_file, strict):
    """Validate a request body against a method's schema without calling it.

    Returns structured validation results: valid/invalid, errors list,
    warnings list, and field location map.

    Output is wrapped in a stable schema envelope.
    """
    as_json = ctx.obj["json"]

    try:
        args = _load_json_input(body_json, body_file, "body")
    except click.ClickException as exc:
        emit_error(INPUT_ERROR, exc.format_message(), as_json,
                   source_module=module_name, source_method=method)
        return

    try:
        schema = BACKEND.method_describe(module_name, method)
    except RuntimeError as exc:
        msg = str(exc)
        if "Unknown module" in msg:
            emit_error(UNKNOWN_MODULE, msg, as_json, source_module=module_name)
        elif "Unknown method" in msg:
            emit_error(UNKNOWN_METHOD, msg, as_json,
                       source_module=module_name, source_method=method)
        else:
            emit_error(BACKEND_ERROR, msg, as_json,
                       source_module=module_name, source_method=method)
        return

    vresult = validate_request(schema, args, strict=strict)
    if as_json:
        wrapped = wrap_schema(vresult, kind="validation",
                              source_module=module_name,
                              source_method=method)
        emit(wrapped, True)
    else:
        if vresult["valid"]:
            click.echo("Validation passed.")
        else:
            click.echo("Validation FAILED.")
        if vresult["errors"]:
            click.echo("Errors:")
            for e in vresult["errors"]:
                click.echo(f"  - [{e['field']}] {e['message']}")
        if vresult["warnings"]:
            click.echo("Warnings:")
            for w in vresult["warnings"]:
                click.echo(f"  - [{w['field']}] {w['message']}")


@backend.command("check")
@click.option("--diagnose", is_flag=True, default=False,
              help="Run detailed prerequisite diagnostics.")
@click.pass_context
def backend_check(ctx, diagnose):
    """Check whether the Node backend is reachable.

    Without flags, returns basic availability plus environment info.
    With --diagnose, runs a full prerequisite check with pass/fail
    for each component and suggested fixes.
    """
    as_json = ctx.obj["json"]
    if diagnose:
        result = BACKEND.diagnose()
        if as_json:
            emit(result, True)
        else:
            for check in result["checks"]:
                status = check["status"]
                icon = {"pass": "✓", "fail": "✗", "warn": "⚠"}.get(status, "?")
                click.echo(f"  {icon} [{status.upper():4s}] {check['name']}: {check['message']}")
                if check.get("fix"):
                    click.echo(f"          Fix: {check['fix']}")
            click.echo()
            click.echo(f"  {result['summary']}")
    else:
        result = BACKEND.check_enhanced()
        emit(result, as_json)


@backend.command("setup")
@click.option("--skip-install", is_flag=True, default=False,
              help="Skip npm install (only run build).")
@click.option("--skip-build", is_flag=True, default=False,
              help="Skip npm run build (only run install).")
@click.pass_context
def backend_setup(ctx, skip_install, skip_build):
    """Install npm dependencies and build the SDK.

    Runs ``npm install`` and ``npm run build`` in the ts/ directory.
    Use --skip-install or --skip-build to run only one step.
    """
    as_json = ctx.obj["json"]
    result = BACKEND.setup_sdk(skip_install=skip_install,
                                skip_build=skip_build)
    if as_json:
        emit(result, True)
    else:
        for step in result.get("steps", []):
            icon = "✓" if step["success"] else "✗"
            click.echo(f"  {icon} {step['name']}: {'OK' if step['success'] else 'FAILED'}")
            if not step["success"] and step.get("stderr_tail"):
                click.echo(f"    {step['stderr_tail'][:200]}")
        if result["success"]:
            click.echo("  Setup complete. SDK is ready.")
        else:
            click.echo(f"  Setup failed: {result.get('error', 'unknown')}", err=True)


# ── project ───────────────────────────────────────────────────────────

@cli.group()
def project():
    """Project configuration management."""


@project.command("new")
@click.option("-o", "--output", "output_path", required=True, type=click.Path(),
              help="Path for the new project JSON file.")
@click.option("--name", default="default", help="Project name.")
@click.option("--app-key", default="", help="DingTalk app key (falls back to DINGTALK_APP_KEY env var).")
@click.option("--app-secret", default="", help="DingTalk app secret (falls back to DINGTALK_APP_SECRET env var).")
@click.option("--robot-code", default="", help="DingTalk robot code (falls back to DINGTALK_ROBOT_CODE env var).")
@click.pass_context
def project_new(ctx, output_path, name, app_key, app_secret, robot_code):
    """Create a new project configuration file.

    If --app-key / --app-secret / --robot-code are not provided, falls back to
    DINGTALK_APP_KEY / DINGTALK_APP_SECRET / DINGTALK_ROBOT_CODE environment variables.
    """
    # Fall back to env vars
    if not app_key:
        app_key = os.environ.get(ENV_APP_KEY, "")
    if not app_secret:
        app_secret = os.environ.get(ENV_APP_SECRET, "")
    if not robot_code:
        robot_code = os.environ.get(ENV_ROBOT_CODE, "")

    proj = create_project(name=name, app_key=app_key, app_secret=app_secret,
                          robot_code=robot_code, output_path=output_path)
    emit({"created": output_path, "project": proj}, ctx.obj["json"])


@project.command("info")
@click.pass_context
def project_info_cmd(ctx):
    """Show info about the current project."""
    proj = ctx.obj.get("project")
    if proj is None:
        raise click.ClickException("No project loaded. Use --project <path> or project new.")
    info = project_info(proj)
    emit(info, ctx.obj["json"])


@project.command("set")
@click.option("--field", "field_kv", multiple=True, required=True,
              help="key=value field to update.")
@click.pass_context
def project_set(ctx, field_kv):
    """Update fields in the current project."""
    proj = ctx.obj.get("project")
    path = ctx.obj.get("project_path")
    if proj is None or path is None:
        raise click.ClickException("No project loaded. Use --project <path>.")
    updates = parse_kv(field_kv)
    proj = update_project(proj, **updates)
    save_project(proj, path)
    emit({"updated": list(updates.keys()), "project": proj}, ctx.obj["json"])


# ── export ────────────────────────────────────────────────────────────

@cli.group("export")
def export_group():
    """Export data to files."""


@export_group.command("json")
@click.option("-o", "--output", "output_path", required=True, type=click.Path(),
              help="Output JSON file path.")
@click.option("--overwrite", is_flag=True, help="Overwrite existing file.")
@click.pass_context
def export_json_cmd(ctx, output_path, overwrite):
    """Export current session state to JSON."""
    data = SESSION.snapshot()
    result = export_json(data, output_path, overwrite=overwrite)
    emit(result, ctx.obj["json"])


@export_group.command("csv")
@click.option("-o", "--output", "output_path", required=True, type=click.Path(),
              help="Output CSV file path.")
@click.option("--overwrite", is_flag=True, help="Overwrite existing file.")
@click.pass_context
def export_csv_cmd(ctx, output_path, overwrite):
    """Export module list as CSV."""
    mods = BACKEND.list_modules()
    rows = [{"module": m} for m in mods.get("modules", [])]
    result = export_csv(rows, output_path, overwrite=overwrite)
    emit(result, ctx.obj["json"])


@export_group.command("modules")
@click.option("-o", "--output", "output_path", required=True, type=click.Path(),
              help="Output JSON file path.")
@click.option("--overwrite", is_flag=True, help="Overwrite existing file.")
@click.pass_context
def export_modules_cmd(ctx, output_path, overwrite):
    """Export full module list to JSON."""
    mods = BACKEND.list_modules()
    result = export_modules_summary(mods.get("modules", []), output_path, overwrite=overwrite)
    emit(result, ctx.obj["json"])


@export_group.command("methods")
@click.option("-o", "--output", "output_path", required=True, type=click.Path(),
              help="Output file path (JSON or CSV based on extension).")
@click.option("--overwrite", is_flag=True, help="Overwrite existing file.")
@click.option("--module", "module_filter", default=None,
              help="Only export methods for a specific module.")
@click.pass_context
def export_methods_cmd(ctx, output_path, overwrite, module_filter):
    """Export module methods detail to JSON or CSV.

    If the output path ends in .csv, exports a flat CSV with columns:
    module, method, has_with_options, request_fields, response_fields.
    Otherwise exports detailed JSON.
    """
    mods = BACKEND.list_modules()
    module_names = mods.get("modules", [])
    if module_filter:
        module_names = [m for m in module_names if module_filter.lower() in m.lower()]
        if not module_names:
            raise click.ClickException(f"No modules matching: {module_filter}")

    all_data = {}
    for mod_name in module_names:
        desc = BACKEND.module_describe(mod_name)
        all_data[mod_name] = desc

    is_csv = output_path.lower().endswith(".csv")
    if is_csv:
        rows = []
        for mod_name, desc in all_data.items():
            for method_name, detail in desc.get("methods", {}).items():
                req_fields = ", ".join(detail.get("request", {}).get("fields", [])
                                       if detail.get("request") else [])
                resp_fields = ", ".join(detail.get("response", {}).get("fields", [])
                                        if detail.get("response") else [])
                rows.append({
                    "module": mod_name,
                    "method": method_name,
                    "has_with_options": str(detail.get("hasWithOptions", False)),
                    "request_fields": req_fields,
                    "response_fields": resp_fields,
                })
        result = export_csv(rows, output_path, overwrite=overwrite,
                            fieldnames=["module", "method", "has_with_options",
                                        "request_fields", "response_fields"])
    else:
        export_data = {
            "sdk": "@alicloud/dingtalk",
            "module_count": len(all_data),
            "modules": all_data,
        }
        result = export_json(export_data, output_path, overwrite=overwrite)
    emit(result, ctx.obj["json"])


# ── state ─────────────────────────────────────────────────────────────

@cli.group()
def state():
    """Session state management."""


@state.command("show")
@click.pass_context
def state_show(ctx):
    """Show current session state."""
    emit(SESSION.snapshot(), ctx.obj["json"])


@state.command("set-module")
@click.argument("module_name")
@click.pass_context
def state_set_module(ctx, module_name):
    """Select a default module."""
    result = SESSION.apply_mutation(f"select module {module_name}",
                                   {"selected_module": module_name})
    emit(result, ctx.obj["json"])


@state.command("set-header")
@click.option("--header", "header_kv", multiple=True, required=True,
              help="key=value header pairs.")
@click.pass_context
def state_set_header(ctx, header_kv):
    """Add or update saved headers."""
    headers = SESSION.snapshot().get("saved_headers", {}).copy()
    headers.update(parse_kv(header_kv))
    result = SESSION.apply_mutation("update saved headers", {"saved_headers": headers})
    emit(result, ctx.obj["json"])


@state.command("history")
@click.pass_context
def state_history(ctx):
    """Show mutation history."""
    emit({"history": SESSION.history_list()}, ctx.obj["json"])


@state.command("reset")
@click.pass_context
def state_reset(ctx):
    """Reset session state to defaults."""
    result = SESSION.reset()
    emit(result, ctx.obj["json"])


@state.command("undo")
@click.pass_context
def state_undo(ctx):
    """Undo the last state mutation."""
    ok, snap = SESSION.undo()
    emit({"ok": ok, "state": snap}, ctx.obj["json"])


@state.command("redo")
@click.pass_context
def state_redo(ctx):
    """Redo the last undone mutation."""
    ok, snap = SESSION.redo()
    emit({"ok": ok, "state": snap}, ctx.obj["json"])


@state.command("save")
@click.option("-o", "--output", "output_path", required=True, type=click.Path(),
              help="Session file path.")
@click.pass_context
def state_save(ctx, output_path):
    """Save session state to a file."""
    path = SESSION.save(output_path)
    emit({"saved": path}, ctx.obj["json"])


@state.command("load")
@click.argument("session_path", type=click.Path(exists=True))
@click.pass_context
def state_load(ctx, session_path):
    """Load session state from a file."""
    snap = SESSION.load(session_path)
    emit(snap, ctx.obj["json"])


# ── Entry point ───────────────────────────────────────────────────────

def main():
    cli(obj={})


if __name__ == "__main__":
    main()

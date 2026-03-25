---
name: "cli-anything-dingtalk-nodejs-sdk"
description: "CLI harness for the DingTalk Node.js SDK (@alicloud/dingtalk). Provides module discovery, method schema inspection, request validation, template generation, generic API calls with JSON input, structured error output, prerequisite diagnostics, automated setup, project-based auth with auto-token injection, session state with undo/redo, and export to JSON/CSV."
---

# cli-anything-dingtalk-nodejs-sdk

Stateful CLI and REPL for the `@alicloud/dingtalk` Node.js SDK (v1.2.0).

## Prerequisites

- **Node.js** (>= 16): `apt install nodejs` or `brew install node`
- **Python** (>= 3.10)
- The local DingTalk SDK must be built (`cd ts && npm install && npm run build`)

## Installation

```bash
cd <repo>/agent-harness
pip install -e .
```

### Verify Prerequisites

```bash
# Quick check (JSON output with environment info)
cli-anything-dingtalk-nodejs-sdk --json backend check

# Detailed diagnostics with pass/fail and fix suggestions
cli-anything-dingtalk-nodejs-sdk --json backend check --diagnose

# Auto-setup: install npm deps and build SDK
cli-anything-dingtalk-nodejs-sdk --json backend setup
```

## Command Syntax

```
cli-anything-dingtalk-nodejs-sdk [--json] [--project <path>] <command> [args...]
```

Use `--json` for machine-readable output on every command.

## Credential Configuration

Credentials and robot code are resolved in priority order:

1. **CLI flags**: `--app-key` / `--app-secret` / `--robot-code`
2. **Project file**: loaded via `--project <path>`
3. **Environment variables**: `DINGTALK_APP_KEY` / `DINGTALK_APP_SECRET` / `DINGTALK_ROBOT_CODE`

```bash
# Option 1: Environment variables (recommended for CI/scripts)
export DINGTALK_APP_KEY=your_key
export DINGTALK_APP_SECRET=your_secret
export DINGTALK_ROBOT_CODE=your_robot_code
cli-anything-dingtalk-nodejs-sdk --json oauth2 get-access-token

# Option 2: Project file
cli-anything-dingtalk-nodejs-sdk --json project new -o proj.json \
  --name myapp --app-key YOUR_KEY --app-secret YOUR_SECRET --robot-code YOUR_ROBOT_CODE
cli-anything-dingtalk-nodejs-sdk --json --project proj.json oauth2 get-access-token

# Option 3: CLI flags (one-off use)
cli-anything-dingtalk-nodejs-sdk --json oauth2 get-access-token \
  --app-key YOUR_KEY --app-secret YOUR_SECRET
```

Note: `project new` also picks up env vars — if `--app-key`/`--app-secret`/`--robot-code`
are omitted, the corresponding `DINGTALK_*` environment variables are used as defaults.

## Command Groups

| Group | Command | Description |
|-------|---------|-------------|
| `modules` | `list` | List all 121 SDK modules |
| `modules` | `search <query>` | Search modules by name (substring or glob) |
| `modules` | `categories` | Group modules by domain category |
| `modules` | `stats` | SDK-wide statistics and top modules |
| `module` | `methods <name>` | List methods for a module |
| `module` | `info <name>` | Summary info about a module |
| `module` | `describe <name>` | Method signatures with request/response fields (envelope) |
| `module` | `method-schema <mod> <method>` | Deep single-method schema (envelope) |
| `module` | `template <mod> <method>` | Generate minimal request template |
| `module` | `compare <a> <b>` | Compare two modules side by side |
| `oauth2` | `get-access-token` | Obtain access token (from flags, project, or env vars) |
| `oauth2` | `refresh-token` | Refresh project access token |
| `contact` | `get-user` | Get user by union ID |
| `backend` | `call` | Generic invocation (supports `--body-json`/`--body-file`/`--header-json`/`--header-file`/`--validate`/`--auto-token`) |
| `backend` | `validate` | Validate request body against method schema |
| `backend` | `check` | Check Node backend availability (enhanced: env info) |
| `backend` | `check --diagnose` | Full prerequisite diagnostics with fix suggestions |
| `backend` | `setup` | Install npm deps and build SDK (`--skip-install`/`--skip-build`) |
| `project` | `new` | Create project config file (picks up env vars) |
| `project` | `info` | Show current project info |
| `project` | `set` | Update project fields |
| `export` | `json` | Export session state to JSON |
| `export` | `csv` | Export module list to CSV |
| `export` | `modules` | Export full module list to JSON |
| `export` | `methods` | Export method details to JSON or CSV |
| `state` | `show` | Show session state |
| `state` | `set-module <name>` | Select a default module |
| `state` | `set-header k=v` | Set saved headers |
| `state` | `history` | Show mutation history |
| `state` | `reset` | Reset session to defaults |
| `state` | `undo / redo` | Undo or redo a mutation |
| `state` | `save -o <path>` | Persist session to file |
| `state` | `load <path>` | Restore session from file |

## Examples

```bash
# List all modules
cli-anything-dingtalk-nodejs-sdk --json modules list

# Search and filter modules
cli-anything-dingtalk-nodejs-sdk --json modules search "im"
cli-anything-dingtalk-nodejs-sdk --json modules search "crm_*"

# View domain categories and stats
cli-anything-dingtalk-nodejs-sdk --json modules categories
cli-anything-dingtalk-nodejs-sdk --json modules stats

# Inspect a module
cli-anything-dingtalk-nodejs-sdk --json module methods oauth2_1_0
cli-anything-dingtalk-nodejs-sdk --json module info contact_1_0

# Deep inspection with request/response fields (wrapped in schema envelope)
cli-anything-dingtalk-nodejs-sdk --json module describe oauth2_1_0
cli-anything-dingtalk-nodejs-sdk --json module describe oauth2_1_0 --method getAccessToken

# Single method schema (deep types, examples, API metadata)
cli-anything-dingtalk-nodejs-sdk --json module method-schema oauth2_1_0 getAccessToken

# Generate a request template (required fields + examples)
cli-anything-dingtalk-nodejs-sdk --json module template oauth2_1_0 getAccessToken
cli-anything-dingtalk-nodejs-sdk --json module template oauth2_1_0 getAccessToken --all-fields

# Validate a request body against schema
cli-anything-dingtalk-nodejs-sdk --json backend validate \
  --module oauth2_1_0 --method getAccessToken \
  --body-json '{"appKey":"k","appSecret":"s"}'

# Validate with strict mode (unknown fields are errors)
cli-anything-dingtalk-nodejs-sdk --json backend validate \
  --module oauth2_1_0 --method getAccessToken \
  --body-file request.json --strict

# Compare two modules
cli-anything-dingtalk-nodejs-sdk --json module compare im_1_0 im_2_0

# Check backend availability (enhanced: Node version, SDK path, module count)
cli-anything-dingtalk-nodejs-sdk --json backend check

# Full prerequisite diagnostics
cli-anything-dingtalk-nodejs-sdk --json backend check --diagnose

# Auto-setup: npm install + build
cli-anything-dingtalk-nodejs-sdk --json backend setup
cli-anything-dingtalk-nodejs-sdk --json backend setup --skip-install  # build only
cli-anything-dingtalk-nodejs-sdk --json backend setup --skip-build    # install only

# Get access token (from env vars, project, or flags)
export DINGTALK_APP_KEY=your_key
export DINGTALK_APP_SECRET=your_secret
cli-anything-dingtalk-nodejs-sdk --json oauth2 get-access-token

# Or with project file
cli-anything-dingtalk-nodejs-sdk --json --project proj.json oauth2 get-access-token

# Refresh project access token (fetches + saves to project file)
cli-anything-dingtalk-nodejs-sdk --json --project proj.json oauth2 refresh-token

# Generic call with JSON body input
cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module oauth2_1_0 --method getAccessToken \
  --body-json '{"appKey":"YOUR_KEY","appSecret":"YOUR_SECRET"}'

# Generic call with body from file
cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module oauth2_1_0 --method getAccessToken \
  --body-file request.json

# Generic call with JSON headers
cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module contact_1_0 --method getUser \
  --body-json '{"unionId":"xxx"}' \
  --header-json '{"xAcsDingtalkAccessToken":"TOKEN"}'

# API call with auto-injected project token
cli-anything-dingtalk-nodejs-sdk --json --project proj.json backend call \
  --module contact_1_0 --method getUser \
  --body-json '{"unionId":"uid123"}'

# Auto-token also works with env vars (no project needed for token injection)
DINGTALK_APP_KEY=key DINGTALK_APP_SECRET=secret \
  cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module contact_1_0 --method getUser \
  --body-json '{"unionId":"uid123"}'

# Disable auto-token injection
cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module oauth2_1_0 --method getAccessToken \
  --body-json '{"appKey":"k","appSecret":"s"}' \
  --no-auto-token

# Generic call with pre-call validation
cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module oauth2_1_0 --method getAccessToken \
  --body-json '{"appKey":"k","appSecret":"s"}' \
  --validate

# Legacy key=value format still works
cli-anything-dingtalk-nodejs-sdk --json backend call \
  --module oauth2_1_0 --method getAccessToken \
  --arg appKey=YOUR_KEY --arg appSecret=YOUR_SECRET

# Create and use a project (env vars auto-fill credentials if flags omitted)
cli-anything-dingtalk-nodejs-sdk --json project new -o proj.json --name myapp
cli-anything-dingtalk-nodejs-sdk --json --project proj.json project info

# Export module list
cli-anything-dingtalk-nodejs-sdk --json export modules -o modules.json --overwrite

# Export method details (JSON or CSV)
cli-anything-dingtalk-nodejs-sdk --json export methods -o methods.json --overwrite
cli-anything-dingtalk-nodejs-sdk --json export methods -o methods.csv --overwrite --module oauth2

# Session state management
cli-anything-dingtalk-nodejs-sdk --json state set-module oauth2_1_0
cli-anything-dingtalk-nodejs-sdk --json state show
cli-anything-dingtalk-nodejs-sdk --json state undo
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `DINGTALK_APP_KEY` | DingTalk app key (fallback when not in CLI flags or project) |
| `DINGTALK_APP_SECRET` | DingTalk app secret (fallback when not in CLI flags or project) |
| `DINGTALK_ROBOT_CODE` | DingTalk robot code for sending messages (fallback when not in CLI flags or project) |
| `NO_COLOR` | Disables ANSI color output in the REPL |
| `CLI_ANYTHING_NO_COLOR` | Same as above (project-specific variant) |

## Schema Envelope

All schema-related outputs (`module describe`, `module method-schema`,
`module template`, `backend validate`) are wrapped in a stable envelope:

```json
{
  "$schema": {
    "version": "1.0.0",
    "kind": "method_schema | module_schema | template | validation | error",
    "generatedAt": 1700000000.0,
    "source": { "sdk": "@alicloud/dingtalk", "module": "...", "method": "..." }
  },
  "data": { ... }
}
```

## Structured Errors

When `--json` is used, errors return a machine-readable envelope:

```json
{
  "$schema": { "version": "1.0.0", "kind": "error", ... },
  "error": {
    "code": "VALIDATION_ERROR | BACKEND_ERROR | UNKNOWN_MODULE | UNKNOWN_METHOD | INPUT_ERROR",
    "message": "Human-readable description",
    "detail": { ... }
  }
}
```

## Agent Guidance

- Always use `--json` to parse output programmatically.
- **Recommended workflow**: `module method-schema` -> `module template` -> `backend validate` -> `backend call`.
- Use `module template <mod> <method>` to get a ready-to-fill request body with placeholder values.
- Use `backend validate` to check your request before calling — saves a round-trip on malformed requests.
- Use `--body-json` or `--body-file` for structured JSON input (preferred over `--arg key=value`).
- Use `--header-json` or `--header-file` for structured headers.
- Check the `$schema.kind` field to distinguish response types.
- On error, check `error.code` to determine the fix:
  - `UNKNOWN_MODULE` / `UNKNOWN_METHOD` — typo in module or method name.
  - `VALIDATION_ERROR` — fix the fields listed in `error.detail.errors`.
  - `INPUT_ERROR` — fix the CLI argument syntax.
  - `BACKEND_ERROR` — API-level error (check credentials, network, etc.).
- Use `modules search` or `modules categories` to find relevant modules quickly.
- Use `modules stats` to understand the SDK landscape before diving in.
- Use `module describe <name>` to see method signatures and field names/types.
- Use `module compare` to understand differences between API versions (e.g. im_1_0 vs im_2_0).
- Use `export methods` to generate comprehensive API references in JSON or CSV.
- Use `project new` to persist credentials across commands.
- Use `state save` / `state load` to persist session state between invocations.
- Use `backend check --diagnose` to verify all prerequisites before first use.
- Use `backend setup` to auto-install npm deps and build the SDK.
- Set `DINGTALK_APP_KEY` / `DINGTALK_APP_SECRET` env vars for CI/scripting workflows.
- The `backend call` command auto-injects access tokens from project or env vars (disable with `--no-auto-token`).
- Live API calls require valid DingTalk credentials and network access.
- Module/method discovery works offline against the local SDK.

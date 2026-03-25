# cli-anything-dingtalk-nodejs-sdk

CLI harness for the DingTalk Node.js SDK (`@alicloud/dingtalk`).

Provides module discovery, method inspection, generic API calls, project
configuration, session state with undo/redo, and export to JSON/CSV.

> **Disclaimer**: This project was generated using [CLI-Anything](https://github.com/HKUDS/CLI-Anything) and is intended **for learning purposes only**. Most features have **not** been validated through real-world testing. Use at your own risk in production environments.

## Prerequisites

1. **Node.js** (>= 16):

   ```bash
   apt install nodejs    # Debian/Ubuntu
   brew install node     # macOS
   ```

2. **Build the local SDK**:

   ```bash
   cd <repo>/ts
   npm install
   npm run build
   ```

   Or use the automated setup command after installation:

   ```bash
   cli-anything-dingtalk-nodejs-sdk backend setup
   ```

3. **Python** (>= 3.10)

## Installation

```bash
cd <repo>/agent-harness
pip install -e .
```

Verify:

```bash
which cli-anything-dingtalk-nodejs-sdk
cli-anything-dingtalk-nodejs-sdk --help
```

### Verify Prerequisites

Run the diagnostic check to verify all prerequisites are satisfied:

```bash
# Quick check (JSON output with environment info)
cli-anything-dingtalk-nodejs-sdk --json backend check

# Detailed diagnostics with pass/fail and fix suggestions
cli-anything-dingtalk-nodejs-sdk --json backend check --diagnose

# Auto-setup: install npm deps and build SDK
cli-anything-dingtalk-nodejs-sdk --json backend setup
```

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

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `DINGTALK_APP_KEY` | DingTalk app key (fallback when not in CLI flags or project) |
| `DINGTALK_APP_SECRET` | DingTalk app secret (fallback when not in CLI flags or project) |
| `DINGTALK_ROBOT_CODE` | DingTalk robot code for sending messages (fallback when not in CLI flags or project) |
| `NO_COLOR` | Disables ANSI color output in the REPL |
| `CLI_ANYTHING_NO_COLOR` | Same as above (project-specific variant) |

## Usage

### One-shot commands

```bash
# List all 121 SDK modules
cli-anything-dingtalk-nodejs-sdk --json modules list

# Search modules by name (substring or glob)
cli-anything-dingtalk-nodejs-sdk --json modules search "im"
cli-anything-dingtalk-nodejs-sdk --json modules search "crm_*"

# Group modules by domain category
cli-anything-dingtalk-nodejs-sdk --json modules categories

# SDK-wide statistics (counts, top modules, domain breakdown)
cli-anything-dingtalk-nodejs-sdk --json modules stats

# Inspect methods for a module
cli-anything-dingtalk-nodejs-sdk --json module methods oauth2_1_0
cli-anything-dingtalk-nodejs-sdk --json module info contact_1_0

# Deep inspection: method signatures with request/response fields and types
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

# Compare two modules side by side
cli-anything-dingtalk-nodejs-sdk --json module compare im_1_0 im_2_0

# Check backend availability (enhanced: shows Node version, SDK path, module count)
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
cli-anything-dingtalk-nodejs-sdk --json export csv -o modules.csv --overwrite

# Export method details (JSON or CSV, optionally filtered by module)
cli-anything-dingtalk-nodejs-sdk --json export methods -o methods.json --overwrite
cli-anything-dingtalk-nodejs-sdk --json export methods -o methods.csv --overwrite --module oauth2

# Session state management
cli-anything-dingtalk-nodejs-sdk --json state show
cli-anything-dingtalk-nodejs-sdk --json state set-module oauth2_1_0
cli-anything-dingtalk-nodejs-sdk --json state undo
cli-anything-dingtalk-nodejs-sdk --json state save -o session.json
cli-anything-dingtalk-nodejs-sdk --json state load session.json
```

### Interactive REPL

Run with no subcommand to enter the REPL:

```bash
cli-anything-dingtalk-nodejs-sdk
```

Type `help` for available commands, `exit` to quit.

## Running Tests

```bash
cd <repo>/agent-harness
pip install -e .
pip install pytest

# Run all tests
python3 -m pytest cli_anything/dingtalk_nodejs_sdk/tests/ -v -s

# Run with force-installed mode (verifies PATH installation)
CLI_ANYTHING_FORCE_INSTALLED=1 python3 -m pytest cli_anything/dingtalk_nodejs_sdk/tests/ -v -s
```

## Architecture

- **CLI version**: 1.2.0
- **Wrapped backend**: `@alicloud/dingtalk` v2.2.29 (121 API modules)
- **Backend CLI**: `node` + `node_bridge.js` (custom bridge)

The CLI is a Python Click frontend that calls the real Node.js SDK via a
bridge script (`node_bridge.js`). It does **not** reimplement any DingTalk
APIs in Python.

### Backend Engine

- **Language**: TypeScript/JavaScript compiled to `ts/dist/index.js`
- **Framework**: `@alicloud/openapi-client` + `@alicloud/tea-typescript`
- **Pattern**: Each module has a `default` export (client class) with methods
  like `getAccessToken`, `getUser`, etc., plus `*WithOptions` variants for
  custom headers/runtime config.

### Data Model

- SDK modules are keyed by name (e.g. `oauth2_1_0`, `contact_1_0`)
- Each module exports Request/Response/Headers classes alongside the client
- API calls accept typed Request objects or plain JS objects
- Responses have a `.toMap()` method for JSON serialisation

### Node Bridge

The bridge script (`node_bridge.js`) loads the local SDK from `ts/dist/index.js`,
accepts JSON payloads on stdin, and supports the following actions:

- `list_modules` — module discovery
- `module_methods` — method inspection
- `module_describe` / `method_describe` — schema introspection with deep field types
- `modules_stats` — SDK-wide statistics
- `call` — instantiates the client, invokes the method, serialises the result;
  supports `*WithOptions` methods for custom headers

### Schema Introspection

The bridge provides rich schema information for request/response parameters:

- **Deep type resolution**: Nested Tea Model classes are recursively resolved
  into JSON-serializable schemas (up to 4 levels for module_describe, 6 for
  method_describe). Types include primitives, arrays, maps, and nested models.
- **JSDoc annotations**: `@remarks This parameter is required.` and `@example`
  values are extracted from `.d.ts` files and merged into field schemas.
- **API metadata**: HTTP method, pathname, authType, protocol, and other
  routing metadata are extracted from the `WithOptions` method source code.
- **Parameter locations**: Each request field is classified as `body`, `query`,
  or `path` based on how it is used in the `WithOptions` method.
- **Path parameters**: Template variables in pathname (e.g. `${corpId}`) are
  detected and listed separately.
- **Method descriptions**: Chinese/English descriptions from JSDoc comments.

Each field in the schema has the structure:
```json
{
  "type": "string | number | boolean | { type: array, itemType: ... } | { type: map, ... } | { type: model, className: ..., fields: {...} }",
  "wireName": "the_json_key",
  "required": true,
  "example": "value"
}
```

## Design Decisions

1. **Python frontend, Node backend**: The CLI is a Python Click app that calls
   Node.js to invoke the real SDK — using the real software, not reimplementing it.

2. **No live API calls in tests**: Module discovery and method inspection work
   offline against the local SDK. Live API calls require valid DingTalk
   credentials.

3. **Session state**: In-memory with optional file persistence and undo/redo.
   The REPL maintains state across commands; one-shot CLI invocations start
   fresh unless `--project` is specified.

4. **Project files**: JSON configs storing app credentials, default module,
   cached access token with expiry, and saved headers. Token auto-refresh is
   supported when credentials are present.

5. **Unified schema envelope**: All schema outputs use a stable JSON envelope
   with `$schema.version` so agents can reliably parse and depend on the format.

6. **Pre-call validation**: `backend validate` and `backend call --validate`
   check request fields against the schema before making API calls.

7. **Structured errors**: All errors in `--json` mode return a machine-readable
   error object with code, message, and optional detail.

8. **Prerequisite diagnostics**: `backend check --diagnose` provides pass/fail
   for each infrastructure component with fix suggestions. `backend setup`
   automates npm install + build.

9. **Project auth injection**: When a project with app credentials is loaded,
   `backend call` automatically fetches/refreshes the access token and injects
   it into request headers. Disable with `--no-auto-token`.

## Command Reference

| Group | Command | Description |
|-------|---------|-------------|
| `modules` | `list` | List all SDK modules |
| `modules` | `search <query>` | Search modules by name (substring or glob) |
| `modules` | `categories` | Group modules by domain category |
| `modules` | `stats` | SDK-wide statistics and top modules |
| `module` | `methods <name>` | List methods for a module |
| `module` | `info <name>` | Summary info (method count, primary methods) |
| `module` | `describe <name>` | Method signatures with request/response fields (schema envelope) |
| `module` | `method-schema <mod> <method>` | Deep single-method schema (schema envelope) |
| `module` | `template <mod> <method>` | Generate minimal request template |
| `module` | `compare <a> <b>` | Compare two modules side by side |
| `oauth2` | `get-access-token` | Obtain access token (from flags, project, or env vars) |
| `oauth2` | `refresh-token` | Refresh project access token |
| `contact` | `get-user` | Convenience: get user by union ID |
| `backend` | `call` | Generic invocation (supports `--body-json`/`--body-file`/`--header-json`/`--header-file`/`--validate`/`--auto-token`) |
| `backend` | `validate` | Validate request against method schema |
| `backend` | `check` | Check Node backend availability (enhanced: env info) |
| `backend` | `check --diagnose` | Full prerequisite diagnostics with fix suggestions |
| `backend` | `setup` | Install npm deps and build SDK |
| `project` | `new` | Create project config file (picks up env vars) |
| `project` | `info` | Show project info |
| `project` | `set` | Update project fields |
| `export` | `json` | Export session to JSON |
| `export` | `csv` | Export module list to CSV |
| `export` | `modules` | Export full module list to JSON |
| `export` | `methods` | Export methods detail to JSON or CSV |
| `state` | `show` | Show session state |
| `state` | `set-module` | Select default module |
| `state` | `set-header` | Set saved headers |
| `state` | `history` | Show mutation history |
| `state` | `reset` | Reset session |
| `state` | `undo` / `redo` | Undo / redo mutations |
| `state` | `save` / `load` | Persist / restore session |

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

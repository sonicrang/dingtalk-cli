# DINGTALK-NODEJS-SDK CLI-Anything Harness

## Target Software

- **Source path**: `/root/.openclaw/workspace/projects/dingtalk-nodejs-sdk`
- **Wrapped backend**: Local Node.js package in `ts/` (`@alicloud/dingtalk` v2.2.29)
- **Backend package name**: `@alicloud/dingtalk`
- **Module count**: 121 API modules (oauth2, contact, im, robot, calendar, etc.)
- **Backend CLI**: `node` + `node_bridge.js` (custom bridge)
- **CLI version**: 1.2.0

## Architecture

The DingTalk Node.js SDK is a TypeScript library that provides typed clients
for 121 DingTalk open platform APIs. Each module (e.g. `oauth2_1_0`,
`contact_1_0`, `robot_1_0`) exports a client class with methods corresponding
to API endpoints.

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

The CLI does **not** reimplement the SDK in Python. Instead it uses a Node.js
bridge script (`node_bridge.js`) that:

1. Loads the local SDK from `ts/dist/index.js`
2. Accepts JSON payloads on stdin
3. Supports actions: `list_modules`, `module_methods`, `module_describe`,
   `method_describe`, `modules_stats`, `call`
4. For `call`: instantiates the client, invokes the method, serialises result
5. Supports `*WithOptions` methods for custom headers

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
  "type": "string" | "number" | "boolean" | { "type": "array", "itemType": ... } | { "type": "map", ... } | { "type": "model", "className": "...", "fields": {...} },
  "wireName": "the_json_key",
  "required": true,      // optional, from @remarks
  "example": "value"     // optional, from @example
}
```

### Unified Schema Envelope (v1.1.0)

All schema-related commands (`module describe`, `module method-schema`,
`module template`, `backend validate`) wrap their output in a stable
envelope when `--json` is used:

```json
{
  "$schema": {
    "version": "1.0.0",
    "kind": "method_schema | module_schema | template | validation | error",
    "generatedAt": 1700000000.0,
    "source": {
      "sdk": "@alicloud/dingtalk",
      "module": "oauth2_1_0",
      "method": "getAccessToken"
    }
  },
  "data": { ... }
}
```

Error responses use the same envelope with an `error` key:

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

## Command Map

| Command Group | Commands | Description |
|--------------|----------|-------------|
| `modules` | `list`, `search <query>`, `categories`, `stats` | Module discovery, search, categorization, statistics |
| `module` | `methods <name>`, `info <name>`, `describe <name>`, `method-schema <mod> <method>`, `template <mod> <method>`, `compare <a> <b>` | Inspect, describe (with deep field types/annotations/API metadata), generate request templates, compare modules |
| `oauth2` | `get-access-token`, `refresh-token` | Token management (from flags or project credentials) |
| `contact` | `get-user` | Convenience wrapper |
| `backend` | `call`, `validate`, `check`, `check --diagnose`, `setup` | Generic invocation with JSON input, schema validation, prerequisite diagnostics, automated SDK build |
| `project` | `new`, `info`, `set` | Project config management |
| `export` | `json`, `csv`, `modules`, `methods` | Export data to files (including method-level detail) |
| `state` | `show`, `set-module`, `set-header`, `history`, `reset`, `undo`, `redo`, `save`, `load` | Session state management |

## Design Decisions

1. **Python frontend, Node backend**: The CLI is a Python Click app that calls
   Node.js to invoke the real SDK. This follows the HARNESS.md principle of
   using the real software, not reimplementing it.

2. **No live API calls in tests**: Module discovery and method inspection work
   offline against the local SDK. Live API calls require valid DingTalk
   credentials. Tests focus on offline operations.

3. **Session state**: In-memory with optional file persistence and undo/redo.
   The REPL maintains state across commands; one-shot CLI invocations start
   fresh unless `--project` is specified.

4. **Project files**: JSON configs storing app credentials, default module,
   cached access token with expiry, and saved headers. Enables reuse across
   sessions. Token auto-refresh is supported when credentials are present.

5. **Unified schema envelope**: All schema outputs use a stable JSON envelope
   with `$schema.version` so agents can reliably parse and depend on the
   format across CLI versions.

6. **Pre-call validation**: `backend validate` and `backend call --validate`
   check request fields against the schema before making API calls, catching
   errors early.

7. **Structured errors**: All errors in `--json` mode return a machine-readable
   error object with code, message, and optional detail, enabling agents to
   diagnose and auto-fix issues.

8. **Prerequisite diagnostics** (v1.2.0): `backend check --diagnose` provides
   pass/fail for each infrastructure component (Node.js, npm deps, SDK build,
   bridge script, SDK loading) with fix suggestions. `backend setup` automates
   npm install + build.

9. **Project auth injection** (v1.2.0): When a project with app credentials
   is loaded, `backend call` automatically fetches/refreshes the access token
   and injects it into request headers. Disable with `--no-auto-token`.

## Dependencies

- **Node.js** (>= 16): Required to run the bridge and SDK
- **Local SDK build**: `cd ts && npm install && npm run build`
- **Python** (>= 3.10): For the CLI itself
- **click** (>= 8.0): CLI framework
- **prompt-toolkit** (>= 3.0): REPL interface

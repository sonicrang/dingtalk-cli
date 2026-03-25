# TEST.md -- DingTalk Node.js SDK CLI Harness

## Part 1: Test Plan

### Test Inventory

| File | Type | Estimated Tests |
|------|------|-----------------|
| `test_core.py` | Unit tests | 101 |
| `test_full_e2e.py` | E2E + subprocess tests | 88 |

### Unit Test Plan (`test_core.py`)

#### `core/session.py` -- SessionState (~11 tests)

- `test_initial_state`: Verify default state structure
- `test_apply_mutation`: Apply a mutation and verify state change
- `test_mutation_records_history`: Verify history list grows
- `test_undo_basic`: Undo a single mutation
- `test_redo_basic`: Redo after undo
- `test_undo_empty`: Undo with no history returns False
- `test_redo_empty`: Redo with no redo stack returns False
- `test_multiple_undo_redo`: Chain of mutations then undo/redo
- `test_reset_clears_all`: Reset clears state, undo, redo
- `test_save_load_roundtrip`: Save to file, load back, verify state
- `test_snapshot_is_deep_copy`: Verify snapshot returns deep copy

#### `core/project.py` -- Project management (~9 tests)

- `test_create_project_defaults`: Create with defaults
- `test_create_project_with_fields`: Create with app_key/secret
- `test_create_project_writes_file`: Verify file is written
- `test_load_project`: Load a saved project
- `test_save_load_roundtrip`: Save then load, verify equality
- `test_update_project`: Update specific fields
- `test_project_info_no_token`: Info with no token shows "none"
- `test_project_info_with_expired_token`: Info with expired token
- `test_project_info_with_valid_token`: Info with valid token

#### `core/export.py` -- Export functions (~7 tests)

- `test_export_json_basic`: Export dict to JSON file
- `test_export_json_no_overwrite`: Error when file exists
- `test_export_json_overwrite`: Overwrite flag works
- `test_export_csv_basic`: Export list of dicts to CSV
- `test_export_csv_empty`: Error on empty data
- `test_export_modules_summary`: Export module list
- `test_format_api_result`: Wrap result with metadata

#### `core/discovery.py` -- Discovery functions (~17 tests)

- `test_categorize_known_module`: Categorize known modules (10 domains)
- `test_categorize_unknown_module`: Unknown module returns "other"
- `test_categorize_modules_groups_correctly`: Group multiple modules
- `test_categorize_modules_sorted`: Output domains are sorted
- `test_search_substring`: Search by substring match
- `test_search_case_insensitive`: Case-insensitive search
- `test_search_glob`: Glob pattern matching
- `test_search_no_match`: Empty results for no match
- `test_search_empty_query`: Empty query matches all
- `test_compute_stats_basic`: Compute stats with top 10, totals
- `test_compute_stats_domain_breakdown`: Verify domain method counts
- `test_compute_stats_empty`: Handle empty input
- `test_compare_disjoint_modules`: Compare modules with no overlap
- `test_compare_overlapping_modules`: Compare modules with shared methods
- `test_compare_identical_modules`: Compare identical modules

#### Backend unit tests (~7 tests)

- `test_list_modules_calls_run`: Verify list_modules payload
- `test_get_access_token_calls_run`: Verify getAccessToken payload
- `test_get_user_calls_run`: Verify getUser payload
- `test_generic_call_with_headers`: Verify generic_call with headers
- `test_module_describe_calls_run`: Verify module_describe payload
- `test_modules_stats_calls_run`: Verify modules_stats payload
- `test_method_describe_calls_run`: Verify method_describe payload

#### `core/schema_envelope.py` -- Schema envelope tests (~6 tests) [NEW v1.1.0]

- `test_wrap_schema_basic`: Verify envelope structure with all source fields
- `test_wrap_schema_without_method`: Verify envelope without method source
- `test_wrap_error_basic`: Verify error envelope structure
- `test_wrap_error_with_detail`: Verify error with detail and source
- `test_schema_version_constant`: Verify version constant
- `test_error_code_constants`: Verify error code constants

#### `core/validation.py` -- Validation tests (~16 tests) [NEW v1.1.0]

- `test_valid_request`: Valid request passes
- `test_missing_required_field`: Missing required field produces error
- `test_type_mismatch_string`: String type mismatch detected
- `test_type_mismatch_number`: Number type mismatch detected
- `test_type_mismatch_boolean`: Boolean type mismatch detected
- `test_unknown_field_warning`: Unknown field produces warning (not error)
- `test_unknown_field_strict_error`: Strict mode makes unknown fields errors
- `test_field_locations`: Body/query locations reported correctly
- `test_path_param_location`: Path parameters detected from API metadata
- `test_array_type_check`: Array type passes with list value
- `test_array_type_mismatch`: Non-list fails array type check
- `test_model_type_check`: Dict passes model type check
- `test_map_type_check`: Dict passes map type check
- `test_no_request_schema`: Method with no request schema accepts empty args
- `test_no_request_schema_with_args_warning`: Args on schema-less method warns
- `test_none_args_missing_required`: None args with required fields fails
- `test_empty_args_missing_required`: Empty dict with required fields fails

#### `core/validation.py` -- Template generation tests (~10 tests) [NEW v1.1.0]

- `test_template_required_only`: Only required fields in default mode
- `test_template_all_fields`: All fields included with required_only=False
- `test_template_with_examples`: @example values used as placeholders
- `test_template_nested_model`: Nested models generate template structure
- `test_template_no_request`: No-request method produces empty template
- `test_template_curl_hint`: curl command generated correctly
- `test_template_curl_hint_get`: GET method curl hint
- `test_template_cli_hint`: CLI command hint generated
- `test_template_headers`: Headers template generated for methods with headers

#### `core/project.py` -- Credential/token management tests (~16 tests) [NEW v1.2.0]

- `test_has_credentials_true`: Project with both key and secret
- `test_has_credentials_false_no_key`: Missing app_key
- `test_has_credentials_false_no_secret`: Missing app_secret
- `test_has_credentials_false_empty`: Default project has no credentials
- `test_token_is_valid_true`: Valid non-expired token
- `test_token_is_valid_false_expired`: Expired token
- `test_token_is_valid_false_no_token`: No token set
- `test_token_is_valid_false_empty_token`: Empty string token
- `test_refresh_token_success`: Successful token refresh via fake backend
- `test_refresh_token_no_credentials`: Error when project has no credentials
- `test_refresh_token_backend_error`: Backend API error propagated
- `test_refresh_token_empty_response`: Empty token in response detected
- `test_ensure_token_already_valid`: Skips refresh when token is valid
- `test_ensure_token_refreshes_expired`: Refreshes when token is expired
- `test_ensure_token_no_credentials_noop`: No-op when project has no credentials
- `test_ensure_token_saves_to_file`: Token saved to project file after refresh

#### Backend diagnostics tests (~4 tests) [NEW v1.2.0]

- `test_find_node_returns_path`: find_node returns path or None
- `test_check_enhanced_structure`: Enhanced check returns all expected fields
- `test_diagnose_structure`: Diagnose returns checks list with pass/fail/warn
- `test_setup_sdk_no_ts_dir`: Setup fails gracefully when ts/ dir missing

### E2E Test Plan (`test_full_e2e.py`)

#### Backend integration tests (~16 tests)

These require Node.js and the built SDK. They invoke the real Node bridge.

- `test_backend_list_modules`: List modules, verify count >= 100
- `test_backend_module_methods_oauth2`: Verify oauth2 methods include getAccessToken
- `test_backend_module_methods_contact`: Verify contact methods include getUser
- `test_backend_module_methods_robot`: Verify robot methods include batchSendOTO
- `test_backend_module_methods_invalid`: Invalid module raises RuntimeError
- `test_backend_is_available`: is_available() returns True
- `test_backend_module_info_structure`: Verify method count > 0
- `test_backend_module_describe`: Verify describe returns fields and types
- `test_backend_module_describe_query_params`: Query params detected correctly
- `test_backend_module_describe_invalid`: Invalid module raises RuntimeError
- `test_backend_method_describe`: Deep single-method schema verification
- `test_backend_method_describe_with_examples`: @example annotations extracted
- `test_backend_method_describe_nested_types`: Nested model types resolved
- `test_backend_method_describe_path_params`: Path params detected
- `test_backend_method_describe_invalid`: Invalid method raises error
- `test_backend_modules_stats`: Verify stats return counts >= expected

#### CLI subprocess tests (~25 tests)

These test the installed `cli-anything-dingtalk-nodejs-sdk` command via subprocess.

- `test_help`: `--help` exits 0, shows command groups
- `test_version`: `--version` exits 0, shows version 1.1.0
- `test_modules_list_json`: `--json modules list` returns valid JSON with modules
- `test_module_methods_json`: `--json module methods oauth2_1_0` returns methods
- `test_module_info_json`: `--json module info contact_1_0` returns info
- `test_state_show_json`: `--json state show` returns state
- `test_state_set_module_json`: `--json state set-module oauth2_1_0`
- `test_backend_check_json`: `--json backend check` returns availability
- `test_modules_search_json`: `--json modules search "im"` finds IM modules
- `test_modules_search_glob_json`: `--json modules search "im_*"` glob matching
- `test_modules_categories_json`: `--json modules categories` groups by domain
- `test_modules_stats_json`: `--json modules stats` returns statistics
- `test_module_describe_json`: Schema envelope on module describe
- `test_module_describe_with_filter_json`: Schema envelope on filtered describe
- `test_module_method_schema_json`: Schema envelope on method-schema
- `test_module_method_schema_nested_json`: Nested types in envelope
- `test_module_compare_json`: Compare two modules
- `test_project_new_json`: Create project file via CLI
- `test_export_json_cli`: Export session to JSON file
- `test_export_modules_cli`: Export modules to JSON file
- `test_export_csv_cli`: Export modules to CSV file
- `test_export_methods_json_cli`: Export methods detail to JSON
- `test_export_methods_csv_cli`: Export methods detail to CSV

#### Template subprocess tests (~6 tests) [NEW v1.1.0]

- `test_template_basic_json`: Template with schema envelope, curl/cli hints
- `test_template_all_fields_json`: --all-fields includes all fields
- `test_template_with_examples_json`: @example values in templates
- `test_template_with_headers_json`: Headers template generated
- `test_template_invalid_module`: Structured UNKNOWN_MODULE error
- `test_template_invalid_method`: Structured UNKNOWN_METHOD error

#### Validate subprocess tests (~8 tests) [NEW v1.1.0]

- `test_validate_valid_request`: Valid body passes validation
- `test_validate_missing_required`: Missing required field flagged
- `test_validate_unknown_field_warning`: Unknown field produces warning
- `test_validate_strict_mode`: Strict mode makes unknown fields errors
- `test_validate_with_body_file`: Validation from file
- `test_validate_invalid_module`: Structured error for bad module
- `test_validate_empty_body`: Empty body fails required checks
- `test_validate_query_params`: Query param locations verified

#### JSON input subprocess tests (~7 tests) [NEW v1.1.0]

- `test_body_json_and_arg_conflict`: --arg + --body-json conflict detected
- `test_body_json_and_body_file_conflict`: --body-json + --body-file conflict
- `test_header_json_and_header_conflict`: --header + --header-json conflict
- `test_body_file_loading`: --body-file loads JSON correctly
- `test_header_file_loading`: --header-file loads JSON correctly
- `test_invalid_body_json`: Invalid JSON produces INPUT_ERROR
- `test_body_file_not_found`: Missing file produces INPUT_ERROR

#### Structured error subprocess tests (~6 tests) [NEW v1.1.0]

- `test_unknown_module_error`: UNKNOWN_MODULE error with envelope
- `test_unknown_method_error`: UNKNOWN_METHOD error with envelope
- `test_validation_error_on_call`: --validate flag produces VALIDATION_ERROR
- `test_describe_unknown_module_error`: UNKNOWN_MODULE on module describe
- `test_method_schema_unknown_method_error`: UNKNOWN_METHOD on method-schema
- `test_error_envelope_structure`: Full error envelope structure verified

### Realistic Workflow Scenarios

#### Workflow 1: SDK Discovery Pipeline

**Simulates**: Developer exploring DingTalk API before integration.

1. `modules list` -- discover available modules
2. `module info oauth2_1_0` -- inspect oauth2 module
3. `module methods contact_1_0` -- find contact methods
4. `export modules -o modules.json` -- save module list for reference

**Verified**: Module count, method names, exported file content.

#### Workflow 2: Project Setup and State Management

**Simulates**: Setting up a project config, managing state across commands.

1. `project new -o proj.json --name myapp --app-key AK --app-secret AS`
2. `--project proj.json project info` -- verify project loaded
3. `state set-module oauth2_1_0` -- select module
4. `state show` -- verify state

**Verified**: State transitions, file persistence.

#### Workflow 3: Export Pipeline

**Simulates**: Exporting SDK metadata for documentation or CI.

1. `export modules -o mods.json --overwrite` -- export module list
2. `export csv -o mods.csv --overwrite` -- export as CSV
3. `export json -o state.json --overwrite` -- export session state

**Verified**: File existence, file size > 0, correct format, content validation.

#### Workflow 4: Deep Module Inspection Pipeline

**Simulates**: Developer doing a deep dive into messaging modules.

1. `modules search "im"` -- find IM-related modules
2. `modules stats` -- understand SDK landscape
3. `module describe im_1_0 --method sendMessage` -- inspect method signature
4. `module compare im_1_0 im_2_0` -- compare API versions
5. `export methods -o im_methods.csv --module im_1_0` -- export method details

**Verified**: Search results, stats accuracy, describe fields, compare counts, CSV content.

#### Workflow 5: Categorize then Export

**Simulates**: Generating a categorized SDK overview for documentation.

1. `modules categories` -- group modules by domain
2. Pick messaging domain modules
3. `export methods -o messaging.json --module <mod>` -- export methods

**Verified**: Category grouping, module membership, exported file content.

#### Workflow 6: Agent Schema -> Template -> Validate -> Call [NEW v1.1.0]

**Simulates**: Agent preparing to call an API following the recommended workflow.

1. `module method-schema oauth2_1_0 getAccessToken` -- get schema with envelope
2. `module template oauth2_1_0 getAccessToken --all-fields` -- generate template
3. Fill in template values
4. `backend validate --module oauth2_1_0 --method getAccessToken --body-json <filled>` -- validate
5. `backend call --module oauth2_1_0 --method getAccessToken --body-json <filled>` -- call

**Verified**: Schema envelope, template fields, validation pass, call execution.

#### Workflow 7: Agent Validate-Fix-Retry [NEW v1.1.0]

**Simulates**: Agent submits bad request, reads errors, fixes it.

1. `backend validate` with missing required field -- get validation errors
2. Parse error.detail.errors to find missing field
3. Fix request body
4. `backend validate` again -- passes

**Verified**: Validation error details, fix-retry cycle works.

#### Workflow 8: Agent Body File [NEW v1.1.0]

**Simulates**: Agent writes request to file, validates, calls.

1. `module template` -- generate template
2. Write to file
3. `backend validate --body-file request.json` -- validate from file

**Verified**: File-based input, validation from file.

#### Enhanced check subprocess tests (~4 tests) [NEW v1.2.0]

- `test_check_enhanced_json`: Enhanced check returns environment info (Node version, SDK path, module count)
- `test_check_diagnose_json`: Diagnose returns pass/fail checks with fix suggestions
- `test_check_diagnose_human_output`: Human-readable output has checkmarks
- `test_check_no_diagnose_backward_compat`: Basic check still returns available key

#### Backend setup subprocess tests (~3 tests) [NEW v1.2.0]

- `test_setup_skip_both`: Setup with both skips succeeds if SDK built
- `test_setup_skip_install_json`: --skip-install only runs build
- `test_setup_human_output`: Human-readable output shows step results

#### OAuth2 refresh subprocess tests (~3 tests) [NEW v1.2.0]

- `test_get_access_token_requires_credentials`: Error when no credentials provided
- `test_refresh_token_no_project`: Error when no project loaded
- `test_refresh_token_no_credentials`: Error when project has no credentials

#### Project auth injection tests (~2 tests) [NEW v1.2.0]

- `test_no_auto_token_flag`: --no-auto-token prevents token injection
- `test_help_shows_auto_token`: Help text mentions auto-token option

#### Workflow 9: Full Setup Verification [NEW v1.2.0]

**Simulates**: New user verifying their environment is ready.

1. `backend check --diagnose` -- verify all prerequisites
2. `backend check` -- get environment details
3. `project new` -- create project config
4. `project info` -- verify project
5. `modules list` -- use CLI for inspection

**Verified**: All prerequisites pass, project creation, CLI usage.

#### Workflow 10: Project Token Lifecycle [NEW v1.2.0]

**Simulates**: Setting up project with credentials for token management.

1. `project new --app-key KEY --app-secret SECRET` -- create with creds
2. Verify project file has credential and token fields
3. `project info` -- verify token status is "none"

**Verified**: Project structure supports token lifecycle.

---

## Part 2: Test Results

Last run: 2026-03-25 (v1.2.0 post-refine)

### Summary Statistics

| Metric | Value |
|--------|-------|
| Total tests | 189 |
| Passed | 189 |
| Failed | 0 |
| Pass rate | **100%** |
| Execution time | ~134s |

### Test Breakdown

| Test File | Class | Count | Status |
|-----------|-------|-------|--------|
| `test_core.py` | `TestSessionState` | 11 | All pass |
| `test_core.py` | `TestProject` | 9 | All pass |
| `test_core.py` | `TestExport` | 7 | All pass |
| `test_core.py` | `TestBackendUnit` | 7 | All pass |
| `test_core.py` | `TestDiscoveryCategorize` | 4 | All pass |
| `test_core.py` | `TestDiscoverySearch` | 5 | All pass |
| `test_core.py` | `TestDiscoveryStats` | 3 | All pass |
| `test_core.py` | `TestDiscoveryCompare` | 3 | All pass |
| `test_core.py` | `TestSchemaEnvelope` | 6 | All pass |
| `test_core.py` | `TestValidation` | 16 | All pass |
| `test_core.py` | `TestTemplateGeneration` | 10 | All pass |
| `test_core.py` | `TestProjectCredentials` | 16 | All pass (NEW v1.2.0) |
| `test_core.py` | `TestBackendDiagnostics` | 4 | All pass (NEW v1.2.0) |
| `test_full_e2e.py` | `TestBackendIntegration` | 16 | All pass |
| `test_full_e2e.py` | `TestCLISubprocess` | 23 | All pass |
| `test_full_e2e.py` | `TestWorkflowSubprocess` | 5 | All pass |
| `test_full_e2e.py` | `TestTemplateSubprocess` | 6 | All pass |
| `test_full_e2e.py` | `TestValidateSubprocess` | 8 | All pass |
| `test_full_e2e.py` | `TestJsonInputSubprocess` | 7 | All pass |
| `test_full_e2e.py` | `TestStructuredErrorsSubprocess` | 6 | All pass |
| `test_full_e2e.py` | `TestAgentWorkflowSubprocess` | 3 | All pass |
| `test_full_e2e.py` | `TestBackendCheckEnhanced` | 4 | All pass (NEW v1.2.0) |
| `test_full_e2e.py` | `TestBackendSetupSubprocess` | 3 | All pass (NEW v1.2.0) |
| `test_full_e2e.py` | `TestOAuth2RefreshSubprocess` | 3 | All pass (NEW v1.2.0) |
| `test_full_e2e.py` | `TestProjectAuthInjection` | 2 | All pass (NEW v1.2.0) |
| `test_full_e2e.py` | `TestPrerequisiteWorkflow` | 2 | All pass (NEW v1.2.0) |

### Coverage Notes

- **Unit tests**: All core modules (session, project, export, discovery, backend,
  schema_envelope, validation) fully tested with synthetic data. No external
  dependencies required. New: project credential/token management (has_credentials,
  token_is_valid, refresh_token, ensure_token) tested with 16 scenarios including
  edge cases. Backend diagnostics tested with monkeypatched methods.
- **E2E tests**: All backend integration tests invoke the real Node.js SDK via the
  bridge. All 121 modules verified as loadable. Module describe verified with field
  introspection. Method describe verified with deep types and annotations.
- **Subprocess tests**: All CLI commands tested via the installed binary, including
  template, validate, JSON input, structured errors, enhanced check, diagnose,
  setup, oauth2 refresh-token, and project auth injection commands.
- **Workflow tests**: Ten multi-step scenarios covering discovery, state management,
  export, deep inspection, categorization, agent schema/template/validate workflows,
  fix-retry cycles, file-based input, full setup verification, and project token
  lifecycle.
- **Not tested**: Live API calls (require valid DingTalk credentials and network).
  REPL interactive mode (requires TTY). Full `backend setup` with real npm install
  (tested with --skip-install/--skip-build flags to avoid long running npm commands).

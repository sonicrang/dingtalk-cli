"""Unit tests for cli-anything-dingtalk-nodejs-sdk core modules.

All tests use synthetic data and require no external dependencies
(no Node.js, no network, no DingTalk credentials).
"""

from __future__ import annotations

import csv
import json
import os
import time

import pytest

from cli_anything.dingtalk_nodejs_sdk.core.session import SessionState
from cli_anything.dingtalk_nodejs_sdk.core.project import (
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
from cli_anything.dingtalk_nodejs_sdk.core.export import (
    export_json,
    export_csv,
    export_modules_summary,
    format_api_result,
)
from cli_anything.dingtalk_nodejs_sdk.core.discovery import (
    categorize_module,
    categorize_modules,
    search_modules,
    compute_stats,
    compare_modules,
)
from cli_anything.dingtalk_nodejs_sdk.core.schema_envelope import (
    wrap_schema,
    wrap_error,
    SCHEMA_VERSION,
    VALIDATION_ERROR,
    BACKEND_ERROR,
    UNKNOWN_MODULE,
    INPUT_ERROR,
)
from cli_anything.dingtalk_nodejs_sdk.core.validation import (
    validate_request,
    generate_template,
)
from cli_anything.dingtalk_nodejs_sdk.utils.dingtalk_backend import DingTalkBackend, find_node


# ── Fixtures ──────────────────────────────────────────────────────────

@pytest.fixture
def tmp_dir(tmp_path):
    return str(tmp_path)


# ══════════════════════════════════════════════════════════════════════
# SessionState tests
# ══════════════════════════════════════════════════════════════════════

class TestSessionState:
    def test_initial_state(self):
        s = SessionState()
        snap = s.snapshot()
        assert snap["selected_module"] is None
        assert snap["saved_headers"] == {}
        assert snap["saved_config"] == {}
        assert snap["history"] == []

    def test_apply_mutation(self):
        s = SessionState()
        result = s.apply_mutation("set module", {"selected_module": "oauth2_1_0"})
        assert result["selected_module"] == "oauth2_1_0"
        assert s.state["selected_module"] == "oauth2_1_0"

    def test_mutation_records_history(self):
        s = SessionState()
        s.apply_mutation("first", {"selected_module": "a"})
        s.apply_mutation("second", {"selected_module": "b"})
        assert len(s.history_list()) == 2
        assert s.history_list() == ["first", "second"]

    def test_undo_basic(self):
        s = SessionState()
        s.apply_mutation("set module", {"selected_module": "oauth2_1_0"})
        ok, snap = s.undo()
        assert ok is True
        assert snap["selected_module"] is None

    def test_redo_basic(self):
        s = SessionState()
        s.apply_mutation("set module", {"selected_module": "oauth2_1_0"})
        s.undo()
        ok, snap = s.redo()
        assert ok is True
        assert snap["selected_module"] == "oauth2_1_0"

    def test_undo_empty(self):
        s = SessionState()
        ok, snap = s.undo()
        assert ok is False
        assert snap["selected_module"] is None

    def test_redo_empty(self):
        s = SessionState()
        ok, snap = s.redo()
        assert ok is False
        assert snap["selected_module"] is None

    def test_multiple_undo_redo(self):
        s = SessionState()
        s.apply_mutation("m1", {"selected_module": "a"})
        s.apply_mutation("m2", {"selected_module": "b"})
        s.apply_mutation("m3", {"selected_module": "c"})
        assert s.state["selected_module"] == "c"

        ok, snap = s.undo()
        assert ok and snap["selected_module"] == "b"
        ok, snap = s.undo()
        assert ok and snap["selected_module"] == "a"
        ok, snap = s.redo()
        assert ok and snap["selected_module"] == "b"

    def test_reset_clears_all(self):
        s = SessionState()
        s.apply_mutation("m1", {"selected_module": "a"})
        s.apply_mutation("m2", {"saved_headers": {"x": "1"}})
        result = s.reset()
        assert result["selected_module"] is None
        assert result["saved_headers"] == {}
        assert result["history"] == []
        # undo/redo should be empty
        ok, _ = s.undo()
        assert ok is False

    def test_save_load_roundtrip(self, tmp_dir):
        s = SessionState()
        s.apply_mutation("set module", {"selected_module": "contact_1_0"})
        s.apply_mutation("set header", {"saved_headers": {"x-token": "abc"}})
        path = os.path.join(tmp_dir, "session.json")
        s.save(path)

        s2 = SessionState()
        loaded = s2.load(path)
        assert loaded["selected_module"] == "contact_1_0"
        assert loaded["saved_headers"] == {"x-token": "abc"}

    def test_snapshot_is_deep_copy(self):
        s = SessionState()
        s.apply_mutation("set", {"saved_headers": {"a": "1"}})
        snap = s.snapshot()
        snap["saved_headers"]["b"] = "2"
        assert "b" not in s.state["saved_headers"]


# ══════════════════════════════════════════════════════════════════════
# Project tests
# ══════════════════════════════════════════════════════════════════════

class TestProject:
    def test_create_project_defaults(self):
        proj = create_project()
        assert proj["name"] == "default"
        assert proj["app_key"] == ""
        assert proj["version"] == 1
        assert proj["created_at"] > 0

    def test_create_project_with_fields(self):
        proj = create_project(name="myapp", app_key="ak123", app_secret="sk456")
        assert proj["name"] == "myapp"
        assert proj["app_key"] == "ak123"
        assert proj["app_secret"] == "sk456"

    def test_create_project_writes_file(self, tmp_dir):
        path = os.path.join(tmp_dir, "proj.json")
        proj = create_project(name="test", output_path=path)
        assert os.path.isfile(path)
        with open(path) as f:
            data = json.load(f)
        assert data["name"] == "test"

    def test_load_project(self, tmp_dir):
        path = os.path.join(tmp_dir, "proj.json")
        create_project(name="loaded", app_key="key1", output_path=path)
        loaded = load_project(path)
        assert loaded["name"] == "loaded"
        assert loaded["app_key"] == "key1"

    def test_save_load_roundtrip(self, tmp_dir):
        path = os.path.join(tmp_dir, "proj.json")
        proj = create_project(name="roundtrip", output_path=path)
        proj["notes"] = "test notes"
        save_project(proj, path)
        loaded = load_project(path)
        assert loaded["notes"] == "test notes"

    def test_update_project(self):
        proj = create_project()
        updated = update_project(proj, name="updated", default_module="im_1_0")
        assert updated["name"] == "updated"
        assert updated["default_module"] == "im_1_0"

    def test_project_info_no_token(self):
        proj = create_project(name="notoken")
        info = project_info(proj)
        assert info["token_status"] == "none"
        assert info["name"] == "notoken"

    def test_project_info_with_expired_token(self):
        proj = create_project(name="expired")
        proj["access_token"] = "tok123"
        proj["token_expires_at"] = time.time() - 100  # expired
        info = project_info(proj)
        assert info["token_status"] == "expired"

    def test_project_info_with_valid_token(self):
        proj = create_project(name="valid")
        proj["access_token"] = "tok123"
        proj["token_expires_at"] = time.time() + 3600  # valid
        info = project_info(proj)
        assert info["token_status"] == "valid"


# ══════════════════════════════════════════════════════════════════════
# Export tests
# ══════════════════════════════════════════════════════════════════════

class TestExport:
    def test_export_json_basic(self, tmp_dir):
        path = os.path.join(tmp_dir, "out.json")
        result = export_json({"key": "value"}, path)
        assert result["format"] == "json"
        assert result["file_size"] > 0
        with open(path) as f:
            data = json.load(f)
        assert data["key"] == "value"

    def test_export_json_no_overwrite(self, tmp_dir):
        path = os.path.join(tmp_dir, "exists.json")
        export_json({"a": 1}, path)
        with pytest.raises(FileExistsError):
            export_json({"b": 2}, path, overwrite=False)

    def test_export_json_overwrite(self, tmp_dir):
        path = os.path.join(tmp_dir, "overwrite.json")
        export_json({"a": 1}, path)
        result = export_json({"b": 2}, path, overwrite=True)
        assert result["file_size"] > 0
        with open(path) as f:
            data = json.load(f)
        assert data["b"] == 2

    def test_export_csv_basic(self, tmp_dir):
        path = os.path.join(tmp_dir, "out.csv")
        rows = [{"name": "mod1", "methods": "3"}, {"name": "mod2", "methods": "5"}]
        result = export_csv(rows, path)
        assert result["format"] == "csv"
        assert result["row_count"] == 2
        with open(path) as f:
            reader = csv.DictReader(f)
            loaded = list(reader)
        assert len(loaded) == 2
        assert loaded[0]["name"] == "mod1"

    def test_export_csv_empty(self, tmp_dir):
        path = os.path.join(tmp_dir, "empty.csv")
        with pytest.raises(ValueError, match="No data"):
            export_csv([], path)

    def test_export_modules_summary(self, tmp_dir):
        path = os.path.join(tmp_dir, "mods.json")
        modules = ["oauth2_1_0", "contact_1_0", "im_1_0"]
        result = export_modules_summary(modules, path)
        assert result["format"] == "json"
        with open(path) as f:
            data = json.load(f)
        assert data["module_count"] == 3
        assert "oauth2_1_0" in data["modules"]

    def test_format_api_result(self):
        result = format_api_result({"token": "abc"}, module="oauth2_1_0",
                                   method="getAccessToken")
        assert result["module"] == "oauth2_1_0"
        assert result["method"] == "getAccessToken"
        assert result["result"]["token"] == "abc"
        assert "timestamp" in result


# ══════════════════════════════════════════════════════════════════════
# DingTalkBackend unit tests (monkeypatched)
# ══════════════════════════════════════════════════════════════════════

class TestBackendUnit:
    def test_list_modules_calls_run(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {"modules": ["a", "b"]}

        monkeypatch.setattr(backend, "_run", fake_run)
        result = backend.list_modules()
        assert result == {"modules": ["a", "b"]}
        assert seen["payload"]["action"] == "list_modules"

    def test_get_access_token_calls_run(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {"accessToken": "tok"}

        monkeypatch.setattr(backend, "_run", fake_run)
        result = backend.get_access_token("ak", "sk")
        assert result == {"accessToken": "tok"}
        assert seen["payload"]["module"] == "oauth2_1_0"
        assert seen["payload"]["method"] == "getAccessToken"
        assert seen["payload"]["args"]["appKey"] == "ak"

    def test_get_user_calls_run(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {"nick": "user"}

        monkeypatch.setattr(backend, "_run", fake_run)
        result = backend.get_user("uid123", "tok456")
        assert seen["payload"]["module"] == "contact_1_0"
        assert seen["payload"]["headers"]["xAcsDingtalkAccessToken"] == "tok456"

    def test_generic_call_with_headers(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {"ok": True}

        monkeypatch.setattr(backend, "_run", fake_run)
        backend.generic_call("im_1_0", "sendMessage",
                             args={"text": "hi"}, headers={"x-token": "t"})
        assert seen["payload"]["module"] == "im_1_0"
        assert seen["payload"]["method"] == "sendMessage"
        assert seen["payload"]["headers"]["x-token"] == "t"

    def test_module_describe_calls_run(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {"module": "oauth2_1_0", "primaryMethods": 2, "methods": {}}

        monkeypatch.setattr(backend, "_run", fake_run)
        result = backend.module_describe("oauth2_1_0")
        assert seen["payload"]["action"] == "module_describe"
        assert seen["payload"]["module"] == "oauth2_1_0"
        assert result["module"] == "oauth2_1_0"

    def test_modules_stats_calls_run(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {"moduleCount": 3, "totalMethods": 10, "totalPrimaryMethods": 5,
                    "modules": {"a": {"total": 4, "primary": 2},
                                "b": {"total": 4, "primary": 2},
                                "c": {"total": 2, "primary": 1}}}

        monkeypatch.setattr(backend, "_run", fake_run)
        result = backend.modules_stats()
        assert seen["payload"]["action"] == "modules_stats"
        assert result["moduleCount"] == 3

    def test_method_describe_calls_run(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")
        seen = {}

        def fake_run(payload):
            seen["payload"] = payload
            return {
                "module": "oauth2_1_0",
                "method": "getAccessToken",
                "hasWithOptions": True,
                "request": {
                    "className": "GetAccessTokenRequest",
                    "fields": {
                        "appKey": {"type": "string", "wireName": "appKey", "required": True},
                        "appSecret": {"type": "string", "wireName": "appSecret"},
                    },
                },
                "response": {
                    "className": "GetAccessTokenResponseBody",
                    "fields": {
                        "accessToken": {"type": "string", "wireName": "accessToken"},
                        "expireIn": {"type": "number", "wireName": "expireIn"},
                    },
                },
                "headers": None,
                "api": {
                    "action": "GetAccessToken",
                    "method": "POST",
                    "pathname": "/v1.0/oauth2/accessToken",
                    "authType": "Anonymous",
                },
                "description": "获取企业accessToken",
            }

        monkeypatch.setattr(backend, "_run", fake_run)
        result = backend.method_describe("oauth2_1_0", "getAccessToken")
        assert seen["payload"]["action"] == "method_describe"
        assert seen["payload"]["module"] == "oauth2_1_0"
        assert seen["payload"]["method"] == "getAccessToken"
        assert result["module"] == "oauth2_1_0"
        assert result["method"] == "getAccessToken"
        assert result["request"]["fields"]["appKey"]["required"] is True
        assert result["api"]["method"] == "POST"


# ══════════════════════════════════════════════════════════════════════
# Discovery tests
# ══════════════════════════════════════════════════════════════════════

class TestDiscoveryCategorize:
    def test_categorize_known_module(self):
        assert categorize_module("im_1_0") == "messaging"
        assert categorize_module("im_2_0") == "messaging"
        assert categorize_module("contact_1_0") == "contacts"
        assert categorize_module("calendar_1_0") == "calendar"
        assert categorize_module("oauth2_1_0") == "auth"
        assert categorize_module("hrm_1_0") == "hr"
        assert categorize_module("doc_1_0") == "documents"
        assert categorize_module("drive_1_0") == "storage"
        assert categorize_module("todo_1_0") == "tasks"
        assert categorize_module("crm_1_0") == "crm"

    def test_categorize_unknown_module(self):
        assert categorize_module("unknown_module_999") == "other"

    def test_categorize_modules_groups_correctly(self):
        mods = ["im_1_0", "contact_1_0", "oauth2_1_0", "calendar_1_0", "unknown_1_0"]
        result = categorize_modules(mods)
        assert "messaging" in result
        assert "im_1_0" in result["messaging"]
        assert "contacts" in result
        assert "contact_1_0" in result["contacts"]
        assert "auth" in result
        assert "oauth2_1_0" in result["auth"]
        assert "other" in result
        assert "unknown_1_0" in result["other"]

    def test_categorize_modules_sorted(self):
        mods = ["crm_1_0", "im_1_0", "auth_1_0"]
        result = categorize_modules(mods)
        domains = list(result.keys())
        assert domains == sorted(domains)


class TestDiscoverySearch:
    def test_search_substring(self):
        mods = ["im_1_0", "im_2_0", "contact_1_0", "impaas_1_0", "calendar_1_0"]
        result = search_modules(mods, "im")
        assert result == ["im_1_0", "im_2_0", "impaas_1_0"]

    def test_search_case_insensitive(self):
        mods = ["IM_1_0", "contact_1_0"]
        result = search_modules(mods, "im")
        assert result == ["IM_1_0"]

    def test_search_glob(self):
        mods = ["im_1_0", "im_2_0", "impaas_1_0", "contact_1_0"]
        result = search_modules(mods, "im_*")
        assert result == ["im_1_0", "im_2_0"]

    def test_search_no_match(self):
        mods = ["im_1_0", "contact_1_0"]
        result = search_modules(mods, "nonexistent")
        assert result == []

    def test_search_empty_query(self):
        mods = ["im_1_0", "contact_1_0"]
        result = search_modules(mods, "")
        assert len(result) == 2  # empty substring matches all


class TestDiscoveryStats:
    def test_compute_stats_basic(self):
        raw = {
            "moduleCount": 3,
            "totalMethods": 20,
            "totalPrimaryMethods": 10,
            "modules": {
                "im_1_0": {"total": 10, "primary": 5},
                "contact_1_0": {"total": 6, "primary": 3},
                "oauth2_1_0": {"total": 4, "primary": 2},
            },
        }
        stats = compute_stats(raw)
        assert stats["module_count"] == 3
        assert stats["total_methods"] == 20
        assert stats["total_primary_methods"] == 10
        assert len(stats["top_10_modules"]) == 3
        assert stats["top_10_modules"][0]["module"] == "im_1_0"
        assert "methods_by_domain" in stats

    def test_compute_stats_domain_breakdown(self):
        raw = {
            "moduleCount": 2,
            "totalMethods": 10,
            "totalPrimaryMethods": 5,
            "modules": {
                "im_1_0": {"total": 6, "primary": 3},
                "oauth2_1_0": {"total": 4, "primary": 2},
            },
        }
        stats = compute_stats(raw)
        domains = stats["methods_by_domain"]
        assert "messaging" in domains
        assert "auth" in domains
        assert domains["messaging"] == 3
        assert domains["auth"] == 2

    def test_compute_stats_empty(self):
        raw = {"moduleCount": 0, "totalMethods": 0, "totalPrimaryMethods": 0,
               "modules": {}}
        stats = compute_stats(raw)
        assert stats["module_count"] == 0
        assert stats["top_10_modules"] == []


class TestDiscoveryCompare:
    def test_compare_disjoint_modules(self):
        desc_a = {"module": "mod_a", "primaryMethods": 2,
                  "methods": {"foo": {}, "bar": {}}}
        desc_b = {"module": "mod_b", "primaryMethods": 2,
                  "methods": {"baz": {}, "qux": {}}}
        result = compare_modules(desc_a, desc_b)
        assert result["module_a"] == "mod_a"
        assert result["module_b"] == "mod_b"
        assert result["shared_count"] == 0
        assert result["only_in_a_count"] == 2
        assert result["only_in_b_count"] == 2

    def test_compare_overlapping_modules(self):
        desc_a = {"module": "a", "primaryMethods": 3,
                  "methods": {"shared": {}, "only_a": {}, "shared2": {}}}
        desc_b = {"module": "b", "primaryMethods": 2,
                  "methods": {"shared": {}, "only_b": {}, "shared2": {}}}
        result = compare_modules(desc_a, desc_b)
        assert result["shared_count"] == 2
        assert "shared" in result["shared_methods"]
        assert "shared2" in result["shared_methods"]
        assert result["only_in_a"] == ["only_a"]
        assert result["only_in_b"] == ["only_b"]

    def test_compare_identical_modules(self):
        desc = {"module": "x", "primaryMethods": 2,
                "methods": {"a": {}, "b": {}}}
        result = compare_modules(desc, desc)
        assert result["shared_count"] == 2
        assert result["only_in_a_count"] == 0
        assert result["only_in_b_count"] == 0


# ══════════════════════════════════════════════════════════════════════
# Schema envelope tests
# ══════════════════════════════════════════════════════════════════════

class TestSchemaEnvelope:
    def test_wrap_schema_basic(self):
        data = {"module": "oauth2_1_0", "method": "getAccessToken"}
        result = wrap_schema(data, kind="method_schema",
                             source_module="oauth2_1_0",
                             source_method="getAccessToken")
        assert "$schema" in result
        assert result["$schema"]["version"] == SCHEMA_VERSION
        assert result["$schema"]["kind"] == "method_schema"
        assert result["$schema"]["generatedAt"] > 0
        assert result["$schema"]["source"]["sdk"] == "@alicloud/dingtalk"
        assert result["$schema"]["source"]["module"] == "oauth2_1_0"
        assert result["$schema"]["source"]["method"] == "getAccessToken"
        assert result["data"] == data

    def test_wrap_schema_without_method(self):
        data = {"module": "oauth2_1_0", "methods": {}}
        result = wrap_schema(data, kind="module_schema",
                             source_module="oauth2_1_0")
        assert result["$schema"]["kind"] == "module_schema"
        assert "method" not in result["$schema"]["source"]
        assert result["data"] == data

    def test_wrap_error_basic(self):
        result = wrap_error("UNKNOWN_MODULE", "Module not found: foo")
        assert "$schema" in result
        assert result["$schema"]["kind"] == "error"
        assert result["$schema"]["version"] == SCHEMA_VERSION
        assert "error" in result
        assert result["error"]["code"] == "UNKNOWN_MODULE"
        assert result["error"]["message"] == "Module not found: foo"
        assert result["error"]["detail"] is None

    def test_wrap_error_with_detail(self):
        detail = {"errors": [{"field": "appKey", "message": "missing"}]}
        result = wrap_error("VALIDATION_ERROR", "Validation failed",
                            detail=detail,
                            source_module="oauth2_1_0",
                            source_method="getAccessToken")
        assert result["error"]["code"] == "VALIDATION_ERROR"
        assert result["error"]["detail"] == detail
        assert result["$schema"]["source"]["module"] == "oauth2_1_0"
        assert result["$schema"]["source"]["method"] == "getAccessToken"

    def test_schema_version_constant(self):
        assert SCHEMA_VERSION == "1.0.0"

    def test_error_code_constants(self):
        assert VALIDATION_ERROR == "VALIDATION_ERROR"
        assert BACKEND_ERROR == "BACKEND_ERROR"
        assert UNKNOWN_MODULE == "UNKNOWN_MODULE"
        assert INPUT_ERROR == "INPUT_ERROR"


# ══════════════════════════════════════════════════════════════════════
# Validation tests
# ══════════════════════════════════════════════════════════════════════

# Synthetic method schemas for testing
_SIMPLE_SCHEMA = {
    "module": "test_1_0",
    "method": "testMethod",
    "request": {
        "className": "TestMethodRequest",
        "fields": {
            "name": {"type": "string", "wireName": "name", "required": True},
            "count": {"type": "number", "wireName": "count"},
            "active": {"type": "boolean", "wireName": "active"},
        },
    },
    "response": {
        "className": "TestMethodResponseBody",
        "fields": {"result": {"type": "string", "wireName": "result"}},
    },
    "api": {
        "method": "POST",
        "pathname": "/v1.0/test/method",
        "paramLocations": {"name": "body", "count": "query"},
    },
    "description": "Test method",
}

_NESTED_SCHEMA = {
    "module": "test_1_0",
    "method": "nestedMethod",
    "request": {
        "className": "NestedRequest",
        "fields": {
            "items": {
                "type": {"type": "array", "itemType": "string"},
                "wireName": "items",
                "required": True,
            },
            "config": {
                "type": {
                    "type": "model",
                    "className": "Config",
                    "fields": {
                        "key": {"type": "string", "wireName": "key", "required": True},
                        "value": {"type": "string", "wireName": "value"},
                    },
                },
                "wireName": "config",
            },
            "tags": {
                "type": {"type": "map", "keyType": "string", "valueType": "string"},
                "wireName": "tags",
            },
        },
    },
    "api": {"method": "POST", "pathname": "/v1.0/test/nested"},
    "description": "Nested method",
}

_NO_REQUEST_SCHEMA = {
    "module": "test_1_0",
    "method": "noRequestMethod",
    "request": None,
    "api": {"method": "GET", "pathname": "/v1.0/test/noreq"},
    "description": "No request",
}

_EXAMPLE_SCHEMA = {
    "module": "test_1_0",
    "method": "exampleMethod",
    "request": {
        "className": "ExampleRequest",
        "fields": {
            "domain": {"type": "string", "wireName": "domain",
                       "required": True, "example": "BizName1"},
            "outId": {"type": "string", "wireName": "outId", "example": "o_123"},
            "optional": {"type": "string", "wireName": "optional"},
        },
    },
    "api": {"method": "POST", "pathname": "/v1.0/test/example"},
}

_PATH_PARAM_SCHEMA = {
    "module": "test_1_0",
    "method": "pathMethod",
    "request": {
        "className": "PathRequest",
        "fields": {
            "corpId": {"type": "string", "wireName": "corpId", "required": True},
            "userId": {"type": "string", "wireName": "userId"},
        },
    },
    "api": {
        "method": "GET",
        "pathname": "/v1.0/test/${corpId}/users",
        "pathParams": ["corpId"],
        "paramLocations": {"userId": "query"},
    },
}


class TestValidation:
    def test_valid_request(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": "test", "count": 5})
        assert result["valid"] is True
        assert result["errors"] == []

    def test_missing_required_field(self):
        result = validate_request(_SIMPLE_SCHEMA, {"count": 5})
        assert result["valid"] is False
        assert len(result["errors"]) == 1
        assert result["errors"][0]["field"] == "name"
        assert "Required" in result["errors"][0]["message"]

    def test_type_mismatch_string(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": 123, "count": 5})
        assert result["valid"] is False
        assert any(e["field"] == "name" for e in result["errors"])

    def test_type_mismatch_number(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": "ok", "count": "not_a_number"})
        assert result["valid"] is False
        assert any(e["field"] == "count" for e in result["errors"])

    def test_type_mismatch_boolean(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": "ok", "active": "yes"})
        assert result["valid"] is False
        assert any(e["field"] == "active" for e in result["errors"])

    def test_unknown_field_warning(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": "ok", "unknown": "val"})
        assert result["valid"] is True  # warnings don't make it invalid
        assert len(result["warnings"]) == 1
        assert result["warnings"][0]["field"] == "unknown"

    def test_unknown_field_strict_error(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": "ok", "unknown": "val"},
                                  strict=True)
        assert result["valid"] is False
        assert any(e["field"] == "unknown" for e in result["errors"])

    def test_field_locations(self):
        result = validate_request(_SIMPLE_SCHEMA, {"name": "ok"})
        assert result["field_locations"]["name"] == "body"
        assert result["field_locations"]["count"] == "query"

    def test_path_param_location(self):
        result = validate_request(_PATH_PARAM_SCHEMA, {"corpId": "corp1"})
        assert result["field_locations"]["corpId"] == "path"
        assert result["field_locations"]["userId"] == "query"

    def test_array_type_check(self):
        result = validate_request(_NESTED_SCHEMA, {"items": ["a", "b"]})
        assert result["valid"] is True

    def test_array_type_mismatch(self):
        result = validate_request(_NESTED_SCHEMA, {"items": "not_array"})
        assert result["valid"] is False

    def test_model_type_check(self):
        result = validate_request(_NESTED_SCHEMA,
                                  {"items": [], "config": {"key": "k"}})
        assert result["valid"] is True

    def test_map_type_check(self):
        result = validate_request(_NESTED_SCHEMA,
                                  {"items": [], "tags": {"a": "1"}})
        assert result["valid"] is True

    def test_no_request_schema(self):
        result = validate_request(_NO_REQUEST_SCHEMA, None)
        assert result["valid"] is True

    def test_no_request_schema_with_args_warning(self):
        result = validate_request(_NO_REQUEST_SCHEMA, {"foo": "bar"})
        assert result["valid"] is True
        assert len(result["warnings"]) == 1

    def test_none_args_missing_required(self):
        result = validate_request(_SIMPLE_SCHEMA, None)
        assert result["valid"] is False
        assert any(e["field"] == "name" for e in result["errors"])

    def test_empty_args_missing_required(self):
        result = validate_request(_SIMPLE_SCHEMA, {})
        assert result["valid"] is False


class TestTemplateGeneration:
    def test_template_required_only(self):
        result = generate_template(_SIMPLE_SCHEMA, required_only=True)
        assert result["module"] == "test_1_0"
        assert result["method"] == "testMethod"
        # Only required field 'name' should be in template
        assert "name" in result["template"]
        assert result["template"]["name"] == ""  # string placeholder
        # Non-required fields without examples should be excluded
        assert "count" not in result["template"]
        assert "active" not in result["template"]

    def test_template_all_fields(self):
        result = generate_template(_SIMPLE_SCHEMA, required_only=False)
        assert "name" in result["template"]
        assert "count" in result["template"]
        assert "active" in result["template"]
        assert result["template"]["count"] == 0  # number placeholder
        assert result["template"]["active"] is False  # boolean placeholder

    def test_template_with_examples(self):
        result = generate_template(_EXAMPLE_SCHEMA, required_only=True)
        # domain: required + example
        assert result["template"]["domain"] == "BizName1"
        # outId: has example but not required — still included in required_only
        assert result["template"]["outId"] == "o_123"
        # optional: no required, no example — excluded
        assert "optional" not in result["template"]

    def test_template_nested_model(self):
        result = generate_template(_NESTED_SCHEMA, required_only=False)
        assert result["template"]["items"] == []  # array placeholder
        assert isinstance(result["template"]["config"], dict)  # model placeholder
        assert result["template"]["tags"] == {}  # map placeholder

    def test_template_no_request(self):
        result = generate_template(_NO_REQUEST_SCHEMA)
        assert result["template"] == {}
        assert result["headers_template"] is None

    def test_template_curl_hint(self):
        result = generate_template(_SIMPLE_SCHEMA, required_only=True)
        assert result["curl_hint"] is not None
        assert "curl -X POST" in result["curl_hint"]
        assert "/v1.0/test/method" in result["curl_hint"]

    def test_template_curl_hint_get(self):
        result = generate_template(_NO_REQUEST_SCHEMA)
        assert result["curl_hint"] is not None
        assert "curl -X GET" in result["curl_hint"]

    def test_template_cli_hint(self):
        result = generate_template(_SIMPLE_SCHEMA, required_only=True)
        assert result["cli_hint"] is not None
        assert "--module test_1_0" in result["cli_hint"]
        assert "--method testMethod" in result["cli_hint"]
        assert "--body-json" in result["cli_hint"]

    def test_template_headers(self):
        schema = {
            "module": "test_1_0",
            "method": "headerMethod",
            "request": {
                "className": "HdrReq",
                "fields": {"data": {"type": "string", "wireName": "data"}},
            },
            "headers": {
                "className": "HdrHeaders",
                "fields": {
                    "xAcsDingtalkAccessToken": {
                        "type": "string",
                        "wireName": "x-acs-dingtalk-access-token",
                        "required": True,
                    },
                },
            },
            "api": {"method": "POST", "pathname": "/v1.0/test/hdr"},
        }
        result = generate_template(schema, required_only=True)
        assert result["headers_template"] is not None
        assert "xAcsDingtalkAccessToken" in result["headers_template"]
        assert result["headers_template"]["xAcsDingtalkAccessToken"] == ""


# ══════════════════════════════════════════════════════════════════════
# Project credential / token tests
# ══════════════════════════════════════════════════════════════════════

class TestProjectCredentials:
    def test_has_credentials_true(self):
        proj = create_project(app_key="ak123", app_secret="sk456")
        assert has_credentials(proj) is True

    def test_has_credentials_false_no_key(self):
        proj = create_project(app_key="", app_secret="sk456")
        assert has_credentials(proj) is False

    def test_has_credentials_false_no_secret(self):
        proj = create_project(app_key="ak123", app_secret="")
        assert has_credentials(proj) is False

    def test_has_credentials_false_empty(self):
        proj = create_project()
        assert has_credentials(proj) is False

    def test_token_is_valid_true(self):
        proj = create_project()
        proj["access_token"] = "tok123"
        proj["token_expires_at"] = time.time() + 3600
        assert token_is_valid(proj) is True

    def test_token_is_valid_false_expired(self):
        proj = create_project()
        proj["access_token"] = "tok123"
        proj["token_expires_at"] = time.time() - 100
        assert token_is_valid(proj) is False

    def test_token_is_valid_false_no_token(self):
        proj = create_project()
        assert token_is_valid(proj) is False

    def test_token_is_valid_false_empty_token(self):
        proj = create_project()
        proj["access_token"] = ""
        proj["token_expires_at"] = time.time() + 3600
        assert token_is_valid(proj) is False

    def test_refresh_token_success(self):
        """refresh_token calls backend and updates project."""
        proj = create_project(app_key="ak", app_secret="sk")

        class FakeBackend:
            def get_access_token(self, key, secret):
                return {"accessToken": "new_tok", "expireIn": 7200}

        result = refresh_token(proj, FakeBackend())
        assert result["access_token"] == "new_tok"
        assert result["token_expires_at"] > time.time()
        assert result is proj  # updated in-place

    def test_refresh_token_no_credentials(self):
        proj = create_project()
        with pytest.raises(ValueError, match="app_key"):
            refresh_token(proj, None)

    def test_refresh_token_backend_error(self):
        proj = create_project(app_key="ak", app_secret="sk")

        class FailBackend:
            def get_access_token(self, key, secret):
                raise RuntimeError("API error")

        with pytest.raises(RuntimeError, match="API error"):
            refresh_token(proj, FailBackend())

    def test_refresh_token_empty_response(self):
        proj = create_project(app_key="ak", app_secret="sk")

        class EmptyBackend:
            def get_access_token(self, key, secret):
                return {"accessToken": "", "expireIn": 7200}

        with pytest.raises(RuntimeError, match="empty token"):
            refresh_token(proj, EmptyBackend())

    def test_ensure_token_already_valid(self):
        """ensure_token skips refresh when token is valid."""
        proj = create_project(app_key="ak", app_secret="sk")
        proj["access_token"] = "existing_tok"
        proj["token_expires_at"] = time.time() + 3600

        class NeverCalled:
            def get_access_token(self, key, secret):
                raise AssertionError("Should not be called")

        result = ensure_token(proj, NeverCalled())
        assert result["access_token"] == "existing_tok"

    def test_ensure_token_refreshes_expired(self):
        """ensure_token refreshes when token is expired."""
        proj = create_project(app_key="ak", app_secret="sk")
        proj["access_token"] = "old_tok"
        proj["token_expires_at"] = time.time() - 100

        class FakeBackend:
            def get_access_token(self, key, secret):
                return {"accessToken": "fresh_tok", "expireIn": 7200}

        result = ensure_token(proj, FakeBackend())
        assert result["access_token"] == "fresh_tok"

    def test_ensure_token_no_credentials_noop(self):
        """ensure_token is a no-op when project has no credentials."""
        proj = create_project()
        result = ensure_token(proj, None)
        assert result.get("access_token", "") == ""

    def test_ensure_token_saves_to_file(self, tmp_dir):
        """ensure_token saves the updated project when proj_path is given."""
        path = os.path.join(tmp_dir, "proj.json")
        proj = create_project(app_key="ak", app_secret="sk", output_path=path)
        proj["access_token"] = ""
        proj["token_expires_at"] = 0

        class FakeBackend:
            def get_access_token(self, key, secret):
                return {"accessToken": "saved_tok", "expireIn": 7200}

        result = ensure_token(proj, FakeBackend(), proj_path=path)
        assert result["access_token"] == "saved_tok"
        # Verify it was persisted
        loaded = load_project(path)
        assert loaded["access_token"] == "saved_tok"


# ══════════════════════════════════════════════════════════════════════
# resolve_credentials tests
# ══════════════════════════════════════════════════════════════════════

class TestResolveCredentials:
    def test_cli_flags_take_priority(self):
        """CLI flags override project and env vars."""
        proj = create_project(app_key="proj_key", app_secret="proj_secret")
        key, secret, source = resolve_credentials(
            cli_key="cli_key", cli_secret="cli_secret", proj=proj)
        assert key == "cli_key"
        assert secret == "cli_secret"
        assert source == "cli"

    def test_project_over_env(self, monkeypatch):
        """Project credentials override env vars."""
        monkeypatch.setenv(ENV_APP_KEY, "env_key")
        monkeypatch.setenv(ENV_APP_SECRET, "env_secret")
        proj = create_project(app_key="proj_key", app_secret="proj_secret")
        key, secret, source = resolve_credentials(proj=proj)
        assert key == "proj_key"
        assert secret == "proj_secret"
        assert source == "project"

    def test_env_vars_fallback(self, monkeypatch):
        """Env vars are used when no CLI flags and no project."""
        monkeypatch.setenv(ENV_APP_KEY, "env_key")
        monkeypatch.setenv(ENV_APP_SECRET, "env_secret")
        key, secret, source = resolve_credentials()
        assert key == "env_key"
        assert secret == "env_secret"
        assert source == "env"

    def test_env_vars_with_empty_project(self, monkeypatch):
        """Env vars used when project has no credentials."""
        monkeypatch.setenv(ENV_APP_KEY, "env_key")
        monkeypatch.setenv(ENV_APP_SECRET, "env_secret")
        proj = create_project()  # no credentials
        key, secret, source = resolve_credentials(proj=proj)
        assert key == "env_key"
        assert secret == "env_secret"
        assert source == "env"

    def test_no_credentials_anywhere(self, monkeypatch):
        """Returns empty strings and source when nothing is set."""
        monkeypatch.delenv(ENV_APP_KEY, raising=False)
        monkeypatch.delenv(ENV_APP_SECRET, raising=False)
        key, secret, source = resolve_credentials()
        assert key == ""
        assert secret == ""
        assert source == ""

    def test_partial_env_only_key(self, monkeypatch):
        """Partial env vars: only key set."""
        monkeypatch.setenv(ENV_APP_KEY, "env_key")
        monkeypatch.delenv(ENV_APP_SECRET, raising=False)
        key, secret, source = resolve_credentials()
        assert key == "env_key"
        assert secret == ""
        assert source == ""  # partial, not resolved

    def test_partial_env_only_secret(self, monkeypatch):
        """Partial env vars: only secret set."""
        monkeypatch.delenv(ENV_APP_KEY, raising=False)
        monkeypatch.setenv(ENV_APP_SECRET, "env_secret")
        key, secret, source = resolve_credentials()
        assert key == ""
        assert secret == "env_secret"
        assert source == ""  # partial, not resolved

    def test_cli_key_with_project_secret(self):
        """CLI key + project secret still resolves as CLI (both present)."""
        # Only both CLI flags present counts as "cli" source
        proj = create_project(app_key="", app_secret="proj_secret")
        key, secret, source = resolve_credentials(
            cli_key="cli_key", cli_secret="", proj=proj)
        # cli_key set but cli_secret empty → falls through to project
        # project has no app_key → falls through to env → nothing
        assert key == "cli_key"
        assert secret == "proj_secret"
        assert source == ""  # partial from mixed sources

    def test_env_var_names_correct(self):
        """Environment variable names match expected constants."""
        assert ENV_APP_KEY == "DINGTALK_APP_KEY"
        assert ENV_APP_SECRET == "DINGTALK_APP_SECRET"


# ══════════════════════════════════════════════════════════════════════
# resolve_robot_code tests
# ══════════════════════════════════════════════════════════════════════

class TestResolveRobotCode:
    def test_cli_flag_takes_priority(self):
        proj = create_project(robot_code="proj_robot")
        code, source = resolve_robot_code(cli_robot_code="cli_robot", proj=proj)
        assert code == "cli_robot"
        assert source == "cli"

    def test_project_over_env(self, monkeypatch):
        monkeypatch.setenv(ENV_ROBOT_CODE, "env_robot")
        proj = create_project(robot_code="proj_robot")
        code, source = resolve_robot_code(proj=proj)
        assert code == "proj_robot"
        assert source == "project"

    def test_env_var_fallback(self, monkeypatch):
        monkeypatch.setenv(ENV_ROBOT_CODE, "env_robot")
        code, source = resolve_robot_code()
        assert code == "env_robot"
        assert source == "env"

    def test_env_var_with_empty_project(self, monkeypatch):
        monkeypatch.setenv(ENV_ROBOT_CODE, "env_robot")
        proj = create_project()
        code, source = resolve_robot_code(proj=proj)
        assert code == "env_robot"
        assert source == "env"

    def test_no_robot_code_anywhere(self, monkeypatch):
        monkeypatch.delenv(ENV_ROBOT_CODE, raising=False)
        code, source = resolve_robot_code()
        assert code == ""
        assert source == ""

    def test_env_var_name_correct(self):
        assert ENV_ROBOT_CODE == "DINGTALK_ROBOT_CODE"

    def test_create_project_with_robot_code(self):
        proj = create_project(robot_code="my_robot")
        assert proj["robot_code"] == "my_robot"

    def test_create_project_default_robot_code(self):
        proj = create_project()
        assert proj["robot_code"] == ""


# ══════════════════════════════════════════════════════════════════════
# Backend diagnostic tests (monkeypatched)
# ══════════════════════════════════════════════════════════════════════

class TestBackendDiagnostics:
    def test_find_node_returns_path(self):
        """find_node returns a path (or None) without raising."""
        result = find_node()
        # In this test environment, node should be available
        assert result is None or isinstance(result, str)

    def test_check_enhanced_structure(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")

        def fake_run(payload):
            return {"modules": ["a", "b", "c"]}

        monkeypatch.setattr(backend, "_run", fake_run)

        # Monkeypatch project_root to point to our temp-like location
        # We can't fully test dist_exists etc. without real files,
        # but we can verify the structure
        result = backend.check_enhanced()
        assert "available" in result
        assert "node_path" in result
        assert "node_version" in result
        assert "sdk_path" in result
        assert "dist_exists" in result
        assert "node_modules_exists" in result
        assert "package_version" in result
        assert "module_count" in result

    def test_diagnose_structure(self, monkeypatch):
        backend = DingTalkBackend(project_root="/tmp")

        def fake_run(payload):
            return {"modules": ["a"]}

        monkeypatch.setattr(backend, "_run", fake_run)

        result = backend.diagnose()
        assert "checks" in result
        assert "all_passed" in result
        assert "summary" in result
        assert isinstance(result["checks"], list)
        assert len(result["checks"]) > 0
        for check in result["checks"]:
            assert "name" in check
            assert "status" in check
            assert check["status"] in ("pass", "fail", "warn")
            assert "message" in check

    def test_setup_sdk_no_ts_dir(self):
        """setup_sdk fails gracefully when ts/ doesn't exist."""
        from pathlib import Path
        backend = DingTalkBackend(project_root="/tmp/nonexistent_sdk_root_12345")
        result = backend.setup_sdk()
        assert result["success"] is False
        assert "not found" in result["error"]

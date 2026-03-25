"""Schema validation for DingTalk API requests.

Validates request fields against the schema returned by the Node bridge's
``method_describe`` action before a call is made.  Checks:

- Required fields are present
- Field types match expected types (string, number, boolean, array, map, model)
- Unknown fields are flagged as warnings
- Parameter locations (body/query/path) are reported
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional, Tuple


# ── Type checking helpers ─────────────────────────────────────────────

def _check_type(value: Any, expected_type: Any) -> bool:
    """Check whether *value* matches *expected_type* from the schema.

    ``expected_type`` can be:
    - a string: "string", "number", "boolean"
    - a dict: {"type": "array", "itemType": ...} or {"type": "model", ...}
    - "any" / "unknown" — always passes
    """
    if expected_type in ("any", "unknown"):
        return True

    if isinstance(expected_type, str):
        if expected_type == "string":
            return isinstance(value, str)
        if expected_type == "number":
            return isinstance(value, (int, float))
        if expected_type == "boolean":
            return isinstance(value, bool)
        # Fallback: accept anything for unrecognised type strings
        return True

    if isinstance(expected_type, dict):
        etype = expected_type.get("type")
        if etype == "array":
            return isinstance(value, list)
        if etype == "map":
            return isinstance(value, dict)
        if etype == "model":
            return isinstance(value, dict)
        return True

    return True


def _type_label(expected_type: Any) -> str:
    """Human-readable label for an expected type."""
    if isinstance(expected_type, str):
        return expected_type
    if isinstance(expected_type, dict):
        etype = expected_type.get("type", "unknown")
        if etype == "array":
            item = _type_label(expected_type.get("itemType", "any"))
            return f"array<{item}>"
        if etype == "model":
            return f"model<{expected_type.get('className', '?')}>"
        if etype == "map":
            return f"map<{_type_label(expected_type.get('keyType', 'string'))}," \
                   f"{_type_label(expected_type.get('valueType', 'any'))}>"
        return etype
    return "unknown"


# ── Main validation function ──────────────────────────────────────────

def validate_request(
    schema: Dict[str, Any],
    args: Optional[Dict[str, Any]],
    *,
    strict: bool = False,
) -> Dict[str, Any]:
    """Validate *args* against a method's request schema.

    Parameters
    ----------
    schema : dict
        The full result from ``method_describe`` (contains ``request``,
        ``api``, etc.).
    args : dict or None
        The request arguments to validate.
    strict : bool
        When True, unknown fields produce errors instead of warnings.

    Returns
    -------
    dict
        ``{"valid": bool, "errors": [...], "warnings": [...],
           "field_locations": {...}}``
    """
    errors: List[Dict[str, str]] = []
    warnings: List[Dict[str, str]] = []
    field_locations: Dict[str, str] = {}

    request_schema = schema.get("request")
    if request_schema is None:
        # Method takes no request body — args should be empty
        if args:
            warnings.append({
                "field": "*",
                "message": "Method has no request schema; arguments may be ignored.",
            })
        return {
            "valid": len(errors) == 0,
            "errors": errors,
            "warnings": warnings,
            "field_locations": field_locations,
        }

    fields = request_schema.get("fields", {})

    # Determine parameter locations from API metadata
    api_meta = schema.get("api") or {}
    param_locations = api_meta.get("paramLocations", {})
    path_params = api_meta.get("pathParams", [])

    # Build field_locations map
    for fname in fields:
        wire = fields[fname].get("wireName", fname)
        if wire in param_locations:
            field_locations[fname] = param_locations[wire]
        elif wire in path_params or fname in path_params:
            field_locations[fname] = "path"
        else:
            field_locations[fname] = "body"  # default

    # 1) Check required fields
    if args is None:
        args = {}

    for fname, finfo in fields.items():
        if finfo.get("required"):
            if fname not in args:
                errors.append({
                    "field": fname,
                    "message": f"Required field '{fname}' is missing.",
                    "expected_type": _type_label(finfo.get("type", "any")),
                })

    # 2) Check types of provided fields
    for fname, value in args.items():
        if fname not in fields:
            msg = f"Unknown field '{fname}' (not in request schema)."
            if strict:
                errors.append({"field": fname, "message": msg})
            else:
                warnings.append({"field": fname, "message": msg})
            continue

        finfo = fields[fname]
        expected = finfo.get("type", "any")
        if not _check_type(value, expected):
            errors.append({
                "field": fname,
                "message": (
                    f"Type mismatch for '{fname}': "
                    f"expected {_type_label(expected)}, "
                    f"got {type(value).__name__}."
                ),
                "expected_type": _type_label(expected),
                "actual_type": type(value).__name__,
            })

    return {
        "valid": len(errors) == 0,
        "errors": errors,
        "warnings": warnings,
        "field_locations": field_locations,
    }


# ── Template generation ───────────────────────────────────────────────

def generate_template(
    schema: Dict[str, Any],
    *,
    required_only: bool = True,
) -> Dict[str, Any]:
    """Generate a minimal request template from a method schema.

    Parameters
    ----------
    schema : dict
        The full result from ``method_describe``.
    required_only : bool
        When True (default), only include required fields and fields with
        examples.  When False, include all fields with placeholder values.

    Returns
    -------
    dict
        ``{"module": str, "method": str, "template": {...},
           "headers_template": {...} | None, "curl_hint": str | None}``
    """
    module = schema.get("module", "")
    method = schema.get("method", "")
    api_meta = schema.get("api") or {}
    request_schema = schema.get("request")
    headers_schema = schema.get("headers")

    body_template: Dict[str, Any] = {}
    if request_schema:
        fields = request_schema.get("fields", {})
        for fname, finfo in fields.items():
            is_required = finfo.get("required", False)
            has_example = "example" in finfo
            if required_only and not is_required and not has_example:
                continue
            body_template[fname] = _field_placeholder(finfo)

    headers_template: Optional[Dict[str, Any]] = None
    if headers_schema:
        hfields = headers_schema.get("fields", {})
        headers_template = {}
        for fname, finfo in hfields.items():
            is_required = finfo.get("required", False)
            has_example = "example" in finfo
            if required_only and not is_required and not has_example:
                continue
            headers_template[fname] = _field_placeholder(finfo)

    # Build a curl-style hint
    curl_hint = _build_curl_hint(api_meta, body_template, headers_template)

    # Build CLI hint
    cli_hint = _build_cli_hint(module, method, body_template, headers_template)

    return {
        "module": module,
        "method": method,
        "template": body_template,
        "headers_template": headers_template,
        "curl_hint": curl_hint,
        "cli_hint": cli_hint,
    }


def _field_placeholder(finfo: Dict[str, Any]) -> Any:
    """Return a placeholder value for a field based on its schema."""
    # Prefer @example value
    if "example" in finfo:
        return finfo["example"]

    expected = finfo.get("type", "any")
    if isinstance(expected, str):
        if expected == "string":
            return ""
        if expected == "number":
            return 0
        if expected == "boolean":
            return False
        return None

    if isinstance(expected, dict):
        etype = expected.get("type")
        if etype == "array":
            return []
        if etype == "map":
            return {}
        if etype == "model":
            # Recursively generate a nested model template
            nested = {}
            for nfname, nfinfo in expected.get("fields", {}).items():
                if nfinfo.get("required") or "example" in nfinfo:
                    nested[nfname] = _field_placeholder(nfinfo)
            return nested if nested else {}
        return None

    return None


def _build_curl_hint(
    api_meta: Dict[str, Any],
    body: Dict[str, Any],
    headers: Optional[Dict[str, Any]],
) -> Optional[str]:
    """Build a curl command hint from API metadata."""
    http_method = api_meta.get("method", "POST")
    pathname = api_meta.get("pathname", "")
    if not pathname:
        return None

    import json as _json
    parts = [f"curl -X {http_method}"]
    parts.append(f"  'https://api.dingtalk.com{pathname}'")

    if headers:
        for k, v in headers.items():
            wire = k  # simplified
            parts.append(f"  -H '{wire}: {v}'")

    if body and http_method in ("POST", "PUT", "PATCH"):
        body_json = _json.dumps(body, ensure_ascii=False, indent=2)
        parts.append(f"  -H 'Content-Type: application/json'")
        parts.append(f"  -d '{body_json}'")

    return " \\\n".join(parts)


def _build_cli_hint(
    module: str,
    method: str,
    body: Dict[str, Any],
    headers: Optional[Dict[str, Any]],
) -> str:
    """Build a CLI command hint."""
    import json as _json
    parts = [
        "cli-anything-dingtalk-nodejs-sdk --json backend call",
        f"  --module {module} --method {method}",
    ]
    if body:
        body_json = _json.dumps(body, ensure_ascii=False)
        parts.append(f"  --body-json '{body_json}'")
    if headers:
        header_json = _json.dumps(headers, ensure_ascii=False)
        parts.append(f"  --header-json '{header_json}'")
    return " \\\n".join(parts)

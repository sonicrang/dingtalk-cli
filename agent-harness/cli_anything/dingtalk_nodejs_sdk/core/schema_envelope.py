"""Unified schema envelope for all schema-related outputs.

Wraps raw schema data in a stable envelope with version, timestamp,
and source metadata so that agents can reliably parse and depend on
the output format across CLI versions.
"""

from __future__ import annotations

import time
from typing import Any, Dict, Optional

# Bump this when the schema structure changes in a breaking way.
SCHEMA_VERSION = "1.0.0"


def wrap_schema(
    data: Dict[str, Any],
    *,
    kind: str,
    source_module: Optional[str] = None,
    source_method: Optional[str] = None,
) -> Dict[str, Any]:
    """Wrap *data* in the standard schema envelope.

    Parameters
    ----------
    data : dict
        The raw schema payload (e.g. from method_describe, module_describe).
    kind : str
        A tag for the type of schema output.  One of:
        ``"method_schema"``, ``"module_schema"``, ``"validation"``,
        ``"template"``, ``"error"``.
    source_module : str, optional
        The SDK module name, if applicable.
    source_method : str, optional
        The SDK method name, if applicable.

    Returns
    -------
    dict
        ``{"$schema": {"version": ..., "kind": ..., "generatedAt": ...,
            "source": {...}}, "data": ...}``
    """
    source: Dict[str, Any] = {"sdk": "@alicloud/dingtalk"}
    if source_module:
        source["module"] = source_module
    if source_method:
        source["method"] = source_method

    return {
        "$schema": {
            "version": SCHEMA_VERSION,
            "kind": kind,
            "generatedAt": time.time(),
            "source": source,
        },
        "data": data,
    }


def wrap_error(
    code: str,
    message: str,
    *,
    detail: Optional[Any] = None,
    source_module: Optional[str] = None,
    source_method: Optional[str] = None,
) -> Dict[str, Any]:
    """Create a structured error envelope.

    Parameters
    ----------
    code : str
        Machine-readable error code (e.g. ``"VALIDATION_ERROR"``,
        ``"BACKEND_ERROR"``, ``"UNKNOWN_MODULE"``, ``"UNKNOWN_METHOD"``).
    message : str
        Human-readable error description.
    detail : Any, optional
        Additional error details (validation errors list, stack trace, etc.).

    Returns
    -------
    dict
        ``{"$schema": {...}, "error": {"code": ..., "message": ..., "detail": ...}}``
    """
    source: Dict[str, Any] = {"sdk": "@alicloud/dingtalk"}
    if source_module:
        source["module"] = source_module
    if source_method:
        source["method"] = source_method

    return {
        "$schema": {
            "version": SCHEMA_VERSION,
            "kind": "error",
            "generatedAt": time.time(),
            "source": source,
        },
        "error": {
            "code": code,
            "message": message,
            "detail": detail,
        },
    }


# ── Error code constants ──────────────────────────────────────────────

VALIDATION_ERROR = "VALIDATION_ERROR"
BACKEND_ERROR = "BACKEND_ERROR"
UNKNOWN_MODULE = "UNKNOWN_MODULE"
UNKNOWN_METHOD = "UNKNOWN_METHOD"
INPUT_ERROR = "INPUT_ERROR"
FILE_ERROR = "FILE_ERROR"

"""Export utilities for the DingTalk CLI harness.

Provides functions to export session state, API call results, and module
metadata to various formats (JSON, CSV).
"""

from __future__ import annotations

import csv
import io
import json
import os
import time
from typing import Any, Dict, List, Optional


def export_json(data: Any, output_path: str, overwrite: bool = False) -> Dict[str, Any]:
    """Export arbitrary data to a JSON file.

    Returns metadata about the export.
    """
    if os.path.exists(output_path) and not overwrite:
        raise FileExistsError(f"Output file already exists: {output_path}. Use overwrite=True.")
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    size = os.path.getsize(output_path)
    return {
        "output": output_path,
        "format": "json",
        "file_size": size,
        "exported_at": time.time(),
    }


def export_csv(
    rows: List[Dict[str, Any]],
    output_path: str,
    overwrite: bool = False,
    fieldnames: Optional[List[str]] = None,
) -> Dict[str, Any]:
    """Export a list of dicts as CSV.

    Returns metadata about the export.
    """
    if os.path.exists(output_path) and not overwrite:
        raise FileExistsError(f"Output file already exists: {output_path}. Use overwrite=True.")
    if not rows:
        raise ValueError("No data to export.")
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    if fieldnames is None:
        fieldnames = list(rows[0].keys())
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)
    size = os.path.getsize(output_path)
    return {
        "output": output_path,
        "format": "csv",
        "file_size": size,
        "row_count": len(rows),
        "columns": fieldnames,
        "exported_at": time.time(),
    }


def export_modules_summary(
    modules: List[str],
    output_path: str,
    overwrite: bool = False,
) -> Dict[str, Any]:
    """Export a summary of SDK modules to JSON.

    Returns metadata about the export.
    """
    data = {
        "sdk": "@alicloud/dingtalk",
        "module_count": len(modules),
        "modules": modules,
        "exported_at": time.time(),
    }
    return export_json(data, output_path, overwrite=overwrite)


def format_api_result(result: Any, module: str = "", method: str = "") -> Dict[str, Any]:
    """Wrap a raw API result with metadata for structured output."""
    return {
        "module": module,
        "method": method,
        "result": result,
        "timestamp": time.time(),
    }

"""Module discovery, search, categorization, and comparison utilities.

Provides functions that enrich the raw module/method data from the Node
bridge with higher-level operations: search, categorize, compare, and
produce statistics.
"""

from __future__ import annotations

import fnmatch
import re
from typing import Any, Dict, List, Optional, Tuple


# ── Domain categorisation ─────────────────────────────────────────────

# Map of domain name -> list of module-name patterns (fnmatch-style).
# Modules not matching any pattern fall into "other".
DOMAIN_MAP: Dict[str, List[str]] = {
    "messaging": ["im_*", "robot_*", "flashmsg_*", "impaas_*", "flashmeeting_*"],
    "contacts": ["contact_*"],
    "calendar": ["calendar_*"],
    "attendance": ["attendance_*", "check_in_*"],
    "hr": ["hrm_*", "hrbrain_*", "salary_*", "jobs_*"],
    "documents": ["doc_*", "wiki_*", "pedia_*"],
    "storage": ["drive_*", "storage_*", "conv_file_*", "sns_storage_*"],
    "tasks": ["todo_*", "todo_e_e_*", "workrecord_*"],
    "projects": ["project_*", "project_integration_*"],
    "workflow": ["workflow_*"],
    "auth": ["oauth2_*", "occupationauth_*", "gateway_*"],
    "crm": ["crm_*", "jzcrm_*"],
    "finance": ["bizfinance_*", "finance_*", "credit_*", "trade_*"],
    "ai": ["ai_*", "assistant_*", "dingmi_*", "algo_*"],
    "education": ["edu_*"],
    "apps": ["micro_app_*", "miniapp_*", "cool_app_*", "cool_ops_*",
             "app_market_*", "h5package_*", "apaas_*", "card_*",
             "connector_*", "watt_*"],
    "meetings": ["conference_*", "live_*", "live_activities_*",
                 "rooms_*", "minutes_*", "transcribe_*"],
    "industry": ["industry_*", "manufacturing_*", "resident_*",
                 "village_*", "shangou_*", "wms_*"],
    "org": ["exclusive_*", "org_culture_*", "badge_*", "blackboard_*",
            "group_blackboard_*", "workbench_*", "report_*"],
    "data": ["datacenter_*", "carbon_*", "meter_*", "dvi_*"],
    "service": ["service_group_*", "customer_service_*"],
    "travel": ["alitrip_*", "trip_*"],
    "esign": ["esign_*", "contract_*"],
    "content": ["content_*", "notable_*", "swform_*"],
    "telecom": ["ding_phone_*", "ding_one_*", "rcs_call_*"],
    "devices": ["smart_device_*", "devicemng_*", "diot_*", "trajectory_*"],
    "thirdparty": ["h3yun_*", "yida_*", "link_*", "team_sphere_*",
                   "chengfeng_*", "agoal_*", "okr_*", "vip_member_*",
                   "bay_max_*", "dpaas_*", "amdp_*", "package_*",
                   "search_*", "yun_shu_*", "mcp_*", "activity_*",
                   "event_*", "ats_*"],
}


def categorize_module(module_name: str) -> str:
    """Return the domain category for a module name."""
    for domain, patterns in DOMAIN_MAP.items():
        for pattern in patterns:
            if fnmatch.fnmatch(module_name, pattern):
                return domain
    return "other"


def categorize_modules(module_names: List[str]) -> Dict[str, List[str]]:
    """Group module names by domain category.

    Returns ``{domain: [module_name, ...]}`` sorted alphabetically.
    """
    result: Dict[str, List[str]] = {}
    for name in sorted(module_names):
        domain = categorize_module(name)
        result.setdefault(domain, []).append(name)
    return dict(sorted(result.items()))


# ── Search ────────────────────────────────────────────────────────────

def search_modules(
    module_names: List[str],
    query: str,
) -> List[str]:
    """Filter modules whose name contains *query* (case-insensitive).

    Supports simple glob patterns (``*``, ``?``) when the query
    contains wildcard characters; otherwise does a substring match.
    """
    q = query.lower()
    has_wildcard = any(c in q for c in ("*", "?", "["))
    out: List[str] = []
    for name in sorted(module_names):
        lower = name.lower()
        if has_wildcard:
            if fnmatch.fnmatch(lower, q):
                out.append(name)
        else:
            if q in lower:
                out.append(name)
    return out


# ── Stats ─────────────────────────────────────────────────────────────

def compute_stats(
    modules_stats: Dict[str, Any],
) -> Dict[str, Any]:
    """Compute high-level statistics from the per-module stats returned
    by the ``modules_stats`` bridge action.

    *modules_stats* has shape ``{"moduleCount": int, "totalMethods": int,
    "totalPrimaryMethods": int, "modules": {name: {"total": int, "primary": int}}}``.
    """
    per_mod = modules_stats.get("modules", {})
    by_count = sorted(per_mod.items(), key=lambda kv: kv[1]["primary"], reverse=True)
    top_10 = [{"module": n, "primary_methods": d["primary"], "total_methods": d["total"]}
              for n, d in by_count[:10]]

    # Categorise
    category_counts: Dict[str, int] = {}
    for name in per_mod:
        cat = categorize_module(name)
        category_counts[cat] = category_counts.get(cat, 0) + per_mod[name]["primary"]
    category_sorted = dict(sorted(category_counts.items(), key=lambda kv: kv[1], reverse=True))

    return {
        "module_count": modules_stats.get("moduleCount", len(per_mod)),
        "total_methods": modules_stats.get("totalMethods", 0),
        "total_primary_methods": modules_stats.get("totalPrimaryMethods", 0),
        "top_10_modules": top_10,
        "methods_by_domain": category_sorted,
    }


# ── Compare ───────────────────────────────────────────────────────────

def compare_modules(
    desc_a: Dict[str, Any],
    desc_b: Dict[str, Any],
) -> Dict[str, Any]:
    """Compare two module descriptions (from ``module_describe``).

    Returns a dict with shared methods, unique-to-A, unique-to-B,
    and overall counts.
    """
    methods_a = set(desc_a.get("methods", {}).keys())
    methods_b = set(desc_b.get("methods", {}).keys())
    shared = sorted(methods_a & methods_b)
    only_a = sorted(methods_a - methods_b)
    only_b = sorted(methods_b - methods_a)
    return {
        "module_a": desc_a.get("module", ""),
        "module_b": desc_b.get("module", ""),
        "method_count_a": desc_a.get("primaryMethods", len(methods_a)),
        "method_count_b": desc_b.get("primaryMethods", len(methods_b)),
        "shared_methods": shared,
        "shared_count": len(shared),
        "only_in_a": only_a,
        "only_in_a_count": len(only_a),
        "only_in_b": only_b,
        "only_in_b_count": len(only_b),
    }

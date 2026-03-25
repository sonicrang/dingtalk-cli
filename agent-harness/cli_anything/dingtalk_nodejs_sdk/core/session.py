"""Stateful session management for the DingTalk CLI harness.

Maintains in-memory state with undo/redo and optional file-based
persistence via locked JSON writes.
"""

from __future__ import annotations

import copy
import json
import os
import time
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Tuple


def _locked_save_json(path: str, data: dict, **dump_kwargs) -> None:
    """Atomically write JSON with exclusive file locking."""
    try:
        f = open(path, "r+")
    except FileNotFoundError:
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        f = open(path, "w")
    with f:
        _locked = False
        try:
            import fcntl
            fcntl.flock(f.fileno(), fcntl.LOCK_EX)
            _locked = True
        except (ImportError, OSError):
            pass
        try:
            f.seek(0)
            f.truncate()
            json.dump(data, f, **dump_kwargs)
            f.flush()
        finally:
            if _locked:
                import fcntl
                fcntl.flock(f.fileno(), fcntl.LOCK_UN)


@dataclass
class SessionState:
    """In-memory session state with undo/redo and optional persistence."""

    state: Dict[str, Any] = field(default_factory=lambda: {
        "selected_module": None,
        "saved_headers": {},
        "saved_config": {},
        "history": [],
    })
    _undo: List[Dict[str, Any]] = field(default_factory=list)
    _redo: List[Dict[str, Any]] = field(default_factory=list)
    _session_file: Optional[str] = field(default=None)

    def snapshot(self) -> Dict[str, Any]:
        """Return a deep copy of the current state."""
        return copy.deepcopy(self.state)

    def apply_mutation(self, description: str, updates: Dict[str, Any]) -> Dict[str, Any]:
        """Apply a state mutation, recording undo history."""
        self._undo.append(self.snapshot())
        self._redo.clear()
        self.state.update(updates)
        self.state.setdefault("history", []).append(description)
        self._auto_save()
        return self.snapshot()

    def undo(self) -> Tuple[bool, Dict[str, Any]]:
        """Undo the last mutation. Returns (success, current_state)."""
        if not self._undo:
            return False, self.snapshot()
        self._redo.append(self.snapshot())
        self.state = self._undo.pop()
        self._auto_save()
        return True, self.snapshot()

    def redo(self) -> Tuple[bool, Dict[str, Any]]:
        """Redo the last undone mutation. Returns (success, current_state)."""
        if not self._redo:
            return False, self.snapshot()
        self._undo.append(self.snapshot())
        self.state = self._redo.pop()
        self._auto_save()
        return True, self.snapshot()

    def history_list(self) -> List[str]:
        """Return the list of mutation descriptions."""
        return list(self.state.get("history", []))

    def reset(self) -> Dict[str, Any]:
        """Reset state to defaults, clearing undo/redo history."""
        self._undo.clear()
        self._redo.clear()
        self.state = {
            "selected_module": None,
            "saved_headers": {},
            "saved_config": {},
            "history": [],
        }
        self._auto_save()
        return self.snapshot()

    # ── Persistence ───────────────────────────────────────────────────

    def bind_file(self, path: str) -> None:
        """Bind this session to a file for auto-save."""
        self._session_file = path

    def save(self, path: Optional[str] = None) -> str:
        """Save session state to a JSON file. Returns the path used."""
        target = path or self._session_file
        if target is None:
            raise ValueError("No session file path specified.")
        payload = {
            "state": self.state,
            "saved_at": time.time(),
        }
        _locked_save_json(target, payload, indent=2, ensure_ascii=False)
        self._session_file = target
        return target

    def load(self, path: str) -> Dict[str, Any]:
        """Load session state from a JSON file."""
        with open(path, "r") as f:
            payload = json.load(f)
        self.state = payload.get("state", self.state)
        self._undo.clear()
        self._redo.clear()
        self._session_file = path
        return self.snapshot()

    def _auto_save(self) -> None:
        """Auto-save if a session file is bound."""
        if self._session_file:
            try:
                self.save()
            except Exception:
                pass  # Best-effort auto-save

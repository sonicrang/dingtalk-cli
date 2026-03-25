# TEST.md

See `cli_anything/dingtalk_nodejs_sdk/tests/TEST.md` for the full test plan
and results.

## Quick Validation

```bash
cd /root/.openclaw/workspace/projects/dingtalk-nodejs-sdk/agent-harness
pip install -e .
python3 -m pytest cli_anything/dingtalk_nodejs_sdk/tests/ -v -s

# Force-installed mode
CLI_ANYTHING_FORCE_INSTALLED=1 python3 -m pytest cli_anything/dingtalk_nodejs_sdk/tests/ -v -s
```

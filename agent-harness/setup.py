from setuptools import setup, find_namespace_packages

setup(
    name="cli-anything-dingtalk-nodejs-sdk",
    version="1.2.0",
    description="CLI-Anything harness for the DingTalk Node.js SDK",
    long_description="Stateful CLI and REPL for the @alicloud/dingtalk Node.js SDK. "
                     "Provides module discovery, method inspection, generic API calls, "
                     "session state with undo/redo, and export to JSON/CSV.",
    packages=find_namespace_packages(include=["cli_anything.*"]),
    include_package_data=True,
    package_data={
        "cli_anything.dingtalk_nodejs_sdk": [
            "utils/node_bridge.js",
            "skills/*.md",
        ],
    },
    install_requires=[
        "click>=8.0.0",
        "prompt-toolkit>=3.0.0",
    ],
    entry_points={
        "console_scripts": [
            "cli-anything-dingtalk-nodejs-sdk=cli_anything.dingtalk_nodejs_sdk.dingtalk_nodejs_sdk_cli:main",
        ],
    },
    python_requires=">=3.10",
)

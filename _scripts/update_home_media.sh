#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="${1:-$ROOT/../arch-setup}"

python "$ROOT/_scripts/prepare_home_media.py" "$SOURCE"

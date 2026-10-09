#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [[ $# -gt 0 ]]; then
  SOURCE="$1"
elif [[ -n "${ARCH_SETUP_ROOT:-}" ]]; then
  SOURCE="$ARCH_SETUP_ROOT"
else
  candidates=(
    "$ROOT/../arch-setup"
    "$HOME/Documents/projects/arch-setup"
    "$HOME/Documents/projects/repos/arch-setup"
    "$HOME/arch-setup"
  )

  SOURCE=""
  for candidate in "${candidates[@]}"; do
    if [[ -f "$candidate/media-sources.toml" && -d "$candidate/wallpapers" && -d "$candidate/video-wallpapers" ]]; then
      SOURCE="$candidate"
      break
    fi
  done

  if [[ -z "$SOURCE" ]]; then
    echo "Could not find an arch-setup checkout." >&2
    echo "Pass it explicitly:" >&2
    echo "  ./_scripts/update_home_media.sh /path/to/arch-setup" >&2
    echo "or set ARCH_SETUP_ROOT." >&2
    exit 2
  fi
fi

python "$ROOT/_scripts/prepare_home_media.py" "$SOURCE"

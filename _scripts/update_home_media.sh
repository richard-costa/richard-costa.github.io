#!/usr/bin/env bash

# Locate the sibling arch-setup media repository, then delegate conversion and
# manifest generation to prepare_home_media.py. An argument or ARCH_SETUP_ROOT
# takes precedence over the common local checkout paths below.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# Resolve the source checkout without assuming one workstation directory.
if [[ $# -gt 0 ]]; then
  SOURCE="$1"
elif [[ -n "${ARCH_SETUP_ROOT:-}" ]]; then
  SOURCE="$ARCH_SETUP_ROOT"
else
  candidates=(
    "$ROOT/../arch-setup"
    "$HOME/Documents/projects/arch-setup"
    "$HOME/Documents/projects/arch-setup"
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

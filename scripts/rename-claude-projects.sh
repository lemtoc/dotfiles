#!/usr/bin/env bash
set -uo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

OLD_USER=""
NEW_USER=""
DRY_RUN=0
VERBOSE=0
PROJECTS_DIR="${HOME}/.claude/projects"

print_usage() {
  cat <<'USAGE'
Rename Claude Code project session directories after a macOS user rename.

Claude Code stores per-project sessions under directories whose names encode the
absolute CWD, e.g. /Users/<shortname>/.dotfiles becomes -Users-<shortname>--dotfiles.
When the macOS shortname changes, those directories no longer match the new CWD
and `/resume` cannot find past sessions. This script migrates them in place.

Options:
  --old OLD_SHORTNAME    (required) previous macOS shortname
  --new NEW_SHORTNAME    (required) new macOS shortname
  --dry-run              Show what would happen without renaming
  --verbose              Print every directory considered, not just acted on
  -h, --help             Show this help

Examples:
  rename-claude-projects.sh --old lemtoc --new t1190078 --dry-run
  rename-claude-projects.sh --old lemtoc --new t1190078
  rename-claude-projects.sh --old mfyuu  --new t1190078

Notes:
  - Operates on ~/.claude/projects/ only.
  - If the target directory already exists, the source is left untouched
    (collision). Resolve manually by merging the two directories' JSONL files.
USAGE
}

log_info()    { printf "${BLUE}[INFO]${NC} %s\n" "$*"; }
log_ok()      { printf "${GREEN}[ OK ]${NC} %s\n" "$*"; }
log_skip()    { printf "${YELLOW}[SKIP]${NC} %s\n" "$*"; }
log_warn()    { printf "${YELLOW}[WARN]${NC} %s\n" "$*"; }
log_error()   { printf "${RED}[ERR ]${NC} %s\n" "$*" >&2; }
log_dryrun()  { printf "${CYAN}[DRY ]${NC} %s\n" "$*"; }

while [[ $# -gt 0 ]]; do
  case "$1" in
    --old)        OLD_USER="${2:-}"; shift 2 ;;
    --new)        NEW_USER="${2:-}"; shift 2 ;;
    --dry-run)    DRY_RUN=1;         shift   ;;
    --verbose)    VERBOSE=1;         shift   ;;
    -h|--help)    print_usage;       exit 0  ;;
    *)            log_error "Unknown argument: $1"; print_usage; exit 2 ;;
  esac
done

if [[ -z "$OLD_USER" || -z "$NEW_USER" ]]; then
  log_error "--old and --new are required"
  print_usage
  exit 2
fi

if [[ "$OLD_USER" == "$NEW_USER" ]]; then
  log_error "--old and --new must differ (both were '$OLD_USER')"
  exit 2
fi

if [[ ! -d "$PROJECTS_DIR" ]]; then
  log_error "$PROJECTS_DIR not found"
  exit 1
fi

PATTERN="-Users-${OLD_USER}-"
log_info "Scanning $PROJECTS_DIR for entries matching '${PATTERN}*'"
[[ $DRY_RUN -eq 1 ]] && log_info "Dry-run mode: no changes will be applied"

migrated=0
skipped=0
collisions=0
errors=0

shopt -s nullglob 2>/dev/null || true

for dir in "$PROJECTS_DIR"/${PATTERN}*; do
  [[ -d "$dir" ]] || continue
  base="$(basename "$dir")"
  new_base="${base//${OLD_USER}/${NEW_USER}}"
  target="$PROJECTS_DIR/$new_base"

  if [[ "$base" == "$new_base" ]]; then
    [[ $VERBOSE -eq 1 ]] && log_skip "$base (no substitution)"
    skipped=$((skipped + 1))
    continue
  fi

  if [[ -e "$target" ]]; then
    log_warn "collision: $new_base already exists — leaving $base in place"
    collisions=$((collisions + 1))
    continue
  fi

  if [[ $DRY_RUN -eq 1 ]]; then
    log_dryrun "$base -> $new_base"
    migrated=$((migrated + 1))
  else
    if mv "$dir" "$target"; then
      log_ok "$base -> $new_base"
      migrated=$((migrated + 1))
    else
      log_error "failed to rename $base"
      errors=$((errors + 1))
    fi
  fi
done

printf "\n"
log_info "Summary: migrated=${migrated} collisions=${collisions} skipped=${skipped} errors=${errors}"

if [[ $errors -gt 0 ]]; then
  exit 1
fi

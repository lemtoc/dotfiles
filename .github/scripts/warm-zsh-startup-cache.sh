#!/usr/bin/env bash
# Pre-populate caches that zsh startup would otherwise generate lazily.
set -euo pipefail

zshrc="${1:-$HOME/.zshrc}"
zsh_lazy="${2:-$HOME/.config/zsh/lazy.zsh}"
cache_home="${XDG_CACHE_HOME:-$HOME/.cache}"
zsh_cache_dir="$cache_home/zsh"

if [[ ! -r "$zshrc" ]]; then
  echo "missing zshrc: $zshrc" >&2
  exit 1
fi

mkdir -p "$zsh_cache_dir"

warm_cache_eval() {
  local command_string="$1"
  local cache_file="$zsh_cache_dir/$(printf '%s' "$command_string" | tr ' /' '_').zsh"

  if [[ ! -s "$cache_file" ]]; then
    echo "warming zsh cache: $command_string"
    eval "$command_string" > "$cache_file"
  fi
}

while IFS= read -r command_string; do
  [[ -n "$command_string" ]] || continue
  warm_cache_eval "$command_string"
done < <(sed -nE 's/^[[:space:]]*(zsh-defer[[:space:]]+)?cache_eval "([^"]+)".*$/\2/p' "$zshrc")

if [[ -r "$zsh_lazy" ]] && command -v git >/dev/null 2>&1; then
  git_wt_cache="$cache_home/sheldon/git-wt.zsh"
  mkdir -p "$(dirname "$git_wt_cache")"
  if [[ ! -s "$git_wt_cache" || "$(readlink "$zshrc")" != "$(cat "${git_wt_cache}.lock" 2>/dev/null)" ]]; then
    echo "warming git-wt zsh cache"
    git wt --init zsh > "$git_wt_cache"
    readlink "$zshrc" > "${git_wt_cache}.lock"
  fi
fi

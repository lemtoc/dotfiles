#!/usr/bin/env bash

set -euo pipefail

codex_home="${CODEX_HOME:-$HOME/.codex}"
model=""
effort=""

if [[ -n "${CODEX_THREAD_ID:-}" ]] && command -v rg >/dev/null 2>&1 && command -v jq >/dev/null 2>&1; then
  session_file="$(
    {
      rg --files "$codex_home/sessions" 2>/dev/null |
        rg "${CODEX_THREAD_ID}\.jsonl$" |
        tail -n 1
    } || true
  )"

  if [[ -n "$session_file" ]]; then
    session_values="$(
      {
        jq -r '
          select(.type == "turn_context")
          | [.payload.model // "", (.payload.effort // .payload.collaboration_mode.settings.reasoning_effort // "")]
          | @tsv
        ' "$session_file" |
        tail -n 1
      } || true
    )"

    if [[ -n "$session_values" ]]; then
      IFS=$'\t' read -r model effort <<< "$session_values"
    fi
  fi
fi

if [[ -z "$model" ]]; then
  config_file="$codex_home/config.toml"
  if [[ -r "$config_file" ]]; then
    model="$(
      {
        rg '^model = ' "$config_file" |
          tail -n 1 |
          sed -E 's/^model = "([^"]*)".*$/\1/'
      } || true
    )"
    effort="$(
      {
        rg '^model_reasoning_effort = ' "$config_file" |
          tail -n 1 |
          sed -E 's/^model_reasoning_effort = "([^"]*)".*$/\1/'
      } || true
    )"
  fi
fi

if [[ -z "$model" ]]; then
  printf 'Unable to resolve the current Codex model.\n' >&2
  exit 1
fi

title_case() {
  printf '%s\n' "$1" |
    tr '_-' '  ' |
    awk '{ for (i = 1; i <= NF; i++) $i = toupper(substr($i, 1, 1)) tolower(substr($i, 2)); print }'
}

format_model() {
  local value="$1"

  if [[ "$value" == gpt-* ]]; then
    local remainder="${value#gpt-}"
    local version="${remainder%%-*}"
    local suffix=""

    if [[ "$remainder" == *-* ]]; then
      suffix="${remainder#*-}"
    fi

    printf 'GPT-%s' "$version"
    if [[ -n "$suffix" ]]; then
      printf ' %s' "$(title_case "$suffix")"
    fi
  else
    title_case "$value"
  fi
}

formatted_model="$(format_model "$model")"
formatted_effort="$(title_case "$effort")"

if [[ -n "$formatted_effort" ]]; then
  printf 'Co-authored-by: Codex %s %s <noreply@openai.com>\n' "$formatted_model" "$formatted_effort"
else
  printf 'Co-authored-by: Codex %s <noreply@openai.com>\n' "$formatted_model"
fi

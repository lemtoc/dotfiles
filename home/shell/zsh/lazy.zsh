# widget definitions (moved from nonlazy.zsh to reduce synchronous startup cost)
function _backward-delete-char-clear() {
  zle backward-delete-char
  zle reset-prompt
}
zle -N _backward-delete-char-clear
bindkey '^?' _backward-delete-char-clear

function _history-beginning-search-backward-end {
  if [[ $BUFFER != "${_hbs_expected:-}" ]]; then
    _hbs_prefix_len=$CURSOR
  fi
  CURSOR=$_hbs_prefix_len
  zle .history-beginning-search-backward
  CURSOR=$#BUFFER
  _hbs_expected=$BUFFER
  unset POSTDISPLAY
}
zle -N _history-beginning-search-backward-end

function _history-beginning-search-forward-end {
  if [[ $BUFFER != "${_hbs_expected:-}" ]]; then
    _hbs_prefix_len=$CURSOR
  fi
  CURSOR=$_hbs_prefix_len
  zle .history-beginning-search-forward
  CURSOR=$#BUFFER
  _hbs_expected=$BUFFER
  unset POSTDISPLAY
}
zle -N _history-beginning-search-forward-end

bindkey "^[[A" _history-beginning-search-backward-end
bindkey "^[[B" _history-beginning-search-forward-end

# custom functions
tp() {
  if [ -z "$1" ]; then
    printf "Command: \e[90mtp\e[0m\n"
    printf "Description: \e[32mCreate a file and its parent directories in one step if they don't exist.\e[0m\n"
    printf "Usage: \e[90mtp <file-path>\e[0m\n"
    printf "Example: \e[90mtp /path/to/your/file.txt\e[0m\n"
  else
    mkdir -p -- "$(dirname -- "$1")" && touch -- "$1"
  fi
}

mcd() {
  if [ -z "$1" ]; then
    printf "Command: \e[90mmcd\e[0m\n"
    printf "Description: \e[32mCreate a directory and move into it in one step.\e[0m\n"
    printf "Usage: \e[90mmcd <dir-name>\e[0m\n"
    printf "Example: \e[90mmcd /path/to/your/directory\e[0m\n"
  else
    mkdir -p -- "$1" && cd -- "$1"
  fi
}

toggle-env() {
  local dir="${1:-.}"
  if [ -f "$dir/.env.stg" ]; then
    mv "$dir/.env.local" "$dir/.env.dev"
    mv "$dir/.env.stg"   "$dir/.env.local"
    echo "DEV -> STG"
  elif [ -f "$dir/.env.dev" ]; then
    mv "$dir/.env.local" "$dir/.env.stg"
    mv "$dir/.env.dev"   "$dir/.env.local"
    echo "STG -> DEV"
  else
    echo "error: .env.stg / .env.dev が見つかりません" >&2
  fi
}

# interactive-only aliases
[[ -o interactive ]] && alias cd='z'
[[ -o interactive ]] && alias cdi='zi'

# git-wt (cache, regenerate when .zshrc symlink target changes)
git_wt_cache="${XDG_CACHE_HOME:-$HOME/.cache}/sheldon/git-wt.zsh"
if [[ ! -r "$git_wt_cache" || "$(readlink ~/.zshrc)" != "$(cat "${git_wt_cache}.lock" 2>/dev/null)" ]]; then
  mkdir -p "${git_wt_cache:h}"
  git wt --init zsh > "$git_wt_cache"
  readlink ~/.zshrc > "${git_wt_cache}.lock"
fi
source "$git_wt_cache"
unset git_wt_cache

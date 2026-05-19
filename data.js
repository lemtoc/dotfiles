window.BENCHMARK_DATA = {
  "lastUpdate": 1779149929050,
  "repoUrl": "https://github.com/mfyuu/dotfiles",
  "entries": {
    "Zsh Startup Time": [
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "f69c702fd4a5f0395a5cc32e1decf7b381acc654",
          "message": "chore(ci): serve benchmark results from root of gh-pages",
          "timestamp": "2026-02-25T16:40:09+09:00",
          "tree_id": "ab05845e7367ee9816c4d0440f9854fe142f58db",
          "url": "https://github.com/mfyuu/dotfiles/commit/f69c702fd4a5f0395a5cc32e1decf7b381acc654"
        },
        "date": 1772005381566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.96,
            "range": "6.48 ms",
            "unit": "ms",
            "extra": "median: 38.96 ms\nmin: 37.21 ms\nmax: 67.3 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "4dd71448e3663a58f6ca2e34aded1ef89e2d8e5e",
          "message": "docs: add benchmark section to README",
          "timestamp": "2026-02-25T16:44:54+09:00",
          "tree_id": "8db9f9604ecb307fa3cddfdd74556c817c277803",
          "url": "https://github.com/mfyuu/dotfiles/commit/4dd71448e3663a58f6ca2e34aded1ef89e2d8e5e"
        },
        "date": 1772005657156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44.69,
            "range": "16.13 ms",
            "unit": "ms",
            "extra": "median: 44.69 ms\nmin: 35.74 ms\nmax: 119.95 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0ae1f89d186d03bc3f31781eb4a70300d3cc36b",
          "message": "fix(shell): retain prefix during up-arrow history search (#3)\n\n* fix(shell): retain prefix during up-arrow history search (#2)\n\nfast-syntax-highlighting rewrites $LASTWIDGET, causing\nup-line-or-beginning-search to lose the original prefix on\nconsecutive invocations.\n\nReplace it with a custom wrapper around the builtin\n.history-beginning-search-backward that:\n- tracks continuation via $BUFFER comparison instead of $LASTWIDGET\n- moves cursor to end-of-line after each match\n- clears stale POSTDISPLAY left by zsh-autosuggestions\n\n* feat(ci): add PR benchmark workflow with composite actions\n\n- extract common steps into reusable composite actions\n- create setup-bench-env action for Nix install and environment setup\n- create run-benchmark action for hyperfine execution\n- add benchmark-pr.yml to run benchmarks on pull requests\n- refactor benchmark.yml to use composite actions\n- remove redundant zsh warmup (hyperfine --warmup handles it)\n\n* fix(ci): disable git commit signing in PR benchmark workflow\n\n- benchmark-action internally commits to gh-pages even with\n  save-data-file: false, causing failure due to missing 1Password\n  SSH signer in CI",
          "timestamp": "2026-02-26T08:20:02+09:00",
          "tree_id": "efa42bd2a01026ace59abf132eff5db16fddc18b",
          "url": "https://github.com/mfyuu/dotfiles/commit/c0ae1f89d186d03bc3f31781eb4a70300d3cc36b"
        },
        "date": 1772061766013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 45.51,
            "range": "9.24 ms",
            "unit": "ms",
            "extra": "median: 45.51 ms\nmin: 35.96 ms\nmax: 68.04 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e6f0f71c81d29c9173473495a5c6a053382c648",
          "message": "fix(M4Pro): add corporate SSL certificate config (#5)\n\n* fix(M4Pro): add corporate SSL certificate config for deno, node, and git\n\n* fix(ci): use GIT_SSL_CAINFO env var instead of git config sslCAInfo\n\n- programs.git.settings.http.sslCAInfo writes to .config/git/config\n- CI symlinks home-manager output, so sslCAInfo leaks into the runner\n- runner has no cert file at that path, causing git fetch to fail\n- use GIT_SSL_CAINFO env var instead (not written to git config)",
          "timestamp": "2026-02-27T11:47:53+09:00",
          "tree_id": "49689f4e53917b07c1e6c5328b35b049282b8f02",
          "url": "https://github.com/mfyuu/dotfiles/commit/4e6f0f71c81d29c9173473495a5c6a053382c648"
        },
        "date": 1772160865580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.2,
            "range": "2.41 ms",
            "unit": "ms",
            "extra": "median: 37.2 ms\nmin: 35.57 ms\nmax: 49.75 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b16e0a3bd748071f2ae62a2a085c4f8b3ac31ce",
          "message": "fix(M4Pro): add AWS_CA_BUNDLE for corporate SSL proxy (#7)\n\n- AWS CLI (Python-based) uses AWS_CA_BUNDLE env var to specify the CA certificate path\n- SSL_CERT_FILE also works, but AWS_CA_BUNDLE is preferred per AWS official documentation",
          "timestamp": "2026-02-27T12:24:25+09:00",
          "tree_id": "e2aa793da9e83b93ee5366f7de558fa5eba9cebf",
          "url": "https://github.com/mfyuu/dotfiles/commit/7b16e0a3bd748071f2ae62a2a085c4f8b3ac31ce"
        },
        "date": 1772162827759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.19,
            "range": "4.19 ms",
            "unit": "ms",
            "extra": "median: 41.19 ms\nmin: 39.76 ms\nmax: 59.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b14e393815e97ed1dc237298563a36efcc3a3843",
          "message": "feat: migrate repo path from ~/dev/dotfiles to ~/.dotfiles (#9)",
          "timestamp": "2026-02-27T12:45:50+09:00",
          "tree_id": "ba7a78cffd93ad083ca9259281e9853200bad240",
          "url": "https://github.com/mfyuu/dotfiles/commit/b14e393815e97ed1dc237298563a36efcc3a3843"
        },
        "date": 1772164144711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.68,
            "range": "16.96 ms",
            "unit": "ms",
            "extra": "median: 62.68 ms\nmin: 31.53 ms\nmax: 102.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b14e393815e97ed1dc237298563a36efcc3a3843",
          "message": "feat: migrate repo path from ~/dev/dotfiles to ~/.dotfiles (#9)",
          "timestamp": "2026-02-27T12:45:50+09:00",
          "tree_id": "ba7a78cffd93ad083ca9259281e9853200bad240",
          "url": "https://github.com/mfyuu/dotfiles/commit/b14e393815e97ed1dc237298563a36efcc3a3843"
        },
        "date": 1772164923617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.92,
            "range": "3.72 ms",
            "unit": "ms",
            "extra": "median: 38.92 ms\nmin: 37.64 ms\nmax: 53.62 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772767260481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 54.02,
            "range": "10.94 ms",
            "unit": "ms",
            "extra": "median: 54.02 ms\nmin: 42.15 ms\nmax: 82.69 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772767802120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.51,
            "range": "27.72 ms",
            "unit": "ms",
            "extra": "median: 62.51 ms\nmin: 22.18 ms\nmax: 158.48 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772768081183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 46.57,
            "range": "14.21 ms",
            "unit": "ms",
            "extra": "median: 46.57 ms\nmin: 40.66 ms\nmax: 97.32 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6ceb5d0c43f7078b15ed4a8bbc316dbd7b312fb7",
          "message": "chore: update flake dependencies and add dbeaver-community\n\n- update home-manager, nix-darwin, and nixpkgs\n- add dbeaver-community to homebrew casks",
          "timestamp": "2026-03-06T13:03:50+09:00",
          "tree_id": "637cd05cc805f1b196e89d1f7f4dab47a61186d2",
          "url": "https://github.com/mfyuu/dotfiles/commit/6ceb5d0c43f7078b15ed4a8bbc316dbd7b312fb7"
        },
        "date": 1772770034389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 53.93,
            "range": "9.14 ms",
            "unit": "ms",
            "extra": "median: 53.93 ms\nmin: 43.43 ms\nmax: 92.83 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6892d02e9471654f50b0d11156605f57d356df32",
          "message": "chore: update flake dependencies and add aqua-voice\n\n- update home-manager, nix-darwin, and nixpkgs dependencies\n- add aqua-voice cask to homebrew packages",
          "timestamp": "2026-03-10T10:22:05+09:00",
          "tree_id": "0ee80b6e2a6b6ed250150e8689b0589c19d260a2",
          "url": "https://github.com/mfyuu/dotfiles/commit/6892d02e9471654f50b0d11156605f57d356df32"
        },
        "date": 1773105917105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 57.31,
            "range": "14.88 ms",
            "unit": "ms",
            "extra": "median: 57.31 ms\nmin: 42.42 ms\nmax: 108.28 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a94aca94cca839032e6b9bb74bb46bed33283e64",
          "message": "chore: update flake dependencies and add fish shell\n\n- update home-manager and nixpkgs in flake.lock\n- add fish shell to home packages\n- add opencode tool from anomalyco/tap to homebrew",
          "timestamp": "2026-03-12T00:13:48+09:00",
          "tree_id": "a2fd68753554a0545c5c5eed535ab9fd87989935",
          "url": "https://github.com/mfyuu/dotfiles/commit/a94aca94cca839032e6b9bb74bb46bed33283e64"
        },
        "date": 1773242218649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 49.72,
            "range": "15.11 ms",
            "unit": "ms",
            "extra": "median: 49.72 ms\nmin: 36.74 ms\nmax: 96.29 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6f672544858decd67927bf9cc453837b0e7b3294",
          "message": "chore: update flake dependencies\n\n- update home-manager to rev 57d5560\n- update nixpkgs to rev a07d4ce",
          "timestamp": "2026-03-18T01:51:25+09:00",
          "tree_id": "03c77855d868c850b785c9c3eaab90368a01cafb",
          "url": "https://github.com/mfyuu/dotfiles/commit/6f672544858decd67927bf9cc453837b0e7b3294"
        },
        "date": 1773766519222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 64.47,
            "range": "19.58 ms",
            "unit": "ms",
            "extra": "median: 64.47 ms\nmin: 38.81 ms\nmax: 131.24 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "c4d4c1b3b21631b9a75816052f6815d2b00c475a",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-03-23T08:32:36+09:00",
          "tree_id": "fb22a37384669d04ae2a23d194efcb214f1dce6e",
          "url": "https://github.com/mfyuu/dotfiles/commit/c4d4c1b3b21631b9a75816052f6815d2b00c475a"
        },
        "date": 1774223258611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 58.91,
            "range": "7.43 ms",
            "unit": "ms",
            "extra": "median: 58.91 ms\nmin: 50.65 ms\nmax: 85.37 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "b0f221f8f1dda9141cb62344ec3299209ab14b09",
          "message": "feat(skills): improve parallel-review and review-merge skills\n\n- add session resume hint after parallel-review completes (shows /rename {ulid})\n- add session resume hint after review-merge completes (shows /rename {ulid})\n- normalize numeric/hash-prefixed arguments in review-merge to pr-{n} prefix",
          "timestamp": "2026-03-25T13:29:28+09:00",
          "tree_id": "d3966c7416072b3b7d2e9c1370fee198e95f2ec1",
          "url": "https://github.com/mfyuu/dotfiles/commit/b0f221f8f1dda9141cb62344ec3299209ab14b09"
        },
        "date": 1774414099892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 63.35,
            "range": "11.52 ms",
            "unit": "ms",
            "extra": "median: 63.35 ms\nmin: 47.4 ms\nmax: 102.94 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "11ca993de8fcc992dd293561ff25b037f2cc377c",
          "message": "chore: update flake dependencies\n\n- add overlay to fix direnv 2.37.1 build (CGO_ENABLED mismatch in nixpkgs)",
          "timestamp": "2026-03-25T13:57:52+09:00",
          "tree_id": "1005420f38e4eb521d1075483ed20d54b0e352df",
          "url": "https://github.com/mfyuu/dotfiles/commit/11ca993de8fcc992dd293561ff25b037f2cc377c"
        },
        "date": 1774414838923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 43.28,
            "range": "12.84 ms",
            "unit": "ms",
            "extra": "median: 43.28 ms\nmin: 36.45 ms\nmax: 93.26 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "4e92eea70cec441e1ae98edbd72fde307ab17016",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-03-26T23:20:40+09:00",
          "tree_id": "311ad006097627c588d73b20e2e9d9c59b8c8ed3",
          "url": "https://github.com/mfyuu/dotfiles/commit/4e92eea70cec441e1ae98edbd72fde307ab17016"
        },
        "date": 1774535028709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 56.55,
            "range": "18.51 ms",
            "unit": "ms",
            "extra": "median: 56.55 ms\nmin: 40.48 ms\nmax: 111.13 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "fd3240887079165593db399a22a7262d09ac9b34",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-04-08T22:39:57+09:00",
          "tree_id": "c3d7321ca95ae65685a1122b1b522b076dfb5dfa",
          "url": "https://github.com/mfyuu/dotfiles/commit/fd3240887079165593db399a22a7262d09ac9b34"
        },
        "date": 1775656408729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 55.43,
            "range": "7.3 ms",
            "unit": "ms",
            "extra": "median: 55.43 ms\nmin: 39.01 ms\nmax: 75.47 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a9c6c2f1e2a458ca80b50c9d8b8b12e442d1c515",
          "message": "chore(skills): fix .review/ output dir and allowed-tools in parallel-review and review-merge\n\n- resolve repository root via git rev-parse --show-toplevel instead of relative path to stabilize .review/ location in monorepos\n- add Bash(git rev-parse:*) to allowed-tools in both skills\n- add Agent to parallel-review allowed-tools to prevent permission prompts when spawning 4 parallel review agents",
          "timestamp": "2026-04-09T21:06:35+09:00",
          "tree_id": "d048d17a27876f26776aba8e79108fc679e3dd78",
          "url": "https://github.com/mfyuu/dotfiles/commit/a9c6c2f1e2a458ca80b50c9d8b8b12e442d1c515"
        },
        "date": 1775736594308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 49.47,
            "range": "16.85 ms",
            "unit": "ms",
            "extra": "median: 49.47 ms\nmin: 40.06 ms\nmax: 89.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "09fa97635f7cc9a80b4034404e529f4fd2f088b6",
          "message": "chore: update flake dependencies\n\n- bump home-manager to 7ba4ee4228ed36123c7cb75d50524b43514ef992\n- bump nixpkgs to 456e8a9468b9d46bd8c9524425026c00745bc4d2",
          "timestamp": "2026-04-09T21:12:23+09:00",
          "tree_id": "959a0f74423049a45e35caccb9e7b631facb899c",
          "url": "https://github.com/mfyuu/dotfiles/commit/09fa97635f7cc9a80b4034404e529f4fd2f088b6"
        },
        "date": 1775737013752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 81.99,
            "range": "12.21 ms",
            "unit": "ms",
            "extra": "median: 81.99 ms\nmin: 62.18 ms\nmax: 112.91 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "09fa97635f7cc9a80b4034404e529f4fd2f088b6",
          "message": "chore: update flake dependencies\n\n- bump home-manager to 7ba4ee4228ed36123c7cb75d50524b43514ef992\n- bump nixpkgs to 456e8a9468b9d46bd8c9524425026c00745bc4d2",
          "timestamp": "2026-04-09T21:12:23+09:00",
          "tree_id": "959a0f74423049a45e35caccb9e7b631facb899c",
          "url": "https://github.com/mfyuu/dotfiles/commit/09fa97635f7cc9a80b4034404e529f4fd2f088b6"
        },
        "date": 1776039028253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.66,
            "range": "2.24 ms",
            "unit": "ms",
            "extra": "median: 41.66 ms\nmin: 36.9 ms\nmax: 47.91 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "27b08634a4ba9935112ce33e4e449f375ac5b5c8",
          "message": "fix: pin nixpkgs to avoid vscode glibc evaluation error on darwin",
          "timestamp": "2026-04-13T09:08:52+09:00",
          "tree_id": "258a05b2e3332e085367225f08fe6ac7d34fedce",
          "url": "https://github.com/mfyuu/dotfiles/commit/27b08634a4ba9935112ce33e4e449f375ac5b5c8"
        },
        "date": 1776039219584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.25,
            "range": "2.03 ms",
            "unit": "ms",
            "extra": "median: 38.25 ms\nmin: 35.97 ms\nmax: 48.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "91454992805b9af663145fc968b907f916f1875e",
          "message": "chore(claude): add model and outputStyle settings\n\n- set model to claude-sonnet-4-6 for explicit model pinning\n- add outputStyle as Explanatory for verbose response formatting",
          "timestamp": "2026-04-15T10:26:21+09:00",
          "tree_id": "4872e7ff46dbdd8122cb0de72793a9d6e3e46619",
          "url": "https://github.com/mfyuu/dotfiles/commit/91454992805b9af663145fc968b907f916f1875e"
        },
        "date": 1776216593179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 51.42,
            "range": "13.68 ms",
            "unit": "ms",
            "extra": "median: 51.42 ms\nmin: 39.03 ms\nmax: 97.12 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "562fdb7cbab22acdde79903e4be702ab9f58235f",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-04-20T09:23:55+09:00",
          "tree_id": "e9424c5285f83158f590c45f7c1526bf056e306d",
          "url": "https://github.com/mfyuu/dotfiles/commit/562fdb7cbab22acdde79903e4be702ab9f58235f"
        },
        "date": 1776644838166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 60.05,
            "range": "9.06 ms",
            "unit": "ms",
            "extra": "median: 60.05 ms\nmin: 46.49 ms\nmax: 91.88 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "1ace628b0492ec495823c84e14256e7524118c3f",
          "message": "chore(claude): refine skills and switch statusline\n\n- switch statusline from ccusage to ccstatusline with zero padding\n- add issue-start skill symlink in claude.nix\n- drop model pinning from commit and create-pr skills\n- require bullet-pointed body in every commit with no exceptions\n- add scope-language rule so Japanese scopes are allowed for Japanese commits and PRs\n- document HEREDOC quoting pitfalls and recommend `<<'EOF'` when messages contain backticks",
          "timestamp": "2026-04-23T02:03:23+09:00",
          "tree_id": "db92c5628c323733827341411de8f4a279676aa6",
          "url": "https://github.com/mfyuu/dotfiles/commit/1ace628b0492ec495823c84e14256e7524118c3f"
        },
        "date": 1776877823868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.46,
            "range": "12.64 ms",
            "unit": "ms",
            "extra": "median: 62.46 ms\nmin: 41.81 ms\nmax: 105.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "3dd4c0d3af7c50666f8cec7a905545f4036488b3",
          "message": "chore: update flake dependencies\n\n- bump home-manager to 936d579f53afa05fc2939c18541e4c9982421e0a",
          "timestamp": "2026-04-23T02:04:31+09:00",
          "tree_id": "4e88d0687900f2050dbfb01ce7582089e7a5f8c4",
          "url": "https://github.com/mfyuu/dotfiles/commit/3dd4c0d3af7c50666f8cec7a905545f4036488b3"
        },
        "date": 1776878199321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 69.57,
            "range": "16.84 ms",
            "unit": "ms",
            "extra": "median: 69.57 ms\nmin: 44.22 ms\nmax: 140.29 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "904f34fe29bbbb907f2dbd759b5e940fdbb57969",
          "message": "feat(claude): add create-branch skill\n\n- add SKILL.md describing the `prefix/{issue-no}-summary` branch naming convention\n- classify input as issue reference, free-form description, or empty\n- fetch issue metadata via `gh issue view` to derive number, title, and prefix\n- map issue labels and Japanese keywords to Conventional Commits prefixes\n- generate English kebab-case slugs even for Japanese descriptions\n- confirm the proposed branch name via `AskUserQuestion` before creating\n- run pre-flight checks for name collision, working tree state, and base branch\n- register the new skill file in home/claude.nix",
          "timestamp": "2026-05-01T10:37:35+09:00",
          "tree_id": "1dcf88550a18d602dc2229d283b221ae965179fb",
          "url": "https://github.com/mfyuu/dotfiles/commit/904f34fe29bbbb907f2dbd759b5e940fdbb57969"
        },
        "date": 1777599664593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 36.66,
            "range": "2.34 ms",
            "unit": "ms",
            "extra": "median: 36.66 ms\nmin: 36.22 ms\nmax: 45.7 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "13b8170e6deae3f61826e2563654fb5a0bd1bd9d",
          "message": "chore(brew): add k1low/tap/mo",
          "timestamp": "2026-05-14T10:32:36+09:00",
          "tree_id": "b42817a20cbc304129c198666398c3b7a3246218",
          "url": "https://github.com/mfyuu/dotfiles/commit/13b8170e6deae3f61826e2563654fb5a0bd1bd9d"
        },
        "date": 1778722925752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.39,
            "range": "12.5 ms",
            "unit": "ms",
            "extra": "median: 42.39 ms\nmin: 34.13 ms\nmax: 90.39 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "b7cdbb0fd0b681354fe93c0a77df6939359824c1",
          "message": "chore: update flake dependencies",
          "timestamp": "2026-05-18T20:28:10+09:00",
          "tree_id": "df8b3e34949ec4947de277374f9695d46f087c87",
          "url": "https://github.com/mfyuu/dotfiles/commit/b7cdbb0fd0b681354fe93c0a77df6939359824c1"
        },
        "date": 1779103922937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44,
            "range": "5.19 ms",
            "unit": "ms",
            "extra": "median: 44 ms\nmin: 35.08 ms\nmax: 54.42 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "ea7d8cc781cf6a5a43ffa38ec717de684441012c",
          "message": "chore: update home-manager flake input\n\n- bump home-manager to 736c2084ea750a049ecdbdd7ff5817d2eeeef444\n- refresh narHash and lastModified for the new revision",
          "timestamp": "2026-05-19T09:15:42+09:00",
          "tree_id": "0b00cd944c34710a175f6e2003fecddb82bd4996",
          "url": "https://github.com/mfyuu/dotfiles/commit/ea7d8cc781cf6a5a43ffa38ec717de684441012c"
        },
        "date": 1779149927232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.01,
            "range": "0.56 ms",
            "unit": "ms",
            "extra": "median: 37.01 ms\nmin: 36.51 ms\nmax: 38.86 ms\nruns: 50"
          }
        ]
      }
    ]
  }
}
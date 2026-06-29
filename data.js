window.BENCHMARK_DATA = {
  "lastUpdate": 1782694850790,
  "repoUrl": "https://github.com/lemtoc/dotfiles",
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
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d243301bba0ccc906b348e60978fe2b272eadc6a",
          "message": "perf(shell): use precompiled mise binary to skip Rust source build\n\nnixpkgs.mise and the official mise-flake both rely on rustPlatform.buildRustPackage,\nwhich expands into 800+ derivations and consistently misses cache.nixos.org for\naarch64-darwin. CI hit the 30-minute job timeout while compiling mise from source\non every push.\n\nWrap the upstream macOS arm64 release tarball with fetchurl + stdenv.mkDerivation\nand inject it via programs.mise.package. The same activationPackage build that\npreviously enqueued 805 derivations now requires 9 and completes in under 10\nseconds.",
          "timestamp": "2026-05-20T16:29:41+09:00",
          "tree_id": "edc34d96c8165732f7a7cab91ddd4487106aa024",
          "url": "https://github.com/lemtoc/dotfiles/commit/d243301bba0ccc906b348e60978fe2b272eadc6a"
        },
        "date": 1779262473939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44.38,
            "range": "6.57 ms",
            "unit": "ms",
            "extra": "median: 44.38 ms\nmin: 39.69 ms\nmax: 63.68 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "5c26ef6848ab49e6e3a8511e88dfe74f79a29179",
          "message": "chore(scripts): add rename-claude-projects utility\n\nSibling utility to scripts/rewrite-gh-remotes.sh. Migrates\n~/.claude/projects/-Users-<old>-* directories to <new> after a macOS\nshortname change, so /resume continues to find past sessions.",
          "timestamp": "2026-05-22T15:10:14+09:00",
          "tree_id": "0cc7ce2e5fff0ce143104435fc0215dd9be3bfd9",
          "url": "https://github.com/lemtoc/dotfiles/commit/5c26ef6848ab49e6e3a8511e88dfe74f79a29179"
        },
        "date": 1779431981076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.88,
            "range": "3.94 ms",
            "unit": "ms",
            "extra": "median: 38.88 ms\nmin: 35.65 ms\nmax: 54.61 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ac570a88b739ddbf57f5842288def58bc8d13f68",
          "message": "chore(scripts): add rewrite-zoxide-history utility\n\nRewrites zoxide's db.zo to remap user home prefixes (e.g. mfyuu/lemtoc\nto t1190078) after the macOS short name change, with rank merging and\noptional pruning of missing dirs.",
          "timestamp": "2026-05-22T16:01:25+09:00",
          "tree_id": "146e1f7e9714de066a36e8eb80186c7bf0575212",
          "url": "https://github.com/lemtoc/dotfiles/commit/ac570a88b739ddbf57f5842288def58bc8d13f68"
        },
        "date": 1779433492181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 52.25,
            "range": "7.35 ms",
            "unit": "ms",
            "extra": "median: 52.25 ms\nmin: 46.69 ms\nmax: 81.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "82f7ccb9a2b807049cf4f49c9a4705bcce55c1eb",
          "message": "chore(claude): extend session retention to 365 days\n\nClaude Code's default `cleanupPeriodDays` of 30 days silently prunes\ntop-level session jsonl files older than that window, which is how a\nfew months of koutei history vanished after the macOS user rename\neven though the per-uuid subagent directories remained. Bump retention\nto a year so resume stays useful across longer rename / cleanup gaps.",
          "timestamp": "2026-05-22T16:27:19+09:00",
          "tree_id": "7d51b55d1879fcd72175eb5cb4091a01dae108b8",
          "url": "https://github.com/lemtoc/dotfiles/commit/82f7ccb9a2b807049cf4f49c9a4705bcce55c1eb"
        },
        "date": 1779435443060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 88.96,
            "range": "30.39 ms",
            "unit": "ms",
            "extra": "median: 88.96 ms\nmin: 49.11 ms\nmax: 197.58 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d7874736b6534d1570467137f9c511d9862dd8b7",
          "message": "chore(claude): default to sonnet instead of opus\n\nMost day-to-day coding tasks don't need opus-level reasoning, and sonnet\nis meaningfully faster / cheaper. Use the unversioned alias so future\nsonnet releases pick up automatically.",
          "timestamp": "2026-05-22T16:30:22+09:00",
          "tree_id": "cc06bc02e490926a02a9bcc852d5136edb9b7f6a",
          "url": "https://github.com/lemtoc/dotfiles/commit/d7874736b6534d1570467137f9c511d9862dd8b7"
        },
        "date": 1779435630176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 39.32,
            "range": "13.73 ms",
            "unit": "ms",
            "extra": "median: 39.32 ms\nmin: 36.04 ms\nmax: 119 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ed2d7cc704f2552ae00191edef9ab2a7d6a3d51e",
          "message": "chore: update flake.lock\n\nBump home-manager 2026-05-19 -> 2026-05-21 (bd868f7 -> 928d723)\nand nixpkgs 2026-05-15 -> 2026-05-21 (d233902 -> 4a29d73).",
          "timestamp": "2026-05-22T16:46:41+09:00",
          "tree_id": "4080088c077618e0bb4cd0baede574ec63fe7222",
          "url": "https://github.com/lemtoc/dotfiles/commit/ed2d7cc704f2552ae00191edef9ab2a7d6a3d51e"
        },
        "date": 1779436256996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 65.2,
            "range": "32.18 ms",
            "unit": "ms",
            "extra": "median: 65.2 ms\nmin: 32.47 ms\nmax: 208.31 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "007ec2856e6afb9b1116e48f0c2126e0cda9db0b",
          "message": "refactor(nix): parameterize username via specialArgs per host\n\n- add `username` arg to `mkDarwinConfig` and thread through `specialArgs`\n- add `home-manager.extraSpecialArgs` to propagate `username` into home modules\n- replace hardcoded `t1190078` with `${username}` in common/default.nix and M4Pro config\n- declare M4Pro username as `t1190078`, M4Air as `lemtoc` in flake.nix",
          "timestamp": "2026-05-22T17:32:32+09:00",
          "tree_id": "bff6340c092f93e4665454cb0c43773e6f96a7c3",
          "url": "https://github.com/lemtoc/dotfiles/commit/007ec2856e6afb9b1116e48f0c2126e0cda9db0b"
        },
        "date": 1779438960695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 74.87,
            "range": "19.47 ms",
            "unit": "ms",
            "extra": "median: 74.87 ms\nmin: 38.81 ms\nmax: 139.78 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "007ec2856e6afb9b1116e48f0c2126e0cda9db0b",
          "message": "refactor(nix): parameterize username via specialArgs per host\n\n- add `username` arg to `mkDarwinConfig` and thread through `specialArgs`\n- add `home-manager.extraSpecialArgs` to propagate `username` into home modules\n- replace hardcoded `t1190078` with `${username}` in common/default.nix and M4Pro config\n- declare M4Pro username as `t1190078`, M4Air as `lemtoc` in flake.nix",
          "timestamp": "2026-05-22T17:32:32+09:00",
          "tree_id": "bff6340c092f93e4665454cb0c43773e6f96a7c3",
          "url": "https://github.com/lemtoc/dotfiles/commit/007ec2856e6afb9b1116e48f0c2126e0cda9db0b"
        },
        "date": 1779439349871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 74.99,
            "range": "14.25 ms",
            "unit": "ms",
            "extra": "median: 74.99 ms\nmin: 50.81 ms\nmax: 100.11 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4b50c57137e781ae5c3c1dc251e165b387db2657",
          "message": "refactor(nix): migrate bun and pnpm from nix to mise globalConfig\n\n- remove bun and pnpm from home.packages (home/pkgs.nix)\n- add node (lts), bun (latest), pnpm (latest) to mise globalConfig\n- update comment in pkgs.nix to reflect the new managed tools",
          "timestamp": "2026-05-26T08:49:12+09:00",
          "tree_id": "7b458352328f18eb33eed96fffaebbd059b442ac",
          "url": "https://github.com/lemtoc/dotfiles/commit/4b50c57137e781ae5c3c1dc251e165b387db2657"
        },
        "date": 1779753156891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.14,
            "range": "1.35 ms",
            "unit": "ms",
            "extra": "median: 37.14 ms\nmin: 36.41 ms\nmax: 43.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "a91ffa23b65c1245337a5f043294efe5d5398726",
          "message": "chore(codex): migrate prompts to skills\n\n- move commit and create-pr prompts into Codex skill directories\n- install skills through .agents/skills so Codex discovers folder symlinks\n- add OpenAI agent metadata for skill picker display",
          "timestamp": "2026-05-27T17:29:29+09:00",
          "tree_id": "ee82f842e7e9f00e3211e83f2e4746c74032fe94",
          "url": "https://github.com/lemtoc/dotfiles/commit/a91ffa23b65c1245337a5f043294efe5d5398726"
        },
        "date": 1779870764007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.44,
            "range": "2.14 ms",
            "unit": "ms",
            "extra": "median: 42.44 ms\nmin: 41.23 ms\nmax: 49.61 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "ea8b2bd3782ddae85c00a002af47407f2709d0d6",
          "message": "docs(codex): document JavaScript toolchain usage\n\n- require JavaScript and TypeScript commands to use the project toolchain\n- prefer `mise exec` when running package managers or Node-dependent commands\n- document package manager detection from `package.json` and lockfiles",
          "timestamp": "2026-05-27T17:50:56+09:00",
          "tree_id": "47ffd94fb6d9a2cdeac92f81e95b3f8c4e8abd8d",
          "url": "https://github.com/lemtoc/dotfiles/commit/ea8b2bd3782ddae85c00a002af47407f2709d0d6"
        },
        "date": 1779872060876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 35.93,
            "range": "2.94 ms",
            "unit": "ms",
            "extra": "median: 35.93 ms\nmin: 34.47 ms\nmax: 47.37 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "b4d856cf1c8b9f83459b79af158081ca297c3cda",
          "message": "docs(codex): simplify commit and PR instructions\n\n- remove Claude Code-specific AskUserQuestion guidance\n- replace commit and PR skills with compact Codex workflows\n- ignore local .codex directories in global git excludes\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-05-28T11:15:12+09:00",
          "tree_id": "1d7a2d0cc69c5480feb6616996e77782c79de9a6",
          "url": "https://github.com/lemtoc/dotfiles/commit/b4d856cf1c8b9f83459b79af158081ca297c3cda"
        },
        "date": 1779934760834,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.28,
            "range": "3.13 ms",
            "unit": "ms",
            "extra": "median: 42.28 ms\nmin: 38.19 ms\nmax: 53.12 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "27503022273811a228d45e0bcb727f61299f7865",
          "message": "fix(mise): configure default Node.js runtime\n\n- set Node.js LTS as the default mise-managed runtime\n- ensure Home Manager writes the mise global tools config\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-05-28T11:26:00+09:00",
          "tree_id": "e02d5b90254ece0483ec10572116ba8aecc60848",
          "url": "https://github.com/lemtoc/dotfiles/commit/27503022273811a228d45e0bcb727f61299f7865"
        },
        "date": 1779935351527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 35.34,
            "range": "5.68 ms",
            "unit": "ms",
            "extra": "median: 35.34 ms\nmin: 34.43 ms\nmax: 58.55 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "22706e10258d2fa75eee86d28d642903510d1933",
          "message": "chore(shell): update prompt colors and git ignores\n\n- Set modified and untracked Starship git status colors to match cmd duration yellow\n- Ignore local .pnpm-store directories globally\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-05-28T17:00:44+09:00",
          "tree_id": "f65d10fb1a1a05ceddd1f0456b0406df3ee8dd06",
          "url": "https://github.com/lemtoc/dotfiles/commit/22706e10258d2fa75eee86d28d642903510d1933"
        },
        "date": 1779955437073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 42.68,
            "range": "5.11 ms",
            "unit": "ms",
            "extra": "median: 42.68 ms\nmin: 39.83 ms\nmax: 63.59 ms\nruns: 50"
          }
        ]
      }
    ],
    "Fish Startup Time": [
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e81429e553d71b67820c475fe5977207ce803bc0",
          "message": "fix(ci): switch benchmark from zsh to fish\n\n- remove sheldon cache pre-population (sheldon no longer installed since zsh.nix is not imported)\n- remove zsh dotfile symlinks (.zshrc, .zshenv, .zprofile) no longer generated\n- propagate home-manager bin path via GITHUB_PATH for cross-step availability\n- change hyperfine target from 'zsh -i -c exit' to 'fish -i -c exit'\n- remove unused hm_gen input from run-benchmark action\n- rename workflow/job names from \"Zsh Startup *\" to \"Fish Startup *\"",
          "timestamp": "2026-06-04T13:12:21+09:00",
          "tree_id": "839cb3b87f029e5277f9edfd384f7f26b13fe0ee",
          "url": "https://github.com/lemtoc/dotfiles/commit/e81429e553d71b67820c475fe5977207ce803bc0"
        },
        "date": 1780546658626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 223.86,
            "range": "13.75 ms",
            "unit": "ms",
            "extra": "median: 223.86 ms\nmin: 208.67 ms\nmax: 267.5 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0402942e81c5118e4713816fec69dfc84ff0bd75",
          "message": "chore(claude): remove default model setting",
          "timestamp": "2026-06-04T13:35:39+09:00",
          "tree_id": "b7d37189c59d5935c0c99e58e05ee9c45bab7a98",
          "url": "https://github.com/lemtoc/dotfiles/commit/0402942e81c5118e4713816fec69dfc84ff0bd75"
        },
        "date": 1780548564629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 208.32,
            "range": "4.71 ms",
            "unit": "ms",
            "extra": "median: 208.32 ms\nmin: 200.53 ms\nmax: 226.45 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "a2d4c49c5b8f0114ea0812ab1a9300d001497235",
          "message": "chore(git): ignore playwright-mcp directories\n\n- add **/.playwright-mcp/ to the global git ignore list\n- keep Playwright MCP working directories out of all repos\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-06-04T15:24:56+09:00",
          "tree_id": "d2d284f5f4fb645122240e999d04d0bc401e6a7f",
          "url": "https://github.com/lemtoc/dotfiles/commit/a2d4c49c5b8f0114ea0812ab1a9300d001497235"
        },
        "date": 1780554534032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 550.31,
            "range": "61.04 ms",
            "unit": "ms",
            "extra": "median: 550.31 ms\nmin: 498.39 ms\nmax: 883.62 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "eeea5a986cc827feed1435c11c96f3b225d0f705",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to 447fd9f\n- bump nixpkgs to ffa10e2",
          "timestamp": "2026-06-05T16:01:44+09:00",
          "tree_id": "9e1cc66201ed046dd030f2c4bb68ecb481a447e6",
          "url": "https://github.com/lemtoc/dotfiles/commit/eeea5a986cc827feed1435c11c96f3b225d0f705"
        },
        "date": 1780643429789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 87.31,
            "range": "18.89 ms",
            "unit": "ms",
            "extra": "median: 87.31 ms\nmin: 53.93 ms\nmax: 137.18 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e1d4e6f326b8afcb4c18662d6393c9bace8f7ac6",
          "message": "chore(nix): update home-manager input\n\n- bump home-manager to b2b7db4 (2026-06-05)\n- refresh narHash for the new revision\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-06T18:49:29+09:00",
          "tree_id": "a6fa649d286b30cbf912911b9d9fff40a2291aa0",
          "url": "https://github.com/lemtoc/dotfiles/commit/e1d4e6f326b8afcb4c18662d6393c9bace8f7ac6"
        },
        "date": 1780739607664,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 600.64,
            "range": "11.84 ms",
            "unit": "ms",
            "extra": "median: 600.64 ms\nmin: 562.14 ms\nmax: 632.06 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "e7bd4d250e0375bee2eba6e95cffed893dd46c9a",
          "message": "chore(nix): update flake inputs\n\n- bump nix-darwin to 6a77112\n- bump nixpkgs to cbb5cf3",
          "timestamp": "2026-06-08T10:32:49+09:00",
          "tree_id": "c9ec9b5832a619d8e8b1e4bb78781affdb28657b",
          "url": "https://github.com/lemtoc/dotfiles/commit/e7bd4d250e0375bee2eba6e95cffed893dd46c9a"
        },
        "date": 1780882608045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 217.25,
            "range": "14.25 ms",
            "unit": "ms",
            "extra": "median: 217.25 ms\nmin: 206.91 ms\nmax: 274.34 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "fe2ee36f3a0db6f0fecd942dc70db66b9f9dcc9b",
          "message": "docs(readme): update benchmark URL to new domain\n\n- replace bench.mfyuu.dev with bench.lemtoc.me\n- reflect Cloudflare domain migration from mfyuu.dev to lemtoc.me",
          "timestamp": "2026-06-08T11:13:48+09:00",
          "tree_id": "ca20970e853538de5c8f724964774cc1006568c1",
          "url": "https://github.com/lemtoc/dotfiles/commit/fe2ee36f3a0db6f0fecd942dc70db66b9f9dcc9b"
        },
        "date": 1780885337494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 55.59,
            "range": "5.73 ms",
            "unit": "ms",
            "extra": "median: 55.59 ms\nmin: 47.34 ms\nmax: 72.32 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "d3ac1d2754f654bb6c8263a21b919948c5dea419",
          "message": "chore(nix): update home-manager input\n\n- bump home-manager to df391424 from nix-community\n- refresh lastModified and narHash for the new revision",
          "timestamp": "2026-06-09T11:02:46+09:00",
          "tree_id": "970eae6ef93901175efb3277dda4d34f906567e8",
          "url": "https://github.com/lemtoc/dotfiles/commit/d3ac1d2754f654bb6c8263a21b919948c5dea419"
        },
        "date": 1780970811291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 69.02,
            "range": "18.34 ms",
            "unit": "ms",
            "extra": "median: 69.02 ms\nmin: 57.55 ms\nmax: 141.18 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "f8687fcf2ffb4be3e9f4cf7c0b305f2e79ada53b",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to bd42777\n- bump nixpkgs to 8c3cede",
          "timestamp": "2026-06-10T10:31:59+09:00",
          "tree_id": "fc20dec61a580869287035af95d2aa489141b24c",
          "url": "https://github.com/lemtoc/dotfiles/commit/f8687fcf2ffb4be3e9f4cf7c0b305f2e79ada53b"
        },
        "date": 1781055353209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 72.95,
            "range": "21.43 ms",
            "unit": "ms",
            "extra": "median: 72.95 ms\nmin: 59.94 ms\nmax: 168.13 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "6a2e94b3a09e28b2f0050eab62ecf670542e63b3",
          "message": "chore(nix): add zed editor to homebrew casks\n\n- install zed editor via homebrew cask\n- keep casks list in alphabetical order",
          "timestamp": "2026-06-10T11:44:27+09:00",
          "tree_id": "88a1eb30ee6c3c4f8b62c7032a99d3efa58488a6",
          "url": "https://github.com/lemtoc/dotfiles/commit/6a2e94b3a09e28b2f0050eab62ecf670542e63b3"
        },
        "date": 1781059699286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 67.65,
            "range": "2.79 ms",
            "unit": "ms",
            "extra": "median: 67.65 ms\nmin: 62.69 ms\nmax: 76.98 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0bc6e20e8f77ecf79c0259fd121e55b4d597e96d",
          "message": "fix(nix): use GitHub token for API requests\n\n- Configure mise to resolve GitHub credentials via gh auth token.\n- Pass gh's token to Nix update and switch operations through NIX_CONFIG.\n- Preserve existing GitHub token configuration and avoid storing token values.\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-06-10T20:47:27+09:00",
          "tree_id": "04d1306199d58299ece7ca2e04220a1414933b34",
          "url": "https://github.com/lemtoc/dotfiles/commit/0bc6e20e8f77ecf79c0259fd121e55b4d597e96d"
        },
        "date": 1781105837329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 635,
            "range": "34.17 ms",
            "unit": "ms",
            "extra": "median: 635 ms\nmin: 605.84 ms\nmax: 781.99 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "3855697db3b4964ff479a4c8bbade9a12a254d6d",
          "message": "chore(vscode): consolidate import settings and set fish profile\n\n- replace separate javascript/typescript updateImportsOnFileMove with the unified js/ts setting\n- set fish as the default macOS terminal profile\n- expand presentation-mode command arrays to multi-line formatting",
          "timestamp": "2026-06-11T08:25:09+09:00",
          "tree_id": "00e4a0afbcd5530c8a91273155b035c7b370cd7e",
          "url": "https://github.com/lemtoc/dotfiles/commit/3855697db3b4964ff479a4c8bbade9a12a254d6d"
        },
        "date": 1781134145375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 84.07,
            "range": "30.77 ms",
            "unit": "ms",
            "extra": "median: 84.07 ms\nmin: 56.73 ms\nmax: 187.3 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "99c5744f2daa79f6667b31784e92b302158c9f2c",
          "message": "chore(claude): drop pinned model from skill definitions\n\n- remove the model field from issue-start, parallel-review and review-merge\n- let these skills inherit the session model instead of pinning older opus builds\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-17T10:21:14+09:00",
          "tree_id": "08f960c884f5a4baadcfe70b8f2c420f1b314052",
          "url": "https://github.com/lemtoc/dotfiles/commit/99c5744f2daa79f6667b31784e92b302158c9f2c"
        },
        "date": 1781659531263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 656.31,
            "range": "29.28 ms",
            "unit": "ms",
            "extra": "median: 656.31 ms\nmin: 626.57 ms\nmax: 770.99 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "3aaeb1a1339e3a86c77ac1bbbffd699df3fa48d9",
          "message": "feat(dpca-ide): add EC2 access tooling via SSO and SSM\n\n- add dpca-ide SSO profile with the DPCa-IDE-User role in aws.nix\n- generalize mkSsoProfile into mkSsoProfileWithRole to allow custom roles\n- add dpca-ide ssh host using SSM start-session as ProxyCommand\n- include git-ignored ~/.ssh/config.d/dpca-ide.conf to keep instance id private\n- add mise tasks for aws login/whoami and ec2 start/stop/ssh/connect/status\n- read the instance id from ~/.config/dpca/instance-id to avoid hardcoding it\n- unpin pnpm back to latest in mise.nix",
          "timestamp": "2026-06-18T09:55:03+09:00",
          "tree_id": "e0228924e36591b1803f14e4d6bad863fbf47831",
          "url": "https://github.com/lemtoc/dotfiles/commit/3aaeb1a1339e3a86c77ac1bbbffd699df3fa48d9"
        },
        "date": 1781744361447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 289.17,
            "range": "11.51 ms",
            "unit": "ms",
            "extra": "median: 289.17 ms\nmin: 276.24 ms\nmax: 315.47 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "f42ba0da8f6338b7afff40afcdc1e96cf24b3c01",
          "message": "chore(nix): update flake inputs\n\n- bump home-manager to c187002 (nix-community)\n- bump nix-darwin to ee9c7b9 (LnL7)",
          "timestamp": "2026-06-18T09:56:40+09:00",
          "tree_id": "320b25435f6283a308d06ee13b4821e2f2b906ab",
          "url": "https://github.com/lemtoc/dotfiles/commit/f42ba0da8f6338b7afff40afcdc1e96cf24b3c01"
        },
        "date": 1781744609246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 757.72,
            "range": "42.33 ms",
            "unit": "ms",
            "extra": "median: 757.72 ms\nmin: 673.53 ms\nmax: 851.55 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0c8d65e6044b4d94f3d5e25d6b190bcc8ee765c3",
          "message": "chore(nix): add actionlint to packages\n\n- manage actionlint declaratively via home.packages\n- enables linting GitHub Actions workflows and composite actions locally",
          "timestamp": "2026-06-18T10:58:08+09:00",
          "tree_id": "ab323c36bc04cea7c9b641c6c2998ebe040561b6",
          "url": "https://github.com/lemtoc/dotfiles/commit/0c8d65e6044b4d94f3d5e25d6b190bcc8ee765c3"
        },
        "date": 1781748106682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 55.24,
            "range": "10.68 ms",
            "unit": "ms",
            "extra": "median: 55.24 ms\nmin: 49.54 ms\nmax: 102.81 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9b06fff0a8a3022e2e717182f6d6f9f5c1c8275a",
          "message": "feat(aws): switch SSO profiles to awsctx with per-role granularity\n\n- add `github:lemtoc/awsctx` as a mise tool and source its fish wrapper\n- generate readOnly and admin profiles per account via `mkAccount`\n- add a powerUser profile for niyarepo (readOnly -> powerUser -> admin)\n- keep dpca-ide on its dedicated role without a readOnly profile\n- point amplify-toda credential_process at the toda/readOnly profile",
          "timestamp": "2026-06-19T10:58:11+09:00",
          "tree_id": "c1b231d55eba49e9db421aae733587410de5cae8",
          "url": "https://github.com/lemtoc/dotfiles/commit/9b06fff0a8a3022e2e717182f6d6f9f5c1c8275a"
        },
        "date": 1781834904462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 76.99,
            "range": "20.52 ms",
            "unit": "ms",
            "extra": "median: 76.99 ms\nmin: 63.47 ms\nmax: 133.4 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "12877b9a1a7d0aee3a324774c398d944ef9e532f",
          "message": "feat(aws): split admin SSO profiles into a dedicated session\n\n- thread a `sessionName` arg through `mkSsoProfileWithRole`\n- generalize the fixed `ssoSession` into a reusable `mkSsoSession`\n- emit both `default` and `admin` sso-session blocks in the config\n- bind admin profiles to the `admin` session, others to `default`\n- require a separate login when assuming administrator access\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-19T13:03:22+09:00",
          "tree_id": "6118a62f9de33e9a0e53d09b357cb0cf0db44003",
          "url": "https://github.com/lemtoc/dotfiles/commit/12877b9a1a7d0aee3a324774c398d944ef9e532f"
        },
        "date": 1781842000651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 66.65,
            "range": "3.8 ms",
            "unit": "ms",
            "extra": "median: 66.65 ms\nmin: 65.16 ms\nmax: 87.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "c1b756255049857859458cf431186d336b77dede",
          "message": "chore(nix): update home-manager flake input\n\n- bump home-manager to revision 37f21df\n- pull in latest upstream module fixes from nix-community",
          "timestamp": "2026-06-21T01:08:05+09:00",
          "tree_id": "b583e1147bc13a546e3c2d2b51af26b229368e59",
          "url": "https://github.com/lemtoc/dotfiles/commit/c1b756255049857859458cf431186d336b77dede"
        },
        "date": 1781971924049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 91.62,
            "range": "19.8 ms",
            "unit": "ms",
            "extra": "median: 91.62 ms\nmin: 83.67 ms\nmax: 172.31 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "9e3ff9d8c299612bb107f5d8ce25b4a42630d936",
          "message": "chore(nix): bump home-manager flake input\n\n- Update home-manager from 37f21dfa5d27e71b75bacd9418b156f9265e312e to d1ccd0721ec599866622665f3651e19e6e2d4c6a.\n- Refresh the locked nar hash and timestamp for the new input revision.\n\nCo-authored-by: Codex GPT-5 <codex@openai.com>",
          "timestamp": "2026-06-22T09:04:34+09:00",
          "tree_id": "932ced16bee55dea496ae95c0c59d41ae158a797",
          "url": "https://github.com/lemtoc/dotfiles/commit/9e3ff9d8c299612bb107f5d8ce25b4a42630d936"
        },
        "date": 1782086909365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 94.78,
            "range": "21.58 ms",
            "unit": "ms",
            "extra": "median: 94.78 ms\nmin: 79.38 ms\nmax: 160.2 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "bb8703ad9d344f5babd2b0c94e3f17e52c42c4cd",
          "message": "chore(nix): update home-manager flake input",
          "timestamp": "2026-06-23T15:43:31+09:00",
          "tree_id": "cd9f0a8068eae70896532227a30a3dcf7c6e198c",
          "url": "https://github.com/lemtoc/dotfiles/commit/bb8703ad9d344f5babd2b0c94e3f17e52c42c4cd"
        },
        "date": 1782197236917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 107.67,
            "range": "12.47 ms",
            "unit": "ms",
            "extra": "median: 107.67 ms\nmin: 89.3 ms\nmax: 135.74 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "5b7e5e885b672b1c14c5fb2d4f8daffd4f836e71",
          "message": "feat(fish): add git commit abbreviation\n\n- Add a git ci abbreviation that expands to git commit in Fish shell setup.\n\nCo-authored-by: Codex GPT-5 <codex@openai.com>",
          "timestamp": "2026-06-23T15:48:14+09:00",
          "tree_id": "edd5b88b40616bfb54bee15d3e221e549633891a",
          "url": "https://github.com/lemtoc/dotfiles/commit/5b7e5e885b672b1c14c5fb2d4f8daffd4f836e71"
        },
        "date": 1782197574172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 86.02,
            "range": "12.71 ms",
            "unit": "ms",
            "extra": "median: 86.02 ms\nmin: 64.13 ms\nmax: 118.15 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "f59840c16d19334f2d373439cca0f05a7bda68d5",
          "message": "fix(fish): raise codex helper reasoning effort\n\n- Set codex-exec-fast to low reasoning effort so commit/create-pr helpers better follow skill workflows.\n- Keep web_search and image_generation disabled to avoid unnecessary tools while preserving lightweight execution.\n- Background: none was faster but missed commit skill requirements such as commit body/trailer and final status verification.\n\nCo-authored-by: Codex GPT-5 <codex@openai.com>",
          "timestamp": "2026-06-24T09:07:33+09:00",
          "tree_id": "575c4ab37d191f0cd4a9b929f7ac4fab2a23f24c",
          "url": "https://github.com/lemtoc/dotfiles/commit/f59840c16d19334f2d373439cca0f05a7bda68d5"
        },
        "date": 1782260113027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 77.66,
            "range": "7.88 ms",
            "unit": "ms",
            "extra": "median: 77.66 ms\nmin: 69.81 ms\nmax: 121.74 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "4da38f13a7e1612c26e967acc7f6c5f4cfc5cc48",
          "message": "chore(nix): update flake input pin\n\n- Refresh the locked nixpkgs revision in flake.lock.\n- Keep the rest of the flake inputs unchanged.\n\nCo-authored-by: Codex <codex@openai.com>",
          "timestamp": "2026-06-25T09:41:52+09:00",
          "tree_id": "7d08f2a9e44730c2c502de27610bf41b71872f53",
          "url": "https://github.com/lemtoc/dotfiles/commit/4da38f13a7e1612c26e967acc7f6c5f4cfc5cc48"
        },
        "date": 1782348366758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 85.91,
            "range": "23 ms",
            "unit": "ms",
            "extra": "median: 85.91 ms\nmin: 66.66 ms\nmax: 152.04 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "0ae966d445e11548112fabf6726e1e4692134169",
          "message": "feat(aws): align SSO redirect and SSH forwarding\n\n- add a fixed AWS CLI SSO redirect port to match the local SSH tunnel\n- forward the same localhost port through the dpca-ide SSH config\n- prepend the local aws-cli virtualenv bin directory on M4Pro\n\nCo-authored-by: Codex GPT-5.5 <codex@openai.com>",
          "timestamp": "2026-06-25T16:31:45+09:00",
          "tree_id": "d4a33f73e4bc3113fe1f51fc76da75cc5d6b12c3",
          "url": "https://github.com/lemtoc/dotfiles/commit/0ae966d445e11548112fabf6726e1e4692134169"
        },
        "date": 1782372956166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 87.3,
            "range": "8.06 ms",
            "unit": "ms",
            "extra": "median: 87.3 ms\nmin: 81.24 ms\nmax: 118.11 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "948fdb84748d1a1c93049deb640374b8115f7193",
          "message": "chore(nix): bump home-manager flake input\n\n- Update the pinned home-manager revision in flake.lock.\n- Refresh the corresponding narHash and lastModified metadata.\n\nCo-authored-by: Codex GPT-5.5 <codex@openai.com>",
          "timestamp": "2026-06-26T08:15:03+09:00",
          "tree_id": "d2b86a518f9071ad872b1b7251f951d6149d8304",
          "url": "https://github.com/lemtoc/dotfiles/commit/948fdb84748d1a1c93049deb640374b8115f7193"
        },
        "date": 1782429534007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 83.26,
            "range": "12.26 ms",
            "unit": "ms",
            "extra": "median: 83.26 ms\nmin: 67.77 ms\nmax: 128.18 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "22c0516611eba495964079ab005208ece424517f",
          "message": "chore(nix): bump home-manager flake input\n- Update the home-manager lock entry to revision `8d8a6cc50ddc60748791a14ee1163c865ec57635`.\n- Refresh the recorded `lastModified` and `narHash` values in `flake.lock`.\n\nCo-authored-by: Codex GPT-5.5 <codex@openai.com>",
          "timestamp": "2026-06-28T00:53:40+09:00",
          "tree_id": "3aef2bc5c368d5164a58c5f34d562111ab3192c5",
          "url": "https://github.com/lemtoc/dotfiles/commit/22c0516611eba495964079ab005208ece424517f"
        },
        "date": 1782575872940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 79.23,
            "range": "9.3 ms",
            "unit": "ms",
            "extra": "median: 79.23 ms\nmin: 69.54 ms\nmax: 119.11 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "committer": {
            "email": "83203852+lemtoc@users.noreply.github.com",
            "name": "lemtoc",
            "username": "lemtoc"
          },
          "distinct": true,
          "id": "120bc5a8cb672f53af5f5b107abdb1fc58734156",
          "message": "chore(nix): bump home-manager flake input\n\n- Update the home-manager and nixpkgs lock entries to the latest recorded revisions.\n- Refresh the corresponding `lastModified` and `narHash` values in `flake.lock`.\n\nCo-authored-by: Codex GPT-5.4-Mini <codex@openai.com>",
          "timestamp": "2026-06-29T09:56:50+09:00",
          "tree_id": "475ae2315163280ad831a29c2c759af7dabaf416",
          "url": "https://github.com/lemtoc/dotfiles/commit/120bc5a8cb672f53af5f5b107abdb1fc58734156"
        },
        "date": 1782694848781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "fish -i -c exit",
            "value": 81.62,
            "range": "2.75 ms",
            "unit": "ms",
            "extra": "median: 81.62 ms\nmin: 73.66 ms\nmax: 88.97 ms\nruns: 50"
          }
        ]
      }
    ]
  }
}
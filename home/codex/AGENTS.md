- When specifications are ambiguous or information is insufficient and requires user judgment, use the `AskUserQuestion Tool`.
- Always resolve any type errors and linting errors displayed in the console.
- Avoid using `any`.
- Minimize the use of type casting with `as`.
- Prefer non-destructive operations over destructive ones when working with arrays and objects.
- Use `const` instead of `let` as a general rule, since `let` can lead to unnecessary reassignment.
- Check package.json, find and run commands for linting and type error detection, and ensure there are no errors.
  - In many cases, type detection is `typecheck`, and linting is `lint` or `lint-types`.
  - If both `lint` and `lint-types` exist, please run only `lint-types`.
- Never consider a task complete until all diagnostic errors are resolved.
- When creating a pull request, please check if there is a PR template in the repository and follow it if available.

## JavaScript/TypeScript Toolchain

- For JavaScript/TypeScript projects, run package-manager and Node commands through the project toolchain when available.
- Prefer `mise exec -- <command>` for commands that depend on Node, package managers, or `node_modules/.bin`.
- Detect the package manager from the repository before running scripts:
  - `packageManager` in `package.json`
  - lockfiles such as `pnpm-lock.yaml`, `yarn.lock`, `bun.lock`, `bun.lockb`, or `package-lock.json`
- Use the detected package manager through `mise exec`, for example:
  - `mise exec -- pnpm lint-types`
  - `mise exec -- yarn lint`
  - `mise exec -- bun test`
  - `mise exec -- npm run typecheck`
- Do not run `node`, `npm`, `npx`, `pnpm`, `yarn`, `bun`, or binaries from `node_modules/.bin` directly from Codex unless explicitly requested.
- If the project toolchain is unavailable, report the environment issue instead of falling back to Codex bundled Node.

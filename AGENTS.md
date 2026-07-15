# D&D Wiki repository instructions

## Repository boundary

The repository root is the directory containing this AGENTS.md file.

Never read, create, edit, move, copy, or delete files outside this repository root unless the user explicitly requests a specific external file operation.

The parent directory and sibling directories are outside the project.

Before performing work, verify the repository root with:

```powershell
git rev-parse --show-toplevel
```

Stop without making changes when the detected repository root does not match the current project directory.

## Project location

The expected local repository location is:

```text
C:\Users\toonv\Development\dnd-wiki\site
```

Do not treat `C:\Users\toonv\Development\dnd-wiki` as the application repository.

## No duplicate workspaces

Never create:

* a duplicate copy of this repository;
* a nested project clone;
* a `projects` workspace directory;
* a temporary repository mirror;
* an alternative worktree;
* an extracted project copy;
* a backup copy of the complete project;
* a second `site` directory.

Work directly in the existing repository.

Do not create agent-managed project directories in the parent folder.

## Package manager

This project uses npm.

Use:

```powershell
npm ci
npm run check --if-present
npm run lint --if-present
npm run build
```

Do not use pnpm, yarn, Bun, or another package manager.

Do not create:

* `.pnpm-store`;
* `pnpm-lock.yaml`;
* `yarn.lock`;
* `bun.lock`;
* `bun.lockb`.

Do not replace or regenerate `package-lock.json` using another package manager.

## Dependencies

Use the existing `node_modules` directory or recreate it with `npm ci` when necessary.

Never rename or copy `node_modules`.

Never create directories such as:

* `node_modules.locked-backup`;
* `node_modules-backup`;
* `node_modules-old`;
* `.dependency-cache`.

Do not preserve dependency backups inside or outside the repository.

## Generated directories

The following directories are generated and must not be treated as source code:

* `node_modules`;
* `.svelte-kit`;
* `build`;
* `dist`;
* `coverage`.

They may be removed and regenerated only inside this repository when required.

Never copy generated directories into another location.

## Temporary files

Prefer the operating system temporary directory for disposable files.

When temporary repository-local files are unavoidable, place them only inside:

```text
.codex-tmp
```

Delete `.codex-tmp` before completing the task.

Do not create temporary files in the parent directory.

## Backups

Use Git for recovery.

Do not create manual backup files or directories unless the user explicitly requests one.

Do not create files with suffixes such as:

* `.backup`;
* `.bak`;
* `.old`;
* `.copy`;
* `.original`;
* `.locked-backup`.

Before risky modifications, inspect Git status and make focused edits instead of duplicating files.

## File operations

All relative paths must resolve inside the repository root.

Before a recursive delete, move, or copy:

1. Resolve the full path.
2. Confirm it is inside the repository root.
3. Confirm it is not the repository root itself.
4. Confirm the operation is necessary.

Never run a recursive delete against the parent directory.

## Scope discipline

Modify only files needed for the active task.

Do not reorganise the repository, create new workspace structures, or change package managers unless explicitly requested.

Do not run project-initialisation commands such as:

* `npm create`;
* `npm init`;
* `pnpm create`;
* `git clone`;
* `git worktree add`.

The project already exists.

## Completion checks

Before finishing any task:

1. Run `git status --short`.
2. Confirm every changed or untracked path belongs to this repository.
3. Confirm no duplicate repository was created.
4. Confirm no dependency backup was created.
5. Confirm no pnpm store was created.
6. Remove temporary files.
7. Run the relevant check and build commands.
8. Report every file changed and every command executed.

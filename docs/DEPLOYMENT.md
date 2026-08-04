# Deployment

D&D Portal Wiki is deployed to GitHub Pages at the custom root domain:

```text
https://dnd-portal.com/
```

GitHub Pages hosts static files. It does not run a Node.js server for this project.

## Required Static Configuration

The project intentionally uses static output:

- `@sveltejs/adapter-static`
- `prerender = true`
- `trailingSlash = 'always'`
- no repository base path

These choices are required because the live site is served from `https://dnd-portal.com/`, not from a repository subpath such as `/dnd-wiki/`.

## Why `trailingSlash = 'always'`

GitHub Pages serves nested routes most reliably when each route is emitted as a folder with an `index.html` file.

For example:

```text
/classes/barbarian/
```

is generated as:

```text
build/classes/barbarian/index.html
```

This helps direct navigation, refreshes, and nested routes work correctly on GitHub Pages.

## Build Workflow

The GitHub Actions workflow is:

```text
.github/workflows/build.yml
```

It:

1. Checks out the repository.
2. Sets up pnpm.
3. Sets up Node.js.
4. Installs dependencies with `pnpm install --frozen-lockfile`.
5. Runs `pnpm check`.
6. Builds the static site with `pnpm build`.
7. Confirms `build/index.html` exists.
8. Uploads the `build/` directory as a GitHub Pages artifact.
9. Deploys that artifact with `actions/deploy-pages`.

Use `actions/upload-pages-artifact`, not plain `actions/upload-artifact`, because the latter only stores a workflow artifact and does not publish the site.

## Local Release Checks

Run:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

The crawl check expects a fresh `build/` directory from `pnpm build`.

## Do Not Change Without Approval

Do not change these without first confirming the hosting target:

- replacing `@sveltejs/adapter-static` with `@sveltejs/adapter-node`
- removing `prerender = true`
- removing `trailingSlash = 'always'`
- adding a repository base path
- replacing GitHub Pages deployment with a plain artifact upload

Those changes can break direct page loads and refreshes on the live custom domain.

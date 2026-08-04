# Security Policy

## Supported Project

Security reports should target the public D&D Portal Wiki repository and deployed website at:

```text
https://dnd-portal.com/
```

## Reporting a Vulnerability

Do not open a public issue for a vulnerability that could expose users, private data, tokens, deployment credentials, or infrastructure.

Report security concerns privately by email:

```text
toonvanberkel.public@gmail.com
```

Include:

- A clear description of the issue.
- Steps to reproduce it.
- Affected page, route, workflow, or dependency.
- Any relevant logs, screenshots, or proof of concept.
- Whether the issue appears exploitable on the live site.

## Not Security Issues

Use normal GitHub issues for:

- Broken links.
- Incorrect D&D rules references.
- Missing content.
- Visual styling problems.
- Accessibility feedback.
- Search ranking problems.
- Typos or wording improvements.

## Scope

In scope:

- Static site build output.
- Svelte/SvelteKit frontend code.
- GitHub Actions deployment workflow.
- Public assets and route generation.
- Client-side handling of preferences and search state.

Out of scope:

- Third-party websites linked from D&D Portal.
- Wizards of the Coast, D&D Beyond, Discord, YouTube, GitHub, or other external services.
- Denial-of-service testing.
- Social engineering.
- Attempts to access accounts, secrets, or systems you do not own.

## Deployment Notes

The website is hosted on GitHub Pages as static files. It does not run a Node.js server in production.

Do not change the adapter, prerender settings, trailing-slash behavior, or GitHub Pages deploy workflow as part of a security fix unless the hosting target is explicitly changed.

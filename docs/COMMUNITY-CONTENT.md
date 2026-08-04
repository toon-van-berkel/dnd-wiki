# Community Content

This section is manually curated TypeScript data. There is no CMS, database, Discord import, or GitHub import.

The normal workflow is:

1. Open one data file.
2. Copy an existing object.
3. Change the values.
4. Run checks.
5. Commit.

## Add An Announcement

File:

```text
src/lib/typescript/data/internals/community/announcements.ts
```

Copy one object in `announcementItems`:

```ts
{
	id: 'maintenance-window',
	title: 'Planned maintenance',
	summary: 'Short public explanation of what is planned and who it affects.',
	date: '2026-08-04',
	category: 'maintenance',
	links: [
		{
			label: 'Open Discord',
			href: 'externals.discord.homepage'
		}
	]
}
```

Use `YYYY-MM-DD` for `date`. The page sorts newest first automatically.

## Add A Wiki Update

File:

```text
src/lib/typescript/data/internals/community/wiki-updates.ts
```

Copy one object in `wikiUpdateItems`:

```ts
{
	id: 'new-rules-pages',
	title: 'Rules pages expanded',
	summary: 'Short community-friendly summary of the public Wiki change.',
	date: '2026-08-04',
	category: 'content',
	relatedPage: 'internals.rules.page'
}
```

Keep this short. The full release history belongs on the changelog page.

## Add A Portal Link

File:

```text
src/lib/typescript/data/internals/community/portal-links.ts
```

Copy one object in `portalLinks`:

```ts
{
	id: 'rules',
	title: 'Rules',
	description: 'Open the public rules reference pages.',
	href: 'internals.rules.page',
	category: 'rules',
	featured: true
}
```

For internal pages, use a central data path such as `internals.rules.page`. Do not paste `/rules/` manually.

For external pages, use a full URL:

```ts
{
	id: 'github-issues',
	title: 'GitHub Issues',
	description: 'Open the public issue tracker.',
	href: 'externals.github.issues',
	category: 'community'
}
```

## Add An Issue

File:

```text
src/lib/typescript/data/internals/community/issues.ts
```

Copy one object in `publicIssueItems`:

```ts
{
	id: 'missing-page-description',
	title: 'A page description is incomplete',
	summary: 'Neutral public summary without private names or messages.',
	status: 'reported',
	source: 'discord',
	category: 'content',
	reportedAt: '2026-08-04',
	relatedPage: 'internals.project.changelog'
}
```

Never publish private reports, security vulnerabilities, usernames, email addresses, accusations, or private campaign information here.

## Update An Issue Status

Edit the existing issue object:

```ts
{
	id: 'missing-page-description',
	title: 'A page description is incomplete',
	summary: 'Neutral public summary without private names or messages.',
	status: 'resolved',
	source: 'discord',
	category: 'content',
	reportedAt: '2026-08-04',
	updatedAt: '2026-08-05',
	resolution: 'The page header was rewritten with a complete description.',
	relatedPage: 'internals.project.changelog'
}
```

Resolved, declined, and duplicate issues sort after unresolved work.

## Add A Roadmap Item

File:

```text
src/lib/typescript/data/internals/community/roadmap.ts
```

Copy one object in `roadmapItemList`:

```ts
{
	id: 'expand-species-pages',
	title: 'Expand species pages',
	summary: 'Add more complete public species content without inventing missing source data.',
	status: 'planned',
	priority: 'medium',
	area: 'species',
	targetVersion: '0.9.x',
	relatedPage: 'internals.species.page'
}
```

Only add `targetDate` when a real public date exists.

## Move A Roadmap Item To Completed

Edit the existing roadmap object:

```ts
{
	id: 'expand-species-pages',
	title: 'Expand species pages',
	summary: 'Add more complete public species content without inventing missing source data.',
	status: 'completed',
	priority: 'medium',
	area: 'species',
	targetVersion: '0.9.1',
	relatedPage: 'internals.species.page'
}
```

Completed, paused, and cancelled items sort after active work.

## Link To An Internal Wiki Page

Use a central data path:

```ts
relatedPage: 'internals.classes.page'
```

or:

```ts
href: 'internals.community.roadmap'
```

Do not write raw internal URLs such as `/classes/` when a data path exists.

## Link To GitHub Or Discord

Prefer existing external data paths:

```ts
href: 'externals.github.issues'
href: 'externals.github.releases'
href: 'externals.discord.homepage'
href: 'externals.discord.general'
```

Use a full URL only when no central external link exists yet:

```ts
githubUrl: 'https://github.com/toon-van-berkel/dnd-wiki/issues/123'
```

## Checks

Run:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

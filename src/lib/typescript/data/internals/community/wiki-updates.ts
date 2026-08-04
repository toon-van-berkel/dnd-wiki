/*
	Adding a Wiki update:
	1. Copy one object in the `wikiUpdates` array.
	2. Give it a unique ID.
	3. Set the date as YYYY-MM-DD.
	4. Link a related page, changelog entry, or release only when useful.

	The page sorts entries automatically.
	No route or component changes are required.
*/
import type { CommunityWikiUpdate } from './_types_';
import { byNewestDate } from './_types_';

const wikiUpdateItems = [
	{
		id: 'version-0-9-0-community-summary',
		title: 'Version 0.9.0 rebuild summary',
		summary:
			'The Wiki now has broader class content, spell browsing, linked rules references, improved search, stronger page metadata, and updated repository documentation.',
		date: '2026-08-04',
		category: 'release',
		relatedPage: 'internals.project.changelog',
		changelogUrl: '#version-0-9-0'
	},
	{
		id: 'classes-and-spells-available',
		title: 'Class and spell pages are easier to browse',
		summary:
			'Classes, subclasses, spell lists, individual spell pages, and spell-level pages are now available through central navigation and search.',
		date: '2026-08-04',
		category: 'content',
		relatedPage: 'internals.classes.page'
	},
	{
		id: 'search-sharing-and-google-discovery',
		title: 'Search and sharing previews improved',
		summary:
			'The public pages now emit page titles, descriptions, canonical URLs, and social preview images to help search engines and shared links present the Wiki correctly.',
		date: '2026-08-04',
		category: 'search',
		relatedPage: 'internals.utility.search'
	},
	{
		id: 'repository-docs-expanded',
		title: 'Repository documentation expanded',
		summary:
			'README, contribution, security, architecture, deployment, GitHub issue templates, and pull request guidance were added for clearer public collaboration.',
		date: '2026-08-04',
		category: 'docs',
		relatedPage: 'internals.project.about'
	}
] as const satisfies readonly CommunityWikiUpdate[];

export const wikiUpdates = byNewestDate(wikiUpdateItems);

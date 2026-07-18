import type { PageId } from '$lib/page/registry/Registry-Types';

export const mainNavigationPageIds = [
	'home',
	'search',
	'preferences'
] satisfies PageId[];

export const browseNavigationPageIds = [
	'species',
	'classes',
	'rules',
	'monsters',
	'locations'
] satisfies PageId[];

export const resourceNavigationPageIds = [
	'sources',
	'credits',
	'about',
	'ai',
	'changelog'
] satisfies PageId[];

export const footerPageIdsByGroup = {
	wiki: ['home', 'search', 'sources', 'changelog'],
	project: ['about', 'credits', 'ai', 'accessibility'],
	legal: ['legal', 'privacy', 'cookies', 'contribution-terms', 'content-removal']
} satisfies Record<string, PageId[]>;

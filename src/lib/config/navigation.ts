// site\src\lib\config\navigation.ts
import type { PageId } from '$lib/page/registry/Registry-Types';

export const mainNavigationPageIds = [
	'home',
	'search',
	'preferences'
] satisfies PageId[];

export const browseNavigationPageIds = [
	'species',
	'classes',
	'spells-and-abilities',
	'rules',
	'monsters',
	'locations'
] satisfies PageId[];

export const notesNavigationPageIds = [
	'notes-campaigns',
	'notes-one-shots'
] satisfies PageId[];

export const resourceNavigationPageIds = [
	'sources',
	'credits',
	'about',
	'ai',
	'changelog'
] satisfies PageId[];

export const footerPageIdsByGroup = {
	browse: ['search', 'classes', 'species', 'rules', 'locations', 'monsters'],
	project: ['about', 'credits', 'sources', 'ai', 'accessibility', 'changelog'],
	legal: ['legal', 'privacy', 'cookies', 'contribution-terms', 'content-removal']
} satisfies Record<string, PageId[]>;
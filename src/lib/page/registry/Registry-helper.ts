// site\src\lib\page\registry\Registry-helper.ts
import {
	browseNavigationPageIds,
	footerPageIdsByGroup,
	mainNavigationPageIds,
	notesNavigationPageIds,
	resourceNavigationPageIds
} from '$lib/config/navigation';

import { pageRegistry } from './Registry-data';
import type { PageId, PageRegistryEntry } from './Registry-Types';

const pageById = new Map<PageId, PageRegistryEntry>(
	pageRegistry.map((entry) => [entry.id, entry])
);

const pageByHref = new Map<string, PageRegistryEntry>(
	pageRegistry.map((entry) => [entry.href, entry])
);

function resolveRequiredPage(id: PageId): PageRegistryEntry {
	const page = pageById.get(id);

	if (!page) {
		throw new Error(`Unknown page id: ${id}`);
	}

	return page;
}

export function getPageEntry(
	id: PageId
): PageRegistryEntry | undefined {
	return pageById.get(id);
}

export function getPageEntryByHref(
	href: string
): PageRegistryEntry | undefined {
	const normalizedHref =
		href === '' ? '/' : href.replace(/\/$/, '') || '/';

	return pageByHref.get(normalizedHref);
}

export function getPageChildren(
	parentId: PageId
): PageRegistryEntry[] {
	return pageRegistry.filter(
		(entry) => entry.parentId === parentId
	);
}

export function getPageParent(
	entryOrId: PageRegistryEntry | PageId
): PageRegistryEntry | undefined {
	const entry =
		typeof entryOrId === 'string'
			? getPageEntry(entryOrId)
			: entryOrId;

	return entry?.parentId
		? getPageEntry(entry.parentId)
		: undefined;
}

export function getPageAncestors(
	entryOrId: PageRegistryEntry | PageId
): PageRegistryEntry[] {
	const entry =
		typeof entryOrId === 'string'
			? getPageEntry(entryOrId)
			: entryOrId;

	const ancestors: PageRegistryEntry[] = [];
	let current = entry ? getPageParent(entry) : undefined;

	while (current) {
		ancestors.unshift(current);
		current = getPageParent(current);
	}

	return ancestors;
}

export type NavigationSection =
	| 'main'
	| 'browse'
	| 'notes'
	| 'resources';

export function getNavigationPages(
	section: NavigationSection = 'browse'
): PageRegistryEntry[] {
	const idsBySection: Record<
		NavigationSection,
		readonly PageId[]
	> = {
		main: mainNavigationPageIds,
		browse: browseNavigationPageIds,
		notes: notesNavigationPageIds,
		resources: resourceNavigationPageIds
	};

	return idsBySection[section].map(resolveRequiredPage);
}

export function getFooterPages(): Record<
	string,
	PageRegistryEntry[]
>;
export function getFooterPages(
	groupId: string
): PageRegistryEntry[];
export function getFooterPages(
	groupId?: string
):
	| Record<string, PageRegistryEntry[]>
	| PageRegistryEntry[] {
	if (groupId) {
		return (
			(
				footerPageIdsByGroup as Record<
					string,
					readonly PageId[]
				>
			)[groupId] ?? []
		).map(resolveRequiredPage);
	}

	return Object.fromEntries(
		Object.entries(footerPageIdsByGroup).map(
			([id, pageIds]) => [
				id,
				pageIds.map(resolveRequiredPage)
			]
		)
	);
}

export function getSearchablePages(): PageRegistryEntry[] {
	return pageRegistry.filter(
		(entry) => entry.searchable !== false
	);
}

export { pageRegistry };
import { getWikiChildren, wikiPages, type WikiPageEntry, type WikiPageKind } from './registry.js';

export type SearchEntryKind = WikiPageKind;

export type NavigationItem = {
	title: string;
	href: string;
	description?: string;
	kind?: SearchEntryKind;
	searchable?: boolean;
	tags?: string[];
	keywords?: string[];
	aliases?: string[];
	icon?: string[];
	children?: NavigationItem[];
};

export const navigation: NavigationItem[] = wikiPages
	.filter((entry) => entry.navigation === true && !entry.parentId)
	.map(toNavigationItem);

export function findNavigationItem(
	href: string,
	items: NavigationItem[] = navigation
): NavigationItem | undefined {
	for (const item of items) {
		if (item.href === href) return item;

		if (item.children) {
			const match = findNavigationItem(href, item.children);
			if (match) return match;
		}
	}

	return undefined;
}

export function getNavigationChildren(href: string): NavigationItem[] {
	return findNavigationItem(href)?.children ?? [];
}

function toNavigationItem(entry: WikiPageEntry): NavigationItem {
	return {
		title: entry.title,
		href: entry.href,
		description: entry.description,
		kind: entry.kind,
		searchable: entry.searchable,
		tags: entry.tags,
		keywords: entry.keywords,
		aliases: entry.aliases,
		icon: entry.icon,
		children: getWikiChildren(entry.id).map(toNavigationItem)
	};
}

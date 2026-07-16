import {
	getWikiChildren,
	wikiPages,
	type WikiPageEntry
} from './registry.js';

import type { WikiIconId } from './icon-ids.js';

export type NavigationItem = {
	title: string;
	href: string;
	description?: string;
	tags?: readonly string[];
	icon?: WikiIconId;
	children?: readonly NavigationItem[];
};

export const navigation: readonly NavigationItem[] = Object.freeze(wikiPages
	.filter((entry) => entry.navigation === true && !entry.parentId)
	.map(toNavigationItem));

function findNavigationItem(
	href: string,
	items: readonly NavigationItem[] = navigation
): NavigationItem | undefined {
	for (const item of items) {
		if (item.href === href) {
			return item;
		}

		if (item.children?.length) {
			const match = findNavigationItem(href, item.children);

			if (match) {
				return match;
			}
		}
	}

	return undefined;
}

export function getNavigationChildren(href: string): NavigationItem[] {
	return [...(findNavigationItem(href)?.children ?? [])];
}

function toNavigationItem(entry: WikiPageEntry): NavigationItem {
	return {
		title: entry.title,
		href: entry.href,
		description: entry.description,
		tags: entry.tags,
		icon: entry.icon,
		children: getWikiChildren(entry.id).map(toNavigationItem)
	};
}

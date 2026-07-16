import { classes } from './classes/classes.js';
import { species } from './species/species.js';
import { isWikiIconId } from './icon-ids.js';
import { staticPages } from './static-pages.js';

import type { WikiDomainPage } from './domain.js';
import type { WikiIconId } from './icon-ids.js';

export type WikiPageKind =
	| 'collection'
	| 'class'
	| 'subclass'
	| 'species'
	| 'background'
	| 'feat'
	| 'spell'
	| 'equipment'
	| 'weapon'
	| 'armour'
	| 'magic-item'
	| 'monster'
	| 'location'
	| 'rule'
	| 'homebrew'
	| 'information'
	| 'legal'
	| 'settings'
	| 'other';

export type WikiPageEntry = {
	id: string;
	title: string;
	href: string;
	description?: string;
	eyebrow?: string;
	kind: WikiPageKind;
	parentId?: string;
	tags?: readonly string[];
	keywords?: readonly string[];
	aliases?: readonly string[];
	searchable?: boolean;
	navigation?: boolean;
	icon?: WikiIconId;
};

export type FooterPageGroup = 'browse' | 'project' | 'legal';

const footerPageIdsByGroup = {
	browse: ['search', 'classes', 'species', 'rules', 'locations', 'monsters'],
	project: ['about', 'credits', 'sources', 'ai', 'accessibility', 'changelog'],
	legal: ['legal', 'privacy', 'cookies', 'contribution-terms', 'content-removal']
} as const satisfies Record<FooterPageGroup, readonly string[]>;

const domainPages = [classes, species] satisfies readonly WikiDomainPage[];

const wikiPageEntries = [
	...staticPages,
	...domainPages.flatMap((page) => flattenDomainPage(page, {
		eyebrow: 'Character options',
		navigation: true
	}))
] satisfies WikiPageEntry[];

export const wikiPages: readonly WikiPageEntry[] = Object.freeze(wikiPageEntries);

const wikiPageById: ReadonlyMap<string, WikiPageEntry> = new Map(
	wikiPages.map((entry) => [entry.id, entry])
);
const wikiPageByHref: ReadonlyMap<string, WikiPageEntry> = new Map(
	wikiPages.map((entry) => [entry.href, entry])
);
export const footerPageIds = Object.freeze(Object.values(footerPageIdsByGroup).flat());
const footerPageIdSet = new Set<string>(footerPageIds);

export function getWikiPage(id: string): WikiPageEntry | undefined {
	return wikiPageById.get(id);
}

export function getWikiPageByHref(href: string): WikiPageEntry | undefined {
	const normalizedHref = normalizeHref(href);
	const exactMatch = wikiPageByHref.get(normalizedHref);

	if (exactMatch) return exactMatch;

	const basePathMatch = wikiPages.filter(
		(entry) => entry.href !== '/' && normalizedHref.endsWith(entry.href)
	);

	return basePathMatch.length === 1 ? basePathMatch[0] : undefined;
}

export function getWikiChildren(parentId: string): WikiPageEntry[] {
	return wikiPages.filter((entry) => entry.parentId === parentId && entry.navigation !== false);
}

export function getFooterPages(group: FooterPageGroup): WikiPageEntry[] {
	return footerPageIdsByGroup[group].map((pageId) => {
		const page = getWikiPage(pageId);

		if (!page) {
			throw new Error(`Footer references unknown Wiki page ${pageId}.`);
		}

		return page;
	});
}

export function getFooterPageGroups(): Record<FooterPageGroup, WikiPageEntry[]> {
	return {
		browse: getFooterPages('browse'),
		project: getFooterPages('project'),
		legal: getFooterPages('legal')
	};
}

export function validateWikiRegistry() {
	const ids = new Set<string>();
	const hrefs = new Set<string>();

	for (const entry of wikiPages) {
		if (!entry.id || !entry.title || !entry.href) {
			throw new Error(`Invalid Wiki page registry entry: ${entry.id || entry.href || 'unknown'}.`);
		}

		if (ids.has(entry.id)) {
			throw new Error(`Duplicate Wiki page id: ${entry.id}.`);
		}

		if (hrefs.has(entry.href)) {
			throw new Error(`Duplicate Wiki page href: ${entry.href}.`);
		}

		ids.add(entry.id);
		hrefs.add(entry.href);
	}

	for (const entry of wikiPages) {
		if (entry.parentId && !ids.has(entry.parentId)) {
			throw new Error(`Wiki page ${entry.id} references unknown parent ${entry.parentId}.`);
		}

		if (entry.navigation !== false && !entry.title) {
			throw new Error(`Navigation entry is missing a title: ${entry.id}.`);
		}

		if (entry.icon && !isWikiIconId(entry.icon)) {
			throw new Error(`Wiki page ${entry.id} references unknown icon ${entry.icon}.`);
		}
	}

	for (const footerPageId of footerPageIds) {
		if (!ids.has(footerPageId)) {
			throw new Error(`Footer references unknown Wiki page ${footerPageId}.`);
		}
	}

	detectParentCycles();
}

function flattenDomainPage(
	page: WikiDomainPage,
	options: {
		parentId?: string;
		eyebrow?: string;
		navigation?: boolean;
	} = {}
): WikiPageEntry[] {
	const id = createPageId(page.href);
	const kind = page.kind ?? 'other';

	const entry: WikiPageEntry = {
		id,
		title: page.title,
		href: normalizeHref(page.href),
		description: page.description,
		eyebrow: page.eyebrow ?? domainEyebrow(kind, options.eyebrow),
		kind,
		parentId: options.parentId,
		tags: page.tags,
		keywords: page.keywords,
		aliases: page.aliases,
		searchable: page.searchable,
		navigation: options.navigation ?? true,
		icon: page.icon
	};

	return [
		entry,
		...(page.children ?? []).flatMap((child) =>
			flattenDomainPage(child, {
				parentId: id,
				eyebrow: domainEyebrow(child.kind ?? 'other', options.eyebrow),
				navigation: true
			})
		)
	];
}

function domainEyebrow(kind: WikiPageKind, fallback?: string): string | undefined {
	if (kind === 'class') return 'Class';
	if (kind === 'subclass') return 'Subclass';
	if (kind === 'species') return 'Species';

	return fallback;
}

function createPageId(href: string): string {
	return normalizeHref(href).replace(/^\/+|\/+$/g, '').replaceAll('/', '--') || 'home';
}

function normalizeHref(href: string): string {
	const path = href.split('?')[0].split('#')[0].replace(/\/+$/g, '');

	return path === '' ? '/' : path;
}

function detectParentCycles() {
	for (const entry of wikiPages) {
		const seen = new Set<string>();
		let current: WikiPageEntry | undefined = entry;

		while (current?.parentId) {
			if (seen.has(current.parentId)) {
				throw new Error(`Parent cycle detected for Wiki page ${entry.id}.`);
			}

			seen.add(current.parentId);
			current = wikiPageById.get(current.parentId);
		}
	}
}

validateWikiRegistry();

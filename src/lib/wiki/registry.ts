import { classes } from './classes/classes.js';
import { species } from './species/species.js';

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
	tags?: string[];
	keywords?: string[];
	aliases?: string[];
	searchable?: boolean;
	navigation?: boolean;
	footer?: boolean;
	icon?: string[];
};

type DomainPage = {
	title: string;
	href: string;
	description?: string;
	eyebrow?: string;
	kind?: WikiPageKind;
	searchable?: boolean;
	tags?: string[];
	keywords?: string[];
	aliases?: string[];
	children?: DomainPage[];
};

const staticPages = [
	{
		id: 'home',
		title: 'Rules for our table',
		href: '/',
		description:
			'A practical campaign wiki for our players. Use it as the source of truth for table rulings, character options, and campaign-specific exceptions.',
		eyebrow: 'D&D Portal wiki',
		kind: 'information',
		searchable: false
	},
	{
		id: 'rules',
		title: 'Rules',
		href: '/rules',
		description:
			'Custom rulings used at our table. These pages summarize how we resolve common situations without reproducing book text.',
		eyebrow: 'House rules',
		kind: 'collection',
		searchable: false,
		navigation: true
	},
	{
		id: 'rules--movement',
		title: 'Movement',
		href: '/rules/movement',
		description: 'Table rulings for tactical positioning, hazardous terrain, and travel.',
		eyebrow: 'Rule page',
		kind: 'rule',
		parentId: 'rules',
		tags: ['combat', 'travel', 'movement'],
		keywords: ['speed', 'terrain', 'positioning', 'exploration'],
		navigation: true
	},
	{
		id: 'rules--fighting',
		title: 'Fighting',
		href: '/rules/fighting',
		description: 'Combat rulings intended to keep encounters tactical, quick, and easy to understand.',
		eyebrow: 'Rule page',
		kind: 'rule',
		parentId: 'rules',
		tags: ['combat', 'melee', 'ranged'],
		keywords: ['critical hits', 'flanking', 'attacks'],
		navigation: true
	},
	{
		id: 'monsters',
		title: 'Monsters',
		href: '/monsters',
		description: 'A player-safe bestiary of creatures encountered during our campaigns.',
		eyebrow: 'Bestiary',
		kind: 'collection',
		searchable: false,
		navigation: true
	},
	{
		id: 'locations',
		title: 'Locations',
		href: '/locations',
		description:
			'Settlements, regions, landmarks, and other places discovered in the campaign world.',
		eyebrow: 'World guide',
		kind: 'collection',
		searchable: false,
		navigation: true
	},
	{
		id: 'search',
		title: 'Search the Wiki',
		href: '/search',
		description:
			'Search individual rules, character options, spells, equipment, creatures, locations, and other Wiki content.',
		eyebrow: 'Wiki search',
		kind: 'information',
		searchable: false
	},
	{
		id: 'preferences',
		title: 'Preferences',
		href: '/preferences',
		description: 'Set browser-local Wiki preferences for campaign availability context.',
		eyebrow: 'Settings',
		kind: 'settings',
		searchable: false
	},
	{
		id: 'about',
		title: 'About D&D Portal',
		href: '/about',
		description:
			'D&D Portal consists of a public rules wiki and a separate player portal for campaigns, parties, and session planning.',
		eyebrow: 'About the project',
		kind: 'information',
		footer: true
	},
	{
		id: 'privacy',
		title: 'Privacy Notice',
		href: '/privacy',
		description:
			'Information about what data the D&D Portal Wiki does and does not process, how browser preferences work, and how visitors can exercise their privacy rights.',
		eyebrow: 'Privacy and personal data',
		kind: 'legal',
		footer: true
	},
	{
		id: 'cookies',
		title: 'Cookie Notice',
		href: '/cookies',
		description:
			'Information about cookies and similar browser technologies used by the D&D Portal Wiki.',
		eyebrow: 'Cookies and browser storage',
		kind: 'legal',
		footer: true
	},
	{
		id: 'legal',
		title: 'Legal Notice',
		href: '/legal',
		description:
			'Important information about ownership, permitted use, third-party material, liability, and the unofficial nature of this website.',
		eyebrow: 'Legal information',
		kind: 'legal',
		footer: true
	}
] satisfies WikiPageEntry[];

export const wikiPages: WikiPageEntry[] = [
	...staticPages,
	...flattenDomainPage(classes as DomainPage, {
		eyebrow: 'Character options',
		navigation: true
	}),
	...flattenDomainPage(species as DomainPage, {
		eyebrow: 'Character options',
		navigation: true
	})
];

export const wikiPageById: ReadonlyMap<string, WikiPageEntry> = new Map(
	wikiPages.map((entry) => [entry.id, entry])
);
export const wikiPageByHref: ReadonlyMap<string, WikiPageEntry> = new Map(
	wikiPages.map((entry) => [entry.href, entry])
);
export const footerPageIds = wikiPages.filter((entry) => entry.footer).map((entry) => entry.id);

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
	}

	for (const footerPageId of footerPageIds) {
		if (!ids.has(footerPageId)) {
			throw new Error(`Footer references unknown Wiki page ${footerPageId}.`);
		}
	}

	detectParentCycles();
}

function flattenDomainPage(
	page: DomainPage,
	options: { parentId?: string; eyebrow?: string; navigation?: boolean } = {}
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
		navigation: options.navigation ?? true
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

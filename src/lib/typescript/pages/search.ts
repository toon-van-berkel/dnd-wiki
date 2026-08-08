/*
	Location: src/lib/typescript/pages/search.ts
	Use: Builds and searches the public Wiki search index.
*/
import {
	data,
	type PageData,
	type PagePath
} from '$lib/typescript/data/_index_';
import {
	spells,
	type SpellData
} from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';
import {
	getPugilistEquipmentHref,
	getPugilistEquipmentSlug,
	getPugilistNpcHref,
	getPugilistNpcSlug,
	pugilistEquipmentItems,
	pugilistNpcs,
	type PugilistEquipmentItem,
	type PugilistNpc
} from '$lib/typescript/data/internals/classes/pugilist';
import { getPageLabel } from './currentPage';

export type SearchCategory =
	| 'all'
	| 'classes'
	| 'subclasses'
	| 'rules'
	| 'spells'
	| 'equipment'
	| 'npcs'
	| 'species'
	| 'monsters'
	| 'locations'
	| 'community'
	| 'project'
	| 'legal';

export type SearchSourceField =
	| 'title'
	| 'description'
	| 'content'
	| 'tags'
	| 'url'
	| 'metadata';

export type SearchEntry = {
	readonly id: string;
	readonly path?: PagePath;
	readonly href: string;
	readonly title: string;
	readonly subtitle: string;
	readonly description: string;
	readonly category: Exclude<SearchCategory, 'all'>;
	readonly tags: readonly string[];
	readonly sourceFields: readonly SearchSourceField[];
	readonly fieldText: Readonly<Record<SearchSourceField, string>>;
	readonly searchText: string;
};

export type SearchResult = SearchEntry & {
	readonly score: number;
	readonly matchedFields: readonly SearchSourceField[];
};

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isPageData(value: unknown): value is PageData {
	return (
		isRecord(value) &&
		value.external === false &&
		typeof value.href === 'string' &&
		typeof value.title === 'string' &&
		typeof value.subTitle === 'string' &&
		typeof value.description === 'string' &&
		isRecord(value.img) &&
		typeof value.img.href === 'string' &&
		typeof value.img.alt === 'string'
	);
}

function shouldRecurseInto(key: string, value: unknown): boolean {
	return (
		isRecord(value) &&
		key !== 'img' &&
		key !== 'images' &&
		key !== 'logos'
	);
}

function collectStrings(value: unknown): readonly string[] {
	if (typeof value === 'string' || typeof value === 'number') {
		return [String(value)];
	}

	if (Array.isArray(value)) {
		return value.flatMap((item) => collectStrings(item));
	}

	if (!isRecord(value)) {
		return [];
	}

	return Object.entries(value)
		.filter(([key]) => key !== 'img' && key !== 'images' && key !== 'logos')
		.flatMap(([, child]) => collectStrings(child));
}

function collectPageEntries(
	value: unknown,
	path = ''
): readonly [PagePath, PageData][] {
	if (isPageData(value) && path) {
		return [[path as PagePath, value]];
	}

	if (!isRecord(value)) {
		return [];
	}

	return Object.entries(value).flatMap(([key, child]) => {
		if (!shouldRecurseInto(key, child)) {
			return [];
		}

		return collectPageEntries(child, path ? `${path}.${key}` : key);
	});
}

function normalize(value: string): string {
	return value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

function tokenize(query: string): readonly string[] {
	return normalize(query)
		.split(/\s+/)
		.filter((token) => token.length >= 2);
}

function getCategory(path: string, page: PageData): Exclude<SearchCategory, 'all'> {
	if (path.includes('.subclasses.')) {
		return 'subclasses';
	}

	if (path.startsWith('internals.classes.')) {
		return 'classes';
	}

	if (path.startsWith('internals.rules.')) {
		return 'rules';
	}

	if (path.startsWith('internals.spells.')) {
		return 'spells';
	}

	if (path.startsWith('internals.equipment.')) {
		return 'equipment';
	}

	if (path.startsWith('internals.npcs.')) {
		return 'npcs';
	}

	if (path.startsWith('internals.species.')) {
		return 'species';
	}

	if (path.startsWith('internals.monsters.')) {
		return 'monsters';
	}

	if (path.startsWith('internals.locations.')) {
		return 'locations';
	}

	if (path.startsWith('internals.community.')) {
		return 'community';
	}

	if (path.startsWith('internals.legal.')) {
		return 'legal';
	}

	if (path.startsWith('internals.project.') || page.href === '/' || path.startsWith('internals.utility.')) {
		return 'project';
	}

	return 'project';
}

function getPageSourceFields(page: PageData): Record<SearchSourceField, string> {
	const tags = 'tags' in page && Array.isArray(page.tags) ? page.tags.join(' ') : '';
	const longDescription = collectStrings(page.descriptions?.long).join(' ');
	const headerContent = collectStrings(page.header?.sections).join(' ');
	const content = collectStrings((page as PageData & { readonly content?: unknown }).content).join(' ');

	return {
		title: [page.title, 'label' in page ? page.label : undefined].filter(Boolean).join(' '),
		description: [page.description, longDescription].join(' '),
		content: [headerContent, content].join(' '),
		tags,
		url: page.href,
		metadata: [page.subTitle, page.navigation?.label].filter(Boolean).join(' ')
	};
}

function createPageSearchEntry(path: PagePath, page: PageData): SearchEntry {
	const fields = getPageSourceFields(page);

	return {
		id: path,
		path,
		href: page.href,
		title: getPageLabel(path),
		subtitle: page.subTitle,
		description: page.description,
		category: getCategory(path, page),
		tags: 'tags' in page && Array.isArray(page.tags) ? page.tags : [],
		sourceFields: Object.entries(fields)
			.filter(([, value]) => value.trim().length > 0)
			.map(([field]) => field as SearchSourceField),
		fieldText: fields,
		searchText: normalize(Object.values(fields).join(' '))
	};
}

function getSpellSourceFields(spell: SpellData): Record<SearchSourceField, string> {
	return {
		title: spell.name,
		description: spell.description.join(' '),
		content: [
			spell.higherLevel.join(' '),
			spell.tables.map((table) => [
				table.caption ?? '',
				table.headers.join(' '),
				table.rows.map((row) => row.join(' ')).join(' ')
			].join(' ')).join(' ')
		].join(' '),
		tags: [
			spell.levelLabel,
			spell.school,
			spell.components.raw,
			spell.ritual ? 'ritual' : '',
			spell.concentration ? 'concentration' : '',
			spell.classes.join(' ')
		].join(' '),
		url: `/spells/${spell.slug}`,
		metadata: [
			spell.castingTime,
			spell.range,
			spell.duration,
			spell.sourceBook ?? ''
		].join(' ')
	};
}

function createSpellSearchEntry(spell: SpellData): SearchEntry {
	const fields = getSpellSourceFields(spell);

	return {
		id: `spell:${spell.slug}`,
		href: `/spells/${spell.slug}`,
		title: spell.name,
		subtitle: `${spell.levelLabel} - ${spell.school}`,
		description: spell.description[0] ?? 'Open the spell page for the full spell text.',
		category: 'spells',
		tags: [
			spell.levelLabel,
			spell.school,
			...spell.classes,
			...(spell.ritual ? ['ritual'] : []),
			...(spell.concentration ? ['concentration'] : [])
		],
		sourceFields: Object.entries(fields)
			.filter(([, value]) => value.trim().length > 0)
			.map(([field]) => field as SearchSourceField),
		fieldText: fields,
		searchText: normalize(Object.values(fields).join(' '))
	};
}

function getInlineContentText(value: unknown): string {
	if (typeof value === 'string' || typeof value === 'number') {
		return String(value);
	}

	if (Array.isArray(value)) {
		return value.map(getInlineContentText).join(' ');
	}

	if (!isRecord(value)) {
		return '';
	}

	return [
		value.text,
		value.label,
		value.children
	].map(getInlineContentText).join(' ');
}

function createEquipmentSearchEntry(item: PugilistEquipmentItem): SearchEntry {
	const href = getPugilistEquipmentHref(item);
	const description = getInlineContentText(item.description);
	const fields: Record<SearchSourceField, string> = {
		title: item.name,
		description,
		content: description,
		tags: item.tags.join(' '),
		url: href,
		metadata: [
			item.type,
			item.rarity,
			item.attunement ? 'requires attunement' : 'no attunement'
		].join(' ')
	};

	return {
		id: `equipment:${getPugilistEquipmentSlug(item)}`,
		href,
		title: item.name,
		subtitle: `${item.type} - ${item.rarity}`,
		description,
		category: 'equipment',
		tags: item.tags,
		sourceFields: Object.entries(fields)
			.filter(([, value]) => value.trim().length > 0)
			.map(([field]) => field as SearchSourceField),
		fieldText: fields,
		searchText: normalize(Object.values(fields).join(' '))
	};
}

function createNpcSearchEntry(npc: PugilistNpc): SearchEntry {
	const href = getPugilistNpcHref(npc);
	const description = getInlineContentText(npc.description);
	const fields: Record<SearchSourceField, string> = {
		title: npc.name,
		description,
		content: description,
		tags: 'npc nonplayer character pugilist',
		url: href,
		metadata: `CR ${npc.challenge} challenge rating Pugilist Clean Edition`
	};

	return {
		id: `npc:${getPugilistNpcSlug(npc)}`,
		href,
		title: npc.name,
		subtitle: `NPC - CR ${npc.challenge}`,
		description,
		category: 'npcs',
		tags: ['npc', 'nonplayer character', `CR ${npc.challenge}`],
		sourceFields: Object.entries(fields)
			.filter(([, value]) => value.trim().length > 0)
			.map(([field]) => field as SearchSourceField),
		fieldText: fields,
		searchText: normalize(Object.values(fields).join(' '))
	};
}

export const searchIndex = [
	...collectPageEntries(data).map(([path, page]) => createPageSearchEntry(path, page)),
	...spells.map(createSpellSearchEntry),
	...pugilistEquipmentItems.map(createEquipmentSearchEntry),
	...pugilistNpcs.map(createNpcSearchEntry)
] as const;

function scoreField(value: string, tokens: readonly string[], weight: number): number {
	const normalizedValue = normalize(value);

	return tokens.reduce((score, token) => {
		if (normalizedValue === token) {
			return score + weight * 6;
		}

		if (normalizedValue.startsWith(token)) {
			return score + weight * 4;
		}

		if (normalizedValue.includes(` ${token}`) || normalizedValue.includes(token)) {
			return score + weight;
		}

		return score;
	}, 0);
}

function getMatchedFields(
	entry: SearchEntry,
	fields: Record<SearchSourceField, string>,
	tokens: readonly string[]
): readonly SearchSourceField[] {
	return entry.sourceFields.filter((field) => {
		const value = normalize(fields[field] ?? '');

		return tokens.some((token) => value.includes(token));
	});
}

function getEntryFields(entry: SearchEntry): Record<SearchSourceField, string> {
	return entry.fieldText;
}

export function searchWiki(
	query: string,
	category: SearchCategory = 'all'
): readonly SearchResult[] {
	const tokens = tokenize(query);
	const hasQuery = tokens.length > 0;

	return searchIndex
		.filter((entry) => category === 'all' || entry.category === category)
		.map((entry) => {
			const fields = getEntryFields(entry);
			const score = hasQuery
				? scoreField(fields.title, tokens, 12) +
					scoreField(fields.tags, tokens, 8) +
					scoreField(fields.metadata, tokens, 6) +
					scoreField(fields.description, tokens, 4) +
					scoreField(fields.url, tokens, 3) +
					scoreField(fields.content, tokens, 1)
				: 1;

			return {
				...entry,
				score,
				matchedFields: hasQuery ? getMatchedFields(entry, fields, tokens) : []
			};
		})
		.filter((entry) => !hasQuery || entry.score > 0)
		.sort((left, right) => {
			if (right.score !== left.score) {
				return right.score - left.score;
			}

			return left.title.localeCompare(right.title);
		});
}

export const searchCategories = [
	{ value: 'all', label: 'All content' },
	{ value: 'classes', label: 'Classes' },
	{ value: 'subclasses', label: 'Subclasses' },
	{ value: 'rules', label: 'Rules' },
	{ value: 'spells', label: 'Spells' },
	{ value: 'equipment', label: 'Equipment' },
	{ value: 'npcs', label: 'NPCs' },
	{ value: 'species', label: 'Species' },
	{ value: 'monsters', label: 'Monsters' },
	{ value: 'locations', label: 'Locations' },
	{ value: 'community', label: 'Community' },
	{ value: 'project', label: 'Project' },
	{ value: 'legal', label: 'Legal' }
] as const satisfies readonly {
	readonly value: SearchCategory;
	readonly label: string;
}[];

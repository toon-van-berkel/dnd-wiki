import { getPageParent, pageRegistry, type PageKind } from '$lib/page/registry';
import { getSearchablePages } from '$lib/page/registry/Registry-helper';

export type SearchEntryKind = PageKind | 'page';

export type SearchEntry = {
	id: string;
	title: string;
	href: string;
	description: string;
	kind: SearchEntryKind;
	parentTitle?: string;
	tags: string[];
	keywords: string[];
	aliases: string[];
	score: number;
};

export type WikiSearchState = {
	query: string;
	typeIds: SearchEntryKind[];
	tagIds: string[];
	page: number;
};

export type SearchFilterOption = {
	id: string;
	label: string;
	count: number;
	selected?: boolean;
};

export type SearchFacetGroup = {
	id: string;
	label: string;
	selectedCount: number;
	facets: SearchFilterOption[];
};

const pageSize = 10;

export const contentTypeLabels: Record<SearchEntryKind, string> = {
	page: 'Page',
	information: 'Information',
	settings: 'Settings',
	legal: 'Legal',
	collection: 'Collection',
	rule: 'Rule',
	class: 'Class',
	subclass: 'Subclass',
	species: 'Species',
	technique: 'Technique',
	spell: 'Spell',
	notes: 'Notes',
	campaign: 'Campaign',
	session: 'Session',
	'one-shot': 'One-shot'
};

export function createEmptySearchState(): WikiSearchState {
	return {
		query: '',
		typeIds: [],
		tagIds: [],
		page: 1
	};
}

export function normalizeSearchQuery(query: string): string {
	return query
		.toLocaleLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, ' ')
		.replace(/\barmors\b/g, 'armour')
		.replace(/\barmor\b/g, 'armour')
		.replace(/\braces\b/g, 'species')
		.replace(/\brace\b/g, 'species')
		.replace(/\bdms\b/g, 'dungeon master')
		.replace(/\bdm\b/g, 'dungeon master')
		.replace(/\bmagical item\b/g, 'magic item')
		.replace(/\s+/g, ' ')
		.trim();
}

function searchTerms(query: string): string[] {
	return [...new Set(normalizeSearchQuery(query).split(/\s+/).filter(Boolean))];
}

function buildSearchEntries(): SearchEntry[] {
	return getSearchablePages().map((entry) => {
		const parent = getPageParent(entry);

		return {
			id: entry.id,
			title: entry.title,
			href: entry.href,
			description: entry.shortDescription ?? entry.description ?? '',
			kind: entry.kind ?? inferEntryKind(entry.id),
			parentTitle: parent?.title,
			tags: entry.tags ?? [],
			keywords: entry.keywords ?? [],
			aliases: entry.aliases ?? [],
			score: 0
		};
	});
}

const searchEntries = buildSearchEntries();

function inferEntryKind(id: string): SearchEntryKind {
	if (['classes', 'species', 'spells-and-abilities', 'rules', 'monsters', 'locations'].includes(id)) {
		return 'collection';
	}

	if (id.startsWith('spells-and-abilities--techniques--')) {
		return 'technique';
	}

	if (id.startsWith('spells-and-abilities--spells--')) {
		return 'spell';
	}

	if (id.startsWith('classes--rogue--') || id.startsWith('classes--cleric--')) {
		return 'subclass';
	}

	if (id.startsWith('classes--')) {
		return 'class';
	}

	if (id.startsWith('species--')) {
		return 'species';
	}

	if (id.startsWith('rules--')) {
		return 'rule';
	}

	if (['legal', 'privacy', 'cookies', 'contribution-terms', 'content-removal'].includes(id)) {
		return 'legal';
	}

	if (id === 'preferences') {
		return 'settings';
	}

	return 'information';
}

function scoreEntry(entry: SearchEntry, terms: readonly string[]): number {
	if (terms.length === 0) {
		return 1;
	}

	const searchableParts = {
		title: normalizeSearchQuery(entry.title),
		description: normalizeSearchQuery(entry.description),
		tags: normalizeSearchQuery(entry.tags.join(' ')),
		keywords: normalizeSearchQuery(entry.keywords.join(' ')),
		aliases: normalizeSearchQuery(entry.aliases.join(' ')),
		parent: normalizeSearchQuery(entry.parentTitle ?? '')
	};

	let score = 0;

	for (const term of terms) {
		if (searchableParts.title === term) score += 80;
		if (searchableParts.title.includes(term)) score += 40;
		if (searchableParts.aliases.includes(term)) score += 35;
		if (searchableParts.tags.includes(term)) score += 25;
		if (searchableParts.keywords.includes(term)) score += 18;
		if (searchableParts.parent.includes(term)) score += 10;
		if (searchableParts.description.includes(term)) score += 8;
	}

	return score;
}

export function searchWiki(state: WikiSearchState): SearchEntry[] {
	const terms = searchTerms(state.query);

	return searchEntries
		.filter((entry) => state.typeIds.length === 0 || state.typeIds.includes(entry.kind))
		.filter((entry) => state.tagIds.length === 0 || state.tagIds.every((tag) => entry.tags.includes(tag)))
		.map((entry) => ({ ...entry, score: scoreEntry(entry, terms) }))
		.filter((entry) => terms.length === 0 || entry.score > 0)
		.sort((first, second) => second.score - first.score || first.title.localeCompare(second.title));
}

export function getSearchSuggestions(query: string): SearchEntry[] {
	const state = {
		query,
		typeIds: [],
		tagIds: [],
		page: 1
	} satisfies WikiSearchState;

	return searchWiki(state).slice(0, 6);
}

export function getCollectionSuggestions(query: string): SearchEntry[] {
	const terms = searchTerms(query);
	if (terms.length === 0) return [];

	return searchEntries
		.filter((entry) => entry.kind === 'collection')
		.map((entry) => ({ ...entry, score: scoreEntry(entry, terms) }))
		.filter((entry) => entry.score > 0)
		.slice(0, 4);
}

export function getTypeFacets(state: WikiSearchState): SearchFilterOption[] {
	const selectedTags = new Set(state.tagIds);
	const entries = searchEntries.filter(
		(entry) => selectedTags.size === 0 || [...selectedTags].every((tag) => entry.tags.includes(tag))
	);
	const counts = new Map<SearchEntryKind, number>();

	for (const entry of entries) {
		counts.set(entry.kind, (counts.get(entry.kind) ?? 0) + 1);
	}

	return [...counts.entries()]
		.map(([id, count]) => ({
			id,
			label: contentTypeLabels[id],
			count,
			selected: state.typeIds.includes(id)
		}))
		.sort((first, second) => first.label.localeCompare(second.label));
}

export function getTagFacets(state: WikiSearchState): SearchFilterOption[] {
	const selectedTypes = new Set(state.typeIds);
	const entries = searchEntries.filter(
		(entry) => selectedTypes.size === 0 || selectedTypes.has(entry.kind)
	);
	const counts = new Map<string, number>();

	for (const entry of entries) {
		for (const tag of entry.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.map(([id, count]) => ({
			id,
			label: getSearchTagLabel(id),
			count,
			selected: state.tagIds.includes(id)
		}))
		.sort((first, second) => first.label.localeCompare(second.label));
}

export function groupTagFacets(facets: readonly SearchFilterOption[]): SearchFacetGroup[] {
	const selectedCount = facets.filter((facet) => facet.selected).length;

	return facets.length
		? [
				{
					id: 'tags',
					label: 'Tags',
					selectedCount,
					facets: [...facets]
				}
			]
		: [];
}

export function getSearchTagLabel(tagId: string): string {
	return tagId
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

export function paginateResults<T>(items: readonly T[], requestedPage: number) {
	const total = items.length;
	const totalPages = Math.max(1, Math.ceil(total / pageSize));
	const page = Math.min(Math.max(1, requestedPage), totalPages);
	const startIndex = (page - 1) * pageSize;
	const pageItems = items.slice(startIndex, startIndex + pageSize);

	return {
		items: pageItems,
		page,
		total,
		totalPages,
		start: total === 0 ? 0 : startIndex + 1,
		end: startIndex + pageItems.length
	};
}

export function readSearchStateFromParams(params: URLSearchParams): WikiSearchState {
	const page = Number.parseInt(params.get('page') ?? '1', 10);
	const typeIds = params.getAll('type').filter((value): value is SearchEntryKind =>
		value in contentTypeLabels
	);
	const allTags = new Set(pageRegistry.flatMap((entry) => entry.tags ?? []));
	const tagIds = params.getAll('tag').filter((value) => allTags.has(value));

	return {
		query: params.get('q')?.trim() ?? '',
		typeIds,
		tagIds,
		page: Number.isFinite(page) && page > 0 ? page : 1
	};
}

export function writeSearchStateToParams(params: URLSearchParams, state: WikiSearchState): URLSearchParams {
	const nextParams = new URLSearchParams(params);
	nextParams.delete('q');
	nextParams.delete('type');
	nextParams.delete('tag');
	nextParams.delete('page');

	if (state.query) nextParams.set('q', state.query);
	for (const typeId of state.typeIds) nextParams.append('type', typeId);
	for (const tagId of state.tagIds) nextParams.append('tag', tagId);
	if (state.page > 1) nextParams.set('page', String(state.page));

	return nextParams;
}

export function buildHeaderSearchHref(query: string): string {
	const trimmedQuery = query.trim().replace(/\s+/g, ' ');
	return trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : '/search';
}

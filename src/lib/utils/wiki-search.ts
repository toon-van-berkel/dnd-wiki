import {
	collectionEntries,
	contentTypeLabels,
	searchableEntries,
	type SearchEntry,
	type SearchEntryKind
} from '../wiki/search-index.js';
import {
	searchTagById,
	searchTagGroupLabels,
	searchTagGroupOrder,
	type SearchTagGroupId
} from '../wiki/search-tags.js';

export const RESULTS_PER_PAGE = 30;
export const SEARCH_QUERY_KEYS = {
	query: 'q',
	type: 'type',
	tags: 'tags',
	page: 'page'
} as const;

export type WikiSearchFilters = {
	typeIds: SearchEntryKind[];
	tagIds: string[];
};

export type WikiSearchState = WikiSearchFilters & {
	query: string;
	page: number;
};

export type ScoredSearchEntry = SearchEntry & {
	score: number;
	titleRank: number;
};

export type SearchTypeFacet = {
	id: SearchEntryKind;
	label: string;
	count: number;
	selected: boolean;
};

export type SearchTagFacet = {
	id: string;
	label: string;
	group: SearchTagGroupId;
	count: number;
	selected: boolean;
};

export type SearchTagFacetGroup = {
	id: SearchTagGroupId;
	label: string;
	facets: SearchTagFacet[];
	selectedCount: number;
};

const searchableTypeIds = new Set(searchableEntries.map((entry) => entry.kind));
const searchableTagIds = new Set(searchableEntries.flatMap((entry) => entry.tags));

export function createEmptySearchState(): WikiSearchState {
	return {
		query: '',
		typeIds: [],
		tagIds: [],
		page: 1
	};
}

export function searchWiki(state: WikiSearchState): ScoredSearchEntry[] {
	const tokens = tokeniseSearchQuery(state.query);

	return searchableEntries
		.filter((entry) => matchesQuery(entry, tokens) && matchesSearchFilters(entry, state))
		.map((entry) => scoreSearchEntry(entry, normaliseSearchQuery(state.query), tokens))
		.filter((entry) => tokens.length === 0 || entry.score > 0)
		.sort(compareScoredEntries);
}

export function getCollectionSuggestions(query: string, limit = 5): SearchEntry[] {
	const normalizedQuery = normalizeSearchText(query);

	if (!normalizedQuery) {
		return collectionEntries.slice(0, limit);
	}

	return collectionEntries
		.filter((entry) => getSearchableFields(entry).some((field) => field.includes(normalizedQuery)))
		.slice(0, limit);
}

export function getSearchSuggestions(query: string, limit = 8): SearchEntry[] {
	const normalizedQuery = normalizeSearchText(query);

	if (!normalizedQuery) {
		return [];
	}

	return searchWiki({
		query,
		typeIds: [],
		tagIds: [],
		page: 1
	})
		.slice(0, limit)
		.map(({ score, titleRank, ...entry }) => entry);
}

export function matchesSearchFilters(entry: SearchEntry, filters: WikiSearchFilters): boolean {
	const matchesType = filters.typeIds.length === 0 || filters.typeIds.includes(entry.kind);
	const matchesTags =
		filters.tagIds.length === 0 || filters.tagIds.some((tagId) => entry.tags.includes(tagId));

	return matchesType && matchesTags;
}

export function getTypeFacets(state: WikiSearchState): SearchTypeFacet[] {
	const tokens = tokeniseSearchQuery(state.query);

	return [...searchableTypeIds]
		.map((id) => {
			const count = searchableEntries.filter(
				(entry) =>
					entry.kind === id &&
					matchesQuery(entry, tokens) &&
					matchesTagSelection(entry, state.tagIds)
			).length;
			const selected = state.typeIds.includes(id);

			return {
				id,
				label: contentTypeLabels[id],
				count,
				selected
			};
		})
		.filter((facet) => facet.count > 0 || facet.selected)
		.sort((a, b) => a.label.localeCompare(b.label));
}

export function getTagFacets(state: WikiSearchState): SearchTagFacet[] {
	const tokens = tokeniseSearchQuery(state.query);

	return [...searchableTagIds]
		.map((id) => {
			const count = searchableEntries.filter(
				(entry) =>
					entry.tags.includes(id) &&
					matchesQuery(entry, tokens) &&
					matchesTypeSelection(entry, state.typeIds)
			).length;
			const selected = state.tagIds.includes(id);

			return {
				id,
				label: getTagLabel(id),
				group: searchTagById.get(id)?.group ?? 'flavour',
				count,
				selected
			};
		})
		.filter((facet) => facet.count > 0 || facet.selected)
		.sort((a, b) => a.label.localeCompare(b.label));
}

export function groupTagFacets(facets: SearchTagFacet[]): SearchTagFacetGroup[] {
	return searchTagGroupOrder
		.map((groupId) => {
			const groupFacets = facets.filter((facet) => facet.group === groupId);

			return {
				id: groupId,
				label: searchTagGroupLabels[groupId],
				facets: groupFacets,
				selectedCount: groupFacets.filter((facet) => facet.selected).length
			};
		})
		.filter((group) => group.facets.length > 0);
}

export function paginateResults<T>(items: T[], requestedPage: number, perPage = RESULTS_PER_PAGE) {
	const totalPages = Math.max(1, Math.ceil(items.length / perPage));
	const page = clampPage(requestedPage, totalPages);
	const startIndex = (page - 1) * perPage;
	const endIndex = Math.min(startIndex + perPage, items.length);

	return {
		items: items.slice(startIndex, endIndex),
		page,
		totalPages,
		start: items.length ? startIndex + 1 : 0,
		end: endIndex,
		total: items.length,
		perPage
	};
}

export function readSearchStateFromParams(searchParams: URLSearchParams): WikiSearchState {
	return {
		query: normalizeWhitespace(searchParams.get(SEARCH_QUERY_KEYS.query) ?? ''),
		typeIds: sanitizeTypeIds(parseListParam(searchParams.get(SEARCH_QUERY_KEYS.type))),
		tagIds: sanitizeTagIds(parseListParam(searchParams.get(SEARCH_QUERY_KEYS.tags))),
		page: parsePage(searchParams.get(SEARCH_QUERY_KEYS.page))
	};
}

export function writeSearchStateToParams(
	searchParams: URLSearchParams,
	state: WikiSearchState
): URLSearchParams {
	const nextSearchParams = new URLSearchParams(searchParams);

	writeParam(nextSearchParams, SEARCH_QUERY_KEYS.query, normalizeWhitespace(state.query));
	writeParam(nextSearchParams, SEARCH_QUERY_KEYS.type, state.typeIds.join(','));
	writeParam(nextSearchParams, SEARCH_QUERY_KEYS.tags, state.tagIds.join(','));
	writeParam(nextSearchParams, SEARCH_QUERY_KEYS.page, state.page > 1 ? String(state.page) : '');

	return nextSearchParams;
}

export function resetPageForSearchChange(state: WikiSearchState): WikiSearchState {
	return {
		...state,
		page: 1
	};
}

export function getAvailableTypeFilters() {
	return getTypeFacets(createEmptySearchState());
}

export function getAvailableTagFilters() {
	return getTagFacets(createEmptySearchState());
}

export function normaliseSearchQuery(value: string): string {
	return normalizeWhitespace(value)
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^\p{L}\p{N}\s-]/gu, ' ')
		.replace(/-/g, ' ')
		.replace(/\barmors\b/g, 'armour')
		.replace(/\barmor\b/g, 'armour')
		.replace(/\braces\b/g, 'species')
		.replace(/\brace\b/g, 'species')
		.replace(/\bdms\b/g, 'dungeon master')
		.replace(/\bdm\b/g, 'dungeon master')
		.replace(/\bmagical item\b/g, 'magic item')
		.split(/\s+/)
		.map(singularize)
		.join(' ')
		.trim();
}

export const normalizeSearchText = normaliseSearchQuery;

export function tokeniseSearchQuery(query: string): string[] {
	return [...new Set(normaliseSearchQuery(query).split(/\s+/).filter(Boolean))];
}

export function buildHeaderSearchHref(
	rawQuery: string,
	options: {
		currentRouteId?: string | null;
		currentSearchParams?: URLSearchParams;
	} = {}
): string {
	const query = normalizeWhitespace(rawQuery);
	const searchParams =
		options.currentRouteId === '/search' && options.currentSearchParams
			? new URLSearchParams(options.currentSearchParams)
			: new URLSearchParams();

	const state = readSearchStateFromParams(searchParams);
	const nextState: WikiSearchState = {
		query,
		typeIds: options.currentRouteId === '/search' ? state.typeIds : [],
		tagIds: options.currentRouteId === '/search' ? state.tagIds : [],
		page: 1
	};
	const nextSearchParams = writeSearchStateToParams(new URLSearchParams(), nextState);
	const queryString = nextSearchParams.toString();

	return queryString ? `/search?${queryString}` : '/search';
}

function scoreSearchEntry(entry: SearchEntry, query: string, tokens: string[]): ScoredSearchEntry {
	if (!tokens.length) {
		return {
			...entry,
			score: 0,
			titleRank: getBlankTitleRank(entry)
		};
	}

	const title = normalizeSearchText(entry.title);
	const aliases = entry.aliases.map(normalizeSearchText);
	const keywords = entry.keywords.map(normalizeSearchText);
	const tags = entry.tags.map((tag) => normalizeSearchText(getTagLabel(tag)));
	const kind = normalizeSearchText(contentTypeLabels[entry.kind]);
	const parent = normalizeSearchText(entry.parentTitle ?? '');
	const description = normalizeSearchText(entry.description);

	if (!tokens.every((token) => tokenAppears(token, [title, ...aliases, ...keywords, ...tags, kind, parent, description]))) {
		return {
			...entry,
			score: 0,
			titleRank: 9
		};
	}

	let score = 0;
	let titleRank = 9;

	if (title === query) {
		score += 120;
		titleRank = 0;
	} else if (title.startsWith(query)) {
		score += 90;
		titleRank = 1;
	} else if (title.includes(query)) {
		score += 70;
		titleRank = 2;
	}

	for (const alias of aliases) {
		if (alias === query || alias.includes(query)) {
			score += 65;
			titleRank = Math.min(titleRank, 3);
		}
	}

	score += countTokenMatches(tokens, keywords) * 42;
	score += countTokenMatches(tokens, tags) * 30;
	score += countTokenMatches(tokens, [kind]) * 28;
	score += countTokenMatches(tokens, [parent]) * 18;
	score += countTokenMatches(tokens, [description]) * 12;

	return {
		...entry,
		score,
		titleRank
	};
}

function compareScoredEntries(a: ScoredSearchEntry, b: ScoredSearchEntry): number {
	if (b.score !== a.score) return b.score - a.score;
	if (a.titleRank !== b.titleRank) return a.titleRank - b.titleRank;
	if (a.kind !== b.kind) {
		return contentTypeLabels[a.kind].localeCompare(contentTypeLabels[b.kind]);
	}

	return a.title.localeCompare(b.title);
}

function getSearchableFields(entry: SearchEntry): string[] {
	return [
		entry.title,
		entry.description,
		contentTypeLabels[entry.kind],
		entry.parentTitle ?? '',
		...entry.tags.map(getTagLabel),
		...entry.keywords,
		...entry.aliases
	].map(normalizeSearchText);
}

function tokenAppears(token: string, fields: string[]): boolean {
	return fields.some((field) => field.includes(token));
}

function countTokenMatches(tokens: string[], fields: string[]): number {
	return tokens.filter((token) => tokenAppears(token, fields)).length;
}

function matchesQuery(entry: SearchEntry, tokens: string[]): boolean {
	return tokens.every((token) => tokenAppears(token, getSearchableFields(entry)));
}

function matchesTypeSelection(entry: SearchEntry, typeIds: SearchEntryKind[]): boolean {
	return typeIds.length === 0 || typeIds.includes(entry.kind);
}

function matchesTagSelection(entry: SearchEntry, tagIds: string[]): boolean {
	return tagIds.length === 0 || tagIds.some((tagId) => entry.tags.includes(tagId));
}

function sanitizeTypeIds(ids: string[]): SearchEntryKind[] {
	return ids.filter((id): id is SearchEntryKind => searchableTypeIds.has(id as SearchEntryKind));
}

function sanitizeTagIds(ids: string[]): string[] {
	return ids.filter((id) => searchableTagIds.has(id));
}

function parseListParam(value: string | null): string[] {
	return value
		?.split(',')
		.map((item) => item.trim())
		.filter(Boolean) ?? [];
}

function parsePage(value: string | null): number {
	const page = Number.parseInt(value ?? '', 10);
	return Number.isFinite(page) && page > 0 ? page : 1;
}

function clampPage(page: number, totalPages: number): number {
	return Math.min(Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1), totalPages);
}

function writeParam(searchParams: URLSearchParams, key: string, value: string) {
	if (value) {
		searchParams.set(key, value);
	} else {
		searchParams.delete(key);
	}
}

function getBlankTitleRank(entry: SearchEntry): number {
	const order: SearchEntryKind[] = ['class', 'subclass', 'species', 'rule', 'location', 'monster', 'spell'];
	const index = order.indexOf(entry.kind);

	return index === -1 ? order.length : index;
}

export function getSearchTagLabel(id: string): string {
	return searchTagById.get(id)?.label ?? id;
}

const getTagLabel = getSearchTagLabel;

function normalizeWhitespace(value: string): string {
	return value.trim().replace(/\s+/g, ' ');
}

function singularize(value: string): string {
	if (value.endsWith('ies') && value.length > 4) {
		return `${value.slice(0, -3)}y`;
	}

	if (value.endsWith('s') && value.length > 3) {
		return value.slice(0, -1);
	}

	return value;
}

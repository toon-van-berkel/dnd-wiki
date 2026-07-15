export const FILTER_ALL_ID = 'all';

export type FilterableMetadata = {
	partyIds?: readonly string[];
	dmIds?: readonly string[];
};

export type ContentFilterSelection = {
	partyIds: readonly string[];
	dmIds: readonly string[];
};

function matchesSelectedIds(
	itemIds: readonly string[] | undefined,
	selectedIds: readonly string[]
) {
	return (
		selectedIds.length === 0 ||
		itemIds?.includes(FILTER_ALL_ID) ||
		selectedIds.some((id) => itemIds?.includes(id)) ||
		false
	);
}

export function matchesPartyFilter(
	item: FilterableMetadata,
	selectedPartyIds: readonly string[]
) {
	return matchesSelectedIds(item.partyIds, selectedPartyIds);
}

export function matchesDungeonMasterFilter(
	item: FilterableMetadata,
	selectedDmIds: readonly string[]
) {
	return matchesSelectedIds(item.dmIds, selectedDmIds);
}

export function matchesContentFilters(
	item: FilterableMetadata,
	selectedFilters: ContentFilterSelection
) {
	return (
		matchesPartyFilter(item, selectedFilters.partyIds) &&
		matchesDungeonMasterFilter(item, selectedFilters.dmIds)
	);
}

export function sanitizeStoredFilters(
	value: unknown,
	validPartyIds: ReadonlySet<string>,
	validDmIds: ReadonlySet<string>
): ContentFilterSelection {
	if (typeof value !== 'object' || value === null || Array.isArray(value)) {
		return { partyIds: [], dmIds: [] };
	}

	const filters = value as { partyIds?: unknown; dmIds?: unknown };
	const partyIds = Array.isArray(filters.partyIds)
		? filters.partyIds.filter((id): id is string => typeof id === 'string' && validPartyIds.has(id))
		: [];
	const dmIds = Array.isArray(filters.dmIds)
		? filters.dmIds.filter((id): id is string => typeof id === 'string' && validDmIds.has(id))
		: [];

	return { partyIds, dmIds };
}

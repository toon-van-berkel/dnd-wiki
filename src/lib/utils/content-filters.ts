import {
	isDungeonMasterId,
	isPartyId,
	type DungeonMasterId,
	type PartyId
} from '../config/campaigns.js';

export const FILTER_ALL_ID = 'all';

export type FilterableMetadata = {
	partyIds?: readonly (PartyId | typeof FILTER_ALL_ID)[];
	dmIds?: readonly (DungeonMasterId | typeof FILTER_ALL_ID)[];
};

export type ContentFilterSelection = {
	partyIds: readonly PartyId[];
	dmIds: readonly DungeonMasterId[];
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
	value: unknown
): ContentFilterSelection {
	if (typeof value !== 'object' || value === null || Array.isArray(value)) {
		return { partyIds: [], dmIds: [] };
	}

	const filters = value as { partyIds?: unknown; dmIds?: unknown };
	const partyIds = Array.isArray(filters.partyIds)
		? filters.partyIds.filter(isPartyId)
		: [];
	const dmIds = Array.isArray(filters.dmIds)
		? filters.dmIds.filter(isDungeonMasterId)
		: [];

	return { partyIds, dmIds };
}

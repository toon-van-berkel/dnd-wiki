import {
	isDungeonMasterId,
	isPartyId,
	type PartyId
} from '$lib/config/parties';
import type { PersonId } from '$lib/config/people';

export const WIKI_PREFERENCES_STORAGE_KEY = 'dnd-wiki-preferences';

export type PageInformationPanelPreference = 'expanded' | 'collapsed';
export type TagVisibilityPreference = 'visible' | 'hidden';

export type WikiPreferences = {
	partyId?: PartyId;
	dmId?: PersonId;
	pageInformationPanel?: PageInformationPanelPreference;
	pageTags?: TagVisibilityPreference;
};

export function createEmptyWikiPreferences(): WikiPreferences {
	return {};
}

export function sanitizeWikiPreferences(value: unknown): WikiPreferences {
	if (!isRecord(value)) {
		return {};
	}

	const partyId = typeof value.partyId === 'string' && isPartyId(value.partyId)
		? value.partyId
		: undefined;
	const dmId = typeof value.dmId === 'string' && isDungeonMasterId(value.dmId)
		? value.dmId
		: undefined;
	const pageInformationPanel =
		value.pageInformationPanel === 'expanded' || value.pageInformationPanel === 'collapsed'
			? value.pageInformationPanel
			: undefined;
	const pageTags =
		value.pageTags === 'visible' || value.pageTags === 'hidden'
			? value.pageTags
			: undefined;

	return {
		...(partyId ? { partyId } : {}),
		...(dmId ? { dmId } : {}),
		...(pageInformationPanel ? { pageInformationPanel } : {}),
		...(pageTags ? { pageTags } : {})
	};
}

export function parseWikiPreferences(rawValue: string | null): WikiPreferences {
	if (!rawValue) {
		return createEmptyWikiPreferences();
	}

	try {
		return sanitizeWikiPreferences(JSON.parse(rawValue));
	} catch {
		return createEmptyWikiPreferences();
	}
}

export function loadWikiPreferences(): WikiPreferences {
	if (typeof localStorage === 'undefined') {
		return createEmptyWikiPreferences();
	}

	return parseWikiPreferences(localStorage.getItem(WIKI_PREFERENCES_STORAGE_KEY));
}

export function saveWikiPreferences(preferences: WikiPreferences) {
	if (typeof localStorage === 'undefined') {
		return;
	}

	const sanitizedPreferences = sanitizeWikiPreferences(preferences);

	if (
		sanitizedPreferences.partyId ||
		sanitizedPreferences.dmId ||
		sanitizedPreferences.pageInformationPanel ||
		sanitizedPreferences.pageTags
	) {
		localStorage.setItem(WIKI_PREFERENCES_STORAGE_KEY, JSON.stringify(sanitizedPreferences));
	} else {
		localStorage.removeItem(WIKI_PREFERENCES_STORAGE_KEY);
	}
}

export function clearWikiPreferences() {
	if (typeof localStorage === 'undefined') {
		return;
	}

	localStorage.removeItem(WIKI_PREFERENCES_STORAGE_KEY);
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

import { dungeonMasters, parties } from '../config/campaigns.js';

export const WIKI_PREFERENCES_STORAGE_KEY = 'dnd-wiki-preferences';

export type WikiPreferences = {
	partyId?: string;
	dmId?: string;
};

const validPartyIds: string[] = parties.map((party) => party.id);
const validDungeonMasterIds: string[] = dungeonMasters.map((dungeonMaster) => dungeonMaster.id);

export function createEmptyWikiPreferences(): WikiPreferences {
	return {};
}

export function sanitizeWikiPreferences(value: unknown): WikiPreferences {
	if (!isRecord(value)) {
		return {};
	}

	const partyId = typeof value.partyId === 'string' && validPartyIds.includes(value.partyId)
		? value.partyId
		: undefined;
	const dmId =
		typeof value.dmId === 'string' && validDungeonMasterIds.includes(value.dmId)
			? value.dmId
			: undefined;

	return {
		...(partyId ? { partyId } : {}),
		...(dmId ? { dmId } : {})
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

	if (sanitizedPreferences.partyId || sanitizedPreferences.dmId) {
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

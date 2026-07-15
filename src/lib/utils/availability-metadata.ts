import { availability, type PageAvailability } from '../data/availability.js';
import {
	getDungeonMasterForParty,
	getParty,
	type Party,
	type DungeonMasterId,
	type PartyId
} from '../config/campaigns.js';

export type AvailabilityMetadata = {
	partyIds?: string[];
	dmIds?: string[];
};

export function getAvailabilityMetadataForHref(href: string): AvailabilityMetadata {
	const pageAvailability = getAvailabilityForHref(href);

	if (!pageAvailability) {
		return {};
	}

	const partyIds = getAvailabilityPartyIds(pageAvailability);

	if (!partyIds.length) {
		return {};
	}

	return {
		partyIds,
		dmIds: getDungeonMasterIdsForPartyIds(partyIds)
	};
}

export function getAvailabilityPartyIds(pageAvailability: PageAvailability): string[] {
	// Banned availability is excluded because it does not represent usable content.
	return unique([
		...(pageAvailability.allowed ?? []),
		...(pageAvailability.limited ?? []),
		...(pageAvailability.approval ?? [])
	].filter((partyId): partyId is PartyId => Boolean(getParty(partyId))));
}

export function getDungeonMasterIdsForPartyIds(partyIds: string[]): string[] {
	return unique(
		partyIds
			.map((partyId) => getDungeonMasterForParty(partyId as PartyId)?.id)
			.filter((dmId): dmId is DungeonMasterId => Boolean(dmId))
	);
}

export function getAvailabilityParties(partyIds: readonly string[]) {
	return partyIds.map((partyId) => getParty(partyId)).filter((party): party is Party => Boolean(party));
}

export function getAvailabilityLabel(partyIds: readonly string[]) {
	return getAvailabilityParties(partyIds)
		.map((party) => party.name)
		.join(', ');
}

function getAvailabilityForHref(href: string): PageAvailability | undefined {
	const [category, pageName] = href.replace(/^\/+|\/+$/g, '').split('/');

	if (!category || !pageName) {
		return undefined;
	}

	return availability[category]?.[pageName];
}

function unique<T>(values: T[]): T[] {
	return [...new Set(values)];
}

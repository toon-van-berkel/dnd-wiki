// import { getAvailabilityByHref, type PageAvailability } from '../data/availability.js';
// import {
// 	getDungeonMasterForParty,
// 	getParty,
// 	isPartyId,
// 	type Party,
// 	type DungeonMasterId,
// 	type PartyId
// } from '../config/campaigns.js';

// export type AvailabilityMetadata = {
// 	partyIds?: readonly PartyId[];
// 	dmIds?: readonly DungeonMasterId[];
// };

// export function getAvailabilityMetadataForHref(href: string): AvailabilityMetadata {
// 	const pageAvailability = getAvailabilityByHref(href);
// 	const partyIds = getAvailabilityPartyIds(pageAvailability);

// 	if (!partyIds.length) {
// 		return {};
// 	}

// 	return {
// 		partyIds,
// 		dmIds: getDungeonMasterIdsForPartyIds(partyIds)
// 	};
// }

// export function getAvailabilityPartyIds(pageAvailability: PageAvailability): PartyId[] {
// 	// Banned availability is excluded because it does not represent usable content.
// 	return unique([
// 		...(pageAvailability.allowed ?? []),
// 		...(pageAvailability.limited ?? []),
// 		...(pageAvailability.approval ?? [])
// 	].filter((partyId): partyId is PartyId => Boolean(getParty(partyId))));
// }

// export function getDungeonMasterIdsForPartyIds(partyIds: readonly string[]): DungeonMasterId[] {
// 	return unique(
// 		partyIds
// 			.map((partyId) => (isPartyId(partyId) ? getDungeonMasterForParty(partyId)?.id : undefined))
// 			.filter((dmId): dmId is DungeonMasterId => Boolean(dmId))
// 	);
// }

// export function getAvailabilityParties(partyIds: readonly string[]): Party[] {
// 	return partyIds
// 		.map((partyId) => getParty(partyId))
// 		.filter((party): party is Party => Boolean(party));
// }

// export function getAvailabilityLabel(partyIds: readonly string[]) {
// 	return getAvailabilityParties(partyIds)
// 		.map((party) => party.name)
// 		.join(', ');
// }

// function unique<T>(values: readonly T[]): T[] {
// 	return [...new Set(values)];
// }

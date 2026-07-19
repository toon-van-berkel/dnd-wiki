import { isPartyId, selectAllParties, type PartyId } from '$lib/config/parties';
import { getPageEntry, getPageEntryByHref } from '$lib/page/registry';

export type AvailabilityStatus = 'allowed' | 'limited' | 'banned' | 'approval';

export type PageAvailability = Partial<Record<AvailabilityStatus, readonly PartyId[]>>;

export type AvailabilityInventoryEntry = {
	pageId: string;
	href: string;
	allowed: readonly PartyId[];
	limited: readonly PartyId[];
	banned: readonly PartyId[];
	approval: readonly PartyId[];
};

const availabilityStatuses = ['allowed', 'limited', 'banned', 'approval'] as const;

const allPartyIds = selectAllParties().map((party) => party.id);
const mainCampaignPartyIds = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'] satisfies PartyId[];

export const availabilityByPageId: Record<string, PageAvailability> = {
	'species--elf': {
		allowed: ['i1', 'i2', 'i4', 'i5', 'i6', 'i7', 'i8'],
		banned: ['i3']
	},
	'species--elf--astral-elf': {
		limited: ['i1'],
		banned: ['i3', 'i4'],
		approval: ['i2']
	},
	'classes--artificer': { allowed: allPartyIds },
	'classes--barbarian': { allowed: allPartyIds },
	'classes--bard': { allowed: allPartyIds },
	'classes--cleric': { allowed: allPartyIds },
	'classes--cleric--life-domain': { allowed: allPartyIds },
	'classes--cleric--death-domain': { allowed: allPartyIds },
	'classes--druid': { allowed: allPartyIds },
	'classes--fighter': { allowed: allPartyIds },
	'classes--monk': { allowed: allPartyIds },
	'classes--paladin': { allowed: allPartyIds },
	'classes--ranger': { allowed: allPartyIds },
	'classes--rogue': { allowed: allPartyIds },
	'classes--rogue--arcane-trickster': { allowed: mainCampaignPartyIds },
	'classes--sorcerer': { allowed: allPartyIds },
	'classes--warlock': { allowed: allPartyIds },
	'classes--wizard': { allowed: allPartyIds },
	'classes--gunslinger': { allowed: allPartyIds },
	'classes--monster-hunter': { allowed: allPartyIds },
	'classes--pugilist': { allowed: allPartyIds },
	'classes--captain': { allowed: allPartyIds },
	'classes--champion': { allowed: allPartyIds },
	'classes--messenger': { allowed: allPartyIds },
	'classes--scholar': { allowed: allPartyIds },
	'classes--treasure-hunter': { allowed: allPartyIds },
	'classes--warden': { allowed: allPartyIds },
	'classes--illrigger': { allowed: allPartyIds },
	'classes--blood-hunter': { allowed: allPartyIds },
	'classes--vampyr': { banned: mainCampaignPartyIds },
	'classes--mournbound': { banned: mainCampaignPartyIds }
} satisfies Record<string, PageAvailability>;

function copyAvailability(availability: PageAvailability | undefined): PageAvailability {
	if (!availability) return {};

	return Object.fromEntries(
		availabilityStatuses
			.filter((status) => availability[status] !== undefined)
			.map((status) => [status, [...(availability[status] ?? [])]])
	) as PageAvailability;
}

export function getAvailabilityForPage(pageId: string | undefined): PageAvailability {
	if (!pageId) return {};
	return copyAvailability(availabilityByPageId[pageId]);
}

export function getAvailabilityByPageId(pageId: string | undefined): PageAvailability {
	return getAvailabilityForPage(pageId);
}

export function getAvailabilityByHref(href: string | undefined): PageAvailability {
	if (!href) return {};
	return getAvailabilityForPage(getPageEntryByHref(href)?.id);
}

export function getAvailabilityInventory(): AvailabilityInventoryEntry[] {
	return Object.entries(availabilityByPageId).map(([pageId, availability]) => {
		const page = getPageEntry(pageId);

		if (!page) {
			throw new Error(`Availability references unknown page id ${pageId}`);
		}

		return {
			pageId,
			href: page.href,
			allowed: availability.allowed ?? [],
			limited: availability.limited ?? [],
			banned: availability.banned ?? [],
			approval: availability.approval ?? []
		};
	});
}

export function validateAvailabilityConfig(): string[] {
	const errors: string[] = [];

	for (const entry of getAvailabilityInventory()) {
		const seenStatusesByParty = new Map<PartyId, AvailabilityStatus>();

		for (const status of availabilityStatuses) {
			const partyIds = entry[status];
			const seenPartyIds = new Set<PartyId>();

			for (const partyId of partyIds) {
				if (!isPartyId(partyId)) {
					errors.push(`${entry.pageId} ${status} references unknown party ${partyId}`);
				}

				if (seenPartyIds.has(partyId)) {
					errors.push(`${entry.pageId} repeats party ${partyId} in ${status}`);
				}

				const previousStatus = seenStatusesByParty.get(partyId);
				if (previousStatus) {
					errors.push(`${entry.pageId} puts party ${partyId} in both ${previousStatus} and ${status}`);
				}

				seenPartyIds.add(partyId);
				seenStatusesByParty.set(partyId, status);
			}
		}
	}

	return errors;
}

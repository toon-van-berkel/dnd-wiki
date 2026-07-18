import { getPersonDisplayName, isPersonId, people, type Person, type PersonId } from './people';

export type PartyId = 'i1' | 'i2' | 'i3' | 'i4' | 'i5' | 'i6' | 'i7' | 'i8';

export type PartyColorTokens = {
	basic: string;
	soft: string;
};

export type Party = {
	id: PartyId;
	order: number;
	label: string;
	properName?: string;
	slug: string;
	dmId: PersonId;
	memberIds: PersonId[];
	colors: PartyColorTokens;
	pageId?: string;
	href?: string;
};

export const parties = {
	i1: {
		id: 'i1',
		order: 1,
		label: 'Party 1',
		slug: 'party1',
		dmId: 'toon',
		memberIds: ['tijs', 'andy', 'stan', 'roel', 'bryce'],
		colors: {
			basic: '--party-i1',
			soft: '--party-i1-soft'
		}
	},
	i2: {
		id: 'i2',
		order: 2,
		label: 'Party 2',
		properName: 'LuckyClover',
		slug: 'lucky-clover',
		dmId: 'toon',
		memberIds: ['tijs', 'ben', 'thomas', 'vince', 'stijn'],
		colors: {
			basic: '--party-i2',
			soft: '--party-i2-soft'
		}
	},
	i3: {
		id: 'i3',
		order: 3,
		label: 'Party 3',
		properName: 'FCGoonUnited',
		slug: 'fc-goon-united',
		dmId: 'toon',
		memberIds: ['stan', 'roel', 'bryce'],
		colors: {
			basic: '--party-i3',
			soft: '--party-i3-soft'
		}
	},
	i4: {
		id: 'i4',
		order: 4,
		label: 'Party 4',
		slug: 'party4',
		dmId: 'toon',
		memberIds: ['stan', 'roel'],
		colors: {
			basic: '--party-i4',
			soft: '--party-i4-soft'
		}
	},
	i5: {
		id: 'i5',
		order: 5,
		label: 'Party 5',
		properName: 'FemboyAss',
		slug: 'femboy-ass',
		dmId: 'toon',
		memberIds: ['jaydon', 'arch', 'rafeal'],
		colors: {
			basic: '--party-i5',
			soft: '--party-i5-soft'
		}
	},
	i6: {
		id: 'i6',
		order: 6,
		label: 'Party 6',
		properName: 'Crops',
		slug: 'crops',
		dmId: 'toon',
		memberIds: ['jaydon', 'rafeal', 'mo', 'tyler'],
		colors: {
			basic: '--party-i6',
			soft: '--party-i6-soft'
		}
	},
	i7: {
		id: 'i7',
		order: 7,
		label: 'Main',
		properName: '750',
		slug: '750',
		dmId: 'tijs',
		memberIds: ['thomas', 'ben', 'tiago', 'toon'],
		colors: {
			basic: '--party-i7',
			soft: '--party-i7-soft'
		}
	},
	i8: {
		id: 'i8',
		order: 8,
		label: 'Scouting',
		properName: 'MotelyCrew',
		slug: 'motely-crew',
		dmId: 'tijs',
		memberIds: ['melvin', 'lucas', 'toon', 'thomas'],
		colors: {
			basic: '--party-i8',
			soft: '--party-i8-soft'
		}
	}
} satisfies Record<PartyId, Party>;

export const guestPlayerIds = [
	'sam',
	'casper',
	'liam',
	'ronin',
	'aron',
	'mathijs'
] satisfies PersonId[];

export function isPartyId(value: string): value is PartyId {
	return value in parties;
}

export function getParty(id: PartyId): Party {
	return parties[id];
}

export function getSortedParties(): Party[] {
	return Object.values(parties).sort((first, second) => first.order - second.order);
}

export const sortedParties = getSortedParties();

export function getPartyDisplayName(party: Party | PartyId): string {
	const resolvedParty = typeof party === 'string' ? getParty(party) : party;
	return [resolvedParty.label, resolvedParty.properName].filter(Boolean).join(' - ');
}

export function formatNameList(names: readonly string[]): string {
	if (names.length === 0) return '';
	if (names.length === 1) return names[0];
	if (names.length === 2) return `${names[0]} & ${names[1]}`;

	return `${names.slice(0, -1).join(', ')} & ${names[names.length - 1]}`;
}

export function getPartyMemberSummary(party: Party | PartyId): string {
	const resolvedParty = typeof party === 'string' ? getParty(party) : party;
	return formatNameList(resolvedParty.memberIds.map(getPersonDisplayName));
}

export function getGuestPlayers(): Person[] {
	return guestPlayerIds.map((id) => people[id]);
}

export const dungeonMasterIds = Array.from(
	new Set(Object.values(parties).map((party) => party.dmId))
) as PersonId[];

export const dungeonMasters = dungeonMasterIds.map((id) => people[id]);

export function isDungeonMasterId(value: string): value is PersonId {
	return isPersonId(value) && dungeonMasterIds.includes(value);
}

export function getDungeonMasterForParty(party: Party | PartyId): Person {
	const resolvedParty = typeof party === 'string' ? getParty(party) : party;
	return people[resolvedParty.dmId];
}

export function selectParties(ids: readonly PartyId[]): Party[] {
	return ids.map(getParty);
}

export function selectAllParties(): Party[] {
	return getSortedParties();
}

export function validateParties(): string[] {
	const errors: string[] = [];
	const seenOrders = new Set<number>();
	const seenSlugs = new Set<string>();

	for (const party of Object.values(parties)) {
		if (!isPersonId(party.dmId)) {
			errors.push(`${party.id} references unknown DM ${party.dmId}`);
		}

		for (const memberId of party.memberIds) {
			if (!isPersonId(memberId)) {
				errors.push(`${party.id} references unknown member ${memberId}`);
			}
		}

		if (seenOrders.has(party.order)) {
			errors.push(`Duplicate party order ${party.order}`);
		}
		seenOrders.add(party.order);

		if (seenSlugs.has(party.slug)) {
			errors.push(`Duplicate party slug ${party.slug}`);
		}
		seenSlugs.add(party.slug);
	}

	for (const guestPlayerId of guestPlayerIds) {
		if (!isPersonId(guestPlayerId)) {
			errors.push(`Guest player references unknown person ${guestPlayerId}`);
		}
	}

	return errors;
}

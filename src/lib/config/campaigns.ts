export const campaignConfig = {
	dungeonMasters: {
		toon: {
			id: 'toon',
			name: 'Toon van Berkel',
			shortName: 'Toon'
		},
		tijs: {
			id: 'tijs',
			name: 'Tijs',
			shortName: 'Tijs'
		}
	},
	parties: {
		i1: {
			id: 'i1',
			name: 'Party 1',
			shortName: 'Party 1',
			members: 'Tijs, Andy, Stan, Roel & Bryce',
			dmId: 'toon',
			colorToken: '--party-i1',
			softColorToken: '--party-i1-soft',
			order: 1
		},
		i2: {
			id: 'i2',
			name: 'Party 2 - LuckyClover',
			shortName: 'LuckyClover',
			members: 'Tijs, Ben, Thomas, Vince & Stijn',
			dmId: 'toon',
			colorToken: '--party-i2',
			softColorToken: '--party-i2-soft',
			order: 2
		},
		i3: {
			id: 'i3',
			name: 'Party 3 - FCGoonUnited',
			shortName: 'FCGoonUnited',
			members: 'Stan, Roel & Bryce',
			dmId: 'toon',
			colorToken: '--party-i3',
			softColorToken: '--party-i3-soft',
			order: 3
		},
		i4: {
			id: 'i4',
			name: 'Party 4',
			shortName: 'Party 4',
			members: 'Stan & Roel',
			dmId: 'toon',
			colorToken: '--party-i4',
			softColorToken: '--party-i4-soft',
			order: 4
		},
		i5: {
			id: 'i5',
			name: 'Party 5 - FemboyAss',
			shortName: 'FemboyAss',
			members: 'Jaydon, Arch & Rafeal',
			dmId: 'toon',
			colorToken: '--party-i5',
			softColorToken: '--party-i5-soft',
			order: 5
		},
		i6: {
			id: 'i6',
			name: 'Party 6 - Crops',
			shortName: 'Crops',
			members: 'Jaydon, Rafeal, Mo & Tyler',
			dmId: 'toon',
			colorToken: '--party-i6',
			softColorToken: '--party-i6-soft',
			order: 6
		},
		i7: {
			id: 'i7',
			name: 'Main - 750',
			shortName: 'Main - 750',
			members: 'Thomas, Ben, Tiago & Toon',
			dmId: 'tijs',
			colorToken: '--party-i7',
			softColorToken: '--party-i7-soft',
			order: 7
		},
		i8: {
			id: 'i8',
			name: 'Scouting - MotelyCrew',
			shortName: 'MotelyCrew',
			members: 'Melvin, Lucas, Toon & Thomas',
			dmId: 'tijs',
			colorToken: '--party-i8',
			softColorToken: '--party-i8-soft',
			order: 8
		}
	}
} as const;

export type DungeonMasterId = keyof typeof campaignConfig.dungeonMasters;
export type PartyId = keyof typeof campaignConfig.parties;
export type DungeonMaster = (typeof campaignConfig.dungeonMasters)[DungeonMasterId];
export type Party = (typeof campaignConfig.parties)[PartyId];

function configKeys<T extends Record<string, unknown>>(value: T) {
	return Object.keys(value) as (keyof T & string)[];
}

export const dungeonMasterIds = Object.freeze(configKeys(campaignConfig.dungeonMasters));
export const partyIds = Object.freeze(configKeys(campaignConfig.parties));

export const dungeonMasters = Object.freeze(
	dungeonMasterIds.map((id) => campaignConfig.dungeonMasters[id])
);
export const parties = Object.freeze(
	partyIds
		.map((id) => campaignConfig.parties[id])
		.sort((a, b) => a.order - b.order)
);
export const allPartyIds = Object.freeze(parties.map((party) => party.id));
const dungeonMasterById: ReadonlyMap<string, DungeonMaster> = new Map(
	dungeonMasters.map((dungeonMaster) => [dungeonMaster.id, dungeonMaster])
);
const partyById: ReadonlyMap<string, Party> = new Map(
	parties.map((party) => [party.id, party])
);

export function getDungeonMaster(id: string): DungeonMaster | undefined {
	return dungeonMasterById.get(id);
}

export function getParty(id: string): Party | undefined {
	return partyById.get(id);
}

export function getPartiesForDungeonMaster(dmId: DungeonMasterId): Party[] {
	return parties.filter((party) => party.dmId === dmId);
}

export function getDungeonMasterForParty(partyId: PartyId): DungeonMaster | undefined {
	const party = getParty(partyId);

	return party ? getDungeonMaster(party.dmId) : undefined;
}

export function isDungeonMasterId(value: unknown): value is DungeonMasterId {
	return typeof value === 'string' && dungeonMasterById.has(value);
}

export function isPartyId(value: unknown): value is PartyId {
	return typeof value === 'string' && partyById.has(value);
}

export function selectParties(...ids: readonly unknown[]): PartyId[] {
	return ids.filter(isPartyId);
}

export function selectAllParties(): PartyId[] {
	return [...allPartyIds];
}

export function validateCampaignConfig() {
	const partyIds = new Set<string>();
	const dungeonMasterIds = new Set<string>();
	const partyOrders = new Set<number>();

	for (const [key, dungeonMaster] of Object.entries(campaignConfig.dungeonMasters)) {
		if (key !== dungeonMaster.id) {
			throw new Error(`Dungeon Master key ${key} does not match id ${dungeonMaster.id}.`);
		}

		if (!dungeonMaster.id || !dungeonMaster.name) {
			throw new Error('Invalid Dungeon Master configuration.');
		}

		if (dungeonMasterIds.has(dungeonMaster.id)) {
			throw new Error(`Duplicate Dungeon Master id: ${dungeonMaster.id}.`);
		}

		dungeonMasterIds.add(dungeonMaster.id);
	}

	for (const [key, party] of Object.entries(campaignConfig.parties)) {
		if (key !== party.id) {
			throw new Error(`Party key ${key} does not match id ${party.id}.`);
		}

		if (!party.id || !party.name) {
			throw new Error('Invalid party configuration.');
		}

		if (partyIds.has(party.id)) {
			throw new Error(`Duplicate party id: ${party.id}.`);
		}

		if (!dungeonMasterIds.has(party.dmId)) {
			throw new Error(`Party ${party.id} references unknown Dungeon Master ${party.dmId}.`);
		}

		if (partyOrders.has(party.order)) {
			throw new Error(`Duplicate party order: ${party.order}.`);
		}

		if (!Number.isInteger(party.order) || party.order <= 0) {
			throw new Error(`Invalid party order for ${party.id}: ${party.order}.`);
		}

		if (!/^--party-[a-z0-9-]+$/.test(party.colorToken)) {
			throw new Error(`Invalid party colour token for ${party.id}: ${party.colorToken}.`);
		}

		if (!/^--party-[a-z0-9-]+-soft$/.test(party.softColorToken)) {
			throw new Error(`Invalid party soft colour token for ${party.id}: ${party.softColorToken}.`);
		}

		partyIds.add(party.id);
		partyOrders.add(party.order);
	}

	if (allPartyIds.length !== partyIds.size) {
		throw new Error('Derived party id list does not match configured parties.');
	}
}

validateCampaignConfig();

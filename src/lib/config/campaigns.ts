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
			dmId: 'toon',
			colorToken: '--party-i1',
			softColorToken: '--party-i1-soft',
			order: 1
		},
		i2: {
			id: 'i2',
			name: 'Party 2 - LuckyClover',
			shortName: 'LuckyClover',
			dmId: 'toon',
			colorToken: '--party-i2',
			softColorToken: '--party-i2-soft',
			order: 2
		},
		i3: {
			id: 'i3',
			name: 'Party 3 - FCGoonUnited',
			shortName: 'FCGoonUnited',
			dmId: 'toon',
			colorToken: '--party-i3',
			softColorToken: '--party-i3-soft',
			order: 3
		},
		i4: {
			id: 'i4',
			name: 'Party 4',
			shortName: 'Party 4',
			dmId: 'toon',
			colorToken: '--party-i4',
			softColorToken: '--party-i4-soft',
			order: 4
		},
		i5: {
			id: 'i5',
			name: 'Party 5 - FemboyAss',
			shortName: 'FemboyAss',
			dmId: 'toon',
			colorToken: '--party-i5',
			softColorToken: '--party-i5-soft',
			order: 5
		},
		i6: {
			id: 'i6',
			name: 'Party 6 - Crops',
			shortName: 'Crops',
			dmId: 'toon',
			colorToken: '--party-i6',
			softColorToken: '--party-i6-soft',
			order: 6
		},
		i7: {
			id: 'i7',
			name: 'Main - 750',
			shortName: 'Main - 750',
			dmId: 'tijs',
			colorToken: '--party-i7',
			softColorToken: '--party-i7-soft',
			order: 7
		},
		i8: {
			id: 'i8',
			name: 'Scouting - MotelyCrew',
			shortName: 'MotelyCrew',
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

export const dungeonMasters = Object.values(campaignConfig.dungeonMasters);
export const parties = Object.values(campaignConfig.parties).sort((a, b) => a.order - b.order);
export const dungeonMasterById: ReadonlyMap<string, DungeonMaster> = new Map(
	dungeonMasters.map((dungeonMaster) => [dungeonMaster.id, dungeonMaster])
);
export const partyById: ReadonlyMap<string, Party> = new Map(
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

export function validateCampaignConfig() {
	const partyIds = new Set<string>();
	const dungeonMasterIds = new Set<string>();
	const partyOrders = new Set<number>();

	for (const dungeonMaster of dungeonMasters) {
		if (!dungeonMaster.id || !dungeonMaster.name) {
			throw new Error('Invalid Dungeon Master configuration.');
		}

		if (dungeonMasterIds.has(dungeonMaster.id)) {
			throw new Error(`Duplicate Dungeon Master id: ${dungeonMaster.id}.`);
		}

		dungeonMasterIds.add(dungeonMaster.id);
	}

	for (const party of parties) {
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

		if (!/^--party-[a-z0-9-]+$/.test(party.colorToken)) {
			throw new Error(`Invalid party colour token for ${party.id}: ${party.colorToken}.`);
		}

		partyIds.add(party.id);
		partyOrders.add(party.order);
	}
}

validateCampaignConfig();

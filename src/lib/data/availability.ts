import { selectParties, type Party } from './parties';

export type PageAvailability = {
	allowed?: Party[];
	limited?: Party[];
	banned?: Party[];
	approval?: Party[];
};

export type AvailabilityConfig = Record<string, Record<string, PageAvailability>>;

export const availability: AvailabilityConfig = {
	species: {
		elf: {
			allowed: selectParties('i1', 'i2', 'i4', 'i5', 'i6', 'i7', 'i8'),
			banned: selectParties('i3')
		},
		dwarf: {
			allowed: selectParties('i1', 'i2', 'i3', 'i4'),
			approval: selectParties('i5', 'i6')
		},
		'tiefling-hybrid': {
			allowed: selectParties('i1'),
			banned: selectParties('i2', 'i3')
		}
	},
	classes: {
		rogue: {
			allowed: selectParties('i1', 'i2', 'i3', 'i4', 'i5', 'i6')
		},
		artificer: {
			allowed: selectParties('i1', 'i2'),
			approval: selectParties('i3', 'i4', 'i5', 'i6')
		}
	}
};
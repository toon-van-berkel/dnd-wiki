const logos = {
	simple: {
		href: '/icons/white/classes/rogue.svg',
		alt: 'A stylized Rogue emblem showing a hooded figure.'
	}
};

export const rogue = {
	name: {
		normal: 'Rogue',
		slug: 'rogue'
	},

	logos,

	subclasses: {
		arcaneTrickster: {
			name: {
				normal: 'Arcane Trickster',
				short: 'Arcane Trickster',
				slug: 'arcane-trickster'
			}
		},
		assassin: {
			name: {
				normal: 'Assassin',
				short: 'Assassin',
				slug: 'assassin'
			}
		},
		inquisitive: {
			name: {
				normal: 'Inquisitive',
				short: 'Inquisitive',
				slug: 'inquisitive'
			}
		},
		mastermind: {
			name: {
				normal: 'Mastermind',
				short: 'Mastermind',
				slug: 'mastermind'
			}
		},
		phantom: {
			name: {
				normal: 'Phantom',
				short: 'Phantom',
				slug: 'phantom'
			}
		},
		scout: {
			name: {
				normal: 'Scout',
				short: 'Scout',
				slug: 'scout'
			}
		},
		soulknife: {
			name: {
				normal: 'Soulknife',
				short: 'Soulknife',
				slug: 'soulknife'
			}
		},
		swashbuckler: {
			name: {
				normal: 'Swashbuckler',
				short: 'Swashbuckler',
				slug: 'swashbuckler'
			}
		},
		thief: {
			name: {
				normal: 'Thief',
				short: 'Thief',
				slug: 'thief'
			}
		}
	}
} as const;

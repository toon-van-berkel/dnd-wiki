import { concentration } from './concentration';
import { spells } from './spells';

const cantrips = {
	name: {
		normal: 'Cantrips',
		slug: 'cantrips'
	},

	logos: {
		simple: {
			href: '/icons/white/game/spell.svg',
			alt: 'A stylized spell icon representing cantrips.'
		}
	}
} as const;

const spellLevels = {
	firstLevel: {
		name: {
			normal: '1st-Level Spells',
			slug: '1st-level'
		},

		logos: spells.logos
	},

	secondLevel: {
		name: {
			normal: '2nd-Level Spells',
			slug: '2nd-level'
		},

		logos: spells.logos
	},

	thirdLevel: {
		name: {
			normal: '3rd-Level Spells',
			slug: '3rd-level'
		},

		logos: spells.logos
	},

	fourthLevel: {
		name: {
			normal: '4th-Level Spells',
			slug: '4th-level'
		},

		logos: spells.logos
	},

	fifthLevel: {
		name: {
			normal: '5th-Level Spells',
			slug: '5th-level'
		},

		logos: spells.logos
	},

	sixthLevel: {
		name: {
			normal: '6th-Level Spells',
			slug: '6th-level'
		},

		logos: spells.logos
	},

	seventhLevel: {
		name: {
			normal: '7th-Level Spells',
			slug: '7th-level'
		},

		logos: spells.logos
	},

	eighthLevel: {
		name: {
			normal: '8th-Level Spells',
			slug: '8th-level'
		},

		logos: spells.logos
	},

	ninthLevel: {
		name: {
			normal: '9th-Level Spells',
			slug: '9th-level'
		},

		logos: spells.logos
	}
} as const;

export const spellcasting = {
	name: {
		normal: 'Spellcasting',
		slug: 'spellcasting'
	},

	logos: {
		simple: {
			href: '/icons/white/game/spell.svg',
			alt: 'A stylized spell icon representing spellcasting rules.'
		}
	},

	baseUrl: '/rules/spellcasting',

	cantrips,
	concentration,
	spellLevels,
	spells
} as const;

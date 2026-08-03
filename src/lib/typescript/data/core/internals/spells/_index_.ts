const spellIcon = {
	href: '/icons/white/game/spell.svg',
	alt: 'A stylized spell icon.'
} as const;

function createSpellLevelReference(normal: string, slug: string) {
	return {
		name: {
			normal,
			slug
		},

		logos: {
			simple: spellIcon
		}
	} as const;
}

export const spells = {
	name: {
		normal: 'Spells',
		singular: 'Spell',
		slug: 'spells'
	},

	logos: {
		simple: spellIcon
	},

	baseUrl: '/spells',

	spellcasting: createSpellLevelReference('Spellcasting', 'spellcasting'),
	cantrips: createSpellLevelReference('Cantrips', 'cantrips'),
	spellLevels: {
		firstLevel: createSpellLevelReference('1st-Level Spells', '1st-level'),
		secondLevel: createSpellLevelReference('2nd-Level Spells', '2nd-level'),
		thirdLevel: createSpellLevelReference('3rd-Level Spells', '3rd-level'),
		fourthLevel: createSpellLevelReference('4th-Level Spells', '4th-level'),
		fifthLevel: createSpellLevelReference('5th-Level Spells', '5th-level'),
		sixthLevel: createSpellLevelReference('6th-Level Spells', '6th-level'),
		seventhLevel: createSpellLevelReference('7th-Level Spells', '7th-level'),
		eighthLevel: createSpellLevelReference('8th-Level Spells', '8th-level'),
		ninthLevel: createSpellLevelReference('9th-Level Spells', '9th-level')
	}
} as const;

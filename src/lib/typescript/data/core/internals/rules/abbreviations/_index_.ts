function createAbbreviationReference(
	normal: string,
	slug: string,
	expanded: string
) {
	return {
		name: {
			normal,
			slug
		},

		expanded,

		logos: {
			simple: {
				href: '/icons/white/util/bubble.svg',
				alt: `A stylized speech bubble icon representing the ${normal} abbreviation.`
			}
		}
	} as const;
}

export const abbreviations = {
	name: {
		normal: 'Abbreviations',
		singular: 'Abbreviation',
		slug: 'abbreviations'
	},

	logos: {
		simple: {
			href: '/icons/white/util/bubble.svg',
			alt: 'A stylized speech bubble icon representing shortened rule terms.'
		}
	},

	baseUrl: '/rules/abbreviations',

	asi: createAbbreviationReference('ASI', 'asi', 'Ability Score Improvement'),
	ac: createAbbreviationReference('AC', 'ac', 'Armor Class'),
	dc: createAbbreviationReference('DC', 'dc', 'Difficulty Class'),
	pb: createAbbreviationReference('PB', 'pb', 'Proficiency Bonus'),
	hp: createAbbreviationReference('HP', 'hp', 'Hit Points'),
	thp: createAbbreviationReference('THP', 'thp', 'Temporary Hit Points')
} as const;

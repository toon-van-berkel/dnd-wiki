import { strength } from './strength';
import { dexterity } from './dexterity';
import { constitution } from './constitution';
import { intelligence } from './intelligence';
import { wisdom } from './wisdom';
import { charisma } from './charisma';

export const abilityScores = {
	name: {
		normal: 'Ability Scores',
		singular: 'Ability Score',
		slug: 'ability-scores'
	},

	logos: {
		simple: {
			href: '/icons/white/attribute/skillcheck.svg',
			alt: `A stylized question mark inside a cogwheel representing an
				ability or skill check with an uncertain outcome.`
		}
	},

	baseUrl: '/rules/ability-scores',

	strength,
	dexterity,
	constitution,
	intelligence,
	wisdom,
	charisma
} as const;
import * as core from '../../../core/_index_';

import { strength } from './strength';
import { dexterity } from './dexterity';
import { constitution } from './constitution';
import { intelligence } from './intelligence';
import { wisdom } from './wisdom';
import { charisma } from './charisma';

const current = core.internals.rules.abilityScores;

export const abilityScores = {
	page: {
		href: current.baseUrl,
		external: false,

		img: current.logos.simple,

		title: `D&D Portal - ${current.name.normal}`,
		subTitle: 'Core character attributes',
		description: `Learn how the six ability scores describe a character's
			physical and mental capabilities.`
	},

	strength,
	dexterity,
	constitution,
	intelligence,
	wisdom,
	charisma
} as const;
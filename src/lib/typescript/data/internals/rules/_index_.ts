import * as core from '../../core/_index_';

import { abilityScores } from './ability-scores/_index_';
import { characterCreation } from './character-creation/_index_';

const current = core.internals.rules;

export const rules = {
	page: {
		href: current.baseUrl,
		external: false,

		img: current.logos.simple,

		title: `D&D Portal - ${current.name.normal}`,
		subTitle: 'Gameplay rules',
		description: `Browse general rules, combat mechanics, character
			rules, campaign rulings, and other gameplay information.`
	},

	abilityScores,
	characterCreation
} as const;
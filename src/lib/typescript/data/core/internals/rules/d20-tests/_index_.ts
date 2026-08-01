import { abilityCheck } from './ability-check';
import { difficultyClass } from './difficulty-class';
import { savingThrow } from './saving-throw';

export const d20Tests = {
	name: {
		normal: 'D20 Tests',
		slug: 'd20-tests'
	},

	logos: {
		simple: {
			href: '/icons/white/dice/d20.svg',
			alt: 'A stylized d20 icon representing d20 tests.'
		}
	},

	baseUrl: '/rules/d20-tests',

	abilityCheck,
	difficultyClass,
	savingThrow
} as const;

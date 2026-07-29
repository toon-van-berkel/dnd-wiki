import { movement } from './movement';
import { abilityScores } from './ability-scores/_index_';
import { characterCreation } from './character-creation/_index_';

export const rules = {
	name: {
		normal: 'Rules',
		singular: 'Rule',
		slug: 'rules'
	},

	logos: {
		simple: {
			href: '/icons/white/game/source-book.svg',
			alt: `A stylized sourcebook icon featuring the Dungeons & Dragons
				ampersand emblem on the cover.`
		}
	},

	baseUrl: '/rules',

	movement,
	abilityScores,
	characterCreation
} as const;
import { movement } from './movement';
import { abbreviations } from './abbreviations/_index_';
import { actions } from './actions/_index_';
import { abilityScores } from './ability-scores/_index_';
import { characterCreation } from './character-creation/_index_';
import { combat } from './combat/_index_';
import { conditions } from './conditions/_index_';
import { d20Tests } from './d20-tests/_index_';
import { damageTypes } from './damage-types/_index_';
import { equipment } from './equipment';
import { rests } from './rests/_index_';
import { skills } from './skills';
import { spellcasting } from './spellcasting/_index_';

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

	abbreviations,
	movement,
	actions,
	abilityScores,
	characterCreation,
	combat,
	conditions,
	d20Tests,
	damageTypes,
	rests,
	skills,
	spellcasting,
	equipment
} as const;

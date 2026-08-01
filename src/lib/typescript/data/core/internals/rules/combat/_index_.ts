import { armorClass } from './armor-class';
import { attackRoll } from './attack-roll';
import { criticalHit } from './critical-hit';
import { damageRoll } from './damage-roll';
import { hitPoints } from './hit-points';
import { initiativeRoll } from './initiative-roll';
import { meleeAttack } from './melee-attack';
import { meleeWeaponAttack } from './melee-weapon-attack';

export const combat = {
	name: {
		normal: 'Combat',
		slug: 'combat'
	},

	logos: {
		simple: {
			href: '/icons/white/game/combat.svg',
			alt: 'A stylized crossed-weapons icon representing combat rules.'
		}
	},

	baseUrl: '/rules/combat',

	armorClass,
	attackRoll,
	criticalHit,
	damageRoll,
	hitPoints,
	initiativeRoll,
	meleeAttack,
	meleeWeaponAttack
} as const;

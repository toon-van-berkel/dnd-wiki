import { acid } from './acid';
import { bludgeoning } from './bludgeoning';
import { cold } from './cold';
import { fire } from './fire';
import { force } from './force';
import { lightning } from './lightning';
import { necrotic } from './necrotic';
import { piercing } from './piercing';
import { poison } from './poison';
import { psychic } from './psychic';
import { radiant } from './radiant';
import { slashing } from './slashing';
import { thunder } from './thunder';

export const damageTypes = {
	name: {
		normal: 'Damage Types',
		singular: 'Damage Type',
		slug: 'damage-types'
	},

	logos: {
		simple: {
			href: '/icons/white/damage/slashing.svg',
			alt: 'A stylized damage icon representing damage types.'
		}
	},

	baseUrl: '/rules/damage-types',

	acid,
	bludgeoning,
	cold,
	fire,
	force,
	lightning,
	necrotic,
	piercing,
	poison,
	psychic,
	radiant,
	slashing,
	thunder
} as const;

import { longRest } from './long-rest';
import { shortRest } from './short-rest';

export const rests = {
	name: {
		normal: 'Rests',
		singular: 'Rest',
		slug: 'rests'
	},

	logos: {
		simple: {
			href: '/icons/white/game/rest.svg',
			alt: 'A stylized rest icon representing resting rules.'
		}
	},

	baseUrl: '/rules/rests',

	longRest,
	shortRest
} as const;

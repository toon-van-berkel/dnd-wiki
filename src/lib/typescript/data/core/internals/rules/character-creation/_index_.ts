import { multiclassing } from './multiclassing';

export const characterCreation = {
	name: {
		normal: 'Character Creation',
		slug: 'character-creation'
	},

	logos: {
		simple: {
			href: '/icons/white/game/character.svg',
			alt: `A stylized character profile icon showing a humanoid
				silhouette inside a circular frame.`
		}
	},

	baseUrl: '/rules/character-creation',

	multiclassing
} as const;
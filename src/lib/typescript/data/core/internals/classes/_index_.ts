import { barbarian } from "./barbarian"
import { artificer } from "./artificer"

export const classes = {
	name: {
		normal: 'Classes',
		singular: 'Class',
		slug: 'classes'
	},

    logos: {
        simple: {
            href: '/icons/white/game/character.svg',
            alt: `A stylized character profile icon showing a humanoid silhouette
                inside a circular frame.`
        }
    },
    
	baseUrl: '/classes',

    barbarian, artificer
}
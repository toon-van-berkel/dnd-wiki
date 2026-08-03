import { blinded } from './blinded';
import { deafened } from './deafened';
import { incapacitated } from './incapacitated';
import { unconscious } from './unconscious';

function createConditionReference(name: string, slug: string) {
	return {
		name: {
			normal: name,
			slug
		},

		logos: {
			simple: {
				href: `/icons/white/condition/${slug}.svg`,
				alt: `A stylized condition icon representing ${name.toLowerCase()}.`
			}
		}
	} as const;
}

const charmed = createConditionReference('Charmed', 'charmed');
const exhaustion = createConditionReference('Exhaustion', 'exhaustion');
const frightened = createConditionReference('Frightened', 'frightened');
const grappled = createConditionReference('Grappled', 'grappled');
const invisible = createConditionReference('Invisible', 'invisible');
const paralyzed = createConditionReference('Paralyzed', 'paralyzed');
const petrified = createConditionReference('Petrified', 'petrified');
const poisoned = createConditionReference('Poisoned', 'poisoned');
const prone = createConditionReference('Prone', 'prone');
const restrained = createConditionReference('Restrained', 'restrained');
const stunned = createConditionReference('Stunned', 'stunned');

export const conditions = {
	name: {
		normal: 'Conditions',
		singular: 'Condition',
		slug: 'conditions'
	},

	logos: {
		simple: {
			href: '/icons/white/condition/incapacitated.svg',
			alt: 'A stylized condition icon representing a status effect.'
		}
	},

	baseUrl: '/rules/conditions',

	blinded,
	charmed,
	deafened,
	exhaustion,
	frightened,
	grappled,
	incapacitated,
	invisible,
	paralyzed,
	petrified,
	poisoned,
	prone,
	restrained,
	stunned,
	unconscious
} as const;

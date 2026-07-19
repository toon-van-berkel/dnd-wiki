import type { ShinobiTechnique } from './types';

export const shinobiTechniques = [
	{
		id: 'body-flicker-technique',
		name: 'Body Flicker Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You move with supernatural speed to an unoccupied space you can see within 15 feet.' },
			{ kind: 'paragraph', text: 'This movement:' },
			{ kind: 'list', items: ['Does not provoke opportunity attacks.', 'Does not count against your normal movement.', 'Cannot move you through solid objects.'] }
		],
		augment: [
			{ kind: 'paragraph', text: 'For every additional Chakra Point you expend, the distance increases by 10 feet. You can increase the distance by no more than 30 feet in this way.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'chakra-guard',
		name: 'Chakra Guard',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Reaction, which you take when an attack hits you',
		range: 'Self',
		duration: 'Until the start of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You concentrate chakra at the point where the attack is about to strike.' },
			{ kind: 'paragraph', text: 'Add your proficiency bonus to your Armor Class against the triggering attack, potentially causing it to miss.' },
			{ kind: 'paragraph', text: 'Until the start of your next turn, you also have advantage on ability checks and saving throws made to resist being grappled, shoved or forcibly moved.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'chakra-strike',
		name: 'Chakra Strike',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'When you hit with a weapon attack or unarmed strike',
		range: 'The range of the triggering attack',
		duration: 'Instantaneous',
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You reinforce your attack with a sudden burst of chakra.' },
			{ kind: 'paragraph', text: 'The attack deals an additional 1d6 force damage. Choose one of the following effects:' },
			{ kind: 'list', items: ['Push the target up to 5 feet away from you.', 'The target cannot take reactions until the start of its next turn.', 'You immediately move up to 5 feet without provoking opportunity attacks.'] },
			{ kind: 'paragraph', text: 'The additional damage increases to 2d6 when you reach 11th level in the Shinobi class.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'clone-technique',
		name: 'Clone Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Concentration, up to 1 minute',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You create an illusory duplicate of yourself. The clone appears in your space and moves with you.' },
			{ kind: 'paragraph', text: 'While the clone exists:' },
			{ kind: 'list', items: ['You have advantage on the first Deception or Performance check you make to mislead a creature about your identity or location.', 'The first attack roll made against you has disadvantage.'] },
			{ kind: 'paragraph', text: 'After an attack is made against you, whether it hits or misses, the clone disappears.' },
			{ kind: 'paragraph', text: 'A creature can use its action to examine the clone and make an Intelligence (Investigation) check against your Technique Save DC. On a success, the creature recognizes the clone as an illusion.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'escape-artist-technique',
		name: 'Escape Artist Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You manipulate your joints and chakra flow to escape from restraints.' },
			{ kind: 'paragraph', text: 'You immediately end one of the following conditions on yourself:' },
			{ kind: 'list', items: ['Grappled', 'Restrained by a nonmagical object, rope, chain or net'] },
			{ kind: 'paragraph', text: 'When the Restrained condition originates from a creature or magical effect, you instead immediately repeat the relevant saving throw or escape check with advantage.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'first-aid-technique',
		name: 'First Aid Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Action',
		range: 'Touch',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You stabilize and restore a living creature by carefully controlling its chakra flow.' },
			{ kind: 'paragraph', text: 'The target regains hit points equal to 1d6 + your Wisdom modifier.' },
			{ kind: 'paragraph', text: 'A creature can regain hit points from your First Aid Technique only once per short or long rest.' },
			{ kind: 'paragraph', text: 'This technique has no effect on Constructs or Undead.' }
		],
		augment: [
			{ kind: 'paragraph', text: 'For every additional Chakra Point you expend, the healing increases by 1d6. You cannot expend more additional Chakra Points than your proficiency bonus.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'hidden-weapon-technique',
		name: 'Hidden Weapon Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: '1 hour',
		description: [
			{ kind: 'paragraph', text: 'You conceal up to two Light weapons or Shinobi tools using chakra.' },
			{ kind: 'paragraph', text: 'The concealed objects cannot be detected by ordinary visual inspection.' },
			{ kind: 'paragraph', text: 'A creature that physically searches you must succeed on an Intelligence (Investigation) check against your Technique Save DC to discover the objects.' },
			{ kind: 'paragraph', text: "During the technique's duration, you can draw one concealed object as part of an attack or object interaction." },
			{ kind: 'paragraph', text: 'The technique ends early when all concealed objects have been removed.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'shadow-shuriken-technique',
		name: 'Shadow Shuriken Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Action',
		range: '60 feet',
		duration: 'Instantaneous',
		damageType: 'piercing',
		description: [
			{ kind: 'paragraph', text: 'Make a ranged technique attack against one creature within range.' },
			{ kind: 'paragraph', text: 'On a hit, the projectile deals 2d6 piercing damage.' },
			{ kind: 'paragraph', text: 'When another creature is within 5 feet of the target, you can cause the projectile to approach from an unexpected angle. The target gains no benefit from half cover against this attack.' },
			{ kind: 'paragraph', text: 'The damage increases at higher Shinobi levels:' },
			{ kind: 'list', items: ['3d6 at 5th level', '4d6 at 11th level', '5d6 at 17th level'] },
			{ kind: 'paragraph', text: 'Because this technique requires your action, it does not benefit from Extra Attack.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'smoke-veil-technique',
		name: 'Smoke Veil Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Action',
		range: '30 feet',
		duration: 'Until the start of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You create a cloud of smoke in a 10-foot-radius sphere centered on a point you can see within range.' },
			{ kind: 'paragraph', text: 'The area is heavily obscured.' },
			{ kind: 'paragraph', text: 'A wind of at least 10 miles per hour disperses the smoke immediately.' },
			{ kind: 'paragraph', text: 'When you activate this technique, you can immediately take the Hide action as part of the same action.' }
		],
		augment: [
			{ kind: 'paragraph', text: 'You can expend 1 additional Chakra Point to maintain the smoke for up to 1 minute. When you do so, the technique requires concentration.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'substitution-technique',
		name: 'Substitution Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Reaction, which you take when you take damage from an attack',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'At the last possible moment, you replace yourself with a nearby object, illusion or remnant of chakra.' },
			{ kind: 'paragraph', text: 'Reduce the triggering damage by 1d8 + your Wisdom modifier.' },
			{ kind: 'paragraph', text: 'You can then move up to 10 feet to an unoccupied space you can see. This movement does not provoke opportunity attacks.' },
			{ kind: 'paragraph', text: 'When this technique reduces the damage to 0, you leave behind a convincing replacement object in your original space.' },
			{ kind: 'paragraph', text: 'The damage reduction increases at higher Shinobi levels:' },
			{ kind: 'list', items: ['2d8 + your Wisdom modifier at 5th level', '3d8 + your Wisdom modifier at 11th level', '4d8 + your Wisdom modifier at 17th level'] }
		],
		source: 'Shinobi'
	},
	{
		id: 'surface-walking-technique',
		name: 'Surface Walking Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: '10 minutes',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You concentrate chakra beneath your feet.' },
			{ kind: 'paragraph', text: 'For the duration:' },
			{ kind: 'list', items: ['You gain a climbing speed equal to your walking speed.', 'You can move across vertical surfaces while keeping your hands free.', 'You can move across liquids as though they were solid ground.'] },
			{ kind: 'paragraph', text: 'The technique requires concentration while you end your turn on a vertical surface, upside down or on a liquid surface.' },
			{ kind: 'paragraph', text: 'When you reach 9th level in the Shinobi class and gain Chakra Movement, you can immediately replace this technique with another Rank I technique for which you meet the requirements.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'transformation-technique',
		name: 'Transformation Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Action',
		range: 'Self',
		duration: 'Concentration, up to 1 hour',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You transform your physical appearance, clothing and voice.' },
			{ kind: 'paragraph', text: 'You can appear up to 1 foot taller or shorter and can alter your build, facial features, hair, clothing and voice. Your creature size does not change.' },
			{ kind: 'paragraph', text: 'The transformation feels mostly real when touched, but it does not grant:' },
			{ kind: 'list', items: ['Natural weapons', 'Additional limbs', 'New movement speeds', 'New senses', 'Functional anatomical abilities'] },
			{ kind: 'paragraph', text: 'A creature that carefully examines you can make an Intelligence (Investigation) check against your Technique Save DC. On a success, it recognizes the transformation as a chakra-based disguise.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'wire-snare-technique',
		name: 'Wire Snare Technique',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Action',
		range: '30 feet',
		duration: 'Until the end of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You throw chakra-reinforced wires around one creature of Large size or smaller within range.' },
			{ kind: 'paragraph', text: 'The target must make a Dexterity saving throw.' },
			{ kind: 'paragraph', text: 'On a failed save:' },
			{ kind: 'list', items: ['The target is Restrained.', 'You can pull the target up to 10 feet toward you, provided it is no more than one size larger than you.'] },
			{ kind: 'paragraph', text: 'The target can use its action to make a Strength check against your Technique Save DC, ending the effect on a success.' },
			{ kind: 'paragraph', text: 'The wires have:' },
			{ kind: 'list', items: ['Armor Class 12', 'Hit points equal to twice your Shinobi level', 'Immunity to poison damage', 'Immunity to psychic damage'] },
			{ kind: 'paragraph', text: 'The technique ends when the wires are destroyed or the target escapes.' }
		],
		source: 'Shinobi'
	},
	{
		id: 'chakra-pulse',
		name: 'Chakra Pulse',
		rank: 'I',
		category: 'Universal',
		chakraCost: '1',
		activation: 'Action',
		range: 'Self, 10-foot cone',
		duration: 'Instantaneous',
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You release a short blast of raw chakra.' },
			{ kind: 'paragraph', text: 'Each creature in the cone must make a Dexterity saving throw.' },
			{ kind: 'paragraph', text: 'A creature takes 2d6 force damage on a failed save, or half as much damage on a successful one.' },
			{ kind: 'paragraph', text: 'A creature that fails the saving throw is also pushed 5 feet away from you.' },
			{ kind: 'paragraph', text: 'The damage increases at higher Shinobi levels:' },
			{ kind: 'list', items: ['3d6 at 5th level', '4d6 at 11th level', '5d6 at 17th level'] }
		],
		source: 'Shinobi'
	}
] satisfies ShinobiTechnique[];

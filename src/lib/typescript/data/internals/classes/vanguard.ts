import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const vanguard = createBasicClass({
	name: 'Vanguard',
	slug: 'vanguard',
	role: 'Defensive frontliner',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(' or '),
		link('internals.rules.abilityScores.constitution', 'Constitution')
	],
	hitDie: 'd10',
	armor: [text('Light armor, medium armor, heavy armor, and shields')],
	weapons: [text('Simple weapons and martial weapons')],
	tools: [text('None')],
	savingThrows: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(', '),
		link('internals.rules.abilityScores.constitution', 'Constitution')
	],
	skills: [text('Choose athletics, perception, intimidation, insight, or survival skills.')],
	description: 'A durable protector who controls space, absorbs pressure, and keeps enemies away from allies.',
	longDescription: [
		[
			text(
				'Vanguards are built around being first into danger and hardest to move once the fight begins.'
			)
		],
		[
			text(
				'The class focuses on protection, armor, enemy control, and positioning tools that make it costly to ignore the front line.'
			)
		],
		[
			text(
				'In play, a Vanguard protects fragile allies by occupying space, punishing movement, and surviving attacks meant to break the party formation.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Guarding Stance',
			description: [text('Hold a defensive posture that makes nearby space harder for enemies to exploit.')]
		},
		{
			level: 2,
			title: 'Interpose',
			description: [
				text('Use your presence or '),
				link('internals.rules.actions.reaction', 'reaction'),
				text(' to reduce pressure on a nearby ally.')
			]
		},
		{
			level: 3,
			title: 'Vanguard Doctrine',
			description: [text('Choose the defensive doctrine that defines your later class features.')]
		},
		{
			level: 5,
			title: 'Extra Attack',
			description: [
				text('Attack twice when you take the '),
				link('internals.rules.actions.attackAction', 'Attack action'),
				text('.')
			]
		}
	],
	tags: ['tank', 'defense', 'frontline', 'martial'],
	hasImages: false
});


import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const illrigger = createBasicClass({
	name: 'Illrigger',
	slug: 'illrigger',
	role: 'Infernal knight',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(' or '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	hitDie: 'd10',
	armor: [text('Light armor, medium armor, heavy armor, and shields')],
	weapons: [text('Simple weapons and martial weapons')],
	tools: [text('None')],
	savingThrows: [
		link('internals.rules.abilityScores.constitution', 'Constitution'),
		text(', '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	skills: [text('Choose martial, infernal, social, or intimidation skills.')],
	description: 'An infernal martial class that binds seals, punishment, and hellish authority into weapon combat.',
	longDescription: [
		[
			text(
				'Illriggers are oath-bound agents of infernal powers, fighting with discipline, cruelty, and supernatural contracts.'
			)
		],
		[
			text(
				'The class combines martial presence with magical seals and punishing effects that make enemies pay for every mistake.'
			)
		],
		[
			text(
				'At the table, an Illrigger feels like a dark commander or executioner: armored, calculating, and built around pressure.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Infernal Conduit',
			description: [text('Channel hellish power through weapon strikes, marks, or class resources.')]
		},
		{
			level: 2,
			title: 'Baleful Interdict',
			description: [text('Mark enemies with infernal power and punish them when the mark is consumed.')]
		},
		{
			level: 3,
			title: 'Diabolic Contract',
			description: [text('Choose the infernal order or contract that shapes your later features.')]
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
	tags: ['infernal', 'martial', 'frontline', 'charisma']
});


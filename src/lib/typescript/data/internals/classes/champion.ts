import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const champion = createBasicClass({
	name: 'Champion',
	slug: 'champion',
	role: 'Heroic martial combatant',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(' or '),
		link('internals.rules.abilityScores.dexterity', 'Dexterity')
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
	skills: [text('Choose physical, athletic, perceptive, or heroic presence skills.')],
	description: 'A direct martial hero focused on reliable attacks, physical excellence, and decisive combat moments.',
	longDescription: [
		[
			text(
				'Champions represent the cleanest martial fantasy: trained bodies, sharp instincts, and the ability to turn a fight through decisive action.'
			)
		],
		[
			text(
				'The class favors clear combat turns, strong fundamentals, and features that improve weapon pressure without requiring heavy rules overhead.'
			)
		],
		[
			text(
				'At the table, a Champion is easy to read but still impactful, standing in the front line and making every improved strike matter.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Fighting Style',
			description: [text('Choose a martial fighting approach that improves your preferred weapons or defenses.')]
		},
		{
			level: 2,
			title: 'Heroic Surge',
			description: [text('Push beyond normal limits for a brief burst of action or endurance.')]
		},
		{
			level: 3,
			title: 'Champion Calling',
			description: [text('Choose the heroic ideal that shapes your later class features.')]
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
	tags: ['martial', 'weapon', 'frontline', 'hero']
});


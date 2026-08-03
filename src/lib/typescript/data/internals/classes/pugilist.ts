import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const pugilist = createBasicClass({
	name: 'Pugilist',
	slug: 'pugilist',
	role: 'Unarmed bruiser',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(' or '),
		link('internals.rules.abilityScores.constitution', 'Constitution')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons, improvised weapons, and unarmed strikes')],
	tools: [text('One gaming set or artisan tool')],
	savingThrows: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(', '),
		link('internals.rules.abilityScores.constitution', 'Constitution')
	],
	skills: [text('Choose brawling, intimidation, streetwise, or survival skills.')],
	description: 'A bare-knuckle martial class that turns grit, dirty fighting, and close pressure into survival.',
	longDescription: [
		[
			text(
				'Pugilists fight with fists, elbows, improvised weapons, and stubborn refusal to stay down.'
			)
		],
		[
			text(
				'The class emphasizes close-range pressure, scrappy resilience, and spending limited grit-like resources at the right moment.'
			)
		],
		[
			text(
				'At the table, a Pugilist is direct and physical, thriving in messy fights where positioning and endurance matter.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Fisticuffs',
			description: [text('Improve unarmed strikes and make close-range brawling a reliable combat style.')]
		},
		{
			level: 2,
			title: 'Moxie',
			description: [text('Spend personal grit to fuel stronger attacks, movement, or defensive tricks.')]
		},
		{
			level: 3,
			title: 'Fight Club',
			description: [text('Choose the brawling tradition that defines your later features.')]
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
	tags: ['unarmed', 'martial', 'grit', 'melee']
});


import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const captain = createBasicClass({
	name: 'Captain',
	slug: 'captain',
	role: 'Tactical leader',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.charisma', 'Charisma'),
		text(' or '),
		link('internals.rules.abilityScores.intelligence', 'Intelligence')
	],
	hitDie: 'd8',
	armor: [text('Light armor, medium armor, and shields')],
	weapons: [text('Simple weapons and martial weapons')],
	tools: [text('One gaming set or artisan tool')],
	savingThrows: [
		link('internals.rules.abilityScores.charisma', 'Charisma'),
		text(', '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	skills: [text('Choose leadership, social, and battlefield-awareness skills that fit the campaign.')],
	description: 'A battlefield commander who turns positioning, orders, and morale into party-wide tactical pressure.',
	longDescription: [
		[
			text(
				'Captains are martial leaders who win encounters by directing allies, controlling tempo, and making the party act like a coordinated unit.'
			)
		],
		[
			text(
				'The class works best when the table wants a character whose main impact is not only personal damage, but also movement, commands, reactions, and resource timing.'
			)
		],
		[
			text(
				'In play, a Captain watches the battlefield, calls openings, reinforces wavering allies, and turns ordinary attacks into planned maneuvers.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Commanding Presence',
			description: [
				text('Use your authority and battlefield read to support allies during social scenes and tactical encounters.')
			]
		},
		{
			level: 2,
			title: 'Tactical Orders',
			description: [
				text('Issue orders that help allies reposition, strike, defend, or recover momentum during combat.')
			]
		},
		{
			level: 3,
			title: 'Command Style',
			description: [
				text('Choose the command tradition that defines how your leadership changes the party.')
			]
		},
		{
			level: 5,
			title: 'Coordinated Assault',
			description: [
				text('Turn a clear opening into stronger follow-up from nearby allies.')
			]
		}
	],
	tags: ['leader', 'support', 'martial', 'tactics']
});


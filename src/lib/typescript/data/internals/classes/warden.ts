import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const warden = createBasicClass({
	name: 'Warden',
	slug: 'warden',
	role: 'Primal defender',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(' or '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	hitDie: 'd10',
	armor: [text('Light armor, medium armor, and shields')],
	weapons: [text('Simple weapons and martial weapons')],
	tools: [text('Herbalism kit or one nature-focused tool')],
	savingThrows: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(', '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	skills: [text('Choose nature, survival, athletics, perception, animal handling, or insight skills.')],
	description: 'A primal protector who draws on nature, endurance, and battlefield control to defend allies.',
	longDescription: [
		[
			text(
				'Wardens stand between civilization and the wild, using primal endurance to hold ground against threats that should be overwhelming.'
			)
		],
		[
			text(
				'The class mixes martial durability with nature-themed control, making terrain, positioning, and protection central to its identity.'
			)
		],
		[
			text(
				'At the table, a Warden anchors the party in dangerous environments and makes it harder for enemies to reach anyone behind them.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Warden Bond',
			description: [text('Bind yourself to a primal duty that shapes your defense and nature-focused features.')]
		},
		{
			level: 2,
			title: 'Primal Guard',
			description: [text('Use primal force to protect nearby allies and hold contested ground.')]
		},
		{
			level: 3,
			title: 'Warden Circle',
			description: [text('Choose the primal circle or guardian tradition that defines your later features.')]
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
	tags: ['primal', 'defense', 'nature', 'martial']
});


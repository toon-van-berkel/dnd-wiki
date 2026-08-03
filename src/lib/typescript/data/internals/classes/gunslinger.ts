import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const gunslinger = createBasicClass({
	name: 'Gunslinger',
	slug: 'gunslinger',
	role: 'Firearm specialist',
	source: 'D&D Portal live content',
	primaryAbility: [link('internals.rules.abilityScores.dexterity', 'Dexterity')],
	hitDie: 'd10',
	armor: [text('Light armor and medium armor')],
	weapons: [text('Simple weapons, martial weapons, and firearms where allowed')],
	tools: [text('Tinker tools or firearm maintenance tools')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.intelligence', 'Intelligence')
	],
	skills: [text('Choose precision, perception, crafting, or intimidation skills.')],
	description: 'A precision combatant who uses firearms, grit, and risky shots to control fights from range.',
	longDescription: [
		[
			text(
				'Gunslingers bring firearms into the adventuring party as volatile, high-impact weapons that reward accuracy and positioning.'
			)
		],
		[
			text(
				'The class is built around measured shots, weapon upkeep, and deciding when a risky trick shot is worth the possible drawback.'
			)
		],
		[
			text(
				'In play, a Gunslinger watches sight lines, spends limited resources carefully, and turns a clean hit into control, damage, or disruption.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Firearm Training',
			description: [text('Gain the proficiencies and maintenance knowledge needed to use firearms reliably.')]
		},
		{
			level: 2,
			title: 'Grit',
			description: [text('Spend a limited resource to fuel special shots and regain momentum through decisive play.')]
		},
		{
			level: 3,
			title: 'Gunslinger Trail',
			description: [text('Choose the firearm tradition that defines your shot options and combat role.')]
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
	tags: ['firearms', 'ranged', 'martial', 'precision']
});


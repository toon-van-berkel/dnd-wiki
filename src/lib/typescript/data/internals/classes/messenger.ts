import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const messenger = createBasicClass({
	name: 'Messenger',
	slug: 'messenger',
	role: 'Mobile envoy',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' or '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons and finesse weapons')],
	tools: [text('One vehicle, language, or social tool suited to travel')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	skills: [text('Choose travel, social, stealth, and perception skills.')],
	description: 'A fast-moving envoy who survives by speed, information, route knowledge, and sharp negotiation.',
	longDescription: [
		[
			text(
				'Messengers are specialists in reaching places others cannot, carrying information through danger, and staying alive on hostile roads.'
			)
		],
		[
			text(
				'The class leans into mobility, contacts, observation, and practical problem solving rather than standing still in a fair fight.'
			)
		],
		[
			text(
				'In a party, a Messenger is a scout, face, courier, and escape planner who turns distance and information into advantage.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Courier Training',
			description: [text('Gain the travel instincts and practical skills needed to move safely between dangerous places.')]
		},
		{
			level: 2,
			title: 'Swift Route',
			description: [
				text('Improve your '),
				link('internals.rules.movement.speed', 'speed'),
				text(' and use movement to avoid being trapped.')
			]
		},
		{
			level: 3,
			title: 'Messenger Calling',
			description: [text('Choose the delivery style, network, or route tradition that defines your work.')]
		}
	],
	tags: ['mobility', 'social', 'exploration', 'dexterity']
});


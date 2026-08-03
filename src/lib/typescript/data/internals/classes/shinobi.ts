import {
	createBasicClass,
	link,
	text
} from './_basic-class';
import { createInternalPage } from '../_helpers_';

const shinobiClass = createBasicClass({
	name: 'Shinobi',
	slug: 'shinobi',
	role: 'Chakra ninja',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' or '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons, finesse weapons, thrown weapons, and shinobi tools where allowed')],
	tools: [text('Shinobi tools, disguise kit, or one artisan tool')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	skills: [text('Choose stealth, mobility, perception, deception, or chakra-focused skills.')],
	description: 'A chakra-based infiltrator who combines movement, stealth, techniques, and specialized ninja paths.',
	longDescription: [
		[
			text(
				'Shinobi rely on speed, discipline, deception, and chakra techniques to shape the battlefield before enemies can respond.'
			)
		],
		[
			text(
				'The class is built for mobile combat, infiltration, quick repositioning, and supernatural technique use without feeling like a normal spellcaster.'
			)
		],
		[
			text(
				'At the table, a Shinobi scouts, strikes, escapes, and supports allies through a path that defines their personal training.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Chakra Techniques',
			description: [text('Learn techniques that spend chakra to create movement, stealth, defense, or attack effects.')]
		},
		{
			level: 2,
			title: 'Shinobi Movement',
			description: [
				text('Use training and chakra control to improve mobility, repositioning, and practical '),
				link('internals.rules.movement.speed', 'speed'),
				text('.')
			]
		},
		{
			level: 3,
			title: 'Shinobi Path',
			description: [text('Choose a path such as elemental ninjutsu, genjutsu, sealing, taijutsu, bloodline, fortune, or medical training.')]
		}
	],
	tags: ['chakra', 'stealth', 'mobility', 'techniques']
});

const imageBaseUrl = '/images/classes/shinobi';
const images = {
	card: {
		female: {
			alt: 'A female Shinobi path portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-female-s.webp`,
				m: `${imageBaseUrl}/card-female-m.webp`,
				l: `${imageBaseUrl}/card-female-l.webp`
			}
		},
		male: {
			alt: 'A male Shinobi path portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-male-s.webp`,
				m: `${imageBaseUrl}/card-male-m.webp`,
				l: `${imageBaseUrl}/card-male-l.webp`
			}
		}
	},
	header: {
		female: {
			alt: 'A female Shinobi path portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-female-s.webp`,
				m: `${imageBaseUrl}/card-female-m.webp`,
				l: `${imageBaseUrl}/card-female-l.webp`
			}
		},
		male: {
			alt: 'A male Shinobi path portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-male-s.webp`,
				m: `${imageBaseUrl}/card-male-m.webp`,
				l: `${imageBaseUrl}/card-male-l.webp`
			}
		}
	}
} as const;

function createShinobiPath(slug: string, name: string, description: string) {
	return createInternalPage({
		href: `/classes/shinobi/${slug}`,
		img: {
			href: '/icons/white/game/character.svg',
			alt: 'A stylized character icon representing a shinobi path.'
		},
		images,
		label: name,
		title: `D&D Portal - ${name}`,
		subTitle: 'Shinobi subclass',
		description,
		descriptions: {
			short: description,
			medium: description,
			long: [
				[text(description)],
				[text(`${name} changes how the Shinobi spends chakra and solves encounters.`)],
				[text('Use this page as the central route for the subclass while detailed feature data is expanded.')]
			]
		},
		navigation: {
			parent: 'internals.classes.shinobi.page'
		},
		tags: ['shinobi', 'subclass', slug]
	});
}

export const shinobi = {
	...shinobiClass,
	subclasses: {
		paths: createShinobiPath(
			'paths',
			'Shinobi Paths',
			'Overview page for the available Shinobi paths and their training identities.'
		),
		elementalNinjutsu: createShinobiPath(
			'path-of-elemental-ninjutsu',
			'Path of Elemental Ninjutsu',
			'Elemental chakra techniques focused on offensive and environmental control.'
		),
		fortune: createShinobiPath(
			'path-of-fortune',
			'Path of Fortune',
			'Luck, timing, and altered outcomes shaped through shinobi training.'
		),
		genjutsu: createShinobiPath(
			'path-of-genjutsu',
			'Path of Genjutsu',
			'Illusion, misdirection, and mental pressure expressed through chakra.'
		),
		sealing: createShinobiPath(
			'path-of-sealing',
			'Path of Sealing',
			'Restraining, binding, storing, and suppressing effects through sealing arts.'
		),
		taijutsu: createShinobiPath(
			'path-of-taijutsu',
			'Path of Taijutsu',
			'Close-quarters physical technique, mobility, and disciplined body control.'
		),
		bloodline: createShinobiPath(
			'path-of-the-bloodline',
			'Path of the Bloodline',
			'Inherited power that changes the Shinobi through a distinct bloodline gift.'
		),
		medical: createShinobiPath(
			'path-of-the-medical-shinobi',
			'Path of the Medical Shinobi',
			'Healing, stabilization, and precise chakra control used to keep allies alive.'
		)
	}
} as const;


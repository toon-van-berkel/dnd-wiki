import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const classes = core.internals.classes;
const current = classes.rogue;

const baseUrl = `${classes.baseUrl}/${current.name.slug}`;
const imageBaseUrl = '/images/classes/rogue';
const rogueImages = {
	female: {
		alt: 'A female Rogue keeping to shadow with blades ready.',
		caption: 'A Rogue relies on precision, timing, and a careful read of danger.',
		position: '58% center',
		sources: {
			s: `${imageBaseUrl}/card-female-s.webp`,
			m: `${imageBaseUrl}/card-female-m.webp`,
			l: `${imageBaseUrl}/card-female-l.webp`
		}
	},

	male: {
		alt: 'A male Rogue keeping to shadow with blades ready.',
		caption: 'A Rogue relies on precision, timing, and a careful read of danger.',
		position: '58% center',
		sources: {
			s: `${imageBaseUrl}/card-male-s.webp`,
			m: `${imageBaseUrl}/card-male-m.webp`,
			l: `${imageBaseUrl}/card-male-l.webp`
		}
	}
} as const;

const sections = {
	subclasses: {
		id: 'rogue-archetypes',
		title: 'Roguish Archetypes'
	}
} as const;

function createSubclassImages(slug: string, name: string) {
	return {
		female: {
			alt: `A female ${name} Rogue subclass portrait.`,
			position: 'center',
			sources: {
				s: `${imageBaseUrl}/${slug}/card-female-s.webp`,
				m: `${imageBaseUrl}/${slug}/card-female-m.webp`,
				l: `${imageBaseUrl}/${slug}/card-female-l.webp`
			}
		}
	} as const;
}

function createRogueSubclass<
	const T extends keyof typeof current.subclasses
>(key: T) {
	const subclass = current.subclasses[key];

	return createInternalPage({
		href: `${baseUrl}/${subclass.name.slug}`,

		img: current.logos.simple,

		images: {
			card: createSubclassImages(
				subclass.name.slug,
				subclass.name.normal
			)
		},

		label: subclass.name.short,
		title: `${website.name.short} - ${subclass.name.normal}`,
		subTitle: `${current.name.normal} subclass`,
		descriptions: {
			short: `${subclass.name.normal} Rogue subclass.`,
			medium: `Explore the ${subclass.name.normal} Rogue subclass.`
		},
		navigation: {
			parent: 'internals.classes.rogue.page'
		},
		tags: [
			'rogue',
			'subclass',
			subclass.name.slug
		]
	});
}

export const rogue = {
	page: createInternalPage({
		href: baseUrl,

		img: current.logos.simple,

		images: {
			card: rogueImages,
			header: rogueImages
		},

		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Skilled opportunist',
		descriptions: {
			short: `A precise adventurer built around expertise, agility,
				and decisive openings.`,
			medium: `Explore the ${current.name.normal} class and its
				available subclasses.`,
			long: [
				[
					{
						type: 'text',
						text: `Rogues win by reading the field, finding openings,
							and choosing the right moment to act.`
					}
				],
				[
					{
						type: 'text',
						text: `This page currently validates the shared class
							page components with Rogue artwork and subclass cards
							from the repository assets.`
					}
				]
			]
		},

		navigation: {
			parent: 'internals.classes.page'
		},

		tags: [
			'rogue',
			'class',
			'expertise',
			'dexterity',
			'subclasses'
		]
	}),

	subclasses: {
		arcaneTrickster: createRogueSubclass('arcaneTrickster'),
		assassin: createRogueSubclass('assassin'),
		inquisitive: createRogueSubclass('inquisitive'),
		mastermind: createRogueSubclass('mastermind'),
		phantom: createRogueSubclass('phantom'),
		scout: createRogueSubclass('scout'),
		soulknife: createRogueSubclass('soulknife'),
		swashbuckler: createRogueSubclass('swashbuckler'),
		thief: createRogueSubclass('thief')
	},

	content: {
		sections,
		tableOfContents: [
			sections.subclasses
		]
	}
} as const;

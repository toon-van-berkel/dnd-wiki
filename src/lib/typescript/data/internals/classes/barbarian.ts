import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const classes = core.internals.classes;
const current = classes.barbarian;

const baseUrl = `${classes.baseUrl}/${current.name.slug}`;
const imageBaseUrl = '/images/classes/barbarian';

export const barbarian = {
	page: createInternalPage({
		href: baseUrl,

		img: current.logos.simple,

		images: {
			card: {
				female: {
					alt: `A female Barbarian standing as a powerful primal
						warrior prepared for battle.`,
					position: '70% center',
					sources: {
						s: `${imageBaseUrl}/card-female-s.webp`,
						m: `${imageBaseUrl}/card-female-m.webp`,
						l: `${imageBaseUrl}/card-female-l.webp`
					}
				},

				male: {
					alt: `A male Barbarian standing as a powerful primal
						warrior prepared for battle.`,
					position: '70% center',
					sources: {
						s: `${imageBaseUrl}/card-male-s.webp`,
						m: `${imageBaseUrl}/card-male-m.webp`,
						l: `${imageBaseUrl}/card-male-l.webp`
					}
				}
			}
		},

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Primal warrior',
		description: `Explore the ${current.name.normal} class, its rage,
			progression, core features, abilities, and available subclasses.`,

		tags: [
			'barbarian',
			'class',
			'martial',
			'strength',
			'rage',
			'primal',
			'frontline'
		]
	}),

	subclasses: {
		berserker: createInternalPage({
			href: `${baseUrl}/${current.subclasses.berserker.name.slug}`,

			img: current.logos.simple,

			title: `${website.name.short} - ${current.subclasses.berserker.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.berserker.name.normal}
				subclass, its features, progression, and character options.`
		}),

		zealot: createInternalPage({
			href: `${baseUrl}/${current.subclasses.zealot.name.slug}`,

			img: current.logos.simple,

			title: `${website.name.short} - ${current.subclasses.zealot.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.zealot.name.normal}
				subclass, its divine fury, features, progression, and options.`
		})
	}
} as const;
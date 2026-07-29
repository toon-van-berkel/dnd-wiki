import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const classes = core.internals.classes;
const current = classes.artificer;

const baseUrl = `${classes.baseUrl}/${current.name.slug}`;

export const artificer = {
	page: {
		href: '/classes/artificer',
		external: false,

		img: {
			href: '/icons/white/classes/artificer.svg',
			alt: `A stylized Artificer emblem showing a mechanical vessel
				surrounded by a large cogwheel.`
		},

		images: {
			card: {
				female: {
					alt: `A female artificer holding a glowing mechanical
						creation inside an arcane workshop filled with tools
						and machinery.`,

					position: '70% center',

					sources: {
						s: '/images/classes/artificer/card-female-s.webp',
						m: '/images/classes/artificer/card-female-m.webp',
						l: '/images/classes/artificer/card-female-l.webp'
					}
				},

				male: {
					alt: `A male artificer working with a glowing mechanical
						creation inside an arcane workshop filled with tools
						and machinery.`,

					position: '70% center',

					sources: {
						s: '/images/classes/artificer/card-male-s.webp',
						m: '/images/classes/artificer/card-male-m.webp',
						l: '/images/classes/artificer/card-male-l.webp'
					}
				}
			}
		},

		title: 'Artificer',
		subTitle: 'Magical inventor',
		description: `A magical inventor who turns tools, crafted gear,
			and arcane techniques into flexible problem-solving.`,

		tags: [
			'arcane',
			'crafting',
			'support',
			'utility',
			'half-caster'
		]
	},

	subclasses: {
		alchemist: createInternalPage({
			href: `${baseUrl}/${current.subclasses.alchemist.name.slug}`,
		
			img: current.logos.simple,

			title: `${website.name.short} - ${current.subclasses.alchemist.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.alchemist.name.normal}
				subclass, its experimental creations, features, and progression.`
		}),

		artillerist: createInternalPage({
			href: `${baseUrl}/${current.subclasses.artillerist.name.slug}`,
		
			img: current.logos.simple,

			title: `${website.name.short} - ${current.subclasses.artillerist.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.artillerist.name.normal}
				subclass, its arcane artillery, features, and progression.`
		})
	}
} as const;
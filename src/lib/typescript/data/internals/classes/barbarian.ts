import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const classes = core.internals.classes;
const current = classes.barbarian;

const baseUrl = `${classes.baseUrl}/${current.name.slug}`;

export const barbarian = {
	page: createInternalPage({
		href: baseUrl,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Primal warrior',
		description: `Explore the ${current.name.normal} class, its rage,
			progression, core features, abilities, and available subclasses.`
	}),

	subclasses: {
		berserker: createInternalPage({
			href: `${baseUrl}/${current.subclasses.berserker.name.slug}`,

			title: `${website.name.short} - ${current.subclasses.berserker.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.berserker.name.normal}
				subclass, its features, progression, and character options.`
		}),

		zealot: createInternalPage({
			href: `${baseUrl}/${current.subclasses.zealot.name.slug}`,

			title: `${website.name.short} - ${current.subclasses.zealot.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.zealot.name.normal}
				subclass, its divine fury, features, progression, and options.`
		})
	}
} as const;
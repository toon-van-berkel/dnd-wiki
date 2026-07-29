import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const classes = core.internals.classes;
const current = classes.artificer;

const baseUrl = `${classes.baseUrl}/${current.name.slug}`;

export const artificer = {
	page: createInternalPage({
		href: baseUrl,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Magical inventor',
		description: `Explore the ${current.name.normal} class, its inventions,
			spellcasting, progression, features, and available subclasses.`
	}),

	subclasses: {
		alchemist: createInternalPage({
			href: `${baseUrl}/${current.subclasses.alchemist.name.slug}`,

			title: `${website.name.short} - ${current.subclasses.alchemist.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.alchemist.name.normal}
				subclass, its experimental creations, features, and progression.`
		}),

		artillerist: createInternalPage({
			href: `${baseUrl}/${current.subclasses.artillerist.name.slug}`,

			title: `${website.name.short} - ${current.subclasses.artillerist.name.normal}`,
			subTitle: `${current.name.normal} subclass`,
			description: `Explore the ${current.subclasses.artillerist.name.normal}
				subclass, its arcane artillery, features, and progression.`
		})
	}
} as const;
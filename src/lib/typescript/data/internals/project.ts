import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const website = core.internals.website;
const current = core.internals.project;

export const project = {
	about: createInternalPage({
		href: current.about.href,

		title: `${website.name.short} - ${current.about.name.normal}`,
		subTitle: 'About the project',
		description: `Learn about the purpose, scope, development, and
			organisation of the D&D Portal Wiki project.`
	}),

	credits: createInternalPage({
		href: current.credits.href,

		title: `${website.name.short} - ${current.credits.name.normal}`,
		subTitle: 'Creators and contributors',
		description: `View acknowledgements for the people, projects,
			artists, tools, and resources used by the D&D Portal Wiki.`
	}),

	sources: createInternalPage({
		href: current.sources.href,

		title: `${website.name.short} - ${current.sources.name.normal}`,
		subTitle: 'Referenced material',
		description: `View the books, websites, documents, and other
			resources referenced throughout the D&D Portal Wiki.`
	}),

	aiTransparency: createInternalPage({
		href: current.aiTransparency.href,

		title: `${website.name.short} - ${current.aiTransparency.name.normal}`,
		subTitle: 'Artificial intelligence usage',
		description: `Read how artificial intelligence tools are used,
			reviewed, and disclosed during development of the wiki.`
	}),

	accessibility: createInternalPage({
		href: current.accessibility.href,

		title: `${website.name.short} - ${current.accessibility.name.normal}`,
		subTitle: 'Accessible design',
		description: `Read about accessibility features, design decisions,
			current limitations, and planned improvements.`
	}),

	changelog: createInternalPage({
		href: current.changelog.href,

		title: `${website.name.short} - ${current.changelog.name.normal}`,
		subTitle: 'Project updates',
		description: `View recent additions, changes, fixes, removals,
			and other updates made to the D&D Portal Wiki.`
	})
} as const;
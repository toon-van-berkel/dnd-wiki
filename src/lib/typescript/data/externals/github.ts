import * as core from '../core/_index_';

const current = core.externals.github;

export const github = {
    profile: {
		href: `${current.baseUrl}/${current.name.user}`,
		external: true,

		img: current.logos.simple,

		title: `${current.name.normal} - Profile`,
		subTitle: current.name.display,
		description: `View ${current.name.display}'s public repositories, 
            projects, contributions, and development activity on 
            ${current.name.normal}.`
	},
    
    dndPortalWiki: {
		href: `${current.baseUrl}/${current.name.user}/${current.name.repo}`,
		external: true,

		img: current.logos.simple,

		title: `${current.name.normal} - D&D Portal Wiki`,
		subTitle: `Project repository`,
		description: `View the source code, development history, issues,
			and contributions for the D&D Portal Wiki project on GitHub.`
	},

	reportProblem: {
		href: `${current.baseUrl}/${current.name.user}/${current.name.repo}/issues/new`,
		external: true,

		img: current.logos.simple,

		title: `${current.name.normal} - Report a Problem`,
		subTitle: 'Create a new issue',
		description: `Report a technical problem, incorrect page, broken
			feature, or other issue with the D&D Portal Wiki.`
	},

	suggestContent: {
		href: `${current.baseUrl}/${current.name.user}/${current.name.repo}/issues/new?labels=content`,
		external: true,

		img: current.logos.simple,

		title: `${current.name.normal} - Suggest Content`,
		subTitle: 'Submit a content suggestion',
		description: `Suggest new pages, corrections, additions, or other
			content improvements for the D&D Portal Wiki.`
	}
}
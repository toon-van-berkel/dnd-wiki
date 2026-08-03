import * as core from '../core/_index_';

const current = core.externals.wizards;

export const wizards = {
	homepage: {
		href: `${current.baseUrl}/en`,
		external: true,

		img: current.logos.simple,

		title: current.name.normal,
		subTitle: 'Dungeons & Dragons publisher',
		description: `Visit the official ${current.name.normal} website for
			company information, brands, policies, and publications.`
	},

	fanContentPolicy: {
		href: `${current.baseUrl}/en/legal/fancontentpolicy`,
		external: true,
        
		img: current.logos.simple,

		title: `${current.name.normal} - Fan Content Policy`,
		subTitle: 'Official fan-content rules',
		description: `Read the ${current.name.normal} policy describing how
			its intellectual property may be used in fan-created content.`
	}
}
import * as core from '../core/_index_';

const current = core.externals.twdnd;

export const twdnd = {
	homepage: {
		href: current.baseUrl,
		external: true,

		img: current.logos.simple,

		title: `GitHub - ${current.name.normal} Icons`,
		subTitle: 'Fantasy icon collection',
		description: `View the ${current.name.normal} repository containing 
            reusable Dungeons & Dragons-inspired icons and related resources.`
	}
}
import * as core from '../core/_index_';

const current = core.externals.svgpro;

export const svgpro = {
	homepage: {
		href: current.baseUrl,
		external: true,

		img: current.logos.simple,

		title: current.name.normal,
		subTitle: 'Vector icon library',
		description: `Browse reusable SVG icons and illustrations available
			under their individual licensing conditions.`
	}
}
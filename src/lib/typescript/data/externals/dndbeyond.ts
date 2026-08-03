import * as core from '../core/_index_';

const current = core.externals.dndbeyond;

export const dndbeyond = {
    homepage: {
		href: current.baseUrl,
		external: true,

		img: current.logos.simple,

		title: current.name.normal,
		subTitle: 'Official digital toolset',
		description: `Visit ${current.name.normal} for official digital rules,
			character tools, sourcebooks, adventures, and resources.`
    },
	
	srd: {
		href: `${current.baseUrl}/srd`,
		external: true,

		img: current.logos.simple,

		title: `${current.name.normal} - System Reference Document`,
		subTitle: 'Official reference rules',
		description: `Read the System Reference Document containing rules
			and material available under its associated licence.`
	}
}
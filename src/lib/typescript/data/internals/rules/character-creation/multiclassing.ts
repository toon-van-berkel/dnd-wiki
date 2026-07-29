import * as core from '../../../core/_index_';

const parent = core.internals.rules.characterCreation;
const current = parent.multiclassing;

export const multiclassing = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: parent.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Combining multiple classes',
	description: `${current.name.normal} allows a character to gain levels
		in more than one class when the relevant requirements are met.`
} as const;
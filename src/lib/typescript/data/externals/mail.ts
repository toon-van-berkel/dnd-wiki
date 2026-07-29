import * as core from '../core/_index_';

const current = core.externals.mail;

export const mail = {
    main: {
        href: current.baseUrl,
		external: false,

        img: current.logos.simple,

		title: 'Email - Contact',
		subTitle: 'Toon van Berkel',
		description: `Send an email to Toon van Berkel regarding the D&D
			Portal Wiki, its content, or other related enquiries.`
    }
}
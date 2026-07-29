import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const website = core.internals.website;
const current = core.internals.legal;

export const legal = {
	notice: createInternalPage({
		href: current.notice.href,

		title: `${website.name.short} - ${current.notice.name.normal}`,
		subTitle: 'Legal information',
		description: `Read the legal notice, ownership information,
			disclaimers, and terms applying to the D&D Portal Wiki.`
	}),

	privacy: createInternalPage({
		href: current.privacy.href,

		title: `${website.name.short} - ${current.privacy.name.normal}`,
		subTitle: 'Privacy information',
		description: `Read how visitor information and personal data are
			handled, stored, protected, and used by the website.`
	}),

	cookies: createInternalPage({
		href: current.cookies.href,

		title: `${website.name.short} - ${current.cookies.name.normal}`,
		subTitle: 'Cookie information',
		description: `Read which cookies and similar technologies may be
			used by the D&D Portal Wiki and why they are required.`
	}),

	contributionTerms: createInternalPage({
		href: current.contributionTerms.href,

		title: `${website.name.short} - ${current.contributionTerms.name.normal}`,
		subTitle: 'Contributor conditions',
		description: `Read the conditions applying to submitted content,
			code, artwork, corrections, and other contributions.`
	}),

	contentRemoval: createInternalPage({
		href: current.contentRemoval.href,

		title: `${website.name.short} - ${current.contentRemoval.name.normal}`,
		subTitle: 'Removal requests',
		description: `Learn how to request the review, correction, or
			removal of content published on the D&D Portal Wiki.`
	})
} as const;
import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';
import type {
	InlineContent,
	InlineContentNode,
	PageContentBlock,
	PageContentSection
} from '$lib/typescript/pages/content-types';

const website = core.internals.website;
const current = core.internals.legal;

const text = (value: string): InlineContentNode => ({
	type: 'text',
	text: value
});

const link = (path: string, label: string): InlineContentNode => ({
	type: 'link',
	path,
	label
});

const paragraph = (content: InlineContent): PageContentBlock => ({
	type: 'paragraph',
	content
});

const textParagraph = (value: string): PageContentBlock =>
	paragraph([text(value)]);

const list = (items: readonly string[]): PageContentBlock => ({
	type: 'list',
	items: items.map((item) => [text(item)])
});

const content = (sections: readonly PageContentSection[]) => ({
	sections,
	tableOfContents: sections.map((section) => ({
		id: section.id,
		title: section.title
	}))
});

export const legal = {
	notice: createInternalPage({
		href: current.notice.href,

		title: `${website.name.short} - ${current.notice.name.normal}`,
		subTitle: 'Legal information',
		description: `Read the legal notice, ownership information,
			disclaimers, and terms applying to the D&D Portal Wiki.`,
		descriptions: {
			long: [
				[
					text(
						'This legal notice explains the conditions under which D&D Portal and its content are made available.'
					)
				],
				[
					text(
						'D&D Portal is an unofficial fan-created resource and is not operated, sponsored, endorsed, or approved by Wizards of the Coast.'
					)
				],
				[
					text(
						'Nothing on this page is professional legal advice; visitors and contributors remain responsible for their own legal obligations.'
					)
				]
			]
		},
		content: content([
			{
				id: 'important-notice',
				title: 'Important Notice',
				blocks: [
					textParagraph(
						'By accessing or using this website, you acknowledge that the site is provided as an informational and organisational fan resource.'
					),
					textParagraph(
						'This notice does not override applicable law, third-party licences, intellectual property rights, or mandatory consumer protections.'
					)
				]
			},
			{
				id: 'website-operator',
				title: 'Website Operator',
				blocks: [
					textParagraph(
						'D&D Portal is independently created and maintained by Toon van Berkel.'
					),
					paragraph([
						text('Questions about the website, attribution, intellectual property, or this notice can be sent through '),
						link('externals.mail.main', 'email'),
						text('.')
					])
				]
			},
			{
				id: 'unofficial-fan-content',
				title: 'Unofficial Fan Content',
				blocks: [
					textParagraph(
						'Dungeons & Dragons, D&D, Wizards of the Coast, the dragon ampersand, and related properties belong to Wizards of the Coast LLC and their respective rights holders.'
					),
					textParagraph(
						'D&D Portal does not intentionally distribute complete copies of commercial rulebooks, adventures, protected databases, or other publications that are not authorised for redistribution.'
					),
					paragraph([
						text('See also the '),
						link('externals.wizards.fanContentPolicy', 'Wizards of the Coast Fan Content Policy'),
						text('.')
					])
				]
			},
			{
				id: 'purpose-of-website',
				title: 'Purpose of the Website',
				blocks: [
					textParagraph(
						'D&D Portal exists to provide information, references, explanations, campaign documentation, and tools relating to tabletop role-playing games and the campaigns in which the website is used.'
					),
					textParagraph(
						'The website is not intended to replace official books, licensed services, subscriptions, paid products, professional advice, or material published by the relevant rights holders.'
					)
				]
			},
			{
				id: 'non-commercial-operation',
				title: 'Non-Commercial Operation and Donations',
				blocks: [
					textParagraph(
						'Access to the publicly available Wiki content is provided free of charge. Visitors are not required to buy a subscription or make a payment to read public pages.'
					),
					textParagraph(
						'Optional donations, if available, support hosting, maintenance, development, and improvement. They do not purchase access, ownership, licences, preferential treatment, or decision-making authority.'
					)
				]
			},
			{
				id: 'no-protected-publications',
				title: 'No Distribution of Protected Publications',
				blocks: [
					textParagraph(
						'D&D Portal does not intentionally provide complete copies of commercial rulebooks, adventures, supplements, subscription-only pages, protected databases, or other publications that are not authorised for redistribution.'
					),
					textParagraph(
						'Visitors must not use the website to request, distribute, upload, publish, or obtain unauthorised copies of copyrighted publications.'
					)
				]
			},
			{
				id: 'accuracy-liability',
				title: 'Accuracy, Availability, and Liability',
				blocks: [
					textParagraph(
						'The project aims to keep information useful and understandable, but pages can contain mistakes, outdated details, broken links, incomplete sections, or campaign-specific rulings.'
					),
					textParagraph(
						'The website may be changed, reorganised, disabled, or removed without prior notice when legal, technical, campaign, or maintenance reasons require it.'
					)
				]
			}
		])
	}),

	privacy: createInternalPage({
		href: current.privacy.href,

		title: `${website.name.short} - ${current.privacy.name.normal}`,
		subTitle: 'Privacy information',
		description: `Read how visitor information and personal data are
			handled, stored, protected, and used by the website.`,
		descriptions: {
			long: [
				[
					text(
						'The public Wiki is designed to provide reference information without requiring visitors to identify themselves.'
					)
				],
				[
					text(
						'Browser preferences are stored locally where possible and are intended to control interface behaviour, not to profile visitors.'
					)
				],
				[
					text(
						'The separate Player Portal may process different campaign or account information and should provide its own privacy details.'
					)
				]
			]
		},
		content: content([
			{
				id: 'about-this-notice',
				title: 'About This Notice',
				blocks: [
					textParagraph(
						'This Privacy Notice explains how personal data may be processed when you visit or contact the public D&D Portal Wiki.'
					),
					textParagraph(
						'The notice applies to the Wiki, not automatically to the separate D&D Player Portal.'
					)
				]
			},
			{
				id: 'data-not-collected',
				title: 'Information the Wiki Does Not Intentionally Collect',
				blocks: [
					list([
						'User accounts or public profiles.',
						'Login or registration forms.',
						'Comment sections.',
						'Direct file uploads.',
						'Advertising networks or behavioural advertising.',
						'Visitor profiling or sale of personal data.'
					]),
					textParagraph(
						'Simply reading a public Wiki page does not intentionally require you to provide your name, email address, party membership, character details, or other directly identifying information.'
					)
				]
			},
			{
				id: 'browser-preferences',
				title: 'Local Browser Preferences',
				blocks: [
					textParagraph(
						'The Wiki may use local browser storage to remember display choices such as preferred class-card image gender or campaign preference context.'
					),
					textParagraph(
						'These preferences remain in the visitor browser until changed, removed by the site, or deleted through browser settings.'
					)
				]
			},
			{
				id: 'data-controller',
				title: 'Data Controller',
				blocks: [
					textParagraph(
						'The person responsible for personal data connected to the public Wiki is Toon van Berkel.'
					),
					paragraph([
						text('Privacy questions can be sent through '),
						link('externals.mail.main', 'email'),
						text('.')
					])
				]
			},
			{
				id: 'hosting-logs',
				title: 'Hosting and Technical Logs',
				blocks: [
					textParagraph(
						'Like most websites, hosting infrastructure may process technical request information such as IP address, requested URL, user agent, timestamps, and error details.'
					),
					textParagraph(
						'These logs are used for security, debugging, abuse prevention, and basic operation of the website rather than behavioural advertising.'
					)
				]
			},
			{
				id: 'search-url-state',
				title: 'Search URL State',
				blocks: [
					textParagraph(
						'Temporary search state can be stored in the search page URL. Search URLs may include query text, selected filters, tags, and page number.'
					),
					textParagraph(
						'Those URL parameters can appear in browser history, copied links, and hosting request logs.'
					)
				]
			},
			{
				id: 'privacy-rights',
				title: 'Privacy Rights and Contact',
				blocks: [
					textParagraph(
						'Depending on applicable law, visitors may have rights to request access, correction, deletion, restriction, or objection relating to personal data.'
					),
					textParagraph(
						'Because the public Wiki intentionally avoids accounts and visitor profiles, many requests may involve technical logs or direct contact messages rather than account records.'
					)
				]
			}
		])
	}),

	cookies: createInternalPage({
		href: current.cookies.href,

		title: `${website.name.short} - ${current.cookies.name.normal}`,
		subTitle: 'Cookie information',
		description: `Read which cookies and similar technologies may be
			used by the D&D Portal Wiki and why they are required.`,
		descriptions: {
			long: [
				[
					text(
						'The public D&D Portal Wiki does not currently use HTTP cookies for advertising, behavioural tracking, analytics, login sessions, or account authentication.'
					)
				],
				[
					text(
						'The Wiki does use local browser storage for functional preferences, which is documented here because it is a related browser-storage technology.'
					)
				],
				[
					text(
						'The separate Player Portal may use different technologies and should provide its own cookie information.'
					)
				]
			]
		},
		content: content([
			{
				id: 'current-cookie-status',
				title: 'Current Cookie Status',
				blocks: [
					textParagraph(
						'No HTTP cookies are currently intentionally set by the public Wiki.'
					),
					textParagraph(
						'A cookie banner is therefore not currently displayed for optional analytics or marketing cookies.'
					)
				]
			},
			{
				id: 'what-are-cookies',
				title: 'What Are Cookies?',
				blocks: [
					textParagraph(
						'Cookies are small pieces of information that a website can store in a visitor browser and receive again during later requests.'
					),
					list([
						'Keeping a visitor signed in.',
						'Remembering interface preferences.',
						'Maintaining a form session.',
						'Measuring website usage.',
						'Personalising content.',
						'Advertising or behavioural tracking.'
					])
				]
			},
			{
				id: 'local-storage',
				title: 'Local Browser Storage',
				blocks: [
					textParagraph(
						'D&D Portal currently uses local storage for functional preferences such as image gender and Wiki preference context.'
					),
					textParagraph(
						'Search filter state is stored in the page URL so filtered search results can be shared.'
					)
				]
			},
			{
				id: 'similar-technologies',
				title: 'Similar Browser Technologies',
				blocks: [
					textParagraph(
						'Websites can store information through technologies that are not traditional HTTP cookies, including local storage, session storage, cache, and URL parameters.'
					),
					textParagraph(
						'D&D Portal currently documents local storage because it is used for functional interface preferences.'
					)
				]
			},
			{
				id: 'search-urls',
				title: 'Search URLs',
				blocks: [
					textParagraph(
						'Search filters and search terms can be included in the URL so filtered views can be copied and shared.'
					),
					textParagraph(
						'This is useful, but copied URLs and browser history may reveal the search terms or filters that were active.'
					)
				]
			},
			{
				id: 'removing-preferences',
				title: 'Removing Saved Preferences',
				blocks: [
					textParagraph(
						'Browser storage can be viewed and removed through the privacy or website-data settings of the browser.'
					),
					textParagraph(
						'Removing saved preferences resets display choices for that browser and device.'
					)
				]
			}
		])
	}),

	contributionTerms: createInternalPage({
		href: current.contributionTerms.href,

		title: `${website.name.short} - ${current.contributionTerms.name.normal}`,
		subTitle: 'Contributor conditions',
		description: `Read the conditions applying to submitted content,
			code, artwork, corrections, and other contributions.`,
		descriptions: {
			long: [
				[
					text(
						'These terms apply when someone deliberately submits code, written content, artwork, corrections, or other material for possible use in the D&D Portal Wiki.'
					)
				],
				[
					text(
						'Reading or using the public Wiki does not make someone a contributor and does not require acceptance of these contribution terms.'
					)
				],
				[
					text(
						'Contributors keep ownership of original material they legally own while granting the project permission to review, adapt, and publish accepted contributions.'
					)
				]
			]
		},
		content: content([
			{
				id: 'important-notice',
				title: 'Important Notice',
				blocks: [
					textParagraph(
						'These terms apply only when you voluntarily submit material for inclusion in the D&D Portal Wiki.'
					),
					textParagraph(
						'A contribution may be submitted through GitHub, email, another agreed communication method, or directly to the project owner.'
					)
				]
			},
			{
				id: 'what-counts',
				title: 'What Counts as a Contribution',
				blocks: [
					list([
						'Source code, components, styles, scripts, and configuration.',
						'Bug fixes and technical improvements.',
						'Rules explanations and reference text.',
						'Homebrew classes, subclasses, species, feats, spells, and items.',
						'Campaign descriptions, setting material, characters, locations, and lore.',
						'Images, icons, diagrams, maps, alternative text, and accessibility improvements.'
					]),
					textParagraph(
						'General feedback or an idea that has not been incorporated into the project may not qualify as a protected contribution by itself.'
					)
				]
			},
			{
				id: 'contributor-responsibility',
				title: 'Contributor Responsibility',
				blocks: [
					textParagraph(
						'Contributors should only submit material they are legally allowed to submit.'
					),
					textParagraph(
						'Do not submit confidential employer, school, client, campaign, or third-party information without permission.'
					)
				]
			},
			{
				id: 'ownership',
				title: 'Ownership of Original Contributions',
				blocks: [
					textParagraph(
						'Contributors retain copyright in original parts of their contribution that they legally own.'
					),
					textParagraph(
						'Submitting content does not transfer ownership of original work to Toon van Berkel or D&D Portal Wiki unless a separate written agreement says so.'
					)
				]
			},
			{
				id: 'licence-to-use',
				title: 'Licence to Use Contributions',
				blocks: [
					textParagraph(
						'By submitting a contribution for inclusion, the contributor gives the project permission to review, edit, adapt, publish, reproduce, and maintain the contribution as part of the Wiki.'
					),
					textParagraph(
						'Accepted contributions may be modified to match the website structure, writing style, accessibility requirements, technical standards, and campaign rules.'
					)
				]
			},
			{
				id: 'third-party-material',
				title: 'Third-Party Material',
				blocks: [
					textParagraph(
						'Contributors should not submit third-party material unless they have permission or the material can lawfully be used by the project.'
					),
					textParagraph(
						'This includes text, artwork, maps, icons, datasets, code, screenshots, documents, campaign notes, and private communications.'
					)
				]
			},
			{
				id: 'review-and-removal',
				title: 'Review, Refusal, and Removal',
				blocks: [
					textParagraph(
						'Submitting a contribution does not guarantee that it will be accepted, published, kept unchanged, or kept permanently available.'
					),
					textParagraph(
						'The project may refuse, edit, replace, restrict, or remove contributions for quality, accuracy, legal, safety, campaign, or maintenance reasons.'
					)
				]
			}
		])
	}),

	contentRemoval: createInternalPage({
		href: current.contentRemoval.href,

		title: `${website.name.short} - ${current.contentRemoval.name.normal}`,
		subTitle: 'Removal requests',
		description: `Learn how to request the review, correction, or
			removal of content published on the D&D Portal Wiki.`,
		descriptions: {
			long: [
				[
					text(
						'This page explains how to request correction, restriction, or removal of material published through the D&D Portal Wiki.'
					)
				],
				[
					text(
						'Requests may concern copyright, attribution, privacy, confidential information, security, unlawful material, or another legitimate concern.'
					)
				],
				[
					text(
						'Every request is reviewed according to its circumstances; submitting a request does not guarantee a specific outcome.'
					)
				]
			]
		},
		content: content([
			{
				id: 'purpose',
				title: 'Purpose of This Page',
				blocks: [
					textParagraph(
						'This page explains how to report material that you believe should be corrected, restricted, or removed.'
					),
					textParagraph(
						'The final action may be removal, correction, added attribution, replacement, restriction, or no change when the request is not supported.'
					)
				]
			},
			{
				id: 'when-to-submit',
				title: 'When to Submit a Request',
				blocks: [
					list([
						'Protected work appears without permission.',
						'The wrong author, source, or licence is listed.',
						'Personal or confidential information is disclosed.',
						'Material creates a credible security or safety risk.',
						'Material may be unlawful or otherwise inappropriate for publication.'
					])
				]
			},
			{
				id: 'request-information',
				title: 'Information Required',
				blocks: [
					textParagraph(
						'A useful request should identify the affected URL, the exact material at issue, the reason for the request, your relationship to the material, and the preferred correction or removal.'
					),
					paragraph([
						text('Requests can be sent through '),
						link('externals.mail.main', 'email'),
						text('.')
					])
				]
			},
			{
				id: 'correction-instead-removal',
				title: 'Correction Instead of Removal',
				blocks: [
					textParagraph(
						'Complete removal is not always the most appropriate solution.'
					),
					list([
						'Correcting the author or source.',
						'Adding a missing licence notice.',
						'Removing a specific sentence, image, or attachment.',
						'Replacing protected wording with an original summary.',
						'Removing unnecessary personal information.',
						'Restricting access while the matter is investigated.',
						'Adding context or correcting inaccurate information.',
						'Replacing an image with a properly licensed alternative.'
					])
				]
			},
			{
				id: 'review-process',
				title: 'Review Process',
				blocks: [
					textParagraph(
						'Requests are reviewed according to the information provided, the type of material involved, the source, the risk, and the practical options available.'
					),
					textParagraph(
						'The final action may differ from the preferred solution when another correction addresses the concern more appropriately.'
					)
				]
			},
			{
				id: 'urgent-issues',
				title: 'Urgent Issues',
				blocks: [
					textParagraph(
						'Reports involving exposed credentials, credible safety risks, private information, or security issues should clearly state the urgency in the request.'
					),
					textParagraph(
						'Do not publicly post sensitive information in an issue when the report itself would make the problem worse.'
					)
				]
			}
		])
	})
} as const;

import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import {
	announcementCategories,
	portalLinkCategories,
	publicIssueCategories,
	publicIssueSources,
	publicIssueStatuses,
	roadmapAreas,
	roadmapPriorities,
	roadmapStatuses,
	wikiUpdateCategories
} from './metadata';
import { announcements } from './announcements';
import { portalLinks } from './portal-links';
import { publicIssues } from './issues';
import { roadmapItems } from './roadmap';
import { wikiUpdates } from './wiki-updates';
import type {
	InlineContent,
	InlineContentNode,
	PageContentBlock,
	PageContentSection
} from '$lib/typescript/pages/content-types';

const website = core.internals.website;
const discordExternal = core.externals.discord;
const githubExternal = core.externals.github;

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

const content = (sections: readonly PageContentSection[]) => ({
	sections,
	tableOfContents: sections.map((section) => ({
		id: section.id,
		title: section.title
	}))
});

export const community = {
	discord: {
		page: createInternalPage({
			href: '/discord',
			img: discordExternal.logos.simple,
			title: `${website.name.short} - Discord Community`,
			subTitle: 'Community hub',
			label: 'Discord',
			description:
				'Join the D&D Portal Discord community, follow public updates, and find curated links to useful Wiki pages.',
			descriptions: {
				long: [
					[
						text(
							'The D&D Portal Discord server is the community space around the Wiki, campaign resources, project updates, and tabletop discussion.'
						)
					],
					[
						text(
							'Visitors can use the server to follow major public updates, ask questions, share feedback, and find links to useful D&D Portal pages.'
						)
					],
					[
						text(
							'Private conversations are not automatically published on the website; public entries are manually selected and rewritten when needed.'
						)
					]
				]
			},
			navigation: {
				label: 'Discord'
			},
			tags: ['community', 'discord', 'announcements', 'feedback', 'updates'],
			content: content([
				{
					id: 'join-discord',
					title: 'Join the Discord',
					blocks: [
						paragraph([
							text('Use the public invite to join the community server: '),
							link('externals.discord.homepage', 'Join D&D Portal on Discord'),
							text('.')
						]),
						textParagraph(
							'The server can be used for community discussion, public Wiki feedback, content suggestions, update notifications, and coordination around D&D Portal resources.'
						)
					]
				},
				{
					id: 'community-pages',
					title: 'Community Pages',
					subtitle: 'Public pages selected from community context',
					blocks: [
						{
							type: 'card-grid',
							groups: [
								{
									title: 'Discord and Transparency',
									cards: [
										{
											page: 'internals.community.discord.announcements',
											source: 'Community'
										},
										{
											page: 'internals.community.discord.wikiUpdates',
											source: 'Community'
										},
										{
											page: 'internals.community.discord.portalLinks',
											source: 'Community'
										},
										{
											page: 'internals.community.issues',
											source: 'Transparency'
										},
										{
											page: 'internals.community.roadmap',
											source: 'Transparency'
										}
									]
								}
							]
						}
					]
				},
				{
					id: 'privacy-note',
					title: 'Privacy Note',
					blocks: [
						textParagraph(
							'Private Discord conversations, private channels, usernames, email addresses, personal disputes, and private campaign information are not published automatically.'
						),
						textParagraph(
							'Public website entries are manually selected and rewritten where necessary so they can explain the project without exposing unnecessary identifying information.'
						)
					]
				}
			])
		}),

		announcements: createInternalPage({
			href: '/discord/announcements',
			img: discordExternal.logos.simple,
			title: `${website.name.short} - Discord Announcements`,
			subTitle: 'Public community announcements',
			label: 'Announcements',
			description:
				'Meaningful public announcements shared with the D&D Portal Discord community.',
			descriptions: {
				long: [
					[
						text(
							'Discord Announcements collects only meaningful public updates from the community context, such as releases, major content expansions, community changes, maintenance, and important project decisions.'
						)
					],
					[
						text(
							'This page is not a mirror of every Discord message and does not automatically expose private conversations, usernames, or channel history.'
						)
					],
					[
						text(
							'Entries are manually selected and rewritten when needed so they are useful as public website updates.'
						)
					]
				]
			},
			navigation: {
				parent: 'internals.community.discord.page'
			},
			tags: ['discord', 'announcements', 'community', 'release notes'],
			content: content([
				{
					id: 'announcements',
					title: 'Announcements',
					subtitle: 'Newest first',
					blocks: [
						{
							type: 'community-announcements',
							announcements,
							categories: announcementCategories
						}
					]
				}
			])
		}),

		wikiUpdates: createInternalPage({
			href: '/discord/wiki-updates',
			img: discordExternal.logos.simple,
			title: `${website.name.short} - Wiki Updates`,
			subTitle: 'Community-friendly update feed',
			label: 'Wiki Updates',
			description:
				'Short public Wiki updates for the Discord community, separate from the complete changelog.',
			descriptions: {
				long: [
					[
						text(
							'Wiki Updates are short community-friendly summaries of changes that matter to readers and players.'
						)
					],
					[
						text(
							'The full changelog remains the official release history, while GitHub releases can carry more technical summaries.'
						)
					],
					[
						text(
							'This page keeps updates concise and links to related Wiki pages or release history when that extra context is useful.'
						)
					]
				]
			},
			navigation: {
				parent: 'internals.community.discord.page'
			},
			tags: ['wiki updates', 'community', 'changelog', 'release summaries'],
			content: content([
				{
					id: 'update-types',
					title: 'How This Differs From Other Logs',
					blocks: [
						paragraph([
							link('internals.community.discord.wikiUpdates', 'Wiki Updates'),
							text(' are short and accessible community updates. ')
						]),
						paragraph([
							link('internals.project.changelog', 'Changelog'),
							text(' is the complete official public release history. ')
						]),
						paragraph([
							link('externals.github.releases', 'GitHub Releases'),
							text(' are technical release summaries when used.')
						])
					]
				},
				{
					id: 'updates',
					title: 'Updates',
					subtitle: 'Newest first',
					blocks: [
						{
							type: 'community-wiki-updates',
							updates: wikiUpdates,
							categories: wikiUpdateCategories,
							changelogPath: 'internals.project.changelog'
						}
					]
				}
			])
		}),

		portalLinks: createInternalPage({
			href: '/discord/portal-links',
			img: discordExternal.logos.simple,
			title: `${website.name.short} - Portal Links`,
			subTitle: 'Curated community links',
			label: 'Portal Links',
			description:
				'A curated collection of D&D Portal pages previously highlighted in the community Discord.',
			descriptions: {
				long: [
					[
						text(
							'Portal Links is a curated collection of D&D Portal pages previously highlighted in the community Discord.'
						)
					],
					[
						text(
							'The links are grouped by topic so visitors can quickly find important pages without searching through Discord history.'
						)
					],
					[
						text(
							'Internal links use the central Wiki data paths so route labels, URLs, icons, and hover previews stay connected.'
						)
					]
				]
			},
			navigation: {
				parent: 'internals.community.discord.page'
			},
			tags: ['portal links', 'discord', 'community', 'quick links'],
			content: content([
				{
					id: 'portal-links',
					title: 'Portal Links',
					subtitle: 'Grouped by category',
					blocks: [
						{
							type: 'community-portal-links',
							links: portalLinks,
							categories: portalLinkCategories
						}
					]
				}
			])
		})
	},

	issues: createInternalPage({
		href: '/issues',
		img: githubExternal.logos.simple,
		title: `${website.name.short} - Issues and Feedback`,
		subTitle: 'Public transparency',
		label: 'Issues',
		description:
			'A curated public overview of confirmed issues, concerns, corrections, and feedback for D&D Portal Wiki.',
		descriptions: {
			long: [
				[
					text(
						'Issues and Feedback is a curated public overview of confirmed problems, concerns, corrections, and feedback submitted through public channels or identified during maintenance.'
					)
				],
				[
					text(
						'Private reports, security vulnerabilities, personal conflicts, private messages, usernames, email addresses, and private campaign information are not automatically published here.'
					)
				],
				[
					text(
						'Entries may be rewritten to remove unnecessary identifying information; the goal is transparency, not a public complaints wall.'
					)
				]
			]
		},
		tags: ['issues', 'feedback', 'transparency', 'github', 'discord'],
		content: content([
			{
				id: 'reporting-context',
				title: 'Reporting Context',
				blocks: [
					paragraph([
						text('Use '),
						link('externals.github.issues', 'GitHub Issues'),
						text(' for public reports and '),
						link('externals.discord.general', 'Discord general discussion'),
						text(' for community feedback when the topic is not private or security-sensitive.')
					]),
					textParagraph(
						'Security vulnerabilities should be reported privately and should not be published on this page.'
					)
				]
			},
			{
				id: 'public-issues',
				title: 'Public Issues',
				subtitle: 'Curated and filtered',
				blocks: [
					{
						type: 'public-issues',
						issues: publicIssues,
						statuses: publicIssueStatuses,
						sources: publicIssueSources,
						categories: publicIssueCategories,
						githubIssuesPath: 'externals.github.issues',
						discordFeedbackPath: 'externals.discord.general'
					}
				]
			}
		])
	}),

	roadmap: createInternalPage({
		href: '/roadmap',
		img: {
			href: '/icons/white/entity/map.svg',
			alt: 'A stylized map icon representing planned public work.'
		},
		title: `${website.name.short} - Roadmap`,
		subTitle: 'Planned public work',
		label: 'Roadmap',
		description:
			'View meaningful planned and ongoing D&D Portal Wiki work without exposing every internal development task.',
		descriptions: {
			long: [
				[
					text(
						'The public roadmap shows meaningful planned, ongoing, reviewed, paused, cancelled, and completed work for D&D Portal Wiki.'
					)
				],
				[
					text(
						'It is intentionally higher level than the internal task list and does not expose private Discord, campaign, or development details.'
					)
				],
				[
					text(
						'Roadmap items are intentions, not promises; priorities, target versions, and scope can change as the project changes.'
					)
				]
			]
		},
		tags: ['roadmap', 'planned work', 'community', 'transparency'],
		content: content([
			{
				id: 'roadmap-note',
				title: 'Roadmap Note',
				blocks: [
					textParagraph(
						'Roadmap items are public planning notes. They can change, move, split, pause, or be removed when project needs change.'
					)
				]
			},
			{
				id: 'roadmap',
				title: 'Roadmap',
				subtitle: 'Grouped by status',
				blocks: [
					{
						type: 'public-roadmap',
						items: roadmapItems,
						statuses: roadmapStatuses,
						priorities: roadmapPriorities,
						areas: roadmapAreas
					}
				]
			}
		])
	})
} as const;

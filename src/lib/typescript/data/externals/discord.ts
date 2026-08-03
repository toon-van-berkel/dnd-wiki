import * as core from '../core/_index_';

const website = core.internals.website;
const current = core.externals.discord;

export const discord = {
	homepage: {
		href: current.baseUrl,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} - Discord`,
		subTitle: 'Community server',
		description: `Join the ${current.name.server} Discord server to
			participate in the community, discuss Dungeons & Dragons,
			receive updates, and connect with other members.`
	},

	rules: {
		href: current.channels.rules.url,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} Discord - ${current.channels.rules.name}`,
		subTitle: 'Server rules and guidelines',
		description: `Open the ${current.channels.rules.name} channel to read
			the community guidelines, expected conduct, moderation policies,
			and other rules that apply throughout the server.`
	},

	announcements: {
		href: current.channels.announcements.url,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} Discord - ${current.channels.announcements.name}`,
		subTitle: 'Official server announcements',
		description: `Open the ${current.channels.announcements.name} channel
			for important server news, events, changes, maintenance notices,
			and official community updates.`
	},

	wikiUpdates: {
		href: current.channels.wikiUpdates.url,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} Discord - ${current.channels.wikiUpdates.name}`,
		subTitle: 'Wiki changes and releases',
		description: `Open the ${current.channels.wikiUpdates.name} channel
			to follow newly added pages, content changes, feature releases,
			corrections, and other developments on the wiki.`
	},

	general: {
		href: current.channels.general.url,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} Discord - ${current.channels.general.name}`,
		subTitle: 'General community discussion',
		description: `Open the ${current.channels.general.name} channel to
			talk with community members about Dungeons & Dragons, the wiki,
			campaigns, characters, and other related subjects.`
	}
} as const;
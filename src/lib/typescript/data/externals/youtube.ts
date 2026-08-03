import * as core from '../core/_index_';

const website = core.internals.website;
const current = core.externals.youtube;

export const youtube = {
	homepage: {
		href: current.baseUrl,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} - YouTube`,
		subTitle: 'Official video channel',
		description: `Visit the official ${current.name.channel} YouTube
			channel for videos, guides, project updates, demonstrations,
			and other Dungeons & Dragons content.`
	},

	featured: {
		href: current.pages.featured.url,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} YouTube - ${current.pages.featured.name}`,
		subTitle: 'Featured channel content',
		description: `View featured videos and highlighted content from the
			official ${current.name.channel} YouTube channel.`
	},

	posts: {
		href: current.pages.posts.url,
		external: true,

		img: current.logos.simple,

		title: `${website.name.short} YouTube - ${current.pages.posts.name}`,
		subTitle: 'Channel news and updates',
		description: `Read posts from the official ${current.name.channel}
			YouTube channel, including announcements, progress updates,
			community messages, and other channel news.`
	}
} as const;
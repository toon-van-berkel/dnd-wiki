import * as core from '../core/_index_';

interface InternalPageInput {
	href: string;
	title: string;
	subTitle: string;
	description: string;
	img?: {
		href: string;
		alt: string;
	};
}

export function createInternalPage({
	img = core.internals.website.logos.simple,
	...page
}: InternalPageInput) {
	return {
		...page,
		external: false,
		img
	};
}
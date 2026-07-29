import * as core from '../core/_index_';

type ImageSizeSources = {
	s: string;
	m: string;
	l: string;
};

type CardImage = {
	alt: string;
	position?: string;
	sources: ImageSizeSources;
};

interface InternalPageInput {
	href: string;
	title: string;
	subTitle: string;
	description: string;

	img?: {
		href: string;
		alt: string;
	};

	images?: {
		card?: {
			female: CardImage;
			male: CardImage;
		};
	};

	tags?: readonly string[];
}

export function createInternalPage<const T extends InternalPageInput>(
	page: T
) {
	return {
		...page,
		external: false as const,
		img: page.img ?? core.internals.website.logos.simple
	};
}
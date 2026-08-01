import * as core from '../core/_index_';
import type {
	HeaderContentSection,
	InlineContentBlock
} from '$lib/typescript/pages/content-types';

type ImageSizeSources = {
	s: string;
	m: string;
	l: string;
};

type CardImage = {
	alt: string;
	caption?: string;
	position?: string;
	sources: ImageSizeSources;
};

interface InternalPageInput {
	href: string;
	title: string;
	subTitle: string;
	label?: string;
	description?: string;
	descriptions?: {
		short?: string;
		medium?: string;
		long?: InlineContentBlock;
	};

	header?: {
		sections?: readonly HeaderContentSection[];
	};

	img?: {
		href: string;
		alt: string;
	};

	images?: {
		card?: Partial<Record<'female' | 'male', CardImage>>;
		header?: Partial<Record<'female' | 'male', CardImage>>;
	};

	navigation?: {
		label?: string;
		parent?: string;
	};

	tags?: readonly string[];
}

export function createInternalPage<const T extends InternalPageInput>(
	page: T
) {
	const description =
		page.description ??
		page.descriptions?.medium ??
		page.descriptions?.short ??
		'';

	return {
		...page,
		description,
		external: false as const,
		img: page.img ?? core.internals.website.logos.simple
	};
}

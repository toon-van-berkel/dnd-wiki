import * as core from '../core/_index_';
import type {
	HeaderContentSection,
	InlineContent,
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
	seoTitle?: string;
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
		hidden?: boolean;
	};

	tags?: readonly string[];
}

type FeatureSectionLike = {
	readonly title?: unknown;
};

type PageWithContent = InternalPageInput & {
	readonly content?: {
		readonly featureSections?: readonly FeatureSectionLike[];
	};
};

function textParagraph(text: string): InlineContent {
	return [
		{
			type: 'text',
			text
		}
	];
}

function isParagraphBlock(
	content: InlineContentBlock
): content is readonly InlineContent[] {
	return Array.isArray(content[0]);
}

function getParagraphs(
	content: InlineContentBlock | undefined
): readonly InlineContent[] {
	if (!content) {
		return [];
	}

	return isParagraphBlock(content) ? content : [content];
}

function getPageLabel(page: InternalPageInput): string {
	return page.label ?? page.title.replace(/^.* - /, '');
}

function getSubclassClassName(page: InternalPageInput): string {
	return page.subTitle.replace(/\s+subclass$/i, '').trim() || 'class';
}

function getFeatureTitles(page: InternalPageInput): readonly string[] {
	const content = (page as PageWithContent).content;

	if (!content?.featureSections?.length) {
		return [];
	}

	return content.featureSections
		.map((section) => section.title)
		.filter((title): title is string => typeof title === 'string' && title.length > 0);
}

function createSubclassLongDescription(
	page: InternalPageInput,
	description: string
): InlineContentBlock | undefined {
	if (!/\bsubclass\b/i.test(page.subTitle)) {
		return page.descriptions?.long;
	}

	const existing = getParagraphs(page.descriptions?.long);

	if (existing.length >= 3) {
		return page.descriptions?.long;
	}

	const subclassName = getPageLabel(page);
	const className = getSubclassClassName(page);
	const featureTitles = getFeatureTitles(page);
	const opening =
		description ||
		`${subclassName} is a ${className} subclass with its own feature progression.`;
	const firstFeature = featureTitles[0];
	const laterFeatures = featureTitles.slice(1, 4).join(', ');

	const generated = [
		textParagraph(opening),
		textParagraph(
			firstFeature
				? `${subclassName} starts by changing the normal ${className} play pattern through ${firstFeature}, giving the subclass its first clear mechanical identity.`
				: `${subclassName} adds a focused identity on top of the normal ${className} chassis without replacing the base class progression.`
		),
		textParagraph(
			laterFeatures
				? `Later features such as ${laterFeatures} expand that identity at higher levels, so the subclass has a clearer role in combat, exploration, utility, or support.`
				: `At higher levels, the subclass features build on that theme so the character keeps gaining tools that feel distinct from the base ${className}.`
		)
	] as const;

	return [
		...existing,
		...generated.slice(existing.length)
	];
}

export function createInternalPage<const T extends InternalPageInput>(
	page: T
) {
	const description =
		page.description ??
		page.descriptions?.medium ??
		page.descriptions?.short ??
		'';
	const longDescription = createSubclassLongDescription(page, description);
	const descriptions = longDescription
		? {
				...page.descriptions,
				long: longDescription
			}
		: page.descriptions;

	return {
		...page,
		description,
		...(descriptions ? { descriptions } : {}),
		external: false as const,
		img: page.img ?? core.internals.website.logos.simple
	};
}

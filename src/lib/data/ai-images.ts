import {
	pageCardAssets,
	type PageCardAssetSet,
	type PageCardGender,
	type PageCardAssetManifest,
	type PageCardSize
} from '$lib/data/generated/PageCardAssets';
import { getPageEntryByHref } from '$lib/page/registry';

export type AiImageType =
	| 'Generated'
	| 'AI-assisted edit'
	| 'Reference-based generation'
	| 'Background replacement'
	| 'Character variation';

export type AiImageEntry = {
	id: string;
	title: string;
	image: string;
	page?: string;
	pageLabel?: string;
	type: AiImageType;
	tool?: string;
	description: string;
	reference?: string;
	notes?: string;
	variants?: string[];
};

const imageSizeOrder = ['small', 'medium', 'large'] as const satisfies readonly PageCardSize[];
const variantSizeOrder = ['large', 'medium', 'small'] as const satisfies readonly PageCardSize[];
const pageCardAssetManifest = pageCardAssets as PageCardAssetManifest;

function firstAvailableImage(assets: PageCardAssetSet) {
	for (const size of imageSizeOrder) {
		if (assets[size]) {
			return assets[size];
		}
	}

	return null;
}

function listVariants(assets: PageCardAssetSet) {
	return variantSizeOrder
		.map((size) => assets[size])
		.filter((asset): asset is string => Boolean(asset));
}

function createClassCardEntry(href: string, gender: PageCardGender, assets: PageCardAssetSet) {
	const page = getPageEntryByHref(href);
	const image = firstAvailableImage(assets);
	const variants = listVariants(assets);

	if (!page) {
		throw new Error(`AI image class card references unknown Wiki page ${href}.`);
	}

	if (!image) {
		throw new Error(`AI image class card has no usable image variant for ${href} ${gender}.`);
	}

	const folder = href.replace(/^\/classes\/?/, '');
	const capitalizedGender =
		gender.charAt(0).toUpperCase() + gender.slice(1);

	return {
		id: `${folder.replaceAll('/', '-')}-${gender}`,
		title: `${page.title} - ${capitalizedGender}`,
		image,
		page: page.href,
		pageLabel: page.title,
		type: 'Generated',
		tool: 'OpenAI image generation',
		description:
			`An AI-generated ${gender} class-card illustration used as a visual reference for the ${page.title} page.`,
		notes:
			'This image is not official Dungeons & Dragons artwork and is not presented as manually created artwork.',
		variants
	} satisfies AiImageEntry;
}

function createClassCardEntries() {
	return Object.entries(pageCardAssets)
		.filter(([href]) => href.startsWith('/classes/'))
		.flatMap(([href]) =>
			(['female', 'male'] as const)
				.flatMap((gender) => {
					const genderAssets = pageCardAssetManifest[href]?.[gender];

					return genderAssets
						? [createClassCardEntry(href, gender, genderAssets)]
						: [];
				})
		);
}

export const aiGeneratedImages: AiImageEntry[] =
	createClassCardEntries();

export const aiEditedImages: AiImageEntry[] = [];

export const aiImages: AiImageEntry[] = [
	...aiGeneratedImages,
	...aiEditedImages
];

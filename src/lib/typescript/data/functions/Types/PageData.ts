import type { LinkData } from './LinkData';
import type { InlineContentBlock } from '$lib/typescript/pages/content-types';

export type ImageGender = 'female' | 'male';
export type ImageSize = 's' | 'm' | 'l';

export type ResponsiveImageData = {
	readonly alt: string;
	readonly caption?: string;
	readonly position?: string;

	readonly sources: Record<ImageSize, string>;
};

export type PageData = LinkData & {
	readonly external: false;
	readonly label?: string;

	readonly descriptions?: {
		readonly short?: string;
		readonly medium?: string;
		readonly long?: InlineContentBlock;
	};

	readonly images?: {
		readonly card?: Record<
			ImageGender,
			ResponsiveImageData
		>;
		readonly header?: Record<
			ImageGender,
			ResponsiveImageData
		>;
	};

	readonly navigation?: {
		readonly label?: string;
		readonly parent?: string;
	};

	readonly tags?: readonly string[];
};

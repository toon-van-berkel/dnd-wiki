import type { LinkData } from './LinkData';

export type ImageGender = 'female' | 'male';
export type ImageSize = 's' | 'm' | 'l';

export type ResponsiveImageData = {
	readonly alt: string;
	readonly position?: string;

	readonly sources: Record<ImageSize, string>;
};

export type PageData = LinkData & {
	readonly external: false;

	readonly images?: {
		readonly card?: Record<
			ImageGender,
			ResponsiveImageData
		>;
	};

	readonly tags?: readonly string[];
};
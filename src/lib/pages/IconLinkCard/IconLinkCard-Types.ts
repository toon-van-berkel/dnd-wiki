// site\src\lib\pages\IconLinkCard\IconLinkCard-Types.ts
import type { IconReference } from '$lib/helpers/Icon-Types';

export type IconLinkCardData = {
	title: string;
	href: string;
	icon: IconReference;
	description?: string;
	eyebrow?: string;
	actionLabel?: string;
	color?: string;
	iconSize?: string;
};

export type IconLinkCardProps = IconLinkCardData & {
	class?: string;
};
// site\src\lib\pages\ClassTraits\ClassTraits-Types.ts
export type ClassTraitPartVariant =
	| 'default'
	| 'emphasis'
	| 'strong'
	| 'accent';

export type ClassTraitPart = {
	text?: string;
	items?: readonly string[];
	variant?: ClassTraitPartVariant;
};

export type ClassTraitRow = {
	label: string;
	value: readonly ClassTraitPart[];
};

export type ClassTraitsData = {
	imageHref: string;
	imageAlt: string;
	imageCaption?: string;
	imagePosition?: string;
	rows: readonly ClassTraitRow[];
};

export type Props = ClassTraitsData;

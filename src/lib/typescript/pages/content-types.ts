/*
	Location: src/lib/typescript/pages/content-types.ts
	Use: Shared structured page-content types.
*/

export type InlineContentNode =
	| {
			readonly type: 'text';
			readonly text: string;
	  }
	| {
			readonly type: 'link';
			readonly path: string;
			readonly label?: string;
	  }
	| {
			readonly type: 'emphasis';
			readonly children: readonly InlineContentNode[];
	  }
	| {
			readonly type: 'strong';
			readonly children: readonly InlineContentNode[];
	  };

export type InlineContent = readonly InlineContentNode[];
export type InlineContentParagraphs = readonly InlineContent[];
export type InlineContentBlock = InlineContent | InlineContentParagraphs;

export type TraitTableRow = {
	readonly label: string;
	readonly value: InlineContent;
};

export type EquipmentChoiceGroup = {
	readonly label: string;
	readonly instruction?: string;
	readonly choices?: readonly InlineContent[];
	readonly items?: readonly InlineContent[];
};

export type CoreTraitsData = {
	readonly traits: readonly TraitTableRow[];
	readonly startingEquipment: readonly EquipmentChoiceGroup[];
};

export type ProgressionValue = string | number;

export type ProgressionColumnFormat = 'plain' | 'ordinal' | 'signed';

export type ProgressionFeature = {
	readonly label: string;
	readonly path?: string;
	readonly optional?: boolean;
};

export type ProgressionColumn = {
	readonly key: string;
	readonly label: string;
	readonly shortLabel?: string;
	readonly format?: ProgressionColumnFormat;
};

export type ProgressionRow = {
	readonly level: number;
	readonly proficiencyBonus: number;
	readonly features: readonly ProgressionFeature[];
	readonly values: Readonly<Record<string, ProgressionValue>>;
};

export type ProgressionData = {
	readonly title: string;
	readonly heading?: string;
	readonly description?: string;
	readonly columns: readonly ProgressionColumn[];
	readonly rows: readonly ProgressionRow[];
};

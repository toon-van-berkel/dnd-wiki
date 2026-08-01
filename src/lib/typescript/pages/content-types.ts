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

export type PageSection = {
	readonly id: string;
	readonly title: string;
};

export type PageTableOfContentsSection = PageSection & {
	readonly children?: readonly PageTableOfContentsSection[];
};

export type HeaderContentSection = PageSection & {
	readonly content: InlineContentBlock;
};

export type PageContentField = {
	readonly label: string;
	readonly content?: InlineContent;
	readonly items?: readonly InlineContent[];
};

export type PageContentCard =
	| {
			readonly page: string;
			readonly source: string;
	  }
	| {
			readonly title: string;
			readonly source: string;
			readonly description: string;
			readonly tags?: readonly string[];
	  };

export type PageContentFallbackCard = {
	readonly title: string;
	readonly source: string;
	readonly description: string;
	readonly tags?: readonly string[];
};

export type PageContentCardGroup = {
	readonly title: string;
	readonly cards: readonly PageContentCard[];
};

export type PageContentBlock =
	| {
			readonly type: 'paragraph';
			readonly content: InlineContent;
	  }
	| {
			readonly type: 'list';
			readonly items: readonly InlineContent[];
	  }
	| {
			readonly type: 'field-list';
			readonly items: readonly PageContentField[];
	  }
	| {
			readonly type: 'table';
			readonly caption: string;
			readonly showCaption?: boolean;
			readonly columns: TraitTableColumnLabels;
			readonly rows: readonly TraitTableRow[];
	  }
	| {
			readonly type: 'card-grid';
			readonly groups: readonly PageContentCardGroup[];
	  }
	| {
			readonly type: 'formula';
			readonly content: InlineContent;
	  };

export type PageContentSection = PageSection & {
	readonly optional?: boolean;
	readonly blocks: readonly PageContentBlock[];
};

export type TraitTableRow = {
	readonly label: string;
	readonly labelContent?: InlineContent;
	readonly value: InlineContent;
};

export type TraitTableColumnLabels = {
	readonly label: string;
	readonly value: string;
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

export type ProgressionFeature<Path extends string = string> = {
	readonly label: string;
	readonly path?: Path;
	readonly sectionId?: string;
	readonly optional?: boolean;
};

export type ProgressionColumn = {
	readonly key: string;
	readonly label: string;
	readonly shortLabel?: string;
	readonly format?: ProgressionColumnFormat;
};

export type ProgressionRow<Path extends string = string> = {
	readonly level: number;
	readonly proficiencyBonus: number;
	readonly features: readonly ProgressionFeature<Path>[];
	readonly values: Readonly<Record<string, ProgressionValue>>;
};

export type ProgressionData<Path extends string = string> = {
	readonly title: string;
	readonly heading?: string;
	readonly description?: string;
	readonly columns: readonly ProgressionColumn[];
	readonly rows: readonly ProgressionRow<Path>[];
};

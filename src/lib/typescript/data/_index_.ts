import { externals } from './externals/_index_';
import { internals } from './internals/_index_';
import { socials } from './socials/_index_';
export { getData } from './functions/_index_';

export type {
	Data,
	DataPath,
	DataPathValue,
	DataPathOfType,
	LinkData,
	LinkPath,
	ImageGender,
	ImageSize,
	ResponsiveImageData,
	PageData,
	PagePath
} from './functions/_index_';

export type {
	CoreTraitsData,
	EquipmentChoiceGroup,
	HeaderContentSection,
	InlineContent,
	InlineContentBlock,
	InlineContentNode,
	InlineContentParagraphs,
	PageContentBlock,
	PageContentCard,
	PageContentFallbackCard,
	PageContentCardGroup,
	PageContentField,
	PageContentSection,
	PageSection,
	PageTableOfContentsSection,
	ProgressionColumn,
	ProgressionData,
	ProgressionFeature,
	ProgressionRow,
	ProgressionValue,
	TraitTableColumnLabels,
	TraitTableRow
} from '$lib/typescript/pages/content-types';

export const data = { externals, internals, socials};

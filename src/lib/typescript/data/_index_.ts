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
	ChangelogAction,
	ChangelogCategory,
	ChangelogChange,
	ChangelogRelease,
	CommunityAnnouncement,
	CommunityLink,
	CommunityMetadata,
	CommunityPortalLink,
	CommunityWikiUpdate,
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
	PublicIssue,
	PublicIssueSource,
	PublicIssueStatus,
	ProgressionColumn,
	ProgressionData,
	ProgressionFeature,
	ProgressionRow,
	ProgressionValue,
	RoadmapItem,
	RoadmapPriority,
	RoadmapStatus,
	TraitTableColumnLabels,
	TraitTableRow
} from '$lib/typescript/pages/content-types';

export const data = { externals, internals, socials};

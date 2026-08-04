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
	readonly subtitle?: string;
	readonly subtitleContent?: InlineContent;
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

export type ChangelogCategory =
	| 'added'
	| 'changed'
	| 'fixed'
	| 'content'
	| 'removed'
	| 'security';

export type ChangelogAction = {
	readonly label: string;
	readonly path: string;
};

export type ChangelogChange = {
	readonly category: ChangelogCategory;
	readonly title: string;
	readonly description: string;
	readonly action?: ChangelogAction;
};

export type ChangelogRelease = {
	readonly version: string;
	readonly date: string;
	readonly title: string;
	readonly description: string;
	readonly changes: readonly ChangelogChange[];
};

export type CommunityLink = {
	readonly label: string;
	readonly href: string;
	readonly external?: boolean;
};

export type CommunityMetadata = {
	readonly label: string;
	readonly description?: string;
	readonly icon?: string;
};

export type CommunityAnnouncement = {
	readonly id: string;
	readonly title: string;
	readonly summary: string;
	readonly date: string;
	readonly category: string;
	readonly links?: readonly CommunityLink[];
	readonly discordMessageUrl?: string;
};

export type CommunityWikiUpdate = {
	readonly id: string;
	readonly title: string;
	readonly summary: string;
	readonly date: string;
	readonly category: string;
	readonly relatedPage?: string;
	readonly changelogUrl?: string;
	readonly releaseUrl?: string;
};

export type CommunityPortalLink = {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly href: string;
	readonly category: string;
	readonly icon?: string;
	readonly featured?: boolean;
};

export type PublicIssueStatus =
	| 'reported'
	| 'under-review'
	| 'accepted'
	| 'planned'
	| 'in-progress'
	| 'resolved'
	| 'declined'
	| 'duplicate';

export type PublicIssueSource = 'discord' | 'github' | 'website' | 'internal';

export type PublicIssue = {
	readonly id: string;
	readonly title: string;
	readonly summary: string;
	readonly status: PublicIssueStatus;
	readonly source: PublicIssueSource;
	readonly category: string;
	readonly reportedAt: string;
	readonly updatedAt?: string;
	readonly resolution?: string;
	readonly githubUrl?: string;
	readonly relatedPage?: string;
	readonly relatedRelease?: string;
};

export type RoadmapStatus =
	| 'idea'
	| 'planned'
	| 'in-progress'
	| 'review'
	| 'completed'
	| 'paused'
	| 'cancelled';

export type RoadmapPriority = 'high' | 'medium' | 'low';

export type RoadmapItem = {
	readonly id: string;
	readonly title: string;
	readonly summary: string;
	readonly status: RoadmapStatus;
	readonly priority?: RoadmapPriority;
	readonly area: string;
	readonly targetVersion?: string;
	readonly targetDate?: string;
	readonly githubUrl?: string;
	readonly relatedPage?: string;
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
	  }
	| {
			readonly type: 'changelog';
			readonly releases: readonly ChangelogRelease[];
	  }
	| {
			readonly type: 'community-announcements';
			readonly announcements: readonly CommunityAnnouncement[];
			readonly categories: Readonly<Record<string, CommunityMetadata>>;
	  }
	| {
			readonly type: 'community-wiki-updates';
			readonly updates: readonly CommunityWikiUpdate[];
			readonly categories: Readonly<Record<string, CommunityMetadata>>;
			readonly changelogPath: string;
	  }
	| {
			readonly type: 'community-portal-links';
			readonly links: readonly CommunityPortalLink[];
			readonly categories: Readonly<Record<string, CommunityMetadata>>;
	  }
	| {
			readonly type: 'public-issues';
			readonly issues: readonly PublicIssue[];
			readonly statuses: Readonly<Record<PublicIssueStatus, CommunityMetadata>>;
			readonly sources: Readonly<Record<PublicIssueSource, CommunityMetadata>>;
			readonly categories: Readonly<Record<string, CommunityMetadata>>;
			readonly githubIssuesPath: string;
			readonly discordFeedbackPath: string;
	  }
	| {
			readonly type: 'public-roadmap';
			readonly items: readonly RoadmapItem[];
			readonly statuses: Readonly<Record<RoadmapStatus, CommunityMetadata>>;
			readonly priorities: Readonly<Record<RoadmapPriority, CommunityMetadata>>;
			readonly areas: Readonly<Record<string, CommunityMetadata>>;
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

export type ProgressionColumn<Path extends string = string> = {
	readonly key: string;
	readonly label: string;
	readonly shortLabel?: string;
	readonly path?: Path;
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
	readonly columns: readonly ProgressionColumn<Path>[];
	readonly rows: readonly ProgressionRow<Path>[];
};

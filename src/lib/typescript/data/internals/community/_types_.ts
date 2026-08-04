import type {
	CommunityAnnouncement,
	CommunityMetadata,
	CommunityPortalLink,
	CommunityWikiUpdate,
	PublicIssue,
	PublicIssueSource,
	PublicIssueStatus,
	RoadmapItem,
	RoadmapPriority,
	RoadmapStatus
} from '$lib/typescript/pages/content-types';

export type {
	CommunityAnnouncement,
	CommunityMetadata,
	CommunityPortalLink,
	CommunityWikiUpdate,
	PublicIssue,
	PublicIssueSource,
	PublicIssueStatus,
	RoadmapItem,
	RoadmapPriority,
	RoadmapStatus
};

export function byNewestDate<
	T extends {
		readonly date?: string;
		readonly reportedAt?: string;
		readonly updatedAt?: string;
	}
>(items: readonly T[]): readonly T[] {
	return [...items].sort((left, right) => {
		const leftDate = left.updatedAt ?? left.date ?? left.reportedAt ?? '';
		const rightDate = right.updatedAt ?? right.date ?? right.reportedAt ?? '';

		return rightDate.localeCompare(leftDate);
	});
}

export function isResolvedIssue(status: PublicIssueStatus): boolean {
	return ['resolved', 'declined', 'duplicate'].includes(status);
}

export function isInactiveRoadmapStatus(status: RoadmapStatus): boolean {
	return ['completed', 'paused', 'cancelled'].includes(status);
}

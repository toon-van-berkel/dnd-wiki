import {
	getDungeonMasterForParty,
	getGuestPlayers,
	getPartyDisplayName,
	getPartyMemberSummary,
	getSortedParties
} from '$lib/config/parties';
import { getPageEntry } from '$lib/page/registry';

import type { AccentDetailsCardData } from '$lib/pages/AccentDetailsCard/AccentDetailsCard-Types';
import type { IconLinkCardData } from '$lib/pages/IconLinkCard/IconLinkCard-Types';
import type { StatusLegendItem } from '$lib/pages/StatusLegend/StatusLegend-Types';
import type { StepListItem } from '$lib/pages/StepList/StepList-Types';

const quickLinkIds = [
	'search',
	'species',
	'classes',
	'rules--movement',
	'rules--fighting',
	'monsters',
	'locations'
] as const;

type QuickLinkId = (typeof quickLinkIds)[number];

const quickLinkPresentation: Record<
	QuickLinkId,
	Pick<IconLinkCardData, 'icon' | 'color' | 'iconSize'>
> = {
	search: {
		icon: 'iconsList.util.search',
		color: 'var(--accent)',
		iconSize: '8rem'
	},
	species: {
		icon: 'iconsList.entity.person',
		color: 'var(--party-i8)',
		iconSize: '8.5rem'
	},
	classes: {
		icon: 'iconsList.game.character',
		color: 'var(--party-i7)',
		iconSize: '8.5rem'
	},
	'rules--movement': {
		icon: 'iconsList.movement.walking',
		color: 'var(--allowed)',
		iconSize: '8.5rem'
	},
	'rules--fighting': {
		icon: 'iconsList.game.combat',
		color: 'var(--banned)',
		iconSize: '8.5rem'
	},
	monsters: {
		icon: 'iconsList.game.monster',
		color: 'var(--limited)',
		iconSize: '9rem'
	},
	locations: {
		icon: 'iconsList.entity.location',
		color: 'var(--approval)',
		iconSize: '8.5rem'
	}
};

export const quickLinks: IconLinkCardData[] = quickLinkIds.map((pageId) => {
	const page = getPageEntry(pageId);

	if (!page) {
		throw new Error(`Home quick link references unknown page: ${pageId}`);
	}

	return {
		title: page.title,
		href: page.href,
		description: page.description ?? '',
		eyebrow: 'Wiki section',
		actionLabel: 'Open page',
		...quickLinkPresentation[pageId]
	};
});

export const wikiSteps: StepListItem[] = [
	{
		icon: 'iconsList.game.party',
		title: 'Select your campaign',
		description:
			'Rules, available character options, and exceptions can differ between parties.',
		href: '/preferences'
	},
	{
		icon: 'iconsList.game.source-book',
		title: 'Check the page information',
		description:
			'Each page identifies its tags, source material, and campaign availability.',
		href: '/sources'
	},
	{
		icon: 'iconsList.util.search',
		title: 'Search for a subject',
		description:
			'Use search to find classes, species, rules, monsters, locations, and other references.',
		href: '/search'
	}
];

export const availabilityStatuses: StatusLegendItem[] = [
	{
		icon: 'iconsList.util.tick',
		title: 'Allowed',
		description: 'Can be used normally in the listed campaign.',
		color: 'var(--allowed)',
		background: 'var(--allowed-soft)'
	},
	{
		icon: 'iconsList.attribute.penalty',
		title: 'Limited',
		description: 'Can be used with restrictions or specific conditions.',
		color: 'var(--limited)',
		background: 'var(--limited-soft)'
	},
	{
		icon: 'iconsList.util.cross',
		title: 'Banned',
		description: 'Cannot be selected in the listed campaign.',
		color: 'var(--banned)',
		background: 'var(--banned-soft)'
	},
	{
		icon: 'iconsList.attribute.test',
		title: 'Approval',
		description: 'Discuss the option with the Dungeon Master first.',
		color: 'var(--approval)',
		background: 'var(--approval-soft)'
	}
];

export const partyCards: AccentDetailsCardData[] = getSortedParties().map((party) => ({
	title: getPartyDisplayName(party),
	accentColor: `var(${party.colors.basic})`,
	softColor: `var(${party.colors.soft})`,
	details: [
		{
			label: 'Dungeon Master',
			value: getDungeonMasterForParty(party).name
		},
		{
			label: 'Members',
			value: getPartyMemberSummary(party)
		}
	]
}));

export const guestPlayers = getGuestPlayers().map((person) => person.name);

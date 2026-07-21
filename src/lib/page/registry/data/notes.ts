// site\src\lib\page\registry\data\notes.ts
import type { PageRegistryEntry } from '../Registry-Types';

export const notesPages: PageRegistryEntry[] = [
	{
		id: 'notes',
		title: 'Notes',
		href: '/notes',
		description: 'Campaign notes, session records and one-shot references.',
		eyebrow: 'Game Notes',
		kind: 'notes',
		navigation: false,
		searchable: true
	},

	{
		id: 'notes-campaigns',
		title: 'Campaigns',
		href: '/notes/campaigns',
		description: 'Ongoing campaign notes organized by party and session.',
		eyebrow: 'Notes',
		kind: 'collection',
		parentId: 'notes',
		navigation: true,
		searchable: true,
		icon: 'game.campaign'
	},
	{
		id: 'notes-campaigns-party-1',
		title: 'Party 1',
		href: '/notes/campaigns/party-1',
		description: 'Session notes for Party 1.',
		eyebrow: 'Campaign',
		kind: 'campaign',
		parentId: 'notes-campaigns',
		navigation: true,
		searchable: true,
		icon: 'game.campaign'
	},
	{
		id: 'notes-campaigns-party-1-session-1',
		title: 'Session 1',
		href: '/notes/campaigns/party-1/session-1',
		eyebrow: 'Party 1 Session',
		kind: 'session',
		parentId: 'notes-campaigns-party-1',
		navigation: true,
		searchable: true
	},
	{
		id: 'notes-campaigns-party-1-session-2',
		title: 'Session 2',
		href: '/notes/campaigns/party-1/session-2',
		eyebrow: 'Party 1 Session',
		kind: 'session',
		parentId: 'notes-campaigns-party-1',
		navigation: true,
		searchable: true
	},
	{
		id: 'notes-campaigns-party-1-session-3',
		title: 'Session 3',
		href: '/notes/campaigns/party-1/session-3',
		eyebrow: 'Party 1 Session',
		kind: 'session',
		parentId: 'notes-campaigns-party-1',
		navigation: true,
		searchable: true
	},

	{
		id: 'notes-one-shots',
		title: 'One-shots',
		href: '/notes/one-shots',
		description: 'Notes from completed and ongoing one-shot adventures.',
		eyebrow: 'Notes',
		kind: 'collection',
		parentId: 'notes',
		navigation: true,
		searchable: true
	},
	{
		id: 'notes-one-shots-homebrew-test-07-20',
		title: 'Homebrew Test One-shot 07-20',
		href: '/notes/one-shots/homebrew-test-07-20',
		description: 'Direct notes for the homebrew test one-shot.',
		eyebrow: 'One-shot',
		kind: 'one-shot',
		parentId: 'notes-one-shots',
		navigation: true,
		searchable: true,
		icon: 'attribute.test'
	},
	{
		id: 'notes-one-shots-cyberpunk',
		title: 'Cyberpunk',
		href: '/notes/one-shots/cyberpunk',
		description: 'Cyberpunk one-shot notes organized by part.',
		eyebrow: 'One-shot',
		kind: 'one-shot',
		parentId: 'notes-one-shots',
		navigation: true,
		searchable: true,
		icon: 'game.campaign'
	},
	{
		id: 'notes-one-shots-cyberpunk-part-1',
		title: 'Part 1',
		href: '/notes/one-shots/cyberpunk/part-1',
		eyebrow: 'Cyberpunk',
		kind: 'session',
		parentId: 'notes-one-shots-cyberpunk',
		navigation: true,
		searchable: true
	},
	{
		id: 'notes-one-shots-cyberpunk-part-2',
		title: 'Part 2',
		href: '/notes/one-shots/cyberpunk/part-2',
		eyebrow: 'Cyberpunk',
		kind: 'session',
		parentId: 'notes-one-shots-cyberpunk',
		navigation: true,
		searchable: true
	}
];
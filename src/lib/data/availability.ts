// import { isPartyId, selectAllParties, selectParties, type PartyId } from '../config/campaigns.js';
// import { getWikiPageByHref } from '../wiki/registry.js';

// export type PageAvailability = {
// 	allowed?: readonly PartyId[];
// 	limited?: readonly PartyId[];
// 	banned?: readonly PartyId[];
// 	approval?: readonly PartyId[];
// };

// export type AvailabilityNode = PageAvailability & {
// 	children?: AvailabilityBranch;
// };

// export type AvailabilityBranch = Record<string, AvailabilityNode>;

// export type AvailabilityConfig = Record<string, AvailabilityBranch>;

// export type AvailabilityStatus = keyof PageAvailability;

// export type AvailabilityInventoryEntry = {
// 	href: string;
// 	allowed: readonly PartyId[];
// 	limited: readonly PartyId[];
// 	banned: readonly PartyId[];
// 	approval: readonly PartyId[];
// };

// const availabilityStatuses = ['allowed', 'limited', 'banned', 'approval'] as const;

// function selectMainCampaignParties(): PartyId[] {
// 	return selectParties('i1', 'i2', 'i3', 'i4', 'i5', 'i6');
// }

// export const availability: AvailabilityConfig = {
// 	species: {
// 		elf: {
// 			allowed: selectParties('i1', 'i2', 'i4', 'i5', 'i6', 'i7', 'i8'),
// 			banned: selectParties('i3'),

// 			children: {
// 				'astral-elf': {
// 					limited: selectParties('i1'),
// 					banned: selectParties('i3', 'i4'),
// 					approval: selectParties('i2')
// 				}
// 			}
// 		},
// 	},

// 	classes: {
// 		artificer: {
// 			allowed: selectAllParties()
// 		},
// 		barbarian: {
// 			allowed: selectAllParties()
// 		},
// 		bard: {
// 			allowed: selectAllParties()
// 		},
// 		cleric: {
// 			allowed: selectAllParties(),

// 			children: {
// 				'life-domain': {
// 					allowed: selectAllParties()
// 				},
// 				'death-domain': {
// 					allowed: selectAllParties()
// 				}
// 			}
// 		},
// 		druid: {
// 			allowed: selectAllParties()
// 		},
// 		fighter: {
// 			allowed: selectAllParties()
// 		},
// 		monk: {
// 			allowed: selectAllParties()
// 		},
// 		paladin: {
// 			allowed: selectAllParties()
// 		},
// 		ranger: {
// 			allowed: selectAllParties()
// 		},
// 		rogue: {
// 			allowed: selectAllParties(),

// 			children: {
// 				'arcane-trickster': {
// 					allowed: selectMainCampaignParties()
// 				}
// 			}
// 		},
// 		sorcerer: {
// 			allowed: selectAllParties()
// 		},
// 		warlock: {
// 			allowed: selectAllParties()
// 		},
// 		wizard: {
// 			allowed: selectAllParties()
// 		},
// 		gunslinger: {
// 			allowed: selectAllParties()
// 		},
// 		'monster-hunter': {
// 			allowed: selectAllParties()
// 		},
// 		pugilist: {
// 			allowed: selectAllParties()
// 		},
// 		captain: {
// 			allowed: selectAllParties()
// 		},
// 		champion: {
// 			allowed: selectAllParties()
// 		},
// 		messenger: {
// 			allowed: selectAllParties()
// 		},
// 		scholar: {
// 			allowed: selectAllParties()
// 		},
// 		'treasure-hunter': {
// 			allowed: selectAllParties()
// 		},
// 		warden: {
// 			allowed: selectAllParties()
// 		},
// 		illrigger: {
// 			allowed: selectAllParties()
// 		},
// 		'blood-hunter': {
// 			allowed: selectAllParties()
// 		},
// 		vampyr: {
// 			banned: selectMainCampaignParties()
// 		},
// 		mournbound: {
// 			banned: selectMainCampaignParties()
// 		}
// 	}
// };

// export function normalizeAvailabilityHref(href: string): string {
// 	const cleanHref = href
// 		.split('?')[0]
// 		.split('#')[0]
// 		.trim();

// 	const normalizedHref = `/${cleanHref}`
// 		.replace(/\/+/g, '/')
// 		.replace(/\/+$/, '');

// 	const canonicalPage = getWikiPageByHref(normalizedHref || '/');

// 	return canonicalPage?.href ?? (normalizedHref || '/');
// }

// function getAvailabilityNode(
// 	branch: AvailabilityBranch | undefined,
// 	segments: string[]
// ): AvailabilityNode | undefined {
// 	const [segment, ...childSegments] = segments;

// 	if (!branch || !segment) {
// 		return undefined;
// 	}

// 	const node = branch[segment];

// 	if (!node) {
// 		return undefined;
// 	}

// 	if (childSegments.length === 0) {
// 		return node;
// 	}

// 	return getAvailabilityNode(node.children, childSegments);
// }

// function getPageAvailabilityFromNode(
// 	node: AvailabilityNode | undefined
// ): PageAvailability {
// 	if (!node) {
// 		return {};
// 	}

// 	return createPageAvailability({
// 		allowed: node.allowed,
// 		limited: node.limited,
// 		banned: node.banned,
// 		approval: node.approval
// 	});
// }

// export function getAvailabilityByHref(
// 	href: string | undefined
// ): PageAvailability {
// 	if (!href) {
// 		return {};
// 	}

// 	const normalizedHref = normalizeAvailabilityHref(href);

// 	const pathSegments = normalizedHref
// 		.replace(/^\/+|\/+$/g, '')
// 		.split('/')
// 		.filter(Boolean);

// 	const [section, ...pageSegments] = pathSegments;

// 	if (!section || pageSegments.length === 0) {
// 		return {};
// 	}

// 	const availabilityNode = getAvailabilityNode(availability[section], pageSegments);

// 	return getPageAvailabilityFromNode(availabilityNode);
// }

// function createPageAvailability(availabilityConfig: PageAvailability): PageAvailability {
// 	const pageAvailability: PageAvailability = {};

// 	if (availabilityConfig.allowed !== undefined) {
// 		pageAvailability.allowed = [...availabilityConfig.allowed];
// 	}

// 	if (availabilityConfig.limited !== undefined) {
// 		pageAvailability.limited = [...availabilityConfig.limited];
// 	}

// 	if (availabilityConfig.banned !== undefined) {
// 		pageAvailability.banned = [...availabilityConfig.banned];
// 	}

// 	if (availabilityConfig.approval !== undefined) {
// 		pageAvailability.approval = [...availabilityConfig.approval];
// 	}

// 	return pageAvailability;
// }

// export function getAvailabilityInventory(
// 	config: AvailabilityConfig = availability
// ): AvailabilityInventoryEntry[] {
// 	const entries: AvailabilityInventoryEntry[] = [];

// 	for (const [section, branch] of Object.entries(config)) {
// 		collectAvailabilityEntries(entries, `/${section}`, branch);
// 	}

// 	return entries;
// }

// export function validateAvailabilityConfig(config: AvailabilityConfig = availability): void {
// 	const seenHrefs = new Set<string>();

// 	for (const entry of getAvailabilityInventory(config)) {
// 		if (seenHrefs.has(entry.href)) {
// 			throw new Error(`Duplicate availability href: ${entry.href}.`);
// 		}

// 		seenHrefs.add(entry.href);

// 		const wikiPage = getWikiPageByHref(entry.href);

// 		if (!wikiPage) {
// 			throw new Error(`Availability entry references unknown Wiki href: ${entry.href}.`);
// 		}

// 		if (wikiPage.kind === 'collection') {
// 			throw new Error(`Availability entry references collection page: ${entry.href}.`);
// 		}

// 		validateStatusArrays(entry);
// 	}
// }

// function collectAvailabilityEntries(
// 	entries: AvailabilityInventoryEntry[],
// 	parentHref: string,
// 	branch: AvailabilityBranch | undefined
// ) {
// 	if (!branch) {
// 		return;
// 	}

// 	for (const [segment, node] of Object.entries(branch)) {
// 		if (!node || typeof node !== 'object' || Array.isArray(node)) {
// 			throw new Error(`Invalid availability node at ${parentHref}/${segment}.`);
// 		}

// 		const childHref = normalizeAvailabilityHref(`${parentHref}/${segment}`);
// 		const pageAvailability = getPageAvailabilityFromNode(node);
// 		const hasAvailability = availabilityStatuses.some(
// 			(status) => pageAvailability[status] !== undefined
// 		);
// 		const hasChildren = Object.keys(node.children ?? {}).length > 0;

// 		if (!hasAvailability && !hasChildren) {
// 			throw new Error(`Empty availability node at ${childHref}.`);
// 		}

// 		if (childHref !== `/${`${parentHref}/${segment}`.replace(/^\/+/, '')}`.replace(/\/+/g, '/')) {
// 			throw new Error(`Availability path normalizes to a different href: ${parentHref}/${segment}.`);
// 		}

// 		if (hasAvailability) {
// 			entries.push({
// 				href: childHref,
// 				allowed: pageAvailability.allowed ?? [],
// 				limited: pageAvailability.limited ?? [],
// 				banned: pageAvailability.banned ?? [],
// 				approval: pageAvailability.approval ?? []
// 			});
// 		}

// 		collectAvailabilityEntries(entries, childHref, node.children);
// 	}
// }

// function validateStatusArrays(entry: AvailabilityInventoryEntry) {
// 	const seenStatusesByParty = new Map<PartyId, AvailabilityStatus>();

// 	for (const status of availabilityStatuses) {
// 		const partyIds = entry[status];
// 		const seenPartyIds = new Set<PartyId>();

// 		for (const partyId of partyIds) {
// 			if (!isPartyId(partyId)) {
// 				throw new Error(`Availability entry ${entry.href} references unknown Party ${partyId}.`);
// 			}

// 			if (seenPartyIds.has(partyId)) {
// 				throw new Error(`Availability entry ${entry.href} repeats Party ${partyId} in ${status}.`);
// 			}

// 			const previousStatus = seenStatusesByParty.get(partyId);

// 			if (previousStatus) {
// 				throw new Error(
// 					`Availability entry ${entry.href} puts Party ${partyId} in both ${previousStatus} and ${status}.`
// 				);
// 			}

// 			seenPartyIds.add(partyId);
// 			seenStatusesByParty.set(partyId, status);
// 		}
// 	}
// }

// validateAvailabilityConfig();

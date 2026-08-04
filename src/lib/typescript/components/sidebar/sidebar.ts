/*  
    Location: src/lib/typescript/components/sidebar/sidebar.ts
    use:
*/

import {
	data,
	getData,
	type LinkData,
	type LinkPath
} from '$lib/typescript/data/_index_';

import type {
	SidebarDataType,
	SidebarNode,
	SidebarSection
} from './sidebar-types';

const sidebarSectionConfig = [
	{
		title: 'Browse Wiki',
		roots: ['internals.utility.search']
	},
	{
		title: 'Wiki Pages',
		roots: [
			'internals.species.page',
			'internals.classes.page',
			'internals.spells.page',
			'internals.rules.page',
			'internals.monsters.page',
			'internals.locations.page'
		]
	},
	{
		title: 'Community',
		roots: [
			'internals.community.discord.page',
			'internals.community.issues',
			'internals.community.roadmap'
		]
	},
	{
		title: 'Project',
		roots: [
			'internals.project.sources',
			'internals.project.credits',
			'internals.project.about',
			'internals.project.aiTransparency',
			'internals.project.changelog'
		]
	}
] as const satisfies readonly {
	title: string;
	roots: readonly LinkPath[];
}[];

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasStringProperty<
	T extends Readonly<Record<string, unknown>>,
	K extends string
>(value: T, key: K): value is T & Readonly<Record<K, string>> {
	return typeof value[key] === 'string';
}

function isLinkData(value: unknown): value is LinkData {
	if (!isRecord(value)) {
		return false;
	}

	if (
		!hasStringProperty(value, 'href') ||
		typeof value.external !== 'boolean' ||
		!hasStringProperty(value, 'title') ||
		!hasStringProperty(value, 'subTitle') ||
		!hasStringProperty(value, 'description') ||
		!isRecord(value.img)
	) {
		return false;
	}

	return (
		hasStringProperty(value.img, 'href') &&
		hasStringProperty(value.img, 'alt')
	);
}

function getValue(path: string): unknown {
	return path
		.split('.')
		.reduce<unknown>((current, key) => {
			if (!isRecord(current)) {
				return undefined;
			}

			return current[key];
		}, data);
}

function toLinkPath(path: string, value: unknown): LinkPath {
	if (!isLinkData(value)) {
		throw new Error(`Sidebar path "${path}" does not resolve to link data.`);
	}

	return path as LinkPath;
}

function getContainerPath(path: LinkPath): string {
	return path.endsWith('.page') ? path.slice(0, -'.page'.length) : path;
}

function getNavigationLabel(link: LinkData): string | undefined {
	if (!('navigation' in link) || !isRecord(link.navigation)) {
		return undefined;
	}

	return hasStringProperty(link.navigation, 'label')
		? link.navigation.label
		: undefined;
}

function isNavigationHidden(link: LinkData): boolean {
	if (!('navigation' in link) || !isRecord(link.navigation)) {
		return false;
	}

	return 'hidden' in link.navigation && link.navigation.hidden === true;
}

function getDisplayTitle(title: string): string {
	return title
		.replace(/^D&D Portal Wiki\s+-\s+/i, '')
		.replace(/^D&D Portal\s+-\s+/i, '');
}

export function getSidebarLabel(path: LinkPath): string {
	const link = getData(path);

	return getNavigationLabel(link) ?? getDisplayTitle(link.title);
}

function sortNodes(nodes: readonly SidebarNode[]): readonly SidebarNode[] {
	return [...nodes].sort((a, b) =>
		getSidebarLabel(a.path).localeCompare(getSidebarLabel(b.path), 'en', {
			sensitivity: 'base'
		})
	);
}

function discoverChildNodes(containerPath: string): readonly SidebarNode[] {
	const container = getValue(containerPath);

	if (!isRecord(container)) {
		return [];
	}

	const children = Object.entries(container).flatMap<SidebarNode>(
		([key, value]) => {
			if (
				key === 'page' ||
				key === 'img' ||
				key === 'images' ||
				key === 'tags' ||
				key === 'navigation'
			) {
				return [];
			}

			const childPath = `${containerPath}.${key}`;

			if (isLinkData(value)) {
				if (isNavigationHidden(value)) {
					return [];
				}

				return [
					{
						path: toLinkPath(childPath, value),
						children: []
					}
				];
			}

			if (!isRecord(value)) {
				return [];
			}

			if (isLinkData(value.page)) {
				if (isNavigationHidden(value.page)) {
					return [];
				}

				const pagePath = toLinkPath(`${childPath}.page`, value.page);

				return [
					{
						path: pagePath,
						children: discoverChildNodes(childPath)
					}
				];
			}

			return [...discoverChildNodes(childPath)];
		}
	);

	return sortNodes(children);
}

function createSidebarNode(path: LinkPath): SidebarNode {
	return {
		path,
		children: discoverChildNodes(getContainerPath(path))
	};
}

function createSidebarSection(
	section: (typeof sidebarSectionConfig)[number]
): SidebarSection {
	return {
		title: section.title,
		roots: section.roots.map(createSidebarNode)
	};
}

export const sidebarData: SidebarDataType = {
	sections: sidebarSectionConfig.map(createSidebarSection)
};

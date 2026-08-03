/*
	Location: src/lib/typescript/data/internals/classes/_basic-class.ts
	Use: Shared builder for compact, data-driven class pages.
*/

import { createInternalPage } from '../_helpers_';
import type {
	EquipmentChoiceGroup,
	InlineContent,
	InlineContentBlock,
	InlineContentNode,
	PageContentSection,
	PageTableOfContentsSection,
	ProgressionData,
	ProgressionFeature
} from '$lib/typescript/pages/content-types';

type ClassFeatureConfig = {
	readonly level: number;
	readonly title: string;
	readonly description: InlineContent;
};

type BasicClassConfig = {
	readonly name: string;
	readonly slug: string;
	readonly role: string;
	readonly source?: string;
	readonly primaryAbility: InlineContent;
	readonly hitDie: string;
	readonly armor: InlineContent;
	readonly weapons: InlineContent;
	readonly tools: InlineContent;
	readonly savingThrows: InlineContent;
	readonly skills: InlineContent;
	readonly description: string;
	readonly longDescription: InlineContentBlock;
	readonly startingEquipment?: readonly EquipmentChoiceGroup[];
	readonly features: readonly ClassFeatureConfig[];
	readonly tags?: readonly string[];
	readonly hasImages?: boolean;
};

const pageIcon = {
	href: '/icons/white/game/character.svg',
	alt: 'A stylized character icon representing a playable class.'
} as const;

export const text = (value: string): InlineContentNode => ({
	type: 'text',
	text: value
});

export const link = (
	path: string,
	label: string
): InlineContentNode => ({
	type: 'link',
	path,
	label
});

function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function createImages(slug: string, name: string, hasImages: boolean) {
	if (!hasImages) {
		return undefined;
	}

	const imageBaseUrl = `/images/classes/${slug}`;
	const createImage = (gender: 'female' | 'male') => ({
		alt: `A ${gender} ${name} class portrait.`,
		position: 'right top',
		sources: {
			s: `${imageBaseUrl}/card-${gender}-s.webp`,
			m: `${imageBaseUrl}/card-${gender}-m.webp`,
			l: `${imageBaseUrl}/card-${gender}-l.webp`
		}
	});

	return {
		card: {
			female: createImage('female'),
			male: createImage('male')
		},
		header: {
			female: createImage('female'),
			male: createImage('male')
		}
	};
}

function paragraph(content: InlineContent): PageContentSection['blocks'][number] {
	return {
		type: 'paragraph',
		content
	};
}

function createProgression(
	name: string,
	features: readonly ClassFeatureConfig[]
): ProgressionData<string> {
	const featuresByLevel = new Map<number, ProgressionFeature<string>[]>();

	for (const feature of features) {
		const levelFeatures = featuresByLevel.get(feature.level) ?? [];
		levelFeatures.push({
			label: feature.title,
			sectionId: slugify(feature.title)
		});
		featuresByLevel.set(feature.level, levelFeatures);
	}

	for (const level of [4, 8, 12, 16, 19]) {
		const levelFeatures = featuresByLevel.get(level) ?? [];

		if (!levelFeatures.some((feature) => feature.label === 'Ability Score Improvement')) {
			levelFeatures.push({
				label: 'Ability Score Improvement',
				path: 'internals.rules.abbreviations.asi'
			});
			featuresByLevel.set(level, levelFeatures);
		}
	}

	return {
		title: `${name} progression`,
		heading: `${name} Progression`,
		columns: [
			{
				key: 'level',
				label: 'Level',
				format: 'ordinal'
			},
			{
				key: 'proficiencyBonus',
				label: 'Prof.',
				path: 'internals.rules.abbreviations.pb',
				format: 'signed'
			},
			{
				key: 'features',
				label: 'Features'
			}
		],
		rows: Array.from({ length: 20 }, (_, index) => {
			const level = index + 1;

			return {
				level,
				proficiencyBonus: 2 + Math.floor((level - 1) / 4),
				features: featuresByLevel.get(level) ?? [
					{
						label: '-',
						sectionId: ''
					}
				],
				values: {}
			};
		})
	};
}

function createFeatureSections(
	features: readonly ClassFeatureConfig[]
): readonly PageContentSection[] {
	return features.map((feature) => ({
		id: slugify(feature.title),
		title: feature.title,
		subtitle: `Level ${feature.level}`,
		blocks: [paragraph(feature.description)]
	}));
}

function createTableOfContents(
	name: string,
	features: readonly ClassFeatureConfig[]
): readonly PageTableOfContentsSection[] {
	return [
		{
			id: 'class-overview',
			title: 'Class Overview'
		},
		{
			id: 'core-class-traits',
			title: 'Core Class Traits'
		},
		{
			id: 'starting-equipment',
			title: 'Starting Equipment'
		},
		{
			id: 'progression',
			title: `${name} Progression`
		},
		{
			id: 'class-features',
			title: 'Class Features',
			children: features.map((feature) => ({
				id: slugify(feature.title),
				title: feature.title
			}))
		},
		{
			id: 'subclasses',
			title: 'Subclasses'
		}
	];
}

export function createBasicClass(config: BasicClassConfig) {
	const featureSections = createFeatureSections(config.features);

	return {
		page: createInternalPage({
			href: `/classes/${config.slug}`,
			img: pageIcon,
			images: createImages(config.slug, config.name, config.hasImages ?? true),
			label: config.name,
			title: `D&D Portal - ${config.name}`,
			subTitle: config.role,
			description: config.description,
			descriptions: {
				short: config.description,
				medium: config.description,
				long: config.longDescription
			},
			navigation: {
				parent: 'internals.classes.page'
			},
			tags: [
				config.slug,
				'class',
				...(config.tags ?? [])
			]
		}),

		content: {
			startingEquipment: config.startingEquipment ?? [
				{
					label: 'Data missing',
					items: [
						[
							text(
								'Starting equipment data has not been added for this class yet.'
							)
						]
					]
				}
			],
			progression: createProgression(config.name, config.features),
			sections: {
				identity: {
					id: 'class-overview',
					title: 'Class Overview',
					blocks: [
						{
							type: 'table',
							caption: 'Class overview',
							showCaption: true,
							columns: {
								label: 'Property',
								value: 'Value'
							},
							rows: [
								{
									label: 'Role',
									value: [text(config.role)]
								},
								{
									label: 'Primary ability',
									value: config.primaryAbility
								},
								...(config.source
									? [
											{
												label: 'Source',
												value: [text(config.source)]
											}
										]
									: [])
							]
						}
					]
				},
				coreTraits: {
					id: 'core-class-traits',
					title: 'Core Class Traits',
					blocks: [
						{
							type: 'table',
							caption: 'Core class traits',
							showCaption: true,
							columns: {
								label: 'Property',
								value: 'Value'
							},
							rows: [
								{
									label: 'Hit Die',
									value: [text(config.hitDie)]
								},
								{
									label: 'Armor',
									value: config.armor
								},
								{
									label: 'Weapons',
									value: config.weapons
								},
								{
									label: 'Tools',
									value: config.tools
								},
								{
									label: 'Saving Throws',
									value: config.savingThrows
								},
								{
									label: 'Skills',
									value: config.skills
								}
							]
						}
					]
				},
				classFeaturesOverview: {
					id: 'class-features',
					title: 'Class Features',
					blocks: [
						paragraph([
							text(`As a ${config.name.toLowerCase()}, you gain the following class features.`)
						])
					]
				},
				featureSections,
				subclasses: {
					id: 'subclasses',
					title: 'Subclasses',
					blocks: [
						paragraph([
							text(
								'Subclass pages for this class can be added here when their central data is available.'
							)
						])
					]
				}
			},
			tableOfContents: createTableOfContents(config.name, config.features)
		}
	} as const;
}

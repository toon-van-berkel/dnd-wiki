import type { IconReference } from '$lib/components/Icon/Icon-Types';
import type { PageId } from '$lib/page/registry';

export type ChakrabornSummaryRow = {
	label: string;
	value: string;
	icon: IconReference;
};

export type ChakrabornTrait = {
	id: string;
	title: string;
	icon: IconReference;
};

export const chakrabornSummaryRows = [
	{ label: 'Creature Type', value: 'Humanoid', icon: 'monster.humanoid' },
	{ label: 'Size', value: 'Medium', icon: 'entity.person' },
	{ label: 'Speed', value: '30 feet', icon: 'movement.walking' },
	{ label: 'Ability Scores', value: 'Dexterity +2 and Wisdom +1', icon: 'attribute.bonus' },
	{
		label: 'Primary Themes',
		value: 'Chakra awareness, acrobatic movement and improbable fortune',
		icon: 'game.spell'
	}
] satisfies ChakrabornSummaryRow[];

export const chakrabornRecommendedClassIds = [
	'classes--shinobi',
	'classes--monk',
	'classes--rogue',
	'classes--ranger',
	'classes--fighter',
	'classes--cleric'
] satisfies PageId[];

export const chakrabornTraitHeadings = [
	{ id: 'ability-score-increase', title: 'Ability Score Increase', icon: 'attribute.bonus' },
	{ id: 'creature-type', title: 'Creature Type', icon: 'monster.humanoid' },
	{ id: 'age', title: 'Age', icon: 'entity.time' },
	{ id: 'size', title: 'Size', icon: 'entity.person' },
	{ id: 'speed', title: 'Speed', icon: 'movement.walking' },
	{ id: 'instinctive-training', title: 'Instinctive Training', icon: 'proficiency.proficient' },
	{ id: 'chakra-tuned-movement', title: 'Chakra-Tuned Movement', icon: 'movement.walking' },
	{ id: 'chakra-sense', title: 'Chakra Sense', icon: 'util.eye' },
	{ id: 'thread-of-fate', title: 'Thread of Fate', icon: 'dice.d4' },
	{ id: 'languages', title: 'Languages', icon: 'game.social' }
] satisfies ChakrabornTrait[];

export const instinctiveTrainingSkillChoices = [
	{ label: 'Acrobatics', icon: 'skill.acrobatics' },
	{ label: 'Insight', icon: 'skill.insight' },
	{ label: 'Perception', icon: 'skill.perception' },
	{ label: 'Stealth', icon: 'skill.stealth' }
] satisfies { label: string; icon: IconReference }[];

export const appearanceCharacteristics = [
	'Eyes that glow faintly while concentrating',
	'Temporary markings that appear when chakra is used',
	'Hair that shifts as though moved by an unseen current',
	'Unusually warm or cool skin',
	'A quiet vibration or pressure detectable by sensitive creatures',
	'Small disturbances in dust, water, leaves or loose fabric',
	'A visible pulse of energy during moments of extreme emotion'
] as const;

export const shinobiDoesNotGrant = [
	'Chakra Points',
	'Shinobi Techniques',
	'A Chakra Nature',
	'A Rare Chakra Heritage',
	'Fortune Dice',
	'A Shinobi Path'
] as const;

export const chakrabornActionPageIds = [
	'classes--shinobi',
	'spells-and-abilities--techniques'
] satisfies PageId[];

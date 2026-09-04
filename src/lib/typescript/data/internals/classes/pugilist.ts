import {
	createBasicClass,
	link,
	text
} from './_basic-class';
import { createInternalPage } from '../_helpers_';
import type {
	InlineContent,
	InlineContentNode,
	PageContentSection,
	ProgressionData,
	ProgressionFeature
} from '$lib/typescript/pages/content-types';

const source = 'Pugilist Clean Edition';

const imageBaseUrl = '/images/classes/pugilist';
const images = {
	card: {
		female: {
			alt: 'A female Pugilist class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-female-s.webp`,
				m: `${imageBaseUrl}/card-female-m.webp`,
				l: `${imageBaseUrl}/card-female-l.webp`
			}
		},
		male: {
			alt: 'A male Pugilist class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-male-s.webp`,
				m: `${imageBaseUrl}/card-male-m.webp`,
				l: `${imageBaseUrl}/card-male-l.webp`
			}
		}
	},
	header: {
		female: {
			alt: 'A female Pugilist class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-female-s.webp`,
				m: `${imageBaseUrl}/card-female-m.webp`,
				l: `${imageBaseUrl}/card-female-l.webp`
			}
		},
		male: {
			alt: 'A male Pugilist class portrait.',
			position: 'right top',
			sources: {
				s: `${imageBaseUrl}/card-male-s.webp`,
				m: `${imageBaseUrl}/card-male-m.webp`,
				l: `${imageBaseUrl}/card-male-l.webp`
			}
		}
	}
} as const;

const pageIcon = {
	href: '/icons/white/game/character.svg',
	alt: 'A stylized character icon representing a pugilist.'
} as const;

const linkedTerms = [
	['Ability Score Improvement', 'internals.rules.abbreviations.asi'],
	['temporary hit points', 'internals.rules.combat.hitPoints'],
	['temporary hit point', 'internals.rules.combat.hitPoints'],
	['melee weapon attack', 'internals.rules.combat.meleeWeaponAttack'],
	['melee weapon attacks', 'internals.rules.combat.meleeWeaponAttack'],
	['melee weapon', 'internals.rules.combat.meleeAttack'],
	['attack rolls', 'internals.rules.combat.attackRoll'],
	['attack roll', 'internals.rules.combat.attackRoll'],
	['critical hit', 'internals.rules.combat.criticalHit'],
	['Attack action', 'internals.rules.actions.attackAction'],
	['bonus action', 'internals.rules.actions.bonusAction'],
	['opportunity attack', 'internals.rules.actions.reaction'],
	['reaction', 'internals.rules.actions.reaction'],
	['Dash action', 'internals.rules.actions.dash'],
	['Disengage', 'internals.rules.actions.disengage'],
	['Dodge', 'internals.rules.actions.dodge'],
	['Help', 'internals.rules.actions.help'],
	['ability checks', 'internals.rules.d20Tests.abilityCheck'],
	['ability check', 'internals.rules.d20Tests.abilityCheck'],
	['saving throws', 'internals.rules.d20Tests.savingThrow'],
	['saving throw', 'internals.rules.d20Tests.savingThrow'],
	['Strength', 'internals.rules.abilityScores.strength'],
	['Dexterity', 'internals.rules.abilityScores.dexterity'],
	['Constitution', 'internals.rules.abilityScores.constitution'],
	['Intelligence', 'internals.rules.abilityScores.intelligence'],
	['Wisdom', 'internals.rules.abilityScores.wisdom'],
	['Charisma', 'internals.rules.abilityScores.charisma'],
	['Acrobatics', 'internals.rules.skills.acrobatics'],
	['Animal Handling', 'internals.rules.skills.animalHandling'],
	['Athletics', 'internals.rules.skills.athletics'],
	['Deception', 'internals.rules.skills.deception'],
	['Insight', 'internals.rules.skills.insight'],
	['Intimidation', 'internals.rules.skills.intimidation'],
	['Investigation', 'internals.rules.skills.investigation'],
	['Perception', 'internals.rules.skills.perception'],
	['Performance', 'internals.rules.skills.performance'],
	['Persuasion', 'internals.rules.skills.persuasion'],
	['Sleight of Hand', 'internals.rules.skills.sleightOfHand'],
	['Stealth', 'internals.rules.skills.stealth'],
	['Survival', 'internals.rules.skills.survival'],
	['bludgeoning', 'internals.rules.damageTypes.bludgeoning'],
	['piercing', 'internals.rules.damageTypes.piercing'],
	['slashing', 'internals.rules.damageTypes.slashing'],
	['psychic', 'internals.rules.damageTypes.psychic'],
	['force', 'internals.rules.damageTypes.force'],
	['poison', 'internals.rules.damageTypes.poison'],
	['radiant', 'internals.rules.damageTypes.radiant'],
	['lightning', 'internals.rules.damageTypes.lightning'],
	['thunder', 'internals.rules.damageTypes.thunder'],
	['cold', 'internals.rules.damageTypes.cold'],
	['fire', 'internals.rules.damageTypes.fire'],
	['necrotic', 'internals.rules.damageTypes.necrotic'],
	['charmed', 'internals.rules.conditions.charmed'],
	['frightened', 'internals.rules.conditions.frightened'],
	['blinded', 'internals.rules.conditions.blinded'],
	['deafened', 'internals.rules.conditions.deafened'],
	['grappled', 'internals.rules.conditions.grappled'],
	['incapacitated', 'internals.rules.conditions.incapacitated'],
	['prone', 'internals.rules.conditions.prone'],
	['stunned', 'internals.rules.conditions.stunned'],
	['unconscious', 'internals.rules.conditions.unconscious'],
	['exhaustion', 'internals.rules.conditions.exhaustion'],
	['short rest', 'internals.rules.rests.shortRest'],
	['long rest', 'internals.rules.rests.longRest'],
	['speed', 'internals.rules.movement.speed'],
	['jump', 'internals.rules.movement.jumping'],
	['jumping', 'internals.rules.movement.jumping'],
	['light armor', 'internals.rules.equipment.lightArmor'],
	['simple weapon', 'internals.rules.equipment.simpleWeapons'],
	['simple weapons', 'internals.rules.equipment.simpleWeapons'],
	["explorer's pack", 'internals.equipment.explorersPack']
] as const;

function escapeRegExp(value: string) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function linkedInline(value: string): InlineContent {
	const matches = linkedTerms
		.flatMap(([label, path]) => {
			const pattern = new RegExp(`\\b${escapeRegExp(label)}\\b`, 'gi');
			return Array.from(value.matchAll(pattern)).map((match) => ({
				index: match.index ?? 0,
				label: match[0],
				path,
				length: match[0].length
			}));
		})
		.sort((a, b) => a.index - b.index || b.length - a.length);

	const filtered: typeof matches = [];
	let coveredUntil = -1;
	for (const match of matches) {
		if (match.index < coveredUntil) {
			continue;
		}
		filtered.push(match);
		coveredUntil = match.index + match.length;
	}

	const content: InlineContentNode[] = [];
	let cursor = 0;
	for (const match of filtered) {
		if (match.index > cursor) {
			content.push(text(value.slice(cursor, match.index)));
		}
		content.push(link(match.path, match.label));
		cursor = match.index + match.length;
	}
	if (cursor < value.length) {
		content.push(text(value.slice(cursor)));
	}

	return content.length ? content : [text(value)];
}

function paragraph(value: string): PageContentSection['blocks'][number] {
	return {
		type: 'paragraph',
		content: linkedInline(value)
	};
}

function list(items: readonly string[]): PageContentSection['blocks'][number] {
	return {
		type: 'list',
		items: items.map(linkedInline)
	};
}

function section(
	id: string,
	title: string,
	blocks: PageContentSection['blocks'],
	subtitle?: string
): PageContentSection {
	return {
		id,
		title,
		subtitle,
		blocks
	};
}

function feature(
	label: string,
	sectionId: string,
	path?: string
): ProgressionFeature<string> {
	return {
		label,
		sectionId,
		path
	};
}

export type PugilistEquipmentItem = {
	readonly name: string;
	readonly type: string;
	readonly rarity: string;
	readonly attunement: boolean;
	readonly description: InlineContent;
	readonly tags: readonly string[];
};

export type PugilistNpc = {
	readonly name: string;
	readonly challenge: string;
	readonly description: InlineContent;
};

export function createPugilistReferenceSlug(value: string): string {
	return value
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

const fisticuffs = 'fisticuffs';
const ironChin = 'iron-chin';
const moxie = 'moxie';
const streetSmart = 'street-smart';
const bloodiedButUnbowed = 'bloodied-but-unbowed';
const fightClub = 'fight-club';
const abilityScoreImprovement = 'ability-score-improvement';
const digDeep = 'dig-deep';
const extraAttack = 'extra-attack';
const haymaker = 'haymaker';
const moxieFueledFists = 'moxie-fueled-fists';
const fancyFootwork = 'fancy-footwork';
const shakeItOff = 'shake-it-off';
const downButNotOut = 'down-but-not-out';
const schoolOfHardKnocks = 'school-of-hard-knocks';
const rabbleRouser = 'rabble-rouser';
const unbreakable = 'unbreakable';
const herculean = 'herculean';
const fightingSpirit = 'fighting-spirit';
const peakPhysicalCondition = 'peak-physical-condition';

const pugilistProgression: ProgressionData<string> = {
	title: 'Pugilist progression',
	heading: 'Pugilist Progression',
	description:
		'Track Pugilist level, proficiency bonus, fisticuffs damage, moxie points, and class features.',
	columns: [
		{ key: 'level', label: 'Level', format: 'ordinal', width: '86px' },
		{
			key: 'proficiencyBonus',
			label: 'Prof.',
			path: 'internals.rules.abbreviations.pb',
			format: 'signed',
			width: '96px'
		},
		{ key: 'fisticuffs', label: 'Fisticuffs', width: '140px' },
		{ key: 'moxiePoints', label: 'Moxie Points', width: '118px' },
		{ key: 'features', label: 'Features', width: '48%' }
	],
	rows: [
		{ level: 1, proficiencyBonus: 2, features: [feature('Fisticuffs', fisticuffs), feature('Iron Chin', ironChin)], values: { fisticuffs: '1d6', moxiePoints: '-' } },
		{ level: 2, proficiencyBonus: 2, features: [feature('Moxie', moxie), feature('Street Smart', streetSmart)], values: { fisticuffs: '1d6', moxiePoints: 2 } },
		{ level: 3, proficiencyBonus: 2, features: [feature('Bloodied but Unbowed', bloodiedButUnbowed), feature('Fight Club', fightClub)], values: { fisticuffs: '1d6', moxiePoints: 2 } },
		{ level: 4, proficiencyBonus: 2, features: [feature('Ability Score Improvement', abilityScoreImprovement, 'internals.rules.abbreviations.asi'), feature('Dig Deep', digDeep)], values: { fisticuffs: '1d6', moxiePoints: 3 } },
		{ level: 5, proficiencyBonus: 3, features: [feature('Extra Attack', extraAttack), feature('Haymaker', haymaker)], values: { fisticuffs: '1d8', moxiePoints: 3 } },
		{ level: 6, proficiencyBonus: 3, features: [feature('Fight Club feature', fightClub), feature('Moxie-Fueled Fists', moxieFueledFists)], values: { fisticuffs: '1d8', moxiePoints: 4 } },
		{ level: 7, proficiencyBonus: 3, features: [feature('Fancy Footwork', fancyFootwork), feature('Shake It Off', shakeItOff)], values: { fisticuffs: '1d8', moxiePoints: 4 } },
		{ level: 8, proficiencyBonus: 3, features: [feature('Ability Score Improvement', abilityScoreImprovement, 'internals.rules.abbreviations.asi')], values: { fisticuffs: '1d8', moxiePoints: 5 } },
		{ level: 9, proficiencyBonus: 4, features: [feature('Down but Not Out', downButNotOut)], values: { fisticuffs: '1d8', moxiePoints: 5 } },
		{ level: 10, proficiencyBonus: 4, features: [feature('School of Hard Knocks', schoolOfHardKnocks)], values: { fisticuffs: '1d8', moxiePoints: 6 } },
		{ level: 11, proficiencyBonus: 4, features: [feature('Fight Club feature', fightClub)], values: { fisticuffs: '1d10', moxiePoints: 6 } },
		{ level: 12, proficiencyBonus: 4, features: [feature('Ability Score Improvement', abilityScoreImprovement, 'internals.rules.abbreviations.asi')], values: { fisticuffs: '1d10', moxiePoints: 7 } },
		{ level: 13, proficiencyBonus: 5, features: [feature('Rabble Rouser', rabbleRouser)], values: { fisticuffs: '1d10', moxiePoints: 7 } },
		{ level: 14, proficiencyBonus: 5, features: [feature('Unbreakable', unbreakable)], values: { fisticuffs: '1d10', moxiePoints: 8 } },
		{ level: 15, proficiencyBonus: 5, features: [feature('Herculean', herculean)], values: { fisticuffs: '1d10', moxiePoints: 8 } },
		{ level: 16, proficiencyBonus: 5, features: [feature('Ability Score Improvement', abilityScoreImprovement, 'internals.rules.abbreviations.asi')], values: { fisticuffs: '1d10', moxiePoints: 9 } },
		{ level: 17, proficiencyBonus: 6, features: [feature('Fight Club feature', fightClub)], values: { fisticuffs: '1d12', moxiePoints: 9 } },
		{ level: 18, proficiencyBonus: 6, features: [feature('Fighting Spirit', fightingSpirit)], values: { fisticuffs: '1d12', moxiePoints: 10 } },
		{ level: 19, proficiencyBonus: 6, features: [feature('Ability Score Improvement', abilityScoreImprovement, 'internals.rules.abbreviations.asi')], values: { fisticuffs: '1d12', moxiePoints: 10 } },
		{ level: 20, proficiencyBonus: 6, features: [feature('Peak Physical Condition', peakPhysicalCondition)], values: { fisticuffs: '1d12', moxiePoints: 12 } }
	]
};

const classFeatures = [
	section(fisticuffs, 'Fisticuffs', [
		paragraph('At 1st level, your years of fighting in back alleys and taverns have given you mastery over combat styles that use unarmed strikes and pugilist weapons, which are simple melee weapons without the two-handed property, whips, and improvised weapons. You may not use the finesse property of a weapon while using it as a pugilist weapon.'),
		paragraph('You gain the following benefits while you are unarmed or using only pugilist weapons and you are wearing light or no armor and not using a shield:'),
		list([
			'You can roll a d6 in place of the normal damage of your unarmed strike or pugilist weapon. This die changes as you gain pugilist levels, as shown in the Fisticuffs column on the Pugilist table.',
			'When you use the Attack action with an unarmed strike or a pugilist weapon on your turn, you can make one unarmed strike or grapple as a bonus action.'
		])
	], 'Level 1'),
	section(ironChin, 'Iron Chin', [
		paragraph('Beginning at 1st level, you can use Constitution instead of Dexterity to determine your armor class when you are wearing light or no armor and are not using a shield.')
	], 'Level 1'),
	section(moxie, 'Moxie', [
		paragraph('Starting at 2nd level, your experience laying the beatdown on others has given you a moxie you can channel in the midst of battle. This swagger is represented by a number of moxie points. Your pugilist level determines the maximum number of points you have, as shown in the Moxie Points column of the Pugilist table.'),
		paragraph('You can spend these points to fuel various moxie features. You start knowing three such features: Brace Up, The Old One-Two, and Stick and Move. You learn more moxie features as you gain levels in this class. You regain all expended moxie points when you complete a short or long rest.'),
		paragraph('Brace Up. You can use a bonus action and spend 1 moxie point to brace for attacks. Roll your fisticuffs die + your pugilist level + your Constitution modifier and gain that many temporary hit points.'),
		paragraph('The Old One-Two. Immediately after you take the Attack action on your turn, you can spend 1 moxie point to make two unarmed strikes as a bonus action.'),
		paragraph('Stick and Move. You can use a bonus action and expend 1 moxie point to make a shove attack or take the Dash action.')
	], 'Level 2'),
	section(streetSmart, 'Street Smart', [
		paragraph('Beginning at 2nd level, carousing, shadowboxing, and sparring all count as light activity for the purposes of resting for you. Additionally, once you have caroused in a settlement for 8 hours or more, you know all public locations in the city as if you were born and raised there and you cannot be lost by non-magical means while within the city.')
	], 'Level 2'),
	section(bloodiedButUnbowed, 'Bloodied But Unbowed', [
		paragraph('Starting at 3rd level, when you take damage that reduces you to half your maximum hit points or less, you can use your reaction to gain temporary hit points equal to your pugilist level + your Constitution modifier and you regain all expended moxie points. You cannot use this feature again until you finish a short or long rest.')
	], 'Level 3'),
	section(fightClub, 'Fight Club', [
		paragraph('Starting at 3rd level, you choose a fight club that best exemplifies your style: Arena Royale, Bloodhound Bruisers, Dog & Hound, Piss & Vinegar, the Squared Circle, or the Sweet Science. Your fight club grants you features at 3rd level and again at 6th, 11th, and 17th level.')
	], 'Level 3'),
	section(abilityScoreImprovement, 'Ability Score Improvement', [
		paragraph('When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you cannot increase an ability score above 20 using this feature.')
	], 'Level 4'),
	section(digDeep, 'Dig Deep', [
		paragraph('Starting at 4th level, you discover a strength inside you that cannot be broken. As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage for one minute. At the end of that minute you gain a level of exhaustion.')
	], 'Level 4'),
	section(extraAttack, 'Extra Attack', [
		paragraph('Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.')
	], 'Level 5'),
	section(haymaker, 'Haymaker', [
		paragraph('Starting at 5th level, before you make an attack roll with an unarmed strike or pugilist melee weapon attack that does not already have disadvantage, you can declare you are swinging wild haymakers. You make all attack rolls until the end of this turn with disadvantage and when you deal damage you do not roll, but use the maximum die result instead.')
	], 'Level 5'),
	section(moxieFueledFists, 'Moxie-Fueled Fists', [
		paragraph('Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to non-magical attacks and damage.')
	], 'Level 6'),
	section(fancyFootwork, 'Fancy Footwork', [
		paragraph('At 7th level, you gain proficiency in Dexterity saving throws.')
	], 'Level 7'),
	section(shakeItOff, 'Shake It Off', [
		paragraph('Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.')
	], 'Level 7'),
	section(downButNotOut, 'Down But Not Out', [
		paragraph('At 9th level, when you use your Bloodied But Unbowed feature you can choose to also use this feature. If you do, you add your proficiency bonus to your damage with unarmed attacks and pugilist weapons for the next minute. You can use this feature again after you complete a long rest.')
	], 'Level 9'),
	section(schoolOfHardKnocks, 'School of Hard Knocks', [
		paragraph('By 10th level, you have graduated top of the class at the school of hard knocks and you took most of them on the head. You have resistance to psychic damage and gain advantage on saving throws against effects that would make you stunned or unconscious.')
	], 'Level 10'),
	section(rabbleRouser, 'Rabble Rouser', [
		paragraph('Starting at 13th level, word of your exploits travels quickly in cities and other settlements. Once you have taken a long rest by carousing in a settlement, you gain advantage on all Charisma (Persuasion) and Charisma (Intimidation) rolls made against the people who live there.')
	], 'Level 13'),
	section(unbreakable, 'Unbreakable', [
		paragraph('Starting at 14th level, you gain advantage on Strength, Dexterity, and Constitution saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 moxie point to reroll it and take the second result.')
	], 'Level 14'),
	section(herculean, 'Herculean', [
		paragraph('At 15th level, your carrying capacity is doubled, and when you deal damage with a melee weapon or unarmed strike to an inanimate object that damage is doubled. Your standing jump distance is the same as your running start jump distance.')
	], 'Level 15'),
	section(fightingSpirit, 'Fighting Spirit', [
		paragraph('Starting at 18th level, when you have 4 levels of exhaustion or fewer and are reduced to 0 hit points, you regain half of your maximum hit points, half of your maximum moxie points, and gain a level of exhaustion. You cannot use this feature again until you finish a long rest.')
	], 'Level 18'),
	section(peakPhysicalCondition, 'Peak Physical Condition', [
		paragraph('At 20th level, your Strength and Constitution ability scores increase by 2 to a maximum of 22. Additionally, when you take a long rest you recover 2 levels of exhaustion instead of 1 and you regain all your expended hit dice instead of half your expended hit dice.')
	], 'Level 20')
] as const;

function subclassTable(rows: readonly [string, string][]): PageContentSection['blocks'][number] {
	return {
		type: 'table',
		caption: 'Fight club features',
		showCaption: true,
		columns: {
			label: 'Pugilist Level',
			value: 'Feature'
		},
		rows: rows.map(([label, value]) => ({
			label,
			value: linkedInline(value)
		}))
	};
}

function subclassContent(
	sourceLabel: string,
	featureSections: readonly PageContentSection[]
) {
	return {
		source: sourceLabel,
		featureSections,
		tableOfContents: featureSections.map(({ id, title }) => ({
			id,
			title
		}))
	};
}

function createFightClub(
	key: string,
	name: string,
	description: string,
	featureSections: readonly PageContentSection[]
) {
	return createInternalPage({
		href: `/classes/pugilist/${key}`,
		img: pageIcon,
		images,
		label: name,
		title: `D&D Portal - ${name}`,
		subTitle: 'Pugilist subclass',
		description,
		descriptions: {
			short: description,
			medium: description,
			long: [
				linkedInline(description),
				linkedInline(`${name} changes how a Pugilist spends moxie, survives pressure, and controls close-range fights.`),
				linkedInline('This page collects the fight club overview, feature progression, subclass features, and table-use notes from the Pugilist Clean Edition.')
			]
		},
		navigation: {
			parent: 'internals.classes.pugilist.page'
		},
		tags: ['pugilist', 'subclass', 'fight club', key],
		content: subclassContent(source, featureSections)
	});
}

const arenaRoyaleSections = [
	section('arena-royale-overview', 'Arena Royale', [
		paragraph('Pugilists in the Arena Royale fight club travel the world earning their keep as equal parts performer and gladiator. Whether performing in staged physical competitions, or fighting it out in unscripted brawls, pugilists in the Arena Royale care as much about the theatrics of a fight as they do its outcome. Pugilists in this fight club also care deeply about their reputation and work to build up local and regional legends about their performing personas.'),
		subclassTable([
			['3rd', 'Bonus Proficiency, Persona Libre'],
			['6th', 'Work the Crowd'],
			['11th', 'High Flyer'],
			['17th', 'Signature Move']
		])
	]),
	section('bonus-proficiency', 'Bonus Proficiency', [
		paragraph('Starting when you choose this Fight Club at 3rd level, you gain proficiency in the Performance skill, if you do not have it already. If you do, you gain proficiency in your choice of the Intimidation or Persuasion skill.')
	], 'Level 3'),
	section('persona-libre', 'Persona Libre', [
		paragraph('Also at 3rd level, you create an alternate persona that you can adopt or discard as a bonus action on your turn. When you create an alternate persona you should give the persona a striking name as well as some physical signifier, such as a mask, colorful cape, or another prominent idiosyncratic feature. Unless you tell a creature, or the creature sees you adopt your persona, they do not know you and the adopted persona are the same person.'),
		paragraph('Additionally, you have a pool of persona points equal to 3 + your Charisma modifier (minimum 1). When you use an ability that costs moxie points, you can spend persona points instead. In addition, before you make a Charisma ability check you can spend a persona point to add your Strength modifier to the result. You can only use persona points while you have adopted your persona. You regain all expended persona points when you finish a long rest.')
	], 'Level 3'),
	section('work-the-crowd', 'Work the Crowd', [
		paragraph('At 6th level, while you have adopted your alternate persona, you can use your action to inspire your choice of fear or adoration in those nearby. When you do, all creatures within 30 feet who can see you must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be charmed, if you chose adoration, or frightened if you chose fear. This effect lasts for one minute. Each time a creature takes damage from you or one of your allies it can repeat the saving throw, ending the effect on a success. You can use this feature again after you finish a long rest.')
	], 'Level 6'),
	section('high-flyer', 'High Flyer', [
		paragraph('Starting at 11th level, your base movement increases by 10 feet, your jump distance is doubled, and you can use a bonus action on your turn to take the Dash action.')
	], 'Level 11'),
	section('signature-move', 'Signature Move', [
		paragraph('Starting at 17th level, you create a signature move that you can use while you have adopted your alternate persona. Give your signature move a name and a description. You can replace one of your unarmed attacks or attacks with a pugilist weapon on your turn with this signature move.'),
		paragraph('When you use your signature move, you can jump in any direction up to your movement speed, make an attack roll with advantage against a creature in your reach and, if you hit, the attack is a critical and the creature is stunned until the end of your next turn.'),
		paragraph('If you hit with your signature move, you must finish a long rest before you can use it again. If you miss with your signature move, you regain the use of it after 1 minute.')
	], 'Level 17')
] as const;

const bloodhoundBruisersSections = [
	section('bloodhound-bruisers-overview', 'Bloodhound Bruisers', [
		paragraph('Pugilists in the Bloodhound Bruisers fight club are notorious for looking for trouble and finding it every time. Members of this fight club are highly observant of character traits and physical evidence and can form an almost supernatural connection to the cities they live in. Most use these abilities to become urban defenders of the downtrodden but others lend their talents to less savory organizations.'),
		subclassTable([
			['3rd', 'Ever Vigilant, Detective Work'],
			['6th', 'Scrap Like a Sleuth'],
			['11th', 'Heart of the City'],
			['17th', 'Eyes Wide Open']
		])
	]),
	section('ever-vigilant', 'Ever Vigilant', [
		paragraph('When you choose this fight club at 3rd level, you have advantage on initiative rolls. During the first round of combat, you have advantage on attack rolls against creatures who have not acted yet.')
	], 'Level 3'),
	section('detective-work', 'Detective Work', [
		paragraph('Also at 3rd level, you gain proficiency with two of the following skills of your choice: Insight, Investigation, or Perception. In addition, when you make an Intelligence (Investigation), Wisdom (Insight), or Wisdom (Perception) ability check you can spend 1 moxie point to gain advantage on that ability check.')
	], 'Level 3'),
	section('scrap-like-a-sleuth', 'Scrap Like a Sleuth', [
		paragraph('At 6th level, you can use a bonus action and expend 2 moxie points to hone in on the idiosyncrasies and bad habits of an enemy you can see within 30 feet. When you do, you have advantage on weapon attacks against the creature and you add your proficiency bonus to your AC against attacks made by that creature. These effects continue for 1 minute or until you use this feature again.')
	], 'Level 6'),
	section('heart-of-the-city', 'Heart of the City', [
		paragraph('Starting at 11th level, when you take a long rest in a settlement, you can choose to become familiar with the settlement. When you use this feature again, you replace your previous familiar settlement with the current one. You gain the following benefits while in a familiar settlement:'),
		list([
			'You cannot be surprised and you add your proficiency bonus to your initiative.',
			'You have darkvision to a range of 120 feet.',
			'When you make an ability check using the Insight, Investigation, or Perception skills that adds your proficiency bonus, add twice your proficiency bonus instead.',
			'You cannot be lost by any means.',
			'When you are not in combat, you can travel between any two points in the settlement twice as fast as your speed would normally allow.'
		])
	], 'Level 11'),
	section('eyes-wide-open', 'Eyes Wide Open', [
		paragraph('Starting at 17th level, you can use a bonus action and spend 1 moxie point to open your senses to your surroundings for 1 minute. During this time, you have advantage on saving throws against being blinded or deafened and have truesight out to a distance of 30 feet.')
	], 'Level 17')
] as const;

const dogAndHoundSections = [
	section('dog-and-hound-overview', 'Dog & Hound', [
		paragraph('You have never had a friend you could rely on that walked on two legs. Lucky for you, you have got the best four-legged friend a body could ask for. Pugilists in the Dog & Hound fight club are as faithful to their canine companions as their canine companions are to them.'),
		subclassTable([
			['3rd', "Bonus Proficiency, Brawler's Best Friend, Mutt With Moxie"],
			['6th', 'Arcanine Bite, Coordinated Attack'],
			['11th', "Hound's Best Friend"],
			['17th', 'Dire Hound']
		])
	]),
	section('bonus-proficiency', 'Bonus Proficiency', [
		paragraph('When you choose this fight club at 3rd level, you gain proficiency with the Animal Handling skill if you do not already have it. If you do, you gain proficiency in your choice of the Perception or Survival skill.')
	], 'Level 3'),
	section('brawlers-best-friend', "Brawler's Best Friend", [
		paragraph('Also at 3rd level, you gain a hound that accompanies you on your adventures and fights alongside you. Your hound can be any breed of dog or similar canine creature, but uses the statistics of a wolf. You add your proficiency bonus to your hound AC, saving throws, attack rolls, and damage rolls.'),
		paragraph('For each level you gain after 3rd, your hound gains an additional d8 hit die and increases its hit points accordingly.'),
		paragraph('You can use a bonus action on each of your turns to verbally command your hound to take the Attack, Dash, Disengage, Dodge, or Help action that turn. It does not have its own turn unless you are incapacitated or absent.'),
		paragraph('If you are incapacitated or absent, the hound acts on its own, focusing on protecting you and itself. The hound never requires your command to use its reaction, such as when making an opportunity attack.'),
		paragraph('If your hound dies, you can obtain a new one by spending 8 hours bonding with a canine animal that is not hostile to you.')
	], 'Level 3'),
	section('mutt-with-moxie', 'Mutt With Moxie', [
		paragraph('At 3rd level, you share everything with your faithful hound: food, shelter, even moxie. When you use certain moxie abilities, your hound gains a benefit as well.'),
		list([
			'Brace Up. When you gain temporary hit points as a result of using your Brace Up moxie ability, your hound gains the same number of temporary hit points.',
			'The Old One-Two. When you use your The Old One-Two moxie ability, your hound can make one or both attacks instead of you.',
			'Stick and Move. When you use your Stick and Move moxie ability, your hound can take the Dash action.'
		])
	], 'Level 3'),
	section('arcanine-bite', 'Arcanine Bite', [
		paragraph('At 6th level, your hound attacks count as magical for the purpose of overcoming resistance and immunity to non-magical attacks and damage.')
	], 'Level 6'),
	section('coordinated-attack', 'Coordinated Attack', [
		paragraph('Also at 6th level, you and your canine companion form a more potent fighting team. When you use the Attack action on your turn, if your hound can see you, it can use its reaction to make a melee attack.')
	], 'Level 6'),
	section('hounds-best-friend', "Hound's Best Friend", [
		paragraph('At 11th level, when a creature deals damage to your hound with an attack, you can use your reaction to make an opportunity attack against that creature if you are within range.')
	], 'Level 11'),
	section('dire-hound', 'Dire Hound', [
		paragraph('Beginning at 17th level, you use the statistics for a dire wolf, instead of a wolf, for your hound, except that its size remains Medium. These statistics are modified as described in your Brawler Best Friend feature.')
	], 'Level 17')
] as const;

const pissAndVinegarSections = [
	section('piss-and-vinegar-overview', 'Piss & Vinegar', [
		paragraph('Pugilists in the Piss & Vinegar fight club revel in their reputations as heels. Widely despised for their obscene curses and dirty tricks, these pugilists take pride in their ability to provoke and fight to win at all costs.'),
		subclassTable([
			['3rd', 'Bonus Proficiency, Salty Salute'],
			['6th', 'Dirty Tricks'],
			['11th', 'Mean Old Cuss'],
			['17th', 'The Uncouth Art']
		])
	]),
	section('bonus-proficiency', 'Bonus Proficiency', [
		paragraph('Starting when you choose this fight club at 3rd level, you gain proficiency with the Intimidation skill if you do not have it already.')
	], 'Level 3'),
	section('salty-salute', 'Salty Salute', [
		paragraph('Also at 3rd level, you have mastered the art of the enraging insult. You can use a bonus action on your turn to provoke a creature within 60 feet who can see or hear you. That creature must make a Wisdom saving throw. On a failure, the creature takes your fisticuffs damage die + your Charisma modifier in psychic damage and has disadvantage on any attack rolls it makes that do not include you as a target before the start of your next turn.'),
		{
			type: 'formula',
			content: linkedInline('Piss & Vinegar save DC = 8 + your proficiency bonus + your Charisma modifier')
		}
	], 'Level 3'),
	section('dirty-tricks', 'Dirty Tricks', [
		paragraph('Starting at 6th level, you have a few tricks up your sleeve to even the odds when the going gets rough. You can use each of these dirty tricks once and regain their use when you finish a short or long rest.'),
		list([
			'Heelstomper. When you deal damage with an unarmed attack, you attempt to slow the creature you hit. The creature must make a Dexterity saving throw. On a failure, you gain 1 moxie point (up to your maximum) and its movement speed is halved for one minute.',
			'Low Blow. When you deal damage with an unarmed attack you can choose to hit them below the belt. The creature must make a Strength saving throw. On a failure, you gain 1 moxie point (up to your maximum) and it is knocked prone.',
			'Pocket Sand. You can use a bonus action to attempt to blind a creature within 5 feet. The creature must make a Constitution saving throw. On a failure, you gain 1 moxie point (up to your maximum) and it is blinded until the end of its next turn.'
		])
	], 'Level 6'),
	section('mean-old-cuss', 'Mean Old Cuss', [
		paragraph('At 11th level, your threats and mean spirited tricks pack an extra punch. When you make a Charisma (Intimidation) ability check, you can use your reaction and spend 1 moxie to give yourself advantage on the roll. When a creature makes a saving throw against one of your Piss & Vinegar features, you can use your reaction and spend 1 moxie to give that roll disadvantage.')
	], 'Level 11'),
	section('the-uncouth-art', 'The Uncouth Art', [
		paragraph('Starting at 17th level, you gain the ability to offend every creature in the room with minimal effort. When you use your Salty Salute feature, you can choose to target a number of creatures within 60 feet who can see or hear you up to your level in this class instead of a single creature. You gain 1 moxie point (up to your maximum) the first time each creature targeted in this way hits you with an attack before the start of your next turn. You can use this feature again after you finish a long rest.')
	], 'Level 17')
] as const;

const squaredCircleSections = [
	section('squared-circle-overview', 'The Squared Circle', [
		paragraph('Pugilists who fight in the Squared Circle know you do not have to knock an opponent senseless to get them to submit. Of course, members of the Squared Circle do beat their opponents senseless, they just know they do not have to.'),
		subclassTable([
			['3rd', 'Groundwork'],
			['6th', 'Meat Shield'],
			['11th', 'Heavyweight'],
			['17th', 'Clean Finish']
		])
	]),
	section('groundwork', 'Groundwork', [
		paragraph('Starting when you choose this fight club at 3rd level, you gain the following additional moxie features.'),
		list([
			'Compression Lock. When a creature attempts to break a grapple with you and succeeds, you can use your reaction and spend 1 moxie point to force the creature to roll again. The creature must use the second result.',
			'Quick Pin. When a hostile creature movement provokes an opportunity attack from you, you can use your reaction and spend 1 moxie point to make a grapple attack instead of an opportunity attack.',
			'To the Mat. You can use a bonus action and spend 1 moxie point to make a grapple attack against a creature within range. If successful, the creature is also knocked prone.'
		])
	], 'Level 3'),
	section('meat-shield', 'Meat Shield', [
		paragraph('At 6th level, when you have an enemy creature grappled, you gain half cover against all attacks made against you by a creature you are not grappling. When a weapon attack made by a creature you are not grappling misses you, you may use your reaction and spend 1 moxie point to have that creature make the same attack with a new roll against an enemy creature you are grappling.')
	], 'Level 6'),
	section('heavyweight', 'Heavyweight', [
		paragraph('At 11th level, you count as one size larger than you are for the purposes of grappling. In addition, you can move your full movement speed when you are dragging or carrying a grappled creature your size or smaller.')
	], 'Level 11'),
	section('clean-finish', 'Clean Finish', [
		paragraph('At 17th level, your mastery of grappling reaches its peak. While you have a creature grappled, you gain advantage on all attacks against it. Additionally, when you make an unarmed strike or pugilist weapon attack against a creature you have grappled, you score a critical hit on a roll of 19 or 20.')
	], 'Level 17')
] as const;

const sweetScienceSections = [
	section('sweet-science-overview', 'The Sweet Science', [
		paragraph('Pugilists who practice the Sweet Science hit hard, fast, and often. This style is sometimes used by fighters who battle for the entertainment of the upper classes, but is just as often practiced in the back alleys and the bars by those whose next breath depends on a knockout.'),
		subclassTable([
			['3rd', 'Cross Counter'],
			['6th', 'One, Two, Three, Floor'],
			['11th', 'Float Like a Butterfly, Sting Like a Bee'],
			['17th', 'Knock Out']
		])
	]),
	section('cross-counter', 'Cross Counter', [
		paragraph('Starting when you choose this fight club at 3rd level, you can block the brunt of an attack and launch one of your own in the same fluid motion. You can use your reaction and spend 2 moxie points to reduce the damage of a melee weapon attack made against you by 1d10 + your Strength modifier + your pugilist level.'),
		paragraph('If you reduce the damage to 0, you can make an unarmed strike, or pugilist weapon attack, against a creature within range as part of the same reaction.')
	], 'Level 3'),
	section('one-two-three-floor', 'One, Two, Three, Floor', [
		paragraph('At 6th level, when you use your bonus action to use the Old One-Two and hit the same creature with both attacks, you can spend 1 moxie to make an additional unarmed strike against that creature as part of the same bonus action. If you hit, the creature is knocked prone in addition to taking damage as normal for your unarmed strike.')
	], 'Level 6'),
	section('float-like-a-butterfly-sting-like-a-bee', 'Float Like a Butterfly, Sting Like a Bee', [
		paragraph('At 11th level, when you reduce damage from an attack to 0 and successfully hit an enemy creature using your Cross Counter feature you regain 1 moxie point (up to your maximum).')
	], 'Level 11'),
	section('knock-out', 'Knock Out', [
		paragraph('At 17th level, when you hit with an unarmed strike or pugilist weapon, you can spend 1 or more moxie points to try to knock out the opponent instead of dealing damage. Roll 3d12 + 2d12 for every moxie point spent after the first and add your pugilist level to the result; if the total is equal to or greater than the creature remaining hit points, it is unconscious for 10 minutes.')
	], 'Level 17')
] as const;

export const pugilistEquipmentItems: readonly PugilistEquipmentItem[] = [
	{ name: 'Brass knuckles', type: 'Weapon', rarity: 'Mundane', attunement: false, tags: ['weapon', 'unarmed'], description: linkedInline('1 gp; 1d4 bludgeoning; 1 lb.; Light, unarmed. When you make an unarmed attack you can choose to deal the damage of this weapon instead of your normal unarmed attack damage.') },
	{ name: 'Katar', type: 'Weapon', rarity: 'Mundane', attunement: false, tags: ['weapon', 'unarmed'], description: linkedInline('3 gp; 1d4 piercing; 3 lb.; Light, unarmed. When you make an unarmed attack you can choose to deal the damage of this weapon instead of your normal unarmed attack damage.') },
	{ name: 'Knuckle knives', type: 'Weapon', rarity: 'Mundane', attunement: false, tags: ['weapon', 'unarmed'], description: linkedInline('3 gp; 1d4 slashing; 2 lb.; Light, unarmed. When you make an unarmed attack you can choose to deal the damage of this weapon instead of your normal unarmed attack damage.') },
	{ name: 'Bonebreakers', type: 'Weapon', rarity: 'Legendary', attunement: true, tags: ['weapon', 'brass knuckles', 'magic'], description: linkedInline('Weapon (brass knuckles), legendary, requires attunement by a pugilist. You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with this weapon, you can use your reaction to attempt to maim them; the target must succeed on a DC 16 Constitution saving throw or suffer the chosen maiming effect. The maimed condition ends only after medical treatment and one month of rest, or by greater restoration or similar magic.') },
	{ name: 'Bottle of Brew Tasting', type: 'Wondrous item', rarity: 'Rare', attunement: false, tags: ['wondrous item', 'identification'], description: linkedInline('Wondrous item, rare. When a potion or other liquid is poured into the bottle, the contents and effects appear on the blank label in Common. If broken, it loses this identifying magic and functions as an improvised weapon with a +2 bonus to attack rolls and damage rolls.') },
	{ name: 'Club of Unconsciousness', type: 'Weapon', rarity: 'Rare', attunement: true, tags: ['weapon', 'club', 'charges'], description: linkedInline('Weapon (club), rare, requires attunement. You gain a +1 bonus to attack and damage rolls. The club has 5 charges; when you deal damage with it, you can expend charges to roll 5d8 plus 2d8 for each extra charge and knock a creature unconscious if the result equals or exceeds its remaining hit points. It regains 1d3 + 1 charges daily at dawn.') },
	{ name: 'Coin of Easy Living', type: 'Wondrous item', rarity: 'Uncommon', attunement: true, tags: ['wondrous item'], description: linkedInline('Wondrous item, uncommon, requires attunement. This gold coin always lands heads up when flipped, and while attuned to it you can summon it to your palm at will.') },
	{ name: 'Enchanted Inks', type: 'Potion', rarity: 'Varies', attunement: false, tags: ['potion', 'tattoo', 'spellcasting'], description: linkedInline('Potion, common through legendary. The inks can be used to make a single tattoo that lets the tattooed creature cast one chosen spell, with Constitution as the spellcasting ability. After casting the spell through the tattoo, the creature cannot do so again until finishing a long rest.') },
	{ name: 'Everfull Stein', type: 'Wondrous item', rarity: 'Uncommon', attunement: false, tags: ['wondrous item'], description: linkedInline('Wondrous item, uncommon. While closed and empty, the stein fills with a named non-magical ale, beer, or mead that the owner has had before.') },
	{ name: 'Leather Jerkin, +1, +2, or +3', type: 'Wondrous item', rarity: 'Varies', attunement: false, tags: ['wondrous item', 'armor class'], description: linkedInline('Wondrous item, rare to legendary. You have a bonus to AC while unarmored and wearing this garment, determined by the item rarity.') },
	{ name: 'Loaded Dice', type: 'Wondrous item', rarity: 'Rare', attunement: true, tags: ['wondrous item', 'charges', 'd20'], description: linkedInline('Wondrous item, rare, requires attunement. After you make an ability check, attack roll, or saving throw, but before the DM declares success or failure, you can expend 1 charge to reroll the d20. The dice can hold up to 7 charges and regain 1d6 + 1 charges each week. They also grant advantage on ability checks made to determine the winner of dice games.') },
	{ name: 'Mage Mashers', type: 'Weapon', rarity: 'Very rare', attunement: true, tags: ['weapon', 'brass knuckles', 'spellcasting'], description: linkedInline('Weapon (brass knuckles), very rare, requires attunement. You gain a +2 bonus to attack and damage rolls. When you hit a creature with the spellcasting or pact magic trait, it takes an extra 1d6 force damage, and concentration saving throws caused by your damage have disadvantage.') },
	{ name: 'Medallion of Mettle', type: 'Wondrous item', rarity: 'Rare', attunement: true, tags: ['wondrous item', 'temporary hit points'], description: linkedInline('Wondrous item, rare, requires attunement. Whenever you gain temporary hit points, you gain an additional 1d6 temporary hit points.') },
	{ name: 'Mugfist Knuckles', type: 'Weapon', rarity: 'Uncommon', attunement: true, tags: ['weapon', 'brass knuckles'], description: linkedInline('Weapon (brass knuckles), uncommon, requires attunement. You gain a +1 bonus to attack and damage rolls. When you roll a 20 on an attack with the weapon, 1d6 gold pieces fall into the creature space.') },
	{ name: 'Penitent Pummelers', type: 'Weapon', rarity: 'Rare', attunement: true, tags: ['weapon', 'radiant'], description: linkedInline('Weapon (brass knuckles, knuckle knives, or katar), rare, requires attunement. You gain a +1 bonus to attack and damage rolls. When you hit a fiend or undead, the creature takes an extra 1d6 radiant damage.') },
	{ name: 'Poundwise Porter', type: 'Potion', rarity: 'Very rare', attunement: false, tags: ['potion', 'unarmed'], description: linkedInline('Potion, very rare. For one minute after consuming this thick dark potion, you gain +3 to damage with unarmed attacks.') },
	{ name: 'Prehensile Whip', type: 'Weapon', rarity: 'Rare', attunement: true, tags: ['weapon', 'whip', 'grapple'], description: linkedInline('Weapon (whip), rare, requires attunement. You gain a +1 bonus to attack and damage rolls. When you hit a creature or object, you may use your reaction to make a grapple attack against it using the whip instead of a free hand, treating your reach as 10 feet for that grapple.') },
	{ name: 'Punchdrunk Punters', type: 'Weapon', rarity: 'Rare', attunement: true, tags: ['weapon', 'poison'], description: linkedInline('Weapon (brass knuckles, knuckle knives, or katar), rare, requires attunement. You gain a +1 bonus to attack and damage rolls. Each time you damage a creature, it gains a toxin point for one hour; you can use an action to make a creature you can see take 1d8 poison damage per toxin point it has, then it loses all toxin points.') },
	{ name: "Ramuh's Katar", type: 'Weapon', rarity: 'Very rare', attunement: true, tags: ['weapon', 'katar', 'lightning'], description: linkedInline('Weapon (katar), very rare, requires attunement. While attuned and wearing it, you have advantage on initiative rolls and your jumping distances are tripled. You gain a +2 bonus to attack and damage rolls, and a roll of 20 on an attack deals an additional 8 lightning damage.') },
	{ name: 'Ratbite', type: 'Weapon', rarity: 'Legendary', attunement: true, tags: ['weapon', 'knuckle knives', 'disease'], description: linkedInline('Weapon (knuckle knives), legendary, requires attunement. You gain a +3 bonus to attack and damage rolls and are immune to disease. A damaged creature must succeed on a DC 11 Constitution saving throw or contract sewer plague, and a roll of 20 deals an additional 8 necrotic damage and imposes disadvantage on saving throws against diseases for one week.') },
	{ name: 'Salamander Sauce', type: 'Potion', rarity: 'Uncommon', attunement: false, tags: ['potion', 'cold', 'fire'], description: linkedInline('Potion, uncommon. A vial usually has two doses. One dose grants resistance to cold damage for 8 hours; two doses grant immunity to cold damage and vulnerability to fire damage for 8 hours. Extra doses require a DC 14 Constitution saving throw or cause a level of exhaustion.') },
	{ name: 'Scyboo Snack', type: 'Potion', rarity: 'Uncommon', attunement: false, tags: ['potion', 'beast'], description: linkedInline('Potion, uncommon. When baked into a biscuit and consumed by a beast, the beast size increases by one category for 10 minutes. While enlarged, it has advantage on Strength checks and saving throws and its weapon attacks deal 1d4 extra damage.') },
	{ name: 'Spiked Collar', type: 'Wondrous item', rarity: 'Varies', attunement: false, tags: ['wondrous item', 'beast'], description: linkedInline('Wondrous item, uncommon to very rare. A beast wearing this collar gains a bonus to unarmed strike attack and damage rolls, determined by rarity.') },
	{ name: 'Studded Collar', type: 'Wondrous item', rarity: 'Varies', attunement: false, tags: ['wondrous item', 'beast', 'armor class'], description: linkedInline('Wondrous item, uncommon to very rare. A beast wearing this collar gains a bonus to AC and saving throws, determined by rarity.') },
	{ name: 'Thunder Knuckles', type: 'Weapon', rarity: 'Very rare', attunement: true, tags: ['weapon', 'brass knuckles', 'thunder'], description: linkedInline('Weapon (brass knuckles), very rare, requires attunement. You gain a +2 bonus to attack and damage rolls. When you roll a 20 on an attack with the weapon, the target takes an additional 8 thunder damage and is knocked prone.') },
	{ name: 'Whistle of Dog Calling', type: 'Wondrous item', rarity: 'Rare', attunement: false, tags: ['wondrous item', 'beast', 'summoning'], description: linkedInline('Wondrous item, rare. You can use an action to blow the whistle and cast conjure animals, choosing only two dire wolves or eight wolves. You do not maintain concentration, but the duration is 10 minutes instead of 1 hour. This magic cannot be used again until dawn.') },
	{ name: "Winter's Bite", type: 'Weapon', rarity: 'Uncommon', attunement: true, tags: ['weapon', 'katar', 'cold'], description: linkedInline('Weapon (katar), uncommon, requires attunement. The glove can grow an icicle that functions as a katar or launch an icicle like a hand crossbow; both deal cold damage instead of piercing damage. You gain a +1 bonus to attack and damage rolls, and a roll of 20 halves the target speed until the end of its next turn unless it is immune to cold damage.') }
];

export const pugilistNpcs: readonly PugilistNpc[] = [
	{ name: 'Brawler', challenge: '1/2', description: linkedInline('Medium humanoid, unaligned. Armor Class 14 with leather armor; Hit Points 32 (5d8 + 10); Speed 30 ft.; passive Perception 9; Common; Challenge 1/2. Iron Chin uses Constitution instead of Dexterity for AC while in light or no armor and not using a shield. Actions: Multiattack with two fisticuffs attacks or one fisticuffs attack and Brace Up; Fisticuffs +4 to hit, reach 5 ft., one target, 5 (1d6 + 2) bludgeoning damage; Brace Up grants 7 (1d6 + 4) temporary hit points.') },
	{ name: 'Boxer', challenge: '5', description: linkedInline('Medium humanoid, unaligned. Armor Class 16 with leather armor; Hit Points 85 (10d8 + 40); Speed 30 ft.; Athletics +7, Insight +2, Intimidation +4; passive Perception 10; Common; Challenge 5. Actions: Multiattack with four fisticuffs attacks or two fisticuff attacks and Brace Up; Fisticuffs +8 to hit, reach 5 ft., one target, 10 (1d10 + 5) bludgeoning damage; Brace Up grants 14 (1d10 + 9) temporary hit points. Reaction: Cross Counter reduces melee attack damage by 14 (1d10 + 9), and if reduced to 0 or lower, the boxer may make a fisticuffs attack against the attacker if in range.') },
	{ name: 'Wrestler', challenge: '3', description: linkedInline('Medium humanoid, unaligned. Armor Class 15 with leather armor; Hit Points 67 (9d8 + 27); Speed 30 ft.; Athletics +6; Strength +6 and Constitution +5 saving throws; passive Perception 10; Common; Challenge 3. Actions: Multiattack with three fisticuffs attacks and a wrestling attack, or two fisticuff attacks, Brace Up, and a wrestling attack; Fisticuffs +6 to hit, reach 5 ft., one target, 8 (1d8 + 4) bludgeoning damage; Wrestling +6 to hit, reach 5 ft., one target, target is grappled or knocked prone; Brace Up grants 10 (1d8 + 6) temporary hit points. Reaction: Quick Pin lets the wrestler make two wrestling attacks when a creature provokes an opportunity attack.') }
];

export function getPugilistEquipmentSlug(item: PugilistEquipmentItem): string {
	return createPugilistReferenceSlug(item.name);
}

export function getPugilistNpcSlug(item: PugilistNpc): string {
	return createPugilistReferenceSlug(item.name);
}

export function getPugilistEquipmentHref(item: PugilistEquipmentItem): string {
	return `/equipment/${getPugilistEquipmentSlug(item)}`;
}

export function getPugilistNpcHref(item: PugilistNpc): string {
	return `/npcs/${getPugilistNpcSlug(item)}`;
}

export function getPugilistEquipmentBySlug(slug: string): PugilistEquipmentItem | undefined {
	return pugilistEquipmentItems.find((item) => getPugilistEquipmentSlug(item) === slug);
}

export function getPugilistNpcBySlug(slug: string): PugilistNpc | undefined {
	return pugilistNpcs.find((item) => getPugilistNpcSlug(item) === slug);
}

const pugilistReferenceSection = section('pugilist-references', 'Pugilist References', [
	paragraph('The Pugilist Clean Edition also includes class-specific equipment and nonplayer characters. Those references live on separate pages so the main class page stays focused on class rules and progression.'),
	{
		type: 'card-grid',
		groups: [
			{
				title: 'Reference Pages',
				cards: [
					{ page: 'internals.equipment.page', source },
					{ page: 'internals.npcs.page', source }
				]
			}
		]
	}
]);

const pugilistClass = createBasicClass({
	name: 'Pugilist',
	slug: 'pugilist',
	role: 'Streetfighting bruiser',
	source,
	primaryAbility: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(' and '),
		link('internals.rules.abilityScores.constitution', 'Constitution')
	],
	multiclassing: linkedInline('Prerequisite: Strength 13 and Constitution 13. Proficiencies gained: light armor and improvised weapons.'),
	hitDie: 'd8',
	armor: [link('internals.rules.equipment.lightArmor', 'Light armor')],
	weapons: [text('Simple weapons, improvised weapons, whip, hand crossbow')],
	tools: [text("Your choice of one artisan's tools, gaming set, or thieves' tools")],
	savingThrows: [
		link('internals.rules.abilityScores.strength', 'Strength'),
		text(', '),
		link('internals.rules.abilityScores.constitution', 'Constitution')
	],
	skills: [
		text('Choose two from '),
		link('internals.rules.skills.acrobatics', 'Acrobatics'),
		text(', '),
		link('internals.rules.skills.athletics', 'Athletics'),
		text(', '),
		link('internals.rules.skills.deception', 'Deception'),
		text(', '),
		link('internals.rules.skills.intimidation', 'Intimidation'),
		text(', '),
		link('internals.rules.skills.perception', 'Perception'),
		text(', '),
		link('internals.rules.skills.sleightOfHand', 'Sleight of Hand'),
		text(', and '),
		link('internals.rules.skills.stealth', 'Stealth'),
		text('.')
	],
	description:
		'A streetfighting class with swagger, moxie, dirty tricks, and stubborn close-range endurance.',
	longDescription: [
		linkedInline('Pugilists live rough lives that leave them full of determination and reckless confidence, whether that confidence comes from desperation, overconfidence, or hard experience. In a fight, they channel that strength of character into moxie and use it to survive enemies with greater numbers, arms, or armor.'),
		linkedInline('A Pugilist is not a disciplined monk or polished weapon master. The class is built around back-alley brawling, improvised pressure, pain tolerance, unarmed strikes, and a refusal to stay down when a normal combatant would already be finished.'),
		linkedInline('At the table, the Pugilist wants to close distance, trade blows, spend moxie at the right moment, and let a Fight Club define the exact shape of their brawling style, from theatrical arena work to dirty tricks, sleuthing, grappling, boxing, or fighting beside a loyal hound.')
	],
	startingEquipment: [
		{
			label: 'Armor or weapon',
			instruction: 'Choose one',
			choices: [
				[link('internals.rules.equipment.lightArmor', 'Leather armor')],
				[link('internals.rules.equipment.simpleWeapons', 'Any simple weapon')]
			]
		},
		{
			label: 'Pack',
			instruction: 'Choose one',
			choices: [
				[text("A dungeoneer's pack")],
				[link('internals.equipment.explorersPack', "An explorer's pack")]
			]
		},
		{
			label: 'Tools',
			instruction: 'Choose one',
			choices: [
				[text("A set of artisan's tools")],
				[text('A gaming set')],
				[text("Thieves' tools")]
			]
		}
	],
	features: classFeatures.map(({ title, subtitle }) => ({
		level: Number(subtitle?.replace('Level ', '') ?? 1),
		title,
		description: [text('See the full feature text below.')]
	})),
	tags: ['unarmed', 'martial', 'moxie', 'melee', 'homebrew']
});

export const pugilist = {
	...pugilistClass,
	page: {
		...pugilistClass.page,
		images
	},
	equipmentItems: pugilistEquipmentItems,
	npcItems: pugilistNpcs,
	content: {
		...pugilistClass.content,
		progression: pugilistProgression,
		sections: {
			...pugilistClass.content.sections,
			featureSections: classFeatures,
			subclasses: {
				id: 'fight-clubs',
				title: 'Fight Clubs',
				blocks: [
					paragraph('Despite the name, fight clubs are not formal fraternities or sororities, but collections of pugilists who, by training or happenstance, share a similar style. In some D&D worlds, fight clubs can tell you a lot about where a person comes from, while in others there are representatives of many fighting styles in all metropolitan areas.'),
					{
						type: 'card-grid',
						groups: [
							{
								title: 'Fight Clubs',
								cards: [
									{ page: 'internals.classes.pugilist.subclasses.arenaRoyale', source },
									{ page: 'internals.classes.pugilist.subclasses.bloodhoundBruisers', source },
									{ page: 'internals.classes.pugilist.subclasses.dogAndHound', source },
									{ page: 'internals.classes.pugilist.subclasses.pissAndVinegar', source },
									{ page: 'internals.classes.pugilist.subclasses.squaredCircle', source },
									{ page: 'internals.classes.pugilist.subclasses.sweetScience', source }
								]
							}
						]
					}
				]
			},
			referenceSections: [pugilistReferenceSection]
		},
		tableOfContents: [
			{ id: 'class-overview', title: 'Class Overview' },
			{ id: 'core-class-traits', title: 'Core Class Traits' },
			{ id: 'starting-equipment', title: 'Starting Equipment' },
			{ id: 'progression', title: 'Pugilist Progression' },
			{
				id: 'class-features',
				title: 'Class Features',
				children: classFeatures.map(({ id, title }) => ({ id, title }))
			},
			{ id: 'fight-clubs', title: 'Fight Clubs' },
			{ id: 'pugilist-references', title: 'Pugilist References' }
		]
	},
	subclasses: {
		arenaRoyale: createFightClub(
			'arena-royale',
			'Arena Royale',
			'A theatrical gladiator and performer who turns persona, crowd work, mobility, and signature moves into fight-winning spectacle.',
			arenaRoyaleSections
		),
		bloodhoundBruisers: createFightClub(
			'bloodhound-bruisers',
			'Bloodhound Bruisers',
			'An urban hunter and investigator who reads people, finds trouble, and uses city familiarity to stay one step ahead.',
			bloodhoundBruisersSections
		),
		dogAndHound: createFightClub(
			'dog-and-hound',
			'Dog & Hound',
			'A loyal brawler who fights beside a canine companion and shares moxie, attacks, and battlefield pressure with their hound.',
			dogAndHoundSections
		),
		pissAndVinegar: createFightClub(
			'piss-and-vinegar',
			'Piss & Vinegar',
			'A dirty-trick heel who uses insults, provocation, psychic pressure, and spiteful tricks to make enemies fight badly.',
			pissAndVinegarSections
		),
		squaredCircle: createFightClub(
			'squared-circle',
			'The Squared Circle',
			'A grappling-focused Pugilist who pins, controls, redirects attacks, and turns close contact into a finishing hold.',
			squaredCircleSections
		),
		sweetScience: createFightClub(
			'sweet-science',
			'The Sweet Science',
			'A boxing-focused Pugilist who blocks, counters, chains fast strikes, regains momentum, and looks for the knockout.',
			sweetScienceSections
		)
	}
} as const;

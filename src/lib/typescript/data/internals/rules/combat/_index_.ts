import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createGenericRuleContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.combat;

type CombatReference = {
	readonly name: {
		readonly normal: string;
		readonly slug: string;
	};
	readonly logos: {
		readonly simple: {
			readonly href: string;
			readonly alt: string;
		};
	};
};

function createCombatPage(item: CombatReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Combat rule',
		description: `${item.name.normal} is a combat rule used by attacks,
			damage, defenses, or turn order.`,
		content: createGenericRuleContent(item, 'combat rule')
	});
}

export const combat = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Combat rules',
		description: `Browse combat rules used by attacks, damage, defenses,
			and turn order.`,
		content: createGroupContent(current.name.normal, 'combat rule')
	}),

	armorClass: createCombatPage(current.armorClass),
	attackRoll: createCombatPage(current.attackRoll),
	criticalHit: createCombatPage(current.criticalHit),
	damageRoll: createCombatPage(current.damageRoll),
	hitPoints: createCombatPage(current.hitPoints),
	initiativeRoll: createCombatPage(current.initiativeRoll),
	meleeAttack: createCombatPage(current.meleeAttack),
	meleeWeaponAttack: createCombatPage(current.meleeWeaponAttack)
} as const;

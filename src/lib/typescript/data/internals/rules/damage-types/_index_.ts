import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createDamageTypeContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.damageTypes;

type DamageTypeReference = {
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

function createDamageTypePage(item: DamageTypeReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Damage type',
		description: `${item.name.normal} is a damage type used by attacks,
			spells, class features, resistance, immunity, and vulnerability.`,
		content: createDamageTypeContent(item)
	});
}

export const damageTypes = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Damage references',
		description: `Browse damage types used by attacks, spells, class
			features, resistance, immunity, and vulnerability.`,
		content: createGroupContent(current.name.normal, 'damage type')
	}),

	acid: createDamageTypePage(current.acid),
	bludgeoning: createDamageTypePage(current.bludgeoning),
	cold: createDamageTypePage(current.cold),
	fire: createDamageTypePage(current.fire),
	force: createDamageTypePage(current.force),
	lightning: createDamageTypePage(current.lightning),
	necrotic: createDamageTypePage(current.necrotic),
	piercing: createDamageTypePage(current.piercing),
	poison: createDamageTypePage(current.poison),
	psychic: createDamageTypePage(current.psychic),
	radiant: createDamageTypePage(current.radiant),
	slashing: createDamageTypePage(current.slashing),
	thunder: createDamageTypePage(current.thunder)
} as const;

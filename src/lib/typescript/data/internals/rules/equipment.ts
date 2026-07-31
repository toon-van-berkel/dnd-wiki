import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.rules.equipment;

type EquipmentReference = {
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

function createEquipmentPage(item: EquipmentReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Equipment reference',
		description: `${item.name.normal} is an equipment reference used by
			character options and rules.`
	});
}

export const equipment = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Equipment references',
		description: `Browse weapon, armor, shield, and adventuring gear
			references used by character options.`
	}),

	simpleWeapons: createEquipmentPage(current.simpleWeapons),
	martialWeapons: createEquipmentPage(current.martialWeapons),
	lightArmor: createEquipmentPage(current.lightArmor),
	mediumArmor: createEquipmentPage(current.mediumArmor),
	shields: createEquipmentPage(current.shields),
	greataxe: createEquipmentPage(current.greataxe),
	handaxes: createEquipmentPage(current.handaxes),
	explorersPack: createEquipmentPage(current.explorersPack),
	javelins: createEquipmentPage(current.javelins)
} as const;

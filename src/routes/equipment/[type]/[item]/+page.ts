/*
	Location: src/routes/equipment/[type]/[item]/+page.ts
	Use: Static prerender entries for nested equipment detail pages.
*/
import {
	equipmentItems,
	getEquipmentItemBySlug,
	getEquipmentItemTypeSlug
} from '$lib/typescript/data/internals/equipment-items';
import { createEquipmentSeoMetadata } from '$lib/typescript/pages/seo';

export function entries() {
	return equipmentItems.map((item) => ({
		type: getEquipmentItemTypeSlug(item),
		item: item.slug
	}));
}

export function load({ params }) {
	const item = getEquipmentItemBySlug(params.item);

	if (!item || getEquipmentItemTypeSlug(item) !== params.type) {
		return {};
	}

	return {
		seo: createEquipmentSeoMetadata(item)
	};
}

/*
	Location: src/routes/equipment/[item]/+page.ts
	Use: Static prerender entries for equipment detail pages.
*/
import {
	equipmentTypes,
	getEquipmentTypeBySlug
} from '$lib/typescript/data/internals/equipment-items';

export function entries() {
	return equipmentTypes.map((type) => ({
		item: type.slug
	}));
}

export function load({ params }) {
	const equipmentType = getEquipmentTypeBySlug(params.item);

	if (!equipmentType) {
		return {};
	}

	return {};
}

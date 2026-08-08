/*
	Location: src/routes/equipment/[item]/+page.ts
	Use: Static prerender entries for equipment detail pages.
*/
import {
	getPugilistEquipmentBySlug,
	getPugilistEquipmentSlug,
	pugilistEquipmentItems
} from '$lib/typescript/data/internals/classes/pugilist';
import { createEquipmentSeoMetadata } from '$lib/typescript/pages/seo';

export function entries() {
	return pugilistEquipmentItems.map((item) => ({
		item: getPugilistEquipmentSlug(item)
	}));
}

export function load({ params }) {
	const item = getPugilistEquipmentBySlug(params.item);

	if (!item) {
		return {};
	}

	return {
		seo: createEquipmentSeoMetadata(item)
	};
}

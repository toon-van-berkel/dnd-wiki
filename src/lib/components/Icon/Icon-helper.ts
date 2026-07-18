// site/src/lib/helpers/Icon-helper.ts
import { iconsList } from './Icon-data';
import type {
	IconCategory,
	IconName,
	IconReference
} from './Icon-Types';

export function getIcon<Category extends IconCategory>(
	category: Category,
	name: IconName<Category>
) {
	return iconsList[category][name];
}

export function resolveIcon(reference: IconReference): string {
	const path = reference.startsWith('iconsList.')
		? reference.slice('iconsList.'.length)
		: reference;

	const separatorIndex = path.indexOf('.');

	if (separatorIndex === -1) {
		throw new Error(`Invalid icon reference: ${reference}`);
	}

	const category = path.slice(0, separatorIndex) as IconCategory;
	const name = path.slice(separatorIndex + 1);

	const categoryIcons = iconsList[category] as
		| Record<string, string>
		| undefined;

	const icon = categoryIcons?.[name];

	if (!icon) {
		throw new Error(`Unknown icon reference: ${reference}`);
	}

	return icon;
}
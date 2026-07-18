// site/src/lib/helpers/Icon-Types.ts
import type { iconsList } from './Icon-data';

export type IconCategory = keyof typeof iconsList;

export type IconName<Category extends IconCategory> =
	keyof (typeof iconsList)[Category];

export type IconPath = {
	[Category in IconCategory]:
		`${Category}.${Extract<IconName<Category>, string>}`;
}[IconCategory];

export type IconReference =
	| IconPath
	| `iconsList.${IconPath}`;

export type IconType = 'normal' | 'in-text';

export type Props = {
	src: IconReference;
	type?: IconType;
	color?: string;
	hoverColor?: string;
	changeOnHover?: boolean;
	size?: string;
	label?: string;
	class?: string;
};
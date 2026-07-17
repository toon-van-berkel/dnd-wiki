// site\src\lib\page\layout\navigation\snippets\Breadcrumbs-helpers.ts
import { goto } from "$app/navigation";
import type { Breadcrumbs } from "./Breadcrumbs-Type";

export function getUrl(path: string): Breadcrumbs {
	const parts = path
		.split('?')[0]
		.split('#')[0]
		.split('/')
		.filter(Boolean);

	return {
		urls: [
			'/',
			...parts.map((_, index) => `/${parts.slice(0, index + 1).join('/')}`)
		],
		names: [
			'Home',
			...parts.map((part) =>
				part
					.split('-')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ')
			)
		]
	};
}

export function handleBack(breadcrumbs: Breadcrumbs) {
	const parentUrl = breadcrumbs.urls.at(-2);

	if (parentUrl) {
		void goto(parentUrl);
	}
}
// site\src\lib\preferences\page-card-gender.ts
import type { PageCardGender } from '$lib/data/generated/PageCardAssets';

const PAGE_CARD_GENDER_STORAGE_KEY = 'class-card-image-gender';

let genderForCurrentLoad: PageCardGender | null = null;

export function getOppositePageCardGender(
	gender: PageCardGender
): PageCardGender {
	return gender === 'female' ? 'male' : 'female';
}

export function getPageCardGenderForLoad(): PageCardGender {
	if (genderForCurrentLoad) {
		return genderForCurrentLoad;
	}

	if (typeof localStorage === 'undefined') {
		return 'female';
	}

	const storedGender = localStorage.getItem(
		PAGE_CARD_GENDER_STORAGE_KEY
	);

	const selectedGender: PageCardGender =
		storedGender === 'female' || storedGender === 'male'
			? storedGender
			: Math.random() < 0.5
				? 'female'
				: 'male';

	genderForCurrentLoad = selectedGender;

	localStorage.setItem(
		PAGE_CARD_GENDER_STORAGE_KEY,
		getOppositePageCardGender(selectedGender)
	);

	return selectedGender;
}
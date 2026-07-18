import { getPageEntryByHref } from '$lib/page/registry';

export type AiImageType =
	| 'Generated'
	| 'AI-assisted edit'
	| 'Reference-based generation'
	| 'Background replacement'
	| 'Character variation';

export type AiImageEntry = {
	id: string;
	title: string;
	image: string;
	page?: string;
	pageLabel?: string;
	type: AiImageType;
	tool?: string;
	description: string;
	reference?: string;
	notes?: string;
	variants?: string[];
};

type ClassCardSet = {
	href: string;
	genders?: Array<'female' | 'male'>;
};

const classCardSets: ClassCardSet[] = [
	{ href: '/classes/artificer' },
	{ href: '/classes/barbarian' },
	{ href: '/classes/bard' },
	{ href: '/classes/blood-hunter' },
	{ href: '/classes/captain' },
	{ href: '/classes/champion' },
	{ href: '/classes/cleric' },
	{ href: '/classes/druid' },
	{ href: '/classes/fighter' },
	{ href: '/classes/gunslinger' },
	{ href: '/classes/illrigger' },
	{ href: '/classes/messenger' },
	{ href: '/classes/monk' },
	{ href: '/classes/monster-hunter' },
	{ href: '/classes/mournbound' },
	{ href: '/classes/paladin' },
	{ href: '/classes/pugilist' },
	{ href: '/classes/ranger' },
	{ href: '/classes/rogue' },
	{ href: '/classes/scholar' },
	{ href: '/classes/rogue/arcane-trickster', genders: ['female'] },
	{ href: '/classes/rogue/assassin', genders: ['female'] },
	{ href: '/classes/rogue/inquisitive', genders: ['female'] },
	{ href: '/classes/rogue/mastermind', genders: ['female'] },
	{ href: '/classes/rogue/phantom', genders: ['female'] },
	{ href: '/classes/rogue/scout', genders: ['female'] },
	{ href: '/classes/rogue/soulknife', genders: ['female'] },
	{ href: '/classes/rogue/swashbuckler', genders: ['female'] },
	{ href: '/classes/rogue/thief', genders: ['female'] }
];

function createClassCardEntries(classCard: ClassCardSet): AiImageEntry[] {
	const page = getPageEntryByHref(classCard.href);

	if (!page) {
		throw new Error(`AI image class card references unknown Wiki page ${classCard.href}.`);
	}

	const folder = classCard.href.replace(/^\/classes\/?/, '');
	const genders = classCard.genders ?? ['female', 'male'];

	return genders.map((gender) => {
		const capitalizedGender =
			gender.charAt(0).toUpperCase() + gender.slice(1);

		return {
			id: `${folder.replaceAll('/', '-')}-${gender}`,
			title: `${page.title} - ${capitalizedGender}`,
			image: `/classes/${folder}/card-${gender}-s.webp`,
			page: page.href,
			pageLabel: page.title,
			type: 'Generated',
			tool: 'OpenAI image generation',
			description:
				`An AI-generated ${gender} class-card illustration used as a visual reference for the ${page.title} page.`,
			notes:
				'This image is not official Dungeons & Dragons artwork and is not presented as manually created artwork.',
			variants: [
				`/classes/${folder}/card-${gender}-l.webp`,
				`/classes/${folder}/card-${gender}-m.webp`,
				`/classes/${folder}/card-${gender}-s.webp`
			]
		} satisfies AiImageEntry;
	});
}

export const aiGeneratedImages: AiImageEntry[] =
	classCardSets.flatMap(createClassCardEntries);

export const aiEditedImages: AiImageEntry[] = [];

export const aiImages: AiImageEntry[] = [
	...aiGeneratedImages,
	...aiEditedImages
];

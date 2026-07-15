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
	title: string;
	folder: string;
	page: string;
	genders?: Array<'female' | 'male'>;
};

const classCardSets: ClassCardSet[] = [
	{
		title: 'Artificer',
		folder: 'artificer',
		page: '/classes/artificer'
	},
	{
		title: 'Barbarian',
		folder: 'barbarian',
		page: '/classes/barbarian'
	},
	{
		title: 'Bard',
		folder: 'bard',
		page: '/classes/bard'
	},
	{
		title: 'Blood Hunter',
		folder: 'blood-hunter',
		page: '/classes/blood-hunter'
	},
	{
		title: 'Captain',
		folder: 'captain',
		page: '/classes/captain'
	},
	{
		title: 'Champion',
		folder: 'champion',
		page: '/classes/champion'
	},
	{
		title: 'Cleric',
		folder: 'cleric',
		page: '/classes/cleric'
	},
	{
		title: 'Druid',
		folder: 'druid',
		page: '/classes/druid'
	},
	{
		title: 'Fighter',
		folder: 'fighter',
		page: '/classes/fighter'
	},
	{
		title: 'Gunslinger',
		folder: 'gunslinger',
		page: '/classes/gunslinger'
	},
	{
		title: 'Illrigger',
		folder: 'illrigger',
		page: '/classes/illrigger'
	},
	{
		title: 'Messenger',
		folder: 'messenger',
		page: '/classes/messenger'
	},
	{
		title: 'Monk',
		folder: 'monk',
		page: '/classes/monk'
	},
	{
		title: 'Monster Hunter',
		folder: 'monster-hunter',
		page: '/classes/monster-hunter'
	},
	{
		title: 'Mournbound',
		folder: 'mournbound',
		page: '/classes/mournbound'
	},
	{
		title: 'Paladin',
		folder: 'paladin',
		page: '/classes/paladin'
	},
	{
		title: 'Pugilist',
		folder: 'pugilist',
		page: '/classes/pugilist'
	},
	{
		title: 'Ranger',
		folder: 'ranger',
		page: '/classes/ranger'
	},
	{
		title: 'Rogue',
		folder: 'rogue',
		page: '/classes/rogue'
	},
	{
		title: 'Scholar',
		folder: 'scholar',
		page: '/classes/scholar'
	},

	{
		title: 'Arcane Trickster',
		folder: 'rogue/arcane-trickster',
		page: '/classes/rogue/arcane-trickster',
		genders: ['female']
	},
	{
		title: 'Assassin',
		folder: 'rogue/assassin',
		page: '/classes/rogue/assassin',
		genders: ['female']
	},
	{
		title: 'Inquisitive',
		folder: 'rogue/inquisitive',
		page: '/classes/rogue/inquisitive',
		genders: ['female']
	},
	{
		title: 'Mastermind',
		folder: 'rogue/mastermind',
		page: '/classes/rogue/mastermind',
		genders: ['female']
	},
	{
		title: 'Phantom',
		folder: 'rogue/phantom',
		page: '/classes/rogue/phantom',
		genders: ['female']
	},
	{
		title: 'Scout',
		folder: 'rogue/scout',
		page: '/classes/rogue/scout',
		genders: ['female']
	},
	{
		title: 'Soulknife',
		folder: 'rogue/soulknife',
		page: '/classes/rogue/soulknife',
		genders: ['female']
	},
	{
		title: 'Swashbuckler',
		folder: 'rogue/swashbuckler',
		page: '/classes/rogue/swashbuckler',
		genders: ['female']
	},
	{
		title: 'Thief',
		folder: 'rogue/thief',
		page: '/classes/rogue/thief',
		genders: ['female']
	}
];

function createClassCardEntries(classCard: ClassCardSet): AiImageEntry[] {
	const genders = classCard.genders ?? ['female', 'male'];

	return genders.map((gender) => {
		const capitalizedGender =
			gender.charAt(0).toUpperCase() + gender.slice(1);

		return {
			id: `${classCard.folder.replaceAll('/', '-')}-${gender}`,
			title: `${classCard.title} — ${capitalizedGender}`,
			image: `/classes/${classCard.folder}/card-${gender}-s.webp`,
			page: classCard.page,
			pageLabel: classCard.title,
			type: 'Generated',
			tool: 'OpenAI image generation',
			description:
				`An AI-generated ${gender} class-card illustration used as a visual reference for the ${classCard.title} page.`,
			notes:
				'This image is not official Dungeons & Dragons artwork and is not presented as manually created artwork.',
			variants: [
				`/classes/${classCard.folder}/card-${gender}-l.webp`,
				`/classes/${classCard.folder}/card-${gender}-m.webp`,
				`/classes/${classCard.folder}/card-${gender}-s.webp`
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

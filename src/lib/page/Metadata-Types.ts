// site\src\lib\page\Metadata-Types.ts
type SocialMetadata = {
	socialName: string;
	username?: string;
	title: string;
	description: string;
	image: string;
};

export type PageMetadata = {
	title: string;
	description: string;
	author: string;
	headUrl: string;

	alternatives?: {
		language: string;
		url: string;
	}[];

	prevUrl?: string;
	nextUrl?: string;

	og: {
		currentUrl: string;
		title: string;
		description: string;
		image: string;
		imageAlt: string;
		siteName: string;
		language: string;
	};

	socials?: SocialMetadata[];
};
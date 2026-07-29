export type LinkData = {
	readonly href: string;
	readonly external: boolean;

	readonly img: {
		readonly href: string;
		readonly alt: string;
	};

	readonly title: string;
	readonly subTitle: string;
	readonly description: string;
};
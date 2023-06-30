export interface ShowcaseProps {
	title: string;
	type: string;
	description: string;
	cover: string;
	year: string;
	images: Array<string>;
	links: Array<{
		title: string;
		url: string;
		icon: string;
	}>;
	tech_stack: Array<{
		title: string;
		icon: string;
	}>;
}

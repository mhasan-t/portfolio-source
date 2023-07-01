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
	myRole: {
		title: string;
		description: string;
	};
}

export interface SkillProps {
	"Programming Languages": Array<{
		name: string;
		icon: string;
	}>;
	"Web Frameworks": Array<{
		name: string;
		icon: string;
	}>;
	"Backend Frameworks": Array<{
		name: string;
		icon: string;
	}>;
	Databases: Array<{
		name: string;
		icon: string;
	}>;
	"Native Mobile": Array<{
		name: string;
		icon: string;
	}>;
	Others: Array<{
		name: string;
		icon: string;
	}>;
}

export interface ShowcaseProps {
	title: string;
	type: string;
	description: string;
	cover: string;
	year: string;
	numberOfImages: number;
	imagesFolder: string;
	imageType: "wide" | "tall";
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
	features: Array<string>;
}

export interface SkillProps {
	"Programming Languages": Array<Skill>;
	"Web Frameworks": Array<Skill>;
	"Backend Frameworks": Array<Skill>;
	Databases: Array<Skill>;
	"Native Mobile": Array<Skill>;
	Others: Array<Skill>;
}

interface Skill {
	name: string;
	icon: string;
	level: number;
}

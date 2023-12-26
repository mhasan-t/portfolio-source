import {
	Roboto,
	Quicksand,
	Urbanist,
	DM_Serif_Display,
	Overpass,
} from "next/font/google";

const primary = Overpass({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

const title = DM_Serif_Display({
	weight: ["400"],
	subsets: ["latin"],
});

const header = Urbanist({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

const quicksand = Quicksand({
	weight: ["300", "400", "500", "700", "600"],
	subsets: ["latin"],
});

export default { primary, title, header, quicksand };

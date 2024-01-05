import { Urbanist, Koulen, Heebo } from "next/font/google";

const primary = Heebo({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

const title = Koulen({
	weight: ["400"],
	subsets: ["latin"],
});

const header = Urbanist({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export default { primary, title, header };

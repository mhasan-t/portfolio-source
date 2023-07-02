import { motion } from "framer-motion";
import { Dancing_Script, Alegreya_Sans_SC } from "next/font/google";

import { ShowcaseProps } from "@/types";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const secondaryFont = Alegreya_Sans_SC({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseHeader(props: { data: ShowcaseProps }) {
	return (
		<div>
			<motion.div
				className={
					"text-center text-3xl font-bold text-black " +
					dancingFont.className
				}
			>
				{props.data.title}
			</motion.div>
			<motion.div
				className={
					"text-center text-[#4a5568] text-[14px] font-[500] " +
					secondaryFont.className
				}
			>
				{props.data.type} - {props.data.year}
			</motion.div>
		</div>
	);
}

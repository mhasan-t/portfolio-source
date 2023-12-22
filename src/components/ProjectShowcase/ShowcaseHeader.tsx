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
		<motion.div className="flex flex-col items-end">
			<motion.div
				className={"text-right text-xl md:text-2xl text-text_primary "}
			>
				{props.data.title}
			</motion.div>
			<motion.div
				className={
					"text-center text-slate-300 text-xs font-[500] " +
					secondaryFont.className
				}
			>
				{props.data.type} - {props.data.year}
			</motion.div>
		</motion.div>
	);
}

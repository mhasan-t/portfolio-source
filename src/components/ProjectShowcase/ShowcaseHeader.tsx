import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

import { ShowcaseProps } from "@/types";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function ShowcaseHeader(props: { data: ShowcaseProps }) {
	return (
		<div>
			<motion.div
				className={
					"text-center text-3xl font-bold  " + dancingFont.className
				}
			>
				{props.data.title}
			</motion.div>
			<motion.div className="text-center text-[#4a5568] text-[14px] font-[500]">
				{props.data.type} - {props.data.year}
			</motion.div>
		</div>
	);
}

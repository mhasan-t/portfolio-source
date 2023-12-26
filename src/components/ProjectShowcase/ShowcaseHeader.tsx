import { motion } from "framer-motion";
import { Dancing_Script, Alegreya_Sans_SC } from "next/font/google";

import { ShowcaseProps } from "@/types";

export default function ShowcaseHeader(props: { data: ShowcaseProps }) {
	return (
		<motion.div className="flex flex-col items-end">
			<motion.div className="text-right text-xl md:text-2xl text-text_primary font-bold ">
				{props.data.title}
			</motion.div>
			<motion.div className="text-center text-slate-200 text-xs font-[500] ">
				{props.data.type} - {props.data.year}
			</motion.div>
		</motion.div>
	);
}

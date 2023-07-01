import React from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseDescription(props: { description: string }) {
	return (
		<motion.div>
			<motion.div className="text-[#2d3748] font-[700]">
				Description
			</motion.div>
			<motion.div
				className={"text-[#4a5568] text-sm " + secondaryFont.className}
			>
				{props.description}
			</motion.div>
		</motion.div>
	);
}
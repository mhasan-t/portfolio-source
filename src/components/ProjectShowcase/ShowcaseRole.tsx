import React from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseRole(props: {
	role: { title: string; description: string };
}) {
	return (
		<motion.div>
			<motion.div className="text-[#2d3748] font-[700]">
				My Role -{" "}
				<span className="text-gray-500 font-normal text-sm">
					{props.role.title}
				</span>
			</motion.div>
			<motion.div
				className={"text-[#4a5568] text-sm " + secondaryFont.className}
			>
				{props.role.description}
			</motion.div>
		</motion.div>
	);
}

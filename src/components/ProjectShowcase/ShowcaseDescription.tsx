import React from "react";
import { motion } from "framer-motion";

export default function ShowcaseDescription(props: { description: string }) {
	return (
		<motion.div>
			<motion.div className="text-[#2d3748] font-[700]">
				Description
			</motion.div>
			<motion.div className="text-[#4a5568]">
				{props.description}
			</motion.div>
		</motion.div>
	);
}

import React from "react";
import { motion } from "framer-motion";

export default function ShowcaseDescription(props: { description: string }) {
	return (
		<motion.div>
			<motion.div className=" font-[700]">Description</motion.div>
			<motion.div className=" text-sm ">{props.description}</motion.div>
		</motion.div>
	);
}

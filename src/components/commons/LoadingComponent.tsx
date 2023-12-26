import React from "react";
import { motion } from "framer-motion";

type Props = {};

function LoadingComponent({}: Props) {
	return (
		<div className="w-screen h-screen fixed z-50 bg-primary flex justify-center items-center">
			<motion.div
				animate={{
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 0.5,
					repeat: Infinity,
					repeatDelay: 0,
					repeatType: "loop",
				}}
				className="bg-text_primary w-40 h-40 rounded-full"
			></motion.div>
		</div>
	);
}

export default LoadingComponent;

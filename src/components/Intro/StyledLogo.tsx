import React from "react";
import { motion } from "framer-motion";

export default function StyledLogo() {
	return (
		<motion.img
			animate={{
				rotate: [0, 360],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatDelay: 0,
				repeatType: "loop",
			}}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			className="w-10 h-10 lg:w-20 lg:h-20 absolute top-7 left-5 xl:top-16 xl:left-16 border-2 border-white rounded-md"
			src="/logo.png"
			alt="logo"
		/>
	);
}

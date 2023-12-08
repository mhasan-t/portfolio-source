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
			className="absolute z-10 w-14 h-14 top-4 left-4"
			src="/logo.png"
			alt="logo"
		/>
	);
}

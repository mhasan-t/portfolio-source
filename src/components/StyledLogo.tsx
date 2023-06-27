"use client";

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
			className="w-20 h-20 absolute top-7 left-5 xl:top-16 xl:left-16"
			src="http://localhost/logo.png"
			alt="logo"
		/>
	);
}

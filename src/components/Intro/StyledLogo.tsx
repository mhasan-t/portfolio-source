import React from "react";
import { motion } from "framer-motion";
import fonts from "@/app/fonts";
import TextDance from "../commons/TextDance";

export default function StyledLogo() {
	return (
		<div className="static pt-8 bg-primary md:absolute z-10 md:left-8 md:top-0 flex flex-col md:flex-row gap-10 justify-center items-center">
			<motion.div
				animate={{
					rotate: [0, 360],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatDelay: 0,
					repeatType: "loop",
				}}
				className="w-14 h-14"
			>
				<motion.img className="w-14 h-14" src="/logo.png" alt="logo" />
			</motion.div>
			<div className={`${fonts.header.className} text-text_primary`}>
				<TextDance>muhibalhasan1@gmail.com</TextDance>
			</div>
		</div>
	);
}

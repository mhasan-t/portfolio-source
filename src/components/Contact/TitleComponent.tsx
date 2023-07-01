import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	Lobster_Two,
	Amatic_SC,
	JetBrains_Mono,
	Caveat,
	Dancing_Script,
} from "next/font/google";

const lobsterFont = Lobster_Two({ weight: ["400", "700"], subsets: ["latin"] });
const amaticFont = Amatic_SC({ weight: ["400", "700"], subsets: ["latin"] });
const jetMonoFont = JetBrains_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const caveatFont = Caveat({ weight: ["400", "700"], subsets: ["latin"] });
const dancingScriptFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function TitleComponent() {
	const fonts = [
		lobsterFont,
		amaticFont,
		jetMonoFont,
		caveatFont,
		dancingScriptFont,
	];
	// const [sectionTitleFontIndex, setSectionTitleFontIndex] = useState(0);

	// useEffect(() => {
	// 	// changeFont();
	// 	const interval = setInterval(() => {
	// 		setSectionTitleFontIndex(
	// 			(sectionTitleFontIndex + 1) % fonts.length
	// 		);
	// 	}, 300);

	// 	//Clearing the interval
	// 	return () => clearInterval(interval);
	// }, [sectionTitleFontIndex]);

	return (
		<motion.div
			className={
				" text-black font-bold text-center text-6xl justify-center items-center  " +
				amaticFont.className
			}
			animate={{
				x: [0, 10, 20, 0, -50, -30, 0],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatDelay: 0,
				repeatType: "loop",
			}}
		>
			SKILLS
		</motion.div>
	);
}

"use client";

import React, { useEffect, useState } from "react";
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
	const [sectionTitleFontIndex, setSectionTitleFontIndex] = useState(0);

	useEffect(() => {
		// changeFont();
		const interval = setInterval(() => {
			setSectionTitleFontIndex(
				(sectionTitleFontIndex + 1) % fonts.length
			);
		}, 300);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [sectionTitleFontIndex]);

	return (
		<div
			className={
				" text-white text-center text-5xl justify-center items-center  " +
				fonts[sectionTitleFontIndex].className
			}
		>
			Showcase
		</div>
	);
}

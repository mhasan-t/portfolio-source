"use client";

import React, { useEffect, useState } from "react";
import {
	Lobster_Two,
	Amatic_SC,
	JetBrains_Mono,
	Caveat,
	Dancing_Script,
} from "next/font/google";

import TitleComponent from "./TitleComponent";
import ShowcaseCard from "./ShowcaseCard";

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

export default function Showcase() {
	const showCaseData = require("../../../ShowCaseData.json");
	const [selectedShowCaseIndex, setSelectedShowCaseIndex] = useState(0);

	return (
		<div className="justify-center items-center bg-gradient-to-b from-black to-gray-900  relative w-[100vw] pt-40 pb-28 px-16 ">
			<TitleComponent />

			<div className="flex flex-col justify-center items-center gap-5 lg:grid lg:grid-cols-2 m-auto p-24 mt-10 ">
				<ShowcaseCard data={showCaseData[selectedShowCaseIndex]} />
				<ShowcaseCard
					data={showCaseData[selectedShowCaseIndex]}
					className=" z-10"
				/>
				<ShowcaseCard data={showCaseData[selectedShowCaseIndex]} />
			</div>
		</div>
	);
}

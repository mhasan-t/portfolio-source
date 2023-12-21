import { useState } from "react";
import {
	Lobster_Two,
	Amatic_SC,
	JetBrains_Mono,
	Caveat,
	Dancing_Script,
} from "next/font/google";
import { ShowcaseProps } from "@/types";

import ShowcaseCard from "./ShowcaseCard";
import "@/styles/showcaseCurves.scss";
import TitleComponent from "../commons/TitleComponent";

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

const showCaseData = require("@/../data/ShowCaseData.json");
export default function Showcase() {
	return (
		<div
			id="projectShowcase"
			className="justify-center items-center bg-gradient-to-b bg-primary pt-12 lg:pt-20 pb-16 lg:px-16 px-2 relative z-10 overflow-x-clip "
		>
			<div className="curvyOnTop flex items-center justify-center">
				<TitleComponent titleText="PROJECT SHOWCASE" />
			</div>

			<div className="flex flex-col flex-wrap justify-center items-center gap-5 m-auto p-2 lg:mt-10 ">
				{showCaseData.map((showcase: ShowcaseProps, index: number) => (
					<ShowcaseCard key={index} data={showcase} />
				))}
			</div>
			{/* {selectedShowCaseIndex !== null && (
				<ShowcaseDetails
					data={showCaseData[selectedShowCaseIndex]}
					setSelectedShowCaseIndex={setSelectedShowCaseIndex}
				/>
			)} */}
		</div>
	);
}

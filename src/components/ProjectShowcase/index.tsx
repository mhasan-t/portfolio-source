import { useState } from "react";
import {
	Lobster_Two,
	Amatic_SC,
	JetBrains_Mono,
	Caveat,
	Dancing_Script,
} from "next/font/google";
import { ShowcaseProps } from "@/types";

import TitleComponent from "./TitleComponent";
import ShowcaseCard from "./ShowcaseCard";
import "@/styles/showcaseCurves.scss";

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

const showCaseData = require("../../../ShowCaseData.json");
export default function Showcase() {
	const [selectedShowCaseIndex, setSelectedShowCaseIndex] = useState<
		number | null
	>(null);

	return (
		<div className="justify-center items-center bg-gradient-to-b bg-cyan-200 lg:pt-20 pb-16 lg:px-16 px-2 relative z-10 overflow-x-clip ">
			<div className="curvyOnTop"></div>
			<TitleComponent />

			<div className="flex flex-row flex-wrap justify-center items-center gap-5 m-auto lg:p-24 p-2 mt-10 ">
				{showCaseData.map((showcase: ShowcaseProps, index: number) => (
					<ShowcaseCard
						key={index}
						data={showcase}
						setSelectedShowCaseIndex={setSelectedShowCaseIndex}
					/>
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

import React from "react";
import { motion } from "framer-motion";
import { Roboto, Dancing_Script, Raleway } from "next/font/google";

import { ShowcaseProps } from "@/types";
import ShowcaseHeader from "./ShowcaseHeader";
import ImageCarousel from "./ImageCarousel";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseLinks from "./ShowcaseLinks";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseRole from "./ShowcaseRole";
import ShowcaseFeatures from "./ShowcaseFeatures";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseDetails({
	data,
	setSelectedShowCaseIndex,
	setIsOpen,
}: {
	data: ShowcaseProps;
	setSelectedShowCaseIndex: React.Dispatch<
		React.SetStateAction<number | null>
	>;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<motion.div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen">
			{/* BACKGROUND */}
			<motion.div
				className="absolute w-screen h-screen bg-black opacity-70 z-0"
				onClick={() => {
					setIsOpen(false);
				}}
			></motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				className="relative w-[95vw] h-[95vh] lg:w-[80vw]  bg-cyan-50 z-10 rounded-2xl p-10 shadow-2xl flex flex-col lg:gap-5 overflow-y-scroll lg:overflow-y-hidden"
			>
				{/* TOP */}
				<div>
					<ShowcaseHeader data={data} />
					<button
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<img
							src="/x.png"
							alt="X button"
							className="absolute w-10 h-10 top-5 right-5 cursor-pointer hover:scale-110 transition-all duration-300"
						/>
					</button>
				</div>

				<ImageCarousel data={data} />
				<div className="flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:gap-4">
					<div className="flex flex-col gap-2  ">
						<ShowcaseDescription description={data.description} />
						<ShowcaseTechs tech_stack={data.tech_stack} />
					</div>
					<div className="flex flex-col gap-2 justify-between">
						<ShowcaseRole role={data.myRole} />
						{data.links.length != 0 && (
							<ShowcaseLinks links={data.links} />
						)}
					</div>
					<div>
						<ShowcaseFeatures features={data.features} />
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

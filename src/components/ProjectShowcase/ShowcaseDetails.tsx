import React from "react";
import { motion } from "framer-motion";
import { Roboto, Dancing_Script } from "next/font/google";

import { ShowcaseProps } from "@/types";
import ShowcaseHeader from "./ShowcaseHeader";
import ImageCarousel from "./ImageCarousel";

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
		<motion.div>
			{/* BACKGROUND */}
			<motion.div
				className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-0"
				onClick={() => {
					console.log("first");
					setIsOpen(false);
				}}
			></motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				className="fixed top-10 w-[95vw] h-[90vh] left-10 lg:w-[80vw] lg:left-36 bg-cyan-50 z-10 rounded-2xl p-10 shadow-2xl"
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
			</motion.div>
		</motion.div>
	);
}

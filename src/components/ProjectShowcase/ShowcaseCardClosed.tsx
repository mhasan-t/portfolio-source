import React from "react";
import { Roboto, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

import { ShowcaseProps } from "@/types";
import ShowcaseLinks from "./ShowcaseLinks";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseHeader from "./ShowcaseHeader";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseCardClosed({
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
		<motion.div
			layout
			onClick={() => {
				setIsOpen(true);
			}}
			whileHover={{
				scale: 1.05,
				// transition: { duration: 0.001, type: "tween" },
			}}
			whileTap={{ scale: 0.9 }}
			className="bg-cyan-50 rounded-xl shadow-2xl w-full h-full p-5 max-w-2xl transition-all duration-700 "
		>
			{/* HEADER */}
			<ShowcaseHeader data={data} />

			{/* CONTENT */}
			<motion.div
				className={
					"mt-5 flex flex-col lg:flex-row gap-2 justify-center " +
					secondaryFont.className
				}
			>
				{/* COVER */}
				<motion.div className="w-full mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg">
					<motion.img
						className="object-cover w-full h-full rounded-xl"
						src={"/covers/" + data.cover}
						alt={data.title + " image"}
					/>
				</motion.div>

				{/* DETAILS */}
				<motion.div className="text-[14px] font-[500] flex flex-col gap-2 ">
					<ShowcaseDescription description={data.description} />
					<ShowcaseTechs tech_stack={data.tech_stack} />
					<ShowcaseLinks links={data.links} />
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

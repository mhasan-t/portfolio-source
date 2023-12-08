import React from "react";
import { motion } from "framer-motion";

import { ShowcaseProps } from "@/types";
import ShowcaseLinks from "./ShowcaseLinks";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseHeader from "./ShowcaseHeader";

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
			className="bg-white rounded-xl shadow-2xl w-[80vw] lg:w-fit h-full p-5 max-w-2xl  "
		>
			{/* HEADER */}
			<ShowcaseHeader data={data} />

			{/* CONTENT */}
			<motion.div
				className={
					"mt-5 flex flex-col lg:flex-row gap-2 justify-center items-center w-full lg:w-[30vw] "
				}
			>
				{/* COVER */}
				<motion.div className=" grow-0">
					<motion.img
						className="object-contain rounded-xl w-fit h-full max-h-[300px] border-[1px] border-gray-300 shadow-lg"
						src={"/covers/" + data.cover}
						alt={data.title + " image"}
					/>
				</motion.div>

				{/* DETAILS */}
				<motion.div className="basis-3/6 grow-1 text-[14px] font-[500] flex flex-col gap-2 ">
					<ShowcaseDescription description={data.description} />
					<ShowcaseTechs tech_stack={data.tech_stack} />
					{data.links.length != 0 && (
						<ShowcaseLinks links={data.links} />
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

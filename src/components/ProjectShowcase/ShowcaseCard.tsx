import React from "react";
import { Roboto, Dancing_Script } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

import { ShowcaseProps } from "@/types";
import Brick from "../commons/Brick";
import ShowcaseCardClosed from "./ShowcaseCardClosed";
import ShowcaseDetails from "./ShowcaseDetails";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseCard({
	data,
	className,
	setSelectedShowCaseIndex,
}: {
	data: ShowcaseProps;
	className?: string;
	setSelectedShowCaseIndex: React.Dispatch<
		React.SetStateAction<number | null>
	>;
}) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<motion.div exit={{ scale: 0 }}>
			{!isOpen ? (
				<ShowcaseCardClosed
					data={data}
					setSelectedShowCaseIndex={setSelectedShowCaseIndex}
					setIsOpen={setIsOpen}
				/>
			) : (
				<ShowcaseDetails
					data={data}
					setSelectedShowCaseIndex={setSelectedShowCaseIndex}
					setIsOpen={setIsOpen}
				/>
			)}
		</motion.div>
	);
}

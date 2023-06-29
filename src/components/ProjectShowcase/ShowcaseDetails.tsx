import React from "react";
import { AnimatePresence } from "framer-motion";

import { ShowcaseProps } from "@/types";

export default function ShowcaseDetails({
	data,
	setSelectedShowCaseIndex,
}: {
	data: ShowcaseProps;
	setSelectedShowCaseIndex: React.Dispatch<
		React.SetStateAction<number | null>
	>;
}) {
	return (
		<div>
			<div
				className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-0"
				onClick={() => {
					setSelectedShowCaseIndex(null);
				}}
			></div>
			<div className="fixed top-10 w-[95vw] h-[90vh] left-10 lg:w-[80vw] lg:left-36 bg-white z-10 rounded-2xl p-10 shadow-2xl">
				ShowcaseDetails
			</div>
		</div>
	);
}

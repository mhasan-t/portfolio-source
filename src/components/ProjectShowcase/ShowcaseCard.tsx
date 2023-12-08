import React, { memo } from "react";
import { motion } from "framer-motion";

import { ShowcaseProps } from "@/types";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseRole from "./ShowcaseRole";
import ShowcaseFeatures from "./ShowcaseFeatures";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseLinks from "./ShowcaseLinks";

function ShowcaseCard({
	data,
	className,
}: {
	data: ShowcaseProps;
	className?: string;
}) {
	const [isOpen, setIsOpen] = React.useState(false);

	console.log(data);

	return (
		<motion.div
			exit={{ scale: 0 }}
			className="border-b-2 border-secondary rounded-md w-full p-6"
		>
			<motion.div className="flex gap-4 flex-col justify-center items-center md:flex-row md:justify-between">
				<motion.img
					src="https://placekitten.com/200/300"
					alt=""
					className="rounded-md w-1/3"
				/>
				<motion.div className="flex flex-col gap-2 w-full">
					<ShowcaseHeader data={data} />
					<ShowcaseDescription description={data.description} />
					<ShowcaseRole role={data.myRole} />
					<ShowcaseFeatures features={data.features} />
					<ShowcaseTechs tech_stack={data.tech_stack} />
					{data.links !== undefined && data.links.length !== 0 && (
						<ShowcaseLinks links={data.links} />
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default memo(ShowcaseCard);

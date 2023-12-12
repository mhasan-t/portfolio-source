import React, { memo } from "react";
import { motion } from "framer-motion";

import { ShowcaseProps } from "@/types";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseRole from "./ShowcaseRole";
import ShowcaseFeatures from "./ShowcaseFeatures";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseLinks from "./ShowcaseLinks";
import FadeIn from "../commons/FadeIn";
import TallImageCarousel from "./TallImageCarousel";
import WideImageCarousel from "./WideImageCarousel";

function ShowcaseCard({
	data,
	className,
}: {
	data: ShowcaseProps;
	className?: string;
}) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<motion.div
			layout
			exit={{ scale: 0 }}
			className="border-b-2 border-secondary rounded-md w-full p-6 pt-20 md:p-6"
		>
			<motion.div className="flex flex-col lg:flex-row gap-4 items-center">
				<div className="w-full h-full flex justify-center items-center">
					<FadeIn from="left">
						{data.images.length > 1 ? (
							data.imageType === "tall" ? (
								<TallImageCarousel data={data} />
							) : (
								<WideImageCarousel data={data} />
							)
						) : (
							<motion.img
								className="object-contain h-fit max-h-full border-[1px] border-gray-300 rounded-xl shadow-lg"
								src={
									"/images/" +
									data.imagesFolder +
									"/" +
									data.images[0]
								}
								alt={data.title + " image"}
							/>
						)}
					</FadeIn>
				</div>
				<motion.div className="flex flex-col gap-2 w-full">
					<FadeIn from="top-right">
						<ShowcaseHeader data={data} />
					</FadeIn>

					<FadeIn from="bottom-right">
						<ShowcaseDescription description={data.description} />
						<ShowcaseRole role={data.myRole} />
						<ShowcaseFeatures features={data.features} />
						<ShowcaseTechs tech_stack={data.tech_stack} />
						{data.links !== undefined &&
							data.links.length !== 0 && (
								<ShowcaseLinks links={data.links} />
							)}
					</FadeIn>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default memo(ShowcaseCard);

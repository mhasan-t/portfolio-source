import React from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseFeatures({
	features,
}: {
	features: Array<string>;
}) {
	return (
		<motion.div>
			<motion.div className="text-[#2d3748] font-[700]">
				Features
			</motion.div>
			<motion.div className="lg:flex lg:flex-col lg:gap-2">
				<div className=" list-disc list-inside ">
					{features.map((feature) => {
						return (
							<li
								key={feature}
								className={
									"text-[#4a5568] text-sm m-0 p-0 " +
									secondaryFont.className
								}
							>
								{feature}
							</li>
						);
					})}
				</div>
			</motion.div>
		</motion.div>
	);
}

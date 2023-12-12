import { motion } from "framer-motion";

export default function ShowcaseFeatures({
	features,
}: {
	features: Array<string>;
}) {
	return (
		<motion.div>
			<motion.div className="text-text_secondary font-[700]">
				Features
			</motion.div>
			<motion.div className="lg:flex lg:flex-col lg:gap-2">
				<div className=" list-disc list-inside ">
					{features.map((feature) => {
						return (
							<li
								key={feature}
								className="text-text_secondary text-sm m-0 p-0 "
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

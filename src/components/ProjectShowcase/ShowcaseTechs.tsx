import React from "react";
import { motion } from "framer-motion";
import Brick from "@/components/commons/Brick";

export default function ShowcaseTechs(props: {
	tech_stack: Array<{
		title: string;
		icon: string;
	}>;
}) {
	return (
		<motion.div>
			<motion.div className="text-[#2d3748] font-[700]">
				Technologies Used
			</motion.div>
			<motion.div className="lg:flex lg:flex-row lg:gap-2">
				{props.tech_stack.map((tech) => {
					return (
						<Brick
							key={tech.title}
							img_src={"/icons/" + tech.icon}
							text={tech.title}
							classNames=" border-gray-300"
						/>
					);
				})}
			</motion.div>
		</motion.div>
	);
}

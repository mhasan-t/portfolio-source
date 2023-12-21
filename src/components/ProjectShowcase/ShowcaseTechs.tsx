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
			<motion.div className=" font-[700]">Technologies Used</motion.div>
			<motion.div className="flex flex-row flex-wrap gap-2">
				{props.tech_stack.map((tech) => {
					return (
						<Brick
							key={tech.title}
							img_src={"/icons/" + tech.icon}
							text={tech.title}
							classNames=" border-2 border-secondary p-1 border-text_secondary"
						/>
					);
				})}
			</motion.div>
		</motion.div>
	);
}

import { motion } from "framer-motion";
import { Lobster_Two } from "next/font/google";

import Brick from "../commons/Brick";
import { useRef, useState } from "react";
import { useIsInViewport } from "../useIsInViewport";

const lobsterFont = Lobster_Two({ weight: ["400", "700"], subsets: ["latin"] });
const container = {
	hidden: { opacity: 0 },
	visible: (i = 1) => ({
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.04 * i,
			duration: 0.01,
		},
	}),
};

const child = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			damping: 12,
			// stiffness: 100,,
			duration: 0.01,
		},
	},
	hidden: {
		opacity: 0,
		y: -100,
		transition: {
			type: "spring",
			damping: 12,
			// stiffness: 100,,
			duration: 0.01,
		},
	},
};

export default function BricksOfSkills({
	title,
	data,
}: {
	title: string;
	data: Array<{ name: string; icon: string }>;
}) {
	const ref = useRef(null);
	const isInView = useIsInViewport(ref);
	console.log(isInView);

	return (
		<div className="flex flex-col justify-end" ref={ref}>
			<motion.div
				variants={container}
				initial="hidden"
				animate={isInView ? "visible" : ""}
				className="flex flex-col gap-2"
			>
				{data.map((skill: any, index: number) => (
					<motion.div key={index} variants={child}>
						<Brick
							key={index}
							text={skill.name}
							img_src={"/icons/" + skill.icon}
							classNames="bg-green-100 rounded-lg"
						/>
					</motion.div>
				))}
			</motion.div>
			<div
				className={
					"font-bold mt-2 pt-2 border-t-2 " + lobsterFont.className
				}
			>
				{title}
			</div>
		</div>
	);
}
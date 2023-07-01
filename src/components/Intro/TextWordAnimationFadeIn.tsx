import React from "react";
import { motion } from "framer-motion";

export default function TextAnimationFadeIn({
	children,
	parentDivClassName,
	delay,
}: {
	delay?: number;
	children: string;
	parentDivClassName: string;
}) {
	const words = children.split(" ");
	const delayBy = delay == undefined ? 0 : delay;

	// Variants for Container of words.
	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.42,
				delayChildren: delayBy + 0.04 * i,
			},
			delay: delayBy,
		}),
	};

	// Variants for each word.

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 80,
				// stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: 20,
			transition: {
				type: "spring",
				damping: 120,
				// stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			style={{ overflow: "hidden", display: "flex" }}
			variants={container}
			initial="hidden"
			animate="visible"
			className={parentDivClassName}
		>
			{words.map((word: string, index: number) => (
				<motion.span variants={child} className="text-7xl" key={index}>
					{word} &nbsp;
				</motion.span>
			))}
		</motion.div>
	);
}

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsInViewport } from "../useIsInViewport";

export default function TextAnimationFadeIn({
	children,
	parentDivClassName = "",
	fromLeft = false,
	delay = 0,
	letters = false,
}: {
	fromLeft?: boolean;
	delay?: number;
	letters?: boolean;
	children: string;
	parentDivClassName?: string;
}) {
	const words = letters ? children.split("") : children.split(" ");
	const delayBy = delay === undefined ? 0.04 : delay;
	console.log(words);

	// Variants for Container of words.
	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: letters ? 0.06 : 0.1,
				delayChildren: delayBy + 0.04 * i,
				duration: 0.01,
				delay: delayBy,
			},
		}),
	};

	// Variants for each word.

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				// stiffness: 100,,
				duration: 0.01,
			},
		},
		hidden: {
			opacity: 0,
			x: fromLeft ? -20 : 20,
			transition: {
				type: "spring",
				damping: 12,
				// stiffness: 100,,
				duration: 0.01,
			},
		},
	};

	const ref = useRef(null);
	const isInView = useIsInViewport(ref);

	return (
		<motion.div
			ref={ref}
			style={{ overflow: "hidden", display: "flex" }}
			variants={container}
			initial="hidden"
			animate={isInView ? "visible" : ""}
			className={parentDivClassName}
		>
			{words.map((word: string, index: number) => (
				<motion.span variants={child} key={index}>
					{letters ? (word === " " ? "\u00A0" : word) : word}{" "}
					{letters ? "" : "\u00A0"}
				</motion.span>
			))}
		</motion.div>
	);
}

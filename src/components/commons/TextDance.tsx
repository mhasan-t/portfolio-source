import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIsInViewport } from "../../app/hooks/useIsInViewport";

export default function TextDance({
	children,
	parentDivClassName = "",
}: {
	fromLeft?: boolean;
	delay?: number;
	letters?: boolean;
	children: string;
	parentDivClassName?: string;
}) {
	const letters = children.split("");

	// Variants for Container of words.
	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				duration: 0.01,
			},
		}),
	};

	// Variants for each word.

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
			opacity: 1,
			y: 20,
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
			className={"flex flex-wrap " + parentDivClassName}
		>
			{letters.map((letter: string, index: number) => (
				<>
					<motion.span variants={child} key={index}>
						{letter}
					</motion.span>
				</>
			))}
		</motion.div>
	);
}

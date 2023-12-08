import { MotionConfigContext, MotionStyle, motion } from "framer-motion";
import React, { PropsWithChildren, ReactComponentElement, memo } from "react";

type Props = {
	from:
		| "top"
		| "bottom"
		| "left"
		| "right"
		| "bottom-left"
		| "bottom-right"
		| "top-left"
		| "top-right";
	distance?: number;
	delay?: number;
} & PropsWithChildren;

function FadeIn({ from, children, distance, delay }: Props) {
	const dist = distance ?? 40;

	let animateX = 0;
	let animateY = 0;

	if (from.includes("left")) {
		animateX = -dist;
	}
	if (from.includes("right")) {
		animateX = dist;
	}

	if (from.includes("top")) {
		animateY = -dist;
	}
	if (from.includes("bottom")) {
		animateY = dist;
	}

	const fadeIn = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				duration: 0.4,
				delay: delay ?? 0,
			},
		},
		hidden: {
			opacity: 0,
			x: animateX,
			y: animateY,
		},
	};

	return (
		<motion.div variants={fadeIn} initial="hidden" animate="visible">
			{children}
		</motion.div>
	);
}

export default memo(FadeIn);

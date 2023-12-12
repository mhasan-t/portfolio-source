import { motion } from "framer-motion";
import { PropsWithChildren, memo, useRef } from "react";
import { useIsInViewport } from "../useIsInViewport";

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
	classNames?: string;
} & PropsWithChildren;

function FadeIn({ from, children, distance, delay, classNames }: Props) {
	// CALC X and Y
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

	const ref = useRef(null);
	const { isIntersecting, visitedAlready } = useIsInViewport(ref);

	return (
		<motion.div
			className={"w-full h-full " + classNames}
			ref={ref}
			variants={fadeIn}
			initial={visitedAlready ? "" : "hidden"}
			animate={isIntersecting == true ? "visible" : ""}
		>
			{children}
		</motion.div>
	);
}

export default memo(FadeIn);

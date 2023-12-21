import React, { memo, useRef } from "react";
import { motion } from "framer-motion";
import { useIsInViewport } from "@/app/hooks/useIsInViewport";

type Props = {
	widthTo?: string;
	height?: string;
	classNames?: string;
};

function HorizontalLineWidens({ widthTo, height, classNames }: Props) {
	const ref = useRef(null);
	const { isIntersecting } = useIsInViewport(ref);

	const animateVar = {
		initial: {
			width: 0,
			height: height ?? "2px",
		},
		animate: {
			width: widthTo ?? "100%",
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			className={"w-screen flex justify-end " + classNames}
			initial="initial"
			animate={isIntersecting ? "animate" : ""}
			variants={animateVar}
		>
			<motion.div
				className="bg-text_primary"
				initial="initial"
				animate={isIntersecting ? "animate" : ""}
				variants={animateVar}
			></motion.div>
		</motion.div>
	);
}

export default memo(HorizontalLineWidens);

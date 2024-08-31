import React, { useRef } from "react";

import { useIsInViewport } from "../../app/hooks/useIsInViewport";

export default function TextDance({
	children,
	parentDivClassName = "",
	delay,
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
				delay: delay ?? 0,
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
				duration: 0.01,
			},
		},
		hidden: {
			opacity: 1,
			y: 20,
		},
	};

	const ref = useRef(null);
	const isInView = useIsInViewport(ref);

	return (
		<div>
			{letters.map((letter: string, index: number) => (
				<span>{letter}</span>
			))}
		</div>
	);
}

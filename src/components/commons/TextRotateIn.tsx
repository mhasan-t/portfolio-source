import React, { useRef } from "react";

import { useIsInViewport } from "../../app/hooks/useIsInViewport";

export default function TextRotateIn({
	children,
	vertical,
	parentDivClassName = "",
}: {
	vertical?: boolean;
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
			x: 0,
			y: 0,
			rotateY: 0,
			rotateX: 0,
			transition: {
				type: "spring",
				damping: 12,
				// stiffness: 100,,
				duration: 0.01,
			},
		},
		hidden: {
			opacity: 0,
			x: -20,
			...(vertical ? { rotateX: 180 } : { rotateY: 180 }),
			transition: {
				type: "spring",
				damping: 12,
				// stiffness: 100,,
				duration: 0.01,
			},
		},
	};

	const ref = useRef(null);
	const { isIntersecting, visitedAlready } = useIsInViewport(ref);

	return (
		<div>
			{letters.map((letter: string, index: number) => (
				<span>{letter == " " ? "\u00A0" : letter}</span>
			))}
		</div>
	);
}

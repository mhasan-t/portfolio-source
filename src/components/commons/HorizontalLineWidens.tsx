import React, { memo, useRef } from "react";

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
		<div>
			<div></div>
		</div>
	);
}

export default memo(HorizontalLineWidens);

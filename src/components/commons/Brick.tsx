import React from "react";
import { Fira_Sans } from "next/font/google";

const textFont = Fira_Sans({
	weight: ["200", "300", "400", "700"],
	subsets: ["latin"],
});

export default function Brick({
	img_src,
	text,
	classNames,
}: {
	img_src: string;
	text: string;
	classNames?: string;
}) {
	return (
		<div
			className={
				"text-text_secondary text-xs font-[400] text rounded-md flex flex-row gap-1 " +
				classNames +
				" " +
				textFont.className
			}
		>
			<img src={img_src} alt={text + " logo"} className="w-4 h-4" />
			{text}
		</div>
	);
}

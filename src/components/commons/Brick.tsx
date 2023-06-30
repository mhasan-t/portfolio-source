import React from "react";
import { Fira_Sans } from "next/font/google";

const textFont = Fira_Sans({
	weight: ["200", "300", "400", "700"],
	subsets: ["latin"],
});

export default function Brick({
	img_src,
	text,
}: {
	img_src: string;
	text: string;
}) {
	return (
		<div
			className={
				"text-[#4a5568] text-xs font-[300] text p-2 border-[1px] rounded-md flex flex-row gap-1 " +
				textFont.className
			}
		>
			<img src={img_src} alt={text + " logo"} className="w-4 h-4" />
			{text}
		</div>
	);
}

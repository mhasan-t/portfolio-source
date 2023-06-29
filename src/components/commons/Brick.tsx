import React from "react";

export default function Brick({
	img_src,
	text,
}: {
	img_src: string;
	text: string;
}) {
	return (
		<div className="text-[#4a5568] p-2 border-[1px] rounded-md flex flex-row gap-1">
			<img src={img_src} alt={text + " logo"} className="w-5 h-5" />
			{text}
		</div>
	);
}

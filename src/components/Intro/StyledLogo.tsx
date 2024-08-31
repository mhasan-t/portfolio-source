import React from "react";

import fonts from "@/app/fonts";
import TextDance from "../commons/TextDance";

export default function StyledLogo() {
	return (
		<div className="static bg-primary md:absolute z-10 md:left-8 md:top-4 flex flex-col md:flex-row gap-1 md:gap-10 justify-center items-center">
			<div>
				<img>
			</div>
			<div className={`${fonts.header.className} text-text_primary`}>
				<TextDance>muhibalhasan1@gmail.com</TextDance>
			</div>
		</div>
	);
}

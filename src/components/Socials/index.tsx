import React, { memo, useEffect, useState } from "react";
import SocialButton from "./SocialButton";

type Props = {};

const hangRope = {
	initial: {
		height: "13vh",
	},
	animate: {
		height: ["15vh", "13vh", "15vh"],
		transition: {
			repeat: Infinity,
			duration: 1,
			type: "easeIn",
		},
	},
};

function Socials({}: Props) {
	return (
		<div className="absolute md:fixed h-screen right-3 md:right-6 top-0 z-30 text-text_primary flex flex-col justify-start items-center">
			<div></div>
			<SocialButton
				imgSrc="/icons/gmail-soc.png"
				alt="email"
				link="mailto:muhibalhasan1@gmail.com"
			/>
			<div></div>

			<SocialButton
				imgSrc="/icons/linkedin-soc.png"
				alt="linkedin link"
				link="https://www.linkedin.com/in/muhib-al-hasan-121001160/"
			/>
			<div></div>

			<SocialButton
				imgSrc="/icons/github-soc.png"
				alt="Github Link"
				link="https://github.com/mhasan-t/"
			/>
		</div>
	);
}

export default memo(Socials);

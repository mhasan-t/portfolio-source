import React, { memo, useEffect, useState } from "react";
import { MotionStyle, motion } from "framer-motion";
import SocialButton from "./SocialButton";

type Props = {};

const hangRope = {
	initial: {
		height: "10vh",
	},
	animate: {
		height: ["15vh", "10vh", "15vh"],
		transition: {
			repeat: Infinity,
			duration: 1,
			type: "easeIn",
		},
	},
};

function Socials({}: Props) {
	return (
		<div className="absolute md:fixed h-screen right-3 md:right-6 top-0 z-50 text-text_primary flex flex-col justify-start items-center">
			<motion.div
				layout
				{...hangRope}
				className={`relative border w-[1px] border-r-2 border-text_primary`}
			></motion.div>
			<SocialButton
				imgSrc="/icons/gmail-soc.png"
				alt="email"
				link="mailto:muhibalhasan1@gmail.com"
			/>
			<motion.div
				layout
				transition={{
					duration: 4,
					type: "keyframes",
				}}
				className={`border w-[1px] border-r-2 border-text_primary h-10 my-1`}
			></motion.div>

			<SocialButton
				imgSrc="/icons/linkedin-soc.png"
				alt="linkedin link"
				link="https://www.linkedin.com/in/muhib-al-hasan-121001160/"
			/>
			<motion.div
				layout
				transition={{
					duration: 4,
					type: "keyframes",
				}}
				className={`border w-[1px] border-r-2 border-text_primary h-10 my-1`}
			></motion.div>

			<SocialButton
				imgSrc="/icons/github-soc.png"
				alt="Github Link"
				link="https://github.com/mhasan-t/"
			/>
		</div>
	);
}

export default memo(Socials);

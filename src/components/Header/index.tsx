import React from "react";
import { motion } from "framer-motion";

import TextAnimationFadeIn from "./TextAnimationFadeIn";
import { Lobster_Two } from "next/font/google";

const lobsterTwo = Lobster_Two({ weight: ["400", "700"], subsets: ["latin"] });

export default function Header() {
	return (
		<div className="bg-black text-white justify-center items-center h-[100vh] pt-40 pb-28 px-16">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.1 }}
			>
				<div className="text-9xl text-center">Hi</div>
				<div className="mt-5 text-center relative right-16">
					<span className="text xl relative right-52 text-gray-400">
						I am
					</span>
					<TextAnimationFadeIn
						parentDivClassName={
							"text-center justify-center items-center text-7xl" +
							" " +
							lobsterTwo.className
						}
						fromLeft={true}
					>
						Muhib Al Hasan
					</TextAnimationFadeIn>
				</div>
				<TextAnimationFadeIn parentDivClassName="justify-center text-3xl mb-5">
					Software Engineer, Team Lead
				</TextAnimationFadeIn>
				<div className="xl:pr-[20vw]">
					<TextAnimationFadeIn
						parentDivClassName="text-sm text-right text-gray-400 justify-end"
						letters={true}
					>
						A software engineer experienced in developing web
						applications, android application and entire backend
						infrastructure.
					</TextAnimationFadeIn>
					<TextAnimationFadeIn
						parentDivClassName="text-sm text-right text-gray-400 justify-end"
						delay={4}
						letters={true}
					>
						Adequate problem-solving ability with 1500+ contest
						rating on Leetcode.
					</TextAnimationFadeIn>
				</div>
			</motion.div>
		</div>
	);
}

import React from "react";
import { motion } from "framer-motion";

import TextAnimationFadeIn from "@/components/commons/TextAnimationFadeIn";
import { Lobster_Two } from "next/font/google";

const lobsterTwo = Lobster_Two({ weight: ["400", "700"], subsets: ["latin"] });

export default function Header() {
	return (
		<div className="relative bg-black text-white justify-center items-center min-h-[700px] pt-10 lg:pt-[10vh] pb-[max(100px,_30vh)] lg:px-16 px-4 z-[1]">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.1 }}
			>
				<div className="text-9xl text-center">Hi</div>

				<div className="mt-5 text-center relative lg:right-16">
					<span className="relative lg:right-24 text-gray-400">
						I am
					</span>
					<div className="flex flex-col justify-center items-center gap-5 mt-5 lg:mt-0 ">
						<img
							className="h-20 w-20 lg:h-40 lg:w-40 object-cover rounded-full border-4 border-slate-300 shadow-2xl"
							src="me.jpg"
							alt="Muhib Al Hasan"
						/>
						<TextAnimationFadeIn
							parentDivClassName={
								"text-center justify-center items-center text-4xl lg:text-7xl" +
								" " +
								lobsterTwo.className
							}
							fromLeft={true}
						>
							Muhib Al Hasan
						</TextAnimationFadeIn>
					</div>
				</div>
				<TextAnimationFadeIn parentDivClassName="justify-center text-sm lg:text-3xl mb-5 ">
					Software Engineer, Team Lead
				</TextAnimationFadeIn>
				<div className="w-full flex flex-col justify-center items-center">
					<div className="text-sm text-right text-gray-400 justify-end md:w-[50%]">
						A software engineer experienced in developing web
						applications, android application and entire backend
						infrastructure with good knowledge of data structures
						and algorithms, OOP concepts, design patterns, and
						writing clean and maintainable code.
					</div>
					<div className="text-sm text-right text-gray-400 justify-end md:w-[50%]">
						I possess adequate problem-solving ability with 1500+
						contest rating on Leetcode.
					</div>
				</div>
			</motion.div>
		</div>
	);
}

import React from "react";
import { motion } from "framer-motion";

import TextAnimationFadeIn from "@/components/commons/TextAnimationFadeIn";
import { Lobster_Two } from "next/font/google";
import FadeIn from "../commons/FadeIn";

const lobsterTwo = Lobster_Two({ weight: ["400", "700"], subsets: ["latin"] });

export default function Header() {
	return (
		<div className="relative bg-primary text-white flex flex-col justify-center items-center z-[1] h-screen min-h-[700px] border-b-blue-900 border-b-[1px] p-6 bg-gradient-to-br from-cyan-900 to-primary from-5% to-50%">
			{/* BG IMAGE */}
			<img
				src="/images/bg-1.jpg"
				alt="Background"
				className="absolute -z-10 opacity-20"
			/>

			<div className="w-full flex flex-col justify-center items-center max-w-5xl ">
				<div className="">
					<FadeIn from="top">
						<div
							className={`${lobsterTwo.className} font-bold text-6xl text-center text-text_primary`}
						>
							MUHIB AL HASAN
						</div>
					</FadeIn>
					<FadeIn from="bottom">
						<div
							className={`${lobsterTwo.className} font-normal text-xl text-center text-text_secondary`}
						>
							Full-Stack Software Developer
						</div>
					</FadeIn>
					<FadeIn from="bottom" delay={0.5}>
						<div className="text-md text-center mt-4 text-slate-200 ">
							I'm a seasoned full-stack software developer with
							team leadership and system design expertise. I'm
							deeply passionate about my work, excel in
							problem-solving with a strong LeetCode rating, and
							stay up-to-date with evolving tech trends.
						</div>
					</FadeIn>
				</div>
			</div>
		</div>
	);
}

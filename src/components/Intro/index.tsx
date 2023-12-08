import React from "react";
import { motion } from "framer-motion";

import TextAnimationFadeIn from "@/components/commons/TextAnimationFadeIn";
import { Lobster_Two } from "next/font/google";
import FadeIn from "../commons/FadeIn";

const lobsterTwo = Lobster_Two({ weight: ["400", "700"], subsets: ["latin"] });

export default function Header() {
	return (
		<div className="relative bg-primary text-white justify-center items-center min-h-[700px] pt-10 lg:pt-[10vh] pb-[max(100px,_30vh)] lg:px-16 px-4 z-[1]">
			<FadeIn from="left">Hi</FadeIn>
		</div>
	);
}

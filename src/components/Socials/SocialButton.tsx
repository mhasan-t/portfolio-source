import React from "react";
import { motion } from "framer-motion";

type Props = { imgSrc: string; alt: string; link: string };

export default function SocialButton({ imgSrc, alt, link }: Props) {
	return (
		<motion.a
			layout
			transition={{
				duration: 4,
				type: "keyframes",
			}}
			className="cursor-pointer"
			href={link}
		>
			<motion.img src={imgSrc} alt={alt} className="w-8 h-8" />
		</motion.a>
	);
}

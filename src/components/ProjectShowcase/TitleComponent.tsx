import fonts from "@/app/fonts";
import { motion } from "framer-motion";
import TextRotateIn from "../commons/TextRotateIn";

export default function TitleComponent() {
	return (
		<motion.div
			layout
			className={
				" text-text_primary text-center font-bold text-4xl lg:text-5xl justify-center items-center" +
				fonts.header.className
			}
		>
			<TextRotateIn>PROJECT SHOWCASE</TextRotateIn>
		</motion.div>
	);
}

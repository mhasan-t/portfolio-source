import fonts from "@/app/fonts";
import { motion } from "framer-motion";
import TextRotateIn from "../commons/TextRotateIn";
import HorizontalLineWidens from "./HorizontalLineWidens";

type Props = {
	titleText: string;
};

export default function TitleComponent({ titleText }: Props) {
	return (
		<div className="w-screen flex flex-col justify-center items-center gap-4">
			<HorizontalLineWidens />
			<motion.div
				layout
				className={
					" text-text_primary text-center font-bold text-4xl lg:text-5xl justify-center items-center" +
					fonts.header.className
				}
			>
				<TextRotateIn>{titleText}</TextRotateIn>
			</motion.div>
			<HorizontalLineWidens />
		</div>
	);
}

import fonts from "@/app/fonts";
import { motion } from "framer-motion";

const animateVar = {
	initial: {
		width: 0,
	},
	animate: {
		width: "fit-content",
		transition: {
			duration: 5,
		},
	},
};

export default function TitleComponent() {
	return (
		<motion.div
			className="overflow-hidden"
			variants={animateVar}
			initial="initial"
			animate="animate"
		>
			<motion.div
				layout
				className={
					" text-text_primary text-center font-bold text-4xl lg:text-5xl justify-center items-center max-w-md " +
					fonts.header.className
				}
			>
				SKILLS
			</motion.div>
		</motion.div>
	);
}

import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveatFont = Caveat({ weight: ["400", "700"], subsets: ["latin"] });

export default function TitleComponent() {
	return (
		<motion.div
			className={
				"font-bold text-center text-6xl justify-center items-center  " +
				caveatFont.className
			}
			animate={{
				x: [0, 50, 0, -50, 0],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatDelay: 0,
				repeatType: "loop",
			}}
		>
			contact me
		</motion.div>
	);
}

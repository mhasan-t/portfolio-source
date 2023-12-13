import { motion } from "framer-motion";
import fonts from "@/app/fonts";
import FadeIn from "../commons/FadeIn";
import StyledLogo from "./StyledLogo";

export default function Header() {
	return (
		<motion.div
			layout
			id="introSection"
			className="z-[1] relative bg-primary text-white h-screen min-h-[700px] p-6 flex flex-col justify-around items-center mb-4"
		>
			<StyledLogo />
			{/* BG GRAD */}
			{/* bg-[url('/images/bg-1.jpg')] bg-cover bg-opacity-10 /// bg-gradient-to-br from-cyan-900 to-primary from-5% to-50%  */}
			{/* <div className="absolute top-0 left-0 w-screen h-screen bg-[url('/images/bg-1.jpg')] bg-cover -z-10 opacity-20 "></div> */}

			<div className="w-full flex flex-col justify-center items-center max-w-5xl md:pt-20">
				<div className="w-full h-fit">
					<FadeIn from="top">
						<div
							className={`${fonts.title.className} font-bold text-6xl text-center text-text_primary`}
						>
							MUHIB AL HASAN
						</div>
					</FadeIn>
					<FadeIn from="bottom">
						<div
							className={`${fonts.header.className} font-normal text-xl text-center text-text_secondary`}
						>
							Full-Stack Software Developer
						</div>
					</FadeIn>
					<FadeIn from="bottom" delay={0.5}>
						<div className="text-md text-center mt-6 text-slate-200 ">
							I'm a seasoned full-stack software developer with
							team leadership and system design expertise. I'm
							deeply passionate about my work, excel in
							problem-solving with a strong LeetCode rating, and
							stay up-to-date with evolving tech trends.
						</div>
					</FadeIn>
				</div>
			</div>

			{/* CHECKOUT PROJECTS BELOW */}
			<motion.a
				href="#projectShowcase"
				initial={{ opacity: 0, y: -100 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						type: "tween",
					},
				}}
			>
				<div className="text-text_primary rounded-full border-text_primary border-2 px-6 hover:bg-text_primary hover:text-primary transition-colors ease-in-out duration-500 animate-bounce">
					checkout my projects below
				</div>
			</motion.a>
		</motion.div>
	);
}

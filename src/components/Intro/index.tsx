import fonts from "@/app/fonts";
import FadeIn from "../commons/FadeIn";
import StyledLogo from "./StyledLogo";

export default function Header() {
	return (
		<div>
			<StyledLogo />

			<div className="w-full flex flex-col justify-center items-center max-w-5xl ">
				<div className="w-full h-fit">
					<FadeIn from="top">
						<div
							className={`${fonts.title.className} font-bold text-4xl md:text-6xl text-center text-text_primary md:mt-24`}
						>
							MUHIB AL HASAN
						</div>
					</FadeIn>
					<FadeIn from="bottom">
						<div
							className={`${fonts.header.className} font-normal text-xl text-center text-text_secondary`}
						>
							FULL STACK SOFTWARE DEVELOPER
						</div>
					</FadeIn>
					<FadeIn from="bottom" delay={0.5}>
						<div className="text-md md:text-lg text-center mt-6 text-slate-200 ">
							I&apos;m a seasoned full-stack software developer
							with team leadership and system design expertise.
							I&apos;m deeply passionate about my work, excel in
							problem-solving with a strong LeetCode rating, and
							stay up-to-date with evolving tech trends.
						</div>
					</FadeIn>
				</div>
			</div>

			{/* CHECKOUT PROJECTS BELOW */}
			<a>
				<div className="text-text_primary text-center rounded-full border-text_primary border-2 px-6 hover:bg-text_primary hover:text-primary transition-colors ease-in-out duration-500 animate-bounce">
					checkout my projects below
				</div>
			</a>
		</div>
	);
}

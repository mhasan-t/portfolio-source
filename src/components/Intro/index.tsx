import fonts from "@/app/fonts";
import FadeIn from "../commons/FadeIn";

export default function Header() {
	return (
		<div className="relative bg-primary text-white flex flex-col justify-center items-center z-[1] h-screen min-h-[700px] border-b-secondary border-b-[1px] p-6 ">
			{/* BG GRAD */}
			{/* bg-[url('/images/bg-1.jpg')] bg-cover bg-opacity-10 /// bg-gradient-to-br from-cyan-900 to-primary from-5% to-50%  */}

			<div className="w-full flex flex-col justify-center items-center max-w-5xl ">
				<div className="">
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

import React from "react";
import TextAnimationFadeIn from "../commons/TextAnimationFadeIn";
import TitleComponent from "../commons/TitleComponent";

export default function index() {
	return (
		<div className="bg-primary pt-10 pb-20 overflow-x-hidden text-white flex flex-col justify-center items-center ">
			<TitleComponent titleText="CONTACT ME" />
			<div className="mt-10 flex flex-col justify-center items-center gap-10">
				<div className="flex flex-row justify-center items-center gap-3">
					<img
						src="/icons/gmail-soc.png"
						className="w-6 h-6"
						alt="email logo"
					/>
					<TextAnimationFadeIn letters={true}>
						muhibalhasan1@gmail.com
					</TextAnimationFadeIn>
				</div>

				{/* <a href="https://github.com/mhasan-t">
					<div className="flex flex-row justify-center items-center gap-3">
						<img src="/icons/github-soc.png" className="w-6 h-6" />
						<TextAnimationFadeIn letters={true}>
							github/mhasan-t
						</TextAnimationFadeIn>
					</div>
				</a> */}

				<a href="https://www.linkedin.com/in/muhib-al-hasan-121001160/">
					<div className="flex flex-row justify-center items-center gap-3">
						<img
							src="/icons/linkedin-soc.png"
							alt="linkedin logo"
							className="w-6 h-6"
						/>
						<TextAnimationFadeIn letters={true}>
							Muhib Al Hasan
						</TextAnimationFadeIn>
					</div>
				</a>
			</div>
		</div>
	);
}

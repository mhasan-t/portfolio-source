import React from "react";
import TitleComponent from "./TitleComponent";
import TextAnimationFadeIn from "../commons/TextAnimationFadeIn";

export default function index() {
	return (
		<div className="bg-gray-700 pt-10 pb-20 overflow-x-hidden text-white flex flex-col justify-center items-center ">
			<TitleComponent />
			<div className="mt-10 flex flex-col justify-center items-center gap-10">
				<div className="flex flex-row justify-center items-center gap-3">
					<img src="/icons/gmail.png" className="w-6 h-6" />
					<TextAnimationFadeIn letters={true}>
						muhibalhasan1@gmail.com
					</TextAnimationFadeIn>
				</div>

				<a href="https://github.com/mhasan-t">
					<div className="flex flex-row justify-center items-center gap-3">
						<img src="/icons/github.png" className="w-6 h-6" />
						<TextAnimationFadeIn letters={true}>
							github/mhasan-t
						</TextAnimationFadeIn>
					</div>
				</a>

				<a href="https://www.linkedin.com/in/muhib-al-hasan-121001160/">
					<div className="flex flex-row justify-center items-center gap-3">
						<img src="/icons/linkedin.png" className="w-6 h-6" />
						<TextAnimationFadeIn letters={true}>
							Muhib Al Hasan
						</TextAnimationFadeIn>
					</div>
				</a>
			</div>
		</div>
	);
}

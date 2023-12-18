import { useEffect, useState } from "react";
import { Amatic_SC } from "next/font/google";

const amaticFont = Amatic_SC({ weight: ["400", "700"], subsets: ["latin"] });

const textColorClasses = [
	"text-black",
	"text-white",
	"text-gray-400",
	"text-cyan-400",
	"text-red-400",
	"text-orange-500",
	"text-yellow-500",
	"text-green-500",
	"text-blue-500",
	"text-purple-500",
	"text-pink-500",
];

export default function TitleComponent() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [textColorIndex, setTextColorIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setX(Math.random() * 100 - 50);
			setY(Math.random() * 0);
			setTextColorIndex(
				Math.floor(Math.random() * textColorClasses.length)
			);
		}, 300);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={
				"font-bold text-center text-6xl justify-center items-center pb-10 mb-10 " +
				amaticFont.className +
				" " +
				textColorClasses[textColorIndex]
			}
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			SKILLS
		</div>
	);
}

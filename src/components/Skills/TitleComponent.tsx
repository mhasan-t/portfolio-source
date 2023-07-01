import { useEffect, useState } from "react";
import { Amatic_SC } from "next/font/google";

const amaticFont = Amatic_SC({ weight: ["400", "700"], subsets: ["latin"] });

export default function TitleComponent() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setX(Math.random() * 400 - 200);
			setY(Math.random() * 30);
		}, 300);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={
				" text-black font-bold text-center text-6xl justify-center items-center pb-10 mb-10 " +
				amaticFont.className
			}
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			SKILLS
		</div>
	);
}

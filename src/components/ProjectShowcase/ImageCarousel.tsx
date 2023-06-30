import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShowcaseProps } from "@/types";

const showcaseIntoViewVariants = {
	fromRight: {
		initial: { x: 350, width: "16rem", opacity: 10 },
		animate: {
			x: 0,
			width: "max-content",
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
	fromLeft: {
		initial: { x: -350, width: "16rem", opacity: 10 },
		animate: {
			x: 0,
			width: "max-content",
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
};

export default function ({ data }: { data: ShowcaseProps }) {
	const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
	const [fromRight, setFromRight] = React.useState<boolean | null>(null);

	function goPrev() {
		setFromRight(false);
		setSelectedImageIndex(
			selectedImageIndex - 1 < 0
				? data.images.length - 1
				: selectedImageIndex - 1
		);
	}
	function goNext() {
		setFromRight(true);
		setSelectedImageIndex(
			selectedImageIndex + 1 > data.images.length - 1
				? 0
				: selectedImageIndex + 1
		);
	}

	useEffect(() => {
		console.log("first");
	});

	return (
		<motion.div className="flex flex-col lg:flex-row justify-center mt-5 gap-10">
			<motion.div
				className="relative h-[40vh] mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg opacity-10 hover:opacity-50 transition-all "
				onClick={goPrev}
			>
				<motion.img
					className="object-cover h-full w-64 rounded-xl  "
					src={
						"/images/" +
						data.images[
							selectedImageIndex - 1 < 0
								? data.images.length - 1
								: selectedImageIndex - 1
						]
					}
					alt={data.title + " image"}
				/>
				<img
					src="prev.png"
					alt=""
					className="absolute top-[40%] left-[35%] w-20 h-20 cursor-pointer hover:scale-125 transition-all duration-300"
					// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
				/>
			</motion.div>

			<div className="min-w-[40%] flex justify-center items-center">
				<motion.div
					className="w-fit h-[40vh] mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg  "
					initial={
						fromRight == null
							? {}
							: fromRight
							? showcaseIntoViewVariants.fromRight.initial
							: showcaseIntoViewVariants.fromLeft.initial
					}
					animate={
						fromRight == null
							? {}
							: fromRight
							? showcaseIntoViewVariants.fromRight.animate
							: showcaseIntoViewVariants.fromLeft.animate
					}
					key={selectedImageIndex}
				>
					<motion.img
						className="object-cover h-full rounded-xl"
						src={"/images/" + data.images[selectedImageIndex]}
						alt={data.title + " image"}
					/>
				</motion.div>
			</div>

			<motion.div
				className="relative h-[40vh] mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg opacity-10 hover:opacity-50 transition-all  "
				onClick={goNext}
			>
				<motion.img
					className="object-cover h-full w-64 rounded-xl "
					src={
						"/images/" +
						data.images[
							selectedImageIndex + 1 > data.images.length - 1
								? 0
								: selectedImageIndex + 1
						]
					}
					alt={data.title + " image"}
				/>
				<img
					src="next.png"
					alt=""
					className="absolute top-[40%] left-[35%] w-20 h-20 cursor-pointer hover:scale-125 transition-all duration-300"
					// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
				/>
			</motion.div>
		</motion.div>
	);
}

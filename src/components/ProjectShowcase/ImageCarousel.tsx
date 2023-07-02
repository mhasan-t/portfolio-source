import React from "react";
import { motion } from "framer-motion";
import { ShowcaseProps } from "@/types";

const showcaseIntoViewVariants = {
	slideInFromRight: {
		initial: { x: 350, width: "16rem", opacity: 10 },
		animate: {
			x: 0,
			width: "max-content",
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
	slideInFromLeft: {
		initial: { x: -350, width: "16rem", opacity: 10 },
		animate: {
			x: 0,
			width: "max-content",
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
	justAppearFromBottom: {
		initial: { opacity: 0, y: 300 },
		animate: {
			y: 0,
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

	return (
		<motion.div className="flex flex-col lg:flex-row justify-center gap-10">
			{/* LEFT ONE */}
			{data.images.length > 1 && (
				<motion.div
					className="relative lg:h-[40vh] mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg opacity-30 hover:opacity-50 transition-all "
					onClick={goPrev}
					key={selectedImageIndex - 1}
				>
					<motion.img
						className="object-cover h-full w-64 rounded-xl hidden lg:block  "
						src={
							"/images/" +
							data.imagesFolder +
							"/" +
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
						className="absolute hidden lg:block lg:top-[40%] lg:left-[35%] w-20 h-20 cursor-pointer hover:scale-125 transition-all duration-300"
						// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
					/>
				</motion.div>
			)}

			{/* MIDDLE */}
			<div className="min-w-[40%] flex justify-center items-center">
				<motion.div
					className="w-fit h-[48vh] mr-2 max-w-xl relative  "
					initial={
						fromRight == null
							? showcaseIntoViewVariants.justAppearFromBottom
									.initial
							: fromRight
							? showcaseIntoViewVariants.slideInFromRight.initial
							: showcaseIntoViewVariants.slideInFromLeft.initial
					}
					animate={
						fromRight == null
							? showcaseIntoViewVariants.justAppearFromBottom
									.animate
							: fromRight
							? showcaseIntoViewVariants.slideInFromRight.animate
							: showcaseIntoViewVariants.slideInFromLeft.animate
					}
					key={selectedImageIndex}
				>
					{/* <div className="scale-100 lg:scale-0 transition-all absolute top-[5%] left-5 h-[90%] bg-slate-300 opacity-50 rounded-md flex justify-center items-center p-10 ">
						<img
							src="prev.png"
							alt=""
							className="w-14 h-14  cursor-pointer hover:scale-125 transition-all duration-300"
							// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
						/>
					</div> */}

					<motion.img
						className="object-contain h-fit max-h-full border-[1px] border-gray-300 rounded-xl shadow-lg"
						src={
							"/images/" +
							data.imagesFolder +
							"/" +
							data.images[selectedImageIndex]
						}
						alt={data.title + " image"}
					/>
				</motion.div>
			</div>

			{/* RIGHT ONE */}
			{data.images.length > 1 && (
				<motion.div
					className="relative lg:h-[40vh] mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg opacity-30 hover:opacity-50 transition-all "
					onClick={goNext}
				>
					<motion.img
						className="object-cover h-full w-64 rounded-xl hidden lg:block "
						src={
							"/images/" +
							data.imagesFolder +
							"/" +
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
						className="absolute hidden lg:block top-[40%] left-[35%] w-20 h-20 cursor-pointer hover:scale-125 transition-all duration-300"
						// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
					/>
				</motion.div>
			)}
		</motion.div>
	);
}

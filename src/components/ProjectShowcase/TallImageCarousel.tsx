import React from "react";
import { motion } from "framer-motion";
import { ShowcaseProps } from "@/types";
import CarouselBottomNavs from "./CarouselBottomNavs";

const showcaseIntoViewVariants = {
	slideInFromRight: {
		initial: { x: 250, opacity: 10 },
		animate: {
			x: 0,
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
	slideInFromLeft: {
		initial: { x: -250, opacity: 10 },
		animate: {
			x: 0,
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
	justAppearFromBottom: {
		initial: { opacity: 0, y: 250 },
		animate: {
			y: 0,
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
};

export default function TallImageCarousel({ data }: { data: ShowcaseProps }) {
	const [selectedImageIndex, setSelectedImageIndex] = React.useState(1);
	const [fromRight, setFromRight] = React.useState<boolean | null>(null);

	function goPrev() {
		setFromRight(false);
		setSelectedImageIndex(
			selectedImageIndex < 2
				? data.numberOfImages
				: selectedImageIndex - 1
		);
	}
	function goNext() {
		setFromRight(true);
		setSelectedImageIndex(
			selectedImageIndex + 1 > data.numberOfImages
				? 1
				: selectedImageIndex + 1
		);
	}

	return (
		<motion.div className=" flex flex-col lg:flex-row justify-center gap-2 lg:gap-10">
			{/* LEFT ONE */}
			{data.numberOfImages > 1 && (
				<motion.div
					className="hidden md:block lg:w-auto absolute top-28 lg:top-0 lg:relative lg:h-[40vh] mr-2 max-w-xl lg:border-[1px] lg:border-gray-300 lg:rounded-xl lg:shadow-lg lg:opacity-30 lg:hover:opacity-50 transition-all "
					onClick={goPrev}
					key={selectedImageIndex - 1}
				>
					<motion.img
						className="object-cover h-full rounded-xl hidden lg:block  "
						src={
							"/images/" +
							data.imagesFolder +
							"/" +
							(selectedImageIndex < 2
								? data.numberOfImages
								: selectedImageIndex - 1) +
							".jpg"
						}
						alt={data.title + " image"}
					/>
					<img
						src="prev.png"
						alt=""
						className="hidden md:block absolute top-0 lg:top-[40%] lg:left-[35%] w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300"
						// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
					/>
				</motion.div>
			)}

			{/* MIDDLE */}
			<div className="min-w-[40%] flex justify-center items-center ">
				<motion.div
					className="w-48 h-full mr-2 relative flex justify-center items-center "
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
							selectedImageIndex +
							".jpg"
						}
						alt={data.title + " image"}
					/>
				</motion.div>
			</div>

			{/* RIGHT ONE */}
			{data.numberOfImages > 1 && (
				<motion.div
					className="hidden md:block lg:w-auto absolute top-28 right-10 lg:top-0 lg:right-0 lg:relative lg:h-[40vh] mr-2 max-w-xl lg:border-[1px] lg:border-gray-300 lg:rounded-xl lg:shadow-lg lg:opacity-30 lg:hover:opacity-50 transition-all "
					onClick={goNext}
				>
					<motion.img
						className="object-cover h-full rounded-xl hidden lg:block "
						src={
							"/images/" +
							data.imagesFolder +
							"/" +
							(selectedImageIndex >= data.numberOfImages
								? 1
								: selectedImageIndex + 1) +
							".jpg"
						}
						alt={data.title + " image"}
					/>
					<img
						src="next.png"
						alt=""
						className="hidden md:block absolute top-0 lg:top-[40%] lg:left-[35%] w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300"
						// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
					/>
				</motion.div>
			)}

			<div className="lg:hidden">
				<CarouselBottomNavs goNext={goNext} goPrev={goPrev} />
			</div>
		</motion.div>
	);
}

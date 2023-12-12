import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShowcaseProps } from "@/types";
import CarouselBottomNavs from "./CarouselBottomNavs";

const showcaseIntoViewVariants = {
	slideInFromRight: {
		initial: { x: 50, width: "16rem", opacity: 10 },
		animate: {
			x: 0,
			width: "max-content",
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
	slideInFromLeft: {
		initial: { x: -50, width: "16rem", opacity: 10 },
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

export default function WideImageCarousel({ data }: { data: ShowcaseProps }) {
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
		<motion.div className="flex flex-col justify-center gap-2">
			{/* MIDDLE */}
			<div className="min-w-[40%] flex justify-center items-center">
				<AnimatePresence>
					<motion.div
						className="w-fit h-full mr-2 max-w-xl relative flex justify-center items-center "
						initial={
							fromRight == null
								? showcaseIntoViewVariants.justAppearFromBottom
										.initial
								: fromRight
								? showcaseIntoViewVariants.slideInFromRight
										.initial
								: showcaseIntoViewVariants.slideInFromLeft
										.initial
						}
						animate={
							fromRight == null
								? showcaseIntoViewVariants.justAppearFromBottom
										.animate
								: fromRight
								? showcaseIntoViewVariants.slideInFromRight
										.animate
								: showcaseIntoViewVariants.slideInFromLeft
										.animate
						}
						key={selectedImageIndex}
					>
						<motion.img
							className="object-contain h-fit w-96 max-w-[90vw] border-[1px] border-gray-300 rounded-xl shadow-lg"
							src={
								"/images/" +
								data.imagesFolder +
								"/" +
								data.images[selectedImageIndex]
							}
							alt={data.title + " image"}
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* NAV */}
			<CarouselBottomNavs goNext={goNext} goPrev={goPrev} />
		</motion.div>
	);
}

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShowcaseProps } from "@/types";

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
			<div className="min-w-[40%] flex justify-center items-center pt-24 lg:pt-0">
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
				</AnimatePresence>
			</div>

			{/* NAV */}
			<div className="w-full flex justify-center">
				<button
					onClick={goPrev}
					className="rounded-sm text-text_secondary border-2 border-secondary px-10 py-1"
				>
					{"<<"} prev
				</button>
				<button
					onClick={goNext}
					className="rounded-sm text-text_secondary border-2 border-secondary px-10 py-1"
				>
					next {">>"}
				</button>
			</div>
		</motion.div>
	);
}

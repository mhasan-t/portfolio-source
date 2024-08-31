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
		initial: { opacity: 0, y: 250 },
		animate: {
			y: 0,
			opacity: 100,
			transition: { duration: 0.5, type: "spring" },
		},
	},
};

export default function WideImageCarousel({ data }: { data: ShowcaseProps }) {
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
		<div>
			{/* MIDDLE */}
			<div className="min-w-[40%] flex justify-center items-center">
				<AnimatePresence>
					<div>
						<img>
					</div>
				</AnimatePresence>
			</div>

			{/* NAV */}
			<CarouselBottomNavs goNext={goNext} goPrev={goPrev} />
		</div>
	);
}

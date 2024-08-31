import React from "react";

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
		<div>
			{/* LEFT ONE */}
			{data.numberOfImages > 1 && (
				<div>
					<img>
					<img
						src="prev.png"
						alt=""
						className="hidden md:block absolute top-0 lg:top-[40%] lg:left-[35%] w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300"
						// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
					/>
				</div>
			)}

			{/* MIDDLE */}
			<div className="min-w-[40%] flex justify-center items-center ">
				<div>
					{/* <div className="scale-100 lg:scale-0 transition-all absolute top-[5%] left-5 h-[90%] bg-slate-300 opacity-50 rounded-md flex justify-center items-center p-10 ">
						<img
							src="prev.png"
							alt=""
							className="w-14 h-14  cursor-pointer hover:scale-125 transition-all duration-300"
							// top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300
						/>
					</div> */}

					<img>
				</div>
			</div>

			{/* RIGHT ONE */}
			{data.numberOfImages > 1 && (
				<div>
					<img>= data.numberOfImages
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
				</div>
			)}

			<div className="lg:hidden">
				<CarouselBottomNavs goNext={goNext} goPrev={goPrev} />
			</div>
		</div>
	);
}

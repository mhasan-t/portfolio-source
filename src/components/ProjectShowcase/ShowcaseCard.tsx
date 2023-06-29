import React from "react";
import { Roboto, Dancing_Script } from "next/font/google";

import { ShowcaseProps } from "@/types";
import Brick from "../commons/Brick";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export default function ShowcaseCard({
	data,
	className,
	selectedShowCaseIndex,
	setSelectedShowCaseIndex,
}: {
	data: ShowcaseProps;
	className?: string;
	selectedShowCaseIndex: number | null;
	setSelectedShowCaseIndex: React.Dispatch<
		React.SetStateAction<number | null>
	>;
}) {
	return (
		<div
			className={
				"bg-cyan-50 rounded-xl shadow-2xl w-full h-full p-5 max-w-2xl transition-all duration-700 " +
				className
			}
		>
			{/* HEADER */}
			<div
				className={
					"text-center text-3xl font-bold  " + dancingFont.className
				}
			>
				{data.title}
			</div>
			<div className="text-center text-[#4a5568] text-[14px] font-[500]">
				{data.type} - {data.year}
			</div>

			{/* CONTENT */}
			<div
				className={
					"mt-5 flex flex-col lg:flex-row gap-2 justify-center " +
					secondaryFont.className
				}
			>
				{/* COVER */}
				<div className="w-full mr-2 max-w-xl border-[1px] border-gray-300 rounded-xl shadow-lg">
					<img
						className="object-cover w-full h-full rounded-xl"
						src={"/covers/" + data.cover}
						alt={data.title + " image"}
					/>
				</div>

				{/* DETAILS */}
				<div className="text-[14px] font-[500] flex flex-col gap-2 ">
					<div>
						<div className="text-[#2d3748] font-[700]">
							Description
						</div>
						<div className="text-[#4a5568]">{data.description}</div>
					</div>

					<div>
						<div className="text-[#2d3748] font-[700]">
							Technologies Used
						</div>
						<div className="lg:flex lg:flex-row lg:gap-2">
							{data.tech_stack.map((tech) => {
								return (
									<Brick
										key={tech.title}
										img_src={"/icons/" + tech.icon}
										text={tech.title}
									/>
								);
							})}
						</div>
					</div>

					<div>
						<div className="text-[#2d3748] font-[700]">Links</div>
						<div className="lg:flex lg:flex-row lg:gap-2">
							{data.links.map((link) => {
								return (
									<Brick
										key={link.title}
										img_src={"/icons/" + link.icon}
										text={link.title}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

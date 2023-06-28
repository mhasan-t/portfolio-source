import React from "react";
import { Roboto, Dancing_Script } from "next/font/google";

const dancingFont = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});
const secondaryFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

interface ShowcaseProps {
	title: string;
	type: string;
	description: string;
	cover: string;
	year: string;
	links: Array<{
		title: string;
		url: string;
		icon: string;
	}>;
	tech_stack: Array<string>;
}

export default function ShowcaseCard({
	data,
	className,
}: {
	data: ShowcaseProps;
	className?: string;
}) {
	return (
		<div
			className={
				"bg-cyan-50 rounded-xl shadow-2xl w-full h-full p-5 max-w-2xl  " +
				className
			}
		>
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

			<div
				className={
					"mt-5 flex flex-col lg:flex-row gap-2 justify-center " +
					secondaryFont.className
				}
			>
				<div className="w-full mr-2 max-w-xl object-contain border-[1px] border-gray-300 rounded-xl shadow-lg">
					<img
						className="object-contain"
						src="http://localhost/amogus.png"
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
									<div className="text-[#4a5568] p-2 border-[1px] rounded-md flex flex-row gap-1">
										<img
											src="http://localhost/github.png"
											alt={tech + " logo"}
											className="w-5 h-5"
										/>

										{tech}
									</div>
								);
							})}
						</div>
					</div>

					<div>
						<div className="text-[#2d3748] font-[700]">Links</div>
						<div className="lg:flex lg:flex-row lg:gap-2">
							{data.links.map((link) => {
								return (
									<div className="text-[#4a5568] p-2 border-[1px] rounded-md flex flex-row gap-1">
										<img
											src="http://localhost/github.png"
											alt={link.title + " logo"}
											className="w-5 h-5"
										/>

										{link.title}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

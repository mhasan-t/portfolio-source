import React from "react";
import { motion } from "framer-motion";
import Brick from "@/components/commons/Brick";

export default function ShowcaseLinks(props: {
	links: Array<{
		title: string;
		url: string;
		icon: string;
	}>;
}) {
	return (
		<motion.div>
			<motion.div className="text-[#2d3748] font-[700]">Links</motion.div>
			<motion.div className="lg:flex lg:flex-row lg:gap-2">
				{props.links.map((link) => {
					return (
						<a
							href={link.url}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<Brick
								key={link.title}
								img_src={"/icons/" + link.icon}
								text={link.title}
								classNames="hover:scale-110 transition-all bg-cyan-100 hover:bg-cyan-200"
							/>
						</a>
					);
				})}
			</motion.div>
		</motion.div>
	);
}

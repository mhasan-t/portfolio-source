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
			<motion.div className=" font-[700]">Links</motion.div>
			<motion.div className="flex flex-row flex-wrap gap-2">
				{props.links.map((link, index) => {
					return (
						<a
							key={index}
							href={link.url}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<Brick
								img_src={"/icons/" + link.icon}
								text={link.title}
								classNames="hover:scale-110 transition-all hover:bg-secondary px-4 py-2 border-2 border-text_secondary"
							/>
						</a>
					);
				})}
			</motion.div>
		</motion.div>
	);
}

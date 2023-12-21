import React from "react";
import { motion } from "framer-motion";

export default function ShowcaseRole(props: {
	role: { title: string; description: string };
}) {
	return (
		<motion.div>
			<motion.div className=" font-[700]">
				My Role -{" "}
				<span className="text-slate-300 font-normal text-sm">
					{props.role.title}
				</span>
			</motion.div>
			<motion.div className=" text-sm ">
				{props.role.description}
			</motion.div>
		</motion.div>
	);
}

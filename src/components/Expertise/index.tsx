import React, { memo } from "react";
import { motion } from "framer-motion";

import TitleComponent from "../commons/TitleComponent";
import VeryExpertHmm from "./VeryExpertHmm";

import expData from "@/../data/ExpertiseData.json";

// const container = {
// 	hidden: { opacity: 0 },
// 	visible: (i = 1) => ({
// 		opacity: 1,
// 		transition: {
// 			staggerChildren: 1,
// 			duration: 1,
// 		},
// 	}),
// };

type Props = {};

function index({}: Props) {
	return (
		<div className="w-screen flex flex-col justify-center items-center gap-4">
			<TitleComponent titleText="I CREATE..." />
			<motion.div
				// initial="hidden"
				// animate="visible"
				// variants={container}
				className="grid md:grid-cols-2 gap-4"
			>
				{expData.map((data, index) => (
					<VeryExpertHmm
						title={data.title}
						description={data.description}
						logo={data.logo}
						index={index + 1}
						key={index}
					/>
				))}
			</motion.div>
		</div>
	);
}

export default memo(index);

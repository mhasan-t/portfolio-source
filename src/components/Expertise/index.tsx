import React, { memo } from "react";

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
		<div className="w-full flex flex-col justify-center items-center gap-4 p-2 lg:px-16">
			<TitleComponent titleText="I CREATE..." />
			<div>
				{expData.map((data, index) => (
					<VeryExpertHmm
						title={data.title}
						description={data.description}
						logo={data.logo}
						index={index + 1}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}

export default memo(index);

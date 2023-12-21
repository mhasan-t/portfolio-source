import React from "react";
import { motion } from "framer-motion";
import FadeIn from "../commons/FadeIn";

type Props = {
	title: string;
	description: string;
	logo: string;
	index: number;
};

function VeryExpertHmm({ title, description, logo, index }: Props) {
	return (
		<FadeIn
			from={index % 2 == 0 ? "right" : "left"}
			classNames="w-80 text-center flex flex-col justify-start items-center bg-secondary p-6 rounded-md shadow-lg gap-6 text-text_secondary"
		>
			<div className="">
				<img
					src={`/images/exp/${logo}`}
					alt={title}
					className="w-14 h-14"
				/>
			</div>
			<div className="w-full font-bold text-lg uppercase">{title}</div>
			<div className="text-sm ">{description}</div>
		</FadeIn>
	);
}

export default VeryExpertHmm;

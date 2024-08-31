import React from "react";

import Brick from "@/components/commons/Brick";

export default function ShowcaseTechs(props: {
	tech_stack: Array<{
		title: string;
		icon: string;
	}>;
}) {
	return (
		<div>
			<div>Technologies Used</div>
			<div>
				{props.tech_stack.map((tech) => {
					return (
						<Brick
							key={tech.title}
							img_src={"/icons/" + tech.icon}
							text={tech.title}
							classNames=" border-2 border-secondary p-1 border-text_secondary"
						/>
					);
				})}
			</div>
		</div>
	);
}

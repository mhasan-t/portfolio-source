import React, { memo } from "react";


import { ShowcaseProps } from "@/types";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseRole from "./ShowcaseRole";
import ShowcaseFeatures from "./ShowcaseFeatures";
import ShowcaseTechs from "./ShowcaseTechs";
import ShowcaseLinks from "./ShowcaseLinks";
import FadeIn from "../commons/FadeIn";
import TallImageCarousel from "./TallImageCarousel";
import WideImageCarousel from "./WideImageCarousel";

function ShowcaseCard({
	data,
	className,
}: {
	data: ShowcaseProps;
	className?: string;
}) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div>
			<div>
				<div className="w-full md:w-[80%] h-full flex justify-center items-center">
					<FadeIn
						from="left"
						classNames="flex justify-center items-center"
					>
						<img>
					</FadeIn>
				</div>

				{/* SHOWCASE DATA */}
				<div>
					<FadeIn from="top-right">
						<ShowcaseHeader data={data} />
					</FadeIn>

					<FadeIn from="bottom-right">
						<ShowcaseDescription description={data.description} />
						<ShowcaseRole role={data.myRole} />
						<ShowcaseFeatures features={data.features} />
						<ShowcaseTechs tech_stack={data.tech_stack} />
						{data.links !== undefined &&
							data.links.length !== 0 && (
								<ShowcaseLinks links={data.links} />
							)}
					</FadeIn>
				</div>
			</div>
		</div>
	);
}

export default memo(ShowcaseCard);

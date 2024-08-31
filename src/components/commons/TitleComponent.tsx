import fonts from "@/app/fonts";

import TextRotateIn from "../commons/TextRotateIn";
import HorizontalLineWidens from "./HorizontalLineWidens";

type Props = {
	titleText: string;
};

export default function TitleComponent({ titleText }: Props) {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-4">
			{/* <HorizontalLineWidens /> */}
			<div>
				<TextRotateIn>{titleText}</TextRotateIn>
			</div>
			{/* <HorizontalLineWidens /> */}
		</div>
	);
}

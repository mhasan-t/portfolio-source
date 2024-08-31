import { Dancing_Script, Alegreya_Sans_SC } from "next/font/google";

import { ShowcaseProps } from "@/types";

export default function ShowcaseHeader(props: { data: ShowcaseProps }) {
	return (
		<div>
			<div>{props.data.title}</div>
			<div>
				{props.data.type} - {props.data.year}
			</div>
		</div>
	);
}

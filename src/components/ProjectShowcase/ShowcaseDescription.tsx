import React from "react";

export default function ShowcaseDescription(props: { description: string }) {
	return (
		<div>
			<div>Description</div>
			<div>{props.description}</div>
		</div>
	);
}

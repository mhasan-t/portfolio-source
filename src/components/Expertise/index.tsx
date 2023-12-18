import React, { memo } from "react";

type Props = {};

function index({}: Props) {
	return <div>index</div>;
}

export default memo(index);

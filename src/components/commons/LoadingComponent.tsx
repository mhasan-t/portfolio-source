import React from "react";

type Props = {};

function LoadingComponent({}: Props) {
	return (
		<div className="w-screen h-screen fixed z-50 bg-primary flex justify-center items-center">
			<div className="bg-text_primary w-40 h-40 rounded-full flex justify-center items-center animate-beat">
				{/* <div className="text-black">loading</div> */}
			</div>
		</div>
	);
}

export default LoadingComponent;

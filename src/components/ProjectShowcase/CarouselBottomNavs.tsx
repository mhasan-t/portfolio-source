import React, { MouseEventHandler, memo } from "react";

type Props = {
	goNext: MouseEventHandler<HTMLButtonElement>;
	goPrev: MouseEventHandler<HTMLButtonElement>;
};

function CarouselBottomNavs({ goNext, goPrev }: Props) {
	return (
		<div className="w-full flex justify-center gap-2">
			<button
				onClick={goPrev}
				className="rounded-xl text-text_secondary border-2 border-secondary px-10 hover:bg-secondary"
			>
				{"<<"} prev
			</button>
			<button
				onClick={goNext}
				className="rounded-xl text-text_secondary border-2 border-secondary px-10 hover:bg-secondary"
			>
				next {">>"}
			</button>
		</div>
	);
}

export default memo(CarouselBottomNavs);

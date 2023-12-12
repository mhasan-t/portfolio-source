import { useEffect, useMemo, useState } from "react";

export function useIsInViewport(ref: any) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [visitedAlready, setVisitedAlready] = useState(false);

	useEffect(() => {
		if (isIntersecting) {
			setVisitedAlready(true);
		}
	}, [isIntersecting]);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) =>
			setIsIntersecting(entry.isIntersecting)
		);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return { isIntersecting, visitedAlready };
}

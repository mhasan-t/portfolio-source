import { useEffect, useMemo, useState } from "react";

export function useIsInViewport(ref: any, name?: string) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [visitedAlready, setVisitedAlready] = useState(false);

	useEffect(() => {
		if (isIntersecting) {
			setVisitedAlready(true);
		}

		if (name !== undefined) {
			console.log(
				`${name} is ${
					isIntersecting ? "intersecting" : "not intersecting"
				}, visited : ${visitedAlready || isIntersecting}`
			);
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

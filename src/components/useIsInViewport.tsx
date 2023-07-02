import { useEffect, useMemo, useState } from "react";

export function useIsInViewport(ref: any) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) =>
			setIsIntersecting(entry.isIntersecting)
		);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}

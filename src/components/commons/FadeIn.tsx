import { PropsWithChildren, memo, useRef } from "react";
import { useIsInViewport } from "../../app/hooks/useIsInViewport";

type Props = {
  from:
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";
  distance?: number;
  delay?: number;
  classNames?: string;
} & PropsWithChildren;

function FadeIn({ from, children, distance, delay, classNames }: Props) {
  const ref = useRef(null);
  const { isIntersecting, visitedAlready } = useIsInViewport(ref);

  let animateClass = "animate-fade-in";
  if (from === "left") animateClass = "animate-fade-in-left";
  else if (from === "right") animateClass = "animate-fade-in-right";
  else if (from === "top") animateClass = "animate-fade-in-top";
  else if (from === "bottom") animateClass = "animate-fade-in-bottom";
  else if (from === "top-left") animateClass = "animate-fade-in-top-left";
  else if (from === "top-right") animateClass = "animate-fade-in-top-right";
  else if (from === "bottom-left") animateClass = "animate-fade-in-bottom-left";
  else if (from === "bottom-right") animateClass = "animate-fade-in-bottom-right";

  const style = delay ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      className={`${classNames} ${isIntersecting ? animateClass : ""}`}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
}

export default memo(FadeIn);

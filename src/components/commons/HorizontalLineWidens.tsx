import React, { memo, useRef } from "react";
import { useIsInViewport } from "@/app/hooks/useIsInViewport";

type Props = {
  widthTo?: string;
  height?: string;
  classNames?: string;
};

function HorizontalLineWidens({ widthTo, height, classNames }: Props) {
  const ref = useRef(null);
  const { isIntersecting } = useIsInViewport(ref);

  return (
    <div
      ref={ref}
      className={"w-full flex justify-end " + classNames}
    >
      <div
        className={`bg-text_primary ${isIntersecting ? "animate-widen" : ""}`}
        style={{ height: height ?? "2px", width: isIntersecting ? (widthTo ?? "100%") : "0" }}
      ></div>
    </div>
  );
}

export default memo(HorizontalLineWidens);

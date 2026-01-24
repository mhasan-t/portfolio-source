import React from "react";

export default function TextAnimationFadeIn({
  children,
  parentDivClassName = "",
  fromLeft = false,
  delay = 0,
  letters = false,
}: {
  fromLeft?: boolean;
  delay?: number;
  letters?: boolean;
  children: string;
  parentDivClassName?: string;
}) {
  const words = letters ? children.split("") : children.split(" ");

  return (
    <div className={"flex flex-wrap " + parentDivClassName}>
      {words.map((word: string, index: number) => (
        <>
          {letters && word === " " ? (
            <span key={index}>
              {"\u00A0"}
            </span>
          ) : (
            <span key={index}>
              {word}
            </span>
          )}
          {letters ? (
            <span key={index + "space"}></span>
          ) : (
            <span key={index + "space"}>&nbsp;</span>
          )}
        </>
      ))}
    </div>
  );
}

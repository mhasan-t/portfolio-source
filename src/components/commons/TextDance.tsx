import React from "react";

export default function TextDance({
  children,
  parentDivClassName = "",
  delay,
}: {
  fromLeft?: boolean;
  delay?: number;
  letters?: boolean;
  children: string;
  parentDivClassName?: string;
}) {
  const letters = children.split("");

  return (
    <div className={"flex flex-wrap " + parentDivClassName}>
      {letters.map((letter: string, index: number) => (
        <span key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
}

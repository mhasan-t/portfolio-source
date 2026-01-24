import React from "react";

export default function TextRotateIn({
  children,
  vertical,
  parentDivClassName = "",
}: {
  vertical?: boolean;
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
          {letter == " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}

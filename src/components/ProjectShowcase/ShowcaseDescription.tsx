import React from "react";

export default function ShowcaseDescription(props: { description: string }) {
  return (
    <div>
      <div className=" font-[700]">Description</div>
      <div className=" text-sm ">{props.description}</div>
    </div>
  );
}

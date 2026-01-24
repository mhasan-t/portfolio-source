import React from "react";

export default function ShowcaseRole(props: {
  role: { title: string; description: string };
}) {
  return (
    <div>
      <div className=" font-[700]">
        My Role -{" "}
        <span className="text-slate-300 font-normal text-sm">
          {props.role.title}
        </span>
      </div>
      <div className=" text-sm ">
        {props.role.description}
      </div>
    </div>
  );
}

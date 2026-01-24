import React from "react";
import TitleComponent from "../commons/TitleComponent";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-primary via-primary to-secondary pb-20 animate-slide-in-up">
      <TitleComponent titleText="I WORKED ON" />
    </div>
  );
}

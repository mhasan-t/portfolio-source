import React from "react";
import CurvyWaves from "./CurvyWaves";
import TitleComponent from "./TitleComponent";
import SkillsContainer from "./SkillsContainer";

export default function index() {
	return (
		<div>
			<CurvyWaves />

			<div className="flex flex-col justify-center items-center bg-[#C62368] pb-20 ">
				<TitleComponent />
				<SkillsContainer />
			</div>
		</div>
	);
}

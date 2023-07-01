import BricksOfSkills from "./BricksOfSkills";

const skillsData = require("../../../Skills.json");

export default function SkillContainer() {
	return (
		<div className="flex flex-row gap-10">
			{Object.keys(skillsData).map((skill: any, index: number) => {
				return (
					<BricksOfSkills
						key={index}
						title={skill}
						data={skillsData[skill]}
					/>
				);
			})}
		</div>
	);
}

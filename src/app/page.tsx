"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
	return (
		<div>
			<StyledLogo />
			<Intro />
			<ProjectShowcase />
		</div>
	);
}

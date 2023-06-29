"use client";

import StyledLogo from "@/components/Header/StyledLogo";
import Header from "@/components/Header";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
	return (
		<div>
			<StyledLogo />
			<Header />
			<ProjectShowcase />
		</div>
	);
}

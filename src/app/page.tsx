"use client";

import StyledLogo from "@/components/Intro/StyledLogo";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/WorkedOn";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import HorizontalLineWidens from "@/components/commons/HorizontalLineWidens";
import Expertise from "@/components/Expertise";
import Head from "next/head";

const title = "Muhib Al Hasan | Software Engineer.";
const description = "Portfolio of Muhib Al Hasan, Software Engineer.";

export default function Home() {
	return (
		<div>
			<title>Muhib Al Hasan 🗿 Software Engineer</title>
			<Head>
				<meta
					key="description"
					name="description"
					content={description}
				/>
				<meta key="og-title" property="og:title" content={title} />
				<meta
					key="og-description"
					property="og:description"
					content={description}
				/>
				<meta
					key="twitter-title"
					name="twitter:title"
					content={title}
				/>
				<meta
					key="twitter-description"
					name="twitter:description"
					content={description}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@lighter_app" />
				<meta
					name="twitter:image"
					content={`https://lighter.com/home-card.png`}
				/>

				<link rel="canonical" href="https://lighter.com/" />
			</Head>

			<div className="overflow-y-hidden border-l-4 md:border-l-6 border-text_primary bg-primary p-0">
				<Socials />
				<Intro />
				{/* <HorizontalLineWidens /> */}
				<ProjectShowcase />
				{/* <HorizontalLineWidens /> */}
				<Expertise />
				{/* <HorizontalLineWidens /> */}
				{/* <Skills /> */}
				<Contact />
			</div>
		</div>
	);
}

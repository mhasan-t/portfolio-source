"use client";

import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/commons/LoadingComponent";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <title>Muhib Al Hasan 🗿 Software Engineer</title>

      <div className="overflow-x-hidden overflow-y-hidden bg-primary text-text_secondary">
        {loading && <LoadingComponent />}
        <Socials />
        <Intro />
        <ProjectShowcase />
        <Expertise />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

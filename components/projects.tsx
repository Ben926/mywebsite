"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectWriteUp } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" ref={ref} className="mb-24 max-w-[45rem] sm:mb-30 scroll-mt-16 ">
      <SectionHeading>My projects</SectionHeading>
      <p className="text-center leading-8 mb-3">
        {projectWriteUp}
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>))}
      </div>
    </section>
  );
}
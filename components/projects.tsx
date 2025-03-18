"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" ref={ref} className="mb-10 max-w-[45rem] leading-8 sm:mb-15 scroll-mt-28 py-5">
      <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key ={index}>
                    <Project {...project} />
                </React.Fragment>))}
        </div>
    </section>
  );
}
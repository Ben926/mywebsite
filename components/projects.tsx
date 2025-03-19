"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectWriteUp } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="mb-24 max-w-[45rem] sm:mb-30 scroll-mt-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        damping: 15
      }}
    >
      <SectionHeading>My projects</SectionHeading>
      <motion.p 
        className="text-center leading-8 mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {projectWriteUp}
      </motion.p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
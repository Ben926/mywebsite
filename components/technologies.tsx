"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import TechStack from "@/components/techstack";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { technologiesWriteUp } from "@/lib/data";
import { motion } from "framer-motion";

export default function Technologies() {
  const { ref } = useSectionInView("Technologies", 0.4);

  return (
    <section
      ref={ref}
      id="technologies"
      className="mb-24 max-w-[53rem] scroll-mt-16 text-center sm:mb-30">
      <div className="mb-6">
        <TypewriterEffect words={[{ text: "Technologies" }]} />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.175,
          duration: 0.5,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
        className="text-center leading-8 mb-8"
      >
        {technologiesWriteUp}
      </motion.p>
      <TechStack />
    </section>
  );
}
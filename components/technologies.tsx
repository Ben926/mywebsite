"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import TechStack from "@/components/techstack";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Technologies() {
  const { ref } = useSectionInView("Technologies");

  return (
    <section
      ref={ref}
      id="technologies"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <div className="mb-8">
        <TypewriterEffect words={[{ text: "Technologies" }]} />
      </div>
      <TechStack />
    </section>
  );
}
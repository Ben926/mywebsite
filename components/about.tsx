"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { aboutWriteUp, introWriteUp } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section
            ref={ref}
            className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-15 scroll-mt-28 py-5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p>
                {aboutWriteUp}
            </p>
        </motion.section>
    );
}
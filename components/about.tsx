"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { aboutWriteUp } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About", 1);
    return (
        <motion.section
            ref={ref}
            className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-30 scroll-mt-16"
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
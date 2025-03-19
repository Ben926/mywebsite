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
            initial={{ opacity: 0, y: 100 }}  // Changed y to x for side entrance
            whileInView={{ opacity: 1, y: 0 }}  // Changed y to x for side movement
            viewport={{ once: true }}
            transition={{ 
                type: "spring",
                duration: 0.8,
                bounce: 0.3
            }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <motion.p
                initial={{ opacity: 0, x: 100 }}  // Text comes from opposite direction
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    duration: 0.8,
                    bounce: 0.3,
                    delay: 0.2  // Slight delay for text
                }}
            >
                {aboutWriteUp}
            </motion.p>
        </motion.section>
    );
}
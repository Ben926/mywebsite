"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, experiencesWriteUp } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function ExperiencesTimeline() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="scroll-mt-16 mb-24 sm:mb-30 max-w-[60rem]"
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
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.8,
          bounce: 0.3
        }}
      >
        <SectionHeading>Experience</SectionHeading>
      </motion.div>

      <motion.p
        className="text-center leading-8 mb-3"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
          delay: 0.2
        }}
      >
        {experiencesWriteUp}
      </motion.p>

      <VerticalTimeline
        lineColor="#e5e7eb"
        className="vertical-timeline"
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.05)",
              boxShadow: "0 2px 15px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "0.75rem",
              backdropFilter: "blur(0.5rem)",
            }}
            contentArrowStyle={{
              borderRight: "0.7rem solid rgba(255, 255, 255, 0.05)",
            }}
            date={item.date}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </div>
            }
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
              boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.05)",
            }}
            position={index % 2 === 0 ? "left" : "right"}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            >
              <h3 className="font-semibold capitalize text-xl text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="font-normal !mt-1 text-gray-700 dark:text-gray-200 pb-1">
                {item.location}
              </p>
              <div className="">
                {item.description.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex items-start">
                    <span className="text-gray-700 dark:text-gray-300 pb-1">• {bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
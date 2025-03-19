"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { TechIcon } from "./techicon";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  techStack,
  imageUrl,
  imageUrl2,
  longDescription,
  websiteURL
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer"
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700 dark:text-white/70 whitespace-pre-line">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            className="absolute w-80 sm:block hidden bottom-0 right-0 top-6 rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-3
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-3
              group-even:left-0"
            width={1200}
            height={700}
            quality={95}
            priority={true}
          />
        </section>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            className="relative z-50 "
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{
                  opacity: 0,
                  rotateX: 90,
                  scale: 0.5
                }}
                animate={{
                  opacity: 1,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  mass: 0.8
                }}
                className="w-full max-w-4xl perspective-1000"
              >
                <Dialog.Panel className="mx-auto max-w-4xl rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl overflow-y-auto max-h-[70vh]">
                  <div className="relative">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute -top-2 -right-2 rounded-full bg-gray-200 dark:bg-gray-800 p-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>

                    <div className="mt-2">
                      <h3 className="text-3xl font-bold mb-4 dark:text-white">{title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Image
                            src={imageUrl2}
                            alt={title}
                            width={400}
                            height={400}
                            className="rounded-xl shadow-lg"
                            quality={100}
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{longDescription}</p>
                            {websiteURL && (
                              <a
                                href={websiteURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                              >
                                Check it out here →
                              </a>
                            )}
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-2 dark:text-white">Tech Stack</h4>
                            <ul className="flex flex-wrap gap-3">
                              {techStack.map((tech, index) => (
                                <li
                                  key={index}
                                  className="flex"
                                >
                                  <motion.div
                                    whileHover={{
                                      rotate: 720,  // Changed from rotateX to rotate for full spin
                                      scale: 1.1,   // Added slight scale for better effect
                                      transition: {
                                        duration: 0.6,
                                        ease: "easeInOut",
                                        repeat: Infinity
                                      }
                                    }}
                                    className="transform-gpu" // Added for better performance
                                  >
                                    <TechIcon name={tech} />
                                  </motion.div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
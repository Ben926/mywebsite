"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Highlight } from './ui/hero-highlights';
import useFireWork from "react-use-firework";
import toast from "react-hot-toast";

// Add type for firework options
type FireworkOptions = {
  count: number;
  randomColor: boolean;
};

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const fireworkRef = useRef<HTMLDivElement | null>(null);
    
    const fireworkOptions: FireworkOptions = {
      count: 100,
      randomColor: true
    };
    
    useFireWork(fireworkRef as React.RefObject<HTMLElement>, fireworkOptions);

    return (
        <section ref={ref} id="home" className="mb-10 max-w-[45rem] leading-8 sm:mb-15 scroll-mt-28 py-5">
            <div className="flex items-center justify-center">
                <div className='realtive'>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.6
                        }}>
                        <Image
                            src="/ben.jpg"
                            alt="Benjamin portrait"
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className="h-40 w-40 rounded-full object-cover border-[0.35rem]
                            border-white shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl justify-center text-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello! I'm Benjamin, and I {" "}
                <div ref ={fireworkRef} className="inline-block">
                <Highlight className="text-black dark:text-white bold">
                    code.
                </Highlight>
                </div>
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group dark:bg-white bg-gray-900 text-white dark:text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-4 focus:scale-110 hover:scale-110 active:scale-105 
                    transition cursor-pointer borderBlack dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-slate-400"
                    onClick={() => {
                        {toast("Still working on updating my resume... will upload soon 😅")}
                    }}
                >
                    Download CV 
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 hover:bg-slate-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
                     active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-slate-400"
                    href="https://www.linkedin.com/in/benjaminkoh926/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] 
                    rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
                    transition cursor-pointer d dark:bg-white/10 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-slate-400"
                    href="https://github.com/ben926"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
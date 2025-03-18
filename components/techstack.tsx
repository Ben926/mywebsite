"use client";
import { Button } from "./ui/moving-border";
import { skillsData } from "@/lib/data";
import { TechIcon } from "./techicon";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const skillVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    }
  },
};

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(skillsData).map(([key, category], categoryIndex) => (
        <motion.div 
          key={key} 
          className="flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            variants={skillVariants}
            className="text-lg font-semibold capitalize mb-2"
          >
            {category.title}
          </motion.h3>
          {category.items.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              custom={index}
            >
              <Button
                borderRadius="0.5rem"
                className="bg-white dark:bg-white/10 text-black dark:text-white relative group w-full"
                containerClassName="w-full"
              >
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <span className="text-sm font-medium">{skill}</span>
                  <TechIcon name={skill} />
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { placeholders } from "@/lib/data";
import toast from "react-hot-toast";

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  toast("This is a fake search bar")
  e.preventDefault();
};

export default function SectionDivider() {
  return (
    <motion.section
      className="mb-24 text-center leading-8 sm:mb-30 scroll-mt-16 whitespace-pre-line"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }}
    >
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange}
        onSubmit={onSubmit} />
      <motion.div
        className="bg-gray-200 my-24 h-16 w-1 mx-auto rounded-full hidden sm:block dark:bg-opacity-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      />
    </motion.section>
  );
}
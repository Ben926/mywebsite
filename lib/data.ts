import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutWriteUp = "I am a Year 2 Computer Science undergraduate at the National University of Singapore." + 
"I am passionate about building products that make a difference. I have experience in full-stack development, mobile app development, and data analysis. I am currently seeking internship opportunities in software engineering and data science.";

export const introWriteUp = "Hello! I'm Benjamin, a student with a love for programming :)"


export const experiencesData = [
  {
    id: 1,
    title: "Software Developer Intern",
    location: "Accenture, Singapore",
    description:
      "Developed intranet and internet applications leveraging Pega, Python, React and Java. Contributed to data migration, technical architecture design and automation testing initiatives.",
    date: "June 2025 - Present",
    icon: "/accenture-logo.png",
  },
  {
    id: 2,
    title: "Undergraduate, Computer Science",
    location: "National University of Singapore",
    description:
      "Currently pursuing a Bachelor of Computing (Hons) in Computer Science. First Class Honors with a GPA of 4.92. Achieved Dean's List in Year 1 Semester 2.",
    date: "August 2023 - Present",
    icon: "/nus-logo.png",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    location: "Locket Allegro, Singapore",
    description:
      "Built and designed a complete e-commerce website using Shopify, HTML, and CSS for a jewelry business serving 100+ monthly customers. Implemented and optimized the entire online business workflow for seamless user experience.",
    date: "February 2023 - June 2023",
    icon: "/locketallegro-logo.png",
  },
  {
    id: 4,
    title: "Business Analyst Intern",
    location: "NCS Pte. Ltd., Singapore",
    description:
      "Led User Acceptance Testing for SAP database HR payroll system with 100% test case pass rate. Developed automated Excel templates analyzing millions of payroll records, enabling instant trend analysis and discrepancy detection.",
    date: "January 2023 - July 2023",
    icon: "/ncs-logo.jpg",
  },
] as const;

export const projectsData = [
  {
    title: "Custom Crossword Web Game",
    description:
      "A daily crossword game incorporating brain-rot language.",
    tags: ["Scala", "Python", "React", "Game Development", "Full-Stack"],
    imageUrl: "/gyatword-ss.jpg",
  },
  {
    title: "Group Expense Manager Bot",
    description:
      "A telegram bot for managing group expenses, splits and debts.",
    tags: ["Python", "Heroku", "Telegram API", "Image Recognition", "Backend"],
    imageUrl: "/vercel.svg",
  },
  {
    title: "Personal Expense Tracker",
    description:
      "A cross-platform mobile app for personal expense tracking and budgeting.",
    tags: ["React Native", "Expo", "Node.js", "Jest", "CoinGecko API"],
    imageUrl: "/spendsense-ss.jpeg",
  },
] as const;


export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Pytorch",
  "Numpy",
  "Framer Motion",
  "Supabase",
  "Jest",
  "Heroku",
  "Vercel",
  "Expo",
] as const;
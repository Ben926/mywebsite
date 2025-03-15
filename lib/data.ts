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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Business Analyst Intern",
    location: "Singapore",
    description:
      "Conducted UAT testing for SAP payroll system. Created Excel automation tools to analyze millions of records and detect discrepancies.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Jul 2023",
  },
  {
    title: "Web Developer (Freelance)",
    location: "Singapore",
    description:
      "Built and designed e-commerce website using Shopify, HTML and CSS. Managed online workflow for jewelry business serving 100+ monthly customers.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Jun 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Custom Crossword Web Game",
    description:
      "A daily crossword game with brain-rot language",
    tags: ["Scala", "Python", "React", "Game Development", "Full-Stack"],
    imageUrl: "/vercel.svg",
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
      "Developed a cross-platform mobile app for personal expense tracking and budgeting.",
    tags: ["React Native", "Expo", "Node.js", "Jest", "CoinGecko API"],
    imageUrl: "/vercel.svg",
  },
] as const;

export const aboutWriteUp = "I am a Year 2 Computer Science undergraduate at the National University of Singapore." + 
"I am passionate about building products that make a difference. I have experience in full-stack development, mobile app development, and data analysis. I am currently seeking internship opportunities in software engineering and data science.";

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
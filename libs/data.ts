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
      "Built a daily crossword game based on Gen Alpha slang using Scala, Python and React. Won Best Polyglot Hack at NUS Hack&Roll 2025. Reached 500+ daily active users globally.",
    tags: ["Scala", "Python", "React", "Game Development", "Full-Stack"],
  },
  {
    title: "Group Expense Manager Bot",
    description:
      "Built a Telegram bot for managing group expenses using Python and Heroku. Features include expense tracking, custom splits, debt simplification, and receipt image recognition.",
    tags: ["Python", "Heroku", "Telegram API", "Image Recognition", "Backend"],
  },
  {
    title: "Personal Expense Tracker",
    description:
      "Developed a cross-platform mobile app for expense tracking with features like budget planning, automated recurring transactions, and real-time stock updates via CoinGecko API.",
    tags: ["React Native", "Expo", "Node.js", "Jest", "CoinGecko API"],
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
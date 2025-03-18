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
    name: "Technologies",
    hash: "#technologies",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutWriteUp = "I am a Year 2 Computer Science undergraduate at the National University of Singapore." + 
"I am passionate about building products that make a difference. I have experience in full-stack development, mobile app development, and data analysis. I am currently seeking internship opportunities in software engineering and data science.";


export const experiencesData = [
  {
    id: 1,
    title: "Software Developer Intern",
    location: "Accenture, Singapore",
    description: [
      "Built applications using Pega, Python, React and Java",
      "Led data migration and technical architecture design",
      "Implemented automated testing frameworks"
    ],
    date: "June 2025 - Present",
    icon: "/accenture-logo.png",
  },
  {
    id: 2,
    title: "Undergraduate, Computer Science",
    location: "National University of Singapore",
    description:[
        "Currently pursuing a Bachelor of Computing (Hons) in Computer Science.\n",
        "First Class Honors (GPA: 4.92)",
        "Dean's List for Year 1 Semester 1",
      ],
    date: "August 2023 - Present",
    icon: "/nus-logo.png",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    location: "Locket Allegro, Singapore",
    description:
    [
      "Built e-commerce website using Shopify, HTML and CSS",
      "Served 100+ monthly customers",
      "Developed and optimized order processing workflow"
    ],
    date: "February 2023 - June 2023",
    icon: "/locketallegro-logo.png",
  },
  {
    id: 4,
    title: "Business Analyst Intern",
    location: "NCS Pte. Ltd., Singapore",
    description: [
      "Led User Acceptance Testing for SAP database HR payroll system with 100% test case pass rate",
       "Developed automated Excel templates analyzing millions of payroll records for trend analysis and discrepancy detection."
    ],
    date: "January 2023 - July 2023",
    icon: "/ncs-logo.jpg",
  },
] as const;

export const projectsData = [
  {
    title: "Gyatword",
    description: "A crossword web game incorporating brain-rot language.",
    tags: ["Backend Developer", "Full Stack Web Game"],
    techStack: [
      "Supabase",
      "Docker",
      "Scala",  
      "Python",
      "FastAPI",   
      "React",  
      "TypeScript", 
      "Tailwind CSS", 
      "Node.JS",   
      "Git",      
    ],
    imageUrl: "/gyatword-ss.jpg",
    longDescription: "Built on Python and React, Gyatword is a daily refresh, full stack web crossword game using \'brainrot\'" +
    " urban slang. \n\nIt won best polygot hack at the NUS Hack & Roll 2025, and a reached a daily user high of over 500 players!",
    websiteURL: "https://gyatword.com",
  },
  {
    title: "CoconutSplit",
    description: "A telegram bot for managing group expenses, splits and debts.",
    tags: ["Backend Developer", "Telegram Bot"],
    techStack: [
      "Python",
      "FastAPI",
      "Supabase",
      "Docker",
      "Git",
      "Heroku"
    ],
    imageUrl: "/gyatword-ss.jpg",
    longDescription: "Built with Python and Telegram API, Coconutsplit is a \'Splitwise' alternative that lets you manage group expenses, splits and debts on Telegram using simple commands."
    + "\n\nIt also incorporates OCR technology to scan receipts and automatically add expenses.",
    websiteURL: "https://coconutsplit-web.vercel.app"
  },
  {
    title: "SpendSense",
    description: "A cross-platform mobile app for personal expense tracking and budgeting.",
    tags: ["Full Stack Developer", "Mobile Development"],
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "Jest",
      "Git"
    ],
    imageUrl: "/gyatword-ss.jpg",
    longDescription: "Built with React Native, SpenseSense is a cross-platform mobile app that helps you track your personal expenses, manage and visualise spending habits, access real time stock updates and more."
    + " It aims to help students build financial literacy and responsibility.",
    websiteURL: ""
  },
  {
    title: "Portfolio Website",
    description: "This website itself!",
    tags: ["Frontend Developer", "Porfolio"],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Git"
    ],
    imageUrl: "/gyatword-ss.jpg",
    longDescription: "Built with NextJS and Tailwind CSS, this portfolio website is a demonstration of my frontend development abilities!" + 
    " \n\nVarious React libraries were utilised to design the website, such as Framer Motion and ThreeJS.",
    websiteURL: ""
  }
] as const;

export const skillsData = {
  languages: {
    title: "Languages",
    items: [ "Python", "JavaScript", "TypeScript", "Java", "C"]
  },
  frameworks: {
    title: "Frameworks/Libraries",
    items: [ "React", "Next.js", "Tailwind CSS"]
  },
  tools: {
    title: "Tools",
    items: [ "Git", "Docker", "Node.js", "Supabase"
    ]
  },
  ml: {
    title: "ML & Data",
    items: [ "Pytorch", "Numpy"
    ]
  }
} as const;
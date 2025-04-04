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

export const placeholders = [
  "Who am I?",
  "What projects have I done?",
  "What experiences have I had?",
  "What is my tech stack?",
  "How do you contact me?",
  "How to find a job as a CS major?",
];


export const aboutWriteUp = "I’m a driven Computer Science student passionate about building impactful products. From full-stack development to mobile apps and web games, I enjoy crafting technology that solves real problems and makes life better! Always eager to learn and collaborate." +
"\n\nOutside of work, I enjoy keeping fit, playing guitar and travelling!"

export const projectWriteUp = "Many of these projects started out as tossed around ideas over meals, and have since been brought to life." +
        " These projects are personal endeavours for learning and enjoyment—driven by curiosity and a passion for creating something useful," +
        " or just fun :)."


        export const projectsData = [
          {
            title: "Gyatword",
            description: "A custom crossword web game incorporating brain-rot language.",
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
              "Node.js",   
              "Git",      
            ],
            imageUrl: "/gyatword.png",
            imageUrl2: "/gyatword-puzzle.png",
            longDescription: "Built on Python and React, Gyatword is a daily refresh, full stack web crossword game using \'brainrot\'" +
            " urban slang. \n\nIt won best polygot hack at the NUS Hack & Roll 2025, and a reached a daily user high of over 500 players!",
            websiteURL: "https://gyatword.com",
          },
          {
            title: "CoconutSplit",
            description: "A telegram bot for easily managing group expenses, splits and debts.",
            tags: ["Full Stack Developer", "Telegram Bot"],
            techStack: [
              "Supabase",
              "Docker",
              "Python",
              "FastAPI",
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS", 
              "Node.js",   
              "Git",
              "Heroku"
            ],
            imageUrl: "/coconutsplit-logo.jpg",
            imageUrl2: "/coconutsplit-ss.png",
            longDescription: "Built with Python, React and Telegram API, Coconutsplit is a \'Splitwise' alternative that lets you manage group expenses, splits and debts on Telegram using a sleek GUI.",
            websiteURL: "https://t.me/coconutsplit_bot"
          },
          {
            title: "SpendSense",
            description: "A cross-platform mobile app for personal expense tracking and budgeting.",
            tags: ["Full Stack Developer", "Mobile App Developer"],
            techStack: [
              "React",
              "TypeScript",
              "Node.js",
              "Supabase",
              "Jest",
              "Git"
            ],
            imageUrl: "/spendsense-logo.png",
            imageUrl2: "/spendsense-app.png",
            longDescription: "Built with React Native, SpenseSense is a cross-platform mobile app that helps you track your personal expenses, manage and visualise spending habits, access real time stock updates and more."
            + " It aims to help students build financial literacy and responsibility.",
            websiteURL: ""
          },
          {
            title: "Portfolio Website",
            description: "This website itself!",
            tags: ["Frontend Developer", "Web Developer"],
            techStack: [
              "React",
              "TypeScript",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Vercel",
              "Git"
            ],
            imageUrl: "/portfolio-ss.png",
            imageUrl2: "/portfolio-ss.png",
            longDescription: "Built with NextJS and Tailwind CSS, this portfolio website is a demonstration of my frontend development abilities!" + 
            " \n\nVarious React libraries were utilised to design the website, such as Framer Motion for the animations." +
            "\n\nTry clicking the highlighted word 'code' at the top of this website for a little surprise!",
            websiteURL: ""
          }
        ] as const;

export const experiencesWriteUp = "Each of these experiences has shaped me into a more versatile developer and problem-solver. " +
"They’ve allowed me to sharpen my technical skills and my ability to work with others, adapt, and deliver real-world solutions."

export const experiencesData = [
  {
    id: 1,
    title: "Software Developer Intern",
    location: "Accenture, Singapore",
    description: [
      "To be continued..."
    ],
    date: "June 2025 - Present",
    icon: "/accenture-logo.png",
    techStack: [ 
    ],
  },
  {
    id: 2,
    title: "Undergraduate, Computer Science",
    location: "National University of Singapore",
    description:[
        "Currently pursuing a Bachelor of Computing (Hons) in Computer Science.\n",
        "First Class Honors with a GPA of 4.92",
        "Dean's List for Year 1 Semester 2",
      ],
    date: "August 2023 - Present",
    icon: "/nus-logo.png",
    techStack: ["Java", "Python", "C", "JavaScript", "PyTorch", "NumPy", "scikit-learn"],
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
    icon: "/computer-icon.png",
    techStack: ["HTML5", "CSS3"],
  },
  {
    id: 4,
    title: "Business Analyst Intern",
    location: "NCS Pte. Ltd., Singapore",
    description: [
      "Led User Acceptance Testing for SAP database HR payroll system with 100% test case pass rate",
       "Developed automated Excel templates analyzing millions of payroll records for trend analysis and discrepancy detection"
    ],
    date: "January 2023 - July 2023",
    icon: "/ncs-logo.jpg",
    techStack: ["Excel", "SAP"],
  },
] as const;

export const technologiesWriteUp = "Some of the technologies I am familiar with through projects, coursework and work experiences. I'm always hunting for opportunities to expand my skillset and learn new technologies!"

export const skillsData = {
  languages: {
    title: "Languages",
    items: [ "Python", "JavaScript", "TypeScript", "Java", "C"]
  },
  frameworks: {
    title: "Frameworks/Libraries",
    items: [ "React", "Next.js", "Tailwind CSS", "FastAPI"]
  },
  tools: {
    title: "Tools",
    items: [ "Git", "Docker", "Node.js", "Supabase"
    ]
  },
  ml: {
    title: "ML & Data",
    items: [ "PyTorch", "NumPy", "scikit-learn"
    ]
  }
} as const;
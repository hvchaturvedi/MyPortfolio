import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
   {
    title: "Backend Developer",
     icon: <BackendIcon />,
   },
 // {
  //  title: "Problem Solving",
  //  icon: <ProblemSolvingIcon />,
//  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
   // {
   //   name: "Flutter",
   //   icon: "/assets/tech/flutter.svg",
   //   link: "https://flutter.dev/",
   // },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
   // {
   //  name: "Zustand",
   //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
   //   link: "https://zustand-demo.pmnd.rs",
    //},
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "Achievements & Activities",
    company_name: "Personal & Academic",
    icon: "/assets/icons/trophy.svg", 
    iconBg: "#E6DEDD",
    date: "2021 – Present",
    points: [
      "Completed 100xDevs Full Stack Web Development Program by Harkirat Singh (Cohort 2.0).",
      "Earned certifications in JavaScript Algorithms & Data Structures (FreeCodeCamp) and React (Udemy).",
      "Participated in Infosys Internship Program 5.0 and completed all required coursework.",
      "Built key projects including AI Expense Splitting App, Paytm Wallet Clone, and Chatterbox (AI Chat App).",
      "Volunteered as an NSS member, contributing to donation drives for underprivileged schools.",
      "Actively practice DSA in C++ and explore DevOps tools like Docker and Jenkins.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Expense Splitting App",
    description:
      "A full-stack expense splitting platform with AI-assisted categorization and settlement suggestions. Integrated secure authentication via Clerk, real-time data handling with Convex, and background jobs using Inngest. Built a responsive UI using Tailwind CSS and shadcn/ui.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "convex", color: "orange-text-gradient" },
      { name: "prisma", color: "yellow-text-gradient" },
      { name: "clerk", color: "red-text-gradient" },
      { name: "inngest", color: "purple-text-gradient" },
      { name: "shadcn/ui", color: "cyan-text-gradient" },
    ],
    image: "/assets/projects/ai-expense-split.png",
    source_code_link: "https://github.com/hvchaturvedi/splitr",
    deployed_link: "https://splitr-ashy.vercel.app/",
  },
  {
    name: "Paytm Wallet Clone",
    description:
      "A secure wallet application built using React, Node.js, and MongoDB with JWT-based authentication and Redux for state management. Features wallet transactions, balance view, and mobile-friendly responsive design.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "redux", color: "orange-text-gradient" },
      { name: "jwt", color: "yellow-text-gradient" },
    ],
    image: "/assets/projects/paytm-wallet.png",
    source_code_link: "https://github.com/hvchaturvedi/PaytmWallet",
    deployed_link: "",
  },
  {
    name: "Chatterbox — Real-Time Chat with AI",
    description:
      "An AI-powered real-time chat application using the MERN stack. Integrated Socket.io for instant messaging, Redis for message queuing and rate limiting, and Gemini API for AI-driven conversation responses.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "gemini-api", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/chatterbox.png",
    source_code_link: "https://github.com/hvchaturvedi/chatApp",
    deployed_link: "",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/hvchaturvedi",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/hvchaturvedi",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/hvchaturvedi",
  }
  //{
   // id: "instagram",
   // icon: <InstagramIcon />,
   // link: "https://www.instagram.com/_.shivam._.here._",
 // },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};

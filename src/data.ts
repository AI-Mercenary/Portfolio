// ─── Site content — Sampath Varma Datla ────────────────────────────────────

export const SOCIALS = {
  github: "https://github.com/AI-Mercenary",
  linkedin: "https://linkedin.com/in/sampath-varma-datla",
  x: "https://x.com/_ai_wizard_",
};

export const PROFILE = {
  name: "SAMPATH",
  surname: "DATLA",
  role: "AI Engineer · Full-Stack Developer",
  bio: "I'm an AI Engineer who builds intelligent systems end-to-end — from architecting scalable solutions to deploying them in production. I've delivered AI-powered and full-stack platforms across healthcare and education, and I'm driven by turning complex challenges into real, measurable impact. Outside of code, I play a bit of everything, trek, cycle, and get lost in a good book — I'm a jack of all trades, master of none, and that's exactly how I like it.",
  quote: "I like building things that think, and I have way too much fun doing it.",
  photo: "/Sampath.jpg",
  resume: "/resume.pdf",
  location: "Visakhapatnam, India",
  email: "sdatla394@gmail.com",
  phone: "+91-7013844384",
  stats: [
    { val: "6+", label: "Projects Shipped" },
    { val: "4", label: "Industry Roles" },
    { val: "3", label: "Awards Won" },
  ],
};

export const EDUCATION = [
  {
    title: "B.Tech, Computer Science",
    org: "GITAM Deemed University",
    date: "Aug 2022 – Apr 2026",
    desc: "Coursework: Operating Systems, Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases, Software Engineering, Marketing. Activities: GITAM Aero Astro Club, Rotaract Club of GITAM, IEEE CS – GITAM University.",
    chips: ["Algorithms", "AI/ML", "Databases", "Networking"],
    logo: "/exp/gitam.png",
  },
  {
    title: "Summer School — CV, Graphics & ML",
    org: "Indian Institute of Technology Delhi",
    date: "Jun 2024 – Jul 2024",
    desc: "Selected as 1 of 20 students nationwide for the CSE department's summer school. Two-week intensive program covering Computer Vision, Computer Graphics, and Image Processing fundamentals, alongside research methodology in CV, ML, and Graphics.",
    chips: ["Computer Vision", "Graphics", "Research"],
    logo: "/exp/iitd.png",
  },
  {
    title: "High School",
    org: "Bethany School",
    date: "Jul 2008 – Apr 2020",
    desc: "Completed schooling in Visakhapatnam.",
    chips: undefined as string[] | undefined,
    logo: null as string | null,
  },
];

export const EXPERIENCE = [
  {
    company: "DATAi2i Private Limited",
    role: "Junior AI Engineer (Promoted from AI Engineer Intern)",
    duration: "May 2026 – Present",
    logoSrc: "/exp/datai2i.png",
    points: [
      "Design and deploy LLM-powered NLP inference pipelines for pharmaceutical clients on AWS SageMaker and S3, reducing model deployment time by 30% and streamlining CI/CD workflows.",
      "Execute fine-tuning, evaluation, and optimization of large language models for domain-specific text classification, named-entity recognition, and contextual search, achieving a 25% accuracy gain over baseline.",
    ],
  },
  {
    company: "ZenithZap Beverages Private Limited",
    role: "AI Engineer & Full-Stack Developer Intern",
    duration: "Aug 2025 – Oct 2025",
    logoSrc: "/exp/zenithzap.png",
    points: [
      "Delivered a production e-commerce web application using React.js, Node.js, and Express.js, growing monthly active users past 5,000 within two months and achieving a 30% increase in brand visibility.",
      "Integrated a conversational AI chatbot via LLM APIs, boosting user engagement by 4%, decreasing support queries by 25%, and cutting response latency by 40% through server-side caching.",
    ],
  },
  {
    company: "DATAi2i Private Limited",
    role: "AI Engineer Intern",
    duration: "May 2025 – Jul 2025",
    logoSrc: "/exp/datai2i.png",
    points: [
      "Managed the full software development lifecycle of an internal knowledge assistant (Gemini, MongoDB, Streamlit), covering requirements analysis, system design, data pipeline setup, and production deployment.",
      "Accelerated employee document retrieval across 120+ files by 70% via semantic chunking, dense-vector indexing, and prompt calibration, achieving top-1 precision of 70% and removing 60% of off-topic results.",
    ],
  },
  {
    company: "BMARG Innovative Solutions",
    role: "Software Engineer Intern",
    duration: "Jan 2025 – Apr 2025",
    logoSrc: null as string | null,
    points: [
      "Built a MERN-stack clinic management portal with Razorpay payment integration and Google Firebase Authentication, cutting patient onboarding time by 35% and improving page-load speed by 40%.",
      "Scaled the platform to 500+ concurrent sessions by profiling and resolving critical scheduling bottlenecks in collaboration with clinical staff.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "1st Place — Internal Smart India Hackathon",
    platform: "GITAM UNIVERSITY · 400+ TEAMS",
    date: "2025",
  },
  {
    title: "Selected — Computer Vision & Graphics Summer School",
    platform: "IIT DELHI · TOP 20 NATIONWIDE",
    date: "2024",
  },
  {
    title: "Top 10 — Technical Innovation Event",
    platform: "IIT KANPUR TECHKRITI",
    date: "2024",
  },
];

export const CO_CURRICULARS = [
  "President — GITAM Aero Astro Club",
  "Operations Lead — IEEE CS GITAM Chapter",
  "Member — Rotaract Club of GITAM",
];

export const INTERESTS = [
  { label: "Cricket", icon: "GiCricketBat" },
  { label: "Tennis", icon: "GiTennisRacket" },
  { label: "Trekking", icon: "GiMountainClimbing" },
  { label: "Swimming", icon: "FaSwimmer" },
  { label: "Developing", icon: "FaCode" },
  { label: "Charity Work", icon: "FaHandHoldingHeart" },
  { label: "Cycling", icon: "FaBiking" },
  { label: "Running", icon: "FaRunning" },
  { label: "Reading Books", icon: "FaBookReader" },
  { label: "Playing Games", icon: "MdSportsEsports" },
  { label: "Research", icon: "FaMicroscope" },
];

export const PROJECTS = [
  {
    title: "Vaultiq — Enterprise Search",
    desc: "Enterprise AI knowledge engine for uploading internal documents (PDF, DOCX, XLSX, PPTX, images) and searching/chatting with them via multi-agent AI, grounded strictly in your own content. Auto-generated executive summaries, department classification, and semantic search with real relevance ranking.",
    tech: ["Multi-Agent AI", "RAG", "Semantic Search"],
    img: "/exp/vaultiq.png",
    link: "https://github.com/AI-Mercenary/Vaultiq",
    cat: "AI/ML",
    featured: true,
  },
  {
    title: "STARFORGE — 3D Space Exploration",
    desc: "Immersive 3D web platform for exploring planets, celestial bodies, and space information. Built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS for real-time 3D rendering and smooth interactive navigation.",
    tech: ["React Three Fiber", "TypeScript", "shadcn-ui"],
    img: "/exp/starforge.jpg",
    link: "https://github.com/AI-Mercenary/STARFORGE",
    cat: "FULLSTACK",
  },
  {
    title: "LifePathBot — AI Student Success Platform",
    desc: "AI-powered student success platform with a glassmorphic UI combining a Study Mode (document-based Q&A) and General Mode chat, multi-file upload, goal tracking with SMART goals, mood tracking, and analytics dashboards.",
    tech: ["LLM Q&A", "RAG", "Analytics"],
    img: "/exp/lfb.png",
    link: "https://github.com/AI-Mercenary/lifepath-bot-frontend",
    cat: "AI/ML",
  },
  {
    title: "AdaFit — AI Fitness & Wellness Coach",
    desc: "AI fitness and wellness coach powered by Gemini 2.0 with multi-agent orchestration via LangGraph — Context Analyzer, Strategic Planner, Habit Tracker, and Motivation Coach agents generate personalized workout and diet plans and track streaks.",
    tech: ["Gemini 2.0", "LangGraph", "Multi-Agent"],
    img: "/exp/adafit.png",
    link: "https://github.com/AI-Mercenary/ada-fit-backend",
    cat: "AI/ML",
  },
  {
    title: "Sanchari — AI Travel Planner",
    desc: "AI-powered travel planning mobile app built with Expo/React Native. Generates day-by-day multi-city itineraries via Groq, lets users browse 3,600+ real destinations, save/bookmark trips, and find travel companions through a marketplace.",
    tech: ["React Native", "Expo", "Groq"],
    img: null as string | null,
    icon: "compass",
    link: "https://github.com/AI-Mercenary/Sanchari",
    cat: "MOBILE",
  },
  {
    title: "StockPulse — Realtime Stock Market Analysis",
    desc: "Real-time stock monitoring app tracking 15 major companies with live price polling, technical indicators (RSI, MACD, moving averages, volatility), sentiment-scored financial news, automated alerts, and a Groq-backed conversational chatbot grounded in collected data.",
    tech: ["Groq", "WebSockets", "Sentiment Analysis"],
    img: "/exp/stockmar.jpg",
    link: "https://github.com/AI-Mercenary/Realtime_Stockmarket_Analysis",
    cat: "AI/ML",
  },
];

export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
];

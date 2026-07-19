import { Project, ServiceCard, ServicePackage, Experience, CourseModule, SkillCategory } from "./types";

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Crypto Trading Landing page design",
    subtitle: "Modern Crypto Platform",
    description: "Complete UI/UX design case study for modern crypto trading platform featuring real-time trackers and dynamic trading widgets.",
    tags: ["UI/UX", "Landing Page", "Crypto"],
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p2",
    title: "Home Cleaning Landing page design",
    subtitle: "Premium Home Service",
    description: "Premium home cleaning service landing page with modern UI/UX design, instant booking scheduler, and pricing calculator.",
    tags: ["UI/UX", "Landing Page", "Service"],
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p3",
    title: "Portfolio Website Landing page design",
    subtitle: "UX/UI agency showcase",
    description: "UX/UI case study for Nebulae portfolio website with modern design approach, custom layout grids, and motion animations.",
    tags: ["UI/UX", "Landing Page", "Portfolio"],
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p4",
    title: "Building Development Landing page design",
    subtitle: "Real Estate & Architecture",
    description: "Architecture and building development landing page with modern UI/UX design, virtual tour modules, and listing maps.",
    tags: ["UI/UX", "Landing Page", "Architecture"],
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p5",
    title: "AI Project Management Landing page design",
    subtitle: "Next-Gen SaaS Platform",
    description: "AI-powered project management web application landing page with intelligent automated workflows and timeline tracking.",
    tags: ["UI/UX", "Landing Page", "AI"],
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p6",
    title: "HR Management System",
    subtitle: "Enterprise HR Dashboard",
    description: "Comprehensive HR management system with modern UI/UX design approach, payroll tracking, and employee directories.",
    tags: ["Web App", "HR", "Management"],
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p7",
    title: "Banking Dashboard",
    subtitle: "Modern Wealth Manager",
    description: "Modern dashboard for financial management featuring intuitive cash-flow visualization charts and quick transactions ledger.",
    tags: ["Dashboard", "Finance", "Web App"],
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p8",
    title: "Agency Website",
    subtitle: "Creative Showcase",
    description: "Creative agency portfolio and service showcase website featuring elegant grids, micro-interactions, and visual dark theme.",
    tags: ["Website", "Portfolio", "Corporate"],
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p9",
    title: "Brand Identity - TechCo",
    subtitle: "Fintech Brand Guidelines",
    description: "Complete brand identity for fintech startup including custom logo construction guidelines, typography, and color theory.",
    tags: ["Branding", "Logo", "Identity"],
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p10",
    title: "Fitness Tracking App",
    subtitle: "iOS & Android Companion",
    description: "Health and fitness tracking mobile application with calorie charts, sleep cycle indicators, and personalized workout maps.",
    tags: ["Mobile", "Health", "Tracking"],
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1510017808632-95f06e68b94d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p11",
    title: "Restaurant Website",
    subtitle: "Gourmet Digital Portal",
    description: "Modern website with online ordering system, interactive menu filter, table reservation engine, and client reviews slider.",
    tags: ["Website", "Food", "E-commerce"],
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p12",
    title: "Design System",
    subtitle: "Scalable Component Library",
    description: "Comprehensive design system for scalable products with standard Figma tokens, components variables, and full UI documentation.",
    tags: ["Design System", "Components", "Documentation"],
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1581291518655-9523c932dede?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p13",
    title: "Fashion Brand Identity",
    subtitle: "Aura Luxury Brand",
    description: "Luxury fashion brand visual identity featuring minimal layouts, modern typography combinations, and premium packaging design.",
    tags: ["Branding", "Fashion", "Luxury"],
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p14",
    title: "Travel Booking App",
    subtitle: "Global Explorer Assistant",
    description: "Seamless travel planning and booking experience app with offline flight check-ins, hotel compare, and AI route planner.",
    tags: ["Mobile", "Travel", "Booking"],
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p15",
    title: "SaaS Dashboard",
    subtitle: "Nebulae Analytics Console",
    description: "Analytics dashboard for enterprise SaaS platform with KPI displays, custom widgets, real-time logs, and multi-tenant views.",
    tags: ["Dashboard", "SaaS", "Analytics"],
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "p16",
    title: "Startup Website",
    subtitle: "Nebulae Launch Website",
    description: "Sleek and high-converting landing page for next-generation tech startup with custom illustrations and smooth CTA flows.",
    tags: ["Website", "Landing Page", "Startup"],
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  }
];

export const servicesData: ServiceCard[] = [
  {
    id: "s1",
    title: "UI UX Design",
    description: "Creating intuitive and engaging user interfaces that enhance user experience and drive conversions.",
    icon: "LayoutGrid",
    bulletPoints: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    id: "s2",
    title: "Product Design",
    description: "End-to-end product design services from concept to launch, ensuring market-ready product success.",
    icon: "Layers",
    bulletPoints: ["Product Strategy", "Design Systems", "MVP Design", "Product Testing"]
  },
  {
    id: "s3",
    title: "Mobile App Design",
    description: "Designing beautiful and functional mobile applications for iOS and Android platforms.",
    icon: "Smartphone",
    bulletPoints: ["iOS Design", "Android Design", "App Prototyping", "Icon Design"]
  },
  {
    id: "s4",
    title: "Android App Development",
    description: "Building robust and scalable Android applications with intuitive interfaces and smooth performance across all devices.",
    icon: "Cpu",
    bulletPoints: ["Native Android Development", "UI/UX for Android", "App Optimization", "Play Store Deployment"]
  },
  {
    id: "s5",
    title: "iOS Native App Development",
    description: "Delivering premium-quality, native iOS applications built for reliability, speed, and exceptional user experience on Apple devices.",
    icon: "Smartphone",
    bulletPoints: ["Swift / SwiftUI Development", "iOS UI/UX Design", "App Testing & Optimization", "App Store Submission"]
  },
  {
    id: "s6",
    title: "API Development",
    description: "Creating secure, efficient, and scalable APIs that power seamless integrations and enhance application performance.",
    icon: "Database",
    bulletPoints: ["RESTful API Development", "Authentication & Security", "Database Integration", "API Documentation"]
  },
  {
    id: "s7",
    title: "Web Design",
    description: "Crafting responsive and modern websites that deliver exceptional user experiences.",
    icon: "Globe",
    bulletPoints: ["Landing Pages", "E-commerce", "Corporate Sites", "Responsive Design"]
  },
  {
    id: "s8",
    title: "Website Development",
    description: "Crafting high-performance and responsive websites designed to deliver seamless user experiences and meet business objectives.",
    icon: "Code",
    bulletPoints: ["Front-End Development", "Back-End Development", "CMS Integration", "Responsive Design"]
  }
];

export const packagesData: ServicePackage[] = [
  {
    title: "Website Design",
    price: "$700",
    subtitle: "Ideal for Startup Owners, MVP Builders",
    description: "A fast, premium quality layout design package to establish a clean and professional web presence.",
    features: [
      "Design Style Guide",
      "Responsive across all devices",
      "Unlimited Revisions",
      "Developer Handoff Support"
    ]
  },
  {
    title: "Web/Mobile App Design",
    price: "$1,500",
    tag: "POPULAR",
    subtitle: "For SaaS & Fast MVP Launches",
    description: "End-to-end full-scale visual and architectural design matching custom market constraints.",
    features: [
      "UX Research & Personas",
      "Design System with Figma Tokens",
      "Unlimited Revisions",
      "Developer Handoff",
      "Transparent Communication",
      "Responsive across all devices"
    ]
  },
  {
    title: "Monthly Subscription",
    price: "$2,000+",
    subtitle: "Ideal for Startup or MVP Teams",
    description: "Continuous professional design and iteration support to consistently level up your product.",
    features: [
      "Monthly dedicated designers",
      "Adhoc design support",
      "Right designer for right product",
      "Transparent communication"
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp1",
    role: "Instructor — UI/UX Course",
    company: "Interactive Cares",
    period: "April 2025 - Present | Remote",
    location: "Remote",
    description: "Teaching UI/UX design, user research, prototyping, and design systems to learners. Guiding students through hands-on projects, conducting interactive sessions, and mentoring future designers to build strong industry-ready portfolios.",
    icon: "GraduationCap"
  },
  {
    id: "exp2",
    role: "Instructor — UI/UX Course",
    company: "Grameenphone Academy",
    period: "October 2024 - Present | Remote",
    location: "Remote",
    description: "Leading classes for 70+ students on topics such as user flows, information architecture, competitor analysis, interaction design, and UI design fundamentals. Helping learners understand practical design processes and real-world product thinking.",
    icon: "GraduationCap"
  },
  {
    id: "exp3",
    role: "Project Manager",
    company: "Bongo Source",
    period: "November 2023 - Present | Remote",
    location: "Remote",
    description: "Overseeing project execution, managing cross-functional collaboration, and ensuring smooth workflow in digital product development. Facilitating communication between design, engineering, and business teams to deliver successful outcomes.",
    icon: "Briefcase"
  },
  {
    id: "exp4",
    role: "User Experience Lead",
    company: "Nebulae Software Solutions",
    period: "June 2023 - October 2025 | Remote",
    location: "Remote",
    description: "Responsible for leading a team of UX designers, delivering complete design solutions for mobile apps, ERP systems, HRM platforms, and SaaS dashboards. Managed research, wireframes, prototypes, and usability improvements while coordinating with product and engineering teams.",
    icon: "Award"
  },
  {
    id: "exp5",
    role: "User Experience Designer",
    company: "Nebulae Software Solutions",
    period: "March 2024 - August 2024 | Remote",
    location: "Remote",
    description: "Conducted UX research, competitor analysis, and design audits. Designed user interfaces, dashboards, and workflows based on insights gathered from users and stakeholders. Completed all UX phases including Discover, Define, Ideate, and Empathize.",
    icon: "Briefcase"
  },
  {
    id: "exp6",
    role: "Squad Leader, UI/UX Team",
    company: "Nebulae Software Solutions",
    period: "December 2023 - February 2024 | Remote",
    location: "Remote (Internship)",
    description: "Led a team of interns in research activities, persona creation, empathy mapping, card sorting, and information architecture. Ensured timely delivery of UX tasks and coordinated feedback with senior designers.",
    icon: "Users"
  },
  {
    id: "exp7",
    role: "User Experience Designer",
    company: "Nebulae Software Solutions",
    period: "June 2023 - November 2023 | Remote",
    location: "Remote (Internship)",
    description: "Performed user research, developed personas, created empathy maps, and built user flows and site maps. Contributed to improving overall product navigation and usability.",
    icon: "Briefcase"
  },
  {
    id: "exp8",
    role: "Graphic Designer",
    company: "GaoTek Inc",
    period: "April 2023 - June 2023 | Remote",
    location: "Remote (Internship)",
    description: "Designed marketing materials, brochures, banners, and social graphics. Worked closely with the marketing team to deliver creative assets aligned with brand guidelines.",
    icon: "Palette"
  },
  {
    id: "exp9",
    role: "Graphic Designer",
    company: "Retail Solution",
    period: "December 2018 - January 2023 | Remote",
    location: "Remote (Part-time)",
    description: "Created digital designs, promotional materials, and social media visuals. Maintained consistent brand identity across all platforms.",
    icon: "Palette"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Design",
    icon: "Sparkles",
    skills: ["UI/UX Design", "Product Design", "Graphic Design", "Interaction Design", "Visual Design", "Design Thinking", "User Interface Design", "Experience Design"]
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Figma", "Notion", "Miro", "Framer", "Webflow", "Zeplin", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "InVision", "Principle"]
  },
  {
    title: "Development",
    icon: "Code",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Flutter", "Dart", "Java", "React", "Responsive Design", "Tailwind CSS"]
  },
  {
    title: "Research & Product",
    icon: "Search",
    skills: ["User Research", "Wireframing", "Prototyping", "Design System", "Product Strategy", "Usability Testing", "Interaction Design", "A/B Testing", "User Journey Mapping"]
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: ["Team Leadership", "Client Communication", "Project Management", "Mentoring", "Problem Solving", "Collaboration", "Presentation Skills"]
  },
  {
    title: "Branding",
    icon: "Award",
    skills: ["Brand Identity", "Logo Design", "Brand Strategy", "Typography", "Color Theory", "Brand Guidelines", "Visual Identity", "Brand Development"]
  },
  {
    title: "Specializations",
    icon: "Layers",
    skills: ["Website Design", "Mobile App Design", "SaaS Dashboard", "Landing Pages", "E-commerce Design", "Admin Panels", "ERP Systems", "HRM Platforms"]
  },
  {
    title: "User Experience",
    icon: "Layout",
    skills: ["UX Writing", "Information Architecture", "User Flows", "Accessibility", "Usability", "Content Strategy", "Heuristic Evaluation", "Card Sorting"]
  },
  {
    title: "Creative Design",
    icon: "Palette",
    skills: ["Moodboard Design", "Concept Development", "Visual Identity", "Design Trends", "Creative Direction", "Style Guides", "Design Systems", "Asset Creation"]
  }
];

export const courseModulesData: CourseModule[] = [
  {
    id: 1,
    title: "UI/UX Fundamentals & Figma Essentials",
    subtitle: "MODULE 1",
    objectives: ["Introduction to UI/UX Design", "Design Thinking Process", "Color Theory & Typography", "Layout & Composition Principles"]
  },
  {
    id: 2,
    title: "Figma Tools, Workflow & Professional Techniques",
    subtitle: "MODULE 2",
    objectives: ["Figma Interface & Tools", "Components & Auto Layout", "Design Systems Principles", "Plugins & Workflow Optimization"]
  },
  {
    id: 3,
    title: "User Research, UX Strategy & Foundational Methods",
    subtitle: "MODULE 3",
    objectives: ["User Research Methods", "Creating User Personas", "User Journey Mapping", "Information Architecture"]
  },
  {
    id: 4,
    title: "Auto Layout, Constraints & Responsive Design",
    subtitle: "MODULE 4",
    objectives: ["Low-Fidelity Wireframes", "High-Fidelity Mockups", "Interactive Prototypes", "Micro-interactions & Animations"]
  },
  {
    id: 5,
    title: "Design Systems, Design Tokens & Figma Variables",
    subtitle: "MODULE 5",
    objectives: ["Testing Methodologies", "Conducting User Tests", "Analyzing Feedback", "Iterative Design Process"]
  },
  {
    id: 6,
    title: "Components, Variants, Interactions & Advanced Prototyping",
    subtitle: "MODULE 6",
    objectives: ["Client Brief Analysis", "End-to-End Design Process", "Presentation & Handoff", "Portfolio Development"]
  },
  {
    id: 7,
    title: "Usability Testing, Validation & UX Metrics",
    subtitle: "MODULE 7",
    objectives: ["Testing Methodologies", "Conducting User Tests", "Analyzing Feedback", "Iteration Design Process"]
  },
  {
    id: 8,
    title: "Website Wireframing & UX Information Architecture",
    subtitle: "MODULE 8",
    objectives: ["Website Structure Planning", "Content Organization", "Navigation Design", "Sitemap Creation"]
  },
  {
    id: 9,
    title: "Dashboard Wireframing & Data-Driven UX",
    subtitle: "MODULE 9",
    objectives: ["Dashboard Layout Design", "Data Visualization", "KPI Display Methods", "User Flow Optimization"]
  },
  {
    id: 10,
    title: "Mobile App Wireframing & Interaction Flows",
    subtitle: "MODULE 10",
    objectives: ["Mobile-First Design", "Touch Interactions", "Screen Flows", "Native Patterns"]
  },
  {
    id: 11,
    title: "Web UI Design Using the MVP Approach",
    subtitle: "MODULE 11",
    objectives: ["MVP Strategy", "Feature Prioritization", "Rapid Prototyping", "User Validation"]
  },
  {
    id: 12,
    title: "Dashboard UI Design Using the MVP Approach",
    subtitle: "MODULE 12",
    objectives: ["Dashboard MVP Planning", "Critical Metrics Focus", "Quick Iterations", "Stakeholder Feedback"]
  },
  {
    id: 13,
    title: "Mobile App UI Design Using the MVP Approach",
    subtitle: "MODULE 13",
    objectives: ["Mobile MVP Strategy", "Core Feature Design", "User Testing", "Launch Preparation"]
  },
  {
    id: 14,
    title: "Real-World Product Design Project",
    subtitle: "MODULE 14",
    objectives: ["Client Brief Analysis", "End-to-End Design Process", "Presentation & Handoff", "Portfolio Development"]
  },
  {
    id: 15,
    title: "Developer Handoff & Design-to-Code Workflow",
    subtitle: "MODULE 15",
    objectives: ["Handoff Tools & Processes", "Design Documentation", "Collaboration with Developers", "Quality Assurance"]
  },
  {
    id: 16,
    title: "Advanced Branding & Visual Identity",
    subtitle: "MODULE 16",
    objectives: ["Logo Construction", "Visual Identity Guidelines", "Brand System Development", "Marketing Collaterals"]
  },
  {
    id: 17,
    title: "Freelancing, Agency Operations & Client Acquisition",
    subtitle: "MODULE 17",
    objectives: ["Freelance Profile Setups", "Winning Proposal Writing", "Client Onboarding Processes", "Project Pricing Strategies"]
  },
  {
    id: 18,
    title: "Capstone Portfolio Case Study & Graduation",
    subtitle: "MODULE 18",
    objectives: ["Case Study Construction", "Behance/Dribbble Publishing", "Resume Design & Optimization", "Mock Interviews & Placement"]
  }
];

// Sourced from resume (Adam_Ahmed_Resume.pages) + GitHub. Review wording before shipping.

export const profile = {
  name: "Adam Ahmed",
  role: "AI Solutions Engineer & Full-Stack Developer",
  tagline:
    "I co-founded an AI automation studio that's shipped agentic workflows for 30+ businesses, and I build full-stack products and research-grade ML alongside it -- while finishing a CS degree.",
  location: "Athens, Greece",
  university: "National and Kapodistrian University of Athens",
  degree: "B.Sc. Computer Science",
  degreeFocus: "Artificial Intelligence, Software Engineering, Advanced Mathematics",
  email: "adamshawky2323@gmail.com",
  links: {
    github: "https://github.com/Adam-Shawky23",
    linkedin: "https://www.linkedin.com/in/adam-shawky23/",
    behance: "https://www.behance.net/adamshawky1/projects",
    resume:
      "https://drive.google.com/file/d/11jhOvlL_etMT8PqQhpjdYtDmblN9CdB7/view?usp=sharing",
  },
  about: [
    "I'm an AI Solutions Engineer and full-stack developer finishing a Computer Science degree at the National and Kapodistrian University of Athens, focused on Artificial Intelligence and Software Engineering.",
    "I co-founded HERAGLYPH, where I architect agentic AI systems -- multi-agent workflows built with LangGraph, CrewAI, and AutoGen -- that automate real operations for 30+ client businesses, from LLM integration to production deployment.",
    "Alongside that, I've built full-stack banking-adjacent software as an engineering intern at CIB Egypt, designed high-conversion sites as a contract web builder, and used my own time to go deep on things HERAGLYPH doesn't touch: fine-tuning transformers from scratch, benchmarking prompting strategies at scale, and low-level systems programming in C -- because I want to understand what's actually happening under the abstraction, not just call an API.",
  ],
  experience: [
    {
      role: "Co-Founder",
      org: "HERAGLYPH",
      meta: "Athens, Greece · Remote · Full-time",
      period: "05/2025 -- 08/2026",
      bullets: [
        "Co-founded a specialized AI automation agency, leading strategic digital transformation for 30+ international clients through custom AI-driven solutions and high-conversion web interfaces.",
        "Developed and deployed automated workflows and custom software tools that significantly reduced operational overhead for clients, focused on time-saving AI integrations.",
        "Orchestrated the end-to-end product lifecycle, from initial branding and high-fidelity UI/UX design to final technical deployment.",
        "Managed cross-functional project requirements, balancing technical software development with creative direction to deliver scalable business assets.",
      ],
    },
    {
      role: "Full Stack Engineer",
      org: "CIB Egypt",
      meta: "Cairo, Egypt · Hybrid · Internship",
      period: "01/2026 -- 03/2026",
      bullets: [
        "Developed and optimized responsive full-stack web applications using modern JavaScript/React frameworks and robust backend services.",
        "Engineered relational database schemas and optimized SQL query execution, improving data retrieval efficiency for core banking interfaces.",
        "Collaborated with cross-functional engineering teams to integrate RESTful APIs, maintain clean codebases, and ensure high system availability.",
        "Participated in the full software development lifecycle (SDLC), writing unit tests and technical documentation to support enterprise-grade applications.",
      ],
    },
    {
      role: "Web Builder",
      org: "Yegor Agency",
      meta: "Moscow, Russia · Remote · Contract",
      period: "10/2024 -- 11/2025",
      bullets: [
        "Built websites using CMS platforms (WordPress, Webflow) and custom code to client specifications.",
        "Uploaded and formatted content -- text, images, and video -- for a cohesive final presentation.",
        "Ensured full responsiveness and visual consistency across devices and browsers.",
        "Implemented on-page SEO fundamentals: meta tags, alt text, and optimized URLs.",
        "Improved page load speed through image compression, caching, and code optimization.",
        "Troubleshot and resolved technical issues during and after each build.",
        "Collaborated with designers, copywriters, and project managers to keep execution cohesive.",
        "Tested for functionality, usability, and performance before delivery.",
      ],
    },
  ],
  certifications: [
    {
      issuer: "IBM",
      items: [
        "Agentic AI with LangGraph, CrewAI, AutoGen, and BeeAI",
        "Agentic AI with LangChain and LangGraph",
        "Building AI Agents & AI Automation Specialist",
      ],
    },
    {
      issuer: "Google",
      items: [
        "AI for App Building & Web Application Design",
        "AI for Content Creation & Writing/Communication",
        "AI for Data Analysis & Research Insights",
        "Strategic Planning, Brainstorming, and AI Productivity",
        "The Art of Prompting & Responsible AI Use",
      ],
    },
    {
      issuer: "Vanderbilt University",
      items: [
        "AI Agents and Agentic AI with Python & Generative AI",
        "Claude Code: Software Engineering with Generative AI Agents",
      ],
    },
    {
      issuer: "Anthropic",
      items: ["Claude Code in Action"],
    },
  ],
  languages: [
    { name: "Russian", level: "Native" },
    { name: "Arabic", level: "Native" },
    { name: "Greek", level: "Fluent" },
    { name: "English", level: "Fluent" },
  ],
  skills: {
    "AI & Agentic Frameworks": [
      "LangGraph",
      "CrewAI",
      "AutoGen",
      "BeeAI",
      "LangChain",
      "LLM Orchestration",
      "Prompt Engineering",
    ],
    "ML / NLP Research": [
      "PyTorch",
      "Transformers (BERT, DeBERTa)",
      "DSPy",
      "RAG",
      "Multi-Agent Systems",
    ],
    "Programming Languages": ["Python", "TypeScript / JavaScript", "Java", "C / C++", "PHP"],
    "Web Development": [
      "React / Next.js",
      "NestJS",
      "Node.js",
      "HTML5 / CSS3",
      "WordPress",
      "Webflow",
      "UI/UX Design",
    ],
    "Data & Backend": ["PostgreSQL", "Prisma", "REST APIs", "SQL"],
    "Systems / CS Fundamentals": [
      "POSIX (IPC, signals, threads)",
      "Concurrency",
      "Algorithms & Data Structures",
    ],
    "Tools & Practices": ["Git", "GitHub", "Docker", "n8n", "Vercel", "Supabase", "CI/CD"],
  },
} as const;

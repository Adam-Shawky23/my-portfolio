// Sourced from resume (Adam_Ahmed_Resume.pages) + GitHub. Review wording before shipping.

export const profile = {
  name: "Adam Ahmed",
  role: "AI Solutions Engineer & Full-Stack Developer",
  tagline:
    "I co-founded an AI automation studio that's shipped agentic workflows for 30+ businesses, and I build full-stack products and research-grade ML alongside it -- while finishing a CS degree.",
  location: "Athens, Greece",
  university: "National and Kapodistrian University of Athens",
  degree: "B.Sc. Computer Science",
  gpa: "3.90 / 4.00",
  graduation: "Expected 08/2026",
  degreeFocus: "Artificial Intelligence, Software Engineering, Advanced Mathematics",
  email: "adamshawky2323@gmail.com",
  links: {
    github: "https://github.com/Adam-Shawky23",
    linkedin: "https://www.linkedin.com/in/adam-shawky23/",
    behance: "https://www.behance.net/adamshawky1/projects",
    resume:
      "https://drive.google.com/file/d/1E9eRiymPsypbKvxpDnX7scf8je_JTuw8/view?usp=sharing",
  },
  about: [
    "I'm an AI Solutions Engineer and full-stack developer finishing a Computer Science degree (3.90 GPA) at the National and Kapodistrian University of Athens, focused on Artificial Intelligence and Software Engineering.",
    "I co-founded HERAGLYPH, where I architect agentic AI systems -- multi-agent workflows built with LangGraph, CrewAI, and AutoGen -- that automate real operations for 30+ client businesses, from LLM integration to production deployment.",
    "Alongside that, I've built full-stack banking-adjacent software as an engineering intern at CIB Egypt, designed high-conversion sites as a contract web builder, and used my own time to go deep on things HERAGLYPH doesn't touch: fine-tuning transformers from scratch, benchmarking prompting strategies at scale, and low-level systems programming in C -- because I want to understand what's actually happening under the abstraction, not just call an API.",
  ],
  experience: [
    {
      role: "Full Stack Engineer",
      org: "CIB Egypt",
      meta: "Cairo, Egypt · Hybrid · Internship",
      period: "01/2026 -- 03/2026",
      bullets: [
        "Developed and optimized responsive full-stack web applications using modern JavaScript/React frameworks and robust backend services.",
        "Engineered relational database schemas and optimized SQL query execution, improving data retrieval efficiency for core banking interfaces.",
        "Collaborated with cross-functional engineering teams to integrate RESTful APIs, maintain clean codebases, and ensure high system availability.",
        "Participated in the full software development lifecycle (SDLC), writing unit tests and technical documentation for enterprise-grade applications.",
      ],
    },
    {
      role: "Co-Founder",
      org: "HERAGLYPH",
      meta: "Remote",
      period: "05/2025 -- 01/2026",
      bullets: [
        "Architected multi-agent (agentic AI) systems with LangGraph, CrewAI, and AutoGen to automate complex, multi-step workflows for 30+ client businesses, cutting manual operational effort.",
        "Integrated large language models into production environments, streamlining client operations and data-processing pipelines.",
        "Owned end-to-end delivery of custom AI automation solutions, from client requirements through deployment and support.",
      ],
    },
    {
      role: "Web Builder",
      org: "Yegor Agency",
      meta: "Remote · Contract",
      period: "10/2024 -- 02/2025",
      bullets: [
        "Designed and deployed high-end websites and visual identities for a diverse client base using Webflow and custom JavaScript.",
        "Advised clients on UI/UX best practices, improving conversion rates and brand consistency across projects.",
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

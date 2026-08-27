export type ProjectCategory = "ai" | "systems" | "fullstack" | "research";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  href: string;
  demoHref?: string;
  featured?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: "repo-agent",
    title: "Repo Agent",
    tagline: "An AI agent that reads GitHub repos and safely acts on them",
    description:
      "A real tool-calling agent loop (no framework abstraction hiding what's happening) with a live trace panel showing every tool call, and a safety gate that pauses for explicit human approval before writing anything to a repo. Read actions (list issues, check CI, summarize PRs) run immediately; write actions (comments, labels) always stop for an approve/reject step.",
    category: "ai",
    tech: ["Next.js", "TypeScript", "Gemini API", "Supabase/Postgres", "GitHub API"],
    href: "https://github.com/Adam-Shawky23/AI-agent-that-reads-and-safely-acts-on-GitHub-repos-real-tool-calling-human-approved-writes.",
    featured: true,
    status: "Active",
  },
  {
    slug: "d3-agentic-evasion-detection",
    title: "D3-Agentic Evasion Detection",
    tagline: "Fine-tuned transformers vs. a custom 4-agent LLM reasoning pipeline",
    description:
      "A 3-class NLP system detecting whether political answers evade the question. Benchmarks fine-tuned BERT/DistilBERT/DeBERTa-v3 against a small open-weight LLM used zero-shot and inside a from-scratch 4-agent reasoning pipeline (question intent -> answer content -> gap analysis -> decision), plus a DSPy-optimized variant and a full per-agent ablation study.",
    category: "research",
    tech: ["PyTorch", "Transformers", "DSPy", "Qwen3.5", "BERT/DeBERTa"],
    href: "https://github.com/Adam-Shawky23/d3-agentic-evasion-detection",
    featured: true,
  },
  {
    slug: "bert-clarity-classifier",
    title: "Fine-Tuning Transformers From Scratch",
    tagline: "A backbone-agnostic PyTorch training loop, no Trainer API",
    description:
      "A from-scratch PyTorch fine-tuning pipeline applied to two transformer architectures -- BERT and DeBERTa -- to classify political interview answers by clarity (Clear Reply / Ambivalent / Clear Non-Reply). Implements the full training loop manually: weighted cross-entropy for class imbalance, gradient accumulation, linear warmup scheduling, and early stopping with best-weight restoration.",
    category: "research",
    tech: ["PyTorch", "Transformers", "BERT", "DeBERTa"],
    href: "https://github.com/Adam-Shawky23/bert-clarity-classifier",
  },
  {
    slug: "prompt-engineering-llm-scaling",
    title: "Prompt Engineering at Scale",
    tagline: "12-experiment grid search across model size x prompting strategy",
    description:
      "A systematic study of zero-shot, few-shot, chain-of-thought, and few-shot+CoT prompting across three Qwen3.5 model sizes with zero fine-tuning -- isolating how much prompt design vs. model scale actually matters, with subgroup and error analysis on the best configuration.",
    category: "research",
    tech: ["PyTorch", "Transformers", "Qwen3.5", "Pandas", "Matplotlib"],
    href: "https://github.com/Adam-Shawky23/prompt-engineering-llm-scaling",
  },
  {
    slug: "eventflow",
    title: "EventFlow",
    tagline: "Full-stack event management and ticket booking platform",
    description:
      "A four-role (admin/organizer/participant/guest) event platform with real-time capacity-enforced bookings, an OpenStreetMap-integrated venue view, and a custom Biased Matrix Factorization recommendation engine written from scratch -- no ML libraries. Built end to end: auth, uploads, messaging, and CI/CD.",
    category: "fullstack",
    tech: ["NestJS", "Prisma", "PostgreSQL", "React", "Vite", "Leaflet.js"],
    href: "https://github.com/Adam-Shawky23/event-flow",
    demoHref: "https://eventflowfg.netlify.app",
    featured: true,
  },
  {
    slug: "threadflow-jms",
    title: "ThreadFlow-JMS",
    tagline: "A Unix job management system built from scratch in C",
    description:
      "Multi-process job scheduler with dynamically-scaling process pools, named-pipe IPC, and POSIX signal handling (SIGSTOP/SIGCONT/SIGTERM). Implements non-blocking pipe polling, signal-safe shutdown, and a reconnect-safe console protocol -- low-level systems programming with no shortcuts.",
    category: "systems",
    tech: ["C", "POSIX", "fork/exec", "Named Pipes", "Signals"],
    href: "https://github.com/Adam-Shawky23/ThreadFlow-JMS",
  },
  {
    slug: "voice-ai-meeting-scheduler",
    title: "Voice AI Meeting Scheduler",
    tagline: "The action layer behind a voice AI phone assistant",
    description:
      "A webhook-driven workflow that takes structured fields extracted mid-call by a voice AI platform and turns them into a real scheduled meeting: an LLM agent books the Google Calendar event with correct timezone handling, logs it to Sheets, and fires confirmation emails to both parties -- closing the loop from conversation to calendar.",
    category: "ai",
    tech: ["n8n", "GPT-3.5", "Google Calendar API", "Google Sheets API"],
    href: "https://github.com/Adam-Shawky23/Voice-AI-Meeting-Scheduler-Calendar-Sheets-Email-n8n-GPT-3.5-",
  },
  {
    slug: "automated-short-form-video-pipeline",
    title: "Automated Short-Form Video Pipeline",
    tagline: "A one-line idea in, a finished captioned video out",
    description:
      "An end-to-end n8n pipeline that turns a single spreadsheet row into a finished short-form video with zero manual editing: a GPT-4o agent writes per-scene prompts, FLUX.1 generates stills, Runway animates them into clips (with a deactivated Kling branch kept as a live A/B comparison), a Gemini Flash 2.0 agent directs ElevenLabs sound design, and Creatomate composites the final render before it's uploaded to YouTube unlisted for review.",
    category: "ai",
    tech: ["n8n", "GPT-4o", "Runway", "ElevenLabs", "Creatomate"],
    href: "https://github.com/Adam-Shawky23/Automated-Short-Form-Video-Pipeline",
  },
  {
    slug: "instagram-dm-customer-service-bot",
    title: "Instagram DM Customer Service Bot",
    tagline: "AI-handled Instagram DMs for a fashion brand, with human handoff",
    description:
      "An AI customer service agent that runs a fashion brand's Instagram DMs end to end -- product Q&A, order requests, sizing, and FAQs -- built on Gemini agent nodes in n8n, with a smart handoff to a human teammate via Telegram whenever the bot shouldn't resolve the conversation itself.",
    category: "ai",
    tech: ["n8n", "Gemini", "ManyChat API", "Telegram Bot API"],
    href: "https://github.com/Adam-Shawky23/Instagram-Brand-AI-Customer-Service-Chatbot-for-Instagram-DMs",
  },
  {
    slug: "voice-image-shopping-assistant",
    title: "Voice & Image Shopping Assistant",
    tagline: "Order by text, voice note, or photo -- all on WhatsApp",
    description:
      "An AI shopping assistant for a fashion brand's WhatsApp channel that takes orders through typed text, a voice note, or a photo of the item a customer wants -- Whisper transcribes voice, Gemini Vision recognizes products from photos, and the workflow checks live inventory before confirming an order.",
    category: "ai",
    tech: ["n8n", "Twilio WhatsApp API", "Whisper", "Gemini Vision"],
    href: "https://github.com/Adam-Shawky23/Voice-Image-Shopping-Assistant-for-WhatsApp",
  },
  {
    slug: "streamly",
    title: "Streamly",
    tagline: "A full-stack Netflix-style streaming app, built from scratch",
    description:
      "A personal full-stack project covering the whole stack end to end: JWT authentication, multiple profiles per account, a Node.js/Express API, and a React frontend with a live, browsable catalog UI modeled on Netflix's interface.",
    category: "fullstack",
    tech: ["React", "Node.js", "Express", "JWT"],
    href: "https://github.com/Adam-Shawky23/streamly-netflix-clone",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

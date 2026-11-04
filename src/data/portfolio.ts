export const profile = {
  name: "Mayank Sardana",
  role: "Software Engineer",
  tagline: "Software Engineer | Java | Spring Boot | AI",
  intro:
    "I build scalable backend systems, AI-powered applications, and solve real-world problems through clean and efficient code.",
  about:
    "I'm a Software Engineer with 2 years of experience building production systems with Java, Spring Boot and AI technologies. I've delivered Twilio integrations and LLM-powered features (Claude API) for banking clients, including a 57% faster data sync, backed by a strong foundation in RESTful APIs, microservices, data structures and algorithms, and system design.",
  resumeUrl: "/mayank_sardana_resume.pdf",
  photo: "/hp.png",
  email: "mayanksardana4848@gmail.com",
  phone: "+91-8725803839",
  location: "Chandigarh, India",
  links: {
    github: "https://github.com/MayankSardana",
    linkedin: "https://www.linkedin.com/in/mayanksardana7",
    x: "https://x.com/MayankSard35958",
    leetcode: "https://leetcode.com/u/MayankSardana/",
  },
};

export const highlights = [
  { icon: "server", title: "Backend Focused", text: "Robust and scalable systems" },
  { icon: "sparkles", title: "AI Enthusiast", text: "Building real-world AI applications" },
  { icon: "code", title: "Problem Solver", text: "485+ DSA problems on LeetCode" },
  { icon: "rocket", title: "Product Mindset", text: "Ship, iterate and create impact" },
] as const;

export const experience = [
  {
    company: "Adaptware Solutions",
    logo: "/adaptware-logo.png",
    logoFill: true,
    role: "Software Engineer",
    period: "Jul 2025 – Present",
    meta: "Full-time · Chandigarh, India",
    points: [
      "Reduced Snowflake-to-CRM data sync runtime from 14 hours to 6 hours (57% faster) by designing compound MongoDB indexes for the most frequent customer and account lookups.",
      "Owned the migration of 23,700+ records (5,668 stations, 18,131 recruiters) from CSV into MongoDB, building a Node.js script that preserved linked contact relationships.",
      "Normalized phone numbers to E.164 across CRM services, resolving failed Twilio calls and SMS to international numbers and enabling contact search in any format.",
      "Built bulk SMS and email in the CRM so staff can message all selected contacts in one action, cutting a client's daily email sends from 500+ to 200–300 (~50% fewer).",
      "Designed and shipped LLM-powered Next Best Action recommendations with the Claude API for 5,000+ customers across 2 bank clients, triggering real-time staff alerts and one-click follow-up emails.",
    ],
  },
  {
    company: "EPAM Systems",
    logo: "/epam.png",
    logoFill: true,
    role: "Junior Software Engineer",
    period: "Jan 2025 – Jun 2025",
    meta: "Full-time · Hyderabad, India",
    points: [
      "Developed a full-stack restaurant reservation platform with Java Spring Boot and Angular, designing RESTful APIs across 3 modules (reservations, booking management, reporting).",
      "Implemented role-based access control and independently deployable backend services in a microservices architecture.",
    ],
  },
  {
    company: "Electra Wheeler",
    logo: "/electra.png",
    role: "Software Engineer",
    period: "Nov 2024 – May 2025",
    meta: "Part-time · Remote",
    points: [
      "Orchestrated full-stack module development in ReactJS, Java, Spring Boot and MySQL, enhancing system scalability and cutting API latency by 30%.",
      "Elevated platform reliability to handle 10,000+ concurrent users, ensuring smooth onboarding and customer engagement.",
    ],
  },
  {
    company: "Supertext",
    logo: "/clay.png",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Jul 2024",
    meta: "Internship · Bengaluru, Karnataka · Remote",
    points: [
      "Managed chatbots via the Chatclay platform.",
      "Integrated chatbots with other emerging technologies.",
      "Assisted with the development of chatbots for multiple clients.",
    ],
  },
];

export const projects = [
  {
    icon: "cart",
    name: "BuyBest",
    description:
      "Location-based Android marketplace for buying, selling and renting, with 100+ listings across products, properties and services. Spring Boot backend with Google Maps nearby discovery, Redis caching, S3 image storage and OpenAI-powered category search.",
    tags: ["Android", "Spring Boot", "Redis", "AWS S3", "OpenAI"],
    url: "https://play.google.com/store/search?q=buybest&c=apps&hl=en_IN",
  },
  {
    icon: "bot",
    name: "Orrin",
    description:
      "Conversational AI finance agent on iMessage, WhatsApp and Telegram. It scans Gmail to auto-discover transactions and subscriptions, so users can query spending, split expenses and send UPI payment requests just by texting. Uses an adaptive binary-split pipeline that isolates emails breaking OpenAI context limits, and a crash-recovery poller so no message is dropped if a worker restarts mid-turn.",
    tags: ["AI Agent", "OpenAI", "Gmail", "iMessage", "WhatsApp", "Telegram"],
    url: "https://tryorrin.tech/",
  },
] as const;

export const skills = [
  { icon: "java", title: "Languages", items: ["Java", "JavaScript", "SQL", "Python"] },
  {
    icon: "graph",
    title: "Core Concepts",
    items: ["OOP", "Collections", "Operating Systems", "Computer Networks", "DSA", "LLD", "System Design"],
  },
  {
    icon: "spring",
    title: "Backend",
    items: ["Spring Boot", "Node.js", "RESTful APIs", "Microservices", "Apache Kafka"],
  },
  {
    icon: "database",
    title: "Databases",
    items: ["MongoDB", "MySQL", "Snowflake", "Redis", "Database Indexing", "Vector Database"],
  },
  { icon: "code", title: "Testing", items: ["JUnit", "Mockito"] },
  {
    icon: "aws",
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS CloudWatch", "AWS S3", "AWS Lambda", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  },
  {
    icon: "sparkles",
    title: "AI & GenAI",
    items: ["LLMs", "Claude API", "OpenAI API", "LangChain", "LangGraph", "RAG", "AI Agents", "Prompt Engineering"],
  },
  { icon: "layers", title: "Tools & APIs", items: ["Git", "GitHub", "Twilio", "Google Maps API"] },
] as const;

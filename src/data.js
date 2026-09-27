export const SECTIONS = [
  { id: "about", label: "about", ext: ".js" },
  { id: "skills", label: "package", ext: ".json" },
  { id: "projects", label: "projects", ext: ".dir" },
  { id: "education", label: "education", ext: ".md" },
  { id: "contact", label: "contact", ext: ".sh" },
];

export const DEP_GROUPS = [
  { name: "languages", items: [["javascript", "es2023"], ["java", "^17"], ["sql", "standard"], ["html5", "living"], ["css3", "living"]] },
  { name: "frontend", items: [["react", "^18"], ["tailwindcss", "^3"], ["vite", "^5"], ["responsive-design", "enabled"]] },
  { name: "backend", items: [["node", "^20"], ["express", "^4"], ["rest-apis", "designed"]] },
  { name: "databases", items: [["mongodb", "^7"], ["mysql", "^8"]] },
  { name: "tooling", items: [["git", "tracked"], ["github", "synced"], ["postman", "tested"], ["vscode", "default"], ["vercel", "deployed"]] },
  { name: "concepts", items: [["dsa", "practiced"], ["dbms", "studied"], ["os", "studied"], ["networks", "studied"], ["jwt-auth", "implemented"]] },
];

export const PROJECTS = [
  {
    name: "Stream-Lite",
    badge: "featured",
    tagline: "MERN media streaming platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vercel"],
    desc: "A full-stack media streaming platform built end to end — from database schema to deployed UI — as a hands-on way to practice production MERN patterns.",
    feats: [
      "Designed and implemented RESTful APIs for content management and data persistence",
      "Built responsive user interfaces and reusable React components",
      "Created database schemas and integrated backend services with MongoDB and Mongoose",
      "Managed source control and deployment workflows with Git, GitHub and Vercel",
    ],
    repoUrl: "https://github.com/Prem-Nishad/Stream-Lite",
  },
  {
    name: "Student-Record-API",
    badge: "backend",
    tagline: "REST API for student records",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "dotenv"],
    desc: "A REST API for managing student records, built with Express and MongoDB/Mongoose and organized around a clean controllers–models–routes structure.",
    feats: [
      "Built full CRUD endpoints for student records using Express and Mongoose",
      "Structured the codebase into controllers, models and routes for maintainability",
      "Used environment-based configuration with dotenv",
    ],
    repoUrl: "https://github.com/Prem-Nishad/Student-Record-API",
  },
  {
    name: "Portfolio",
    badge: "live",
    tagline: "This developer portfolio — React + Vite",
    stack: ["React", "Vite", "CSS"],
    desc: "A code-editor-inspired personal portfolio built with React and Vite — the site you're looking at right now, featuring a terminal-style hero, file-tree navigation and expandable project entries.",
    feats: [
      "Designed a code-editor / terminal aesthetic with custom CSS design tokens",
      "Built out section components (About, Skills, Projects, Education, Contact) in React",
      "Deployed as a static Vite build on Vercel",
    ],
    repoUrl: "https://github.com/Prem-Nishad/-portfolio",
    liveUrl: "https://portfolio-ashy-psi-14.vercel.app",
  },
];

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
  },
];

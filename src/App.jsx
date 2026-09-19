import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    if (theme === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="shell">
      <Sidebar theme={theme} setTheme={setTheme} />
      <main>
        <div className="editor-tab">
          <span className="dot"></span>prem-nishad — portfolio — connected
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <footer>Built by Prem Nishad · designed as a code‑editor‑inspired portfolio</footer>
      </main>
    </div>
  );
}

import { useState, useEffect } from "react";
import { SECTIONS } from "../data.js";

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

export default function Sidebar({ theme, setTheme }) {
  const active = useActiveSection();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-name">Prem Nishad</div>
        <div className="brand-tag">~/portfolio</div>
      </div>
      <div className="tree-label">src/</div>
      <nav>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={"nav-item" + (active === s.id ? " active" : "")}
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
            <span className="ext">{s.ext}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-foot">
        <div className="theme-row">
          <button className={"theme-btn" + (theme === "dark" ? " active" : "")} onClick={() => setTheme("dark")}>
            dark
          </button>
          <button className={"theme-btn" + (theme === "light" ? " active" : "")} onClick={() => setTheme("light")}>
            light
          </button>
          <button className={"theme-btn" + (theme === "system" ? " active" : "")} onClick={() => setTheme("system")}>
            auto
          </button>
        </div>
        <div className="social-links">
          <a href="tel:+919770422701">
            <span>tel</span>+91 97704 22701
          </a>
          <a href="mailto:premnishad0007@gmail.com">
            <span>mail</span>premnishad0007@gmail.com
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>gh</span>github.com/premnishad
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>in</span>linkedin.com/in/premnishad
          </a>
        </div>
      </div>
    </aside>
  );
}

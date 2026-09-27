import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import { PROJECTS } from "../data.js";

function Project({ p, open, onToggle }) {
  return (
    <div className="project">
      <button className="project-head" onClick={onToggle}>
        <div className="project-title-row">
          <span className="chevron mono">{open ? "▾" : "▸"}</span>
          <span className="project-title">{p.name}</span>
          {p.badge && <span className="project-badge">{p.badge}</span>}
        </div>
        <span className="mono" style={{ fontSize: "0.76rem", color: "var(--text-dim)" }}>
          {p.tagline}
        </span>
      </button>
      {open && (
        <div className="project-body">
          <div className="project-stack">
            {p.stack.map((s) => (
              <span className="stack-pill" key={s}>
                {s}
              </span>
            ))}
          </div>
          <p>{p.desc}</p>
          <ul className="project-feats">
            {p.feats.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          {(p.repoUrl || p.liveUrl) && (
            <div className="project-links">
              {p.repoUrl && (
                <a className="btn btn-ghost" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                  ↗ Source
                </a>
              )}
              {p.liveUrl && (
                <a className="btn btn-ghost" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  ↗ Live site
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="projects">
      <SectionHead num="03" title="Projects" path="src/projects/" />
      <div className="proj-cmd">
        <span className="prompt">$</span> ls -l projects/
      </div>
      {PROJECTS.map((p, i) => (
        <Project key={p.name} p={p} open={openId === i} onToggle={() => setOpenId(openId === i ? -1 : i)} />
      ))}
    </section>
  );
}

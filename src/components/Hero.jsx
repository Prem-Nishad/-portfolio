import { useState } from "react";
import TypedLine from "./TypedLine.jsx";

export default function Hero() {
  const [showOut, setShowOut] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="hero-comment">
        <span className="g">$</span> whoami{" "}
        <span className="mono" style={{ color: "var(--text-dim)" }}>
          // B.Tech CSE, Rungta College · 2023–2027
        </span>
      </div>
      <h1>
        Building full‑stack products with the <span className="accent">MERN</span> stack.
      </h1>
      <div className="hero-role">MERN Stack Developer · Full‑Stack Web Developer</div>
      <p className="lede">
        Computer Science undergraduate skilled in React.js, Node.js, Express.js and MongoDB —
        currently looking for a Software Development Internship where I can ship real features
        and learn from a strong engineering team.
      </p>
      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }}
        >
          View projects
        </a>
        <a className="btn btn-ghost" href="mailto:premnishad0007@gmail.com">
          Get in touch
        </a>
      </div>
      <div className="terminal">
        <div className="terminal-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="terminal-body">
          <div>
            <span className="prompt">prem@dev</span> <span className="cmd">~$ cat status.log</span>
          </div>
          <div className="out">
            <TypedLine
              text={
                "> Stack: React.js, Node.js, Express.js, MongoDB\n> Focus: RESTful APIs, JWT Auth, responsive UI\n> Status: open to internship opportunities"
              }
              speed={14}
              startDelay={400}
              onDone={() => setShowOut(true)}
            />
            {showOut && <span className="caret"></span>}
          </div>
        </div>
      </div>
    </section>
  );
}

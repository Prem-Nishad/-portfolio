import SectionHead from "./SectionHead.jsx";
import portrait from "../assets/prem.jpg";

export default function About() {
  return (
    <section id="about">
      <SectionHead num="01" title="About" path="src/about.js" />
      <div className="about-grid">
        <div className="about-photo">
          <div className="frame">
            <img src={portrait} alt="Portrait of Prem Nishad" />
          </div>
          <span className="cap">// prem.jpg</span>
        </div>
        <div className="about-text">
          <p>
            I'm a <strong>Computer Science undergraduate</strong> (B.Tech, 2023–2027) at Rungta
            College of Engineering &amp; Technology, focused on building full‑stack web
            applications with the MERN stack. I like working across the whole product — from
            React interfaces down to MongoDB schemas and REST API design.
          </p>
          <p>
            Alongside coursework in <strong>Data Structures &amp; Algorithms, DBMS, Operating
            Systems and OOP</strong>, I've built and shipped a full media‑streaming platform end
            to end, and I'm now looking for an internship where I can contribute to production
            software and keep growing as an engineer.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-block">
            <div className="k">2027</div>
            <div className="v">expected graduation</div>
          </div>
          <div className="stat-block">
            <div className="k">7.3</div>
            <div className="v">CGPA, CSVTU</div>
          </div>
          <div className="stat-block">
            <div className="k">MERN</div>
            <div className="v">certified · Coding Spoon</div>
          </div>
        </div>
      </div>
    </section>
  );
}

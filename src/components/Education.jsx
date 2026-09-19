import SectionHead from "./SectionHead.jsx";

export default function Education() {
  return (
    <section id="education">
      <SectionHead num="04" title="Education" path="src/education.md" />
      <div className="edu-row">
        <div className="edu-year mono">2023 — 2027</div>
        <div className="edu-what">
          <strong>B.Tech in Computer Science &amp; Engineering</strong>
          <span>Rungta College of Engineering &amp; Technology (CSVTU), Bhilai</span>
          <div className="edu-cgpa">CGPA 7.3</div>
        </div>
      </div>
      <div className="edu-row">
        <div className="edu-year mono">Certificate</div>
        <div className="edu-what">
          <strong>MERN Full-Stack Development</strong>
          <span>Coding Spoon</span>
        </div>
      </div>
      <div className="edu-row">
        <div className="edu-year mono">Languages</div>
        <div className="edu-what">
          <strong>Hindi &amp; English</strong>
          <span>Native Hindi · Professional working proficiency in English</span>
        </div>
      </div>
    </section>
  );
}

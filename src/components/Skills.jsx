import SectionHead from "./SectionHead.jsx";
import { DEP_GROUPS } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead num="02" title="Skills" path="src/package.json" />
      <div className="deps-file">
        <div className="deps-file-head">package.json — dependencies</div>
        <div className="deps-body">
          {DEP_GROUPS.map((g) => (
            <div className="dep-group" key={g.name}>
              <div className="dep-group-name">"{g.name}": {"{"}</div>
              <div className="dep-list">
                {g.items.map(([k, v]) => (
                  <span className="dep-item" key={k}>
                    <span className="key">"{k}"</span>: <span className="val">"{v}"</span>,
                  </span>
                ))}
              </div>
              <div className="dep-group-name" style={{ marginTop: 6 }}>
                {"}"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

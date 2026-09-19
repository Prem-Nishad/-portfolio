export default function SectionHead({ num, title, path }) {
  return (
    <>
      <div className="sec-head">
        <span className="sec-num mono">{num}</span>
        <h2>{title}</h2>
      </div>
      <div className="sec-path">{path}</div>
    </>
  );
}

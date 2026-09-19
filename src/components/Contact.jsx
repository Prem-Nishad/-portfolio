import { useState } from "react";
import SectionHead from "./SectionHead.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref =
    "mailto:premnishad0007@gmail.com?subject=" +
    encodeURIComponent("Portfolio contact from " + (form.name || "someone")) +
    "&body=" +
    encodeURIComponent((form.message || "") + (form.email ? "\n\nReply to: " + form.email : ""));

  return (
    <section id="contact">
      <SectionHead num="05" title="Contact" path="src/contact.sh" />
      <div className="contact-wrap">
        <div className="contact-file">
          <div className="line comment">## reach me directly</div>
          <div className="line">
            <span className="k">phone</span> = <span className="v">"+91 9770422701"</span>
          </div>
          <div className="line">
            <span className="k">email</span> = <span className="v">"premnishad0007@gmail.com"</span>
          </div>
          <div className="line">
            <span className="k">location</span> = <span className="v">"Raipur, Chhattisgarh, IN"</span>
          </div>
          <div className="line">
            <span className="k">status</span> = <span className="v">"open_to_internships"</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="c-name">name</label>
          <input
            id="c-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
          />
          <label htmlFor="c-email">email</label>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
          <label htmlFor="c-msg">message</label>
          <textarea
            id="c-msg"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Let's talk about..."
          />
          <a className="btn btn-primary" style={{ marginTop: 6, justifyContent: "center" }} href={mailtoHref}>
            Send message
          </a>
          <div className="send-note">// opens your email client — nothing is stored here</div>
        </form>
      </div>
    </section>
  );
}

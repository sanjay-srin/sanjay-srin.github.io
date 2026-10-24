import { AwardsRoll, MethodLadder } from "./Animated";
import CopyEmail from "./CopyEmail";
import Measure from "./Measure";
import Pipeline from "./Pipeline";
import { deepscope, education, experience, featured, hydrogels, lab, profile, skills, type Link } from "./content";

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M3 13 13 3M5.5 3H13v7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function OutLink({ link, tone = "ink" }: { link: Link; tone?: "ink" | "solid" }) {
  return (
    <a className={`out out--${tone}`} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
      <Arrow />
    </a>
  );
}

const mailto = `mailto:${profile.email}`;

export default function Home() {
  return (
    <>
      <a className="skip" href="#research">
        Skip to research
      </a>

      <header className="top">
        <a className="mark" href="#top" aria-label="Sanjay Srinivasan, back to top">
          {profile.firstName}
        </a>
        <nav aria-label="Sections">
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
          <a href="#recognition">Recognition</a>
          <a href="#lab">Lab</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>
        <a className="top-email" href={mailto}>
          Email
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>
              Sanjay
              <br />
              Srinivasan
            </h1>
            <p className="hero-where">Student at {profile.school}</p>
            <div className="hero-actions">
              <a className="btn" href={mailto}>
                Email Sanjay
              </a>
              <CopyEmail email={profile.email} className="btn-quiet" />
              <a className="btn-quiet" href={profile.scholar} target="_blank" rel="noopener noreferrer">
                Google Scholar
              </a>
              <a className="btn-quiet" href="#research">
                See the research
              </a>
            </div>
          </div>

          <aside className="proof" aria-label="Featured publication">
            <div className="proof-in">
              <p className="proof-title">{featured.title}</p>
              <dl className="proof-facts">
                <div>
                  <dt>Status</dt>
                  <dd>{featured.status}</dd>
                </div>
                <div>
                  <dt>Journal</dt>
                  <dd>{featured.venue}</dd>
                </div>
                <div>
                  <dt>Authorship</dt>
                  <dd>{featured.role}</dd>
                </div>
                <div>
                  <dt>Shipped</dt>
                  <dd>{featured.shipped}</dd>
                </div>
              </dl>
              <OutLink link={featured.link} tone="solid" />
            </div>
          </aside>
        </section>

        <section className="research" id="research" aria-labelledby="research-h">
          <h2 id="research-h" className="section-h">
            Research &amp; projects
          </h2>

          <article className="project project--lead" id={deepscope.id} aria-labelledby="ds-h">
            <div className="project-head">
              <h3 id="ds-h">{deepscope.title}</h3>
              <p className="project-sub">{deepscope.subtitle}</p>
              <p className="project-meta">
                {deepscope.year} · {deepscope.status}
              </p>
            </div>
            <p className="project-summary">
              <Measure text={deepscope.summary} />
            </p>
            <Pipeline />
            <div className="project-body">
              <div>
                <h4>What I built</h4>
                <ul className="built">
                  {deepscope.built.map((b) => (
                    <li key={b}>
                      <Measure text={b} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-side">
                <h4>Stack</h4>
                <p className="stack">{deepscope.stack.join(" · ")}</p>
                <h4>Links</h4>
                <div className="links">
                  {deepscope.links.map((l) => (
                    <OutLink key={l.href} link={l} />
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="project project--second" id={hydrogels.id} aria-labelledby="hg-h">
            <div className="project-head">
              <h3 id="hg-h">{hydrogels.title}</h3>
              <p className="project-sub">{hydrogels.subtitle}</p>
              <p className="project-meta">
                {hydrogels.year} · {hydrogels.status}
              </p>
              <p className="project-summary">
                <Measure text={hydrogels.summary} />
              </p>
              <div className="links">
                {hydrogels.links.map((l) => (
                  <OutLink key={l.href} link={l} />
                ))}
              </div>
              <h4>Stack</h4>
              <p className="stack">{hydrogels.stack.join(" · ")}</p>
            </div>
            <div className="method">
              <h4>Method</h4>
              <MethodLadder />
              <p className="method-outcome">
                <Measure text={hydrogels.outcome} />
              </p>
            </div>
          </article>
        </section>

        <section className="skills" id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h" className="section-h">
            Skills
          </h2>
          <dl className="skill-list">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="recognition" id="recognition" aria-labelledby="rec-h">
          <h2 id="rec-h" className="section-h">
            Recognition
          </h2>
          <AwardsRoll />
        </section>

        <section className="lab" id="lab" aria-labelledby="lab-h">
          <div className="lab-head">
            <h2 id="lab-h" className="section-h">
              Lab research
            </h2>
            <p className="lab-org">
              {lab.org}
              <br />
              {lab.group}
            </p>
            <p className="lab-meta">
              {lab.role} · {lab.advisor}
              <br />
              {lab.dates} · {lab.place}
            </p>
          </div>
          <ul className="lab-points">
            {lab.points.map((p) => (
              <li key={p}>
                <Measure text={p} />
              </li>
            ))}
          </ul>
        </section>

        <section className="experience" id="experience" aria-labelledby="exp-h">
          <h2 id="exp-h" className="section-h">
            Experience
          </h2>
          <ul className="exp">
            {experience.map((e) => (
              <li key={e.org}>
                <p className="exp-role">
                  {e.role}
                  {e.dates && <span className="exp-dates"> · {e.dates}</span>}
                </p>
                <p className="exp-org">{e.org}</p>
                <p className="exp-text">
                  <Measure text={e.text} />
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="education" id="education" aria-labelledby="edu-h">
          <div className="edu">
            <h2 id="edu-h">Education</h2>
            <div className="edu-grid">
              <div>
                <p className="edu-school">{education.school}</p>
                <p>
                  {education.place}
                </p>
                <p className="edu-gpa">
                  GPA <span className="data">{education.gpa}</span>
                </p>
              </div>
              <div>
                <h4>Relevant coursework</h4>
                <ul className="course">
                  {education.coursework.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-contact">
          <a className="foot-mail" href={mailto}>
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>
        <a href={profile.scholar} target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        <p>© 2026 {profile.name}</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

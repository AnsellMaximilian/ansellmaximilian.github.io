import MotionController from "./motion-controller";

type Project = {
  name: string;
  eyebrow: string;
  description: string;
  stack: string[];
  award: string;
  href: string;
  visual: "lunar" | "hashnomon" | "rsvquick" | "mading";
};

const projects: Project[] = [
  {
    name: "Lunar Editor",
    eyebrow: "Developer tooling · 2023",
    description:
      "A live plugin code editor built for Outerbase, designed to make writing, testing, and shipping database plugins feel immediate.",
    stack: ["React", "Tailwind CSS", "Outerbase"],
    award: "Grand prize winner",
    href: "https://lunareditor.netlify.app",
    visual: "lunar",
  },
  {
    name: "Hashnomon",
    eyebrow: "Game experience · 2023",
    description:
      "A developer collection and battler game powered by the Hashnode API and Grafbase—with an interface made for discovery and play.",
    stack: ["Next.js", "GraphQL", "Tailwind CSS"],
    award: "Runner-up winner",
    href: "https://hashnomon.vercel.app",
    visual: "hashnomon",
  },
  {
    name: "RSVQuick",
    eyebrow: "Event platform · 2023",
    description:
      "A fast invitation builder with shareable RSVP cards, guest responses, QR codes, and configurable surveys in one focused flow.",
    stack: ["React", "Refine", "Supabase"],
    award: "Grand prize winner",
    href: "https://rsvquick.netlify.app",
    visual: "rsvquick",
  },
  {
    name: "Mading Live",
    eyebrow: "Realtime community · 2023",
    description:
      "A digital community bulletin board that turns announcements, surveys, and conversations into a live shared space.",
    stack: ["Next.js", "Ably", "Supabase"],
    award: "Category winner",
    href: "https://mading-live.vercel.app",
    visual: "mading",
  },
];

const awards = [
  {
    year: "2023",
    place: "Grand Winner",
    event: "Outerbase × Hashnode",
    project: "Lunar Editor",
  },
  {
    year: "2023",
    place: "Grand Prize",
    event: "Refine × DEV",
    project: "RSVQuick",
  },
  {
    year: "2023",
    place: "Runner-up",
    event: "Grafbase × Hashnode",
    project: "Hashnomon",
  },
  {
    year: "2022",
    place: "Category Winner",
    event: "Ably Realtime Experiences",
    project: "Mading Live",
  },
  {
    year: "2022",
    place: "Honorable Mention",
    event: "Equitable Elevation III",
    project: "Boundary Buddy",
  },
];

const skills = [
  {
    number: "01",
    title: "Interface",
    items: "React · Next.js · TypeScript · Tailwind · CSS · Material UI",
  },
  {
    number: "02",
    title: "Systems",
    items: "Node.js · Express · Laravel · PostgreSQL · MySQL · Supabase",
  },
  {
    number: "03",
    title: "Practice",
    items: "Design systems · Rapid prototyping · Realtime UX · API integration",
  },
];

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 122.2 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="logo-path logo-path-right"
        d="m118.53 69.84-22.32-38.65-8.93 15.46-8.92-15.46L96.21.27l40.17 69.57z"
        transform="translate(-14.44)"
      />
      <path
        className="logo-path logo-path-left"
        d="M95.01 69.84 54.84.27 14.67 69.84H71.5l-8.93-15.46H41.45l13.39-23.19 22.32 38.65z"
        transform="translate(-14.44)"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

function Skyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <svg
        className="skyline-back"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path d="M0 240V137h55v-25h18V73h14v39h20v25h38v-58h41v-24h12v24h42v75h42v-35h36v-20h18v20h25v-56h65v91h42V94h22V51h13V29h9V12h7v17h9v22h13v43h29v60h39v-34h18V87h45v67h38V65h62v89h36v-31h46v31h47V93h18V76h11V58h8v18h12v17h19v61h48v-43h42v-18h12v18h28v43h41v-68h56v68h44v86Z" />
      </svg>
      <svg
        className="skyline-front"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path d="M0 180v-53h80V91h55v52h47V72h19V41h11v31h25v71h50V96h66v47h43V55h76v88h49V112h34V77h63v66h54V98h82V63h13V35h10V15h8v20h11v28h17v80h53V74h60v69h47V105h76v38h47V84h20V52h13v32h35v59h63V96h64v47h51V67h75v76h49v37Z" />
        <g className="windows">
          <path d="M193 88h7v12h-7zm20 17h7v12h-7zm204-29h9v13h-9zm22 0h9v13h-9zm0 28h9v13h-9zm257-16h8v13h-8zm21-18h8v13h-8zm0 38h8v13h-8zm358-7h8v12h-8zm22-25h8v12h-8zm198 23h8v12h-8zm22-18h8v12h-8z" />
        </g>
      </svg>
      <div className="city-fog" />
    </div>
  );
}

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "lunar") {
    return (
      <div className="project-visual lunar-visual" aria-hidden="true">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <b>plugin.tsx</b>
        </div>
        <div className="editor-shell">
          <div className="line-numbers">01<br />02<br />03<br />04<br />05<br />06</div>
          <div className="code-lines">
            <i className="short" />
            <i />
            <i className="medium" />
            <i className="indent" />
            <i className="short indent" />
            <i className="medium" />
          </div>
          <div className="editor-panel">
            <small>OUTPUT</small>
            <strong>Build successful</strong>
            <span>Ready in 248ms</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "hashnomon") {
    return (
      <div className="project-visual hash-visual" aria-hidden="true">
        <div className="monster-card monster-card-one">
          <span>LV. 08</span>
          <div className="monster monster-one">
            <i />
          </div>
          <b>Scriptor</b>
          <small>84 / 100</small>
        </div>
        <div className="versus">VS</div>
        <div className="monster-card monster-card-two">
          <span>LV. 12</span>
          <div className="monster monster-two">
            <i />
          </div>
          <b>Graphiq</b>
          <small>91 / 100</small>
        </div>
      </div>
    );
  }

  if (type === "rsvquick") {
    return (
      <div className="project-visual rsvp-visual" aria-hidden="true">
        <div className="invitation-card">
          <small>You&apos;re invited</small>
          <b>Design<br />After Dark</b>
          <span>JKT · 08 PM</span>
          <span className="fake-button">Confirm seat</span>
        </div>
        <div className="qr-card">
          <div className="qr-grid">
            {Array.from({ length: 25 }).map((_, index) => (
              <i key={index} className={index % 3 === 0 || index === 7 ? "on" : ""} />
            ))}
          </div>
          <small>SCAN TO RSVP</small>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual mading-visual" aria-hidden="true">
      <div className="bulletin-card bulletin-primary">
        <span>COMMUNITY / LIVE</span>
        <b>What are we<br />building next?</b>
        <div className="reaction-row"><i /><i /><i /><small>+28</small></div>
      </div>
      <div className="bulletin-card bulletin-note">
        <small>QUICK POLL</small>
        <b>Ship it?</b>
        <div><span>Yes</span><i /></div>
        <div><span>Also yes</span><i /></div>
      </div>
      <div className="live-pill"><i /> LIVE</div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-card-${index + 1} reveal`}>
      <div className="card-spotlight" aria-hidden="true" />
      <div className="project-meta">
        <span>0{index + 1}</span>
        <p>{project.eyebrow}</p>
        <strong>{project.award}</strong>
      </div>
      <ProjectVisual type={project.visual} />
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-footer">
          <ul aria-label={`${project.name} technologies`}>
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <a href={project.href} target="_blank" rel="noreferrer">
            View project <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <MotionController />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ansell Maximilian, home">
          <LogoMark />
          <span>AM / 26</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#recognition">Recognition</a>
        </nav>
        <a className="header-contact" href="mailto:ansellmaximilian@gmail.com">
          Start a project <span>↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-flare" aria-hidden="true" />

          <div className="signal" aria-hidden="true">
            <div className="signal-ring signal-ring-outer" />
            <div className="signal-ring signal-ring-inner" />
            <div className="signal-beam" />
            <LogoMark className="signal-mark" />
          </div>

          <div className="hero-topline">
            <span>Portfolio / 2026</span>
            <span>Tangerang, Indonesia</span>
          </div>

          <div className="hero-title-wrap">
            <p className="hero-kicker">Web &amp; systems developer</p>
            <h1>
              <span>Ansell</span>
              <span>Maximilian</span>
            </h1>
          </div>

          <div className="hero-bottom">
            <p className="hero-intro">
              I engineer <em>high-impact interfaces</em> where clarity, speed,
              and a little bit of theatre work together.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <span>↓</span>
              </a>
              <a
                className="button button-quiet"
                href="/Ansell_Maximilian_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Résumé <ArrowIcon />
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>05</dt>
                <dd>Hackathon<br />recognitions</dd>
              </div>
              <div>
                <dt>96</dt>
                <dd>Public GitHub<br />repositories</dd>
              </div>
            </dl>
          </div>

          <Skyline />
          <div className="scroll-cue" aria-hidden="true">
            <span>Scroll to enter</span>
            <i />
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            <span>Frontend engineering</span><i />
            <span>Systems thinking</span><i />
            <span>Creative development</span><i />
            <span>Realtime experiences</span><i />
            <span>Frontend engineering</span><i />
            <span>Systems thinking</span><i />
            <span>Creative development</span><i />
            <span>Realtime experiences</span><i />
          </div>
        </div>

        <section className="work section-shell" id="work">
          <div className="section-heading reveal">
            <div>
              <span className="section-index">01 / Selected work</span>
              <p>Proof over promises.</p>
            </div>
            <h2>Built to work.<br /><em>Designed to land.</em></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="about-signal reveal" aria-hidden="true">
            <div className="about-signal-glow" />
            <LogoMark />
            <span>AM</span>
          </div>
          <div className="about-copy reveal">
            <span className="section-index">02 / Field notes</span>
            <h2>
              A frontend specialist with a{" "}
              <em>systems developer&apos;s mindset.</em>
            </h2>
            <div className="about-columns">
              <p>
                I&apos;m a computer science graduate focused on information
                systems. My strength is crafting user-centered frontends that
                stay useful under real-world constraints.
              </p>
              <p>
                I enjoy turning new technologies into tangible products—often
                under hackathon pressure, always with a sharp eye for the
                person on the other side of the screen.
              </p>
            </div>
            <a
              className="text-link"
              href="https://github.com/AnsellMaximilian"
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="capabilities section-shell">
          <div className="section-heading compact reveal">
            <div>
              <span className="section-index">03 / Capabilities</span>
              <p>Tools change. Fundamentals travel.</p>
            </div>
            <h2>The utility belt.</h2>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <article className="skill-row reveal" key={skill.title}>
                <span>{skill.number}</span>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="recognition" id="recognition">
          <div className="recognition-inner section-shell">
            <div className="recognition-heading reveal">
              <span className="section-index">04 / Recognition</span>
              <h2>
                Pressure tested.<br />
                <em>Prize verified.</em>
              </h2>
              <p>
                Five competitive builds recognized for product thinking,
                execution, and technical craft.
              </p>
            </div>
            <div className="awards-list">
              {awards.map((award, index) => (
                <article className="award-row reveal" key={award.event}>
                  <span>0{index + 1}</span>
                  <time>{award.year}</time>
                  <div>
                    <h3>{award.place}</h3>
                    <p>{award.event}</p>
                  </div>
                  <strong>{award.project}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-orbit" aria-hidden="true">
            <LogoMark />
          </div>
          <div className="contact-copy reveal">
            <span className="section-index">05 / Open channel</span>
            <p>Have a difficult interface or an ambitious idea?</p>
            <h2>Let&apos;s build<br /><em>after dark.</em></h2>
            <a href="mailto:ansellmaximilian@gmail.com">
              ansellmaximilian@gmail.com <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <LogoMark />
          <span>Ansell Maximilian</span>
        </div>
        <p>Web &amp; systems developer · Indonesia</p>
        <div className="footer-links">
          <a href="https://github.com/AnsellMaximilian" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ansell-maximilian/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://ansellmax.hashnode.dev/" target="_blank" rel="noreferrer">Hashnode</a>
        </div>
        <a href="#top" className="back-to-top" aria-label="Back to top">↑</a>
      </footer>
    </>
  );
}

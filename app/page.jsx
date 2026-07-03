const metrics = [
  ['6+', 'Years across business operations, analytics and transformation'],
  ['8', 'APAC markets supported through regional operating rhythms'],
  ['10+', 'Senior stakeholders engaged across sales and planning'],
  ['100+', 'Hours saved through automation and AI-enabled workflows'],
];

const projects = [
  {
    title: 'Executive Intelligence Agent',
    label: 'AI Workflow Automation',
    text: 'Transforms weekly business signals into concise executive-ready insights, variance narratives and action prompts.',
    stack: ['Python', 'SQL', 'LLMs', 'Automation', 'Executive Reporting'],
  },
  {
    title: 'APAC Sales Operations Dashboard',
    label: 'Business Performance',
    text: 'Consolidates market performance, demand trends and operational indicators into leadership-ready decision dashboards.',
    stack: ['SQL', 'Tableau', 'Forecasting', 'Commercial Ops'],
  },
  {
    title: 'Workforce & Vendor Planning Engine',
    label: 'Operational Governance',
    text: 'Connects demand, utilisation and vendor performance to improve planning conversations and operating discipline.',
    stack: ['Analytics', 'Planning', 'Stakeholder Mgmt', 'Ops Strategy'],
  },
];

const journey = [
  ['2018', 'Software foundations', 'Built technical fluency across web, data and automation.'],
  ['2021', 'Data analytics', 'Moved from raw data to business interpretation and insight generation.'],
  ['2023', 'MBA + MSc Analytics', 'Combined business strategy with analytical execution.'],
  ['2026', 'Apple BizOps + AI', 'Operating across APAC markets with AI-enabled decision workflows.'],
];

const skills = [
  ['Business Layer', ['Strategy', 'Business Operations', 'Commercial Planning', 'Stakeholder Management']],
  ['Data Layer', ['SQL', 'Python', 'Forecasting', 'Dashboards', 'Performance Analytics']],
  ['AI Layer', ['LLM Workflows', 'AI Agents', 'Prompt Engineering', 'Automation Design']],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand">LI</a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="heroCopy">
          <div className="eyebrow">✦ Strategy × Operations × Data × AI</div>
          <h1>Building intelligent systems that turn business complexity into executive decisions.</h1>
          <p>
            I am Logeshwaran Inbaraj, a Strategy and Business Operations professional at Apple Singapore, combining MBA thinking, data analytics and AI automation to improve regional operating rhythms.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="#projects">Explore my work →</a>
            <a className="button secondary" href="./Logeshwaran-Inbaraj-CV.pdf">Download CV</a>
          </div>
        </div>
        <div className="commandCard">
          <div className="screenGlow" />
          <div className="avatarPlaceholder">
            <div className="botIcon">◉</div>
            <span>AI Avatar / Portfolio Video</span>
          </div>
          <div className="assistantCard">
            <p className="mono">Ask my AI twin</p>
            <h3>What experience does Logesh have with forecasting?</h3>
            <p>He connects demand trends, workforce utilisation and market performance into business review narratives for APAC leadership.</p>
          </div>
        </div>
      </section>

      <section className="metrics section">
        {metrics.map(([number, text]) => (
          <div className="metricCard" key={number}>
            <strong>{number}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section id="work" className="section split">
        <div>
          <div className="eyebrow">▣ Apple APAC operating dashboard</div>
          <h2>From dashboards to decisions.</h2>
          <p className="muted">I support regional leadership by translating operational signals across APAC markets into executive insights, governance rhythms and commercial recommendations.</p>
        </div>
        <div className="dashboard">
          {['Business Reviews', 'Market Performance', 'Demand Trends', 'Workforce Planning', 'Vendor Governance'].map((item, index) => (
            <div className="dashRow" key={item}>
              <span>{item}</span>
              <div className="bar"><i style={{ width: `${72 + index * 5}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <div className="eyebrow">◌ Career timeline</div>
          <h2>Software → Data → Business Operations → AI Transformation</h2>
        </div>
        <div className="timeline">
          {journey.map(([year, title, text]) => (
            <div className="timelineItem" key={year}>
              <span>{year}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHead">
          <div className="eyebrow">▣ Selected systems</div>
          <h2>Projects positioned for the AI era.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="chips">
                {project.stack.map((tech) => <i key={tech}>{tech}</i>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHead">
          <div className="eyebrow">✦ Capability architecture</div>
          <h2>Business context with technical execution.</h2>
        </div>
        <div className="skillsGrid">
          {skills.map(([group, items]) => (
            <div className="skillCard" key={group}>
              <h3>{group}</h3>
              {items.map((item) => <p key={item}>{item}</p>)}
            </div>
          ))}
        </div>
      </section>

      <section className="section mobility">
        <div>
          <div className="eyebrow">⌁ Global mobility</div>
          <h2>Singapore → Ireland → India → Europe</h2>
        </div>
        <p>Available for English-speaking Strategy Ops, Business Operations, Product/Data Analytics and AI Transformation roles across Ireland, Netherlands, Poland and wider Europe.</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Interested in building smarter operations?</h2>
        <p>Let’s connect for Strategy, Business Operations, Product Ops, Data Analytics or AI workflow automation opportunities.</p>
        <div className="ctaRow center">
          <a className="button primary" href="mailto:your.email@example.com">Email me</a>
          <a className="button secondary" href="https://www.linkedin.com/in/logeshwaran-inbaraj/">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

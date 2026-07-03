const metrics = [
  ['6+', 'Years across business operations, analytics and transformation'],
  ['8', 'APAC markets supported through regional operating rhythms'],
  ['10+', 'Regional stakeholders across sales, planning and governance'],
  ['100+', 'Hours saved through automation and AI-enabled workflows'],
];

const pillars = [
  ['Business Strategy', 'Sales operations, commercial planning, governance rhythms and executive decision support.'],
  ['Data Intelligence', 'SQL, Python, forecasting, performance dashboards and insight storytelling.'],
  ['AI Automation', 'LLM workflows, AI agents, automation design and decision intelligence systems.'],
];

const projects = [
  {
    number: '01',
    title: 'Executive Business Review Automation',
    challenge: 'Manual reporting cycles slowed insight generation for leadership reviews.',
    solution: 'Built AI-enabled workflows that turn business signals into concise narratives, variance explanations and next-action prompts.',
    stack: ['Python', 'SQL', 'LLMs', 'Automation', 'Executive Reporting'],
  },
  {
    number: '02',
    title: 'APAC Sales Operations Dashboard',
    challenge: 'Market signals, demand patterns and performance indicators were distributed across multiple sources.',
    solution: 'Created leadership-ready dashboards connecting regional performance with operating priorities.',
    stack: ['SQL', 'Tableau', 'Forecasting', 'Commercial Ops'],
  },
  {
    number: '03',
    title: 'Workforce & Vendor Planning Engine',
    challenge: 'Planning conversations needed better visibility into demand, utilisation and vendor performance.',
    solution: 'Connected operational metrics into a structured governance view for business planning discussions.',
    stack: ['Analytics', 'Planning', 'Stakeholder Mgmt', 'Ops Strategy'],
  },
];

const journey = [
  ['Software', 'Built technical foundations across web, data and automation.'],
  ['Data', 'Moved from raw information to business interpretation and decision support.'],
  ['MBA + MSc', 'Combined strategy, analytics and commercial problem-solving.'],
  ['Apple Ops', 'Supported APAC operating rhythms, business reviews and regional governance.'],
  ['AI Strategy', 'Building AI-powered workflows that reduce manual effort and improve decision velocity.'],
];

const skills = [
  ['Strategy & Operations', ['Business Operations', 'Commercial Planning', 'Stakeholder Governance', 'Executive Reviews']],
  ['Data & Analytics', ['SQL', 'Python', 'Forecasting', 'Dashboards', 'Performance Analytics']],
  ['AI & Automation', ['LLM Workflows', 'AI Agents', 'Prompt Engineering', 'Automation Design']],
  ['Platforms & Tools', ['Excel', 'Tableau', 'PowerPoint', 'GitHub', 'Workflow Automation']],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand">Logeshwaran I</a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroCopy">
          <h1>Strategy & Business Operations for the AI era.</h1>
          <p>
            I help leadership teams turn operational complexity into faster decisions using data, automation and AI-enabled workflows.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="#projects">View case studies</a>
            <a className="button secondary" href="./Logeshwaran-Inbaraj-CV.pdf">Download CV</a>
          </div>
        </div>

        <div className="videoWrap" aria-label="Hero portfolio video placeholder">
          <video className="heroVideo" autoPlay muted loop playsInline poster="./video-poster.png">
            <source src="./hero-video.mp4" type="video/mp4" />
          </video>
          <div className="videoFallback">
            <span>Add your hero video</span>
            <small>Upload as public/hero-video.mp4</small>
          </div>
        </div>
      </section>

      <section className="metrics section compact">
        {metrics.map(([number, text]) => (
          <div className="metricCard" key={number}>
            <strong>{number}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section id="about" className="section introBlock">
        <div className="sectionLabel">01 / About</div>
        <div className="sectionTitle">
          <h2>Business context with technical execution.</h2>
          <p>My work sits at the intersection of strategy, operating discipline, analytics and AI transformation.</p>
        </div>
        <div className="pillarGrid">
          {pillars.map(([title, text]) => (
            <article className="blackCard" key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience">
        <div className="sectionLabel">02 / Experience</div>
        <div className="experiencePanel">
          <div>
            <p className="kicker dark">Apple APAC operating dashboard</p>
            <h2>From dashboards to decisions.</h2>
            <p>
              I support regional leadership by translating operational signals across APAC markets into executive insights, governance rhythms and commercial recommendations.
            </p>
          </div>
          <div className="dashboard">
            {['Business Reviews', 'Market Performance', 'Demand Trends', 'Workforce Planning', 'Vendor Governance'].map((item, index) => (
              <div className="dashRow" key={item}>
                <span>{item}</span>
                <div className="bar"><i style={{ width: `${72 + index * 5}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timelineSection">
        <div className="sectionLabel">03 / Journey</div>
        <h2>Software → Data → Business Operations → AI Transformation</h2>
        <div className="timeline">
          {journey.map(([title, text]) => (
            <article className="timelineItem" key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionLabel">04 / Selected systems</div>
        <div className="sectionTitle">
          <h2>Projects as business case studies.</h2>
          <p>Less code showcase. More problems solved, workflows improved and decisions accelerated.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">{project.number}</div>
              <h3>{project.title}</h3>
              <p><b>Challenge:</b> {project.challenge}</p>
              <p><b>Solution:</b> {project.solution}</p>
              <div className="chips">
                {project.stack.map((tech) => <i key={tech}>{tech}</i>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionLabel">05 / Capability architecture</div>
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
          <div className="sectionLabel">06 / Global mobility</div>
          <h2>Singapore → Ireland → India → Europe</h2>
        </div>
        <p>Available for English-speaking Strategy Ops, Business Operations, Product/Data Analytics and AI Transformation roles across Ireland, Netherlands, Poland and wider Europe.</p>
      </section>

      <section id="contact" className="section contact">
        <p className="kicker">Next phase: analytics + AI chatbot</p>
        <h2>Let’s build smarter business operations.</h2>
        <p>Open to conversations with strategy, operations, product, data and AI transformation teams.</p>
        <div className="ctaRow center">
          <a className="button primary" href="mailto:your.email@example.com">Email me</a>
          <a className="button secondary" href="https://www.linkedin.com/in/logeshwaran-inbaraj/">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

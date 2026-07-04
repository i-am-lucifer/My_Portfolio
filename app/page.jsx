'use client';

import { useState } from 'react';
import AnalyticsTracker from './AnalyticsTracker';

const metrics = [
  ['6+', 'Years across Business Operations, Strategy, Analytics and Digital Transformation'],
  ['8', 'APAC markets supported through regional Operational Performance'],
  ['10+', 'Regional stakeholders across Sales, Planning, Training and Governance'],
  ['96%', 'Reduction in Executive Reporting time through AI and Workflow Automation'],
];

const pillars = [
  ['Business Operations', 'Business Reviews, Operating Rhythms, KPI Governance and cross-functional alignment.'],
  ['Decision Intelligence', 'Transforming Operational data into Insights, Recommendations and Leadership Narratives.'],
  ['AI Transformation', 'Designing AI-enabled workflows reducing Manual Effort and improve Decision Velocity.'],
];

const experiences = [
  {
    company: 'Apple',
    role: 'Business Operations Analyst – APAC Retail Customer Care',
    location: 'Singapore',
    period: 'Aug 2025 – Present',
    summary:
      'Strategic business partner to regional leadership, delivering operational intelligence, commercial insights and AI-enabled decision support across APAC Retail Customer Care.',
    metrics: ['8 APAC Markets', '10+ Stakeholders', '96% Reporting Time Reduction'],
    highlights: [
      'Own RPAC Sales Weekly and Quarterly Business Reviews across 8 APAC markets.',
      'Partner with Sales, Workforce Planning and Vendor Management to analyze demand trends, utilization and commercial performance.',
      'Built AI-enabled reporting automation using Python, Snowflake, Tableau and enterprise AI.',
      'Supported NPI, Apple Shopping Events and Back-to-School campaign readiness.',
    ],
  },
  {
    company: 'Tredence',
    role: 'Data Analytics Consultant – Walmart Marketing Analytics',
    location: 'Bengaluru, India',
    period: 'Jun 2021 – Aug 2023',
    summary:
      'Enabled Walmart marketing leadership with predictive analytics, customer intelligence and campaign performance insights to improve customer growth and investment decisions.',
    metrics: ['10M Customers', '1.3M Likely Buyers', '40–50% Spend Reduction'],
    highlights: [
      'Analyzed customer behavior across Walmart+ and non-member segments.',
      'Advised marketing leadership on campaign performance, retention, revenue and AOV.',
      'Developed predictive targeting model with 72% accuracy.',
      'Mentored two analysts across multiple business initiatives.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Application Development Associate – Telecommunications Client',
    location: 'Chennai, India',
    period: 'Oct 2015 – Feb 2018',
    summary:
      'Improved operational efficiency through automation, reporting accuracy and workflow optimization for a telecommunications client.',
    metrics: ['90% Reporting Accuracy', '4 Hours Saved', 'Python Automation'],
    highlights: [
      'Automated operational reporting using Python.',
      'Improved reporting accuracy to approximately 90%.',
      'Reduced operational turnaround time by approximately 4 hours.',
      'Built strong foundation in systems, process improvement and automation.',
    ],
  },
];

const projects = [
  {
    number: '01',
    title: 'Executive Business Review Automation',
    challenge: 'Leadership reporting required manual consolidation of performance data, market signals and business commentary.',
    solution: 'Built AI-enabled workflows that generate concise narratives, variance explanations and action prompts for recurring executive reviews.',
    stack: ['Python', 'SQL', 'LLMs', 'Automation', 'Executive Reporting'],
  },
  {
    number: '02',
    title: 'Sales Operations Dashboard',
    challenge: 'Sales performance, demand trends and operating indicators were spread across multiple regional data sources.',
    solution: 'Created leadership-ready intelligence dashboards linking market performance, operating priorities and planning conversations.',
    stack: ['SQL', 'Tableau', 'Cloud', 'KPI Governance', 'Commercial Ops'],
  },
  {
    number: '03',
    title: 'Predictive Customer Growth Intelligence',
    challenge: 'Marketing teams needed a scalable method to identify high-value customers and optimize campaign investment.',
    solution: 'Developed a predictive model identifying 1.3M likely buyers from 10M customers, reducing campaign spend by 40–50%.',
    stack: ['Predictive Analytics', 'Machine Learning', 'SQL', 'Hive', 'Hadoop'],
  },
];

const journey = [
  ['Software Engineering', 'Built foundations in technology, automation and scalable systems.'],
  ['MBA Operations & Analytics', 'Combined business acumen and translated data into executive recommendations.'],
  ['Masters in Data Science', 'Deepened expertise in machine learning, analytics systems and AI applications.'],
  ['Business Operations', 'Supporting operating rhythms, commercial governance and leadership decisions.'],
  ['AI Transformation & Strategy', 'Building AI-powered workflows that reduce manual effort and improve decision velocity.'],
];

const skills = [
  ['Strategy & Operations', ['Business Reviews', 'Executive Decision Support', 'Stakeholder Management', 'Performance Management', 'Commercial Strategy']],
  ['Data & Analytics', ['SQL', 'Python', 'Dashboards', 'Performance Analytics', 'Predictive Analytics']],
  ['AI & Automation', ['LLM Workflows', 'AI Agents', 'Prompt Engineering', 'Automation Design', 'AI Orchestration']],
  ['Platforms & Tools', ['Excel', 'Tableau', 'PowerPoint', 'GitHub', 'Claude Code']],
];

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const experience = experiences[activeExperience];

  const previousExperience = () => {
    setActiveExperience((current) => (current === 0 ? experiences.length - 1 : current - 1));
  };

  const nextExperience = () => {
    setActiveExperience((current) => (current === experiences.length - 1 ? 0 : current + 1));
  };

  return (
    <main>
      <AnalyticsTracker />

      <nav className="nav">
        <a href="#home" className="brand">Logeshwaran I</a>
        <div className="navLinks">
          <a href="#about" data-track="nav_about">About</a>
          <a href="#experience" data-track="nav_experience">Experience</a>
          <a href="#projects" data-track="nav_projects">Projects</a>
          <a href="#contact" data-track="nav_contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroCopy">
          <h1>Strategy & Business Operations for the AI era.</h1>
          <p>
            I help leadership teams improve decision speed, operational visibility and business performance by combining strategy, analytics and AI automation.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="#projects" data-track="click_view_case_studies">View business impacts</a>
            <a className="button secondary" href="./Logeshwaran-Inbaraj-CV.pdf" data-track="click_download_cv">Download CV</a>
          </div>
        </div>

        <div className="videoWrap" aria-label="Hero portfolio video">
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
        <div className="sectionLabel">About</div>
        <div className="sectionTitle">
          <h2>Business strategy powered by analytical depth and AI execution.</h2>
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
        <div className="sectionLabel">Experience</div>

        <div className="experienceCarousel">
          <button className="experienceArrow left" onClick={previousExperience} data-track="experience_previous" aria-label="Previous experience">
            ‹
          </button>

          <article className="experienceCard">
            <div className="experienceTop">
              <div>
                <p className="experienceCompany">{experience.company}</p>
                <h2>{experience.role}</h2>
                <p className="experienceMeta">{experience.location} | {experience.period}</p>
              </div>
              <div className="experienceCounter">
                {String(activeExperience + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
              </div>
            </div>

            <p className="experienceSummary">{experience.summary}</p>

            <div className="experienceMetrics">
              {experience.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>

            <div className="experienceHighlights">
              {experience.highlights.map((highlight) => (
                <p key={highlight}>{highlight}</p>
              ))}
            </div>
          </article>

          <button className="experienceArrow right" onClick={nextExperience} data-track="experience_next" aria-label="Next experience">
            ›
          </button>
        </div>

        <div className="companyTabs">
          {experiences.map((item, index) => (
            <button
              key={item.company}
              className={activeExperience === index ? 'active' : ''}
              onClick={() => setActiveExperience(index)}
              data-track={`experience_${item.company.toLowerCase()}`}
            >
              {item.company}
            </button>
          ))}
        </div>
      </section>

      <section className="section timelineSection">
        <div className="sectionLabel">Journey</div>
        <h2>Software → Analytics → Operations → AI Strategy</h2>
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
        <div className="sectionLabel">Business Impacts</div>
        <div className="sectionTitle">
          <h2>Business Impacts.</h2>
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
        <div className="sectionLabel">Competencies</div>
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
          <div className="sectionLabel">Global mobility</div>
          <h2>India → Ireland → Singapore</h2>
        </div>
        <p></p>
      </section>

      <section id="contact" className="section contact">
        <h2>Let’s build smarter businesses.</h2>
        <p>Open to conversations with Strategy, Operations, Product, Data and AI Transformation teams.</p>
        <div className="ctaRow center">
          <a className="button primary" href="mailto:messagelogesh@gmail.com" data-track="click_email">Email me</a>
          <a className="button secondary" href="https://www.linkedin.com/in/logeshwaran-inbaraj/" data-track="click_linkedin">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

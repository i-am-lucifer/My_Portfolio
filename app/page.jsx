'use client';

import { useState } from 'react';
import AnalyticsTracker from './AnalyticsTracker';
import AIChatbot from './AIChatbot';
import { experiences, journey, metrics, pillars, projects, skills } from './portfolio-data';

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
      <AIChatbot />

      <nav className="nav">
        <a href="#home" className="brand">Logeshwaran I</a>
        <div className="navLinks">
          <a href="#about" data-track="nav_about">About</a>
          <a href="#experience" data-track="nav_experience">Experience</a>
          <a href="#projects" data-track="nav_projects">Projects</a>
          <a href="#contact" data-track="nav_contact">Contact</a>
          <button className="navAiButton" type="button" onClick={() => window.dispatchEvent(new Event('open-ai-chat'))}>Ask Loki</button>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroCopy">
          <h1>Strategy & Business Operations for the AI era.</h1>
          <p>
            I bridge business strategy, data intelligence and AI automation to solve operational challenges, uncover insights and enable faster, more informed leadership decisions.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="#projects" data-track="click_view_case_studies">View business impacts</a>
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
          <h2>Business Strategy powered by Analytical depth and AI execution.</h2>
          <p>My work sits at the intersection of Strategy, Operating Discipline, Analytics and AI Transformation.</p>
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
        <h2>Software → Analytics → Operations → AI </h2>
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
        <p>Building a global perspective across technology, analytics and business operations — combining engineering foundations from India, advanced data science experience from Ireland and regional business execution across APAC markets from Singapore.</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Let’s build smarter business solutions.</h2>
        <p>Open to conversations with Strategy, Operations, Product, Data and AI Transformation teams.</p>
        <div className="ctaRow center">
          <a className="button primary" href="mailto:messagelogesh@gmail.com" data-track="click_email">Email me</a>
          <a className="button secondary" href="https://www.linkedin.com/in/logeshwaran-inbaraj/" data-track="click_linkedin">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

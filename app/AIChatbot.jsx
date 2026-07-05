'use client';

import { useEffect, useMemo, useState } from 'react';
import { experiences, journey, projects, skills, profileSummary } from './portfolio-data';

const starterQuestions = [
  'Tell me about Logeshwaran’s professional journey',
  'What kind of problems does he solve?',
  'Tell me about his global experience',
  'What is his education background?',
  'How does he combine business, data and AI?',
];

const initialMessages = [
  {
    role: 'assistant',
    text:
      "Hi, I'm the AI Portfolio Guide. I can help you explore Logeshwaran's professional journey, experience, education, global exposure, projects, skills and areas of work.",
  },
];

function trackChatEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') return;

  if (window.posthog && typeof window.posthog.capture === 'function') {
    window.posthog.capture(eventName, {
      portfolio_owner: 'Logeshwaran I',
      source: 'ai_portfolio_guide',
      ...properties,
    });
  }
}

function buildKnowledgeBase() {
  return [
    profileSummary.positioning,
    `Current location: ${profileSummary.location}.`,
    ...experiences.flatMap((experience) => [
      `${experience.company}: ${experience.role}, ${experience.location}, ${experience.period}. ${experience.summary}`,
      `Metrics: ${experience.metrics.join(', ')}.`,
      `Highlights: ${experience.highlights.join(' ')}`,
    ]),
    ...projects.map(
      (project) =>
        `${project.title}: Challenge - ${project.challenge} Solution - ${project.solution} Stack - ${project.stack.join(', ')}.`
    ),
    ...skills.map(([group, items]) => `${group}: ${items.join(', ')}.`),
    `Journey: ${journey.map(([title, text]) => `${title} - ${text}`).join(' ')}`,
  ].join('\n');
}

function getLocalAnswer(question, knowledgeBase) {
  const q = question.toLowerCase();

  if (
    q.includes('personal') ||
    q.includes('age') ||
    q.includes('salary') ||
    q.includes('family') ||
    q.includes('married') ||
    q.includes('relationship')
  ) {
    return (
      "This assistant focuses on Logeshwaran's professional journey, skills, projects, education and work experience. " +
      'For personal details, it is best to keep the conversation centered on publicly relevant professional information.'
    );
  }

  if (
    q.includes('about') ||
    q.includes('who') ||
    q.includes('journey') ||
    q.includes('background') ||
    q.includes('profile')
  ) {
    return (
      'Logeshwaran is a business operations and analytics professional with experience across technology, consulting and regional operations. ' +
      'His journey connects software engineering, data analytics, business strategy and AI-enabled transformation. ' +
      'He focuses on turning complex business problems into structured insights, operating rhythms and practical technology-enabled solutions.'
    );
  }

  if (
    q.includes('experience') ||
    q.includes('work') ||
    q.includes('career') ||
    q.includes('company') ||
    q.includes('companies')
  ) {
    return (
      'Logeshwaran’s professional experience spans technology, analytics consulting and regional business operations. ' +
      'Across his journey, he has worked on automation, analytics, operational improvements, stakeholder collaboration and decision-support workflows. ' +
      'His background includes experience across Apple, Tredence and Accenture.'
    );
  }

  if (q.includes('apple') || q.includes('current')) {
    return (
      'Logeshwaran’s current work focuses on business operations, analytics, collaboration and improving decision-making workflows. ' +
      'He works at the intersection of business priorities, operating discipline and data-driven insights. ' +
      'This portfolio intentionally keeps current-employer details at a professional and publicly appropriate level.'
    );
  }

  if (
    q.includes('education') ||
    q.includes('study') ||
    q.includes('college') ||
    q.includes('university') ||
    q.includes('degree') ||
    q.includes('mba') ||
    q.includes('master')
  ) {
    return (
      'Logeshwaran’s education combines business and technology. ' +
      'He completed an MBA focused on Operations and Analytics and a Master’s degree in Data Science. ' +
      'This combination shaped how he connects strategy, analytics and technical implementation.'
    );
  }

  if (
    q.includes('country') ||
    q.includes('countries') ||
    q.includes('relocation') ||
    q.includes('global') ||
    q.includes('international') ||
    q.includes('location') ||
    q.includes('lived')
  ) {
    return (
      'Logeshwaran’s journey includes exposure across different countries, cultures and business environments. ' +
      'He has lived, studied and worked across international contexts, including India and Singapore. ' +
      'This has helped him adapt to diverse teams, regional business needs and multicultural collaboration.'
    );
  }

  if (
    q.includes('role') ||
    q.includes('opportunity') ||
    q.includes('future') ||
    q.includes('career goal') ||
    q.includes('job') ||
    q.includes('hiring') ||
    q.includes('recruiter') ||
    q.includes('fit')
  ) {
    return (
      'Logeshwaran is strongest in work that combines business strategy, operations, analytics and AI transformation. ' +
      'He is well aligned with problems involving ambiguous business questions, stakeholder collaboration, process improvement, executive decision support and practical AI-enabled workflows. ' +
      'This portfolio presents his work in a professional way for anyone exploring his background.'
    );
  }

  if (
    q.includes('ai') ||
    q.includes('automation') ||
    q.includes('chatbot') ||
    q.includes('technology') ||
    q.includes('genai')
  ) {
    return (
      'Logeshwaran approaches AI as a practical business tool. ' +
      'His focus is on using AI to simplify workflows, reduce repetitive effort, improve insights and support better decisions. ' +
      'This AI Portfolio Guide is part of that story: it turns a traditional portfolio into an interactive way to explore his work.'
    );
  }

  if (
    q.includes('impact') ||
    q.includes('metric') ||
    q.includes('result') ||
    q.includes('achievement')
  ) {
    return (
      'Some of Logeshwaran’s measurable work includes executive reporting automation, regional business operations support, predictive customer intelligence, campaign optimization and workflow improvements. ' +
      'His portfolio highlights outcomes such as reporting time reduction, regional stakeholder support, predictive modeling and automation-led efficiency gains.'
    );
  }

  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('tools')
  ) {
    return skills.map(([group, items]) => `${group}: ${items.join(', ')}`).join('\n');
  }

  if (q.includes('project') || q.includes('portfolio')) {
    return projects.map((project) => `${project.number}. ${project.title}: ${project.solution}`).join('\n');
  }

  if (
    q.includes('strength') ||
    q.includes('leadership') ||
    q.includes('style') ||
    q.includes('working style')
  ) {
    return (
      'Logeshwaran’s working style combines structured problem solving, curiosity, collaboration and continuous improvement. ' +
      'He enjoys bridging technical possibilities with practical business needs and communicating insights clearly to different stakeholders.'
    );
  }

  if (q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
    return `You can contact Logeshwaran at ${profileSummary.contactEmail} or connect with him on LinkedIn: ${profileSummary.linkedin}`;
  }

  return (
    'This portfolio guide can help explain Logeshwaran’s professional journey, education, global exposure, work experience, projects, AI interests, skills and working style. ' +
    'Try asking about his background, the types of problems he solves, his education, international experience or how he combines business, data and AI.'
  );
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const knowledgeBase = useMemo(() => buildKnowledgeBase(), []);

  const openChat = () => {
    setIsOpen(true);
    trackChatEvent('ai_chat_opened');
  };

  useEffect(() => {
    const handleOpenChat = () => openChat();
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const closeChat = () => {
    setIsOpen(false);
    trackChatEvent('ai_chat_closed');
  };

  const askQuestion = async (question) => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isThinking) return;

    setInput('');
    setMessages((current) => [...current, { role: 'user', text: trimmedQuestion }]);
    setIsThinking(true);
    trackChatEvent('ai_question_asked', { question: trimmedQuestion });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmedQuestion, knowledgeBase }),
      });

      if (!response.ok) throw new Error('API unavailable');
      const data = await response.json();
      if (!data.answer) throw new Error('No answer returned');

      setMessages((current) => [...current, { role: 'assistant', text: data.answer }]);
      trackChatEvent('ai_response_generated', { mode: 'api' });
    } catch {
      const fallbackAnswer = getLocalAnswer(trimmedQuestion, knowledgeBase);
      setMessages((current) => [...current, { role: 'assistant', text: fallbackAnswer }]);
      trackChatEvent('ai_response_generated', { mode: 'local_fallback' });
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="aiCopilot" aria-live="polite">
      {isOpen && (
        <section className="aiPanel" aria-label="AI Portfolio Guide chatbot">
          <div className="aiHeader">
            <div>
              <span>Portfolio Guide</span>
              <h3>Explore Logeshwaran’s Journey</h3>
            </div>
            <button type="button" onClick={closeChat} aria-label="Close AI chat">
              ×
            </button>
          </div>

          <div className="aiMessages">
            {messages.map((message, index) => (
              <div className={`aiMessage ${message.role}`} key={`${message.role}-${index}`}>
                {message.text.split('\n').map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
            {isThinking && <div className="aiMessage assistant">Exploring the portfolio…</div>}
          </div>

          <div className="aiStarters" aria-label="Suggested questions">
            {starterQuestions.map((question) => (
              <button type="button" key={question} onClick={() => askQuestion(question)}>
                {question}
              </button>
            ))}
          </div>

          <form
            className="aiInputRow"
            onSubmit={(event) => {
              event.preventDefault();
              askQuestion(input);
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about his journey, work, education…"
              aria-label="Ask the AI Portfolio Guide a question"
            />
            <button type="submit" disabled={isThinking || !input.trim()}>
              Ask
            </button>
          </form>
        </section>
      )}

      {!isOpen && (
        <button type="button" className="aiLauncher" onClick={openChat} data-track="ai_chat_launcher">
          <span>✨</span>
          AI Portfolio Guide
        </button>
      )}
    </div>
  );
}

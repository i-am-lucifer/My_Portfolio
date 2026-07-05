'use client';

import { useEffect, useMemo, useState } from 'react';
import { experiences, journey, projects, skills, profileSummary } from './portfolio-data';

const starterQuestions = [
  'Summarize his AI experience.',
  'What business impact has he delivered?',
  'Which roles is he a strong fit for?',
];

const initialMessages = [
  {
    role: 'assistant',
    text:
      "Hi, I'm Loki's AI. Ask me about Logeshwaran's experience, projects, skills, business impact or fit for Strategy, Operations, Data and AI roles.",
  },
];

function trackChatEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') return;

  if (window.posthog && typeof window.posthog.capture === 'function') {
    window.posthog.capture(eventName, {
      portfolio_owner: 'Logeshwaran I',
      source: 'ai_portfolio_copilot',
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

  if (q.includes('hire') || q.includes('fit') || q.includes('role')) {
    return (
      'Logesh is a strong fit for Strategy & Operations, Business Operations, Data Analytics, AI Transformation and Decision Intelligence roles. ' +
      'His differentiator is the combination of APAC operating rhythm ownership, executive reporting, stakeholder management, predictive analytics and AI-enabled workflow automation. ' +
      'He can translate messy business problems into metrics, dashboards, narratives and automation that leadership can act on.'
    );
  }

  if (q.includes('apple') || q.includes('current')) {
    const apple = experiences.find((item) => item.company === 'Apple');
    return `${apple.role} at Apple, based in ${apple.location}. ${apple.summary} Key impact areas include ${apple.metrics.join(', ')}. ${apple.highlights.join(' ')}`;
  }

  if (q.includes('ai') || q.includes('automation') || q.includes('chatbot')) {
    const aiProject = projects.find((item) => item.title.includes('AI Portfolio'));
    return (
      'His AI story is practical and business-led: AI-enabled executive reporting, LLM workflows, prompt engineering, automation design and now this AI Portfolio Copilot. ' +
      `${aiProject.title} shows Phase 3 of the portfolio: ${aiProject.solution}`
    );
  }

  if (q.includes('impact') || q.includes('metric') || q.includes('result')) {
    return (
      'Key measurable impacts include 96% executive reporting time reduction, 8 APAC markets supported, 10+ regional stakeholders, predictive targeting across 10M customers, 1.3M likely buyers identified, 40–50% campaign spend reduction, 72% model accuracy and 4 hours saved through Python automation.'
    );
  }

  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    return skills.map(([group, items]) => `${group}: ${items.join(', ')}`).join('\n');
  }

  if (q.includes('project') || q.includes('portfolio')) {
    return projects.map((project) => `${project.number}. ${project.title}: ${project.solution}`).join('\n');
  }

  if (q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
    return `You can contact Logesh at ${profileSummary.contactEmail} or connect on LinkedIn: ${profileSummary.linkedin}`;
  }

  return (
    "Here's the short version: Logesh combines Strategy, Business Operations, Analytics and AI Automation. " +
    'He has worked across Apple, Tredence and Accenture, supporting APAC operations, marketing analytics, predictive intelligence and workflow automation. ' +
    'For more detail, ask about his AI work, Apple experience, business impact, projects or skills.\n\n' +
    `Knowledge snapshot: ${knowledgeBase.split('\n').slice(0, 3).join(' ')}`
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
        <section className="aiPanel" aria-label="Ask Logesh AI chatbot">
          <div className="aiHeader">
            <div>
              <span></span>
              <h3>Ask Loki's AI</h3>
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
            {isThinking && <div className="aiMessage assistant">Thinking through the portfolio…</div>}
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
              placeholder="Ask about experience, AI, impact…"
              aria-label="Ask Logesh AI a question"
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
          Ask Loki's AI
        </button>
      )}
    </div>
  );
}

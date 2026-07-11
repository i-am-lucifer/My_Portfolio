'use client';

import { useEffect, useState } from 'react';

const portfolioQuestions = [
  {
    id: 'professional_journey',
    question: 'What has shaped Logeshwaran’s professional journey?',
    answer:
      'Logeshwaran’s journey has progressed from software engineering and process automation to data analytics, consulting and regional business operations. Across Accenture, Tredence and Apple, he has developed a combination of technical understanding, analytical problem-solving, commercial awareness and cross-functional execution.',
  },
  {
    id: 'problems_solved',
    question: 'What kinds of problems does he solve?',
    answer:
      'He works best on complex business problems that sit between strategy, operations, data and technology. His experience includes improving reporting processes, translating fragmented data into executive insights, identifying customer opportunities, strengthening operating rhythms and designing automation that reduces repetitive effort.',
  },
  {
    id: 'current_focus',
    question: 'What is the focus of his current work?',
    answer:
      'His current work focuses on regional business operations, performance intelligence, leadership reporting and cross-functional collaboration across APAC. He helps connect operational information with business priorities so that stakeholders can make faster and more informed decisions.',
  },
  {
    id: 'business_impact',
    question: 'What measurable impact has he created?',
    answer:
      'His portfolio includes outcomes such as a 96% reduction in executive reporting time, business support across eight APAC markets, predictive analysis covering 10 million customers, identification of 1.3 million likely buyers, campaign spend reductions of 40–50% and operational time savings through Python automation.',
  },
  {
    id: 'working_style',
    question: 'How does he approach collaboration and leadership?',
    answer:
      'His working style is structured, collaborative and outcome-oriented. He is comfortable working across business and technical teams, simplifying ambiguous problems, communicating insights clearly and helping stakeholders move from analysis to practical action. He also has experience mentoring analysts and coordinating across regional functions.',
  },
  {
    id: 'education',
    question: 'What is his educational background?',
    answer:
      'His education combines engineering, business and data science. He completed an engineering degree, an MBA from the Indian Institute of Management with a focus on operations and analytics, and a Master of Science in Data Science from Dublin City University. This multidisciplinary foundation helps him connect strategy with technical execution.',
  },
  {
    id: 'global_experience',
    question: 'How has international experience shaped his perspective?',
    answer:
      'Logeshwaran has lived, studied and worked across India, Ireland and Singapore, while supporting stakeholders and markets across the wider APAC region. These experiences have strengthened his ability to adapt to different cultures, communicate across diverse teams and understand business challenges from both local and regional perspectives.',
  },
  {
    id: 'role_alignment',
    question: 'What kinds of roles align with his strengths?',
    answer:
      'His strengths align naturally with work involving business operations, strategy and planning, decision intelligence, analytics-led transformation and practical AI adoption. He is particularly effective in roles that require cross-functional coordination, executive communication, process improvement and converting complex information into actionable recommendations.',
  },
  {
    id: 'business_data_ai',
    question: 'How does he combine business, data and AI?',
    answer:
      'He begins with the business problem rather than the technology. He uses data to understand performance and identify opportunities, then applies automation or AI where it can improve speed, consistency and decision quality. His focus is on useful implementation rather than adopting AI for its own sake.',
  },
  {
    id: 'projects_skills',
    question: 'Which projects and capabilities best represent his work?',
    answer:
      'His portfolio highlights executive business review automation, sales operations dashboards, predictive customer intelligence and this interactive portfolio guide. His capabilities include business reviews, stakeholder management, SQL, Python, Tableau, predictive analytics, prompt engineering, LLM workflows and automation design.',
  },
  {
    id: 'chinnu',
    question: 'Who is the dog in the video?',
    answer:
      'The dog in the video is Chinnu, Logeshwaran’s pet and an important part of his life. As Logeshwaran is currently working abroad, he misses spending time with Chinnu and wanted to include him in the portfolio as a small personal connection to home.',
  },
];

const initialMessages = [
  {
    role: 'assistant',
    text:
      'Welcome to Logeshwaran’s AI Portfolio Guide. Select one of the questions below to explore his professional journey, experience, education, global perspective and work.',
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

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const openChat = () => {
    setIsOpen(true);
    trackChatEvent('ai_chat_opened');
  };

  const closeChat = () => {
    setIsOpen(false);
    trackChatEvent('ai_chat_closed');
  };

  const selectQuestion = (item) => {
    setMessages((current) => [
      ...current,
      {
        role: 'user',
        text: item.question,
      },
      {
        role: 'assistant',
        text: item.answer,
      },
    ]);

    trackChatEvent('ai_question_selected', {
      question_id: item.id,
      question: item.question,
    });
  };

  const resetChat = () => {
    setMessages(initialMessages);
    trackChatEvent('ai_chat_reset');
  };

  useEffect(() => {
    const handleOpenChat = () => openChat();

    window.addEventListener('open-ai-chat', handleOpenChat);

    return () => {
      window.removeEventListener('open-ai-chat', handleOpenChat);
    };
  }, []);

  return (
    <div className="aiCopilot" aria-live="polite">
      {isOpen && (
        <section
          className="aiPanel"
          aria-label="AI Portfolio Guide"
        >
          <div className="aiHeader">
            <div>
              <span>Portfolio Guide</span>
              <h3>Explore Logeshwaran’s Journey</h3>
            </div>

            <button
              type="button"
              onClick={closeChat}
              aria-label="Close portfolio guide"
            >
              ×
            </button>
          </div>

          <div className="aiMessages">
            {messages.map((message, index) => (
              <div
                className={`aiMessage ${message.role}`}
                key={`${message.role}-${index}`}
              >
                {message.text.split('\n').map((line, lineIndex) => (
                  <p key={`${index}-${lineIndex}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div
            className="aiStarters"
            aria-label="Portfolio questions"
          >
            {portfolioQuestions.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => selectQuestion(item)}
              >
                {item.question}
              </button>
            ))}
          </div>

          <div className="aiGuideFooter">
            <span>Select any question to learn more.</span>

            <button
              type="button"
              onClick={resetChat}
            >
              Start again
            </button>
          </div>
        </section>
      )}

      {!isOpen && (
        <button
          type="button"
          className="aiLauncher"
          onClick={openChat}
          data-track="ai_chat_launcher"
        >
          <span>✨</span>
          AI Portfolio Guide
        </button>
      )}
    </div>
  );
}

# Logeshwaran I Portfolio — Phase 3

White premium Next.js portfolio for GitHub Pages.

## Phase 3 added

- AI Portfolio Copilot: "Ask Logesh AI"
- Floating recruiter Q&A chatbot
- Local portfolio intelligence using structured experience, project, journey and skill data
- GenAI-ready `/api/chat` fallback architecture for future Vercel/OpenAI integration
- AI interaction analytics events through PostHog when available
- New AI Portfolio Copilot business impact card

## Phase 2 included

- Client-side analytics tracker
- PostHog-ready configuration
- Page view tracking
- Section view tracking
- CV download tracking
- LinkedIn/email/button click tracking
- Hero video play/completion tracking

## Setup analytics

1. Create a free PostHog project.
2. Copy the Project API Key.
3. Open `app/analytics-config.js`.
4. Paste the key here:

```js
posthogKey: 'phc_your_key_here'
```

PostHog project API keys are public browser keys, not private OpenAI-style secrets.

## Hero video

Upload your video as:

```text
public/hero-video.mp4
```

## Deploy

GitHub Pages source should be set to **GitHub Actions**.

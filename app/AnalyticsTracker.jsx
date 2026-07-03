'use client';

import { useEffect } from 'react';
import { analyticsConfig } from './analytics-config';

function debug(eventName, properties = {}) {
  if (analyticsConfig.enableConsoleDebug) {
    console.info('[portfolio analytics]', eventName, properties);
  }
}

function capture(eventName, properties = {}) {
  debug(eventName, properties);

  if (typeof window === 'undefined') return;
  if (!analyticsConfig.posthogKey) return;
  if (!window.posthog || typeof window.posthog.capture !== 'function') return;

  window.posthog.capture(eventName, {
    portfolio_owner: 'Logeshwaran I',
    ...properties,
  });
}

export default function AnalyticsTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadPostHog = () => {
      if (!analyticsConfig.posthogKey || window.posthog) return;

      const script = document.createElement('script');
      script.async = true;
      script.src = `${analyticsConfig.posthogHost}/static/array.js`;
      script.onload = () => {
        if (!window.posthog) return;
        window.posthog.init(analyticsConfig.posthogKey, {
          api_host: analyticsConfig.posthogHost,
          person_profiles: 'identified_only',
          capture_pageview: false,
          persistence: 'localStorage+cookie',
        });
        capture('portfolio_page_view', {
          path: window.location.pathname,
          title: document.title,
          referrer: document.referrer || 'direct',
        });
      };
      document.head.appendChild(script);
    };

    loadPostHog();

    if (!analyticsConfig.posthogKey) {
      debug('portfolio_page_view', {
        path: window.location.pathname,
        title: document.title,
        referrer: document.referrer || 'direct',
      });
    }

    const clickHandler = (event) => {
      const target = event.target.closest('[data-track]');
      if (!target) return;
      capture(target.getAttribute('data-track'), {
        label: target.textContent?.trim() || target.getAttribute('aria-label') || 'unlabelled',
        href: target.getAttribute('href') || null,
        section: target.closest('section')?.id || 'global',
      });
    };

    document.addEventListener('click', clickHandler);

    const sections = Array.from(document.querySelectorAll('section[id]'));
    const seenSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seenSections.has(entry.target.id)) {
            seenSections.add(entry.target.id);
            capture('portfolio_section_view', {
              section: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    const video = document.querySelector('.heroVideo');
    const onPlay = () => capture('hero_video_played');
    const onEnded = () => capture('hero_video_completed');
    if (video) {
      video.addEventListener('play', onPlay, { once: true });
      video.addEventListener('ended', onEnded);
    }

    return () => {
      document.removeEventListener('click', clickHandler);
      observer.disconnect();
      if (video) {
        video.removeEventListener('play', onPlay);
        video.removeEventListener('ended', onEnded);
      }
    };
  }, []);

  return null;
}

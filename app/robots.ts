import type { MetadataRoute } from 'next';

const PRIVATE = ['/api/', '/dashboard', '/sign-in', '/sign-up', '/onboarding'];

// Every named user-agent group must repeat the disallow list. A crawler obeys
// only the most specific group that matches it, and ignores the rest: giving
// GPTBot a bare `Allow: /` meant it was permitted /api/ and /dashboard, because
// the wildcard group no longer applied to it. Same for every other AI crawler.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Googlebot',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'cohere-ai',
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      ...AI_CRAWLERS.map(userAgent => ({ userAgent, allow: '/', disallow: PRIVATE })),
    ],
    sitemap: 'https://symponia.io/sitemap.xml',
    host: 'https://symponia.io',
  };
}

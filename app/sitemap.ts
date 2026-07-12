import type { MetadataRoute } from 'next';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { urlFor } from '@/lib/seo';
import { ARTICLES } from '@/lib/content';

// Every page now exists in every language, so the sitemap is the cross product
// of PAGES × LOCALES rather than a hand-written list. Each entry advertises all
// eight translations of itself via `alternates.languages`.

const PAGES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/credits', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/refunds', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/eula', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-12');

  // The content hub is English only, so these entries carry no hreflang
  // alternates. Advertising translations that do not exist is worse than
  // advertising none.
  const content: MetadataRoute.Sitemap = [
    {
      url: 'https://symponia.io/shadow-work',
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...ARTICLES.map(a => ({
      url: `https://symponia.io/shadow-work/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  const localised = PAGES.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      LOCALES.map(l => [l, urlFor(path, l)]),
    ) as Record<Locale, string>;

    return LOCALES.map(locale => ({
      url: urlFor(path, locale),
      lastModified,
      changeFrequency,
      // English sits a notch above its translations, so it wins as the canonical
      // entry point when a query matches several languages equally well.
      priority: locale === DEFAULT_LOCALE ? priority : Math.max(0.1, priority - 0.1),
      alternates: { languages },
    }));
  });

  return [...localised, ...content];
}

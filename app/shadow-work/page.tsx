import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { ARTICLES, PILLAR } from '@/lib/content';
import { ARTICLE_CSS } from '@/components/content/article.css';

const BASE = 'https://symponia.io';

export const metadata: Metadata = {
  title: 'Shadow work: a complete guide',
  description:
    'What the shadow is, how to find yours, the prompts and exercises that work, where the practice goes wrong, and how to choose an app. Written from Jung, not from TikTok.',
  alternates: { canonical: `${BASE}/shadow-work` },
  openGraph: {
    type: 'website',
    siteName: 'Symponia',
    title: 'Shadow work: a complete guide',
    description:
      'What the shadow is, how to find yours, the prompts and exercises that work, and where the practice goes wrong.',
    url: `${BASE}/shadow-work`,
    locale: 'en_GB',
    images: [{ url: `${BASE}/og.png`, width: 1200, height: 630, type: 'image/png', alt: 'Shadow work: a complete guide' }],
  },
  twitter: { card: 'summary_large_image', images: [`${BASE}/og.png`] },
};

export default function HubPage() {
  const rest = ARTICLES.filter(a => a.slug !== PILLAR.slug);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE}/shadow-work`,
    name: 'Shadow work: a complete guide',
    inLanguage: 'en',
    hasPart: ARTICLES.map(a => ({
      '@type': 'Article',
      headline: a.metaTitle,
      url: `${BASE}/shadow-work/${a.slug}`,
    })),
  };

  return (
    <PageShell locale="en">
      <article className="art">
        <style>{ARTICLE_CSS}</style>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Symponia</Link>
          <span aria-hidden="true">/</span>
          <span>Shadow work</span>
        </nav>

        <h1>Shadow work</h1>
        <p className="standfirst">
          The parts of yourself you buried did not disappear. They went underground, and they have
          been making your decisions ever since. This is the whole guide: what the shadow is, how to
          find yours, what actually helps, and where the practice goes wrong.
        </p>

        <nav className="hub-lead">
          <Link href={`/shadow-work/${PILLAR.slug}`}>
            <span className="tag">Start here</span>
            <strong>{PILLAR.title}</strong>
            <span>{PILLAR.standfirst}</span>
          </Link>
        </nav>

        <nav className="related" aria-label="All articles">
          <h2>The rest of the guide</h2>
          <ul>
            {rest.map(a => (
              <li key={a.slug}>
                <Link href={`/shadow-work/${a.slug}`}>
                  <strong>{a.title}</strong>
                  <span>{a.standfirst}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </PageShell>
  );
}

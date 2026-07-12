import { getDict, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

const BASE = 'https://symponia.io';

/**
 * Per-locale structured data.
 *
 * The FAQPage schema used to live once in the root layout, in English, and was
 * therefore served on all eight language pages: a Danish reader got Danish copy
 * while Google got English questions for /da. Rich results are matched against
 * the page's own language, so the Danish and German answer boxes were
 * unwinnable. This emits the FAQ in the language of the page it sits on, taken
 * straight from that locale's dict, so the schema and the visible copy can
 * never drift apart.
 */
export function LocaleSchema({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const url = locale === DEFAULT_LOCALE ? BASE : `${BASE}/${locale}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: locale,
      mainEntity: t.faq.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': url,
      url,
      inLanguage: locale,
      name: `Symponia: ${t.hero.l1} ${t.hero.l2}`,
      description: t.hero.lead,
      isPartOf: { '@type': 'WebSite', '@id': `${BASE}/#website`, name: 'Symponia', url: BASE },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE}/og.png` },
      about: {
        '@type': 'Thing',
        name: 'Shadow work',
        description:
          'A practice from Jungian depth psychology: bringing into view the parts of yourself you learned to hide.',
        sameAs: 'https://en.wikipedia.org/wiki/Shadow_(psychology)',
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

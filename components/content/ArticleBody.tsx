import Link from 'next/link';
import { getArticle, ARTICLES, type Article, type Block } from '@/lib/content';
import { ARTICLE_CSS } from './article.css';

const BASE = 'https://symponia.io';
const APP_STORE_URL = 'https://apps.apple.com/app/symponia/id6760951504';

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === 'p') return <p key={i}>{b.text}</p>;
        if (b.kind === 'h3') return <h3 key={i}>{b.text}</h3>;
        if (b.kind === 'list')
          return (
            <ul key={i}>
              {b.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        if (b.kind === 'quote')
          return (
            <blockquote key={i}>
              {b.text}
              {b.cite ? <cite>{b.cite}</cite> : null}
            </blockquote>
          );
        return (
          <aside key={i} className="callout">
            {b.text}
          </aside>
        );
      })}
    </>
  );
}

/**
 * Structured data per article: Article for the piece itself, BreadcrumbList so
 * the SERP shows the hierarchy rather than a bare URL, and FAQPage for the
 * questions, which is what wins the answer box.
 */
function ArticleSchema({ a }: { a: Article }) {
  const url = `${BASE}/shadow-work/${a.slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': url,
      headline: a.metaTitle,
      description: a.metaDescription,
      inLanguage: 'en',
      datePublished: a.published,
      dateModified: a.updated,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: 'Symponia', url: BASE },
      publisher: {
        '@type': 'Organization',
        name: 'Symponia',
        url: BASE,
        logo: { '@type': 'ImageObject', url: `${BASE}/logo.jpg` },
      },
      image: `${BASE}/og.png`,
      about: { '@type': 'Thing', name: 'Shadow work' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Symponia', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Shadow work', item: `${BASE}/shadow-work` },
        { '@type': 'ListItem', position: 3, name: a.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: a.faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function ArticleBody({ a }: { a: Article }) {
  const related = a.related.map(getArticle).filter(Boolean) as Article[];

  return (
    <article className="art">
      <style>{ARTICLE_CSS}</style>
      <ArticleSchema a={a} />

      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Symponia</Link>
        <span aria-hidden="true">/</span>
        <Link href="/shadow-work">Shadow work</Link>
      </nav>

      <h1>{a.title}</h1>
      <p className="standfirst">{a.standfirst}</p>
      <p className="meta">
        Updated{' '}
        {new Date(a.updated).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <nav className="toc" aria-label="On this page">
        <h2>On this page</h2>
        <ol>
          {a.sections.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.h2}</a>
            </li>
          ))}
        </ol>
      </nav>

      {a.sections.map(s => (
        <section key={s.id} id={s.id}>
          <h2>{s.h2}</h2>
          <Blocks blocks={s.blocks} />
        </section>
      ))}

      <section className="faq-block" id="faq">
        <h2>Questions</h2>
        {a.faq.map(f => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <aside className="cta-block">
        <h2>Meet your seventh animal</h2>
        <p>
          Symponia names your shadow through a projective method built on seven animals, then answers
          what you actually wrote. Depth psychology, not therapy. Free to start.
        </p>
        <a className="cta-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          Download on the App Store
        </a>
      </aside>

      {related.length > 0 && (
        <nav className="related" aria-label="Keep reading">
          <h2>Keep reading</h2>
          <ul>
            {related.map(r => (
              <li key={r.slug}>
                <Link href={`/shadow-work/${r.slug}`}>
                  <strong>{r.title}</strong>
                  <span>{r.standfirst}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  );
}

export { ARTICLES };

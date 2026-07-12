import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/PageShell';
import { ArticleBody } from '@/components/content/ArticleBody';
import { ARTICLES, getArticle } from '@/lib/content';

const BASE = 'https://symponia.io';

export function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${BASE}/shadow-work/${a.slug}`;

  return {
    title: a.metaTitle,
    description: a.metaDescription,
    // The content hub is English only, so it advertises no translations. Claiming
    // hreflang for languages that do not exist is worse than claiming none.
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'Symponia',
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      locale: 'en_GB',
      publishedTime: a.published,
      modifiedTime: a.updated,
      images: [{ url: `${BASE}/og.png`, width: 1200, height: 630, type: 'image/png', alt: a.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: a.metaTitle,
      description: a.metaDescription,
      images: [`${BASE}/og.png`],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  return (
    <PageShell locale="en">
      <ArticleBody a={a} />
    </PageShell>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Landing from '@/components/Landing';
import { LOCALES, DEFAULT_LOCALE, getDict, type Locale } from '@/lib/i18n';
import { OG_LOCALE } from '@/lib/seo';

const BASE = 'https://symponia.io';

// Only the non-default locales get a /[locale] route. English lives at /.
export function generateStaticParams() {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({ locale }));
}

function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v) && v !== DEFAULT_LOCALE;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);
  const title = `Symponia: ${t.hero.l1} ${t.hero.l2}`;
  const description = t.hero.lead.slice(0, 155).replace(/\s+\S*$/, '') + '.';
  const url = `${BASE}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          LOCALES.map(l => [l, l === DEFAULT_LOCALE ? BASE : `${BASE}/${l}`]),
        ),
        // Tells Google which page to serve when no translation matches the user.
        'x-default': BASE,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Symponia',
      title,
      description,
      url,
      locale: OG_LOCALE[locale] ?? locale,
      alternateLocale: LOCALES.filter(l => l !== locale).map(l => OG_LOCALE[l] ?? l),
      images: [
        {
          url: `${BASE}/og.png`,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE}/og.png`],
    },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Landing locale={locale} />;
}

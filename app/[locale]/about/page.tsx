import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import About from '@/components/About';
import { LOCALES, DEFAULT_LOCALE, getDict, type Locale } from '@/lib/i18n';

const BASE = 'https://symponia.io';

// English lives at /about, so only the non-default locales get a /[locale]/about.
export function generateStaticParams() {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({ locale }));
}

function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v) && v !== DEFAULT_LOCALE;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale).about;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `${BASE}/${locale}/about`,
      languages: Object.fromEntries(
        LOCALES.map(l => [l, l === DEFAULT_LOCALE ? `${BASE}/about` : `${BASE}/${l}/about`]),
      ),
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      url: `${BASE}/${locale}/about`,
      locale,
    },
  };
}

export default async function LocaleAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <About locale={locale} />;
}

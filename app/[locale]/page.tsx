import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Landing from '@/components/Landing';
import { LOCALES, DEFAULT_LOCALE, getDict, type Locale } from '@/lib/i18n';

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
  return {
    title: `Symponia: ${t.hero.l1} ${t.hero.l2}`,
    description: t.hero.lead.slice(0, 155),
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: Object.fromEntries(
        LOCALES.map(l => [l, l === DEFAULT_LOCALE ? BASE : `${BASE}/${l}`]),
      ),
    },
    openGraph: {
      title: `Symponia: ${t.hero.l1} ${t.hero.l2}`,
      description: t.hero.lead.slice(0, 200),
      url: `${BASE}/${locale}`,
      locale,
    },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Landing locale={locale} />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLegal } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

// English lives at /refunds; only the other seven get a prefixed route.
export function generateStaticParams() {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({ locale }));
}

function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v) && v !== DEFAULT_LOCALE;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = getLegal(locale).refunds;
  return pageMetadata({ locale, path: '/refunds', title: doc.metaTitle, description: doc.metaDesc });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage doc={getLegal(locale).refunds} locale={locale} />;
}

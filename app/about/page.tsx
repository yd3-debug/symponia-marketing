import type { Metadata } from 'next';
import About from '@/components/About';
import { LOCALES, DEFAULT_LOCALE, getDict } from '@/lib/i18n';

const BASE = 'https://symponia.io';

const t = getDict(DEFAULT_LOCALE).about;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDesc,
  alternates: {
    canonical: `${BASE}/about`,
    languages: Object.fromEntries(
      LOCALES.map(l => [l, l === DEFAULT_LOCALE ? `${BASE}/about` : `${BASE}/${l}/about`]),
    ),
  },
};

export default function AboutPage() {
  return <About locale={DEFAULT_LOCALE} />;
}

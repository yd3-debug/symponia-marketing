import type { Metadata } from 'next';
import Landing from '@/components/Landing';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';

const BASE = 'https://symponia.io';

export const metadata: Metadata = {
  title: 'Symponia: you have had this fight before, with someone else',
  description:
    'An AI companion for inner work. Name six animals that feel like you, and a seventh that makes your skin crawl. The seventh is usually the one running your relationships.',
  alternates: {
    canonical: BASE,
    languages: Object.fromEntries(
      LOCALES.map(l => [l, l === DEFAULT_LOCALE ? BASE : `${BASE}/${l}`]),
    ),
  },
};

export default function Page() {
  return <Landing locale="en" />;
}

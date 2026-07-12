import type { Metadata } from 'next';
import Landing from '@/components/Landing';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';

const BASE = 'https://symponia.io';

export const metadata: Metadata = {
  title: 'Symponia — a shadow work app that names your shadow',
  description:
    'Most shadow work apps hand you a prompt. Symponia names your shadow: pick six animals that feel like you and one that makes your skin crawl. The seventh is the part of yourself you exiled. Depth psychology, not therapy.',
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

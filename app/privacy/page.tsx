import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { getLegal } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';
import { DEFAULT_LOCALE } from '@/lib/i18n';

const doc = getLegal(DEFAULT_LOCALE).privacy;

export const metadata: Metadata = pageMetadata({
  locale: DEFAULT_LOCALE,
  path: '/privacy',
  title: doc.metaTitle,
  description: doc.metaDesc,
});

export default function Page() {
  return <LegalPage doc={doc} locale={DEFAULT_LOCALE} />;
}

import type { Metadata } from 'next';
import { CreditsPage } from '@/components/legal/CreditsPage';
import { getLegal } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';
import { DEFAULT_LOCALE } from '@/lib/i18n';

const doc = getLegal(DEFAULT_LOCALE).credits;

export const metadata: Metadata = pageMetadata({
  locale: DEFAULT_LOCALE,
  path: '/credits',
  title: doc.metaTitle,
  description: doc.metaDesc,
});

export default function Page() {
  return <CreditsPage locale={DEFAULT_LOCALE} />;
}

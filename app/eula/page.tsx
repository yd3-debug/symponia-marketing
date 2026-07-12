import type { Metadata } from 'next';
import { EulaPage } from '@/components/legal/EulaPage';
import { getLegal } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';
import { DEFAULT_LOCALE } from '@/lib/i18n';

const doc = getLegal(DEFAULT_LOCALE).eula;

export const metadata: Metadata = pageMetadata({
  locale: DEFAULT_LOCALE,
  path: '/eula',
  title: doc.metaTitle,
  description: doc.metaDesc,
});

export default function Page() {
  return <EulaPage locale={DEFAULT_LOCALE} />;
}

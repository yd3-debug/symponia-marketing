import type { Metadata } from 'next';
import { LOCALES, DEFAULT_LOCALE, type Locale } from './i18n';

export const BASE = 'https://symponia.io';

/** "/terms" in `da` -> "https://symponia.io/da/terms". English stays unprefixed. */
export function urlFor(path: string, locale: Locale): string {
  const p = path === '/' ? '' : path;
  return locale === DEFAULT_LOCALE ? `${BASE}${p || '/'}` : `${BASE}/${locale}${p}`;
}

/**
 * Canonical + hreflang for one page in one language. Every locale advertises
 * every other translation of the *same* page, which is what stops Google from
 * treating /da/terms and /terms as duplicates competing with each other.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: urlFor(path, locale),
      languages: {
        ...Object.fromEntries(LOCALES.map(l => [l, urlFor(path, l)])),
        'x-default': urlFor(path, DEFAULT_LOCALE),
      },
    },
    openGraph: {
      title,
      description,
      url: urlFor(path, locale),
      locale,
    },
    robots: { index: true, follow: true },
  };
}

/** Open Graph wants a full locale code (da_DK), not a bare language tag (da). */
export const OG_LOCALE: Record<string, string> = {'en': 'en_GB', 'it': 'it_IT', 'ru': 'ru_RU', 'pt': 'pt_PT', 'fr': 'fr_FR', 'de': 'de_DE', 'es': 'es_ES', 'da': 'da_DK', 'sv': 'sv_SE'};

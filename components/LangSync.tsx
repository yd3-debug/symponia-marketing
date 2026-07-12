'use client';

import { useEffect } from 'react';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

// Keeps <html lang> in step with the page's locale.
//
// Why this is a client effect and not just `<html lang={locale}>`: there is only
// one <html>, and it lives in the root layout, which sits *above* the [locale]
// segment and therefore cannot read it. English is served unprefixed (/terms,
// not /en/terms), so we can't push every page under a [locale] root either
// without adding a redirect layer for English.
//
// The trade-off: the server-rendered HTML says lang="en" until hydration. That
// is fine for search — hreflang and the canonical tags (lib/seo.ts) are what
// Google actually reads for language targeting, and those are correct in the
// static HTML. It matters for screen readers, which is why we fix it here: by
// the time a user is reading the page, the attribute is right.

export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    return () => {
      document.documentElement.lang = DEFAULT_LOCALE;
    };
  }, [locale]);

  return null;
}

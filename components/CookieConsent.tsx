'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { CONSENT_COPY } from '@/lib/consent';

// The analytics consent banner.
//
// The decision about WHETHER to ask is made before React loads, by the inline
// script in app/layout.tsx, and left on window.__syConsent: visitors in Europe
// (EEA, UK, Switzerland) are asked and nothing is loaded until they answer;
// everyone else is measured without a prompt. This component only draws the
// banner and reports the answer back through window.__syConsent.set().
//
// Accept and Decline are the same size and weight on purpose. Declining must be
// exactly as easy as accepting, or the consent is not freely given.

type ConsentState = {
  needed: boolean;
  choice: 'granted' | 'denied' | null;
  set: (choice: 'granted' | 'denied') => void;
};

declare global {
  interface Window {
    __syConsent?: ConsentState;
  }
}

function localeFromPath(pathname: string | null): Locale {
  const first = (pathname ?? '/').split('/')[1];
  return (LOCALES as readonly string[]).includes(first) ? (first as Locale) : DEFAULT_LOCALE;
}

export function CookieConsent() {
  const locale = localeFromPath(usePathname());
  const t = CONSENT_COPY[locale];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const state = window.__syConsent;
    if (state?.needed && !state.choice) setOpen(true);

    // Any element marked data-cookie-settings (the footer link) reopens the
    // banner, so a choice can always be changed.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.('[data-cookie-settings]');
      if (!el) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!open) return null;

  const choose = (choice: 'granted' | 'denied') => {
    window.__syConsent?.set(choice);
    setOpen(false);
  };

  const privacyHref = locale === DEFAULT_LOCALE ? '/privacy' : `/${locale}/privacy`;

  return (
    <div className="sy-consent" role="dialog" aria-live="polite" aria-label={t.settings}>
      <style>{CSS}</style>
      <p>
        {t.body} <a href={privacyHref}>{t.privacy}</a>
      </p>
      <div className="sy-consent-actions">
        <button type="button" onClick={() => choose('denied')}>{t.decline}</button>
        <button type="button" onClick={() => choose('granted')}>{t.accept}</button>
      </div>
    </div>
  );
}

const CSS = `
.sy-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:90;margin:0 auto;max-width:720px;
  display:flex;align-items:center;gap:18px;padding:16px 18px;border-radius:16px;
  background:#0D0B14;color:#E8E4F2;border:1px solid rgba(255,255,255,.14);
  box-shadow:0 18px 50px rgba(10,6,30,.45);
  font:400 14px/1.55 var(--font-inter),'Helvetica Neue',Arial,sans-serif}
.sy-consent p{margin:0;flex:1}
.sy-consent a{color:#5CE8D0;text-underline-offset:3px}
.sy-consent-actions{display:flex;gap:8px;flex-shrink:0}
.sy-consent button{font:600 14px/1 var(--font-inter),'Helvetica Neue',Arial,sans-serif;cursor:pointer;
  min-width:96px;padding:12px 16px;border-radius:10px;
  background:transparent;color:#fff;border:1px solid rgba(255,255,255,.45)}
.sy-consent button:hover{background:rgba(255,255,255,.1)}
.sy-consent button:focus-visible{outline:2px solid #5CE8D0;outline-offset:2px}
@media(max-width:760px){
  /* Sits above the landing page's sticky App Store bar rather than covering it. */
  .sy-consent{flex-direction:column;align-items:stretch;gap:12px;bottom:86px;left:12px;right:12px}
  .sy-consent-actions button{flex:1}
}
`;

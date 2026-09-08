'use client';

import { useEffect, useState } from 'react';
import { LOCALES, LOCALE_NAMES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { Flag } from '@/components/Flag';

function hrefFor(locale: Locale) {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
}

/**
 * Phone navigation for the landing page.
 *
 * Until now the landing nav simply hid `.nav-links` and the App Store badge
 * under 760px and offered nothing in their place, so on a phone the header was
 * a logo and a language button: no way to reach the method, the FAQ, the guide
 * or About without scrolling the whole page. This is the missing menu.
 *
 * It is a plain fixed panel under the 66px bar (no framer-motion: this page
 * deliberately ships without it). It closes on link tap, Escape, or the
 * backdrop, locks page scroll while open, and is `display:none` on desktop via
 * the landing CSS so it never competes with the inline links. The App Store
 * badge is deliberately not repeated here: the sticky bar at the bottom of the
 * phone viewport already carries it.
 */
export function MobileMenu({
  locale,
  links,
  languagesLabel,
}: {
  locale: Locale;
  links: { label: string; href: string }[];
  languagesLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="mm">
      <button
        type="button"
        className={`mm-btn${open ? ' is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mm-panel"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <>
          <div className="mm-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="mm-panel" id="mm-panel" role="dialog" aria-modal="true" aria-label="Menu">
            <nav className="mm-links">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </nav>

            <p className="mm-k">{languagesLabel}</p>
            <ul className="mm-langs">
              {LOCALES.map(l => (
                <li key={l}>
                  <a href={hrefFor(l)} hrefLang={l} aria-current={l === locale ? 'true' : undefined}>
                    <Flag locale={l} size={16} />
                    <span>{LOCALE_NAMES[l]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

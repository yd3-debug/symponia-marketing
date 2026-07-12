'use client';

import { useEffect, useRef, useState } from 'react';
import { LOCALES, LOCALE_NAMES, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { Flag } from '@/components/Flag';

function hrefFor(locale: Locale) {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
}

/**
 * The old switcher was pure CSS: `.lang:hover .lang-menu { display: block }`,
 * with the menu offset `top: calc(100% + 8px)`. That 8px gap is dead space —
 * it belongs to neither the button nor the menu — so moving the cursor down to
 * make a selection dropped :hover and closed the menu before it could be
 * clicked. It also meant the switcher did not work at all on touch, where
 * there is no hover.
 *
 * This version is click-driven (so it works on a phone), with hover as a
 * desktop convenience, and closes on Escape or an outside click.
 */
export function LangMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      className="lang"
      ref={root}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="lang-btn"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <Flag locale={locale} size={16} />
        <span>{LOCALE_NAMES[locale]}</span>
        <span aria-hidden="true" className="caret">▾</span>
      </button>

      {open && (
        <ul className="lang-menu" role="menu">
          {LOCALES.map(l => (
            <li key={l} role="none">
              <a
                role="menuitem"
                href={hrefFor(l)}
                hrefLang={l}
                aria-current={l === locale ? 'true' : undefined}
              >
                <Flag locale={l} size={18} />
                <span>{LOCALE_NAMES[l]}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

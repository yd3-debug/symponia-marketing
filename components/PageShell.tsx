'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  getDict,
  LOCALES,
  LOCALE_NAMES,
  DEFAULT_LOCALE,
  type Locale,
} from '@/lib/i18n';
import { LangSync } from '@/components/LangSync';

// Chrome for every routed page (about, legal, pricing). The landing page has its
// own nav because it is a one-pager of anchors; this one links across routes.
//
// Everything here is locale-driven: labels come from dict.shell, and every
// internal href is prefixed with the active locale, so a Danish reader inside
// /da/terms stays inside Danish when they click through the footer.

const APP_STORE_URL = 'https://apps.apple.com/us/app/symponia/id6760951504';

const C = {
  bg: '#F5F2E8', fg: '#0F0C0A', sub: '#2E2840', dim: '#6A6078',
  cyan: '#0891B2', border: 'rgba(0,0,0,0.08)',
  heading: "var(--font-inter), 'Helvetica Neue', sans-serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

function AppStoreBadge({ size = 'sm', top, bottom }: { size?: 'sm' | 'md'; top: string; bottom: string }) {
  const d = {
    sm: { h: 38, icon: 17, topSize: '0.56rem', botSize: '0.82rem', px: 14, gap: 9 },
    md: { h: 46, icon: 20, topSize: '0.62rem', botSize: '0.92rem', px: 17, gap: 10 },
  }[size];

  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', gap: d.gap, padding: `0 ${d.px}px`,
        height: d.h, borderRadius: 10, background: '#000',
        border: '0.5px solid rgba(255,255,255,0.18)', textDecoration: 'none', flexShrink: 0,
      }}
    >
      <svg viewBox="0 0 24 24" style={{ width: d.icon, height: d.icon, fill: 'white', flexShrink: 0 }} aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ fontFamily: '-apple-system,"Helvetica Neue",sans-serif', fontSize: d.topSize, fontWeight: 400, color: 'rgba(255,255,255,0.86)', letterSpacing: '0.01em' }}>
          {top}
        </span>
        <span style={{ fontFamily: '-apple-system,"Helvetica Neue",sans-serif', fontSize: d.botSize, fontWeight: 600, color: 'white', letterSpacing: '-0.01em' }}>
          {bottom}
        </span>
      </div>
    </a>
  );
}

/**
 * Swaps the locale segment of a path, so switching language keeps you on the
 * page you were reading instead of dumping you on the home page.
 * /da/terms -> /fr/terms;  /terms -> /fr/terms;  /da/terms -> /terms (for `en`).
 */
export function swapLocale(pathname: string, from: Locale, to: Locale): string {
  const bare =
    from === DEFAULT_LOCALE
      ? pathname
      : pathname.replace(new RegExp(`^/${from}(?=/|$)`), '') || '/';
  if (to === DEFAULT_LOCALE) return bare || '/';
  return bare === '/' ? `/${to}` : `/${to}${bare}`;
}

function LangSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  // Resolved at click time, not render time: this renders on the server too,
  // where there is no window to read the path from.
  const go = (l: Locale) => () => {
    const { pathname, hash } = window.location;
    window.location.href = swapLocale(pathname, locale, l) + hash;
  };

  return (
    <div style={{ position: 'relative' }} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          background: 'none', border: `0.5px solid ${C.border}`, color: C.sub,
          borderRadius: 9, padding: '8px 11px', cursor: 'pointer',
          fontFamily: C.body, fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.04em',
        }}
      >
        {LOCALE_NAMES[locale]} <span aria-hidden="true">▾</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.14 }}
            role="listbox"
            style={{
              position: 'absolute', right: 0, top: 'calc(100% + 8px)', zIndex: 70,
              background: '#fff', borderRadius: 12, padding: 6, listStyle: 'none', margin: 0,
              boxShadow: '0 18px 40px rgba(10,6,30,0.18)', minWidth: 150,
            }}
          >
            {LOCALES.map(l => (
              <li key={l}>
                <button
                  onClick={go(l)}
                  role="option"
                  aria-selected={l === locale}
                  lang={l}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left', padding: '9px 12px',
                    borderRadius: 8, border: 'none', cursor: 'pointer',
                    background: l === locale ? '#F1EEF9' : 'transparent',
                    color: '#2A2440', fontFamily: C.body, fontSize: '0.85rem', fontWeight: 400,
                  }}
                >
                  {LOCALE_NAMES[l]}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PageShell({
  children,
  locale = DEFAULT_LOCALE,
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  const [open, setOpen] = useState(false);
  const t = getDict(locale).shell;

  // Every internal href hangs off this prefix. English has none.
  const p = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  const links: [string, string][] = [
    [t.nav.how, `${p}/#how-it-works`],
    [t.nav.modes, `${p}/#modes`],
    [t.nav.about, `${p}/about`],
    [t.nav.credits, `${p}/credits`],
    [t.nav.faq, `${p}/#faq`],
  ];

  const footerLinks: [string, string][] = [
    [t.footer.privacy, `${p}/privacy`],
    [t.footer.terms, `${p}/terms`],
    [t.footer.refunds, `${p}/refunds`],
    [t.footer.eula, `${p}/eula`],
    [t.footer.credits, `${p}/credits`],
    [t.footer.contact, 'mailto:hello@symponia.io'],
  ];

  return (
    <div style={{ background: C.bg, minHeight: '100vh' }}>
      <LangSync locale={locale} />
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(245,242,232,0.94)', backdropFilter: 'blur(24px)', borderBottom: `0.5px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href={p || '/'} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo.jpg" alt="Symponia" style={{ width: 28, height: 28, borderRadius: 7, objectFit: 'cover' }} />
            <span style={{ fontFamily: C.heading, fontSize: '1.3rem', fontWeight: 400, letterSpacing: '0.08em', color: C.fg }}>Symponia</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="desk-links">
            <style>{`.desk-links{display:flex}@media(max-width:900px){.desk-links{display:none!important}}`}</style>
            {links.map(([l, h]) => (
              <a key={h} href={h} style={{ fontFamily: C.body, fontSize: '0.75rem', letterSpacing: '0.14em', color: C.dim, textDecoration: 'none', textTransform: 'uppercase' }}>{l}</a>
            ))}
            <LangSwitcher locale={locale} />
            <AppStoreBadge size="sm" top={t.badge.top} bottom={t.badge.bottom} />
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }} className="mob-btn">
            <style>{`.mob-btn{display:none!important}@media(max-width:900px){.mob-btn{display:block!important}}`}</style>
            {[0,1,2].map(i => (
              <motion.span key={i} style={{ display: 'block', width: 22, height: 1.5, background: C.fg, marginBottom: i < 2 ? 5 : 0 }}
                animate={open ? (i===1?{opacity:0}:{rotate:i===0?45:-45,y:i===0?6.5:-6.5}):{opacity:1,rotate:0,y:0}}
                transition={{ duration: 0.2 }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-4}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}} transition={{duration:0.18}}
            style={{position:'fixed',top:64,left:0,right:0,zIndex:49,background:'rgba(245,242,232,0.98)',backdropFilter:'blur(24px)',borderBottom:`0.5px solid ${C.border}`,padding:'24px 28px 28px'}}
          >
            {links.map(([l,h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                style={{display:'block',fontFamily:C.body,fontSize:'0.85rem',letterSpacing:'0.14em',color:C.sub,textDecoration:'none',textTransform:'uppercase',padding:'14px 0',borderBottom:`0.5px solid ${C.border}`}}
              >{l}</a>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
              <LangSwitcher locale={locale} />
              <AppStoreBadge size="md" top={t.badge.top} bottom={t.badge.bottom} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer style={{ borderTop: `0.5px solid ${C.border}`, background: C.bg, padding: '48px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <a href={p || '/'} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo.jpg" alt="Symponia" style={{ width: 24, height: 24, borderRadius: 6, objectFit: 'cover' }} />
            <span style={{ fontFamily: C.heading, fontSize: '1.2rem', fontWeight: 300, color: C.fg }}>Symponia</span>
          </a>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {footerLinks.map(([l, h]) => (
              <a key={h} href={h} style={{ fontFamily: C.body, fontSize: '0.78rem', fontWeight: 300, color: C.dim, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <p style={{ fontFamily: C.body, fontSize: '0.7rem', color: C.dim, opacity: 0.4, margin: 0 }}>
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
            <a href="https://yektad.com" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: C.body, fontSize: '0.68rem', color: C.dim, opacity: 0.35, textDecoration: 'none' }}
            >{t.footer.built}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

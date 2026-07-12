'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { Rich } from './Rich';
import { getLegal } from '@/lib/legal';
import type { Locale } from '@/lib/i18n';

const APP_STORE_URL = 'https://apps.apple.com/app/symponia/id6760951504';

const C = {
  bg: '#F5F2E8', bgCard: 'rgba(255,255,255,0.94)',
  fg: '#0F0C0A', sub: '#2E2840', dim: '#6A6078',
  cyan: '#0891B2', violet: '#7C3AED',
  border: '#E5DFC9',
  borderStrong: '#CFC6A8',
  heading: "var(--font-cal-sans), 'Inter', sans-serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

// The price is a real Apple price point, not copy, so it is not in the dict.
const PRICE = '£12.99';

// Icons pair with how.items by index. Kept in code because they are not language.
const HOW_ICONS = ['◎', '🔄', '📱', '🔒'];

function Card({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'relative',
        borderRadius: 22,
        border: `0.5px solid ${accent ? C.violet + '50' : C.border}`,
        background: accent ? 'rgba(124,58,237,0.05)' : C.bgCard,
        backdropFilter: 'blur(12px)',
        padding: '36px 32px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '0.5px', background: accent ? C.violet + '60' : C.borderStrong }} />
      {children}
    </motion.div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
      <span style={{ color: C.violet, fontSize: '0.7rem', marginTop: 4, flexShrink: 0 }}>◆</span>
      <span style={{ fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, color: C.sub, lineHeight: 1.7 }}>{children}</span>
    </div>
  );
}

export function CreditsPage({ locale }: { locale: Locale }) {
  const t = getLegal(locale).credits;

  return (
    <PageShell locale={locale}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 28px 120px' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.22em', color: C.cyan, textTransform: 'uppercase', marginBottom: 16 }}>
            {t.kicker}
          </p>
          <h1 style={{ fontFamily: C.heading, fontWeight: 300, fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: C.fg, marginBottom: 20, lineHeight: 1.1 }}>
            {t.h1}
          </h1>
          <p style={{ fontFamily: C.body, fontSize: '0.95rem', fontWeight: 300, color: C.sub, maxWidth: 480, margin: '0 auto', lineHeight: 1.85 }}>
            {t.lead}
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {/* Free */}
            <Card>
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.dim, marginBottom: 8 }}>{t.free.k}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: C.heading, fontSize: '3rem', fontWeight: 300, color: C.fg, lineHeight: 1 }}>{t.free.price}</span>
                </div>
                <p style={{ fontFamily: C.body, fontSize: '0.78rem', fontWeight: 300, color: C.dim }}>{t.free.sub}</p>
              </div>

              <div style={{ padding: '16px 0', borderTop: `0.5px solid ${C.border}`, borderBottom: `0.5px solid ${C.border}`, marginBottom: 20 }}>
                <p style={{ fontFamily: C.body, fontSize: '0.84rem', fontWeight: 300, color: C.sub, lineHeight: 1.75 }}>{t.free.body}</p>
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', padding: '14px', borderRadius: 100, background: C.cyan, color: '#fff', fontFamily: C.body, fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.06em', textAlign: 'center', textDecoration: 'none', marginTop: 'auto' }}
              >
                {t.free.cta}
              </a>
            </Card>

            {/* Monthly */}
            <Card accent>
              <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 12px', borderRadius: 100, background: C.violet, color: '#fff', fontFamily: C.body, fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {t.monthly.badge}
              </div>

              <div style={{ marginBottom: 20 }}>
                <p style={{ fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.violet, marginBottom: 8 }}>{t.monthly.k}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: C.heading, fontSize: '3rem', fontWeight: 300, color: C.fg, lineHeight: 1 }}>{PRICE}</span>
                </div>
                <p style={{ fontFamily: C.body, fontSize: '0.78rem', fontWeight: 300, color: C.dim }}>{t.monthly.sub}</p>
              </div>

              <div style={{ padding: '16px 0', borderTop: `0.5px solid ${C.border}`, borderBottom: `0.5px solid ${C.border}`, marginBottom: 20 }}>
                {t.monthly.bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
              </div>

              <div style={{ width: '100%', padding: '14px', borderRadius: 100, border: `0.5px solid ${C.violet}40`, background: 'rgba(124,58,237,0.06)', color: C.violet, fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.08em', textAlign: 'center', marginTop: 'auto' }}>
                {t.monthly.cta}
              </div>
            </Card>
          </div>
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: C.heading, fontSize: '1.8rem', fontWeight: 300, color: C.fg, marginBottom: 32, textAlign: 'center' }}>
            {t.how.h2}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {t.how.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, padding: '20px 24px', borderRadius: 16, border: `0.5px solid ${C.border}`, background: C.bgCard }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 2 }} aria-hidden="true">{HOW_ICONS[i] ?? '◎'}</span>
                <div>
                  <p style={{ fontFamily: C.body, fontSize: '0.85rem', fontWeight: 400, color: C.fg, marginBottom: 6 }}>{item.t}</p>
                  <p style={{ fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, color: C.dim, lineHeight: 1.8 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: C.body, fontSize: '0.78rem', fontWeight: 300, color: C.dim, textAlign: 'center', marginTop: 40, lineHeight: 1.8 }}>
            <Rich text={t.contact} locale={locale} />
          </p>
        </div>
      </div>
    </PageShell>
  );
}

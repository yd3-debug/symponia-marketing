import React from 'react';
import { PageShell } from '@/components/PageShell';
import { getLegal } from '@/lib/legal';
import type { Locale } from '@/lib/i18n';
import { APPLE_STANDARD_EULA } from './appleEula';

// The page chrome is localised; the agreement itself is not, and deliberately.
//
// This is Apple's Licensed Application End User License Agreement — a contract
// Apple authored and requires us to surface verbatim. Apple publishes it in
// English; a translation we produced ourselves would not be the agreement the
// user is actually bound by, and presenting one as if it were would be worse
// than leaving it in English. So non-English locales get a note (dict.eula.note)
// explaining that, and the clauses below stay as Apple wrote them.

const C = {
  fg: '#0F0C0A', sub: '#2E2840', dim: '#6A6078', cyan: '#0891B2',
  heading: "var(--font-cormorant), 'Georgia', serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

const bodyText = {
  fontFamily: C.body,
  fontSize: '0.88rem',
  fontWeight: 300 as const,
  lineHeight: 1.9,
  color: C.sub,
};

export function EulaPage({ locale }: { locale: Locale }) {
  const t = getLegal(locale).eula;

  return (
    <PageShell locale={locale}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 28px 120px' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.22em', color: C.cyan, textTransform: 'uppercase', marginBottom: 16 }}>
          {t.kicker}
        </p>
        <h1 style={{ fontFamily: C.heading, fontWeight: 300, fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: C.fg, marginBottom: 12, lineHeight: 1.1 }}>
          {t.titleL1}
          <br />
          {t.titleL2}
        </h1>
        <p style={{ fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, color: C.dim, marginBottom: t.note ? 24 : 56 }}>
          {t.sub}
        </p>

        {t.note && (
          <p
            style={{
              ...bodyText,
              fontSize: '0.8rem',
              color: C.dim,
              borderLeft: `2px solid ${C.cyan}`,
              paddingLeft: 16,
              marginBottom: 56,
            }}
          >
            {t.note}
          </p>
        )}

        <div style={{ ...bodyText, marginBottom: 48 }}>
          <p>{APPLE_STANDARD_EULA.preamble}</p>
        </div>

        {APPLE_STANDARD_EULA.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: C.heading, fontSize: '1.6rem', fontWeight: 400, color: C.cyan, marginBottom: 16 }}>
              {s.h}
            </h2>
            <div style={bodyText}>
              {s.p.map((para, j) => (
                <p key={j} style={{ marginTop: j === 0 ? 0 : 12 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

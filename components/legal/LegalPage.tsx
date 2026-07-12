import React from 'react';
import { PageShell } from '@/components/PageShell';
import { Rich } from './Rich';
import { getDict, type Locale } from '@/lib/i18n';
import type { LegalDoc } from '@/lib/legal';

// One renderer for Terms, Privacy and Refunds. They share a layout exactly, and
// the only thing that ever differed between the three old page files was the
// prose, which now lives in lib/legal/<locale>.ts.

const C = {
  fg: '#0F0C0A', sub: '#2E2840', dim: '#6A6078', cyan: '#0891B2',
  border: 'rgba(0,0,0,0.08)',
  heading: "var(--font-inter), 'Helvetica Neue', sans-serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

const bodyText = {
  fontFamily: C.body,
  fontSize: '0.9rem',
  fontWeight: 300 as const,
  lineHeight: 1.9,
  color: C.sub,
};

export function LegalPage({ doc, locale }: { doc: LegalDoc; locale: Locale }) {
  const { legalNote } = getDict(locale).shell;

  return (
    <PageShell locale={locale}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 28px 120px' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.22em', color: C.cyan, textTransform: 'uppercase', marginBottom: 16 }}>
          {doc.kicker}
        </p>
        <h1 style={{ fontFamily: C.heading, fontWeight: 500, fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: C.fg, marginBottom: 12, lineHeight: 1.1 }}>
          {doc.title}
        </h1>
        <p style={{ fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, color: C.dim, marginBottom: legalNote ? 24 : 40 }}>
          {doc.updated}
        </p>

        {legalNote && (
          <p
            style={{
              ...bodyText,
              fontSize: '0.8rem',
              color: C.dim,
              borderLeft: `2px solid ${C.cyan}`,
              paddingLeft: 16,
              marginBottom: 40,
            }}
          >
            {legalNote}
          </p>
        )}

        <p style={{ ...bodyText, marginBottom: 48 }}>
          <Rich text={doc.intro} locale={locale} />
        </p>

        {doc.sections.map((s, i) => (
          <div key={i} id={s.id} style={{ marginBottom: 44, scrollMarginTop: 90 }}>
            <h2 style={{ fontFamily: C.heading, fontSize: '1.55rem', fontWeight: 500, color: C.fg, marginBottom: 14 }}>
              {s.h}
            </h2>
            <div style={bodyText}>
              {s.blocks.map((b, j) =>
                b.t === 'p' ? (
                  <p key={j} style={{ marginTop: j === 0 ? 0 : 12 }}>
                    <Rich text={b.x} locale={locale} />
                  </p>
                ) : (
                  <ul key={j} style={{ marginTop: 10, paddingLeft: 20, lineHeight: 2 }}>
                    {b.x.map((li, k) => (
                      <li key={k}>
                        <Rich text={li} locale={locale} />
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

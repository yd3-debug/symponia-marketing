import { PageShell } from '@/components/PageShell';
import { getDict, type Locale } from '@/lib/i18n';

const C = {
  fg: '#0F0C0A', sub: '#2E2840', dim: '#6A6078',
  cyan: '#0891B2', violet: '#7C3AED',
  border: '#E5DFC9',
  heading: "var(--font-syne), 'Inter', sans-serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

const ACCENTS = [C.cyan, C.violet];

function Divider() {
  return <div style={{ height: '0.5px', background: C.border, margin: '56px 0' }} />;
}

function Label({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.24em',
      color: C.cyan, textTransform: 'uppercase', marginBottom: 20,
    }}>
      {children}
    </p>
  );
}

const para: React.CSSProperties = {
  fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300,
  lineHeight: 1.95, color: C.sub, margin: 0,
};

export default function About({ locale }: { locale: Locale }) {
  const t = getDict(locale).about;

  return (
    <PageShell locale={locale}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '96px 28px 120px' }}>

        {/* Hero */}
        <div style={{ marginBottom: 72 }}>
          <Label>{t.k}</Label>
          <h1 style={{
            fontFamily: C.heading, fontWeight: 300,
            fontSize: 'clamp(2.8rem, 6vw, 4.4rem)', lineHeight: 1.1,
            color: C.fg, marginBottom: 32,
          }}>
            {t.h1a}<br />
            <em style={{ color: C.cyan, fontStyle: 'italic' }}>{t.h1b}</em>
          </h1>
          <p style={{
            fontFamily: C.body, fontSize: '1rem', fontWeight: 300,
            lineHeight: 1.9, color: C.sub, maxWidth: 600,
          }}>
            {t.lead}
          </p>
        </div>

        <Divider />

        {/* Where it began — the quote sits after the second paragraph */}
        <div style={{ marginBottom: 72 }}>
          <Label>{t.beganK}</Label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {t.began.map((p, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <p style={para}>{p}</p>
                {i === 1 && (
                  <blockquote style={{
                    margin: 0, paddingLeft: 22,
                    borderLeft: `3px solid ${C.cyan}`,
                    fontFamily: C.heading, fontWeight: 300, fontStyle: 'italic',
                    fontSize: 'clamp(1.2rem, 2.6vw, 1.6rem)', lineHeight: 1.5,
                    color: C.fg, maxWidth: '34ch',
                  }}>
                    {t.quote}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Founders */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {t.people.map((person, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              const first = i === 0;
              return (
                <div key={person.name} style={{
                  padding: '40px 36px',
                  background: 'rgba(255,255,255,0.92)',
                  border: `0.5px solid ${C.border}`,
                  boxShadow: '0 2px 20px rgba(109,40,217,0.06), 0 1px 4px rgba(0,0,0,0.04)',
                  borderRadius: first ? '16px 4px 4px 16px' : '4px 16px 16px 4px',
                }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: `${accent}1A`,
                      border: `0.5px solid ${accent}38`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20,
                    }}>
                      <span style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 500, color: accent }}>
                        {person.name.replace(/^(Dr\.|Dott\.|Dra\.)\s*/i, '').charAt(0)}
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: C.heading, fontWeight: 400,
                      fontSize: '1.5rem', color: C.fg, marginBottom: 4, lineHeight: 1.2,
                    }}>
                      {person.name}
                    </h2>
                    <p style={{
                      fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: accent, fontWeight: 500,
                    }}>
                      {person.role}
                    </p>
                  </div>
                  <p style={{
                    fontFamily: C.body, fontSize: '0.86rem', fontWeight: 300,
                    lineHeight: 1.9, color: C.dim, margin: 0,
                  }}>
                    {person.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <Divider />

        {/* What we believe */}
        <div style={{ marginBottom: 64 }}>
          <Label>{t.believeK}</Label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {t.beliefs.map((belief, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, marginTop: '0.55em',
                  width: 4, height: 4, borderRadius: '50%',
                  background: C.cyan, opacity: 0.6,
                }} />
                <p style={{ ...para, lineHeight: 1.85 }}>{belief}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {t.closing.map((p, i) => <p key={i} style={para}>{p}</p>)}
          </div>
        </div>

        {/* Closing */}
        <div style={{
          padding: '40px 44px',
          background: 'rgba(8,145,178,0.06)',
          border: '0.5px solid rgba(8,145,178,0.2)',
          borderRadius: 16,
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: C.heading, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.5,
            color: C.fg, margin: 0,
          }}>
            {t.outroA}{' '}
            <span style={{ color: C.cyan }}>{t.outroB}</span>
          </p>
        </div>

      </div>
    </PageShell>
  );
}

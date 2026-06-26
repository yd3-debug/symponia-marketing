import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'About — The people behind Symponia',
  description: 'Symponia was built by Dr. Alessandro Biletta and Yekta Dastranj — a philosopher of the inner life and the one who gave the vision a form you can hold.',
};

const C = {
  fg: '#F1F0FF', sub: '#AEAECE', dim: '#A8A8C8',
  cyan: '#06B6D4', violet: '#9F67FF',
  border: '#1A1A30', borderStrong: '#2D2D50',
  heading: "var(--font-syne), 'Inter', sans-serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

function Divider() {
  return (
    <div style={{ height: '0.5px', background: C.border, margin: '56px 0' }} />
  );
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

export default function AboutPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '96px 28px 120px' }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 72 }}>
          <Label>The people behind Symponia</Label>
          <h1 style={{
            fontFamily: C.heading, fontWeight: 300,
            fontSize: 'clamp(2.8rem, 6vw, 4.4rem)', lineHeight: 1.1,
            color: C.fg, marginBottom: 32,
          }}>
            Hear yourself<br /><em style={{ color: C.cyan, fontStyle: 'italic' }}>again.</em>
          </h1>
          <p style={{
            fontFamily: C.body, fontSize: '1rem', fontWeight: 300,
            lineHeight: 1.9, color: C.sub, maxWidth: 600,
          }}>
            The world has never been louder. Somewhere beneath the noise, the voice you used to trust has gone quiet.
            Symponia was built to help you find your way back to it. Not to fix you. Not to advise you.
            Only to listen, and to reflect what it hears.
          </p>
        </div>

        <Divider />

        {/* ── Where it began ────────────────────────────────────────── */}
        <div style={{ marginBottom: 72 }}>
          <Label>Where it began</Label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.95, color: C.sub }}>
              Symponia started with Dr. Alessandro Biletta, an osteopath who has spent his life working where the body
              and the mind quietly meet. After years of listening to people for a living, he became certain of one thing.
              Beneath every story, people are looking for a way to recognise themselves.
            </p>
            <p style={{ fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.95, color: C.sub }}>
              He found his answer in depth psychology. In Jung, in Hillman, in the old language of archetypes. And he
              asked the question that would become the soul of Symponia.{' '}
              <em style={{ color: C.fg, fontStyle: 'italic' }}>
                What if you could meet yourself through the things that already feel like you?
              </em>
            </p>
            <p style={{ fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.95, color: C.sub }}>
              It grew the way the best ideas do. Slowly, in conversation. Long talks about the inner self, about
              connection, about what it takes to return to a calmer place within yourself.
            </p>
            <p style={{ fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.95, color: C.sub }}>
              Yekta Dastranj was part of those conversations. She understood the idea the moment she heard it, and
              she felt it long before she thought about how to build it. She became co-founder and gave the vision a
              form you can hold, open, and return to every day.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── Founder profiles ──────────────────────────────────────── */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>

            {/* Alessandro */}
            <div style={{
              padding: '40px 36px',
              background: 'rgba(15,15,26,0.7)',
              border: `0.5px solid ${C.border}`,
              borderRadius: '16px 4px 4px 16px',
            }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: `rgba(6,182,212,0.12)`,
                  border: `0.5px solid rgba(6,182,212,0.25)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <span style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 500, color: C.cyan }}>A</span>
                </div>
                <h2 style={{
                  fontFamily: C.heading, fontWeight: 400,
                  fontSize: '1.5rem', color: C.fg, marginBottom: 4, lineHeight: 1.2,
                }}>
                  Dr. Alessandro Biletta
                </h2>
                <p style={{
                  fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: C.cyan, fontWeight: 500,
                }}>
                  Founder
                </p>
              </div>
              <p style={{
                fontFamily: C.body, fontSize: '0.86rem', fontWeight: 300,
                lineHeight: 1.9, color: C.dim,
              }}>
                The philosophical heart of Symponia. An osteopath and a lifelong student of the inner life,
                Alessandro came to believe that real understanding begins long before anyone reaches for a solution.
                The archetype method at the centre of Symponia is his.
              </p>
            </div>

            {/* Yekta */}
            <div style={{
              padding: '40px 36px',
              background: 'rgba(15,15,26,0.7)',
              border: `0.5px solid ${C.border}`,
              borderRadius: '4px 16px 16px 4px',
            }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: `rgba(159,103,255,0.12)`,
                  border: `0.5px solid rgba(159,103,255,0.25)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <span style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 500, color: C.violet }}>Y</span>
                </div>
                <h2 style={{
                  fontFamily: C.heading, fontWeight: 400,
                  fontSize: '1.5rem', color: C.fg, marginBottom: 4, lineHeight: 1.2,
                }}>
                  Yekta Dastranj
                </h2>
                <p style={{
                  fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: C.violet, fontWeight: 500,
                }}>
                  Co-founder
                </p>
              </div>
              <p style={{
                fontFamily: C.body, fontSize: '0.86rem', fontWeight: 300,
                lineHeight: 1.9, color: C.dim,
              }}>
                The one who brought it to life. Where Alessandro saw the philosophy, Yekta saw the experience.
                She shaped how Symponia feels in your hands, certain that something this personal should stay
                simple, private, and deeply human.
              </p>
            </div>

          </div>
        </div>

        <Divider />

        {/* ── What we believe ───────────────────────────────────────── */}
        <div style={{ marginBottom: 64 }}>
          <Label>What we believe</Label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              'That understanding yourself should not have to wait for a crisis.',
              'That the right kind of technology can create silence rather than fill it.',
              'And that the most powerful thing a companion can do is hand you back a thought you already had, but had never dared to say aloud.',
            ].map((belief, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, marginTop: '0.55em',
                  width: 4, height: 4, borderRadius: '50%',
                  background: C.cyan, opacity: 0.6,
                }} />
                <p style={{
                  fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300,
                  lineHeight: 1.85, color: C.sub, margin: 0,
                }}>
                  {belief}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.95, color: C.sub }}>
              Symponia is not therapy, and it will never pretend to be. It is a thinking space.
              A mirror that does not flinch.
            </p>
            <p style={{ fontFamily: C.body, fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.95, color: C.sub }}>
              We made it for anyone who has ever sensed there is more to them than they have had the quiet to hear.
            </p>
          </div>
        </div>

        {/* ── Closing ───────────────────────────────────────────────── */}
        <div style={{
          padding: '40px 44px',
          background: 'rgba(6,182,212,0.04)',
          border: `0.5px solid rgba(6,182,212,0.18)`,
          borderRadius: 16,
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: C.heading, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.5,
            color: C.fg, margin: 0,
          }}>
            Welcome.{' '}
            <span style={{ color: C.cyan }}>We have been waiting for you.</span>
          </p>
        </div>

      </div>
    </PageShell>
  );
}

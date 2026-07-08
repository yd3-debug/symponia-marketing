import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Boroto Ltd collects, uses, and protects your personal data when you use Symponia.',
  alternates: { canonical: 'https://symponia.io/privacy' },
  robots: { index: true, follow: true },
};

const C = {
  fg: '#0F0C0A', sub: '#2E2840', dim: '#6A6078', cyan: '#0891B2',
  border: 'rgba(0,0,0,0.08)',
  heading: "var(--font-cormorant), 'Georgia', serif",
  body: "var(--font-inter), 'Helvetica Neue', sans-serif",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2 style={{ fontFamily: C.heading, fontSize: '1.55rem', fontWeight: 500, color: C.fg, marginBottom: 14 }}>{title}</h2>
      <div style={{ fontFamily: C.body, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: C.sub }}>
        {children}
      </div>
    </div>
  );
}

const strong = { color: C.fg, fontWeight: 500 as const };
const link = { color: C.cyan, textDecoration: 'none' as const };
const ul = { marginTop: 10, paddingLeft: 20, lineHeight: 2 };

export default function PrivacyPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 28px 120px' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.22em', color: C.cyan, textTransform: 'uppercase', marginBottom: 16 }}>Legal</p>
        <h1 style={{ fontFamily: C.heading, fontWeight: 500, fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: C.fg, marginBottom: 12, lineHeight: 1.1 }}>Privacy Policy</h1>
        <p style={{ fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, color: C.dim, marginBottom: 40 }}>Last updated: July 2026</p>

        <p style={{ fontFamily: C.body, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: C.sub, marginBottom: 48 }}>
          This Privacy Policy explains how Boroto Ltd (&ldquo;Boroto&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, and protects your personal data when you use the Symponia app and website. Symponia is a space for private reflection, so we collect as little as we can and we never sell your data.
        </p>

        <Section title="1. Who we are (data controller)">
          <p>Boroto Ltd is the controller of your personal data. We are registered in England and Wales. You can reach us about anything in this policy at <a href="mailto:hello@symponia.io" style={link}>hello@symponia.io</a>. Our company registration number and registered office address are set out in our published company filings and are available on request.</p>
        </Section>

        <Section title="2. The personal data we collect">
          <p><strong style={strong}>Information you give us during onboarding and use:</strong></p>
          <ul style={ul}>
            <li>your first name and, if you choose to share it, your gender;</li>
            <li>your seven animal archetypes and your responses to the attuning questions;</li>
            <li>your resonance frequency preference;</li>
            <li>the messages and reflections you write in each mode;</li>
            <li>your notification preferences and whether you opt in to occasional email updates.</li>
          </ul>
          <p style={{ marginTop: 16 }}><strong style={strong}>Account and technical information:</strong></p>
          <ul style={ul}>
            <li>account details needed to sign you in and keep your data secure;</li>
            <li>your session (token) balance and subscription status;</li>
            <li>limited technical and diagnostic information (such as app version and basic device information) used to keep the Service working and secure.</li>
          </ul>
          <p style={{ marginTop: 16 }}><strong style={strong}>Purchase information:</strong> when you subscribe, Apple processes your payment. We receive confirmation of your subscription status from Apple, but we never receive or store your payment card details.</p>
          <p style={{ marginTop: 16 }}>Some information is also stored locally on your device (for example your archetypes, preferences, and conversation history in each mode). Local data is removed when you delete the app.</p>
          <p style={{ marginTop: 16 }}>Please do not share information you do not want to record, and take particular care with special category information (such as details about your health, beliefs, or sexuality). Where such information appears in what you write, we process it only to provide the Service to you, on the basis of your explicit consent, which you can withdraw by deleting the relevant content or your account.</p>
        </Section>

        <Section title="3. How and why we use your data, and our lawful bases">
          <p>Under UK and EU data protection law we must have a lawful basis for using your personal data. We rely on the following:</p>
          <ul style={ul}>
            <li><strong style={strong}>To perform our contract with you</strong>: to create and run your account, generate personalised Symponia responses, deliver your daily reflection, maintain a session during a conversation, and confirm your subscription with Apple.</li>
            <li><strong style={strong}>Your consent</strong>: to send push notifications or occasional marketing emails (only if you opt in), and to process any special category information contained in what you write. You can withdraw consent at any time.</li>
            <li><strong style={strong}>Our legitimate interests</strong>: to keep the Service secure and working, prevent misuse and fraud, and improve reliability, in a way that does not override your rights.</li>
            <li><strong style={strong}>Legal obligation</strong>: to comply with laws that apply to us, for example around tax and responding to lawful requests.</li>
          </ul>
          <p style={{ marginTop: 12 }}>We do not use your data for advertising or ad-targeting, and we do not sell your personal data.</p>
        </Section>

        <Section title="4. How Symponia uses AI">
          <p>To generate reflective responses, the text you send, along with your first name, gender (if provided), archetypes, and resonance frequency, is sent to Anthropic&rsquo;s Claude API. This processing is under Zero Data Retention (ZDR) terms: Anthropic does not retain the content of your conversations after generating a response, and does not use it to train or improve its models.</p>
          <p style={{ marginTop: 12 }}>Symponia generates content automatically, but it does not make solely automated decisions that produce legal or similarly significant effects about you. Symponia is a reflective tool, not a decision-maker.</p>
        </Section>

        <Section title="5. Who we share data with">
          <p>We share data only with the service providers who help us run Symponia, each acting under agreements that require them to protect it:</p>
          <ul style={ul}>
            <li><strong style={strong}>Anthropic</strong>: provides the Claude AI that generates responses, under Zero Data Retention terms. See <a href="https://www.anthropic.com/legal/privacy" style={link} target="_blank" rel="noopener noreferrer">anthropic.com/legal/privacy</a>.</li>
            <li><strong style={strong}>Supabase</strong>: secure database, authentication, and backend hosting for your account and conversations.</li>
            <li><strong style={strong}>Apple</strong>: App Store distribution, sign-in, push notification delivery, and in-app purchase processing. Payment details are handled entirely by Apple.</li>
          </ul>
          <p style={{ marginTop: 12 }}>We may also disclose data if required by law, to protect the safety, rights, or property of our users or others, or in connection with a business transfer, in which case we will tell you and continue to protect your data.</p>
        </Section>

        <Section title="6. International transfers">
          <p>Some of our providers (including Anthropic and Apple) process data outside the UK and EEA, including in the United States. Where data is transferred internationally, we rely on appropriate safeguards recognised under UK and EU law, such as the UK International Data Transfer Agreement or Addendum and the European Commission&rsquo;s Standard Contractual Clauses, together with additional protections where needed. You can ask us for more information about these safeguards.</p>
        </Section>

        <Section title="7. How long we keep your data">
          <p>We keep your account and conversation history for as long as your account is active. When you delete your account (Profile tab, Account section, &ldquo;delete account&rdquo;) or ask us to erase your data, we delete it from our live systems, and it is removed from routine backups within a short period. Content sent to Anthropic is not retained by them under ZDR terms. Local data on your device is removed when you delete the app. We may keep limited information for longer only where the law requires it (for example basic transaction records).</p>
          <p style={{ marginTop: 12 }}>If you ask us to delete data associated with your account, we will action your request within 30 days.</p>
        </Section>

        <Section title="8. How we protect your data">
          <p>We use technical and organisational measures to protect your data, including encryption in transit, access controls, and reputable infrastructure providers. No method of transmission or storage is completely secure, but we work to protect your information and to respond quickly if something goes wrong, including notifying you and the relevant authority where the law requires it.</p>
        </Section>

        <div id="gdpr" />
        <Section title="9. Your rights">
          <p>If you are in the UK or the EEA, you have the following rights over your personal data under the UK GDPR and the EU GDPR:</p>
          <ul style={ul}>
            <li><strong style={strong}>Access</strong>: get a copy of the personal data we hold about you;</li>
            <li><strong style={strong}>Rectification</strong>: have inaccurate data corrected;</li>
            <li><strong style={strong}>Erasure</strong>: have your data deleted (&ldquo;right to be forgotten&rdquo;);</li>
            <li><strong style={strong}>Restriction</strong>: ask us to limit how we use your data;</li>
            <li><strong style={strong}>Portability</strong>: receive your data in a portable, machine-readable format;</li>
            <li><strong style={strong}>Objection</strong>: object to processing based on our legitimate interests;</li>
            <li><strong style={strong}>Withdraw consent</strong>: at any time, where we rely on your consent, without affecting earlier processing.</li>
          </ul>
          <p style={{ marginTop: 16 }}>To exercise any of these rights, email <a href="mailto:hello@symponia.io" style={link}>hello@symponia.io</a>. We will not charge you or treat you differently for exercising your rights. If you are unhappy with how we handle your data, you can complain to the UK Information Commissioner&rsquo;s Office (<a href="https://ico.org.uk" style={link} target="_blank" rel="noopener noreferrer">ico.org.uk</a>) or your local supervisory authority in the EEA.</p>
        </Section>

        <Section title="10. Marketing">
          <p>We only send marketing emails if you have opted in. Every marketing email includes an unsubscribe link, and you can opt out at any time by using it or by emailing <a href="mailto:hello@symponia.io" style={link}>hello@symponia.io</a>. Opting out of marketing does not affect service messages that are necessary to run your account.</p>
        </Section>

        <Section title="11. Cookies and the website">
          <p>Our website uses only the cookies and local storage strictly necessary to make the site work and to remember basic preferences. We do not use advertising or cross-site tracking cookies. If we add analytics in future, we will update this policy and, where required, ask for your consent first.</p>
        </Section>

        <Section title="12. Children">
          <p>Symponia is intended for adults. It is not directed at anyone under 18, and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us at <a href="mailto:hello@symponia.io" style={link}>hello@symponia.io</a> and we will delete it.</p>
        </Section>

        <Section title="13. Changes to this policy">
          <p>We may update this Privacy Policy from time to time. We will change the &ldquo;Last updated&rdquo; date above and, where changes are material, take reasonable steps to bring them to your attention. Continued use of Symponia after changes take effect means you accept the updated policy.</p>
        </Section>

        <Section title="14. Contact">
          <p>For any privacy question or request, contact our privacy team at <a href="mailto:hello@symponia.io" style={link}>hello@symponia.io</a>.</p>
        </Section>
      </div>
    </PageShell>
  );
}

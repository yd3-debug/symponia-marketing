import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'How refunds, cancellations, and your consumer rights work for Symponia subscriptions purchased through the App Store.',
  alternates: { canonical: 'https://symponia.io/refunds' },
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

export default function RefundsPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 28px 120px' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.22em', color: C.cyan, textTransform: 'uppercase', marginBottom: 16 }}>Legal</p>
        <h1 style={{ fontFamily: C.heading, fontWeight: 500, fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: C.fg, marginBottom: 12, lineHeight: 1.1 }}>Refund Policy</h1>
        <p style={{ fontFamily: C.body, fontSize: '0.82rem', fontWeight: 300, color: C.dim, marginBottom: 40 }}>Last updated: July 2026</p>

        <p style={{ fontFamily: C.body, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: C.sub, marginBottom: 48 }}>
          Symponia is operated by Boroto Ltd. Subscriptions are sold and processed by Apple through In-App Purchase. Because Apple handles the payment, refunds are requested from and decided by Apple under its policies. This page explains how that works and sets out your rights as a consumer. Nothing here limits your statutory rights.
        </p>

        <Section title="1. Trying Symponia for free">
          <p>New users receive a limited free allowance so you can experience Symponia before you decide to subscribe. We encourage you to use it before purchasing.</p>
        </Section>

        <Section title="2. How to request a refund">
          <p>All purchases are made through your Apple ID, so Apple, not Boroto Ltd, processes refunds. To request one:</p>
          <ul style={ul}>
            <li>go to <a href="https://reportaproblem.apple.com" style={link} target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> and sign in with your Apple ID; or</li>
            <li>on your device, open Settings, tap your name, then use the purchase history to report a problem.</li>
          </ul>
          <p style={{ marginTop: 12 }}>Apple reviews each request against its own criteria and decides whether to grant a refund. We are happy to help where we can, but we cannot issue App Store refunds directly or guarantee Apple&rsquo;s decision.</p>
        </Section>

        <Section title="3. Cancelling your subscription">
          <p>You can cancel at any time in your Apple ID settings (Settings, your name, Subscriptions). If you cancel, your subscription will not renew, and you keep access until the end of the period you have already paid for. Cancelling does not by itself trigger a refund for the current period, and unused sessions do not carry over. Deleting the app does not cancel your subscription.</p>
        </Section>

        <Section title="4. Your rights as a UK or EU consumer">
          <p>If you are a consumer in the UK or the EU, you normally have a 14-day right to cancel a purchase of digital content and receive a refund. However, this right can end once supply of the digital content has begun, where you have given your express consent to that and acknowledged that you lose the right to cancel. When you start a subscription and begin using sessions or daily reflections, digital content is supplied immediately, which may end the 14-day cancellation right for content already provided.</p>
          <p style={{ marginTop: 12 }}>None of this removes your legal rights. If the Service is faulty, not as described, or not provided with reasonable care and skill, you may be entitled to a remedy under the Consumer Rights Act 2015 (or equivalent law where you live), regardless of Apple&rsquo;s standard refund process. If you think this applies to you, contact us and we will help.</p>
        </Section>

        <Section title="5. Price changes">
          <p>If we change the subscription price, the new price will not apply to a billing period you have already paid for. Where required, Apple will ask you to confirm a price increase before it takes effect; if you do not agree, your subscription will not renew at the new price.</p>
        </Section>

        <Section title="6. Contact us">
          <p>If you have a problem with a payment, a subscription, or the Service, email <a href="mailto:hello@symponia.io" style={link}>hello@symponia.io</a> and we will do our best to put it right.</p>
        </Section>
      </div>
    </PageShell>
  );
}

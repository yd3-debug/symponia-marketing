import { JetBrains_Mono, Syne, DM_Sans } from 'next/font/google';

// Loaded here, not in the root layout. These three are used only by the
// dashboard, and having them in the root meant every marketing visitor
// downloaded three webfonts they would never see.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains-mono', display: 'swap',
});
const syne = Syne({
  subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne', display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-dm-sans', display: 'swap',
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard · Symponia',
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

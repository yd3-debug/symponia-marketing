import type { Metadata } from 'next';

// Private app surface. robots.txt asks crawlers not to fetch it, but a URL that
// is merely disallowed can still be indexed if something links to it, so state
// noindex on the page itself too. The page is a client component and cannot
// export metadata, hence this layout.
export const metadata: Metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

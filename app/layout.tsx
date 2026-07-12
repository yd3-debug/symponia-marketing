import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Syne, DM_Sans } from 'next/font/google';
import './globals.css';

// Cal Sans replaced by Syne (similar geometric semi-bold, Google Fonts)
// --font-cal-sans is aliased to --font-syne for headings

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const BASE_URL = 'https://symponia.io';
const TITLE = 'Symponia: a shadow work app that names your shadow';
const DESCRIPTION =
  'Most shadow work apps hand you a prompt. Symponia names your shadow: pick six animals that feel like you and one that makes your skin crawl. The seventh is the part you exiled. Depth psychology, not therapy. On iOS.';
const OG_IMAGE = `${BASE_URL}/og.png`;

export const viewport: Viewport = {
  themeColor: '#F5F2E8',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: TITLE,
    template: '%s | Symponia',
  },
  description: DESCRIPTION,
  keywords: [
    'shadow work app',
    'shadow work',
    'how to find your shadow self',
    'shadow self test',
    'jungian shadow work',
    'carl jung shadow',
    'shadow work journal app',
    'shadow work prompts',
    'projective test app',
    'AI journaling app',
    'AI companion app',
    'self reflection app',
    'app to understand myself',
    'daily reflection app',
    'guided journaling app',
    'shadow work app',
    'Jungian archetype quiz',
    'animal archetypes',
    'depth psychology app',
    'inner work app',
    'journaling app that remembers',
    'app for highly sensitive people',
    'self-discovery app',
  ],
  authors: [{ name: 'Symponia' }],
  creator: 'Symponia',
  publisher: 'Symponia',

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon.svg', color: '#08061c' }],
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Symponia',
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Symponia, an AI companion for your inner life',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@symponia_app',
    creator: '@symponia_app',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },

  appLinks: {
    ios: {
      app_store_id: '6760951504',
      url: 'https://apps.apple.com/app/symponia/id6760951504',
    },
  },

  other: {
    // iOS smart banner (shows "Open in App Store" bar on Safari)
    'apple-itunes-app': 'app-id=6760951504',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Symponia',
    url: BASE_URL,
    description: DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Symponia',
    description: DESCRIPTION,
    url: BASE_URL,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free allowance',
        price: '0',
        priceCurrency: 'GBP',
        description: 'Free to download with a free allowance to explore before subscribing.',
      },
      {
        '@type': 'Offer',
        name: 'Symponia Monthly',
        price: '12.99',
        priceCurrency: 'GBP',
        description: '350 reflection sessions per month. Daily reflections are always free.',
      },
    ],
    installUrl: 'https://apps.apple.com/app/symponia/id6760951504',
    downloadUrl: 'https://apps.apple.com/app/symponia/id6760951504',
    image: OG_IMAGE,
    screenshot: `${BASE_URL}/screens/00-home.png`,
    featureList: [
      'Daily personalised reflections',
      'Animal archetype discovery',
      'Three reflective conversation modes',
      'Frequency tuning',
      'AI-powered deep conversations',
      'Personalised companion identity',
    ],
    keywords: 'shadow work app, shadow work, jungian shadow work, shadow self, animal archetypes, projective method, depth psychology app, inner work, AI companion, iOS wellness app',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Symponia',
      url: BASE_URL,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Symponia',
    legalName: 'Boroto Ltd',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    sameAs: [
      'https://apps.apple.com/app/symponia/id6760951504',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* LLM/AI crawler discovery */}
        <link rel="alternate" type="text/plain" title="LLMs.txt" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="LLMs-full.txt" href="/llms-full.txt" />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}
        <script defer src="/yd-beacon.js"></script></body>
    </html>
  );
}

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
const TITLE = 'Symponia: an AI companion for your inner life';
const DESCRIPTION =
  'Symponia is an AI companion for your inner life. Meet your seven archetypes, reflect daily, and finally feel understood, not fixed. Private by design, on iOS.';
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
    keywords: 'self-discovery app, AI companion, animal archetypes, daily reflections, inner work, iOS wellness app',
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
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Symponia?',
        acceptedAnswer: { '@type': 'Answer', text: 'Symponia is an AI companion for self-discovery. It combines animal archetype psychology and open conversation into a single intimate space. It does not replace therapy. It goes where therapy sometimes cannot.' },
      },
      {
        '@type': 'Question',
        name: 'Who is Symponia for?',
        acceptedAnswer: { '@type': 'Answer', text: 'Anyone who wants to understand themselves more deeply. Beginners and experienced practitioners, people in transition and people building a daily inner practice. If you sense there is more to you than the surface, Symponia is for you.' },
      },
      {
        '@type': 'Question',
        name: 'What are the animal archetypes?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seven animals that speak to you form a psychological portrait, each one carrying a gift, a tension, and a direction. The seventh, the one that unsettles you, holds what the others cannot. This method draws on the depth psychology tradition of Carl Jung and James Hillman.' },
      },
      {
        '@type': 'Question',
        name: 'Is Symponia therapy?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Symponia is not a medical or psychological service. It is a reflective tool, a contemplative space. If you are in crisis or need clinical support, please reach out to a licensed professional.' },
      },
      {
        '@type': 'Question',
        name: 'How does Symponia work?',
        acceptedAnswer: { '@type': 'Answer', text: 'Symponia is powered by Claude, Anthropic\'s AI, shaped by instructions drawn from Jungian psychology, animal symbolism, and contemplative tradition. It has been trained to never give surface answers, never rush to solutions, and never judge.' },
      },
      {
        '@type': 'Question',
        name: 'How much does Symponia cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'New users receive a free allowance to explore Symponia. A monthly subscription (£12.99/month) provides 350 sessions per month, resetting at each renewal. Daily reflections are always free and do not count against your sessions.' },
      },
      {
        '@type': 'Question',
        name: 'How is Symponia different from other journaling apps?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most journaling apps log how you feel. Symponia helps you understand why. Instead of repeating the same prompts, it works from your seven archetypes and remembers your context, so each reflection meets you where you actually are.' },
      },
      {
        '@type': 'Question',
        name: 'Is Symponia just ChatGPT?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Symponia is powered by advanced AI, but it is built around a defined method: your seven animal archetypes, a set of attuning questions, and personalised daily reflections. It remembers your context and is shaped to listen and reflect, rather than answer like a generic chatbot.' },
      },
      {
        '@type': 'Question',
        name: 'Do I have to use Symponia every day?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Symponia is a companion, not another habit to keep up. A daily reflection is there when you want it, and you can go deeper whenever you feel like it. There is no streak to lose and no guilt for taking a break.' },
      },
      {
        '@type': 'Question',
        name: 'Is my data private?',
        acceptedAnswer: { '@type': 'Answer', text: 'Your conversations are stored securely, linked to your account, and deleted when you delete your account. Anthropic does not retain your conversations after generating a response (Zero Data Retention). We do not sell or share your data.' },
      },
      {
        '@type': 'Question',
        name: 'Where can I download Symponia?',
        acceptedAnswer: { '@type': 'Answer', text: 'Symponia is available on the Apple App Store for iPhone and iPad. It is currently available on iOS only.' },
      },
    ],
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

import React from 'react';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

// Renders the tiny inline markup used by the legal dictionaries:
//
//   **bold**        -> <strong>
//   [label](href)   -> <a>
//
// Internal hrefs (starting with "/") are rewritten to the active locale, so the
// dictionaries can say [Refund Policy](/refunds) once and a Danish reader lands
// on /da/refunds. Anchors are preserved: /terms#tokens -> /da/terms#tokens.
// External links and mailto: are passed through and get target="_blank".

const strong = { color: '#0F0C0A', fontWeight: 500 as const };
const linkStyle = { color: '#0891B2', textDecoration: 'none' as const };

export function localiseHref(href: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return href;
  if (!href.startsWith('/')) return href; // mailto:, https:, #anchor
  return `/${locale}${href}`;
}

// One regex, two alternations: a bold run or a link. The capture groups let us
// tell which matched without a second pass.
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function Rich({ text, locale }: { text: string; locale: Locale }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));

    const [full, boldText, label, href] = m;

    if (boldText !== undefined) {
      out.push(<strong key={m.index} style={strong}>{boldText}</strong>);
    } else if (label !== undefined && href !== undefined) {
      const external = !href.startsWith('/');
      out.push(
        <a
          key={m.index}
          href={localiseHref(href, locale)}
          style={linkStyle}
          {...(external && href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {label}
        </a>,
      );
    }

    last = m.index + full.length;
  }

  if (last < text.length) out.push(text.slice(last));

  return <>{out}</>;
}

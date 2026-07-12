import type { Locale } from '@/lib/i18n';

// Self-hosted inline SVG flags. Deliberately NOT emoji flags: Windows ships no
// flag glyphs at all, so 🇩🇰 renders as the bare letters "DK" for a large slice
// of visitors. These always render.
//
// A flag is a country, not a language, so the mapping is a judgement call:
//   en -> GB   (the app's English is British; US is the other defensible pick)
//   pt -> PT   (Portugal, not Brazil)
// Both are worth revisiting if the audience skews US or Brazilian.

const FLAGS: Record<Locale, React.ReactNode> = {
  en: (
    <>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.9" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.3" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3.2" />
    </>
  ),
  it: (
    <>
      <rect width="8" height="16" fill="#008C45" />
      <rect x="8" width="8" height="16" fill="#F4F5F0" />
      <rect x="16" width="8" height="16" fill="#CD212A" />
    </>
  ),
  ru: (
    <>
      <rect width="24" height="16" fill="#fff" />
      <rect y="5.33" width="24" height="5.34" fill="#0039A6" />
      <rect y="10.67" width="24" height="5.33" fill="#D52B1E" />
    </>
  ),
  pt: (
    <>
      <rect width="24" height="16" fill="#DA291C" />
      <rect width="9.6" height="16" fill="#046A38" />
      <circle cx="9.6" cy="8" r="3.4" fill="#FFE900" stroke="#fff" strokeWidth="0.5" />
      <circle cx="9.6" cy="8" r="1.9" fill="#DA291C" />
    </>
  ),
  fr: (
    <>
      <rect width="8" height="16" fill="#002395" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </>
  ),
  de: (
    <>
      <rect width="24" height="5.33" fill="#000" />
      <rect y="5.33" width="24" height="5.34" fill="#DD0000" />
      <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
    </>
  ),
  es: (
    <>
      <rect width="24" height="16" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
    </>
  ),
  da: (
    <>
      <rect width="24" height="16" fill="#C8102E" />
      <path d="M8 0v16M0 7h24" stroke="#fff" strokeWidth="2.6" />
    </>
  ),
};

export function Flag({ locale, size = 18 }: { locale: Locale; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 16"
      width={size}
      height={(size / 24) * 16}
      aria-hidden="true"
      focusable="false"
      style={{
        display: 'block',
        borderRadius: 2.5,
        flexShrink: 0,
        boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.18)',
      }}
    >
      {FLAGS[locale]}
    </svg>
  );
}

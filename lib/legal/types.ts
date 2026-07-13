// Shape of the legal + pricing pages (Terms, Privacy, Refunds, EULA, Credits).
//
// These live apart from lib/locales/* purely for size: the marketing copy and
// the legal copy change on completely different schedules, and keeping them in
// one 900-line file per language made them painful to review.
//
// Body copy is plain text with two pieces of inline markup, parsed by
// <Rich> in components/legal/Rich.tsx:
//
//   **bold**            -> emphasised run
//   [label](/href)      -> link. Internal hrefs (those starting with "/") are
//                          rewritten to the current locale, so a translator
//                          writes [Refund Policy](/refunds) and a French reader
//                          gets /fr/refunds. External hrefs and mailto: are
//                          left alone and open in a new tab.
//
// Translators should carry the markup across untouched and only translate the
// human-readable parts: the **…** contents and the [label] of a link, never the
// (/href).

export type Block =
  | { t: 'p'; x: string }
  | { t: 'ul'; x: string[] };

export type LegalSection = {
  /** Section heading, numbered in the source ("1. Who we are"). Keep the number. */
  h: string;
  blocks: Block[];
  /** Optional anchor id, so /terms#tokens keeps working. Never translate. */
  id?: string;
};

/** A standard legal document: kicker, title, date, intro, numbered sections. */
export type LegalDoc = {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * The EULA is Apple's Licensed Application End User License Agreement. It is a
 * verbatim legal instrument authored by Apple, so we reproduce it in Apple's
 * English and translate only the page chrome around it, inventing a Symponia
 * translation of Apple's contract would be both wrong and unenforceable.
 */
export type EulaDoc = {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  titleL1: string;
  titleL2: string;
  sub: string;
  /** Explains why the agreement below is in English. Empty on `en`. */
  note: string;
};

export type CreditsDoc = {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  h1: string;
  lead: string;
  free: {
    k: string;
    price: string;
    sub: string;
    body: string;
    cta: string;
  };
  monthly: {
    badge: string;
    k: string;
    /** No longer a number. Apple owns the price; this points at the App Store. */
    price: string;
    /** "per month · 350 reflection sessions" */
    sub: string;
    bullets: string[];
    cta: string;
  };
  how: {
    h2: string;
    items: { t: string; d: string }[];
  };
  /** Closing line, with markup. */
  contact: string;
};

export type LegalDict = {
  terms: LegalDoc;
  privacy: LegalDoc;
  refunds: LegalDoc;
  eula: EulaDoc;
  credits: CreditsDoc;
};

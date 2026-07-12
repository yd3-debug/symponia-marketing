// Shape of a Symponia marketing locale.
// Every file in lib/locales/*.ts must satisfy this exactly, so a missing or
// renamed key is a build error rather than a silently English string on a
// Danish page.

export type Dict = {
  /**
   * Chrome shared by every page that isn't the landing page: the PageShell nav
   * and the footer. The landing page has its own nav (see `nav` below) because
   * it is a one-pager with anchor links; everything else routes.
   */
  shell: {
    nav: { how: string; modes: string; about: string; credits: string; faq: string };
    /** App Store badge, which Apple requires us to render in the user's language. */
    badge: { top: string; bottom: string };
    footer: {
      privacy: string;
      terms: string;
      refunds: string;
      eula: string;
      credits: string;
      contact: string;
      rights: string;
      built: string;
      /** Column headings + one-line brand blurb for the rebuilt footer sitemap. */
      explore: string;
      legal: string;
      blurb: string;
      /** Studio credit in the footer base, links to yektad.com. */
      designedBy: string;
    };
    /**
     * Shown at the top of translated legal pages. English is the binding text,
     * so every non-English locale says so. Empty string on `en`.
     */
    legalNote: string;
  };

  nav: { rel: string; method: string; memory: string; faq: string; about: string };
  hero: { eyebrow: string; l1: string; l2: string; lead: string; cta: string; proof: string };
  recog: { k: string; h2: string; items: string[] };
  mech: { k: string; h2: string; lead: string; stat: string; note: string };
  seven: { k: string; h2: string; lead: string; lead2: string };
  attune: { k: string; h2: string; lead: string };
  langs: { k: string; h2: string; lead: string };
  modes: { k: string; items: { t: string; d: string }[] };
  answer: { k: string; h2: string; lead: string; chat: { who: 's' | 'u'; t: string }[] };
  mem: { k: string; h2: string; lead: string; items: { t: string; d: string }[]; pill: string };
  limits: { k: string; h2: string; lead: string };
  /**
   * The closing section. Deliberately carries no price: Apple owns the number,
   * it varies by storefront, and a stale figure on a page that leads to a paid
   * subscription is a real problem rather than a cosmetic one. We sell the
   * outcome and let the App Store state the price.
   */
  close: { k: string; h2: string; lead: string; gets: string[]; reassure: string };

  /** Short founder story on the landing page, linking through to /about. */
  founder: {
    k: string;
    h2: string;
    lead: string;
    quote: string;
    lead2: string;
    cta: string;
  };

  faq: { k: string; h2: string; items: { q: string; a: string }[] };

  /** The full founder story at /about. */
  about: {
    metaTitle: string;
    metaDesc: string;
    k: string;
    h1a: string;
    h1b: string;
    lead: string;
    beganK: string;
    began: string[];
    quote: string;
    people: { name: string; role: string; bio: string }[];
    believeK: string;
    beliefs: string[];
    closing: string[];
    outroA: string;
    outroB: string;
  };
};

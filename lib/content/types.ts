/**
 * The content hub.
 *
 * The landing page can compete for commercial mid-tail queries ("shadow work
 * app", "shadow self test"). It cannot compete for the head term "shadow work",
 * which is owned by long-form explanatory content. This is that content: one
 * pillar page on the head term, and a cluster of pages around it, each aimed at
 * a question people actually type and each linking back to the pillar and to
 * the product.
 *
 * English only, by design. Content SEO in eight languages is eight times the
 * writing and eight times the maintenance; the translated landing pages already
 * cover the commercial intent in those markets.
 */

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'quote'; text: string; cite?: string }
  | { kind: 'callout'; text: string };

export type Section = {
  h2: string;
  /** Used to build the on-page table of contents and the #anchor. */
  id: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  /** The <h1>. Written for a human. */
  title: string;
  /** The <title>. Written for the SERP, under ~60 chars where possible. */
  metaTitle: string;
  metaDescription: string;
  /** The query this page is built to answer. */
  targetQuery: string;
  /** One-line summary, used on the hub and in the article standfirst. */
  standfirst: string;
  published: string;
  updated: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  /** Slugs of sibling articles. Rendered as "keep reading" links. */
  related: string[];
};

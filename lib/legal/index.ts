import type { Locale } from '@/lib/i18n';
import { DEFAULT_LOCALE } from '@/lib/i18n';
import type { LegalDict } from './types';

import { en } from './en';
import { it } from './it';
import { ru } from './ru';
import { pt } from './pt';
import { fr } from './fr';
import { de } from './de';
import { es } from './es';
import { da } from './da';

export type { LegalDict, LegalDoc, EulaDoc, CreditsDoc, Block, LegalSection } from './types';

// Partial by design. A locale with no legal translation falls back to English,
// which is the binding version in every language anyway. A rushed legal
// translation is worse than an honest English one, so Swedish waits here until
// it has been translated properly.
const LEGAL: Partial<Record<Locale, LegalDict>> = { en, it, ru, pt, fr, de, es, da };

export function getLegal(locale: Locale): LegalDict {
  return LEGAL[locale] ?? (LEGAL[DEFAULT_LOCALE] as LegalDict);
}

/** True when this locale is reading the English legal text rather than its own. */
export function isLegalFallback(locale: Locale): boolean {
  return LEGAL[locale] === undefined;
}

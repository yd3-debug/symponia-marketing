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

const LEGAL: Record<Locale, LegalDict> = { en, it, ru, pt, fr, de, es, da };

export function getLegal(locale: Locale): LegalDict {
  return LEGAL[locale] ?? LEGAL[DEFAULT_LOCALE];
}

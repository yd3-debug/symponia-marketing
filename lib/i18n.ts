// Symponia marketing i18n.
//
// The app itself replies in any language (see "write in your own language,
// Symponia understands and replies in kind"), so the site speaks the same ones.
//
// Copy lives in lib/locales/<locale>.ts — one file per language, each of which
// must satisfy the Dict type in lib/locales/types.ts. English is the source of
// truth; change copy there first, then have a native speaker carry it across.
// Adding a key to Dict breaks the build until every locale supplies it, which
// is deliberate: a missing key should never silently fall back to English on a
// Danish page.

import type { Dict } from './locales/types';
import { en } from './locales/en';
import { it } from './locales/it';
import { ru } from './locales/ru';
import { pt } from './locales/pt';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { es } from './locales/es';
import { da } from './locales/da';
import { sv } from './locales/sv';

export type { Dict };

export const LOCALES = ['en', 'it', 'ru', 'pt', 'fr', 'de', 'es', 'da', 'sv'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
  sv: 'Svenska',
  en: 'English',
  it: 'Italiano',
  ru: 'Русский',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  da: 'Dansk',
};

export const DICTS: Record<Locale, Dict> = {
  sv, en, it, ru, pt, fr, de, es, da };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDict(locale: string): Dict {
  return isLocale(locale) ? DICTS[locale] : DICTS[DEFAULT_LOCALE];
}

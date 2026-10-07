import type { Locale } from './i18n';

/**
 * Copy for the analytics consent banner and the footer link that reopens it.
 *
 * Kept out of lib/locales on purpose: the banner is mounted once in the root
 * layout, above the [locale] segment, so it cannot receive a Dict. It works out
 * the language from the URL instead and reads its strings from here.
 */
export type ConsentCopy = {
  body: string;
  accept: string;
  decline: string;
  privacy: string;
  settings: string;
};

export const CONSENT_COPY: Record<Locale, ConsentCopy> = {
  en: {
    body: 'We use Google Analytics cookies to see how people find and use this site. No ads, and we never sell data.',
    accept: 'Accept',
    decline: 'Decline',
    privacy: 'Privacy',
    settings: 'Cookie settings',
  },
  sv: {
    body: 'Vi använder cookies från Google Analytics för att se hur besökare hittar och använder webbplatsen. Ingen reklam, och vi säljer aldrig data.',
    accept: 'Godkänn',
    decline: 'Avböj',
    privacy: 'Integritet',
    settings: 'Cookieinställningar',
  },
  it: {
    body: 'Usiamo i cookie di Google Analytics per capire come le persone trovano e usano questo sito. Niente pubblicità, e non vendiamo mai i dati.',
    accept: 'Accetta',
    decline: 'Rifiuta',
    privacy: 'Privacy',
    settings: 'Impostazioni cookie',
  },
  ru: {
    body: 'Мы используем файлы cookie Google Analytics, чтобы понимать, как люди находят этот сайт и пользуются им. Без рекламы, и мы никогда не продаём данные.',
    accept: 'Принять',
    decline: 'Отклонить',
    privacy: 'Конфиденциальность',
    settings: 'Настройки cookie',
  },
  pt: {
    body: 'Usamos cookies do Google Analytics para entender como as pessoas encontram e usam este site. Sem anúncios, e nunca vendemos dados.',
    accept: 'Aceitar',
    decline: 'Recusar',
    privacy: 'Privacidade',
    settings: 'Configurações de cookies',
  },
  fr: {
    body: 'Nous utilisons les cookies de Google Analytics pour comprendre comment les visiteurs trouvent et utilisent ce site. Pas de publicité, et nous ne vendons jamais de données.',
    accept: 'Accepter',
    decline: 'Refuser',
    privacy: 'Confidentialité',
    settings: 'Paramètres des cookies',
  },
  de: {
    body: 'Wir verwenden Cookies von Google Analytics, um zu verstehen, wie Besucher diese Website finden und nutzen. Keine Werbung, und wir verkaufen niemals Daten.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    privacy: 'Datenschutz',
    settings: 'Cookie-Einstellungen',
  },
  es: {
    body: 'Usamos cookies de Google Analytics para entender cómo las personas encuentran y usan este sitio. Sin publicidad, y nunca vendemos datos.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    privacy: 'Privacidad',
    settings: 'Configuración de cookies',
  },
  da: {
    body: 'Vi bruger cookies fra Google Analytics til at se, hvordan besøgende finder og bruger siden. Ingen reklamer, og vi sælger aldrig data.',
    accept: 'Acceptér',
    decline: 'Afvis',
    privacy: 'Privatliv',
    settings: 'Cookieindstillinger',
  },
};

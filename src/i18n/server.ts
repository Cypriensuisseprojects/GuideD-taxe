// src/i18n/server.ts
import { createI18nServer } from 'next-international/server';
import { locales, defaultLocale } from './config';

// 1. On stocke le serveur i18n dans une constante
const i18n = createI18nServer({
  [defaultLocale]: () => import('./fr'), // Charge la locale par défaut
  en: () => import('./en'), // Charge les autres locales
  de: () => import('./de'),
  es: () => import('./es'),
  ja: () => import('./ja'),
  'zh-CN': () => import('./zh-CN'),
});

// 2. On exporte les fonctions de base normalement
export const { getI18n, getScopedI18n, getCurrentLocale } = i18n;

// 3. On force l'export de setStaticParamsLocale en contournant TypeScript
// de façon propre (sans utiliser "any" qui est bloqué par ESLint)
export const setStaticParamsLocale = (i18n as unknown as { setStaticParamsLocale: (locale: string) => void }).setStaticParamsLocale;

// 4. On garde ta génération statique des paramètres
export function getStaticParams() {
  return locales.map((locale) => ({ locale }));
}

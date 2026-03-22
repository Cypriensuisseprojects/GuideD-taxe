// src/i18n/server.ts
import { createI18nServer } from 'next-international/server';
import { locales, defaultLocale } from './config';

export const { getI18n, getScopedI18n, getCurrentLocale } = createI18nServer({
  [defaultLocale]: () => import('./fr'), // Charge la locale par défaut
  en: () => import('./en'), // Charge les autres locales
  de: () => import('./de'),
  es: () => import('./es'),
  ja: () => import('./ja'),
  'zh-CN': () => import('./zh-CN'),
});

export function getStaticParams() {
  return locales.map((locale) => ({ locale }));
}

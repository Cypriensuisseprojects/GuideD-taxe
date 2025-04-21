// src/i18n/client.ts
import { createI18nClient } from 'next-international/client';
import { locales, defaultLocale } from './config';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = createI18nClient({
  [defaultLocale]: () => import('./fr'),
  en: () => import('./en'),
  de: () => import('./de'),
  es: () => import('./es'),
  ja: () => import('./ja'),
  'zh-CN': () => import('./zh-CN'),
});

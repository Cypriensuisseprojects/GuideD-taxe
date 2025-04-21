// src/middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/config'; // Ajuste le chemin si besoin

const I18nMiddleware = createI18nMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  // Optionnel: ne pas préfixer la langue par défaut dans l'URL
  // urlMappingStrategy: 'rewriteDefault',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  // Matcher toutes les routes sauf celles spécifiques à Next.js et les fichiers statiques
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};
// src/components/ClientLayout.tsx
'use client'; // Indispensable car il utilise un Provider client

import React from 'react';
import Header from './Header'; // Importer le Header (qui est aussi client)
import Footer from './Footer'; // Importer le Footer (qui est aussi client)
import { I18nProviderClient } from '@/i18n/client'; // Importer le Provider i18n pour les composants clients

// Définition des props pour ClientLayout
interface ClientLayoutProps {
  children: React.ReactNode; // Les pages (Server Components) à rendre
  locale: string;            // La locale actuelle passée depuis [locale]/layout.tsx
}

export default function ClientLayout({ children, locale }: ClientLayoutProps) {
  return (
    // Le Provider i18n wrappe les composants qui utiliseront les hooks i18n client
    // Il reçoit la locale actuelle pour savoir quel fichier de langue charger
    <I18nProviderClient locale={locale}>
      {/* Le Header et le Footer sont maintenant enfants du Provider
          et peuvent utiliser useI18n(), useCurrentLocale(), etc. */}
      <Header />
      {/* 'main' contient le contenu de la page (Server Component) */}
      <main>{children}</main>
      <Footer />
    </I18nProviderClient>
  );
}
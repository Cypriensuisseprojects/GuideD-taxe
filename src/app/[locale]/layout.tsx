// src/app/[locale]/layout.tsx (Version Complète Corrigée)
import React from 'react';
// Import pour générer les paramètres statiques des locales
import { getStaticParams } from '@/i18n/server';
// Importer le layout client qui contient Header, Footer, et le Provider I18n
import ClientLayout from '@/components/ClientLayout';

// Génère les paramètres statiques pour 'fr' et 'en' (ou autres locales définies)
export function generateStaticParams() {
  return getStaticParams();
}

// Interface définissant les props attendues par ce layout
interface LocaleLayoutProps {
  children: React.ReactNode;   // Le contenu de la page enfant
  params: { locale: string }; // Le paramètre 'locale' extrait de l'URL
}

// Le composant Layout pour chaque locale (Server Component)
export default function LocaleLayout({ children, params: { locale } }: Readonly<LocaleLayoutProps>) {
  // Extrait directement 'locale' des params dans la signature de la fonction

  // Rend le ClientLayout en lui passant la locale (string) et les enfants (page)
  // ClientLayout se chargera d'initialiser le contexte i18n pour les composants clients
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}

// Note : Les métadonnées spécifiques (titre, description) sont gérées
// dans le fichier page.tsx via la fonction generateMetadata.
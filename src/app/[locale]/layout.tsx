// src/app/[locale]/layout.tsx (CORRIGÉ pour Next.js 15+)
import React from 'react';
// Import pour générer les paramètres statiques des locales
import { getStaticParams } from '@/i18n/server'; // getCurrentLocale n'est plus nécessaire ici
// Importer le layout client
import ClientLayout from '@/components/ClientLayout';

// Génère les paramètres statiques pour les locales
export async function generateStaticParams() {
  // getStaticParams de next-international retourne un tableau { locale: string }[]
  const localesParams = await getStaticParams(); // Récupérer les locales
  return localesParams; // Retourner directement le tableau
}

// Interface définissant les props attendues
interface LocaleLayoutProps {
  children: React.ReactNode;
  // 'params' est maintenant traité comme une Promise ou un objet spécial par Next.js
  params: { locale: string };
}

// Rendre le composant ASYNCHRONE avec 'async'
export default async function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  // --- CORRECTION MAJEURE ---
  // Utiliser 'await' pour résoudre l'objet params avant d'accéder à 'locale'
  // Même si 'params' n'est pas une vraie Promise, c'est la syntaxe requise
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  // --- FIN CORRECTION ---


  // Rend le ClientLayout en lui passant la locale résolue
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}
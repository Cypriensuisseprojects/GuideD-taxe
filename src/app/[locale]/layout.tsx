// src/app/[locale]/layout.tsx (Avec Contournement ESLint pour 'any')
import React from 'react';
import { getStaticParams } from '@/i18n/server';
import ClientLayout from '@/components/ClientLayout';

export async function generateStaticParams() {
  const localesParams = await getStaticParams();
  return localesParams;
}

// Interface définissant les props
interface LocaleLayoutProps {
  children: React.ReactNode;
  // --- Contournement ESLint ---
  // Utiliser 'any' pour éviter l'erreur de type de Next.js 15
  // et désactiver la règle ESLint pour cette ligne spécifique.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

// Rendre le composant ASYNCHRONE
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) { // Retiré Readonly

  let locale: string = 'fr'; // Locale par défaut

  try {
    // Utiliser 'await' sur params comme requis
    const resolvedParams = await params;
    // Accéder à 'locale' après await
    const resolvedLocale = resolvedParams?.locale;

    // Vérifier si la locale est valide
    if (resolvedLocale && typeof resolvedLocale === 'string') {
      locale = resolvedLocale;
    } else {
      console.warn(`Locale invalide ou non trouvée (${resolvedLocale}), utilisation du fallback '${locale}'.`);
    }

  } catch (error) {
      console.error("Erreur lors de la résolution des paramètres locale:", error);
      console.warn(`Utilisation de la locale par défaut '${locale}' suite à une erreur.`);
  }

  // Passer la locale (string garantie) à ClientLayout
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}
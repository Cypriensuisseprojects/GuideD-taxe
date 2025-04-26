// src/app/[locale]/layout.tsx (Version Complète Corrigée pour Next.js 15+)
import React from 'react';
// Importer getStaticParams pour la génération statique des locales
import { getStaticParams } from '@/i18n/server'; // Assurez-vous que ce chemin est correct
// Importer le composant ClientLayout qui gère le rendu côté client (Header, Footer, Provider)
import ClientLayout from '@/components/ClientLayout'; // Assurez-vous que ce chemin est correct

// Fonction pour générer les paramètres statiques pour chaque langue (ex: /fr, /en)
// Recommandé pour SSG (Static Site Generation) et performances
export async function generateStaticParams() {
  // Récupère la liste des locales depuis la configuration i18n
  // getStaticParams de next-international retourne : Promise<{ locale: string }[]>
  const localesParams = await getStaticParams();
  return localesParams; // Retourne le tableau [{ locale: 'fr' }, { locale: 'en' }, ...]
}

// Interface définissant les props reçues par ce layout serveur
interface LocaleLayoutProps {
  children: React.ReactNode;   // Le contenu de la page enfant (ex: page.tsx)
  // 'params' est fourni par Next.js et contient les segments dynamiques de l'URL.
  // Dans Next.js 15+, il est traité comme une API asynchrone.
  // Utiliser 'any' est une solution rapide pour contourner les erreurs de type strictes,
  // l'idéal serait un type plus précis si fourni par Next.js ou la bibliothèque i18n.
  params: any;
}

// Le composant Layout spécifique à la locale (Server Component)
// Déclaré 'async' pour pouvoir utiliser 'await' sur les API dynamiques
export default async function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) { // Readonly est optionnel ici

  let locale: string | undefined;

  try {
    // --- CORRECTION MAJEURE : Utiliser 'await' sur params ---
    // C'est la manière requise par Next.js 15+ pour accéder aux données dynamiques
    const resolvedParams = await params;
    // Accéder à la propriété 'locale' APRÈS avoir résolu 'params'
    // Utiliser l'optional chaining par sécurité
    locale = resolvedParams?.locale;

    // Vérification simple si la locale est valide (optionnel mais recommandé)
    if (!locale || typeof locale !== 'string') {
        console.error("Locale invalide ou non trouvée dans les paramètres résolus:", resolvedParams);
        // Définir une locale par défaut comme fallback en cas d'erreur critique
        locale = 'fr'; // Ou votre locale par défaut définie dans i18n/config.ts
    }

  } catch (error) {
      console.error("Erreur lors de la résolution des paramètres ou de l'accès à la locale:", error);
      // Définir une locale par défaut en cas d'erreur inattendue
      locale = 'fr'; // Fallback
  }


  // Rendre le ClientLayout en lui passant la locale résolue (string)
  // Le ClientLayout contient le Header, Footer, et le I18nProviderClient
  return (
    // Assurer qu'on passe une string valide à ClientLayout, avec un fallback
    <ClientLayout locale={locale ?? 'fr'}>
      {children} {/* La page enfant (ex: page.tsx) sera rendue ici */}
    </ClientLayout>
  );
}

// Note : Les métadonnées spécifiques à la langue (titre, description) sont gérées
// dans le fichier page.tsx correspondant via la fonction generateMetadata.
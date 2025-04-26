// src/app/[locale]/layout.tsx (Version Complète avec Typage Précis pour params)
import React from 'react';
// Importer getStaticParams pour la génération statique des locales
import { getStaticParams } from '@/i18n/server'; // Assurez-vous que ce chemin est correct
// Importer le composant ClientLayout qui gère le rendu côté client (Header, Footer, Provider)
import ClientLayout from '@/components/ClientLayout'; // Assurez-vous que ce chemin est correct

// Fonction pour générer les paramètres statiques pour chaque langue (ex: /fr, /en)
export async function generateStaticParams() {
  const localesParams = await getStaticParams();
  return localesParams; // Retourne [{ locale: 'fr' }, { locale: 'en' }, ...]
}

// Interface définissant les props attendues par ce layout
interface LocaleLayoutProps {
  children: React.ReactNode;   // Le contenu de la page enfant
  // --- CORRECTION ESLint : Remplacer 'any' par un type plus précis ---
  // Indique que params est un objet qui peut contenir une clé 'locale' optionnelle de type string.
  params: { locale?: string };
  // Alternative possible si locale pouvait être un tableau (moins probable ici) :
  // params: { locale?: string | string[] };
}

// Le composant Layout spécifique à la locale (Server Component)
// Déclaré 'async' pour pouvoir utiliser 'await'
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) { // Retiré Readonly

  let locale: string = 'fr'; // Initialiser avec la locale par défaut

  try {
    // Utiliser 'await' sur params comme requis par Next.js 15+
    // Même si le type est { locale?: string }, l'await est pour la mécanique Next.js
    const resolvedParams = await params;

    // Accéder à 'locale' après await et vérifier si c'est une string valide
    if (resolvedParams?.locale && typeof resolvedParams.locale === 'string') {
      locale = resolvedParams.locale; // Assigner la locale trouvée
    } else {
      console.warn(`Locale invalide ou non trouvée dans les params (${resolvedParams?.locale}), utilisation du fallback '${locale}'.`);
    }

  } catch (error) {
      console.error("Erreur lors de la résolution des paramètres pour la locale:", error);
      // 'locale' reste à sa valeur par défaut 'fr' en cas d'erreur
      console.warn(`Utilisation de la locale par défaut '${locale}' suite à une erreur.`);
  }

  // Rendre le ClientLayout en lui passant la locale déterminée (garantie d'être une string)
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}

// Note : Les métadonnées spécifiques (titre, description) sont gérées
// dans le fichier page.tsx via la fonction generateMetadata.
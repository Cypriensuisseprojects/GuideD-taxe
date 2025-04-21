// src/app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // Importer les polices
import "./globals.css"; // Importer les styles globaux
import { ThemeProvider } from "@/components/ThemeProvider"; // Importer le ThemeProvider

// Configurer les polices avec next/font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair', // Variable CSS pour les titres
  display: 'swap',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'], // Charger les graisses nécessaires
  variable: '--font-lato', // Variable CSS pour le corps
  display: 'swap',
});

// Métadonnées de base (peuvent être surchargées par les pages/layouts enfants)
export const metadata: Metadata = {
  title: "Guide Détaxe Sézane", // Titre par défaut
  description: "Votre guide simplifié pour la détaxe de vos achats Sézane.", // Description par défaut
  // Tu peux ajouter d'autres métadonnées globales ici si besoin
  // themeColor: [ // Exemple pour next-themes
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
};

// Définition des props du RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    // Ajouter suppressHydrationWarning pour next-themes
    // Utiliser les variables CSS des polices dans className
    // La langue par défaut ici (fr) sera probablement surchargée par le layout [locale],
    // mais il est bon d'en avoir une par défaut.
    <html lang="fr" suppressHydrationWarning className={`${playfair.variable} ${lato.variable}`}>
      <body>
        {/* ThemeProvider wrappe tout pour gérer le light/dark mode */}
        <ThemeProvider
          attribute="class" // Applique le thème via une classe sur <html> (ex: <html class="dark">)
          defaultTheme="system" // Options: 'light', 'dark', 'system'
          enableSystem // Permet de suivre la préférence du système d'exploitation
          disableTransitionOnChange // Optionnel: peut améliorer l'expérience au changement de thème
        >
          {/* Les layouts et pages enfants (y compris [locale]/layout.tsx) seront rendus ici */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
// src/components/Header.tsx (Version Complète Finale)
'use client'; // Indique que c'est un Client Component

import Link from 'next/link'; // Pour la navigation interne Next.js
import Image from 'next/image'; // Pour afficher les images optimisées (drapeaux)
import { useTheme } from 'next-themes'; // Hook pour interagir avec le thème
import { useState, useEffect } from 'react'; // Hooks React pour gérer l'état monté
import { FiSun, FiMoon } from 'react-icons/fi'; // Icônes pour le toggle de thème (s'assurer que react-icons est installé)
import styles from './Header.module.css'; // Import des styles CSS Modules
import { useI18n, useChangeLocale, useCurrentLocale } from '@/i18n/client'; // Hooks de next-international pour le client
import { locales } from '@/i18n/config'; // Liste des langues supportées (ex: ['fr', 'en'])

const Header = () => {
  // Récupération des fonctions et valeurs des hooks i18n
  const t = useI18n(); // Fonction de traduction
  const changeLocale = useChangeLocale(); // Fonction pour changer la langue
  const currentLocale = useCurrentLocale(); // Langue actuellement affichée (ex: 'fr')

  // Récupération du thème actuel et de la fonction pour le changer
  const { theme, setTheme } = useTheme();

  // État pour savoir si le composant est monté côté client
  // Aide à prévenir les erreurs d'hydratation avec le thème et le rendu initial
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true); // Mettre à true une fois monté côté client
  }, []);

  // Mapping des codes de langue vers les chemins des fichiers SVG des drapeaux
  const flagSvgs: { [key: string]: string } = {
    fr: '/assets/icons/fr-flag.svg', // Assurez-vous que ce chemin est correct
    en: '/assets/icons/en-flag.svg',
    de: '/assets/icons/de-flag.svg',
    es: '/assets/icons/es-flag.svg', // Assurez-vous que ce chemin est correct
    ja: '/assets/icons/jp-flag.svg',
    'zh-CN': '/assets/icons/cn-flag.svg', // Exemple (zh pour Chinois, cn pour drapeau Chine)
    // Ajouter d'autres langues ici si nécessaire
  };

  // Pendant le rendu serveur ou avant le montage client, afficher un placeholder
  // pour éviter les erreurs d'hydratation et les décalages de mise en page (Layout Shift)
  if (!mounted) {
    return (
      <header className={styles.header}>
        {/* Placeholder pour le logo */}
        <div className={styles.logo}>
          {/* Utiliser un lien vers la locale par défaut ou une locale fixe */}
          <Link href="/fr">Guide Détaxe Sézane</Link>
          <span className={styles.logoSubtitle}>Récupérez la TVA sur vos achats</span>
        </div>
        {/* Placeholder pour la navigation */}
        <nav className={styles.nav}>
          <Link href="/fr/#eligibilite">Éligibilité</Link>
          <Link href="/fr/#etapes">Étapes</Link>
          <Link href="/fr/#ou-valider">Carte</Link>
          <Link href="/fr/#faq">FAQ</Link>
        </nav>
        {/* Placeholder qui réserve l'espace correct pour les contrôles futurs */}
        <div className={styles.controlsPlaceholder} style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '80px', height: '24px', visibility: 'hidden' }}>
           {/* Contenu invisible mais qui prend la bonne taille */}
           <button style={{width: '32px', height:'32px'}}></button>
           <div style={{display:'flex', gap:'8px'}}>
               <div style={{width:'28px', height:'22px'}}></div>
               <div style={{width:'28px', height:'22px'}}></div>
           </div>
        </div>
      </header>
    );
  }

  // Rendu normal du Header une fois monté côté client
  return (
    <header className={styles.header}>
      {/* Logo cliquable vers l'accueil de la langue actuelle */}
      <div className={styles.logo}>
        <Link href={`/${currentLocale}`}>
          {/* Traduire le titre du logo (s'assurer que 'header.logo_title' existe dans fr.ts/en.ts) */}
          {t('header.logo_title')}
        </Link>
        {/* Afficher le sous-titre traduit */}
        <span className={styles.logoSubtitle}>{t('header.logo_subtitle')}</span>
      </div>

      {/* Navigation principale avec liens traduits pointant vers les ancres */}
      <nav className={styles.nav}>
        <Link href={`/${currentLocale}/#eligibilite`}>{t('header.eligibility')}</Link>
        <Link href={`/${currentLocale}/#etapes`}>{t('header.steps')}</Link>
        <Link href={`/${currentLocale}/#ou-valider`}>{t('header.map')}</Link>
        <Link href={`/${currentLocale}/#faq`}>{t('header.faq')}</Link>
      </nav>

      {/* Conteneur pour les boutons de contrôle (thème et langue) */}
      <div className={styles.controlsWrapper}>
        {/* Bouton pour basculer entre le thème clair et sombre */}
        <button
          aria-label={t('header.theme_toggle_aria', { theme: theme === 'dark' ? t('header.theme_light') : t('header.theme_dark') })} // Pour accessibilité (nécessite clés 'theme_toggle_aria', 'theme_light', 'theme_dark' dans i18n)
          title={t('header.theme_toggle_aria', { theme: theme === 'dark' ? t('header.theme_light') : t('header.theme_dark') })} // Tooltip
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={styles.themeToggle} // Appliquer le style CSS
        >
          {/* Afficher l'icône Soleil en mode sombre, Lune en mode clair */}
          {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        {/* Conteneur pour les boutons de sélection de langue (drapeaux) */}
        <div className={styles.langSelectorFlags}>
          {/* Boucler sur toutes les langues définies dans i18n/config.ts */}
          {locales.map((lang) => (
            <button
              key={lang} // Clé unique pour chaque bouton
              onClick={() => changeLocale(lang)} // Appeler la fonction pour changer la langue
              disabled={currentLocale === lang} // Désactiver le bouton si c'est la langue actuelle
              className={`${styles.flagButton} ${currentLocale === lang ? styles.activeFlag : ''}`} // Styles conditionnels
              aria-label={t('header.change_lang_aria', { lang: lang === 'fr' ? 'Français' : 'English' })} // Pour accessibilité (nécessite clé 'change_lang_aria')
              title={t('header.change_lang_aria', { lang: lang === 'fr' ? 'Français' : 'English' })} // Tooltip
            >
              {/* Afficher l'image du drapeau si le chemin existe */}
              {flagSvgs[lang] ? (
                <Image
                  src={flagSvgs[lang]}
                  alt={t('header.flag_alt', { lang: lang.toUpperCase() })} // Texte alternatif traduit (nécessite clé 'flag_alt')
                  width={24} // Largeur de l'image
                  height={18} // Hauteur de l'image (maintenir ratio)
                  className={styles.flagIcon} // Style pour l'icône
                  priority // Indiquer à Next.js de charger ces images en priorité (car dans le header)
                />
              ) : (
                // Afficher le code langue en majuscules si l'image manque
                lang.toUpperCase()
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
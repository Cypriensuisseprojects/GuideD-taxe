// src/components/Footer.tsx
'use client'; // Garder comme Client Component pour utiliser les hooks

import Link from 'next/link';
import styles from './Footer.module.css';
import { useI18n, useCurrentLocale } from '@/i18n/client'; // Importer les hooks nécessaires

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useI18n(); // Récupérer la fonction de traduction
  const locale = useCurrentLocale(); // Récupérer la locale actuelle pour le lien Disclaimer

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {/* Lien vers la page disclaimer dans la bonne langue */}
        <Link href={`/${locale}/disclaimer`}>{t('footer.disclaimer')}</Link>
      </div>
      <div className={styles.copyright}>
        {/* Afficher la première partie du texte */}
        {t('footer.copyright_start', { year: currentYear })}

        {/* Créer le lien cliquable vers Instagram */}
        <a
          href="https://www.instagram.com/cypriensuisse/"
          target="_blank" // Ouvre dans un nouvel onglet
          rel="noopener noreferrer" // Sécurité pour les liens externes
          className={styles.footerLink} // Optionnel: ajouter une classe pour style spécifique
        >
          {/* Afficher le texte du lien traduit */}
          {t('footer.copyright_link_text')}
        </a>

        {/* Afficher la dernière partie du texte */}
        {t('footer.copyright_end')}
      </div>
    </footer>
  );
};

export default Footer;
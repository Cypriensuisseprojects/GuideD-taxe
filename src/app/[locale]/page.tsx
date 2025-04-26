// src/app/[locale]/page.tsx (Version Complète pour i18n Simplifié)
import React from 'react';
// Utiliser getI18n global et getScopedI18n seulement pour metadata
import { getI18n, getScopedI18n } from '@/i18n/server';
import styles from './page.module.css'; // Styles spécifiques

// --- IMPORTER LES ICÔNES SVG ---
import IconResidence from '@/components/icons/map-pin.svg';
import IconSejour from '@/components/icons/calendar.svg';
import IconAge from '@/components/icons/user.svg';
import IconAchat from '@/components/icons/shopping-cart.svg';
import IconUsage from '@/components/icons/briefcase.svg';
import IconCheck from '@/components/icons/check-square.svg';
import IconCross from '@/components/icons/x-square.svg';
import IconAirport from '@/components/icons/send.svg';
import IconTrain from '@/components/icons/train.svg';
import IconRoad from '@/components/icons/truck.svg';
import IconPort from '@/components/icons/anchor.svg';

// --- Types et Interfaces ---
interface Props {
   params: { locale: string };
}

// --- Helpers de Rendu (Simplifiés - sans RenderHTML) ---
const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
   <a href={href} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>{children}</a>
);
const InternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
   <a href={href} className={styles.internalLink}>{children}</a>
);

// Helper pour rendre texte avec liens internes [texte](#ancre)
const renderTextWithInternalLinks = (textInput: unknown) => {
   if (typeof textInput !== 'string' || !textInput) return textInput as React.ReactNode;
   const text = textInput;
   const parts = text.split(/(\[.*?\]\(#.*?\))/g);
   return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\(#(.*?)\)/);
      if (match) {
         const linkText = match[1];
         const linkHref = `#${match[2]}`;
         return <InternalLink key={index} href={linkHref}>{linkText}</InternalLink>;
      }
      return part;
   });
};


// --- Composant Page Principal ---
export default async function Home({ params: _params }: Props) {
   const t = await getI18n(); // Utiliser t() global
   const siteUpdateDate = "25/04/2025"; // TODO: Mettre à jour

   // --- Helper Disclaimer ---
   const renderDisclaimer = () => {
      const text = t('disclaimer.texte');
      if (!text || typeof text !== 'string') return null;
      const parts = text.split(/(\[.*?\]\(.*?\))/g);
      return parts.map((part, index) => {
         const match = part.match(/\[(.*?)\]\((.*?)\)/);
         if (match) {
            const linkText = match[1];
            const linkId = match[2];
            if (linkId === 'lien douane.gouv.fr') {
               return <ExternalLink key={index} href="https://www.douane.gouv.fr/fiche/la-detaxe-en-france-pour-les-touristes-pablo">{linkText}</ExternalLink>;
            } else if (linkId === 'lien globalblue.com') {
               return <ExternalLink key={index} href="https://www.globalblue.com/">{linkText}</ExternalLink>;
            } else if (linkId === 'Date MAJ Site') {
               return <span key={index}>{siteUpdateDate}</span>;
            }
            return linkText;
         }
         return part;
      });
   };

   // --- Rendu JSX de la Page ---
   return (
      <div>
         {/* --- SECTION ACCUEIL --- */}
         <section id="accueil" style={{ paddingTop: 'var(--spacing-unit)' }}>
            <div className={styles.accueilColumns}>
               <div className={styles.accueilColumn}>
                  <h2>{t('accueil.col1_titre')}</h2>
                  <p>{t('accueil.col1_texte')}</p>
               </div>
               <div className={styles.accueilColumn}>
                  <h3>{t('accueil.col2_titre')}</h3>
                  <ul className={styles.accueilNavListHorizontal}> {/* Utilise le style pour cartes horizontales si défini */}
                     <li><a href="#eligibilite" className={styles.navCard}><strong>{t('accueil.lien_nav_1_titre')}</strong><small>{t('accueil.lien_nav_1_texte')}</small></a></li>
                     <li><a href="#etapes" className={styles.navCard}><strong>{t('accueil.lien_nav_2_titre')}</strong><small>{t('accueil.lien_nav_2_texte')}</small></a></li>
                     <li><a href="#ou-valider" className={styles.navCard}><strong>{t('accueil.lien_nav_3_titre')}</strong><small>{t('accueil.lien_nav_3_texte')}</small></a></li>
                     <li><a href="#faq" className={styles.navCard}><strong>{t('accueil.lien_nav_4_titre')}</strong><small>{t('accueil.lien_nav_4_texte')}</small></a></li>
                  </ul>
               </div>
            </div>
            <p className={styles.noteLangue}>{t('accueil.note_langue')}</p>
         </section>

         {/* --- SECTION ÉLIGIBILITÉ --- */}
         <section id="eligibilite" className={styles.pageSection}>
            <h2>{t('eligibilite.titre')}</h2>
            {/* Affichage direct du texte, sans RenderHTML */}
            <p>{t('eligibilite.intro')}</p>
            <div className={styles.checklistContainer}>
               {/* Groupe Voyageur */}
               <div className={styles.checklistGroup}>
                  <h3 className={styles.checklistSubtitle}>{t('eligibilite.voyageur_titre')}</h3>
                  <div className={styles.checklistItem}>
                     <span className={styles.checklistIcon}><IconResidence /></span>
                     <div className={styles.checklistItemText}>
                        <p>{t('eligibilite.residence.condition')}</p>
                        <span className={styles.checklistNote}>{t('eligibilite.residence.note')}</span>
                     </div>
                  </div>
                  <div className={styles.checklistItem}>
                     <span className={styles.checklistIcon}><IconSejour /></span>
                     <div className={styles.checklistItemText}>
                        <p>{t('eligibilite.sejour.condition')}</p>
                     </div>
                  </div>
                  <div className={styles.checklistItem}>
                     <span className={styles.checklistIcon}><IconAge /></span>
                     <div className={styles.checklistItemText}>
                        <p>{t('eligibilite.age.condition')}</p>
                     </div>
                  </div>
               </div>
               {/* Groupe Achats */}
               <div className={styles.checklistGroup}>
                  <h3 className={styles.checklistSubtitle}>{t('eligibilite.achats_titre')}</h3>
                  <div className={styles.checklistItem}>
                     <span className={styles.checklistIcon}><IconAchat /></span>
                     <div className={styles.checklistItemText}>
                        <p>{t('eligibilite.montant.condition')}</p>
                        <span className={styles.checklistNote}>{t('eligibilite.montant.note_sezane')}</span>
                     </div>
                  </div>
                  <div className={styles.checklistItem}>
                     <span className={styles.checklistIcon}><IconUsage /></span>
                     <div className={styles.checklistItemText}>
                        <p>{t('eligibilite.usage.condition')}</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Partie Produits */}
            <div className={styles.produitsInfo}>
               <h4>{t('eligibilite.produits.titre')}</h4>
               <p>{t('eligibilite.produits.eligibles')}</p>
               <h5>{t('eligibilite.produits.exclus_titre')}</h5>
               {/* Affichage individuel des clés d'exclusion */}
               <ul className={styles.exclusionList}>
                  <li><span className={styles.iconCrossSvg}><IconCross /></span> {t('eligibilite.produits.exclus_1')}</li>
                  <li><span className={styles.iconCrossSvg}><IconCross /></span> {t('eligibilite.produits.exclus_2')}</li>
                  <li><span className={styles.iconCrossSvg}><IconCross /></span> {t('eligibilite.produits.exclus_3')}</li>
               </ul>
               <span className={styles.note}>
                  (<ExternalLink href="https://www.douane.gouv.fr/demarche/vous-achetez-des-marchandises-en-detaxe">
                     {t('eligibilite.produits.lien_douanes_texte')}
                  </ExternalLink>)
               </span>
            </div>
         </section>

         {/* --- SECTION ÉTAPES --- */}
         <section id="etapes" className={styles.pageSection}>
            <h2>{t('etapes.titre')}</h2>
            <p>{t('etapes.intro')}</p>
            {/* Etape 1 */}
            <h3>{t('etapes.etape1.titre')}</h3>
            <h4>{t('etapes.etape1.paiement_titre')}</h4>
            <p>{t('etapes.etape1.paiement_sezane')}</p>
            <p>{t('etapes.etape1.paiement_passeport')}</p>
            <h4>{t('etapes.etape1.bve_titre')}</h4>
            <p>{t('etapes.etape1.bve_sezane')}</p>
            <p>{t('etapes.etape1.bve_verifier')}</p>
            <p>{t('etapes.etape1.bve_garder')}</p>
            {/* Etape 2 */}
            <h3>{t('etapes.etape2.titre')}</h3>
            <h4>{t('etapes.etape2.temps_titre')}</h4>
            <p>{t('etapes.etape2.temps_texte')}</p>
            <h4>{t('etapes.etape2.documents_titre')}</h4>
            {/* Affichage individuel des documents */}
            <ul className={styles.nestedList}>
               <li>✅ {t('etapes.etape2.doc_1')}</li>
               <li>✅ {t('etapes.etape2.doc_2')}</li>
               <li>✅ {t('etapes.etape2.doc_3')}</li>
               <li>✅ {t('etapes.etape2.doc_4')}</li>
            </ul>
            <h4>{t('etapes.etape2.validation_titre')}</h4>
            <p>{t('etapes.etape2.validation_moment')}</p>
            {/* Utiliser le helper pour le lien interne */}
            <p>{renderTextWithInternalLinks(t('etapes.etape2.validation_borne'))}</p>
            <h4>{t('etapes.etape2.validation_action')}</h4>
            <p>{t('etapes.etape2.validation_scan')}</p>
            {/* Utiliser les icônes SVG Check et Cross */}
            <p><span className={styles.iconCheckSvg}><IconCheck /></span> {t('etapes.etape2.validation_ok').replace(/^✅\s*/, '')}</p>
            <p><span className={styles.iconCrossSvg}><IconCross /></span> {t('etapes.etape2.validation_ko').replace(/^❌\s*/, '')}</p>
            {/* Etape 3 */}
            <h3>{t('etapes.etape3.titre')}</h3>
            <p>{t('etapes.etape3.intro')}</p>
            <h4>{t('etapes.etape3.moyen_titre')}</h4>
            <p>{t('etapes.etape3.moyen_cb')}</p>
            <p>{t('etapes.etape3.moyen_cash')}</p>
            <h4>{t('etapes.etape3.montant_titre')}</h4>
            <p>{t('etapes.etape3.montant_texte')}</p>
            <p>{t('etapes.etape3.fin')}</p>
         </section>

         {/* --- SECTION OU VALIDER --- */}
         <section id="ou-valider" className={styles.pageSection}>
            <h2>{t('ou_valider.titre')}</h2>
            <p>{t('ou_valider.intro')}</p>
            <div className={styles.highlightBox}>
               <h3>{t('ou_valider.depart_hors_france.titre')}</h3>
               <p>{t('ou_valider.depart_hors_france.texte')}</p>
            </div>
            <h3>{t('ou_valider.depart_france.titre')}</h3>
            <p>{t('ou_valider.depart_france.intro')}</p>
            <p><em>{t('ou_valider.depart_france.comment_trouver')}</em></p>

            <div className={styles.accordionContainer}>
               {/* --- Accordéon Aéroports (Corrigé) --- */}
               <details className={styles.accordionItem}>
                  <summary className={styles.accordionTitle}>
                     <span className={styles.accordionIcon}><IconAirport /></span>
                     {t('ou_valider.aeroports.titre')}
                  </summary>
                  <div className={styles.accordionContent}>
                     {/* Récupérer chaque texte individuellement */}
                     <ul className={styles.nestedList}>
                        <li>{t('ou_valider.aeroports.cdg')}</li>
                        <li>{t('ou_valider.aeroports.ory')}</li>
                        <li>{t('ou_valider.aeroports.gva_fr')}</li>
                        <li>{t('ou_valider.aeroports.autres')}</li>
                     </ul>
                  </div>
               </details>

               {/* --- Accordéon Gares (Corrigé) --- */}
               <details className={styles.accordionItem}>
                  <summary className={styles.accordionTitle}>
                     <span className={styles.accordionIcon}><IconTrain /></span>
                     {t('ou_valider.gares.titre')}
                  </summary>
                  <div className={styles.accordionContent}>
                     {/* Récupérer chaque texte individuellement */}
                     <ul className={styles.nestedList}>
                        <li>{t('ou_valider.gares.eurostar')}</li>
                        <li>{t('ou_valider.gares.geneve_cornavin')}</li>
                     </ul>
                  </div>
               </details>

               {/* --- Accordéon Frontières Routières (Corrigé) --- */}
               <details className={styles.accordionItem}>
                  <summary className={styles.accordionTitle}>
                     <span className={styles.accordionIcon}><IconRoad /></span>
                     {t('ou_valider.frontieres_routieres.titre')}
                  </summary>
                  <div className={styles.accordionContent}>
                     {/* Récupérer chaque texte individuellement */}
                     <ul className={styles.nestedList}>
                        <li>{t('ou_valider.frontieres_routieres.suisse')}</li>
                        <li>{t('ou_valider.frontieres_routieres.autres_pays')}</li>
                     </ul>
                  </div>
               </details>

               {/* --- Accordéon Ports (Corrigé) --- */}
               <details className={styles.accordionItem}>
                  <summary className={styles.accordionTitle}>
                     <span className={styles.accordionIcon}><IconPort /></span>
                     {t('ou_valider.ports.titre')}
                  </summary>
                  <div className={styles.accordionContent}>
                     {/* Récupérer chaque texte individuellement */}
                     <ul className={styles.nestedList}>
                        <li>{t('ou_valider.ports.exemples')}</li>
                     </ul>
                  </div>
               </details>
            </div> {/* Fin accordionContainer */}

            {/* Conseil Final */}
            <div className={styles.finalAdviceBox}>
               <h4>{t('ou_valider.conseil_final.titre')}</h4>
               <p>{t('ou_valider.conseil_final.texte')}</p>
            </div>
         </section>
         {/* --- FIN SECTION OU VALIDER --- */}

         {/* --- SECTION FAQ (Affichage Explicite par Catégorie) --- */}
         <section id="faq" className={styles.pageSection}>
            <h2>{t('faq.titre')}</h2>
            <p>{t('faq.intro')}</p>

            {/* Catégorie: Éligibilité */}
            <div className={styles.faqCategory}>
               <h3 className={styles.faqCategoryTitle}>{t('faq.categories.eligibility')}</h3>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q1_q')}</summary>
                  <p>{t('faq.q1_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q2_q')}</summary>
                  <p>{t('faq.q2_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q3_q')}</summary>
                  <p>{t('faq.q3_a')}</p>
               </details>
            </div>

            {/* Catégorie: Achat & Formulaire */}
            <div className={styles.faqCategory}>
               <h3 className={styles.faqCategoryTitle}>{t('faq.categories.purchase')}</h3>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q4_q')}</summary>
                  <p>{t('faq.q4_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q5_q')}</summary>
                  <p>{t('faq.q5_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q6_q')}</summary>
                  <p>{t('faq.q6_a')}</p>
               </details>
            </div>

            {/* Catégorie: Départ & Validation */}
            <div className={styles.faqCategory}>
               <h3 className={styles.faqCategoryTitle}>{t('faq.categories.departure')}</h3>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q7_q')}</summary>
                  <p>{t('faq.q7_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q8_q')}</summary>
                  {/* Utiliser le helper pour le lien interne dans la réponse Q8 */}
                  <p>{renderTextWithInternalLinks(t('faq.q8_a'))}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q9_q')}</summary>
                  <p>{t('faq.q9_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q15_q')}</summary>
                  <p>{t('faq.q15_a')}</p>
               </details>
            </div>

            {/* Catégorie: Remboursement */}
            <div className={styles.faqCategory}>
               <h3 className={styles.faqCategoryTitle}>{t('faq.categories.refund')}</h3>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q11_q')}</summary>
                  <p>{t('faq.q11_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q12_q')}</summary>
                  <p>{t('faq.q12_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q13_q')}</summary>
                  <p>{t('faq.q13_a')}</p>
               </details>
            </div>

            {/* Catégorie: Problèmes & Cas Particuliers */}
            <div className={styles.faqCategory}>
               <h3 className={styles.faqCategoryTitle}>{t('faq.categories.problems')}</h3>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q10_q')}</summary>
                  <p>{t('faq.q10_a')}</p>
               </details>
               <details className={styles.faqItem}>
                  <summary>{t('faq.q14_q')}</summary>
                  <p>{t('faq.q14_a')}</p>
               </details>
            </div>

         </section> {/* Fin Section FAQ */}

         {/* --- DISCLAIMER --- */}
         <section id="disclaimer" className={styles.pageSection} style={{ borderTop: 'none', marginTop: 'calc(var(--spacing-unit) * 4)' }}>
            <p className={styles.note} style={{ textAlign: 'center', fontSize: '0.75rem' }}>
               {renderDisclaimer()} {/* Utilise le helper */}
            </p>
         </section>
      </div>
   );
}

// --- GENERATE METADATA ---
export async function generateMetadata({ params: _params }: Props) {
   try {
      const metadataContent = await getScopedI18n('metadata');
      return {
         title: metadataContent('title'),
         description: metadataContent('description'),
      };
   } catch (error) {
      console.error("Erreur chargement metadata i18n:", error);
      return { title: "Guide Détaxe Sézane", description: "Guide détaxe" };
   }
}
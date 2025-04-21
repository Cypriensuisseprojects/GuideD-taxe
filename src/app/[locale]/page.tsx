// src/app/[locale]/page.tsx (Version Révisée)
import React from 'react';
import { getI18n, getScopedI18n } from '@/i18n/server';
import styles from './page.module.css';
import Link from 'next/link'; // Importé mais utilisé uniquement pour liens externes via helper

// --- Types et Interfaces ---
interface Props {
  params: { locale: string };
}
// Typage plus strict pour les clés FAQ attendues
type FaqQuestionKey = `q${number}_q`;
type FaqAnswerKey = `q${number}_a`;

// --- Helpers de Rendu ---
const RenderHTML = ({ htmlString }: { htmlString: string | undefined }) => {
  if (!htmlString) return null;
  return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>{children}</a>
);
const InternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className={styles.internalLink}>{children}</a>
);

// Helper pour liens internes dans le texte (plus robuste)
const renderTextWithInternalLinks = (textInput: unknown) => {
    if (typeof textInput !== 'string' || !textInput) {
         return textInput as React.ReactNode;
    }
    const text = textInput;
    const parts = text.split(/(\[.*?\]\(#.*?\))/g);
    return parts.map((part, index) => {
        const match = part.match(/\[(.*?)\]\(#(.*?)\)/);
        if (match) {
            const linkText = match[1];
            const linkHref = `#${match[2]}`;
            // Utiliser InternalLink helper si défini, sinon <a> simple
            return <InternalLink key={index} href={linkHref}>{linkText}</InternalLink>;
        }
        return part;
    });
};


// --- Composant Page ---
export default async function Home({ params }: Props) {
  // Charger les scopes spécifiques
  const t = await getI18n(); // Utiliser t global
  const accueilContent = await getScopedI18n('accueil');
  const eligibiliteContent = await getScopedI18n('eligibilite');
  const etapesContent = await getScopedI18n('etapes');
  const ouValiderContent = await getScopedI18n('ou_valider');
  const faqContent = await getScopedI18n('faq');
  const disclaimerContent = await getScopedI18n('disclaimer');

  const siteUpdateDate = "[21/04/2025]"; // TODO: Mettre à jour la date

  // --- Récupérer et vérifier les Tableaux ---
  const exclusListe = eligibiliteContent('produits.exclus_liste');
  const documentsListe = etapesContent('etape2.documents_liste');
  const isExclusListeArray = Array.isArray(exclusListe);
  const isDocumentsListeArray = Array.isArray(documentsListe);

  // --- Helper Disclaimer (local à Home car utilise disclaimerContent) ---
   const renderDisclaimer = () => {
       const text = disclaimerContent('texte'); // Clé simplifiée dans ma version précédente
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
           }
           return part;
       });
   };

   // --- Fonction Helper locale pour la FAQ (par catégorie, lit structure i18n simple) ---
   const renderFaq = () => {
      // Définir la structure des catégories et les numéros de question associés
      const categoriesMap: { key: keyof typeof faqCategoryTitles; titleKey: string; questions: number[] }[] = [
          { key: 'eligibility', titleKey: 'faq.categories.eligibility', questions: [1, 2, 3] },
          { key: 'purchase', titleKey: 'faq.categories.purchase', questions: [4, 5, 6] },
          { key: 'departure', titleKey: 'faq.categories.departure', questions: [7, 8, 9, 15] },
          { key: 'refund', titleKey: 'faq.categories.refund', questions: [11, 12, 13] },
          { key: 'problems', titleKey: 'faq.categories.problems', questions: [10, 14] }
      ];

       // Typage strict pour les clés de titre de catégorie
       type FaqCategoryTitleKey = `faq.categories.${keyof typeof categoriesMap[0]['key']}`;


      return categoriesMap.map(category => {
          // Récupérer le titre traduit de la catégorie
          const categoryTitle = t(category.titleKey as FaqCategoryTitleKey, {}); // Utiliser le type strict si possible

           // Vérifier si le titre existe
           if (!categoryTitle || typeof categoryTitle !== 'string' || categoryTitle === category.titleKey) {
                console.warn(`Titre de catégorie FAQ manquant ou invalide: ${category.titleKey}`);
                return null;
           }

          return (
              <div key={category.key} className={styles.faqCategory}>
                  <h3 className={styles.faqCategoryTitle}>{categoryTitle}</h3>
                  {/* Mapper sur les numéros de question pour cette catégorie */}
                  {category.questions.map(num => {
                      const questionKey = `faq.q${num}_q` as FaqQuestionKey;
                      const answerKey = `faq.q${num}_a` as FaqAnswerKey;
                      // Utiliser t() global
                      const questionText = t(questionKey, {});
                      const answerText = t(answerKey, {});

                      // Vérifier si question/réponse existent
                      if (!questionText || typeof questionText !== 'string' || questionText === questionKey ||
                          !answerText || typeof answerText !== 'string' || answerText === answerKey) {
                          console.warn(`Clé FAQ manquante ou invalide: ${questionKey} / ${answerKey}`);
                          return null;
                      }

                      return (
                          <details key={`q${num}`} className={styles.faqItem}>
                              <summary>{questionText}</summary>
                              <p>{renderTextWithInternalLinks(answerText)}</p>
                          </details>
                      );
                  })}
              </div>
          );
      });
  };


  // --- Rendu JSX ---
  return (
    <div>
      {/* --- SECTION ACCUEIL --- */}
      <section id="accueil" style={{ paddingTop: 'var(--spacing-unit)' }}>
        <div className={styles.accueilColumns}>
          <div className={styles.accueilColumn}>
            <h2>{accueilContent('col1_titre')}</h2>
            <p>{accueilContent('col1_texte')}</p>
          </div>
          <div className={styles.accueilColumn}>
            <h3>{accueilContent('col2_titre')}</h3>
            <ul className={styles.accueilNavList}>
               <li><a href="#eligibilite"><strong>{accueilContent('lien_nav_1_titre')}</strong><br/><small>{accueilContent('lien_nav_1_texte')}</small></a></li>
               <li><a href="#etapes"><strong>{accueilContent('lien_nav_2_titre')}</strong><br/><small>{accueilContent('lien_nav_2_texte')}</small></a></li>
               <li><a href="#ou-valider"><strong>{accueilContent('lien_nav_3_titre')}</strong><br/><small>{accueilContent('lien_nav_3_texte')}</small></a></li>
               <li><a href="#faq"><strong>{accueilContent('lien_nav_4_titre')}</strong><br/><small>{accueilContent('lien_nav_4_texte')}</small></a></li>
            </ul>
          </div>
        </div>
        <p className={styles.noteLangue}>
          {accueilContent('note_langue')}
        </p>
      </section>

      {/* --- SECTION ÉLIGIBILITÉ --- */}
      <section id="eligibilite" className={styles.pageSection}>
        <h2>{eligibiliteContent('titre')}</h2>
        <RenderHTML htmlString={eligibiliteContent('intro')} />
        {/* Résidence */}
        <h3>{eligibiliteContent('residence.titre')}</h3>
        <p><span className={styles.iconCheck}>✅</span> <RenderHTML htmlString={eligibiliteContent('residence.condition')} /></p>
        <span className={styles.note}>{eligibiliteContent('residence.note')}</span>
        {/* Séjour */}
        <h3>{eligibiliteContent('sejour.titre')}</h3>
        <p><span className={styles.iconCheck}>✅</span> <RenderHTML htmlString={eligibiliteContent('sejour.condition')} /></p>
        {/* Age */}
        <h3>{eligibiliteContent('age.titre')}</h3>
        <p><span className={styles.iconCheck}>✅</span> <RenderHTML htmlString={eligibiliteContent('age.condition')} /></p>
        {/* Achats */}
        <h3>{eligibiliteContent('achats.titre')}</h3>
        <p><span className={styles.iconCheck}>✅</span> <RenderHTML htmlString={eligibiliteContent('achats.condition_montant')} /></p>
        <p><RenderHTML htmlString={eligibiliteContent('achats.condition_sezane')} /> <span className={styles.note}>{eligibiliteContent('achats.note_cumul')}</span></p>
        <p><span className={styles.iconCheck}>✅</span> <RenderHTML htmlString={eligibiliteContent('achats.condition_usage')} /></p>
        {/* Produits */}
        <h3>{eligibiliteContent('produits.titre')}</h3>
        <p>{eligibiliteContent('produits.eligibles')}</p>
        <h4>{eligibiliteContent('produits.exclus_titre')}</h4>
         <ul className={styles.nestedList}>
             {isExclusListeArray ? (
                 exclusListe.map((item: string, index: number) => (
                    <li key={index}><span className={styles.iconCross}>❌</span> {item.replace(/^❌\s*/, '')}</li>
                 ))
             ) : (
                 <li>Erreur: Vérifiez la clé 'eligibilite.produits.exclus_liste' dans vos fichiers i18n.</li>
             )}
         </ul>
         <span className={styles.note}>
              (<ExternalLink href="https://www.douane.gouv.fr/">{eligibiliteContent('produits.lien_douanes')}</ExternalLink>) {/* Utiliser la clé correcte */}
          </span>
      </section>

      {/* --- SECTION ÉTAPES --- */}
      <section id="etapes" className={styles.pageSection}>
        <h2>{etapesContent('titre')}</h2>
        <p>{etapesContent('intro')}</p>
        {/* Etape 1 */}
        <h3>{etapesContent('etape1.titre')}</h3>
        <h4>{etapesContent('etape1.paiement_titre')}</h4>
        <p><RenderHTML htmlString={etapesContent('etape1.paiement_sezane')} /></p>
        <p><RenderHTML htmlString={etapesContent('etape1.paiement_passeport')} /></p>
        <h4>{etapesContent('etape1.bve_titre')}</h4>
        <p><RenderHTML htmlString={etapesContent('etape1.bve_sezane')} /></p>
        <p><RenderHTML htmlString={etapesContent('etape1.bve_verifier')} /></p>
        <p><RenderHTML htmlString={etapesContent('etape1.bve_garder')} /></p>
        {/* Etape 2 */}
        <h3>{etapesContent('etape2.titre')}</h3>
        <h4>{etapesContent('etape2.temps_titre')}</h4>
        <p>{etapesContent('etape2.temps_texte')}</p>
        <h4>{etapesContent('etape2.documents_titre')}</h4>
         <ul className={styles.nestedList}>
             {isDocumentsListeArray ? (
                 documentsListe.map((item: string, index: number) => (
                     <li key={index}><RenderHTML htmlString={item} /></li>
                 ))
             ) : (
                  <li>Erreur: Vérifiez la clé 'etapes.etape2.documents_liste' dans vos fichiers i18n.</li>
             )}
         </ul>
        <h4>{etapesContent('etape2.validation_titre')}</h4>
        <p><RenderHTML htmlString={etapesContent('etape2.validation_moment')} /></p>
        <p>{renderTextWithInternalLinks(etapesContent('etape2.validation_borne'))}</p> {/* Utilisation du helper */}
        <h4>{etapesContent('etape2.validation_action')}</h4>
        <p>{etapesContent('etape2.validation_scan')}</p>
        <p><span className={styles.iconCheck}>✅</span> <RenderHTML htmlString={etapesContent('etape2.validation_ok')} /></p>
        <p><span className={styles.iconCross}>❌</span> <RenderHTML htmlString={etapesContent('etape2.validation_ko')} /></p>
        {/* Etape 3 */}
        <h3>{etapesContent('etape3.titre')}</h3>
        <p><RenderHTML htmlString={etapesContent('etape3.intro')} /></p>
        <h4>{etapesContent('etape3.moyen_titre')}</h4>
        <p><RenderHTML htmlString={etapesContent('etape3.moyen_cb')} /></p>
        <p><RenderHTML htmlString={etapesContent('etape3.moyen_cash')} /></p>
        <h4>{etapesContent('etape3.montant_titre')}</h4>
        <p>{etapesContent('etape3.montant_texte')}</p>
        <p>{etapesContent('etape3.fin')}</p>
      </section>

      {/* --- SECTION OU VALIDER --- */}
      <section id="ou-valider" className={styles.pageSection}>
        <h2>{ouValiderContent('titre')}</h2>
        <p>{ouValiderContent('intro')}</p>
        <div className={styles.highlightBox}>
            <h3>{ouValiderContent('depart_hors_france.titre')}</h3>
            <p>{ouValiderContent('depart_hors_france.texte')}</p>
        </div>
        <h3>{ouValiderContent('depart_france.titre')}</h3>
        <p>{ouValiderContent('depart_france.intro')}</p>
        <p><em>{ouValiderContent('depart_france.comment_trouver')}</em></p>
        <div className={styles.accordionContainer}>
          <details className={styles.accordionItem}>
            <summary className={styles.accordionTitle}>{ouValiderContent('aeroports.titre')}</summary>
            <div className={styles.accordionContent}>
              <ul className={styles.nestedList}>
                <li><RenderHTML htmlString={ouValiderContent('aeroports.cdg')} /></li>
                <li><RenderHTML htmlString={ouValiderContent('aeroports.ory')} /></li>
                <li><RenderHTML htmlString={ouValiderContent('aeroports.gva_fr')} /></li>
                <li><RenderHTML htmlString={ouValiderContent('aeroports.autres')} /></li>
              </ul>
            </div>
          </details>
          <details className={styles.accordionItem}>
            <summary className={styles.accordionTitle}>{ouValiderContent('gares.titre')}</summary>
             <div className={styles.accordionContent}>
                <ul className={styles.nestedList}>
                   <li><RenderHTML htmlString={ouValiderContent('gares.eurostar')} /></li>
                   <li><RenderHTML htmlString={ouValiderContent('gares.geneve_cornavin')} /></li>
                </ul>
             </div>
          </details>
          <details className={styles.accordionItem}>
            <summary className={styles.accordionTitle}>{ouValiderContent('frontieres_routieres.titre')}</summary>
            <div className={styles.accordionContent}>
                <ul className={styles.nestedList}>
                    <li><RenderHTML htmlString={ouValiderContent('frontieres_routieres.suisse')} /></li>
                    <li><RenderHTML htmlString={ouValiderContent('frontieres_routieres.autres_pays')} /></li>
                </ul>
            </div>
          </details>
          <details className={styles.accordionItem}>
            <summary className={styles.accordionTitle}>{ouValiderContent('ports.titre')}</summary>
             <div className={styles.accordionContent}>
                 <ul className={styles.nestedList}>
                   <li><RenderHTML htmlString={ouValiderContent('ports.exemples')} /></li>
                 </ul>
             </div>
          </details>
        </div>
         <div className={styles.finalAdviceBox}>
             <h4>{ouValiderContent('conseil_final.titre')}</h4>
             <p>{ouValiderContent('conseil_final.texte')}</p>
         </div>
      </section>

      {/* --- SECTION FAQ --- */}
      <section id="faq" className={styles.pageSection}>
        <h2>{t('faq.titre', {})}</h2>
        <p>{t('faq.intro', {})}</p>
        {/* Appeler la fonction de rendu par catégorie */}
        {renderFaq()}
      </section>

      {/* --- DISCLAIMER --- */}
       <section id="disclaimer" className={styles.pageSection} style={{borderTop: 'none', marginTop: 'calc(var(--spacing-unit) * 4)'}}>
             <p className={styles.note} style={{textAlign:'center', fontSize:'0.75rem'}}>
               {/* Utiliser le helper */}
               {renderDisclaimer()}
             </p>
       </section>
    </div>
  );
}

// --- GENERATE METADATA ---
export async function generateMetadata({ params }: Props) {
  try {
    const metadataContent = await getScopedI18n('metadata');
    return {
      title: metadataContent('title'),
      description: metadataContent('description'),
    };
  } catch (error) {
     console.error("Erreur chargement metadata i18n:", error);
     return { title: "Guide Détaxe Sézane", description: "Guide détaxe" }; // Fallback simple
  }
}
// src/i18n/fr.ts (Version Complète avec <strong> au lieu de **)
export default {
  // --- META DONNEES ---
  metadata: {
    title: "Guide Détaxe Sézane | Simplifiez Votre Remboursement TVA",
    description: "Le guide officiel et simple de Sézane pour comprendre et réussir la détaxe de vos achats en France. Étapes clés, éligibilité, validation PABLO et remboursement Global Blue.",
  },

  // --- HEADER ---
  header: {
    logo_title: 'Guide Détaxe Sézane',
    logo_subtitle: 'Récupérez la TVA sur vos achats',
    eligibility: 'Éligibilité', // Garder simple pour la nav
    steps: 'Étapes',       // Garder simple pour la nav
    map: 'Où valider ?',   // Garder simple pour la nav
    faq: 'FAQ',            // Garder simple pour la nav
    theme_toggle_aria: 'Changer vers le thème {theme}',
    theme_light: 'clair',
    theme_dark: 'sombre',
    change_lang_aria: 'Changer la langue vers {lang}',
    flag_alt: 'Drapeau {lang}',
  },

  // --- FOOTER ---
  footer: {
    disclaimer: 'Mentions & Avertissement',
    copyright_start: '© {year} ',
    copyright_link_text: 'Suisse Corporation',
    copyright_end: ' - Tous droits réservés',
  },

  // --- ACCUEIL ---
  accueil: {
    col1_titre: "La détaxe ? C'est simple !",
    col1_texte: "Lorsque vous faites du shopping en France (chez Sézane par exemple !) pendant votre voyage, vous payez une taxe appelée TVA. Si vous habitez hors de l'Union Européenne, vous pouvez récupérer une partie de cette taxe après votre départ. C'est un avantage spécialement pensé pour les voyageurs comme vous !",
    col2_titre: "Comment ça marche ?",
    lien_nav_1_titre: "Qui et Quoi ?",
    lien_nav_1_texte: "Conditions et achats concernés.",
    lien_nav_2_titre: "Comment ?",
    lien_nav_2_texte: "Les étapes clés (achat, validation, remboursement).",
    lien_nav_3_titre: "Où ?",
    lien_nav_3_texte: "Trouver les points de validation.",
    lien_nav_4_titre: "FAQ :",
    lien_nav_4_texte: "Réponses aux questions fréquentes.",
    note_langue: "(Note : Vous pouvez changer de langue à tout moment grâce au sélecteur.)",
  },

  // --- SECTION ELIGIBILITE ---
  eligibilite: {
    titre: "Qui peut en profiter et pour quels achats ?", // Titre de section pour la page
    intro: "Pour pouvoir bénéficier du remboursement de la TVA sur vos achats, vous devez remplir <strong>toutes</strong> les conditions suivantes :", // Utilisation de <strong>
    residence: {
      titre: "1. Votre Résidence :",
      condition: "✅ Vous devez avoir votre résidence habituelle <strong>hors de l'Union Européenne</strong> (et hors de certains territoires spécifiques comme les DOM, Monaco, etc.) à la date des achats.", // Utilisation de <strong>
      note: "Info Pratique : Les résidents du Royaume-Uni (hors Irlande du Nord), de Suisse, de Norvège sont éligibles.",
    },
    sejour: {
      titre: "2. Votre Séjour :",
      condition: "✅ Vous devez être de passage en France (ou dans l'UE) pour <strong>moins de 6 mois</strong>.", // Utilisation de <strong>
    },
    age: {
      titre: "3. Votre Âge :",
      condition: "✅ Vous devez avoir <strong>16 ans révolus</strong> au moment de l'achat.", // Utilisation de <strong>
    },
    achats: {
      titre: "4. Vos Achats :",
      condition_montant: "✅ Le montant total de vos achats, <strong>TTC (Toutes Taxes Comprises)</strong>, doit être <strong>supérieur à 100,00 €</strong> (soit 100.01€ ou plus).", // Utilisation de <strong>
      condition_sezane: "<strong>Chez Sézane :</strong> Ce montant doit être atteint <strong>dans la même journée</strong> dans l'une de nos boutiques.", // Utilisation de <strong>
      note_cumul: "(Note: Pour simplifier chez Sézane, visez 100.01€ le même jour).",
      condition_usage: "✅ Les achats doivent être des <strong>ventes au détail</strong> pour un <strong>usage personnel</strong> (vous les emportez dans vos bagages).", // Utilisation de <strong>
    },
    produits: {
      titre: "Quels produits sont concernés ?",
      eligibles: "La plupart des articles Sézane (vêtements, maroquinerie, chaussures, accessoires) sont éligibles.",
      exclus_titre: "Attention, certains biens sont EXCLUS de la détaxe de manière générale :",
      exclus_liste: [ // Tableau vérifié
        "❌ Tabacs manufacturés",
        "❌ Services (réparations, transport, hébergement, etc.)",
        "❌ Biens soumis à embargo",
        "❌ Armes (Catégories A et B)",
        "❌ Biens culturels dépassant certains seuils",
        "❌ Produits consommés sur place",
      ],
      lien_douanes_texte: "Pour une liste exhaustive, consultez le site officiel des Douanes Françaises", // Clé renommée
    }
  },

  // --- SECTION ETAPES ---
  etapes: {
    titre: "Comment faire ? Les étapes simples", // Titre de section pour la page
    intro: "Suivez ces étapes simples pour obtenir votre remboursement de TVA.",
    etape1: {
      titre: "Étape 1 : Lors de votre Achat (Le plus important !)",
      paiement_titre: "Au moment de payer :",
      paiement_sezane: "<strong>Chez Sézane :</strong> Informez nos équipes en caisse que vous souhaitez bénéficier de la détaxe.", // Utilisation de <strong>
      paiement_passeport: "<strong>Présentez votre passeport ORIGINAL</strong> (une copie ou photo ne suffit généralement pas).", // Utilisation de <strong>
      bve_titre: "Demandez le Bordereau de Vente à l'Exportation (BVE) :",
      bve_sezane: "<strong>Chez Sézane :</strong> Nous travaillons avec <strong>Global Blue</strong>. Nos équipes éditeront directement le formulaire.", // Utilisation de <strong>
      bve_verifier: "<strong>Vérifiez les informations</strong> sur le bordereau avant de partir (Nom, Pays, N° Passeport).", // Utilisation de <strong>
      bve_garder: "<strong>Gardez précieusement</strong> le bordereau fourni.", // Utilisation de <strong>
    },
    etape2: {
      titre: "Étape 2 : Avant de Quitter l'Union Européenne (Aéroport / Gare / Frontière)",
      temps_titre: "Prévoyez du TEMPS !",
      temps_texte: "Cette étape est cruciale (min. 30-60 minutes supplémentaires avant l'enregistrement).",
      documents_titre: "Rassemblez vos documents :",
      documents_liste: [ // Tableau vérifié
         "Votre passeport",
         "Tous vos bordereaux de détaxe (Sézane/Global Blue et autres)",
         "Vos billets de transport",
         // Utiliser <strong> pour le texte DANS le tableau
         "<strong>Les articles achetés :</strong> Gardez-les accessibles (bagage cabine idéalement), <strong>neufs, non utilisés</strong>.",
      ],
      validation_titre: "Trouvez la Douane / Bornes PABLO :",
      validation_moment: "Dirigez-vous vers la zone de détaxe <strong>AVANT d'enregistrer vos bagages</strong>.", // Utilisation de <strong>
      validation_borne: "Repérez les bornes électroniques <strong>\"PABLO\"</strong>. Voir notre [section Où Valider ?](#ou-valider).", // Lien interne + strong
      validation_action: "Validez votre bordereau :",
      validation_scan: "Scannez le code-barres de votre bordereau Sézane/Global Blue.",
      validation_ok: "✅ <strong>Écran Vert \"OK Bordereau Validé\" :</strong> Parfait ! Votre détaxe est validée.", // Utilisation de <strong>
      validation_ko: "❌ <strong>Écran Rouge / Erreur / Pas de borne :</strong> Allez impérativement au <strong>guichet des Douanes</strong> avec documents ET marchandises. <strong>Ne partez pas sans validation !</strong>", // Utilisation de <strong>
    },
    etape3: {
      titre: "Étape 3 : Obtenir Votre Remboursement (Après validation douanière)",
      intro: "Une fois votre bordereau <strong>validé par la douane</strong>, vous pouvez obtenir votre remboursement.", // Utilisation de <strong>
      moyen_titre: "Comment ? (Via Global Blue pour vos achats Sézane) :",
      moyen_cb: "<strong>Remboursement sur Carte Bancaire (Recommandé) :</strong> Global Blue créditera la carte enregistrée. Délai : env. 5 jours à 3 semaines.", // Utilisation de <strong>
      moyen_cash: "<strong>Remboursement en Espèces (Cash) à l'aéroport :</strong> Rendez-vous à un guichet partenaire Global Blue (ex: Travelex) <strong>APRÈS</strong> la douane. Attention : frais possibles.", // Utilisation de <strong>
      montant_titre: "Quel Montant ?",
      montant_texte: "Vous ne récupérez pas 100% de la TVA. Global Blue applique des frais. Le montant est indiqué sur votre bordereau (env. 10-12% du prix TTC).",
      fin: "Félicitations, vous avez terminé !",
    }
  },

  // --- SECTION OU VALIDER ---
  ou_valider: {
    titre: "Où Faire Valider votre Bordereau de Détaxe ?",
    intro: "La validation de votre bordereau par les douanes est <strong>l'étape indispensable</strong> avant de pouvoir être remboursé. Elle doit être faite <strong>avant de quitter définitivement l'Union Européenne</strong>.", // Utilisation de <strong>
    depart_hors_france: {
       titre: "🇪🇺 Départ depuis un autre pays de l'UE ?",
       texte: "Si votre <strong>dernier point de sortie de l'Union Européenne n'est PAS la France</strong> (par exemple, vol Paris -> Francfort -> New York), vous devez faire valider votre bordereau français par les <strong>douanes du pays de départ de l'UE</strong> (l'Allemagne ici). Les bornes PABLO françaises ne fonctionneront pas. Renseignez-vous sur la procédure de détaxe de ce pays.", // Utilisation de <strong>
    },
    depart_france: {
        titre: "🇫🇷 Départ depuis la France (le cas le plus courant)",
        intro: "Si vous quittez directement l'UE depuis la France, voici où trouver les services de validation (bornes PABLO ou guichets douane) :",
        comment_trouver: "Recherchez la signalétique \"Détaxe / Tax Refund / Customs\". La validation se fait <strong>avant l'enregistrement des bagages</strong> si vous prenez l'avion.", // Utilisation de <strong>
    },
    aeroports: {
      titre: "✈️ Aéroports",
      cdg: "<strong>Paris-Charles de Gaulle (CDG) :</strong> Bornes PABLO et/ou guichets dans les principaux terminaux (T1, T2A, T2C, T2D, T2E, T2F, T3). Suivez la signalétique.", // Utilisation de <strong>
      ory: "<strong>Paris-Orly (ORY) :</strong> Bornes PABLO et/ou guichets dans les terminaux Orly 1-2-3 et Orly 4.", // Utilisation de <strong>
      gva_fr: "<strong>Aéroport de Genève (GVA) - Secteur France :</strong> Si vol depuis secteur français vers hors UE, utilisez les services de détaxe français (guichet).", // Utilisation de <strong>
      autres: "<strong>Autres aéroports internationaux (Nice, Lyon, Marseille...) :</strong> Services généralement disponibles. Vérifiez sur place.", // Utilisation de <strong>
    },
    gares: {
      titre: "🚆 Gares Internationales",
      eurostar: "<strong>Paris - Gare du Nord (Eurostar vers Londres) :</strong> Zone de détaxe dédiée AVANT les contrôles. Prévoyez du temps.", // Utilisation de <strong>
      geneve_cornavin: "<strong>Gare de Genève Cornavin (Suisse) :</strong> Guichet/borne PABLO français présent pour voyageurs TGV continuant hors UE. Renseignez-vous.", // Utilisation de <strong>
    },
    frontieres_routieres: {
      titre: "🚗 Frontières Routières",
      suisse: "<strong>Vers la Suisse :</strong> Postes douane français aux points principaux (ex: Vallard-Thonex...). Vérifiez service détaxe et horaires.", // Utilisation de <strong>
      autres_pays: "<strong>Vers autres pays hors UE (Andorre...) :</strong> Renseignez-vous au poste frontière.", // Utilisation de <strong>
    },
    ports: {
      titre: "🚢 Ports Maritimes (Ferry)",
      exemples: "Services (bornes ou guichets) dans terminaux passagers des grands ports (Calais, Dunkerque...).",
    },
    conseil_final: {
      titre: "Conseil Important !",
      texte: "Les emplacements et horaires peuvent varier. Vérifiez toujours les informations officielles (site aéroport/gare, douane.gouv.fr) avant votre voyage et prévoyez du temps supplémentaire !",
    }
  },

   // --- SECTION FAQ (Structure simple qX_q / qX_a gardée) ---
  faq: {
    titre: "Questions Fréquentes (FAQ)",
    intro: "Trouvez ici les réponses aux questions les plus courantes.",
    categories: { // Garder les titres de catégorie pour le rendu JSX
        eligibility: "Éligibilité",
        purchase: "Achat & Formulaire",
        departure: "Départ & Validation",
        refund: "Remboursement",
        problems: "Problèmes & Cas Particuliers",
    },
    // Questions/Réponses (sans balises <strong> ici, sauf si vraiment nécessaire)
    q1_q: "Q1 : Suis-je éligible si je viens du Royaume-Uni après Brexit ?",
    q1_a: "R : Oui, si vous résidez au Royaume-Uni (hors Irlande du Nord) ou Gibraltar/Îles Anglo-Normandes. Les résidents d'Irlande du Nord ne le sont pas. N'oubliez pas votre passeport.",
    q2_q: "Q2 : Quel est le montant minimum chez Sézane ?",
    q2_a: "R : 100.01 € TTC ou plus, le même jour, dans une même boutique Sézane.",
    q3_q: "Q3 : Puis-je cumuler mes achats Sézane sur plusieurs jours ?",
    q3_a: "R : Non, le seuil doit être atteint le même jour dans la même boutique.",
    q4_q: "Q4 : Comment demander le formulaire en boutique Sézane ?",
    q4_a: "R : Demandez en caisse avec votre passeport original. Nous éditerons un formulaire Global Blue.",
    q5_q: "Q5 : Oubli de demander le formulaire, puis-je revenir ?",
    q5_a: "R : Non, il doit être demandé au moment de l'achat.",
    q6_q: "Q6 : Détaxe pour achat en ligne retiré en boutique ?",
    q6_a: "R : Oui ! Si éligible, demandez le formulaire au retrait avec passeport (si montant > 100.01€).",
    q7_q: "Q7 : Combien de temps prévoir à l'aéroport (CDG/Orly) ?",
    q7_a: "R : Prévoyez LARGE ! Au moins 30-60 min de plus, AVANT l'enregistrement.",
    q8_q: "Q8 : Où trouver les bornes PABLO / douanes à Paris ?",
    q8_a: "R : Consultez notre [section Où Valider ?](#ou-valider). Ils sont indiqués dans les zones de départ.",
    q9_q: "Q9 : Dois-je montrer mes articles Sézane ? Puis-je les porter ?",
    q9_a: "R : Soyez prêt(e) à les montrer. Gardez-les neufs, non utilisés, accessibles. Ne les portez pas avant de quitter l'UE.",
    q10_q: "Q10 : Que faire si la borne PABLO est en panne / écran rouge ?",
    q10_a: "R : Allez immédiatement au guichet des Douanes avec passeport, formulaire papier et achats.",
    q11_q: "Q11 : Comment Global Blue me rembourse (achats Sézane) ?",
    q11_a: "R : Après validation douanière, par CB (recommandé, délai 5j-3sem) ou espèces (guichet partenaire, frais possibles).",
    q12_q: "Q12 : Quel montant exact vais-je récupérer ?",
    q12_a: "R : Pas 100% de la TVA. Global Blue prend des frais. Env. 10-12% du prix TTC (montant sur formulaire).",
    q13_q: "Q13 : Délai de remboursement sur carte bancaire ?",
    q13_a: "R : Généralement 5 jours ouvrés, mais peut prendre jusqu'à 3 semaines.",
    q14_q: "Q14 : J'ai quitté la France sans valider, que faire ?",
    q14_a: "R : Très rare. Uniquement si faute prouvée de la douane (panne/absence). Procédure Douanes sous 6 mois.",
    q15_q: "Q15 : Mon formulaire a une date d'expiration ?",
    q15_a: "R : Oui ! Validation avant fin du 3ème mois suivant le mois d'achat.",
  },

  // --- DISCLAIMER ---
   disclaimer: {
     titre: "Mentions Légales & Avertissement",
     // Texte simple, liens gérés dans JSX
     texte: "Ces informations sont fournies à titre indicatif, basées sur les textes officiels ([lien douane.gouv.fr]) et les pratiques de Global Blue ([lien globalblue.com]), en date du [Date MAJ Site]. Les règles peuvent changer. Vérifiez toujours les sources officielles. Sézane n'est pas responsable des infos obsolètes ou refus de détaxe."
   },

} as const; // Fin de l'export default
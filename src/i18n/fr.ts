// src/i18n/fr.ts (Version Simplifiée - Sans <strong>)
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
    eligibility: 'Qui & Quoi ?', // Plus court
    steps: 'Comment ?',
    map: 'Où ?', // Plus court
    faq: 'FAQ',
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
    col1_texte: "En achetant chez Sézane en France, vous payez la TVA. Si vous vivez hors UE, récupérez une partie de cette taxe après votre départ. C'est un avantage pour les voyageurs !", // Simplifié
    col2_titre: "Comment ça marche ?",
    lien_nav_1_titre: "Qui et Quoi ?",
    lien_nav_1_texte: "Vérifiez si vous et vos achats êtes concernés.", // Simplifié
    lien_nav_2_titre: "Comment ?",
    lien_nav_2_texte: "Suivez les étapes clés.", // Simplifié
    lien_nav_3_titre: "Où ?",
    lien_nav_3_texte: "Trouvez les points de validation.",
    lien_nav_4_titre: "FAQ :",
    lien_nav_4_texte: "Nos réponses à vos questions.", // Simplifié
    note_langue: "(Note : Vous pouvez changer de langue à tout moment.)", // Simplifié
  },

  // --- SECTION ELIGIBILITE (TEXTES SIMPLIFIÉS, SANS <strong>) ---
  eligibilite: {
    titre: "Suis-je concerné(e) par la détaxe ?", // Nouveau titre H2
    intro: "Vérifiez si vous remplissez ces 4 conditions :", // Intro courte

    voyageur_titre: "1. Conditions sur Vous (Le Voyageur)", // Sous-titre H3
    residence: {
      // titre: "Votre Résidence", // Optionnel
      // MOTS CLÉS: hors Union Européenne
      condition: "✅ Votre résidence principale : hors Union Européenne.", // Texte simplifié
      note: "(Résidents UK (hors Irlande N.), CH, NO : OK. Résidents Monaco, DOM : NON).", // Note concise
    },
    sejour: {
      // titre: "Votre Séjour",
      // MOTS CLÉS: moins de 6 mois
      condition: "✅ Votre séjour en France / UE : moins de 6 mois.", // Texte simplifié
    },
    age: {
      // titre: "Votre Âge",
      // MOTS CLÉS: 16 ans ou plus
      condition: "✅ Votre âge le jour de l'achat : 16 ans ou plus.", // Texte simplifié
    },

    achats_titre: "2. Conditions sur Vos Achats Sézane", // Sous-titre H3
    montant: {
      // titre: "Montant Minimum",
      // MOTS CLÉS: plus de 100€
      condition: "✅ Total TTC le même jour : plus de 100€.", // Texte simplifié
      note_sezane: "(Ce montant doit être atteint chez Sézane le même jour).",
    },
    usage: {
      // titre: "Usage des Biens",
      // MOTS CLÉS: Personnel
      condition: "✅ Usage : Personnel (vous rapportez les articles).", // Texte simplifié
    },
    produits: {
      titre: "Quels produits sont éligibles ?", // Titre H4
      eligibles: "Bonne nouvelle ! La majorité de nos articles Sézane donne droit à la détaxe.", // Simplifié
      exclus_titre: "Attention, sont toujours exclus :", // Titre H5 ou P
      exclus_1: "❌ Services (hôtel, transport...)", // Icône incluse ici
      exclus_2: "❌ Biens soumis à embargo",
      exclus_3: "❌ Produits consommés en France",
      lien_douanes_texte: "Détails et autres exclusions sur douane.gouv.fr", // Texte simplifié pour le lien
    }
  },

  // --- SECTION ETAPES (TEXTES SIMPLIFIÉS, SANS <strong>) ---
  etapes: {
    titre: "Comment faire ? Les étapes simples",
    intro: "Suivez ces étapes pour obtenir votre remboursement.",
    etape1: {
      titre: "Étape 1 : Lors de l'Achat (Le plus important !)",
      paiement_titre: "Au moment de payer :",
      paiement_sezane: "Chez Sézane : Demandez la détaxe à nos équipes.", // Simplifié
      paiement_passeport: "Présentez votre passeport ORIGINAL (pas de copie).", // Simplifié
      bve_titre: "Demandez le formulaire de détaxe :", // Simplifié
      bve_sezane: "Chez Sézane : Nous utilisons Global Blue, nos équipes éditent le formulaire.", // Simplifié
      bve_verifier: "Vérifiez vos infos (Nom, Pays, Passeport) sur le formulaire.", // Simplifié
      bve_garder: "Gardez ce formulaire précieusement.", // Simplifié
    },
    etape2: {
      titre: "Étape 2 : Avant de Quitter l'UE (Départ)", // Simplifié
      temps_titre: "Prévoyez du TEMPS !",
      temps_texte: "Indispensable ! Prévoyez 30-60 min de plus avant l'enregistrement.", // Simplifié
      documents_titre: "Rassemblez vos documents :",
      doc_1: " Passeport", // Ajouter un emoji ou une puce si désiré
      doc_2: " Tous vos formulaires de détaxe",
      doc_3: " Billets de transport",
      doc_4: " Articles achetés (accessibles, neufs, non utilisés)",
      validation_titre: "Trouvez Douane / Bornes PABLO :",
      validation_moment: "Allez à la zone détaxe AVANT d'enregistrer vos bagages.", // Simplifié
      // Garder le marqueur lien
      validation_borne: "Repérez les bornes \"PABLO\". Voir notre [section Où Valider ?](#ou-valider).",
      validation_action: "Validez votre formulaire :",
      validation_scan: "Scannez le code-barres du formulaire Sézane/Global Blue.",
      validation_ok: "✅ Écran Vert \"OK Validé\" : Parfait ! Votre détaxe est validée.", // Simplifié
      validation_ko: "❌ Écran Rouge / Erreur / Pas de borne : Allez au guichet Douanes avec documents ET articles. NE PARTEZ PAS SANS VALIDATION !", // Simplifié + Emphase texte
    },
    etape3: {
      titre: "Étape 3 : Obtenir le Remboursement (Après validation)", // Simplifié
      intro: "Une fois le formulaire validé par la douane, demandez le remboursement.", // Simplifié
      moyen_titre: "Comment ? (Via Global Blue pour Sézane) :",
      moyen_cb: "Carte Bancaire (Recommandé) : Automatique sur la carte enregistrée. Délai : 5j - 3sem env.", // Simplifié
      moyen_cash: "Espèces (Cash) à l'aéroport : Allez à un guichet partenaire Global Blue APRÈS la douane (frais possibles).", // Simplifié
      montant_titre: "Quel Montant ?",
      montant_texte: "Pas 100% de la TVA. Global Blue prend des frais. Environ 10-12% du prix TTC (voir formulaire).", // Simplifié
      fin: "Félicitations, c'est terminé !", // Simplifié
    }
  },

  // --- SECTION OU VALIDER (TEXTES SIMPLIFIÉS, SANS <strong>) ---
  ou_valider: {
    titre: "Où Faire Valider votre Formulaire ?", // Simplifié
    intro: "La validation douanière est indispensable avant remboursement. À faire avant de quitter l'UE.", // Simplifié
    depart_hors_france: {
      titre: "🇪🇺 Départ depuis un autre pays de l'UE ?",
      texte: "Si votre dernier point de sortie UE n'est PAS la France (ex: vol Paris > Francfort > NY), faites valider par les douanes de ce pays (Allemagne ici). Les bornes PABLO ne marcheront pas.", // Simplifié
    },
    depart_france: {
      titre: "🇫🇷 Départ depuis la France", // Simplifié
      intro: "Si vous quittez l'UE depuis la France, voici où valider :",
      comment_trouver: "Cherchez \"Détaxe / Tax Refund / Customs\". Validez avant l'enregistrement des bagages (avion).", // Simplifié
    },
    aeroports: {
      titre: "✈️ Aéroports",
      cdg: "Paris-CDG : Bornes PABLO / guichets dans les terminaux (T1, T2A/C/D/E/F, T3). Suivez la signalétique.", // Simplifié
      ory: "Paris-Orly : Bornes PABLO / guichets (Orly 1-2-3, Orly 4).", // Simplifié
      gva_fr: "Aéroport Genève (GVA) - Secteur France : Guichet français dispo si vol hors UE depuis secteur FR.", // Simplifié
      autres: "Autres aéroports (Nice, Lyon, Marseille...) : Services souvent disponibles. Vérifiez.", // Simplifié
    },
    gares: {
      titre: "🚆 Gares Internationales",
      eurostar: "Paris - Gare du Nord (Eurostar) : Zone détaxe dédiée AVANT contrôles. Prévoyez du temps.", // Simplifié
      geneve_cornavin: "Gare Genève Cornavin (Suisse) : Guichet/borne PABLO français pour voyageurs TGV. Renseignez-vous.", // Simplifié
    },
    frontieres_routieres: {
      titre: "🚗 Frontières Routières",
      suisse: "Vers la Suisse : Postes douane français aux points principaux (Vallard-Thonex...). Vérifiez service et horaires.", // Simplifié
      autres_pays: "Vers autres pays hors UE : Renseignez-vous au poste frontière.",
    },
    ports: {
      titre: "🚢 Ports Maritimes (Ferry)",
      exemples: "Services dans terminaux passagers des grands ports (Calais, Dunkerque...).",
    },
    conseil_final: {
      titre: "Conseil Important !",
      texte: "Emplacements et horaires variables. Vérifiez toujours infos officielles (aéroport, douane.gouv.fr) avant et prévoyez du temps !", // Simplifié
    }
  },

  // --- SECTION FAQ (TEXTES SIMPLIFIÉS, SANS <strong>) ---
  faq: {
    titre: "Questions Fréquentes (FAQ)",
    intro: "Nos réponses à vos questions courantes.", // Simplifié
    categories: { // Garder les titres
      eligibility: "Éligibilité",
      purchase: "Achat & Formulaire",
      departure: "Départ & Validation",
      refund: "Remboursement",
      problems: "Problèmes & Cas Particuliers",
    },
    // Q/R Simplifiées (sans strong, sauf si indispensable au sens)
    q1_q: "Q1 : Éligible si je viens du Royaume-Uni ?",
    q1_a: "R : Oui (sauf Irlande N.). Aussi Gibraltar/Îles Anglo-Normandes. Prenez votre passeport.",
    q2_q: "Q2 : Montant minimum chez Sézane ?",
    q2_a: "R : 100.01 € TTC ou plus, le même jour, même boutique.",
    q3_q: "Q3 : Cumuler achats sur plusieurs jours ?",
    q3_a: "R : Non, seuil à atteindre le même jour.",
    q4_q: "Q4 : Demander le formulaire en boutique ?",
    q4_a: "R : En caisse avec passeport original. On édite le formulaire Global Blue.",
    q5_q: "Q5 : Oubli de demander le formulaire ?",
    q5_a: "R : Trop tard. Doit être fait lors de l'achat.",
    q6_q: "Q6 : Détaxe pour commande en ligne retirée en boutique ?",
    q6_a: "R : Oui, si éligible. Demandez au retrait (passeport + montant > 100.01€).",
    q7_q: "Q7 : Combien de temps prévoir à l'aéroport ?",
    q7_a: "R : Beaucoup ! Min. 30-60 min de plus, AVANT enregistrement bagages.",
    q8_q: "Q8 : Où sont les bornes PABLO / douanes à Paris ?",
    q8_a: "R : Consultez la [section Où Valider ?](#ou-valider). Ils sont signalés en zone départ.", // Lien interne
    q9_q: "Q9 : Montrer les articles ? Les porter avant ?",
    q9_a: "R : Préparez-vous à les montrer. Gardez-les neufs, non utilisés, accessibles. Ne pas porter avant sortie UE.",
    q10_q: "Q10 : Borne PABLO en panne / écran rouge ?",
    q10_a: "R : Allez au guichet Douanes (avec tout : passeport, formulaire, articles).",
    q11_q: "Q11 : Remboursement Global Blue (Sézane) ?",
    q11_a: "R : Après validation douane : sur CB (recommandé, 5j-3sem) ou cash (guichet partenaire, frais possibles).",
    q12_q: "Q12 : Montant exact remboursé ?",
    q12_a: "R : Environ 10-12% du prix TTC (TVA moins frais Global Blue). Montant sur formulaire.",
    q13_q: "Q13 : Délai remboursement CB ?",
    q13_a: "R : Généralement 5j ouvrés après validation, parfois jusqu'à 3 semaines.",
    q14_q: "Q14 : Parti sans valider, que faire ?",
    q14_a: "R : Très difficile. Possible que si faute prouvée de la douane (panne/absence). Contacter Douanes sous 6 mois.",
    q15_q: "Q15 : Date d'expiration du formulaire ?",
    q15_a: "R : Oui ! Validation douanière avant fin 3ème mois suivant achat.",
  },

  // --- DISCLAIMER (TEXTE SIMPLIFIÉ) ---
  disclaimer: {
    titre: "Mentions & Avertissement", // Garder titre complet
    texte: "Infos indicatives basées sur textes officiels ([lien douane.gouv.fr]) & pratiques Global Blue ([lien globalblue.com]) au [Date MAJ Site]. Règles sujettes à changement. Vérifiez toujours sources officielles. Sézane non responsable si infos obsolètes ou refus détaxe." // Texte concis
  },

} as const; // Fin export
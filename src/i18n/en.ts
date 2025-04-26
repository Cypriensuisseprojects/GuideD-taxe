// src/i18n/en.ts (Version Complète Corrigée et Alignée sur fr.ts)
export default {
  // --- META DONNEES ---
  metadata: {
    title: "Sézane Tax Free Guide | Simplify Your VAT Refund",
    description: "Sézane's official and simple guide to understanding and successfully claiming your VAT refund for purchases in France. Key steps, eligibility, PABLO validation, and Global Blue refunds.",
  },

  // --- HEADER ---
  header: {
    logo_title: 'Sézane Tax Free Guide', // Titre principal
    logo_subtitle: 'Get VAT Back on your Purchases', // Sous-titre
    eligibility: 'Eligibility',
    steps: 'Steps',
    map: 'Where to validate?', // Clé renommée
    faq: 'FAQ',
    theme_toggle_aria: 'Change to {theme} theme',
    theme_light: 'light',
    theme_dark: 'dark',
    change_lang_aria: 'Change language to {lang}',
    flag_alt: '{lang} flag',
  },

  // --- FOOTER ---
  footer: {
    disclaimer: 'Legal Notice & Disclaimer',
    copyright_start: '© {year} ',
    copyright_link_text: 'Suisse Corporation',
    copyright_end: ' - All rights reserved',
  },

  // --- ACCUEIL (Mise en page 2 colonnes, sans H1) ---
  accueil: {
    // titre_h1: "Get VAT Back on Your Sézane Purchases", // <-- Supprimé
    col1_titre: "Tax Free Shopping? It's Simple!",
    col1_texte: "When you shop in France (at Sézane, for example!) during your trip, you pay a tax called VAT. If you live outside the European Union, you can get part of this tax back after you leave. It's a benefit specially designed for travelers like you!",
    col2_titre: "How Does It Work?",
    lien_nav_1_titre: "Who & What?",
    lien_nav_1_texte: "Conditions and eligible purchases.",
    lien_nav_2_titre: "How?",
    lien_nav_2_texte: "Key steps (purchase, validation, refund).",
    lien_nav_3_titre: "Where?",
    lien_nav_3_texte: "Find the validation points.",
    lien_nav_4_titre: "FAQ:",
    lien_nav_4_texte: "Answers to frequent questions.",
    note_langue: "(Note: You can switch languages anytime using the selector.)",
  },

  // --- SECTION ELIGIBILITE ---
  eligibilite: {
    titre: "Are you eligible for a VAT refund?",
    intro: "To qualify for a VAT refund on your purchases, you must meet **all** the following conditions:",
    residence: {
      titre: "1. Your Residence:",
      condition: "✅ You must have your usual residence **outside the European Union** (and outside certain specific territories like French Overseas Departments, Monaco, etc.) on the date of purchase.",
      note: "Good to know: Residents of the United Kingdom (excluding Northern Ireland), Switzerland, Norway are eligible.",
    },
    sejour: {
      titre: "2. Your Stay:",
      condition: "✅ You must be visiting France (or the EU) for **less than 6 months**.",
    },
    age: {
      titre: "3. Your Age:",
      condition: "✅ You must be **16 years old or over** at the time of purchase.",
    },
    achats: {
      titre: "4. Your Purchases:",
      condition_montant: "✅ The total amount of your purchases, **including VAT (TTC)**, must be **over €100.00** (i.e., €100.01 or more).",
      condition_sezane: "**At Sézane:** This amount must be reached **on the same day** in one of our stores.",
      note_cumul: "(Note: To keep it simple at Sézane, aim for €100.01 on the same day).",
      condition_usage: "✅ Purchases must be **retail sales** for **personal use** (you are taking them with you in your luggage).",
    },
    produits: {
      titre: "Which products are eligible?",
      eligibles: "Most Sézane items (clothing, leather goods, shoes, accessories) are eligible.",
      exclus_titre: "Please note, certain goods are generally EXCLUDED from VAT refunds:",
      // --- VÉRIFICATION : Ceci est bien un tableau de strings ---
      exclus_liste: [
        "❌ Manufactured tobacco",
        "❌ Services (repairs, transport, accommodation, etc.)",
        "❌ Goods subject to embargo",
        "❌ Weapons (Categories A and B)",
        "❌ Cultural goods exceeding certain thresholds",
        "❌ Products consumed locally",
      ],
      // --- FIN VÉRIFICATION ---
      lien_douanes_texte: "For a complete list, please consult the official French Customs website", // Texte pour le lien externe
    }
  },

  // --- SECTION ETAPES ---
  etapes: {
    titre: "The Step-by-Step Tax Free Guide",
    intro: "Follow these simple steps to get your VAT refund.",
    etape1: {
      titre: "Step 1: When You Shop (The most important!)",
      paiement_titre: "At the checkout:",
      paiement_sezane: "**At Sézane:** Please inform our team at the till that you wish to claim a VAT refund.",
      paiement_passeport: "**Present your ORIGINAL passport** (a copy or photo is usually not sufficient).",
      bve_titre: "Request the Tax Free Form (BVE):",
      bve_sezane: "**At Sézane:** We partner with **Global Blue**. Our team will directly issue the form.",
      bve_verifier: "**Check the information** on the form before leaving (Name, Country, Passport No.).",
      bve_garder: "**Keep the form safe.**",
    },
    etape2: {
      titre: "Step 2: Before Leaving the European Union (Airport / Station / Border)",
      temps_titre: "Allow plenty of TIME!",
      temps_texte: "This step is crucial (min. 30-60 extra minutes before check-in).",
      documents_titre: "Gather your documents:",
      // --- VÉRIFICATION : Ceci est bien un tableau de strings ---
      documents_liste: [
        "Your passport",
        "All your tax free forms (Sézane/Global Blue and others)",
        "Your travel tickets",
        "**The purchased items:** Keep them easily accessible (hand luggage ideally), **new, unused**.",
      ],
      // --- FIN VÉRIFICATION ---
      validation_titre: "Find Customs / PABLO Terminals:",
      validation_moment: "Head to the tax refund area **BEFORE checking in your luggage**.",
      validation_borne: "Look for the electronic **\"PABLO\" terminals**. See our [Where to Validate? section](#ou-valider).", // Lien interne
      validation_action: "Validate your form:",
      validation_scan: "Scan the barcode of your Sézane/Global Blue form.",
      validation_ok: "✅ **Green Screen \"OK Form Validated\":** Perfect! Your refund is validated.",
      validation_ko: "❌ **Red Screen / Error / No terminal:** You **must** go to the **Customs desk** with documents AND goods. **Do not leave without validation!**",
    },
    etape3: {
      titre: "Step 3: Getting Your Refund (After Customs validation)",
      intro: "Once your form is **validated by Customs**, you can get your refund.",
      moyen_titre: "How? (Via Global Blue for your Sézane purchases):",
      moyen_cb: "**Refund to Credit Card (Recommended):** Global Blue will credit the registered card. Timeframe: approx. 5 days to 3 weeks.",
      moyen_cash: "**Cash Refund at the airport:** Go to a Global Blue partner refund point (e.g., Travelex) **AFTER** Customs. Note: fees may apply.",
      montant_titre: "How Much?",
      montant_texte: "You do not get 100% of the VAT back. Global Blue charges a fee. The amount is on your form (approx. 10-12% of the TTC price).",
      fin: "Congratulations, you're done!",
    }
  },

  // --- SECTION OU VALIDER ---
  ou_valider: { // Clé renommée
    titre: "Where to Validate Your Tax Free Form?",
    intro: "To get your form validated by Customs (essential step), go to PABLO terminals or French Customs desks at your EU exit point.",
    comment_trouver: "Look for signs \"Détaxe / Tax Refund / Customs\" in your departure area.",
    aeroports: {
      titre: "✈️ Main Airports",
      intro: "Most common case. Validation must be done BEFORE checking in luggage.",
      cdg: "**Paris-Charles de Gaulle (CDG):** PABLO terminals and/or desks available in main terminals (T1, T2A/C/D/E/F, T3). Follow \"Détaxe / Tax Refund\" signs.",
      ory: "**Paris-Orly (ORY):** PABLO terminals and/or desks available (Orly 1-2-3, Orly 4).",
      autres: "**Other major airports:** Similar services at Nice (NCE), Lyon (LYS), Marseille (MRS), etc.",
    },
    gares: {
      titre: "🚆 Main International Train Stations",
      intro: "If leaving the EU by train.",
      eurostar: "**Paris - Gare du Nord (Eurostar to London):** Dedicated tax refund area BEFORE passport/security checks. Allow time.",
    },
    frontieres_routieres: {
      titre: "🚗 Road Borders (especially to Switzerland)",
      intro: "If leaving France by car.",
      suisse: "**To Switzerland:** French customs offices at main crossings (e.g., near Geneva; La Ferrière). Check for tax refund service and opening hours.",
      autres_pays: "**To other non-EU countries (Andorra...):** Inquire about customs posts at the exit point.",
    },
    ports: {
      titre: "🚢 Sea Ports (Ferry)",
      intro: "If taking a ferry to a non-EU country (e.g., UK).",
      exemples: "Tax refund services (terminals or desks) available in passenger terminals (Calais, Dunkirk...).",
    },
    conseil_final: {
      titre: "Important Tip!",
      texte: "Exact locations and opening hours may vary. Always check official information from your departure point or French Customs website before travelling. Allow extra time!",
    }
  },

  // --- SECTION FAQ ---
  faq: {
    titre: "Frequently Asked Questions (FAQ)",
    intro: "Find answers to the most common questions here.",
    q1_q: "Q1: Am I eligible if I come from the UK after Brexit?",
    q1_a: "A: Yes, if you reside in the UK (excl. NI) or Gibraltar/Channel Islands. NI residents are not. Bring your passport.",
    q2_q: "Q2: What's the minimum purchase amount at Sézane?",
    q2_a: "A: €100.01 (incl. VAT) or more, same day, same Sézane store.",
    q3_q: "Q3: Can I combine Sézane purchases over days?",
    q3_a: "A: No, the threshold must be met on the same day in the same store.",
    q4_q: "Q4: How to request the form in a Sézane store?",
    q4_a: "A: Ask at the till with your original passport. We'll issue a Global Blue form.",
    q5_q: "Q5: Forgot the form, can I return?",
    q5_a: "A: No, it must be requested at the time of purchase.",
    q6_q: "Q6: Tax free for online order collected in store?",
    q6_a: "A: Yes! If eligible, request the form upon collection with passport (if > €100.01).",
    q7_q: "Q7: Time needed at airport (CDG/Orly)?",
    q7_a: "A: Allow PLENTY! At least 30-60 min extra, BEFORE check-in.",
    q8_q: "Q8: Where are PABLO / Customs at Paris airports?",
    q8_a: "A: Check our [Where to Validate? section](#ou-valider). They are signposted in departure areas.", // Lien interne
    q9_q: "Q9: Show Sézane items? Can I wear them?",
    q9_a: "A: Be ready to show them. Keep new, unused, tagged, accessible. Don't wear before leaving EU.",
    q10_q: "Q10: What if PABLO terminal fails / shows red?",
    q10_a: "A: Go immediately to Customs desk with passport, paper form, and items.",
    q11_q: "Q11: How does Global Blue refund me (Sézane)?",
    q11_a: "A: After customs validation, via Credit Card (recommended, 5d-3w delay) or Cash (partner desk, fees may apply).",
    q12_q: "Q12: How much will I get back exactly?",
    q12_a: "A: Not 100% VAT (20%). Global Blue charges fees. Approx. 10-12% of TTC price (amount on form).",
    q13_q: "Q13: Credit card refund timeframe?",
    q13_a: "A: Usually 5 working days, but can take up to 3 weeks.",
    q14_q: "Q14: Left France without validation, what now?",
    q14_a: "A: Very rare. Only if proven Customs fault (breakdown, absence). Forgetting/lack of time invalid. Customs procedure within 6 months.",
    q15_q: "Q15: Does my form expire?",
    q15_a: "A: Yes! Customs validation before end of 3rd month following purchase month.",
  },

  // --- DISCLAIMER ---
  disclaimer: {
    titre: "Legal Notice & Disclaimer",
    texte: "This information is for guidance, based on official texts ([lien douane.gouv.fr]) and Global Blue practices ([lien globalblue.com]), as of [Site Update Date]. Rules may change. Always check official sources. Sézane is not liable for outdated info or refund refusal."
  },

} as const;
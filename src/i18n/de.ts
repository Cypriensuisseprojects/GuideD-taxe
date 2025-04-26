// src/i18n/de.ts (Version Complète Corrigée et Alignée)
export default {
  // --- META DONNEES ---
  metadata: {
    title: "Sézane Tax Free Leitfaden | Vereinfachen Sie Ihre MwSt.-Rückerstattung",
    description: "Sézanes offizieller und einfacher Leitfaden zum Verständnis und zur erfolgreichen Beantragung der Mehrwertsteuerrückerstattung für Ihre Einkäufe in Frankreich. Wichtige Schritte, Anspruchsberechtigung, PABLO-Validierung und Global Blue Rückerstattung.",
  },

  // --- HEADER ---
  header: {
    logo_title: 'Sézane Tax Free Leitfaden', // Titre principal
    logo_subtitle: 'Holen Sie sich die MwSt. zurück', // Sous-titre
    eligibility: 'Berechtigung', // Raccourci pour le menu
    steps: 'Schritte',
    map: 'Wo validieren?', // Clé pour le lien de navigation (remplace 'Karte')
    faq: 'FAQ',
    theme_toggle_aria: 'Wechsle zum {theme}-Modus', // {theme} = hell / dunkel
    theme_light: 'hellen',
    theme_dark: 'dunklen',
    change_lang_aria: 'Sprache wechseln zu {lang}', // {lang} = Français / English / Deutsch etc.
    flag_alt: '{lang}-Flagge', // {lang} = FR / EN / DE etc.
  },

  // --- FOOTER ---
  footer: {
    disclaimer: 'Impressum & Haftungsausschluss',
    copyright_start: '© {year} ',
    copyright_link_text: 'Suisse Corporation',
    copyright_end: ' - Alle Rechte vorbehalten',
  },

  // --- ACCUEIL (Mise en page 2 colonnes, sans H1) ---
  accueil: {
    // titre_h1: "Holen Sie sich die MwSt. für Ihre Sézane-Einkäufe zurück", // <-- SUPPRIMÉ
    col1_titre: "Tax Free Shopping? Ganz einfach!",
    col1_texte: "Wenn Sie während Ihrer Reise in Frankreich einkaufen (zum Beispiel bei Sézane!), zahlen Sie eine Steuer namens Mehrwertsteuer (MwSt.). Wenn Sie außerhalb der Europäischen Union wohnen, können Sie nach Ihrer Ausreise einen Teil dieser Steuer zurückbekommen. Das ist ein Vorteil speziell für Reisende wie Sie!",
    col2_titre: "Wie funktioniert es?",
    lien_nav_1_titre: "Wer & Was?",
    lien_nav_1_texte: "Bedingungen und betroffene Einkäufe.",
    lien_nav_2_titre: "Wie?",
    lien_nav_2_texte: "Die wichtigsten Schritte (Kauf, Validierung, Rückerstattung).",
    lien_nav_3_titre: "Wo?",
    lien_nav_3_texte: "Finden Sie die Validierungsstellen.",
    lien_nav_4_titre: "FAQ:",
    lien_nav_4_texte: "Antworten auf häufige Fragen.",
    note_langue: "(Hinweis: Sie können die Sprache jederzeit über die Sprachauswahl ändern.)",
  },

  // --- SECTION ELIGIBILITE ---
  eligibilite: {
    titre: "Sind Sie zur Mehrwertsteuerrückerstattung berechtigt?",
    intro: "Um eine Mehrwertsteuerrückerstattung für Ihre Einkäufe erhalten zu können, müssen Sie **alle** folgenden Bedingungen erfüllen:",
    residence: {
      titre: "1. Ihr Wohnsitz:",
      condition: "✅ Sie müssen Ihren gewöhnlichen Wohnsitz zum Zeitpunkt des Kaufs **außerhalb der Europäischen Union** (und außerhalb bestimmter Gebiete wie den französischen Überseedepartements, Monaco usw.) haben.",
      note: "Gut zu wissen: Einwohner des Vereinigten Königreichs (außer Nordirland), der Schweiz, Norwegens sind anspruchsberechtigt.",
    },
    sejour: {
      titre: "2. Ihr Aufenthalt:",
      condition: "✅ Sie müssen sich für **weniger als 6 Monate** in Frankreich (oder der EU) aufhalten.",
    },
    age: {
      titre: "3. Ihr Alter:",
      condition: "✅ Sie müssen zum Zeitpunkt des Kaufs **mindestens 16 Jahre alt** sein.",
    },
    achats: {
      titre: "4. Ihre Einkäufe:",
      condition_montant: "✅ Der Gesamtbetrag Ihrer Einkäufe, **inklusive Mehrwertsteuer (TTC)**, muss **über 100,00 €** liegen (d.h. 100,01 € oder mehr).",
      condition_sezane: "**Bei Sézane:** Dieser Betrag muss **am selben Tag** in einer unserer Boutiquen erreicht werden.",
      note_cumul: "(Hinweis: Zur Vereinfachung bei Sézane sollten Sie 100,01 € am selben Tag anstreben).",
      condition_usage: "✅ Die Einkäufe müssen **Einzelhandelsverkäufe für den persönlichen Gebrauch** sein (Sie nehmen sie in Ihrem Gepäck mit).",
    },
    produits: {
      titre: "Welche Produkte sind betroffen?",
      eligibles: "Die meisten Sézane-Artikel (Kleidung, Lederwaren, Schuhe, Accessoires) sind rückerstattungsfähig.",
      exclus_titre: "Achtung, bestimmte Waren sind generell von der Mehrwertsteuerrückerstattung AUSGESCHLOSSEN:",
      // --- VÉRIFICATION : Tableau de strings ---
      exclus_liste: [
        "❌ Tabakwaren",
        "❌ Dienstleistungen (Reparaturen, Transport, Unterkunft usw.)",
        "❌ Waren, die einem Embargo unterliegen",
        "❌ Waffen (Kategorien A und B)",
        "❌ Kulturgüter, die bestimmte Schwellenwerte überschreiten",
        "❌ Vor Ort konsumierte Produkte",
      ],
      // --- FIN VÉRIFICATION ---
      lien_douanes_texte: "Eine vollständige Liste finden Sie auf der offiziellen Website des französischen Zolls",
    }
  },

  // --- SECTION ETAPES ---
  etapes: {
    titre: "Die Schritt-für-Schritt-Anleitung zur Tax Free Rückerstattung",
    intro: "Folgen Sie diesen einfachen Schritten, um Ihre Mehrwertsteuerrückerstattung zu erhalten.",
    etape1: {
      titre: "Schritt 1: Beim Einkauf (Das Wichtigste!)",
      paiement_titre: "An der Kasse:",
      paiement_sezane: "**Bei Sézane:** Informieren Sie unser Team an der Kasse, dass Sie eine Mehrwertsteuerrückerstattung beantragen möchten.",
      paiement_passeport: "**Legen Sie Ihren ORIGINAL-Reisepass vor** (eine Kopie oder ein Foto reicht normalerweise nicht aus).",
      bve_titre: "Fordern Sie das Tax Free Formular (BVE) an:",
      bve_sezane: "**Bei Sézane:** Wir arbeiten mit **Global Blue** zusammen. Unser Team stellt das Formular direkt aus.",
      bve_verifier: "**Überprüfen Sie die Angaben** auf dem Formular vor dem Verlassen (Name, Land, Passnr.).",
      bve_garder: "**Bewahren Sie das Formular sicher auf.**",
    },
    etape2: {
      titre: "Schritt 2: Vor dem Verlassen der EU (Flughafen / Bahnhof / Grenze)",
      temps_titre: "Planen Sie ZEIT ein!",
      temps_texte: "Dieser Schritt ist entscheidend (mind. 30-60 Min. extra vor dem Check-in).",
      documents_titre: "Sammeln Sie Ihre Dokumente:",
      // --- VÉRIFICATION : Tableau de strings ---
      documents_liste: [
        "Ihren Reisepass",
        "Alle Ihre Tax Free Formulare (Sézane/Global Blue etc.)",
        "Ihre Reisetickets",
        "**Die gekauften Artikel:** Halten Sie sie griffbereit (Handgepäck), **neu, unbenutzt**.",
      ],
      // --- FIN VÉRIFICATION ---
      validation_titre: "Finden Sie den Zoll / PABLO-Terminals:",
      validation_moment: "Gehen Sie zum Tax-Refund-Bereich **BEVOR Sie Ihr Gepäck aufgeben**.",
      validation_borne: "Suchen Sie die elektronischen **\"PABLO\"-Terminals**. Siehe unseren [Abschnitt Wo validieren?](#ou-valider).", // Lien interne
      validation_action: "Validieren Sie Ihr Formular:",
      validation_scan: "Scannen Sie den Barcode Ihres Sézane/Global Blue Formulars.",
      validation_ok: "✅ **Grüner Bildschirm \"OK Formular validiert\":** Perfekt! Validierung erfolgreich.",
      validation_ko: "❌ **Roter Bildschirm / Fehler / Kein Terminal:** Gehen Sie **unbedingt zum Zollschalter** mit Dokumenten UND Waren. **Reisen Sie nicht ohne Validierung ab!**",
    },
    etape3: {
      titre: "Schritt 3: Erhalt Ihrer Rückerstattung (Nach Zollvalidierung)",
      intro: "Sobald Ihr Formular **vom Zoll validiert** wurde, können Sie Ihre Rückerstattung erhalten.",
      moyen_titre: "Wie? (Via Global Blue für Sézane-Einkäufe):",
      moyen_cb: "**Rückerstattung auf Kreditkarte (Empfohlen):** Global Blue schreibt den Betrag der Karte gut. Dauer: ca. 5 Tage - 3 Wochen.",
      moyen_cash: "**Barauszahlung am Flughafen:** Gehen Sie zu einem Global Blue Partnerschalter (z.B. Travelex) **NACH** dem Zoll. Achtung: Gebühren möglich.",
      montant_titre: "Wie viel?",
      montant_texte: "Nicht 100% der MwSt. Global Blue erhebt Gebühren. Sie erhalten ca. 10-12% des Bruttopreises (Betrag auf Formular).",
      fin: "Herzlichen Glückwunsch, Sie sind fertig!",
    }
  },

  // --- SECTION OU VALIDER ---
  ou_valider: { // Clé renommée
    titre: "Wo validieren Sie Ihr Tax Free Formular?",
    intro: "Für die Zollvalidierung (unerlässlich vor der Rückerstattung) müssen Sie zu den PABLO-Terminals oder Zollschaltern an Ihrem EU-Ausreisepunkt.",
    comment_trouver: "Achten Sie auf Schilder \"Détaxe / Tax Refund / Customs\" im Abflugbereich.",
    aeroports: {
      titre: "✈️ Wichtige Flughäfen",
      intro: "Häufigster Fall. Validierung MUSS vor der Gepäckaufgabe erfolgen.",
      cdg: "**Paris-Charles de Gaulle (CDG):** PABLO-Terminals und/oder Zollschalter in Hauptterminals (T1, T2A/C/D/E/F, T3). Folgen Sie der Beschilderung \"Détaxe / Tax Refund\".",
      ory: "**Paris-Orly (ORY):** PABLO-Terminals und/oder Zollschalter in Terminals Orly 1-2-3 und Orly 4.",
      autres: "**Andere große Flughäfen:** Ähnliche Dienste an großen internationalen Flughäfen (Nizza, Lyon, Marseille...).",
    },
    gares: {
      titre: "🚆 Wichtige internationale Bahnhöfe",
      intro: "Wenn Sie die EU per Zug verlassen.",
      eurostar: "**Paris - Gare du Nord (Eurostar nach London):** Eigener Tax-Refund-Bereich VOR Pass-/Sicherheitskontrolle. Planen Sie Zeit ein.",
    },
    frontieres_routieres: {
      titre: "🚗 Straßengrenzen (insb. zur Schweiz)",
      intro: "Wenn Sie Frankreich per Auto verlassen.",
      suisse: "**Zur Schweiz:** Französische Zollämter an Hauptübergängen (z.B. bei Genf; La Ferrière). Prüfen Sie Tax-Free-Service und Öffnungszeiten.",
      autres_pays: "**Zu anderen Nicht-EU-Ländern (Andorra...):** Informieren Sie sich über Zollämter am Übergang.",
    },
    ports: {
      titre: "🚢 Seehäfen (Fähre)",
      intro: "Wenn Sie eine Fähre in ein Nicht-EU-Land nehmen (z.B. UK).",
      exemples: "Tax-Refund-Dienste (Terminals oder Schalter) in Passagierterminals (Calais, Dunkerque...).",
    },
    conseil_final: {
      titre: "Wichtiger Tipp!",
      texte: "Genaue Standorte und Öffnungszeiten können variieren. Überprüfen Sie diese Informationen immer auf der offiziellen Website Ihres Abfahrtsortes oder des französischen Zolls vor Ihrer Reise. Planen Sie zusätzliche Zeit ein!",
    }
  },

  // --- SECTION FAQ ---
  faq: {
    titre: "Häufig gestellte Fragen (FAQ)",
    intro: "Finden Sie hier Antworten auf die häufigsten Fragen.",
    q1_q: "F1: Bin ich berechtigt, wenn ich nach Brexit aus UK komme?",
    q1_a: "A: Ja, wenn Sie in UK (außer NI) oder Gibraltar/Kanalinseln wohnen. Einwohner Nordirlands nicht. Pass nicht vergessen.",
    q2_q: "F2: Mindestkaufbetrag bei Sézane?",
    q2_a: "A: 100,01 € inkl. MwSt. oder mehr, am selben Tag, in derselben Sézane-Boutique.",
    q3_q: "F3: Kann ich Sézane-Einkäufe über Tage sammeln?",
    q3_a: "A: Nein, der Betrag muss am selben Tag im selben Geschäft erreicht werden.",
    q4_q: "F4: Wie beantrage ich das Formular in der Sézane-Boutique?",
    q4_a: "A: Fragen Sie an der Kasse mit Ihrem Original-Reisepass. Wir stellen ein Global Blue Formular aus.",
    q5_q: "F5: Formular vergessen anzufordern, kann ich zurück?",
    q5_a: "A: Nein, es muss beim Kauf angefordert werden.",
    q6_q: "F6: Tax Free für online bestellt & abgeholt?",
    q6_a: "A: Ja! Wenn berechtigt, Formular bei Abholung mit Pass anfordern (wenn > 100,01€).",
    q7_q: "F7: Wie viel Zeit am Flughafen (CDG/Orly)?",
    q7_a: "A: VIEL! Mind. 30-60 Min. extra, VOR Gepäckaufgabe.",
    q8_q: "F8: Wo sind PABLO / Zoll in Paris?",
    q8_a: "A: Sehen Sie in unserem [Abschnitt Wo validieren?](#ou-valider). Sie sind im Abflugbereich ausgeschildert.", // Lien interne
    q9_q: "F9: Muss ich Sézane-Artikel zeigen? Darf ich sie tragen?",
    q9_a: "A: Seien Sie bereit, sie zu zeigen. Neu, unbenutzt, mit Etikett, griffbereit aufbewahren. Nicht vor Ausreise tragen.",
    q10_q: "F10: Was tun, wenn PABLO defekt / rot anzeigt?",
    q10_a: "A: Sofort zum Zollschalter mit Pass, Papierformular und Waren gehen.",
    q11_q: "F11: Wie erstattet Global Blue (Sézane)?",
    q11_a: "A: Nach Zollvalidierung, per Kreditkarte (empfohlen, 5T-3W Dauer) oder Bar (Partnerschalter, Gebühren mögl.).",
    q12_q: "F12: Welchen genauen Betrag bekomme ich zurück?",
    q12_a: "A: Nicht 100% MwSt. (20%). Global Blue erhebt Gebühren. Ca. 10-12% des Bruttopreises (Betrag auf Formular).",
    q13_q: "F13: Dauer der Rückerstattung auf Kreditkarte?",
    q13_a: "A: Normalerweise 5 Werktage, kann aber bis zu 3 Wochen dauern.",
    q14_q: "F14: Ohne Validierung ausgereist, was nun?",
    q14_a: "A: Sehr selten. Nur bei nachgewiesenem Zollverschulden (Panne, Abwesenheit). Vergessen/Zeitnot ungültig. Zollverfahren innerhalb 6 Monate.",
    q15_q: "F15: Hat mein Formular ein Ablaufdatum?",
    q15_a: "A: Ja! Zollvalidierung vor Ende des 3. Monats nach dem Kaufmonat.",
  },

  // --- DISCLAIMER ---
  disclaimer: {
    titre: "Impressum & Haftungsausschluss",
    texte: "Diese Informationen dienen nur zur Orientierung, basierend auf offiziellen Texten ([lien douane.gouv.fr]) und Global Blue Praktiken ([lien globalblue.com]), Stand [Date MAJ Site]. Regeln können sich ändern. Überprüfen Sie immer offizielle Quellen. Sézane haftet nicht für veraltete Infos oder Ablehnung."
  },

} as const; // Important for type-safety
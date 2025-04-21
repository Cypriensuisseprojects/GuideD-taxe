// src/i18n/es.ts (Versión Completa Corregida y Alineada)
export default {
  // --- METADATOS ---
  metadata: {
    title: "Guía Tax Free Sézane | Simplifica tu Devolución de IVA",
    description: "La guía oficial y sencilla de Sézane para entender y realizar con éxito la devolución del IVA de tus compras en Francia. Pasos clave, elegibilidad, validación PABLO y reembolso Global Blue.",
  },

  // --- HEADER ---
  header: {
    logo_title: 'Guía Tax Free Sézane', // Título principal
    logo_subtitle: 'Recupera el IVA de tus compras', // Subtítulo
    eligibility: 'Elegibilidad',
    steps: 'Pasos',
    map: '¿Dónde validar?', // Clave para el enlace de navegación
    faq: 'FAQ',
    theme_toggle_aria: 'Cambiar al tema {theme}', // {theme} = claro / oscuro
    theme_light: 'claro',
    theme_dark: 'oscuro',
    change_lang_aria: 'Cambiar idioma a {lang}', // {lang} = Français / English / Español etc.
    flag_alt: 'Bandera {lang}', // {lang} = FR / EN / ES etc.
  },

  // --- FOOTER ---
  footer: {
    disclaimer: 'Aviso Legal y Descargo de Responsabilidad',
    copyright_start: '© {year} ',
    copyright_link_text: 'Suisse Corporation',
    copyright_end: ' - Todos los derechos reservados',
  },

  // --- ACCUEIL (Diseño 2 columnas, sin H1) ---
  accueil: {
    // titre_h1: "Recupera el IVA de tus compras en Sézane", // <-- ELIMINADO
    col1_titre: "¿Devolución de IVA (Tax Free)? ¡Es sencillo!",
    col1_texte: "Cuando compras en Francia (¡en Sézane, por ejemplo!) durante tu viaje, pagas un impuesto llamado IVA. Si vives fuera de la Unión Europea, puedes recuperar parte de este impuesto después de tu salida. ¡Es una ventaja pensada especialmente para viajeros como tú!",
    col2_titre: "¿Cómo funciona?",
    lien_nav_1_titre: "¿Quién y Qué?",
    lien_nav_1_texte: "Condiciones y compras afectadas.",
    lien_nav_2_titre: "¿Cómo?",
    lien_nav_2_texte: "Los pasos clave (compra, validación, reembolso).",
    lien_nav_3_titre: "¿Dónde?",
    lien_nav_3_texte: "Encontrar los puntos de validación.",
    lien_nav_4_titre: "FAQ:",
    lien_nav_4_texte: "Respuestas a preguntas frecuentes.",
    note_langue: "(Nota: Puedes cambiar de idioma en cualquier momento mediante el selector.)",
  },

  // --- SECCIÓN ELEGIBILIDAD ---
  eligibilite: {
    titre: "¿Eres elegible para la devolución del IVA?",
    intro: "Para poder beneficiarte de la devolución del IVA sobre tus compras, debes cumplir **todas** las siguientes condiciones:",
    residence: {
      titre: "1. Tu Residencia:",
      condition: "✅ Debes tener tu residencia habitual **fuera de la Unión Europea** (y fuera de ciertos territorios específicos como los DOM, Mónaco, etc.) en la fecha de las compras.",
      note: "Info Práctica: Los residentes del Reino Unido (excluida Irlanda del Norte), Suiza, Noruega son elegibles.",
    },
    sejour: {
      titre: "2. Tu Estancia:",
      condition: "✅ Debes estar de paso por Francia (o la UE) por **menos de 6 meses**.",
    },
    age: {
      titre: "3. Tu Edad:",
      condition: "✅ Debes tener **16 años cumplidos** en el momento de la compra.",
    },
    achats: {
      titre: "4. Tus Compras:",
      condition_montant: "✅ El importe total de tus compras, **IVA incluido (TTC)**, debe ser **superior a 100,00 €** (es decir, 100,01 € o más).",
      condition_sezane: "**En Sézane:** Este importe debe alcanzarse **en el mismo día** en una de nuestras boutiques.",
      note_cumul: "(Nota: Para simplificar en Sézane, intenta alcanzar 100,01 € el mismo día).",
      condition_usage: "✅ Las compras deben ser **ventas al por menor para uso personal** (te las llevas en tu equipaje).",
    },
    produits: {
      titre: "¿Qué productos están incluidos?",
      eligibles: "La mayoría de los artículos de Sézane (ropa, marroquinería, zapatos, accesorios) son elegibles.",
      exclus_titre: "Atención, ciertos bienes están EXCLUIDOS de la devolución del IVA:",
      // --- VERIFICACIÓN: Array de strings ---
      exclus_liste: [
        "❌ Tabaco manufacturado",
        "❌ Servicios (reparaciones, transporte, alojamiento, etc.)",
        "❌ Bienes sujetos a embargo",
        "❌ Armas (Categorías A y B)",
        "❌ Bienes culturales que superen ciertos umbrales",
        "❌ Productos consumidos en el lugar",
      ],
      // --- FIN VERIFICACIÓN ---
      lien_douanes_texte: "Para una lista exhaustiva, consulta el sitio web oficial de la Aduana Francesa",
    }
  },

  // --- SECCIÓN PASOS ---
  etapes: {
    titre: "La Guía Paso a Paso de la Devolución del IVA",
    intro: "Sigue estos sencillos pasos para obtener tu devolución del IVA.",
    etape1: {
      titre: "Paso 1: Durante tu Compra (¡Lo más importante!)",
      paiement_titre: "Al momento de pagar:",
      paiement_sezane: "**En Sézane:** Informa a nuestro equipo en caja que deseas beneficiarte de la devolución del IVA.",
      paiement_passeport: "**Presenta tu pasaporte ORIGINAL** (una copia o foto generalmente no es suficiente).",
      bve_titre: "Solicita el Formulario Tax Free (BVE):",
      bve_sezane: "**En Sézane:** Trabajamos con **Global Blue**. Nuestro equipo emitirá directamente el formulario.",
      bve_verifier: "**Verifica la información** en el formulario antes de salir (Nombre, País, N° Pasaporte).",
      bve_garder: "**Guarda el formulario cuidadosamente.**",
    },
    etape2: {
      titre: "Paso 2: Antes de Salir de la UE (Aeropuerto / Estación / Frontera)",
      temps_titre: "¡Prevé TIEMPO!",
      temps_texte: "Este paso es crucial (mín. 30-60 minutos adicionales antes de facturar).",
      documents_titre: "Reúne tus documentos:",
      // --- VERIFICACIÓN: Array de strings ---
      documents_liste: [
         "Tu pasaporte",
         "Todos tus formularios Tax Free (Sézane/Global Blue y otros)",
         "Tus billetes de transporte",
         "**Los artículos comprados:** Mantenlos accesibles (equipaje de mano), **nuevos, sin usar**.",
      ],
      // --- FIN VERIFICACIÓN ---
      validation_titre: "Encuentra la Aduana / Terminales PABLO:",
      validation_moment: "Dirígete a la zona de Tax Refund **ANTES de facturar tu equipaje**.",
      validation_borne: "Localiza los terminales electrónicos **\"PABLO\"**. Consulta nuestra [sección Dónde Validar?](#ou-valider).", // Lien interne
      validation_action: "Valida tu formulario:",
      validation_scan: "Escanea el código de barras de tu formulario Sézane/Global Blue.",
      validation_ok: "✅ **Pantalla Verde \"OK Formulario validado\":** ¡Perfecto! Validación correcta.",
      validation_ko: "❌ **Pantalla Roja / Error / No hay terminal:** Dirígete **imperativamente a la ventanilla de Aduanas** con documentos Y mercancía. **¡No te vayas sin validar!**",
    },
    etape3: {
      titre: "Paso 3: Obtener Tu Devolución (Después de validación aduanera)",
      intro: "Una vez que tu formulario esté **validado por la aduana**, puedes obtener tu devolución.",
      moyen_titre: "¿Cómo? (Via Global Blue para compras Sézane):",
      moyen_cb: "**Devolución a Tarjeta Bancaria (Recomendado):** Global Blue abonará la tarjeta registrada. Plazo: aprox. 5 días - 3 semanas.",
      moyen_cash: "**Devolución en Efectivo (Cash) en el aeropuerto:** Dirígete a un mostrador asociado a Global Blue (ej: Travelex) **DESPUÉS** de la aduana. Atención: cargos posibles.",
      montant_titre: "¿Qué Cantidad?",
      montant_texte: "No recuperas el 100% del IVA. Global Blue aplica gastos. El importe se indica en tu formulario (aprox. 10-12% del precio TTC).",
      fin: "¡Felicidades, has terminado!",
    }
  },

  // --- SECCIÓN DÓNDE VALIDAR ---
  ou_valider: { // Clave renombrada
    titre: "¿Dónde Validar tu Formulario Tax Free?",
    intro: "Para obtener la validación aduanera de tu formulario (paso indispensable antes del reembolso), debes dirigirte a los terminales PABLO o a las ventanillas de la aduana francesa situadas en tu punto de salida de la Unión Europea.",
    comment_trouver: "Busca la señalización \"Détaxe / Tax Refund / Customs\" en tu zona de salida.",
    aeroports: {
      titre: "✈️ Principales Aeropuertos",
      intro: "Es el caso más frecuente. La validación debe hacerse ANTES de facturar el equipaje.",
      cdg: "**París-Charles de Gaulle (CDG):** Terminales PABLO y/o ventanillas de aduanas disponibles en las principales terminales (T1, T2A, T2C, T2D, T2E, T2F, T3). Sigue la señalización \"Détaxe / Tax Refund\".",
      ory: "**París-Orly (ORY):** Terminales PABLO y/o ventanillas de aduanas disponibles en las terminales Orly 1-2-3 y Orly 4.",
      autres: "**Otros grandes aeropuertos:** Servicios similares en los grandes aeropuertos internacionales (Niza, Lyon, Marsella...).",
    },
    gares: {
      titre: "🚆 Principales Estaciones Internacionales",
      intro: "Si sales de la UE en tren.",
      eurostar: "**París - Gare du Nord (Eurostar hacia Londres):** Zona de Tax Refund específica ANTES del control de pasaportes/seguridad. Prevé tiempo.",
    },
    frontieres_routieres: {
        titre: "🚗 Fronteras Terrestres (especialmente hacia Suiza)",
        intro: "Si sales de Francia en coche.",
        suisse: "**Hacia Suiza:** Puestos de aduanas franceses en los principales puntos de paso (ej: cerca de Ginebra; La Ferrière). Verifica el servicio de Tax Free y los horarios.",
        autres_pays: "**Hacia otros países fuera de la UE (Andorra...):** Infórmate sobre los puestos de aduanas en el punto de salida.",
    },
    ports: {
      titre: "🚢 Puertos Marítimos (Ferry)",
      intro: "Si tomas un ferry hacia un país fuera de la UE (ej: Reino Unido).",
      exemples: "Servicios de Tax Refund (terminales o ventanillas) en las terminales de pasajeros (Calais, Dunkerque...).",
    },
    conseil_final: {
      titre: "¡Consejo Importante!",
      texte: "Las ubicaciones exactas y los horarios pueden variar. Verifica siempre esta información en el sitio web oficial de tu punto de salida o de la Aduana Francesa antes de tu viaje. ¡Prevé tiempo adicional!",
    }
  },

   // --- SECCIÓN FAQ ---
  faq: {
    titre: "Preguntas Frecuentes (FAQ)",
    intro: "Encuentra aquí las respuestas a las preguntas más comunes.",
    q1_q: "P1: ¿Soy elegible si vengo de UK después del Brexit?",
    q1_a: "R: Sí, si resides en UK (excl. Irlanda del Norte) o Gibraltar/Islas del Canal. Residentes de Irlanda del Norte no. No olvides tu pasaporte.",
    q2_q: "P2: ¿Importe mínimo de compra en Sézane?",
    q2_a: "R: 100,01 € TTC o más, mismo día, misma boutique Sézane.",
    q3_q: "P3: ¿Puedo acumular compras de Sézane de varios días?",
    q3_a: "R: No, el importe debe alcanzarse el mismo día en la misma boutique.",
    q4_q: "P4: ¿Cómo pedir el formulario en la boutique Sézane?",
    q4_a: "R: Pídelo en caja con tu pasaporte original. Emitiremos un formulario Global Blue.",
    q5_q: "P5: Olvidé pedir el formulario, ¿puedo volver?",
    q5_a: "R: No, debe solicitarse en el momento de la compra.",
    q6_q: "P6: ¿Tax Free para pedido online recogido en tienda?",
    q6_a: "R: ¡Sí! Si eres elegible, pide el formulario al recoger con pasaporte (si > 100,01€).",
    q7_q: "P7: ¿Cuánto tiempo prever en el aeropuerto (CDG/Orly)?",
    q7_a: "R: ¡MUCHO! Al menos 30-60 min extra, ANTES de facturar.",
    q8_q: "P8: ¿Dónde están PABLO / aduanas en París?",
    q8_a: "R: Consulta nuestra [sección Dónde Validar?](#ou-valider). Están señalizados en salidas.", // Lien interne
    q9_q: "P9: ¿Mostrar artículos Sézane? ¿Puedo usarlos?",
    q9_a: "R: Prepárate para mostrarlos. Guárdalos nuevos, sin usar, etiquetados, accesibles. No los uses antes de salir de la UE.",
    q10_q: "P10: ¿Qué hacer si PABLO falla / pantalla roja?",
    q10_a: "R: Ir inmediatamente a la ventanilla de Aduanas con pasaporte, formulario papel y compras.",
    q11_q: "P11: ¿Cómo me reembolsa Global Blue (Sézane)?",
    q11_a: "R: Tras validación aduanera, por Tarjeta (recomendado, 5d-3sem) o Efectivo (mostrador asociado, cargos posibles).",
    q12_q: "P12: ¿Qué importe exacto recuperaré?",
    q12_a: "R: No el 100% del IVA (20%). Global Blue cobra gastos. Aprox. 10-12% del precio TTC (importe en formulario).",
    q13_q: "P13: ¿Plazo de reembolso a tarjeta?",
    q13_a: "R: Generalmente 5 días laborables, pero puede tardar hasta 3 semanas.",
    q14_q: "P14: Salí de Francia sin validar, ¿qué hago?",
    q14_a: "R: Muy raro. Solo si se prueba fallo de la aduana (avería, ausencia). Olvido/falta de tiempo no válidos. Trámite Aduanas en 6 meses.",
    q15_q: "P15: ¿Mi formulario caduca?",
    q15_a: "R: ¡Sí! Validación aduanera antes fin del 3er mes tras mes de compra.",
  },

  // --- DISCLAIMER ---
   disclaimer: {
     titre: "Aviso Legal y Descargo de Responsabilidad",
     texte: "Esta información se proporciona a título orientativo, basada en textos oficiales ([lien douane.gouv.fr]) y prácticas de Global Blue ([lien globalblue.com]), a fecha de [Date MAJ Site]. Las reglas pueden cambiar. Verifique siempre fuentes oficiales. Sézane no se responsabiliza de infos obsoletas o denegación de devolución."
   },

} as const; // Important for type-safety
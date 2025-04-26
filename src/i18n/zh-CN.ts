// src/i18n/zh-CN.ts (Version Complète Corrigée et Alignée)
export default {
  // --- META DONNEES ---
  metadata: {
    title: "Sézane 退税指南 | 简化您的增值税退税流程",
    description: "Sézane 官方简明指南，助您了解并成功申请法国购物增值税退税。关键步骤、资格要求、PABLO 验证及 Global Blue 退税。",
  },

  // --- HEADER ---
  header: {
    logo_title: 'Sézane 退税指南', // Titre principal
    logo_subtitle: '购物即可享受增值税退税', // Sous-titre
    eligibility: '资格',
    steps: '步骤',
    map: '在哪验证？', // Clé pour le lien de navigation
    faq: '常见问题',
    theme_toggle_aria: '切换到{theme}模式', // {theme} = 亮色 / 暗色
    theme_light: '亮色',
    theme_dark: '暗色',
    change_lang_aria: '切换语言至 {lang}', // {lang} = Français / English / 中文 etc.
    flag_alt: '{lang}国旗', // {lang} = FR / EN / CN etc.
  },

  // --- FOOTER ---
  footer: {
    disclaimer: '法律声明与免責声明',
    copyright_start: '© {year} ',
    copyright_link_text: 'Suisse Corporation',
    copyright_end: ' - 版权所有',
  },

  // --- ACCUEIL (Mise en page 2 colonnes, sans H1) ---
  accueil: {
    // titre_h1: "在 Sézane 购物即可获得增值税退税", // <-- SUPPRIMÉ
    col1_titre: "什么是购物退税？很简单！",
    col1_texte: "当您在法国旅行期间购物（例如在 Sézane！），您支付的商品价格中包含一种称为增值税（VAT）的税款。如果您居住在欧盟以外，您可以在离开后申请退还部分税款。这是专为像您这样的旅客设计的福利！",
    col2_titre: "如何操作？",
    lien_nav_1_titre: "谁可以 & 什么商品？",
    lien_nav_1_texte: "符合条件的资格和购物。",
    lien_nav_2_titre: "如何操作？",
    lien_nav_2_texte: "关键步骤（购物、验证、退税）。",
    lien_nav_3_titre: "在哪里？",
    lien_nav_3_texte: "查找验证地点。",
    lien_nav_4_titre: "常见问题:",
    lien_nav_4_texte: "常见问题解答。",
    note_langue: "（注意：您可以随时使用选择器更改语言。）",
  },

  // --- SECTION ELIGIBILITE ---
  eligibilite: {
    titre: "您符合增值税退税资格吗？",
    intro: "为了能够享受购物增值税退税，您必须满足**所有**以下条件：",
    residence: {
      titre: "1. 您的居住地：",
      condition: "✅ 在购物之日，您的常住地必须在**欧盟以外**（且在某些特定地区之外，如法国海外省、摩纳哥等）。",
      note: "实用信息：英国（北爱尔兰除外）、瑞士、挪威的居民符合资格。",
    },
    sejour: {
      titre: "2. 您的逗留时间：",
      condition: "✅ 您在法国（或欧盟）的逗留时间必须**少于 6 个月**。",
    },
    age: {
      titre: "3. 您的年龄：",
      condition: "✅ 购物时您必须**年满 16 周岁**。",
    },
    achats: {
      titre: "4. 您的购物：",
      condition_montant: "✅ 您购物的总金额（**含增值税 - TTC**）必须**超过 100.00 欧元**（即 100.01 欧元或更多）。",
      condition_sezane: "**在 Sézane：**必须在**同一天**在我们的任一精品店达到此金额。",
      note_cumul: "（注意：为简化起见，在 Sézane 请争取在同一天达到 100.01 欧元）。",
      condition_usage: "✅ 购物必须是**个人用途的零售商品**（您将其放在个人行李中携带出境）。",
    },
    produits: {
      titre: "哪些产品符合条件？",
      eligibles: "大多数 Sézane 商品（服装、皮具、鞋履、配饰）都符合退税条件。",
      exclus_titre: "注意，某些商品通常被排除在增值税退税之外：",
      // --- VERIFICATION: Array de strings ---
      exclus_liste: [
        "❌ 加工烟草",
        "❌ 服务（维修、交通、住宿等）",
        "❌ 受禁运的商品",
        "❌ 武器（A 类和 B 类）",
        "❌ 超过特定阈值的文化产品",
        "❌ 当地消费的产品",
      ],
      // --- FIN VERIFICATION ---
      lien_douanes_texte: "有关完整列表，请查阅法国海关官方网站",
    }
  },

  // --- SECTION ETAPES ---
  etapes: {
    titre: "增值税退税分步指南",
    intro: "请按照以下简单步骤获取您的增值税退税。",
    etape1: {
      titre: "第 1 步：购物时（最重要！）",
      paiement_titre: "付款时：",
      paiement_sezane: "**在 Sézane：**请告知我们收银台的团队您希望申请退税。",
      paiement_passeport: "**出示您的护照原件**（复印件或照片通常不接受）。",
      bve_titre: "索取退税单 (BVE)：",
      bve_sezane: "**在 Sézane：**我们与**Global Blue**合作。我们的团队将直接为您开具表格。",
      bve_verifier: "**离开前请核对表格信息**（姓名、国家、护照号码）。",
      bve_garder: "**请妥善保管退税单。**",
    },
    etape2: {
      titre: "第 2 步：离开欧盟前（机场/火车站/边境）",
      temps_titre: "预留充足的时间！",
      temps_texte: "这一步至关重要（请在办理登机手续前至少预留 30-60 分钟）。",
      documents_titre: "准备好您的文件：",
      // --- VERIFICATION: Array de strings ---
      documents_liste: [
        "您的护照",
        "您所有的退税单（Sézane/Global Blue 及其他）",
        "您的交通票据",
        "**购买的商品：**请放在易于取用的地方（手提行李），保持**未使用的新品**状态。",
      ],
      // --- FIN VERIFICATION ---
      validation_titre: "寻找海关 / PABLO 自助退税终端：",
      validation_moment: "**在托运行李之前**前往退税区域。",
      validation_borne: "寻找**“PABLO”**电子自助退税终端。请参阅我们的[在哪验证？部分](#ou-valider)。", // Lien interne
      validation_action: "验证您的退税单：",
      validation_scan: "扫描您的 Sézane/Global Blue 退税单条形码。",
      validation_ok: "✅ **绿色屏幕“OK 表格已验证”：** 太好了！验证成功。",
      validation_ko: "❌ **红色屏幕/错误信息/无终端：****必须**携带文件和商品前往**海关柜台**。**在未完成验证前请勿离开！**",
    },
    etape3: {
      titre: "第 3 步：获取您的退税（海关验证后）",
      intro: "一旦您的表格**经海关验证**，您就可以领取退税款。",
      moyen_titre: "如何领取？（Sézane 购物通过 Global Blue）：",
      moyen_cb: "**退税至信用卡（推荐）：** Global Blue 将款项退至注册卡。时间：约 5 天至 3 周。",
      moyen_cash: "**在机场领取现金：****通过海关后**前往 Global Blue 合作退税点（如 Travelex）。注意：可能产生费用。",
      montant_titre: "退多少？",
      montant_texte: "不是 100% 的增值税。Global Blue 收取手续费。您将收到约含税价格 10-12% 的退税（金额见表格）。",
      fin: "恭喜您，操作完成！",
    }
  },

  // --- SECTION OU VALIDER ---
  ou_valider: { // Clé renommée
    titre: "在哪里验证您的退税单？",
    intro: "要获得海关对您退税单的验证（退税前的必要步骤），您需要前往位于您离开欧盟的离境点的 PABLO 自助退税终端或法国海关柜台。",
    comment_trouver: "在您的出发区域寻找“Détaxe / Tax Refund / Customs”标识。",
    aeroports: {
      titre: "✈️ 主要机场",
      intro: "最常见的情况。验证必须在托运行李之前完成。",
      cdg: "**巴黎戴高乐机场 (CDG)：** 主要航站楼（T1, T2A/C/D/E/F, T3）均设有 PABLO 终端和/或海关柜台。请跟随“Détaxe / Tax Refund”标识。",
      ory: "**巴黎奥利机场 (ORY)：** Orly 1-2-3 和 Orly 4 航站楼设有 PABLO 终端和/或海关柜台。",
      autres: "**其他主要机场：** 尼斯(NCE)、里昂(LYS)、马赛(MRS)等大型国际机场提供类似服务。",
    },
    gares: {
      titre: "🚆 主要国际火车站",
      intro: "如果您乘火车离开欧盟。",
      eurostar: "**巴黎 - Gare du Nord（前往伦敦的欧洲之星）：** 在护照/安检前设有专门的退税区。请预留时间。",
    },
    frontieres_routieres: {
      titre: "🚗 公路边境（尤其是往瑞士方向）",
      intro: "如果您驾车离开法国。",
      suisse: "**往瑞士方向：** 主要过境点（如日内瓦附近；La Ferrière）设有法国海关。请查询退税服务和开放时间。",
      autres_pays: "**往其他非欧盟国家（安道尔...）：** 请在离境点咨询海关。",
    },
    ports: {
      titre: "🚢 海港（渡轮）",
      intro: "如果您乘坐渡轮前往非欧盟国家（如英国）。",
      exemples: "主要港口（加来、敦刻尔克等）的客运码头提供退税服务（终端或柜台）。",
    },
    conseil_final: {
      titre: "重要提示！",
      texte: "确切位置和开放时间可能有所不同。出行前请务必在您的离境点官网或法国海关网站上核实最新信息。请务必为这些手续预留额外时间！",
    }
  },

  // --- SECTION FAQ ---
  faq: {
    titre: "常见问题解答 (FAQ)",
    intro: "在此查找最常见问题的答案。",
    q1_q: "Q1: 脱欧后，从英国来可以退税吗？",
    q1_a: "A: 是的，如果您居住在英国（北爱尔兰除外）或直布罗陀/海峡群岛。北爱尔兰居民除外。别忘了带护照。",
    q2_q: "Q2: 在 Sézane 的最低消费金额是多少？",
    q2_a: "A: 同一天在同一家 Sézane 精品店消费 100.01 欧元（含税）或以上。",
    q3_q: "Q3: 我可以累积几天在 Sézane 的消费吗？",
    q3_a: "A: 不可以，必须在同一天、同一家店达到金额要求。",
    q4_q: "Q4: 如何在 Sézane 店里申请退税单？",
    q4_a: "A: 付款时凭护照原件向店员申请。我们会开具 Global Blue 表格。",
    q5_q: "Q5: 忘记申请退税单了，能之后再补办吗？",
    q5_a: "A: 不能，必须在购物时申请。",
    q6_q: "Q6: 网购店取可以退税吗？",
    q6_a: "A: 可以！如符合资格，在取货时凭护照申请（需超过 100.01 欧元）。",
    q7_q: "Q7: 在机场 (CDG/Orly) 需要预留多少时间？",
    q7_a: "A: 很多！至少额外 30-60 分钟，在托运行李前。",
    q8_q: "Q8: 巴黎的 PABLO/海关在哪里？",
    q8_a: "A: 请查看我们的[在哪验证？部分](#ou-valider)。在出发区有指示牌。", // Lien interne
    q9_q: "Q9: 需要出示 Sézane 商品吗？可以提前穿吗？",
    q9_a: "A: 准备好出示。保持商品全新、未使用、带标签、易于取用。离开欧盟前不要穿戴。",
    q10_q: "Q10: 如果 PABLO 坏了/显示红色怎么办？",
    q10_a: "A: 立即带上护照、纸质表格和商品去海关柜台。",
    q11_q: "Q11: Global Blue 如何退款 (Sézane)？",
    q11_a: "A: 海关验证后，通过信用卡（推荐，5天-3周）或现金（合作柜台，可能收费）。",
    q12_q: "Q12: 具体能退多少钱？",
    q12_a: "A: 不是全部增值税 (20%)。Global Blue 收取手续费。大约是含税价的 10-12%（金额见表格）。",
    q13_q: "Q13: 信用卡退款需要多久？",
    q13_a: "A: 通常 5 个工作日，但最多可能需要 3 周。",
    q14_q: "Q14: 离开法国前没验证怎么办？",
    q14_a: "A: 非常少见。仅当能证明是海关的错（故障、缺席）。忘记/没时间不行。需在 6 个月内向海关申请。",
    q15_q: "Q15: 我的退税单有有效期吗？",
    q15_a: "A: 有！必须在购物月份后的第三个月底前完成海关验证。",
  },

  // --- DISCLAIMER ---
  disclaimer: {
    titre: "法律声明与免責声明",
    texte: "本信息仅供参考，基于官方文件 ([lien douane.gouv.fr]) 和 Global Blue 实践 ([lien globalblue.com])，更新日期 [Date MAJ Site]。规定可能变更。请务必核实官方来源。Sézane 对过时信息或退税被拒不承担责任。"
  },

} as const; // Important for type-safety
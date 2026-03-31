export type Lang = "fr" | "en" | "he";
export type Currency = "eur" | "usd";

export const currencySymbol = { eur: "€", usd: "$" } as const;

export const PLANS = {
  trial: { eur: 149, usd: 159, videos: 1 },
  smallbiz: { eur: 399, usd: 449, videos: 4 },
  growth: { eur: 899, usd: 999, videos: 10 },
  scale: { eur: 1799, usd: 1999, videos: 25 },
  enterprise: { eur: 3499, usd: 3999, videos: 60 },
} as const;

export const PORTFOLIO = [
  { id: "v1", src: "/videos/luxury-watch.mp4", fr: "Montre de luxe — Pub produit", en: "Luxury watch — Product ad", he: "שעון יוקרה — פרסומת מוצר", tag: "E-commerce", platform: "Instagram" },
  { id: "v2", src: "/videos/store-lifestyle.mp4", fr: "Entrée boutique — Lifestyle", en: "Store entrance — Lifestyle", he: "כניסה לחנות — סגנון חיים", tag: "Retail", platform: "TikTok" },
  { id: "v3", src: "/videos/watch-mechanism.mp4", fr: "Mécanisme horloger — Détail", en: "Watch mechanism — Close-up", he: "מנגנון שעון — תקריב", tag: "Luxe", platform: "Reels" },
  { id: "v4", src: "/videos/spokesperson.mp4", fr: "Porte-parole IA — Corporate", en: "AI Spokesperson — Corporate", he: "דובר/ת AI — תאגידי", tag: "Corporate", platform: "LinkedIn" },
  { id: "v5", src: "/videos/comic-animation.mp4", fr: "Animation BD — Créatif", en: "Comic animation — Creative", he: "אנימציית קומיקס — יצירתי", tag: "Créatif", platform: "TikTok" },
  { id: "v6", src: "/videos/car-brand.mp4", fr: "Marque auto — Lancement", en: "Car brand — Launch", he: "מותג רכב — השקה", tag: "Automobile", platform: "YouTube" },
] as const;

export const translations = {
  fr: {
    nav: { cta: "Démarrer", demo: "Réalisations", pricing: "Tarifs", contact: "Contact" },
    hero: {
      badge: "✦ Kling 3.0 · ElevenLabs · CapCut Pro",
      title1: "Votre contenu social media.",
      title2: "Livré en 48h.",
      sub: "Vidéos IA premium pour TikTok, Instagram Reels et LinkedIn. Voix off, sous-titres, musique. Tout inclus.",
      cta1: "Essayer pour €149 →",
      cta2: "Voir nos réalisations",
      stat1val: "48h", stat1label: "Délai de livraison",
      stat2val: "60+", stat2label: "Vidéos produites",
      stat3val: "100%", stat3label: "Satisfaction client",
    },
    demo: { badge: "Réalisations", title: "Nos dernières productions" },
    demoDisclaimer: "Vidéos produites avec Kling 3.0, ElevenLabs et CapCut Pro.",
    how: {
      badge: "Processus",
      title: "Simple comme bonjour",
      steps: [
        { num: "01", title: "Brief en 15 minutes", desc: "5 questions sur votre marque, vos cibles et vos objectifs. C'est tout." },
        { num: "02", title: "Production IA en 24h", desc: "Notre studio IA génère vos vidéos : visuels, voix, sous-titres, musique. Tout inclus." },
        { num: "03", title: "Livraison & Publication", desc: "Fichiers prêts à publier. On peut aussi gérer la publication pour vous." },
      ],
    },
    clients: {
      label: "Idéal pour",
      list: ["E-commerce", "Immobilier", "Restaurants", "Coaches", "Agences", "SaaS", "Beauté", "Santé"],
    },
    pricing: {
      badge: "Tarifs",
      title: "Investissement mensuel",
      sub: "Sans engagement · Annulation à tout moment",
      popular: "POPULAIRE",
      bestValue: "MEILLEUR RAPPORT",
      onetime: "unique",
      perMonth: "/mois",
      cta: "Démarrer →",
      ctaTrial: "Tester maintenant →",
      ctaEnterprise: "Nous contacter →",
      trial: {
        name: "Essai",
        desc: "1 vidéo pour découvrir",
        features: ["1 vidéo (tout format)", "Sous-titres auto", "1 révision", "Livraison 48h"],
      },
      smallbiz: {
        name: "Small Business",
        desc: "Idéal pour démarrer",
        features: ["4 vidéos / mois", "TikTok ou Reels", "1 révision / vidéo", "Sous-titres auto", "✗ Voix off IA", "✗ Publication"],
      },
      growth: {
        name: "Growth",
        desc: "Le choix des pros",
        features: ["10 vidéos / mois", "TikTok + Reels + LinkedIn", "2 révisions / vidéo", "✓ Voix off IA", "✓ Sous-titres auto", "✗ Publication"],
      },
      scale: {
        name: "Scale",
        desc: "Volume & performance",
        features: ["25 vidéos / mois", "Tous formats", "Révisions illimitées", "✓ Voix off IA", "✓ Sous-titres auto", "✓ Publication incluse"],
      },
      enterprise: {
        name: "Enterprise",
        desc: "Clé en main, tout inclus",
        features: ["60+ vidéos / mois", "Formats illimités", "Révisions illimitées", "✓ Voice cloning dédié", "✓ Publication + Analytics", "✓ Account manager dédié", "✓ Priorité 24h"],
      },
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "C'est vraiment de l'IA ? Ça ne fait pas \"fake\" ?", a: "Kling 3.0 est le modèle vidéo IA le plus avancé au monde. La qualité est cinématique — la plupart des gens ne font pas la différence avec du contenu filmé." },
        { q: "Et si le résultat ne me plaît pas ?", a: "Chaque plan inclut des révisions. Si après révisions vous n'êtes toujours pas satisfait, on vous rembourse. Garanti." },
        { q: "Je peux annuler à tout moment ?", a: "Oui. Zéro engagement. Vous annulez quand vous voulez, sans frais ni questions." },
        { q: "Vous publiez aussi sur mes réseaux ?", a: "Le plan Scale inclut la publication. Sur les autres plans, vous pouvez l'ajouter en option." },
        { q: "Combien de temps pour recevoir les vidéos ?", a: "48h maximum après validation du brief. Souvent 24h." },
      ],
    },
    results: {
      badge: "Résultats",
      title: "Ce que nos clients obtiennent",
      items: [
        { metric: "x3", label: "d'engagement en moyenne" },
        { metric: "48h", label: "de la commande à la livraison" },
        { metric: "-70%", label: "vs agence traditionnelle" },
        { metric: "80%+", label: "de marge pour vous" },
      ],
    },
    testimonials: {
      title: "Ce que disent nos clients",
      list: [
        { name: "Sarah M.", role: "Fondatrice e-commerce", text: "En 3 semaines, on est passé de 0 à 80K followers TikTok. Les vidéos sont indiscernables d'un tournage pro." },
        { name: "Karim B.", role: "Agent immobilier", text: "Mes biens partent 2x plus vite depuis qu'on fait des Reels. Le ROI est dingue à ce prix." },
        { name: "Laura S.", role: "Coach nutrition", text: "12 nouveaux clients en 1 mois grâce aux vidéos. À €399/mois, c'est le meilleur investissement marketing." },
      ],
    },
    cta: {
      badge: "Prêt à démarrer ?",
      title1: "Votre premier contenu",
      title2: "dans 48h.",
      sub: "Testez avec 1 vidéo à €149. Sans engagement.",
      btn: "Commander ma première vidéo →",
      note: "Réponse sous 2h · Remboursement garanti",
    },
    footer: "© 2026 NovaMedia Studio · Powered by AI",
    currencyToggle: "Devise",
  },
  en: {
    nav: { cta: "Get started", demo: "Work", pricing: "Pricing", contact: "Contact" },
    hero: {
      badge: "✦ Kling 3.0 · ElevenLabs · CapCut Pro",
      title1: "Your social media content.",
      title2: "Delivered in 48h.",
      sub: "Premium AI videos for TikTok, Instagram Reels and LinkedIn. Voice-over, subtitles, music. All included.",
      cta1: "Try for $159 →",
      cta2: "See our work",
      stat1val: "48h", stat1label: "Delivery time",
      stat2val: "60+", stat2label: "Videos produced",
      stat3val: "100%", stat3label: "Client satisfaction",
    },
    demo: { badge: "Portfolio", title: "Our latest productions" },
    demoDisclaimer: "Videos produced with Kling 3.0, ElevenLabs and CapCut Pro.",
    how: {
      badge: "Process",
      title: "Ridiculously simple",
      steps: [
        { num: "01", title: "15-minute brief", desc: "5 questions about your brand, audience and goals. That's it." },
        { num: "02", title: "AI production in 24h", desc: "Our AI studio generates your videos: visuals, voice, subtitles, music. All included." },
        { num: "03", title: "Delivery & Publishing", desc: "Files ready to publish. We can also manage publishing for you." },
      ],
    },
    clients: {
      label: "Perfect for",
      list: ["E-commerce", "Real Estate", "Restaurants", "Coaches", "Agencies", "SaaS", "Beauty", "Health"],
    },
    pricing: {
      badge: "Pricing",
      title: "Monthly investment",
      sub: "No commitment · Cancel anytime",
      popular: "POPULAR",
      bestValue: "BEST VALUE",
      onetime: "one-time",
      perMonth: "/mo",
      cta: "Get started →",
      ctaTrial: "Try now →",
      ctaEnterprise: "Contact us →",
      trial: {
        name: "Trial",
        desc: "1 video to discover",
        features: ["1 video (any format)", "Auto subtitles", "1 revision", "48h delivery"],
      },
      smallbiz: {
        name: "Small Business",
        desc: "Perfect to start",
        features: ["4 videos / month", "TikTok or Reels", "1 revision / video", "Auto subtitles", "✗ AI voice-over", "✗ Publishing"],
      },
      growth: {
        name: "Growth",
        desc: "The pro choice",
        features: ["10 videos / month", "TikTok + Reels + LinkedIn", "2 revisions / video", "✓ AI voice-over", "✓ Auto subtitles", "✗ Publishing"],
      },
      scale: {
        name: "Scale",
        desc: "Volume & performance",
        features: ["25 videos / month", "All formats", "Unlimited revisions", "✓ AI voice-over", "✓ Auto subtitles", "✓ Publishing included"],
      },
      enterprise: {
        name: "Enterprise",
        desc: "Turnkey, all-inclusive",
        features: ["60+ videos / month", "Unlimited formats", "Unlimited revisions", "✓ Dedicated voice cloning", "✓ Publishing + Analytics", "✓ Dedicated account manager", "✓ 24h priority"],
      },
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Is this really AI? Won't it look fake?", a: "Kling 3.0 is the most advanced AI video model in the world. Quality is cinematic — most people can't tell the difference from filmed content." },
        { q: "What if I don't like the result?", a: "Every plan includes revisions. If you're still not satisfied after revisions, we refund you. Guaranteed." },
        { q: "Can I cancel anytime?", a: "Yes. Zero commitment. Cancel whenever you want, no fees, no questions asked." },
        { q: "Do you also post on my social media?", a: "The Scale plan includes publishing. On other plans, you can add it as an option." },
        { q: "How long to receive the videos?", a: "48h max after brief validation. Often 24h." },
      ],
    },
    results: {
      badge: "Results",
      title: "What our clients get",
      items: [
        { metric: "x3", label: "engagement on average" },
        { metric: "48h", label: "from order to delivery" },
        { metric: "-70%", label: "vs traditional agency" },
        { metric: "80%+", label: "margin for you" },
      ],
    },
    testimonials: {
      title: "What our clients say",
      list: [
        { name: "Sarah M.", role: "E-commerce founder", text: "In 3 weeks, we went from 0 to 80K TikTok followers. The videos are indistinguishable from pro shoots." },
        { name: "Karim B.", role: "Real estate agent", text: "Properties sell 2x faster since we started Reels. The ROI at this price is insane." },
        { name: "Laura S.", role: "Nutrition coach", text: "12 new clients in 1 month. At $449/mo, it's the best marketing investment I've ever made." },
      ],
    },
    cta: {
      badge: "Ready to start?",
      title1: "Your first content",
      title2: "in 48 hours.",
      sub: "Test with 1 video for $159. No commitment.",
      btn: "Order my first video →",
      note: "Reply within 2h · Money-back guarantee",
    },
    footer: "© 2026 NovaMedia Studio · Powered by AI",
    currencyToggle: "Currency",
  },
  he: {
    nav: { cta: "התחל עכשיו", demo: "עבודות", pricing: "מחירים", contact: "צור קשר" },
    hero: {
      badge: "✦ Kling 3.0 · ElevenLabs · CapCut Pro",
      title1: "התוכן שלך ברשתות.",
      title2: "מסירה תוך 48 שעות.",
      sub: "סרטוני AI פרמיום לטיקטוק, אינסטגרם ריילס ולינקדאין. קריינות, כתוביות, מוזיקה. הכל כלול.",
      cta1: "נסו ב-$159 בלבד ←",
      cta2: "צפו בעבודות שלנו",
      stat1val: "48 שעות", stat1label: "זמן מסירה",
      stat2val: "60+", stat2label: "סרטונים שהופקו",
      stat3val: "100%", stat3label: "שביעות רצון",
    },
    demo: { badge: "תיק עבודות", title: "ההפקות האחרונות שלנו" },
    demoDisclaimer: "סרטונים שהופקו עם Kling 3.0, ElevenLabs ו-CapCut Pro.",
    how: {
      badge: "תהליך",
      title: "פשוט להפליא",
      steps: [
        { num: "01", title: "בריפינג של 15 דקות", desc: "5 שאלות על המותג, הקהל והיעדים שלך. זהו." },
        { num: "02", title: "הפקת AI תוך 24 שעות", desc: "הסטודיו שלנו מייצר סרטונים: ויזואלים, קול, כתוביות, מוזיקה. הכל כלול." },
        { num: "03", title: "מסירה ופרסום", desc: "קבצים מוכנים לפרסום. אנחנו יכולים גם לנהל את הפרסום עבורך." },
      ],
    },
    clients: {
      label: "מושלם עבור",
      list: ["מסחר אלקטרוני", "נדל\"ן", "מסעדות", "מאמנים", "סוכנויות", "SaaS", "יופי", "בריאות"],
    },
    pricing: {
      badge: "מחירים",
      title: "השקעה חודשית",
      sub: "ללא התחייבות · ביטול בכל עת",
      popular: "פופולרי",
      bestValue: "משתלם ביותר",
      onetime: "חד פעמי",
      perMonth: "/חודש",
      cta: "התחל ←",
      ctaTrial: "נסה עכשיו ←",
      ctaEnterprise: "צור קשר ←",
      trial: {
        name: "ניסיון",
        desc: "סרטון אחד לגלות",
        features: ["סרטון אחד (כל פורמט)", "כתוביות אוטומטיות", "תיקון אחד", "מסירה תוך 48 שעות"],
      },
      smallbiz: {
        name: "עסק קטן",
        desc: "מושלם להתחלה",
        features: ["4 סרטונים / חודש", "טיקטוק או ריילס", "תיקון אחד / סרטון", "כתוביות אוטומטיות", "✗ קריינות AI", "✗ פרסום"],
      },
      growth: {
        name: "צמיחה",
        desc: "הבחירה של המקצוענים",
        features: ["10 סרטונים / חודש", "טיקטוק + ריילס + לינקדאין", "2 תיקונים / סרטון", "✓ קריינות AI", "✓ כתוביות אוטומטיות", "✗ פרסום"],
      },
      scale: {
        name: "סקייל",
        desc: "נפח וביצועים",
        features: ["25 סרטונים / חודש", "כל הפורמטים", "תיקונים ללא הגבלה", "✓ קריינות AI", "✓ כתוביות אוטומטיות", "✓ פרסום כלול"],
      },
      enterprise: {
        name: "Enterprise",
        desc: "מפתח ביד, הכל כלול",
        features: ["60+ סרטונים / חודש", "פורמטים ללא הגבלה", "תיקונים ללא הגבלה", "✓ שיבוט קול ייעודי", "✓ פרסום + אנליטיקס", "✓ מנהל חשבון ייעודי", "✓ עדיפות 24 שעות"],
      },
    },
    faq: {
      title: "שאלות נפוצות",
      items: [
        { q: "זה באמת AI? זה לא נראה מזויף?", a: "Kling 3.0 הוא מודל הווידאו AI המתקדם ביותר בעולם. האיכות קולנועית — רוב האנשים לא מבחינים בהבדל." },
        { q: "מה אם התוצאה לא מוצאת חן בעיניי?", a: "כל תוכנית כוללת תיקונים. אם אחרי התיקונים עדיין לא מרוצים, נחזיר לכם. מובטח." },
        { q: "אפשר לבטל בכל עת?", a: "כן. אפס התחייבות. מבטלים מתי שרוצים, ללא עלויות וללא שאלות." },
        { q: "אתם גם מפרסמים ברשתות שלי?", a: "תוכנית Scale כוללת פרסום. בתוכניות אחרות, אפשר להוסיף כאופציה." },
        { q: "כמה זמן עד שמקבלים את הסרטונים?", a: "48 שעות מקסימום אחרי אישור הבריף. לעתים קרובות 24 שעות." },
      ],
    },
    results: {
      badge: "תוצאות",
      title: "מה הלקוחות שלנו מקבלים",
      items: [
        { metric: "x3", label: "מעורבות בממוצע" },
        { metric: "48 שעות", label: "מהזמנה למסירה" },
        { metric: "-70%", label: "לעומת סוכנות מסורתית" },
        { metric: "80%+", label: "רווח עבורכם" },
      ],
    },
    testimonials: {
      title: "מה אומרים הלקוחות",
      list: [
        { name: "שרה מ.", role: "מייסדת חנות אונליין", text: "תוך 3 שבועות עברנו מ-0 ל-80K עוקבים בטיקטוק. הסרטונים לא נבדלים מצילום מקצועי." },
        { name: "כרים ב.", role: "סוכן נדל\"ן", text: "הנכסים נמכרים פי 2 מהר מאז שהתחלנו ריילס. ה-ROI במחיר הזה מטורף." },
        { name: "לורה ס.", role: "מאמנת תזונה", text: "12 לקוחות חדשים תוך חודש. ב-$449 לחודש, זו ההשקעה השיווקית הטובה ביותר." },
      ],
    },
    cta: {
      badge: "מוכנים להתחיל?",
      title1: "התוכן הראשון שלכם",
      title2: "תוך 48 שעות.",
      sub: "נסו עם סרטון אחד ב-$159. ללא התחייבות.",
      btn: "הזמינו את הסרטון הראשון ←",
      note: "תגובה תוך 2 שעות · החזר כספי מובטח",
    },
    footer: "© 2026 NovaMedia Studio · מופעל על ידי AI",
    currencyToggle: "מטבע",
  },
} as const;

export type Translations = typeof translations.fr;

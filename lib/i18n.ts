export type Language = "fr" | "en"

export interface Translation {
  [key: string]: string | Translation
}

export const translations: Record<Language, Translation> = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      howItWorks: "Comment ça fonctionne",
      landPurchase: "Achat de terrains",
      multiUnitPurchase: "Achat multilogements",
      testimonials: "Témoignages",
      faq: "FAQ",
      about: "À Propos",
      blog: "Blogue",
      getOffer: "Obtenir une offre",
      sellLand: "Vendre mon terrain",
      sellMultiUnit: "Vendre mon multilogement",
      contact: "Nous joindre",
    },
    // Hero Section
    hero: {
      title: "Vendez votre maison",
      titleHighlight: "rapidement et sans stress",
      subtitle: "Obtenez une offre comptant pour votre propriété sans commission, sans réparations et sans tracas.",
      subtitleBold: "Nous achetons TOUTES les maisons - même abandonnées ou en mauvais état!",
      noCommission: "Aucune commission ni frais cachés",
      asIs: "Achat de votre maison dans l'état actuel",
      evenAbandoned: "Même les maisons abandonnées!",
      getCashOffer: "Obtenir mon offre comptant",
      howItWorks: "Comment ça fonctionne",
    },
    // How It Works Page
    howItWorks: {
      title: "Comment fonctionne notre",
      titleHighlight: "processus d'achat",
      subtitle:
        "Découvrez notre approche simple et transparente pour acheter votre maison rapidement et sans tracas. Un processus conçu pour vous faire économiser du temps, de l'argent et du stress.",
      detailedProcessTitle: "Notre processus détaillé en 4 étapes",
      detailedProcessSubtitle: "Chaque étape est conçue pour être simple, transparente et sans stress pour vous.",

      // Step 1
      step1Title: "Soumettez vos informations",
      step1Description:
        "Remplissez notre formulaire simple en ligne avec les détails de base de votre propriété. Nous avons besoin seulement de l'adresse, de vos coordonnées et de quelques informations sur l'état général de la maison.",
      step1Feature1: "Formulaire rapide de 2 minutes",
      step1Feature2: "Aucune information financière requise",
      step1Feature3: "Processus 100% confidentiel",
      step1IconDesc: "Formulaire simple et sécurisé",

      // Step 2
      step2Title: "Évaluation et visite",
      step2Description:
        "Notre équipe d'experts évalue votre propriété en analysant le marché local, l'état de la maison et les réparations nécessaires. Nous planifions ensuite une visite rapide et respectueuse.",
      step2Feature1: "Analyse comparative du marché",
      step2Feature2: "Visite de 15-30 minutes seulement",
      step2Feature3: "Évaluation professionnelle gratuite",
      step2IconDesc: "Évaluation professionnelle",

      // Step 3
      step3Title: "Recevez votre offre",
      step3Description:
        "Dans les 24 heures suivant notre visite, nous vous présentons une offre équitable et transparente. Nous expliquons clairement comment nous sommes arrivés à ce montant et répondons à toutes vos questions.",
      step3Feature1: "Offre dans les 24 heures",
      step3Feature2: "Explication détaillée du calcul",
      step3Feature3: "Aucune obligation d'accepter",
      step3IconDesc: "Offre équitable et transparente",

      // Step 4
      step4Title: "Clôturez à votre rythme",
      step4Description:
        "Si vous acceptez notre offre, nous nous occupons de toute la paperasse et travaillons avec un notaire pour finaliser la transaction. Vous choisissez la date de clôture qui vous convient le mieux.",
      step4Feature1: "Vous choisissez la date de clôture",
      step4Feature2: "Nous payons tous les frais de clôture",
      step4Feature3: "Paiement comptant garanti",
      step4IconDesc: "Clôture rapide et sécurisée",

      // Why Different Section
      whyDifferentTitle: "Pourquoi notre processus est différent",
      whyDifferentSubtitle:
        "Nous avons conçu notre approche pour éliminer les problèmes courants de la vente immobilière traditionnelle.",

      speedTitle: "Rapidité",
      speedDesc: "Processus complet en quelques jours au lieu de plusieurs mois",

      securityTitle: "Sécurité",
      securityDesc: "Transaction sécurisée avec notaire et paiement comptant garanti",

      savingsTitle: "Économies",
      savingsDesc: "Aucune commission, frais de réparation ou coûts cachés",

      supportTitle: "Support",
      supportDesc: "Accompagnement personnalisé à chaque étape du processus",

      // Comparison Table
      comparisonTitle: "Comparaison des méthodes de vente",
      comparisonSubtitle: "Voyez clairement les avantages de notre approche par rapport à la vente traditionnelle.",

      aspectColumn: "Aspect",
      traditionalColumn: "Vente traditionnelle",
      ourServiceColumn: "Notre service",

      saleTimeAspect: "Délai de vente",
      saleTimeTraditional: "3-6 mois en moyenne",
      saleTimeOurs: "délai flexible",

      commissionsAspect: "Commissions",
      commissionsTraditional: "5-6% du prix de vente",
      commissionsOurs: "0% - Aucune commission",

      repairsAspect: "Réparations",
      repairsTraditional: "À vos frais",
      repairsOurs: "Aucune réparation requise",

      visitsAspect: "Visites",
      visitsTraditional: "Multiples visites d'inconnus",
      visitsOurs: "Une seule visite de notre équipe",

      guaranteeAspect: "Garantie de vente",
      guaranteeTraditional: "Aucune garantie",
      guaranteeOurs: "Offre ferme et garantie",

      // CTA Section
      ctaTitle: "Prêt à commencer le processus?",
      ctaSubtitle:
        "Obtenez une offre comptant pour votre maison aujourd'hui et découvrez à quel point vendre peut être simple.",
      ctaButton: "Obtenir mon offre comptant",
      ctaPhone: "Appelez-nous: 514-623-4280",
      ctaFormTitle: "Commencez maintenant",
      ctaFormButton: "Démarrer le processus",
    },
    // Common
    common: {
      phone: "514-623-4280",
      email: "info@quoifaireavecmamaison.com",
      callUs: "Appelez-nous",
      contactUs: "Nous contacter",
      learnMore: "En savoir plus",
      getStarted: "Commencer",
      submit: "Soumettre",
      loading: "Chargement...",
      processing: "Traitement...",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse",
      city: "Ville",
      province: "Province",
      postalCode: "Code Postal",
      required: "Requis",
      getOfferNow: "Obtenir mon offre maintenant",
      callNow: "Appelez maintenant",
      readMore: "Lire la suite",
      viewAll: "Voir tout",
      close: "Fermer",
      cancel: "Annuler",
      send: "Envoyer",
      yes: "Oui",
      no: "Non",
    },
    // Features
    features: {
      whyChoose: "Pourquoi choisir notre service?",
      whyChooseSubtitle:
        "Nous offrons une alternative simple et efficace au processus traditionnel de vente immobilière, peu importe l'état de votre propriété.",
      fastSale: "Vente rapide",
      fastSaleDesc: "Vendez votre maison en quelques jours, même si elle est abandonnée depuis des années.",
      noCommission: "Aucune commission",
      noCommissionDesc: "Économisez des milliers de dollars en frais d'agent immobilier et autres commissions.",
      fairOffer: "Offre équitable",
      fairOfferDesc: "Recevez une offre juste basée sur l'état actuel et le potentiel de votre propriété.",
      noRepairs: "Aucune réparation",
      noRepairsDesc: "Nous achetons votre maison telle quelle, même avec des problèmes majeurs.",
      allSituations: "Toutes situations",
      allSituationsDesc: "Succession, divorce, difficultés financières - nous gérons toutes les situations.",
      totalFlexibility: "Flexibilité totale",
      totalFlexibilityDesc: "Choisissez votre date de clôture et adaptez le processus selon vos besoins.",
    },
    // Home Page
    home: {
      abandonedHousesTitle: "Nous achetons TOUTES les maisons",
      abandonedHousesSubtitle:
        "Maisons abandonnées, endommagées, en mauvais état, avec problèmes structurels - nous les achetons toutes! Pas besoin de nettoyer, réparer ou rénover.",
      abandonedLabel: "Abandonnée",
      damagedLabel: "Endommagée",
      goodConditionLabel: "Bon état",
      abandonedDesc: "Nous achetons les maisons abandonnées depuis des années, peu importe leur état de détérioration.",
      damagedDesc: "Dégâts d'eau, incendie, problèmes structurels - nous achetons toutes les maisons problématiques.",
      goodConditionDesc: "Bien sûr, nous achetons aussi les belles maisons en excellent état pour une vente rapide.",
      situationsWeHandle: "Situations que nous gérons :",
      abandonedYears: "Maisons abandonnées depuis des années",
      waterFireDamage: "Dégâts d'eau ou d'incendie",
      moldProblems: "Problèmes de moisissure",
      problematicTenants: "Squatteurs ou locataires problématiques",
      structuralProblems: "Problèmes structurels majeurs",
      complicatedSuccession: "Succession compliquée",
      divorceOrSeparation: "Divorce ou séparation",
      financialDifficulties: "Difficultés financières",
      investorTitle: "Vous êtes un investisseur?",
      investorSubtitle:
        "Rejoignez notre réseau d'investisseurs et de prêteurs privés pour découvrir des opportunités exclusives dans l'immobilier, incluant des propriétés à rénover.",
      investorCardTitle: "Investisseur",
      investorCardDesc:
        "Découvrez des propriétés à fort potentiel de rendement, incluant des maisons abandonnées à rénover et diversifiez votre portefeuille immobilier avec nos opportunités exclusives.",
      lenderCardTitle: "Prêteur",
      lenderCardDesc:
        "Générez des revenus stables en devenant prêteur privé pour nos projets immobiliers sécurisés et rentables, incluant la rénovation de propriétés abandonnées.",
      exclusiveProperties: "Accès à des propriétés exclusives",
      abandonedAtDiscount: "Maisons abandonnées à prix réduit",
      profitabilityAnalysis: "Analyse de rentabilité détaillée",
      professionalSupport: "Support professionnel",
      attractiveReturns: "Rendements attractifs",
      securedProjects: "Projets sécurisés",
      totalTransparency: "Transparence totale",
      offerIn24h: "Obtenez une offre comptant en 24h",
      offerFormSubtitle:
        "Remplissez notre formulaire simple et recevez une offre équitable pour votre propriété sans engagement.",
      offerFormBold: "Peu importe l'état de votre maison!",
      offer24h: "Offre en 24h",
      offer24hDesc: "Même pour les maisons abandonnées",
      noCommissionSave: "Économisez des milliers de dollars",
      buyAsIs: "Nous achetons dans l'état actuel",
      allSituationsShort: "Abandonnées, endommagées, succession",
      whyPeopleChooseTitle: "Pourquoi les gens font affaires habituellement avec nous",
      whyPeopleChooseSubtitle: "Découvrez les principales raisons qui motivent nos clients à choisir nos services.",
      commonSituations: "Situations courantes :",
      propertyOwners: "Propriétaires d'immeubles :",
      dontWantToManage: "Ne souhaitent plus les gérer",
      problematicTenantsShort: "Locataires problématiques",
      expensiveRepairs: "Réparations coûteuses",
      managementStress: "Stress de gestion",
      insufficientProfitability: "Rentabilité insuffisante",
      whateverSituation: "Quelle que soit votre situation, nous avons une solution adaptée pour vous.",
      discoverSolution: "Découvrez notre solution",
      howItWorksTitle: "Comment ça fonctionne",
      howItWorksSubtitle:
        "Notre processus en 4 étapes simples pour acheter votre maison rapidement et sans tracas, peu importe son état.",
      step1Title: "Soumettez vos informations",
      step1Desc: "Remplissez notre formulaire simple avec les détails de votre propriété, même abandonnée.",
      step2Title: "Recevez votre offre",
      step2Desc: "Nous vous contactons rapidement avec une offre comptant équitable, peu importe l'état.",
      step3Title: "Acceptez l'offre",
      step3Desc: "Si notre offre vous convient, nous préparons les documents nécessaires.",
      step4Title: "Clôturez la vente",
      step4Desc: "Nous nous occupons de tout et vous recevez votre paiement rapidement.",
      learnMoreProcess: "En savoir plus sur notre processus",
      testimonialsTitle: "Ce que nos clients disent",
      testimonialsSubtitle:
        "Découvrez les expériences de propriétaires qui ont vendu leur maison avec nous, peu importe l'état de leur propriété.",
      viewAllTestimonials: "Voir tous les témoignages",
      ctaTitle: "Prêt à vendre votre maison rapidement et sans tracas?",
      ctaSubtitle:
        "Que votre maison soit en excellent état ou abandonnée depuis des années, nous sommes prêts à vous faire une offre équitable. Montréal, Laval, Rive Nord, Rive Sud - nous achetons partout!",
      ctaContactToday: "Contactez-nous dès aujourd'hui",
      sendRequest: "Envoyer ma demande",
      areasTitle: "Nous achetons des maisons partout dans le Grand Montréal",
      areasSubtitle:
        "Peu importe où se trouve votre propriété dans la région et peu importe son état, nous sommes intéressés à vous faire une offre.",
    },
    // Footer
    footer: {
      description:
        "Nous offrons des solutions aux propriétaires de maison désireux de vendre leurs maisons rapidement, sans tracas et avec une offre équitable en espèces.",
      quickLinks: "Liens Rapides",
      serviceAreas: "Régions Desservies",
      contactUs: "Contactez-nous",
      subscribe: "Abonnez-vous",
      subscribeBtn: "S'abonner",
      copyright: "© 2025 Quoi Faire Avec Ma Maison - Tous droits réservés",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      grandMontreal: "Grand Montréal",
      riveSud: "Rive-Sud",
      riveNord: "Rive-Nord",
    },
    // Testimonials
    testimonials: {
      // Page content
      pageTitle: "Ce que nos clients",
      pageTitleHighlight: "disent de nous",
      pageSubtitle:
        "Découvrez les expériences authentiques de propriétaires qui ont vendu leur maison avec Quoi Faire Avec Ma Maison. Leurs témoignages reflètent notre engagement envers un service rapide, transparent et sans tracas.",

      // Individual testimonials
      title1: "Une équipe consciencieuse!",
      text1: "Ève est fiable, dévouée et toujours de bonne humeur. Je referrais affaire avec elle n'importe quand.",
      name1: "MARIANNE DAGENAIS LESPÉRANCE",
      location1: "Lasalle, Qc",

      title2: "Une vente rapide et efficace!",
      text2:
        "J'ai fait affaire avec Eve dans le cadre de la vente d'une maison à Saint-Lambert. La transaction s'est très bien passé puisqu'elle était toujours présente pour répondre à mes questions et que les suivis étaient rapides. Je recommande ses services fortement.",
      name2: "GABRIEL CCOPA",
      location2: "Saint-Lambert, Qc",

      title3: "Vendu en deux semaines!",
      text3:
        "L'air climatisé de ma maison a pris en feu et endommagé une partie d'un mur extérieur. Je n'avais pas envie de me casser la tête avec les assurances, je voulais vendre et passer à autre chose. Ève est venue visiter la propriété et en deux semaines, nous sommes passé chez le notaire et j'ai été payé. Mon expérience est somme toute très positive et je la recommande à quiconque souhaite faire affaire avec une professionnelle.",
      name3: "MICHEL COMPTOIS",
      location3: "Châteauguay, Qc",

      title4: "Service professionnel et efficace!",
      text4:
        "Service exceptionnel et professionnel. L'équipe a su répondre à toutes mes attentes et m'a guidé à travers tout le processus de vente. Je recommande vivement leurs services à quiconque cherche à vendre rapidement et sans tracas.",
      name4: "PATRICK MARTIN",
      location4: "Montréal, Qc",

      // Sidebar content
      sidebarComparisonTitle: "Afficher vs. Vendre avec nous",
      sidebarQuestion1: "Quelle option est plus rapide?",
      sidebarQuestion2: "Mets plus d'argent dans vos poches?",
      sidebarQuestion3: "Vous offre une paix d'esprit immédiate?",
      sidebarComparisonButton: "Voyez la différence ici",

      sidebarOfferTitle: "Obtenez votre offre comptant ici",
      sidebarOfferButton: "Obtenir mon offre comptant »",

      sidebarBlogTitle: "Articles récents",
      blogPost1: "La vérité surprenante d'être propriétaire à Montréal",
      blogPost2:
        "Propriétaire et frustré par vos locataires ? Voici 4 solutions pour gérer un locataire problématique à Montréal",
      blogPost3: "Que faire si mon locataire a détruit ma maison à Montréal ?",
      sidebarBlogButton: "Voir tous les articles",

      // Share experience section
      shareTitle: "Partagez votre expérience",
      shareSubtitle: "Vous avez vendu votre maison avec nous? Nous aimerions connaître votre expérience.",

      // Form fields
      formNameLabel: "Nom complet",
      formLocationLabel: "Ville",
      formRatingLabel: "Votre évaluation",
      formTitleLabel: "Titre de votre témoignage",
      formTestimonialLabel: "Votre témoignage",
      formSubmitButton: "Soumettre mon témoignage",

      // Final CTA
      finalCtaTitle: "Prêt à avoir votre propre histoire de succès?",
      finalCtaSubtitle: "Rejoignez nos clients satisfaits et vendez votre maison rapidement et sans tracas.",
      finalCtaButton1: "Obtenir mon offre maintenant",
      finalCtaButton2: "Appelez-nous: 514-623-4280",
    },
    // Forms
    forms: {
      propertyAddress: "Adresse de la propriété",
      propertyAddressPlaceholder: "Entrez l'adresse complète",
      requestSent: "Demande envoyée!",
      contactSoon: "Nous vous contacterons sous peu avec une offre.",
      subscriptionSuccess: "Inscription réussie!",
      newsletterSubscribed: "Vous êtes maintenant inscrit à notre newsletter.",
    },
    // Land Purchase Page
    landPurchase: {
      title: "Nous achetons",
      titleHighlight: "tous types de terrains",
      subtitle:
        "Terrains résidentiels, commerciaux, agricoles, forestiers ou industriels - nous achetons tous les terrains au Québec avec une offre comptant rapide et équitable.",

      // Hero features
      freeEvaluation: "Évaluation gratuite et rapide",
      guaranteedCash: "Paiement comptant garanti",
      allTypesAccepted: "Tous types de terrains acceptés",
      getFreeEvaluation: "Obtenir une évaluation gratuite",

      // Types of land section
      typesTitle: "Types de terrains que nous achetons",
      typesSubtitle:
        "Peu importe le type, la taille ou l'emplacement de votre terrain, nous sommes intéressés à vous faire une offre équitable.",

      // Residential land
      residentialTitle: "Terrains résidentiels",
      residentialFeature1: "Lots unifamiliaux",
      residentialFeature2: "Terrains condos",
      residentialFeature3: "Développements résidentiels",
      residentialFeature4: "Terrains avec ou sans services",
      residentialDesc: "Parfaits pour construire des maisons unifamiliales, duplex ou projets résidentiels.",

      // Commercial land
      commercialTitle: "Terrains commerciaux",
      commercialFeature1: "Centres commerciaux",
      commercialFeature2: "Bureaux et services",
      commercialFeature3: "Restaurants et commerces",
      commercialFeature4: "Stationnements commerciaux",
      commercialDesc: "Idéaux pour développements commerciaux, centres d'affaires ou projets mixtes.",

      // Agricultural land
      agriculturalTitle: "Terrains agricoles",
      agriculturalFeature1: "Terres cultivables",
      agriculturalFeature2: "Pâturages et prairies",
      agriculturalFeature3: "Fermes et exploitations",
      agriculturalFeature4: "Terrains avec bâtiments agricoles",
      agriculturalDesc: "Parfaits pour l'agriculture, l'élevage ou la conversion en développement.",

      // Industrial land
      industrialTitle: "Terrains industriels",
      industrialFeature1: "Zones industrielles",
      industrialFeature2: "Entrepôts et logistique",
      industrialFeature3: "Manufacturier",
      industrialFeature4: "Terrains avec accès ferroviaire",
      industrialDesc: "Idéaux pour l'industrie manufacturière, l'entreposage ou la logistique.",

      // Forest land
      forestTitle: "Terrains forestiers",
      forestFeature1: "Forêts exploitables",
      forestFeature2: "Terrains boisés",
      forestFeature3: "Lots de villégiature",
      forestFeature4: "Terrains chasse et pêche",
      forestDesc: "Parfaits pour l'exploitation forestière, la récréation ou l'investissement.",

      // Waterfront land
      waterfrontTitle: "Terrains riverains",
      waterfrontFeature1: "Bord de lac",
      waterfrontFeature2: "Bord de rivière",
      waterfrontFeature3: "Accès nautique",
      waterfrontFeature4: "Terrains de villégiature",
      waterfrontDesc: "Idéaux pour chalets, résidences de luxe ou développements touristiques.",

      // Why choose us section
      whyChooseTitle: "Pourquoi vendre votre terrain avec nous?",
      whyChooseSubtitle:
        "Notre expertise en évaluation de terrains et notre réseau d'investisseurs nous permettent de vous offrir le meilleur prix pour votre terrain.",

      rapidEvaluationTitle: "Évaluation rapide",
      rapidEvaluationDesc:
        "Évaluation professionnelle de votre terrain en 24-48h avec analyse du potentiel de développement.",

      fairPriceTitle: "Prix équitable",
      fairPriceDesc: "Offre basée sur la valeur marchande réelle et le potentiel de développement de votre terrain.",

      fastTransactionTitle: "Transaction rapide",
      fastTransactionDesc:
        "Clôture en 15-30 jours selon vos besoins. Nous nous occupons de toute la paperasse et des procédures légales.",

      noFeesTitle: "Aucuns frais",
      noFeesDesc: "Aucune commission, aucuns frais cachés. Nous payons tous les frais de transaction et légaux.",

      // Process section
      processTitle: "Notre processus d'achat de terrain",
      processSubtitle: "Un processus simple et transparent en 5 étapes pour vendre votre terrain rapidement.",

      processStep1: "Contact initial",
      processStep1Desc: "Vous nous contactez avec les détails de base de votre terrain.",

      processStep2: "Évaluation",
      processStep2Desc: "Nous analysons votre terrain et son potentiel de développement.",

      processStep3: "Visite sur site",
      processStep3Desc: "Inspection sur place pour confirmer les caractéristiques du terrain.",

      processStep4: "Offre écrite",
      processStep4Desc: "Présentation d'une offre d'achat détaillée et équitable.",

      processStep5: "Clôture",
      processStep5Desc: "Signature chez le notaire et paiement comptant immédiat.",

      // Contact form section
      formTitle: "Obtenez une évaluation gratuite",
      formSubtitle:
        "Remplissez le formulaire ci-dessous et recevez une évaluation professionnelle de votre terrain sous 48h.",

      formInfoTitle: "Informations requises",
      formLocationLabel: "Localisation exacte",
      formLocationDesc: "Adresse ou coordonnées GPS du terrain",
      formSizeLabel: "Superficie",
      formSizeDesc: "Dimensions et superficie totale",
      formZoningLabel: "Zonage et services",
      formZoningDesc: "Type de zonage et services disponibles",
      formAccessLabel: "Accès et topographie",
      formAccessDesc: "Accès routier et caractéristiques du terrain",

      // Form fields
      sizePlaceholder: "Ex: 5000 pi² ou 2 acres",
      landTypeLabel: "Type de terrain",
      landTypeSelect: "Sélectionnez",
      landTypeResidential: "Résidentiel",
      landTypeCommercial: "Commercial",
      landTypeIndustrial: "Industriel",
      landTypeAgricultural: "Agricole",
      landTypeForest: "Forestier",
      landTypeWaterfront: "Riverain",
      landTypeOther: "Autre",

      descriptionLabel: "Description du terrain",
      descriptionPlaceholder: "Décrivez les caractéristiques de votre terrain (accès, services, topographie, etc.)",

      submitButton: "Obtenir mon évaluation gratuite",

      // CTA section
      ctaTitle: "Prêt à vendre votre terrain?",
      ctaSubtitle:
        "Contactez-nous dès aujourd'hui pour une évaluation gratuite et découvrez la vraie valeur de votre terrain.",
      ctaCallButton: "Appelez maintenant: 514-623-4280",
    },
    // Multi-Unit Purchase Page
    multiUnit: {
      title: "Nous achetons",
      titleHighlight: "tous les multilogements",
      subtitle:
        "Duplex, triplex, quadruplex et immeubles à revenus - nous achetons tous les multilogements au Québec, même avec locataires problématiques ou en mauvais état.",

      // Hero features
      withOrWithoutTenants: "Avec ou sans locataires",
      allConditionsAccepted: "Tous états acceptés",
      fastCashPayment: "Paiement comptant rapide",
      getFreeEvaluation: "Obtenir une évaluation gratuite",
      callUs: "Appelez-nous: 514-623-4280",

      // Problematic situations section
      problemsTitle: "Vous avez des",
      problemsHighlight: "problèmes",
      problemsSubtitle: "avec votre multilogement?",
      problemsDescription:
        "Locataires problématiques, réparations coûteuses, gestion difficile - nous achetons même les multilogements les plus problématiques!",

      // Problem cards
      problematicTenantsTitle: "Locataires problématiques",
      nonPaymentRent: "Non-paiement de loyer",
      propertyDamage: "Dommages à la propriété",
      constantConflicts: "Conflits constants",
      evictionProcedures: "Procédures d'éviction",

      majorRepairsTitle: "Réparations majeures",
      roofReplacement: "Toiture à refaire",
      plumbingFailure: "Plomberie défaillante",
      electricalSystem: "Système électrique",
      foundationProblems: "Fondations problématiques",

      complexManagementTitle: "Gestion complexe",
      tooMuchTimeRequired: "Trop de temps requis",
      constantStress: "Stress constant",
      lowProfitability: "Rentabilité faible",
      complexRegulations: "Réglementations complexes",

      solutionTitle: "Nous résolvons TOUS ces problèmes pour vous!",
      solutionDescription:
        "Peu importe la complexité de votre situation, nous achetons votre multilogement tel quel et nous nous occupons de tout.",
      freeYourselfButton: "Libérez-vous de ces problèmes maintenant",

      // Types of multi-units section
      typesTitle: "Types de multilogements que nous achetons",
      typesSubtitle:
        "Du petit duplex au grand immeuble à revenus, nous achetons tous les types de propriétés multilogements.",

      // Multi-unit types
      duplexTitle: "Duplex",
      duplexDesc: "2 logements, parfait pour propriétaire-occupant",
      duplexFeature1: "Haut/bas ou côte à côte",
      duplexFeature2: "Avec ou sans locataires",
      duplexFeature3: "Tous états acceptés",

      triplexTitle: "Triplex",
      triplexDesc: "3 logements, excellent investissement",
      triplexFeature1: "Configuration variée",
      triplexFeature2: "Revenus multiples",
      triplexFeature3: "Gestion simplifiée",

      quadruplexTitle: "Quadruplex",
      quadruplexDesc: "4 logements, revenus optimisés",
      quadruplexFeature1: "Revenus stables",
      quadruplexFeature2: "Diversification des risques",
      quadruplexFeature3: "Potentiel d'appréciation",

      building5PlusTitle: "Immeubles 5+",
      building5PlusDesc: "5 logements et plus, investissement majeur",
      building5PlusFeature1: "Revenus importants",
      building5PlusFeature2: "Économies d'échelle",
      building5PlusFeature3: "Gestion professionnelle",

      // Why sell with us section
      whySellTitle: "Pourquoi vendre votre multilogement avec nous?",
      whySellSubtitle:
        "Nous comprenons les défis uniques des propriétaires de multilogements et offrons des solutions adaptées.",

      // Benefits
      tenantManagementTitle: "Gestion des locataires",
      tenantManagementDesc:
        "Nous nous occupons de tous les locataires, même les plus problématiques. Évictions, négociations, relocations - nous gérons tout.",
      tenantNegotiation: "Négociation avec locataires",
      legalProcedures: "Procédures légales",
      relocationHelp: "Aide à la relocation",

      expertEvaluationTitle: "Évaluation experte",
      expertEvaluationDesc:
        "Analyse complète des revenus, dépenses, potentiel d'amélioration et valeur marchande pour une offre équitable.",
      rentalIncomeAnalysis: "Analyse des revenus locatifs",
      repairEvaluation: "Évaluation des réparations",
      improvementPotential: "Potentiel d'amélioration",

      fastTransactionTitle: "Transaction rapide",
      fastTransactionDesc:
        "Clôture en 30-45 jours maximum, même avec locataires en place. Nous gérons toute la complexité administrative.",
      guaranteedFastClosing: "Clôture rapide garantie",
      administrativeManagement: "Gestion administrative",
      leaseTransfer: "Transfert des baux",

      noFeesTitle: "Aucuns frais",
      noFeesDesc:
        "Aucune commission d'agent, aucuns frais de réparation ou de mise en marché. Vous recevez le montant intégral.",
      zeroCommission: "0% de commission",
      noRepairsRequired: "Aucune réparation requise",
      legalFeesPaid: "Frais légaux payés",

      confidentialityTitle: "Confidentialité",
      confidentialityDesc:
        "Transaction discrète sans affichage public. Vos locataires ne sont pas dérangés pendant le processus de vente.",
      noSigns: "Aucune pancarte",
      minimalVisits: "Visites minimales",
      discreteProcess: "Processus discret",

      realEstateExpertiseTitle: "Expertise immobilière",
      realEstateExpertiseDesc:
        "Plus de 10 ans d'expérience dans l'achat de multilogements. Nous connaissons le marché et ses défis.",
      marketExpertise: "Expertise du marché",
      professionalNetwork: "Réseau professionnel",
      creativeSolutions: "Solutions créatives",

      // Purchase process section
      processTitle: "Notre processus d'achat de multilogement",
      processSubtitle:
        "Un processus adapté aux spécificités des multilogements, tenant compte des locataires et de la complexité.",

      // Process steps
      initialAnalysisTitle: "Analyse initiale",
      initialAnalysisDesc: "Évaluation des revenus, dépenses et situation locative.",

      detailedVisitTitle: "Visite détaillée",
      detailedVisitDesc: "Inspection complète de tous les logements et espaces communs.",

      tenantMeetingTitle: "Rencontre locataires",
      tenantMeetingDesc: "Discussion avec les locataires pour comprendre la situation.",

      offerCalculationTitle: "Calcul de l'offre",
      offerCalculationDesc: "Analyse financière complète et calcul de l'offre équitable.",

      negotiationTitle: "Négociation",
      negotiationDesc: "Discussion des termes et conditions de la transaction.",

      closingTitle: "Clôture",
      closingDesc: "Signature chez le notaire et transfert de propriété.",

      // Contact form section
      formTitle: "Obtenez une évaluation professionnelle",
      formSubtitle:
        "Remplissez le formulaire ci-dessous pour recevoir une évaluation détaillée de votre multilogement.",

      formAnalysisTitle: "Ce que nous analysons",
      financialAnalysis: "Analyse financière",
      financialAnalysisDesc: "Revenus, dépenses, rentabilité",
      propertyCondition: "État de la propriété",
      propertyConditionDesc: "Structure, systèmes, réparations",
      rentalSituation: "Situation locative",
      rentalSituationDesc: "Baux, locataires, potentiel",
      improvementPotentialTitle: "Potentiel d'amélioration",
      improvementPotentialDesc: "Rénovations, optimisation",

      // Form fields
      numberOfUnits: "Nombre de logements",
      selectUnits: "Sélectionnez",
      twoUnits: "2 logements",
      threeUnits: "3 logements",
      fourUnits: "4 logements",
      fiveUnits: "5 logements",
      sixPlusUnits: "6 logements et plus",

      monthlyRevenue: "Revenus mensuels",
      revenuePlaceholder: "Ex: 3500",

      currentSituation: "Situation actuelle",
      situationPlaceholder:
        "Décrivez votre situation (problèmes avec locataires, réparations nécessaires, raison de vente, etc.)",

      submitButton: "Obtenir mon évaluation gratuite",

      // Final CTA section
      ctaTitle: "Libérez-vous du stress de votre multilogement",
      ctaSubtitle:
        "Contactez-nous dès aujourd'hui pour une évaluation gratuite et découvrez comment nous pouvons résoudre vos problèmes de propriétaire.",
      ctaCallButton: "Appelez maintenant: 514-623-4280",
      ctaContactButton: "Nous contacter",
    },
    // FAQ Page
    faq: {
      // Hero section
      title: "Questions",
      titleHighlight: "fréquemment posées",
      subtitle:
        "Vous avez des questions? C'est normal. Voici les réponses aux questions les plus fréquentes sur notre processus d'achat de maisons et notre approche transparente.",

      // FAQ Section
      faqSectionTitle: "Questions fréquentes",

      // FAQ Items
      faq1Question: "Êtes-vous comme les autres acheteurs en espèces sur le Web, ou êtes-vous différents?",
      faq1Answer:
        "Excellente question. Nous ne sommes pas des agents immobiliers et nous n'avons pas l'intention de vous inscrire sur le marché. Nous sommes des investisseurs professionnels. Notre objectif est d'acheter votre maison directement de vous. Nous n'utilisons pas de tactiques de pression pour vous convaincre de vendre. Nous vous présentons simplement notre meilleure proposition quant à votre maison et vous laissons la liberté de décider si elle vous convient ou non. Nous ne vous demanderons jamais de faire des réparations ou de nettoyer la maison avant de la vendre. Nous l'achetons telle quelle.",

      faq2Question: "Si vous n'êtes pas une agence de vente d'un agent immobilier, comment gagnez-vous de l'argent?",
      faq2Answer:
        "Un agent immobilier gagne de l'argent en vous guidant à travers le processus de vente et en prenant une commission sur le prix de vente final. Notre modèle d'affaire est différent. Nous achetons votre maison directement de vous à un prix inférieur à sa valeur marchande, puis nous investissons notre temps et notre argent pour la rénover. Une fois les rénovations terminées, nous revendons la maison à profit. Nous prenons tous les risques et payons tous les frais associés à la revente. Nous gagnons notre argent grâce à notre expertise en rénovation de maison pour augmenter sa valeur.",

      faq3Question: "Combien allez-vous m'offrir pour ma maison?",
      faq3Answer:
        "Chaque maison est unique, et nous devons évaluer votre propriété avant de pouvoir faire une offre. Nous prenons en compte plusieurs facteurs comme l'emplacement, l'état de la propriété, les réparations nécessaires, et les tendances actuelles du marché. Notre objectif est de vous faire une offre juste qui vous permet de vendre rapidement sans les tracas d'une vente traditionnelle, tout en nous permettant de réaliser un profit raisonnable après rénovation.",

      faq4Question: "Comment déterminez-vous le prix à offrir pour ma maison?",
      faq4Answer:
        "Excellente question! Nous sommes totalement transparents à ce sujet. Notre processus d'évaluation prend en compte plusieurs facteurs: l'emplacement, la taille, l'état actuel, les réparations nécessaires, l'état actuel du marché immobilier, et la valeur des propriétés comparables récemment vendues dans votre quartier. Nous soustrayons ensuite les coûts de rénovation prévus et nos dépenses de fonctionnement, plus notre marge de profit.",

      faq5Question: "Y a-t-il des frais ou des commissions pour travailler avec vous?",
      faq5Answer:
        "Absolument pas! C'est l'un des plus grands avantages de travailler avec nous plutôt qu'avec un agent immobilier. Il n'y a AUCUN frais ni commissions lorsque vous nous vendez directement votre maison. Vous recevez le montant exact de notre offre, sans déductions. Vous n'avez pas à payer pour les réparations, le nettoyage, ou les inspections. Vous n'avez même pas à nettoyer la maison avant de partir! Nous prenons la propriété telle quelle, dans l'état où elle se trouve, et nous nous occupons de tout le reste.",

      faq6Question: "Puis-je avoir des prix équitables pour ma propriété?",
      faq6Answer:
        "Oui, nous nous efforçons de faire des offres justes basées sur l'état de votre maison, l'emplacement, et les conditions actuelles du marché. Notre objectif est de créer une situation gagnant-gagnant où vous pouvez vendre rapidement et sans tracas, et où nous pouvons réaliser un profit raisonnable après avoir investi dans les rénovations. Bien que notre offre puisse être inférieure au prix du marché, elle reflète la valeur \"telle quelle\" de votre propriété, sans les coûts, le temps et le stress associés à une vente traditionnelle.",

      faq7Question: "Comment puis-je savoir que vous êtes légitimes?",
      faq7Answer:
        "C'est une excellente question et nous sommes heureux que vous la posiez! La transparence et l'honnêteté sont des valeurs fondamentales pour notre entreprise. Nous vous invitons à consulter nos témoignages de clients satisfaits sur notre site. Nous sommes une entreprise locale avec une adresse physique et nous serons heureux de vous rencontrer en personne. Nous vous fournirons tous les documents nécessaires et nous travaillerons avec un notaire pour s'assurer que la transaction est légale et sécurisée.",

      // Sidebar content
      sidebarQuestionsTitle: "Vous avez d'autres questions?",
      sidebarQuestionsText:
        "N'hésitez pas à nous contacter directement. Notre équipe est là pour répondre à toutes vos questions.",
      sidebarCallButton: "Appelez-nous: 514-623-4280",
      sidebarContactButton: "Nous contacter",

      sidebarOfferTitle: "Obtenez votre offre comptant ici",
      sidebarOfferButton: "Obtenir mon offre comptant »",

      // Comparison table
      comparisonTitle: "Comparaison des options",
      comparisonSubtitle: "Voici un tableau comparatif des options qui s'offrent à vous pour vendre votre maison.",

      comparisonAspectColumn: "Comparaison / Frais",
      comparisonAgentColumn: "Vendre avec un agent immobilier",
      comparisonUsColumn: "Vendre avec Quoi Faire Avec Ma Maison",

      comparisonFeesRow: "Qui Paye Pour Tous les Frais?",
      comparisonFeesAgent: "Vous",
      comparisonFeesUs: "Nous payons tous les frais",

      comparisonCommissionRow: "Commissions?",
      comparisonCommissionAgent: "Oui (généralement 5% pour les agents)",
      comparisonCommissionUs: "Aucune commission",

      comparisonRepairsRow: "Qui Paye Pour les Réparations & l'Embellissement?",
      comparisonRepairsAgent: "Vous",
      comparisonRepairsUs: "Nous payons toutes les réparations",

      comparisonAppraisalRow: "Estimation Requise?",
      comparisonAppraisalAgent: "Oui, si acheteur",
      comparisonAppraisalUs: "Non",

      comparisonInspectionRow: "Inspection de l'Acheteur?",
      comparisonInspectionAgent: "Oui",
      comparisonInspectionUs: "Non",

      comparisonTimeRow: "Montant Moyen de Jours Avant de Vendre",
      comparisonTimeAgent: "+/- 91 Jours",
      comparisonTimeUs: "Nous achetons immédiatement",

      comparisonVisitsRow: "Nombre de Visites",
      comparisonVisitsAgent: "Plusieurs",
      comparisonVisitsUs: "1 (juste nous)",

      comparisonMovingRow: "Qui Paye Pour Vos Frais de Déménagement?",
      comparisonMovingAgent: "Vous",
      comparisonMovingUs: "Nous payons pour votre déménagement",

      comparisonNote:
        "Votre grande priorité lors de la vente d'une maison est de faire des choix qui vous conviennent financièrement et émotionnellement. Nous comprenons que chaque situation est unique, et nous respectons votre décision, quelle qu'elle soit. Notre objectif est simplement de vous offrir une alternative rapide et sans stress à la méthode traditionnelle de vente.",

      // Guide download section
      guideTitle: "Découvrez les avantages et inconvénients de vendre votre maison à un acheteur professionnel",
      guideText1:
        "Téléchargez notre Guide GRATUIT et découvrez tous les avantages et inconvénients de vendre votre maison à un acheteur professionnel. Ce guide vous aidera à prendre une décision éclairée concernant la vente de votre propriété immobilière.",
      guideText2:
        "Ce guide GRATUIT vous apprend tous les avantages et inconvénients de vendre votre maison à un acheteur professionnel. Nous avons voulu être transparents et vous donner les outils pour prendre la meilleure décision pour VOUS!",
      guideDownloadButton: "Télécharger le guide gratuit",
      guideShareButton: "Partager ce guide",

      // Final CTA
      finalCtaTitle: "Prêt à obtenir votre offre comptant?",
      finalCtaSubtitle:
        "Remplissez notre formulaire rapide ci-dessous pour obtenir une offre en espèces sans tracas, sans engagement.",
      finalCtaButton: "Obtenir mon offre maintenant",
    },
    // About Page
    about: {
      // Hero section
      title: "À propos de",
      titleHighlight: "Quoi Faire Avec Ma Maison",
      subtitle:
        "Nous aidons les propriétaires du Grand Montréal à se libérer du stress de leurs responsabilités immobilières. Notre engagement envers la qualité et le respect nous a permis de gagner la confiance de nombreux propriétaires qui cherchaient à vendre rapidement et sans tracas.",
      heroSubtitle:
        "Nous aidons les propriétaires du Grand Montréal à se libérer du stress lié à leurs responsabilités immobilières. Notre engagement envers la qualité et le respect nous a valu la confiance de nombreux vendeurs.",
      ourStoryTitle: "Notre histoire",
      storyTitle: "Notre histoire",
      storyParagraph1:
        "Pendant des années, le marché québécois était aux prises des méthodes de vente de maisons à Montréal à été le même pour tous les vendeurs. Pourtant, de nombreuses personnes cherchent des solutions alternatives qui leur permettent de vendre leur maison rapidement et sans tracas.",
      storyParagraph2:
        "C'est pourquoi nous avons créé Quoi Faire Avec Ma Maison pour offrir une solution simple, rapide et efficace aux propriétaires qui souhaitent vendre rapidement leur propriété.",
      storyParagraph3:
        "Nous proposons des solutions adaptées pour aider les propriétaires à se sortir des situations difficiles ou simplement à vendre rapidement. Notre objectif est de vous offrir une expérience positive. Nous achetons une solution simple, rapide et efficace afin que vous puissiez passer rapidement à votre étape.",

      // Team section
      teamTitle: "Notre équipe",
      teamSubtitle:
        "Rencontrez les professionnels dévoués qui travaillent pour vous offrir le meilleur service possible.",

      // David Manianga profile
      davidName: "David Manianga",
      davidTitle: "Fondateur & Directeur",
      founderTitle: "Fondateur & Directeur",
      davidBio1:
        "David est un professionnel expérimenté qui a oeuvré pendant une quinzaine d'années dans le secteur financier. Il a aussi étudié en planification financière et en gestion d'entreprise mais c'est sa passion pour l'immobilier et son souci d'aider les gens à améliorer leur situation financière qui l'ont amené à créer QUOI FAIRE AVEC MA MAISON.",
      davidBio2:
        "Spécialiste de la gestion d'actifs et de relations humaines, il excelle dans l'analyse financière, l'évaluation des propriétés, l'offre et la négociation pour faire les meilleures offres aux vendeurs. Son expertise en services financiers et sa connaissance approfondie du marché immobilier local sont des atouts majeurs pour l'équipe.",

      // Values section
      valuesTitle: "Nos valeurs",
      valuesSubtitle:
        "Ces principes guident chacune de nos actions et décisions pour vous offrir le meilleur service possible.",

      transparencyTitle: "Transparence",
      transparencyDesc:
        "Nous croyons en une communication ouverte et honnête à chaque étape du processus. Pas de surprises, pas de frais cachés.",

      integrityTitle: "Intégrité",
      integrityDesc:
        "Nous respectons nos engagements et agissons toujours dans le meilleur intérêt de nos clients, avec honnêteté et éthique.",

      excellenceTitle: "Excellence",
      excellenceDesc:
        "Nous nous efforçons constamment d'améliorer nos services et de dépasser les attentes de nos clients à chaque transaction.",

      // How we work section
      workTitle: "Comment travaillons-nous?",
      howWeWorkTitle: "Comment travaillons-nous ?",
      workSubtitle:
        "Notre approche est conçue pour rendre la vente de votre maison aussi simple et sans stress que possible.",

      philosophyTitle: "Notre philosophie",
      philosophyText1:
        "Avec nos années d'expérience, nous avons réalisé que plusieurs acheteurs finissent avec l'insatisfaction de ne pas avoir la maison qu'ils voulaient vraiment. Nous avons aussi remarqué que plusieurs vendeurs finissent avec l'insatisfaction de ne pas avoir vendu leur maison au prix qu'ils voulaient.",
      philosophyText2:
        "C'est pour cela que nous avons créé Quoi Faire Avec Ma Maison, pour offrir une solution simple, rapide et efficace aux propriétaires qui souhaitent vendre rapidement leur propriété. Nous sommes confiants à une vision, une expression, un énoncé de des démarches non-ordinaires ce que nous avons appelé 'Quoi Faire Avec Ma Maison'.",
      philosophyDesc:
        "Grâce à notre expérience, nous savons que vendeurs et acheteurs sont souvent déçus du processus traditionnel. Nous avons donc créé Quoi Faire Avec Ma Maison pour offrir une solution simple, rapide et transparente.",

      commitmentTitle: "Notre engagement",
      commitmentText1:
        "Nous sommes convaincus que nous pouvons vous aider à vendre votre maison rapidement et sans tracas, peu importe votre situation. Professionnellement, appuyé nous des ressources et nous vous ferons une offre dans les 24 heures qui suivent.",
      commitmentText2:
        "Notre équipe est dédiée à vous offrir un service personnalisé et à vous accompagner à chaque étape du processus. Nous comprenons que chaque situation est unique, et nous adaptons notre approche en conséquence.",
      commitmentDesc:
        "Nous vous faisons une offre équitable dans les 24 h et gérons chaque étape afin que vous puissiez vendre rapidement, sans frais ni tracas.",

      // Contact section
      contactTitle: "Contactez-nous",
      contactSubtitle:
        "Vous avez des questions ou vous souhaitez en savoir plus sur nos services? N'hésitez pas à nous contacter. Notre équipe est là pour vous aider.",

      phoneTitle: "Téléphone",
      emailTitle: "Email",
      serviceAreaTitle: "Région desservie",
      serviceAreaText: "Grand Montréal, Laval, Rive-Sud, Rive-Nord",
      serviceAreaDesc: "Grand Montréal, Laval, Rive-Sud et Rive-Nord",

      contactFormTitle: "Envoyez-nous un message",
      contactFormButton: "Envoyer le message",

      // Final CTA
      finalCtaTitle: "Prêt à vendre votre maison?",
      finalCtaSubtitle: "Obtenez une offre comptant pour votre maison aujourd'hui et vendez à la date de votre choix.",
      finalCtaButton1: "Obtenir mon offre maintenant",
      finalCtaButton2: "Appelez-nous: 514-623-4280",

      // Additional missing keys
      yearsExperience: "ans d'expérience",
    },
    // Contact Page
    contact: {
      title: "Contactez",
      titleHighlight: "notre équipe",
      subtitle:
        "Vous avez des questions ou souhaitez obtenir une offre pour votre propriété? Notre équipe d'experts est là pour vous aider. Contactez-nous dès aujourd'hui pour une consultation gratuite et sans engagement.",

      // Contact Info Section
      infoTitle: "Comment nous joindre",
      infoSubtitle: "Plusieurs façons de nous contacter selon vos préférences et votre situation.",

      phoneTitle: "Téléphone",
      phoneDesc: "Appelez-nous directement pour une réponse immédiate",
      emailTitle: "Courriel",
      emailDesc: "Envoyez-nous un message détaillé",
      locationTitle: "Région desservie",
      locationDesc: "Nous desservons tout le Grand Montréal",
      serviceArea: "Grand Montréal, Laval, Rive-Sud, Rive-Nord",

      // Contact Form Section
      formTitle: "Envoyez-nous un message",
      formSubtitle: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.",

      whyContactTitle: "Pourquoi nous contacter?",
      personalizedServiceTitle: "Service personnalisé",
      personalizedServiceDesc: "Chaque situation est unique, nous adaptons notre approche à vos besoins spécifiques.",
      quickResponseTitle: "Réponse rapide",
      quickResponseDesc: "Nous nous engageons à vous répondre dans les 24 heures suivant votre demande.",
      expertAdviceTitle: "Conseils d'experts",
      expertAdviceDesc: "Bénéficiez de notre expertise de plus de 15 ans dans l'immobilier.",

      urgentTitle: "Situation urgente?",
      urgentDesc: "Pour les situations urgentes, appelez-nous directement.",
      callNowButton: "Appelez maintenant",

      // Form Fields
      subjectLabel: "Sujet de votre demande",
      subjectSelect: "Sélectionnez un sujet",
      subjectHouseSale: "Vente de maison",
      subjectLandSale: "Vente de terrain",
      subjectMultiUnit: "Vente de multilogement",
      subjectEvaluation: "Évaluation gratuite",
      subjectOther: "Autre",

      messageLabel: "Votre message",
      messagePlaceholder: "Décrivez votre situation, vos besoins ou posez-nous vos questions...",

      consentText: "J'accepte d'être contacté par Quoi Faire Avec Ma Maison concernant ma demande.",
      sendButton: "Envoyer le message",

      // Business Hours
      hoursTitle: "Heures d'ouverture",
      officeHoursTitle: "Heures de bureau",
      monday: "Lundi",
      tuesday: "Mardi",
      wednesday: "Mercredi",
      thursday: "Jeudi",
      friday: "Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
      weekdayHours: "9h00 - 18h00",
      saturdayHours: "10h00 - 16h00",
      sundayHours: "Fermé",

      emergencyTitle: "Contact d'urgence",
      emergencyDesc: "Pour les situations urgentes en dehors des heures d'ouverture, nous sommes disponibles.",
      emergencyCall: "Appel d'urgence",
      emergencyEmail: "Courriel d'urgence",

      // FAQ Section
      faqTitle: "Questions fréquentes",
      faqSubtitle:
        "Voici quelques réponses aux questions les plus courantes. Pour plus d'informations, consultez notre page FAQ complète.",

      faqQuestion1: "Combien de temps pour recevoir une offre?",
      faqAnswer1: "Nous vous répondrons dans les 24 heures suivant votre demande.",
      faqQuestion2: "Quels types de propriétés achetez-vous?",
      faqAnswer2:
        "Nous achetons tous types de propriétés: maisons unifamiliales, duplex, triplex, terrains, et même les propriétés abandonnées ou en mauvais état.",

      faqQuestion3: "Y a-t-il des frais pour votre service?",
      faqAnswer3:
        "Non, notre service est entièrement gratuit. Nous ne facturons aucuns frais, commission ou coûts cachés.",

      faqQuestion4: "Dans quelles régions offrez-vous vos services?",
      faqAnswer4: "Nous desservons tout le Grand Montréal, incluant Laval, la Rive-Sud et la Rive-Nord.",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      landPurchase: "Land Purchase",
      multiUnitPurchase: "Multi-Unit Purchase",
      testimonials: "Testimonials",
      faq: "FAQ",
      about: "About",
      blog: "Blog",
      getOffer: "Get Offer",
      sellLand: "Sell My Land",
      sellMultiUnit: "Sell My Multi-Unit",
      contact: "Contact Us",
    },
    // Hero Section
    hero: {
      title: "Sell Your Home",
      titleHighlight: "quickly and stress-free",
      subtitle: "Get a cash offer for your property without commission, repairs, or hassle.",
      subtitleBold: "We Buy ALL Homes - even abandoned or in poor condition!",
      noCommission: "No commission or hidden fees",
      asIs: "Buy your home as-is",
      evenAbandoned: "Even abandoned homes!",
      getCashOffer: "Get my cash offer",
      howItWorks: "How It Works",
    },
    // How It Works Page
    howItWorks: {
      title: "How Our",
      titleHighlight: "Purchase Process Works",
      subtitle:
        "Discover our simple and transparent approach to buying your home quickly and hassle-free. A process designed to save you time, money, and stress.",
      detailedProcessTitle: "Our Detailed Process in 4 Steps",
      detailedProcessSubtitle: "Each step is designed to be simple, transparent, and stress-free for you.",

      // Step 1
      step1Title: "Submit Your Information",
      step1Description:
        "Fill out our simple online form with the basic details of your property. We only need the address, your contact information, and some general information about the condition of the house.",
      step1Feature1: "Quick 2-minute form",
      step1Feature2: "No financial information required",
      step1Feature3: "100% confidential process",
      step1IconDesc: "Simple and secure form",

      // Step 2
      step2Title: "Evaluation and Visit",
      step2Description:
        "Our team of experts evaluates your property by analyzing the local market, the condition of the house, and the necessary repairs. We then schedule a quick and respectful visit.",
      step2Feature1: "Market comparative analysis",
      step2Feature2: "Only 15-30 minute visit",
      step2Feature3: "Free professional evaluation",
      step2IconDesc: "Professional evaluation",

      // Step 3
      step3Title: "Receive Your Offer",
      step3Description:
        "Within 24 hours of our visit, we present you with a fair and transparent offer. We clearly explain how we arrived at this amount and answer all your questions.",
      step3Feature1: "Offer within 24 hours",
      step3Feature2: "Detailed explanation of the calculation",
      step3Feature3: "No obligation to accept",
      step3IconDesc: "Fair and transparent offer",

      // Step 4
      step4Title: "Close at Your Pace",
      step4Description:
        "If you accept our offer, we handle all the paperwork and work with a notary to finalize the transaction. You choose the closing date that suits you best.",
      step4Feature1: "You choose the closing date",
      step4Feature2: "We pay all closing fees",
      step4Feature3: "Guaranteed cash payment",
      step4IconDesc: "Quick and secure closing",

      // Why Different Section
      whyDifferentTitle: "Why Our Process Is Different",
      whyDifferentSubtitle:
        "We have designed our approach to eliminate common problems with traditional real estate sales.",

      speedTitle: "Speed",
      speedDesc: "Complete process in a few days instead of several months",

      securityTitle: "Security",
      securityDesc: "Secure transaction with a notary and guaranteed cash payment",

      savingsTitle: "Savings",
      savingsDesc: "No commission, repair fees, or hidden costs",

      supportTitle: "Support",
      supportDesc: "Personalized support at every step of the process",

      // Comparison Table
      comparisonTitle: "Comparison of Sale Methods",
      comparisonSubtitle: "See the clear advantages of our approach compared to traditional sales.",

      aspectColumn: "Aspect",
      traditionalColumn: "Traditional Sale",
      ourServiceColumn: "Our Service",

      saleTimeAspect: "Sale Time",
      saleTimeTraditional: "Average 3-6 months",
      saleTimeOurs: "Flexible timeline",

      commissionsAspect: "Commissions",
      commissionsTraditional: "5-6% of sale price",
      commissionsOurs: "0% - No commission",

      repairsAspect: "Repairs",
      repairsTraditional: "At your expense",
      repairsOurs: "No repairs required",

      visitsAspect: "Visits",
      visitsTraditional: "Multiple visits from strangers",
      visitsOurs: "One visit from our team",

      guaranteeAspect: "Sale Guarantee",
      guaranteeTraditional: "No guarantee",
      guaranteeOurs: "Firm offer and guarantee",

      // CTA Section
      ctaTitle: "Ready to start the process?",
      ctaSubtitle: "Get a cash offer for your home today and discover how easy selling can be.",
      ctaButton: "Get My Cash Offer",
      ctaPhone: "Call Us: 514-623-4280",
      ctaFormTitle: "Start Now",
      ctaFormButton: "Begin the Process",
    },
    // Common
    common: {
      phone: "514-623-4280",
      email: "info@quoifaireavecmamaison.com",
      callUs: "Call Us",
      contactUs: "Contact Us",
      learnMore: "Learn More",
      getStarted: "Get Started",
      submit: "Submit",
      loading: "Loading...",
      processing: "Processing...",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      city: "City",
      province: "Province",
      postalCode: "Postal Code",
      required: "Required",
      getOfferNow: "Get My Offer Now",
      callNow: "Call Now",
      readMore: "Read More",
      viewAll: "View All",
      close: "Close",
      cancel: "Cancel",
      send: "Send",
      yes: "Yes",
      no: "No",
    },
    // Features
    features: {
      whyChoose: "Why Choose Our Service?",
      whyChooseSubtitle:
        "We offer a simple and effective alternative to the traditional real estate selling process, regardless of your property's condition.",
      fastSale: "Fast Sale",
      fastSaleDesc: "Sell your home in a few days, even if it has been abandoned for years.",
      noCommission: "No Commission",
      noCommissionDesc: "Save thousands of dollars in real estate agent fees and other commissions.",
      fairOffer: "Fair Offer",
      fairOfferDesc: "Receive an offer based on your property's current condition and potential.",
      noRepairs: "No Repairs",
      noRepairsDesc: "We buy your home as-is, even with major issues.",
      allSituations: "All Situations",
      allSituationsDesc: "Succession, divorce, financial difficulties - we handle all situations.",
      totalFlexibility: "Total Flexibility",
      totalFlexibilityDesc: "Choose your closing date and adapt the process to your needs.",
    },
    // Home Page
    home: {
      abandonedHousesTitle: "We Buy ALL Homes",
      abandonedHousesSubtitle:
        "Abandoned homes, damaged, poor condition, structural issues - we buy them all! No need to clean, repair, or renovate.",
      abandonedLabel: "Abandoned",
      damagedLabel: "Damaged",
      goodConditionLabel: "Good Condition",
      abandonedDesc: "We buy homes abandoned for years, regardless of their state of deterioration.",
      damagedDesc: "Water damage, fire, structural issues - we buy all problematic homes.",
      goodConditionDesc: "Of course, we also buy beautiful homes in excellent condition for a quick sale.",
      situationsWeHandle: "Situations We Handle:",
      abandonedYears: "Homes abandoned for years",
      waterFireDamage: "Water or fire damage",
      moldProblems: "Mold problems",
      problematicTenants: "Troublemakers or problematic tenants",
      structuralProblems: "Major structural issues",
      complicatedSuccession: "Complicated succession",
      divorceOrSeparation: "Divorce or separation",
      financialDifficulties: "Financial difficulties",
      investorTitle: "Are You an Investor?",
      investorSubtitle:
        "Join our network of private investors and lenders to discover exclusive opportunities in real estate, including properties to renovate.",
      investorCardTitle: "Investor",
      investorCardDesc:
        "Discover properties with high rental potential, including abandoned homes to renovate, and diversify your real estate portfolio with our exclusive opportunities.",
      lenderCardTitle: "Lender",
      lenderCardDesc:
        "Generate stable income by becoming a private lender for our secure and profitable real estate projects, including the renovation of abandoned properties.",
      exclusiveProperties: "Access to Exclusive Properties",
      abandonedAtDiscount: "Abandoned homes at discounted prices",
      profitabilityAnalysis: "Detailed profitability analysis",
      professionalSupport: "Professional support",
      attractiveReturns: "Attractive returns",
      securedProjects: "Secured projects",
      totalTransparency: "Total transparency",
      offerIn24h: "Get a Cash Offer in 24h",
      offerFormSubtitle: "Fill out our simple form and receive a fair offer for your property without any commitment.",
      offerFormBold: "No matter the condition of your home!",
      offer24h: "Offer in 24h",
      offer24hDesc: "Even for abandoned homes",
      noCommissionSave: "Save thousands of dollars",
      buyAsIs: "We buy as-is",
      allSituationsShort: "Abandoned, damaged, succession",
      whyPeopleChooseTitle: "Why People Usually Do Business with Us",
      whyPeopleChooseSubtitle: "Discover the main reasons that motivate our clients to choose our services.",
      commonSituations: "Common Situations:",
      propertyOwners: "Property Owners:",
      dontWantToManage: "No longer want to manage them",
      problematicTenantsShort: "Problematic tenants",
      expensiveRepairs: "Expensive repairs",
      managementStress: "Management stress",
      insufficientProfitability: "Insufficient profitability",
      whateverSituation: "Whatever your situation, we have a tailored solution for you.",
      discoverSolution: "Discover Our Solution",
      howItWorksTitle: "How It Works",
      howItWorksSubtitle:
        "Our 4 simple steps process to buy your home quickly and hassle-free, regardless of its condition.",
      step1Title: "Submit Your Information",
      step1Desc: "Fill out our simple form with the details of your property, even abandoned.",
      step2Title: "Receive Your Offer",
      step2Desc: "We contact you quickly with a fair cash offer, regardless of its condition.",
      step3Title: "Accept the Offer",
      step3Desc: "If our offer suits you, we prepare the necessary documents.",
      step4Title: "Close the Sale",
      step4Desc: "We handle everything and you receive your payment quickly.",
      learnMoreProcess: "Learn more about our process",
      testimonialsTitle: "What Our Clients Say",
      testimonialsSubtitle:
        "Discover the experiences of homeowners who sold their homes with us, regardless of their property's condition.",
      viewAllTestimonials: "View All Testimonials",
      ctaTitle: "Ready to sell your home quickly and hassle-free?",
      ctaSubtitle:
        "Whether your home is in excellent condition or abandoned for years, we are ready to make you a fair cash offer. Montreal, Laval, North Shore, South Shore - we buy everywhere!",
      ctaContactToday: "Contact Us Today",
      sendRequest: "Send My Request",
      areasTitle: "We Buy Homes Throughout Greater Montreal",
      areasSubtitle:
        "No matter where your property is located in the region and no matter its condition, we are interested in making you an offer.",
    },
    // Footer
    footer: {
      description:
        "We offer solutions to homeowners who want to sell their homes quickly, hassle-free, and with a fair cash offer.",
      quickLinks: "Quick Links",
      serviceAreas: "Service Areas",
      contactUs: "Contact Us",
      subscribe: "Subscribe",
      subscribeBtn: "Subscribe",
      copyright: "© 2025 Quoi Faire Avec Ma Maison - All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      grandMontreal: "Greater Montreal",
      riveSud: "South Shore",
      riveNord: "North Shore",
    },
    // Testimonials
    testimonials: {
      // Page content
      pageTitle: "What Our Clients",
      pageTitleHighlight: "Say About Us",
      pageSubtitle:
        "Discover authentic experiences of homeowners who sold their homes with Quoi Faire Avec Ma Maison. Their testimonials reflect our commitment to a fast, transparent, and stress-free service.",

      // Individual testimonials
      title1: "A conscientious team!",
      text1: "Ève is reliable, dedicated, and always in good spirits. I would do business with her anytime.",
      name1: "MARIANNE DAGENAIS LESPÉRANCE",
      location1: "Lasalle, Qc",

      title2: "A quick and effective sale!",
      text2:
        "I dealt with Eve in the sale of a home in Saint-Lambert. The transaction went very well since she was always there to answer my questions and the follow-ups were fast. I strongly recommend her services.",
      name2: "GABRIEL CCOPA",
      location2: "Saint-Lambert, Qc",

      title3: "Sold in two weeks!",
      text3:
        "The air conditioning in my home caught fire and damaged part of an exterior wall. I didn't want to hassle with insurance; I wanted to sell and move on. Eve visited the property, and in two weeks, we went to the notary, and I was paid. My experience is overall very positive, and I recommend it to anyone who wants to do business with a professional.",
      name3: "MICHEL COMPTOIS",
      location3: "Châteauguay, Qc",

      title4: "Professional and effective service!",
      text4:
        "Exceptional and professional service. The team responded to all my expectations and guided me through the entire home selling process. I strongly recommend their services to anyone looking to sell quickly and hassle-free.",
      name4: "PATRICK MARTIN",
      location4: "Montreal, Qc",

      // Sidebar content
      sidebarComparisonTitle: "Show vs. Sell with Us",
      sidebarQuestion1: "Which option is faster?",
      sidebarQuestion2: "Put more money in your pockets?",
      sidebarQuestion3: "Give you immediate peace of mind?",
      sidebarComparisonButton: "See the difference here",

      sidebarOfferTitle: "Get Your Cash Offer Here",
      sidebarOfferButton: "Get My Cash Offer »",

      sidebarBlogTitle: "Recent Articles",
      blogPost1: "The Surprising Truth of Being a Homeowner in Montreal",
      blogPost2:
        "Homeowner and frustrated by your tenants? Here are 4 solutions to manage a problematic tenant in Montreal",
      blogPost3: "What to Do if Your Tenant Destroyed Your Home in Montreal?",
      sidebarBlogButton: "View All Articles",

      // Share experience section
      shareTitle: "Share Your Experience",
      shareSubtitle: "Have you sold your home with us? We would love to hear about your experience.",

      // Form fields
      formNameLabel: "Full Name",
      formLocationLabel: "City",
      formRatingLabel: "Your Rating",
      formTitleLabel: "Testimonial Title",
      formTestimonialLabel: "Your Testimonial",
      formSubmitButton: "Submit My Testimonial",

      // Final CTA
      finalCtaTitle: "Ready to have your own success story?",
      finalCtaSubtitle: "Join our satisfied clients and sell your home quickly and hassle-free.",
      finalCtaButton1: "Get My Offer Now",
      finalCtaButton2: "Call Us: 514-623-4280",
    },
    // Forms
    forms: {
      propertyAddress: "Property Address",
      propertyAddressPlaceholder: "Enter the full address",
      requestSent: "Request Sent!",
      contactSoon: "We will contact you soon with an offer.",
      subscriptionSuccess: "Subscription Successful!",
      newsletterSubscribed: "You are now subscribed to our newsletter.",
    },
    // Land Purchase Page
    landPurchase: {
      title: "We Buy",
      titleHighlight: "All Types of Land",
      subtitle:
        "Residential, commercial, agricultural, forested, or industrial lands - we buy all lands in Quebec with a quick and fair cash offer.",

      // Hero features
      freeEvaluation: "Free and Quick Evaluation",
      guaranteedCash: "Guaranteed Cash Payment",
      allTypesAccepted: "All Types of Lands Accepted",
      getFreeEvaluation: "Get Free Evaluation",

      // Types of land section
      typesTitle: "Types of Lands We Buy",
      typesSubtitle:
        "No matter the type, size, or location of your land, we are interested in making you a fair offer.",

      // Residential land
      residentialTitle: "Residential Lands",
      residentialFeature1: "Single-family lots",
      residentialFeature2: "Condo lands",
      residentialFeature3: "Residential developments",
      residentialFeature4: "Lands with or without services",
      residentialDesc: "Perfect for building single-family homes, duplexes, or residential projects.",

      // Commercial land
      commercialTitle: "Commercial Lands",
      commercialFeature1: "Commercial centers",
      commercialFeature2: "Offices and services",
      commercialFeature3: "Restaurants and businesses",
      commercialFeature4: "Commercial parking lots",
      commercialDesc: "Ideal for commercial developments, business centers, or mixed-use projects.",

      // Agricultural land
      agriculturalTitle: "Agricultural Lands",
      agriculturalFeature1: "Arable lands",
      agriculturalFeature2: "Pastures and meadows",
      agriculturalFeature3: "Farms and operations",
      agriculturalFeature4: "Lands with agricultural buildings",
      agriculturalDesc: "Perfect for agriculture, livestock, or conversion into development.",

      // Industrial land
      industrialTitle: "Industrial Lands",
      industrialFeature1: "Industrial zones",
      industrialFeature2: "Warehouses and logistics",
      industrialFeature3: "Manufacturing",
      industrialFeature4: "Lands with railway access",
      industrialDesc: "Ideal for manufacturing, warehousing, or logistics.",

      // Forest land
      forestTitle: "Forested Lands",
      forestFeature1: "Exploitable forests",
      forestFeature2: "Wooded lands",
      forestFeature3: "Vacation lots",
      forestFeature4: "Hunting and fishing lands",
      forestDesc: "Perfect for forest exploitation, recreation, or investment.",

      // Waterfront land
      waterfrontTitle: "Waterfront Lands",
      waterfrontFeature1: "Lakefront",
      waterfrontFeature2: "Riverfront",
      waterfrontFeature3: "Boat access",
      waterfrontFeature4: "Vacation lots",
      waterfrontDesc: "Ideal for chalets, luxury residences, or tourist developments.",

      // Why choose us section
      whyChooseTitle: "Why Sell Your Land with Us?",
      whyChooseSubtitle:
        "Our expertise in land evaluation and our network of investors allows us to offer you the best price for your land.",

      rapidEvaluationTitle: "Quick Evaluation",
      rapidEvaluationDesc: "Professional evaluation of your land in 24-48 hours with development potential analysis.",

      fairPriceTitle: "Fair Price",
      fairPriceDesc: "Offer based on the real market value and development potential of your land.",

      fastTransactionTitle: "Quick Transaction",
      fastTransactionDesc:
        "Closing in 15-30 days according to your needs. We handle all paperwork and legal procedures.",

      noFeesTitle: "No Fees",
      noFeesDesc: "No commission, no hidden fees. We pay all transaction and legal fees.",

      // Process section
      processTitle: "Our Land Purchase Process",
      processSubtitle: "A simple and transparent 5-step process to sell your land quickly.",

      processStep1: "Initial Contact",
      processStep1Desc: "You contact us with the basic details of your land.",

      processStep2: "Evaluation",
      processStep2Desc: "We analyze your land and its development potential.",

      processStep3: "Site Visit",
      processStep3Desc: "On-site inspection to confirm the characteristics of the land.",

      processStep4: "Written Offer",
      processStep4Desc: "Presentation of a detailed and fair purchase offer.",

      processStep5: "Closing",
      processStep5Desc: "Notary signature and immediate cash payment.",

      // Contact form section
      formTitle: "Get a Free Evaluation",
      formSubtitle: "Fill out the form below and receive a professional evaluation of your land within 48 hours.",

      formInfoTitle: "Required Information",
      formLocationLabel: "Exact Location",
      formLocationDesc: "Address or GPS coordinates of the land",
      formSizeLabel: "Size",
      formSizeDesc: "Dimensions and total area",
      formZoningLabel: "Zoning and Services",
      formZoningDesc: "Type of zoning and available services",
      formAccessLabel: "Access and Topography",
      formAccessDesc: "Road access and land characteristics",

      // Form fields
      sizePlaceholder: "Ex: 5000 sq ft or 2 acres",
      landTypeLabel: "Type of Land",
      landTypeSelect: "Select",
      landTypeResidential: "Residential",
      landTypeCommercial: "Commercial",
      landTypeIndustrial: "Industrial",
      landTypeAgricultural: "Agricultural",
      landTypeForest: "Forest",
      landTypeWaterfront: "Waterfront",
      landTypeOther: "Other",

      descriptionLabel: "Land Description",
      descriptionPlaceholder: "Describe the characteristics of your land (access, services, topography, etc.)",

      submitButton: "Get My Free Evaluation",

      // CTA section
      ctaTitle: "Ready to sell your land?",
      ctaSubtitle: "Contact us today for a free evaluation and discover the true value of your land.",
      ctaCallButton: "Call Now: 514-623-4280",
    },
    // Multi-Unit Purchase Page
    multiUnit: {
      title: "We Buy",
      titleHighlight: "All Multi-Units",
      subtitle:
        "Duplexes, triplexes, quadruplexes, and income-producing buildings - we buy all multi-units in Quebec, even with problematic tenants or poor condition.",

      // Hero features
      withOrWithoutTenants: "With or Without Tenants",
      allConditionsAccepted: "All Conditions Accepted",
      fastCashPayment: "Quick Cash Payment",
      getFreeEvaluation: "Get Free Evaluation",
      callUs: "Call Us: 514-623-4280",

      // Problematic situations section
      problemsTitle: "Do You Have",
      problemsHighlight: "Problems",
      problemsSubtitle: "With Your Multi-Unit?",
      problemsDescription:
        "Problematic tenants, expensive repairs, difficult management - we even buy the most problematic multi-units!",

      // Problem cards
      problematicTenantsTitle: "Problematic Tenants",
      nonPaymentRent: "Non-payment of rent",
      propertyDamage: "Property damage",
      constantConflicts: "Constant conflicts",
      evictionProcedures: "Eviction procedures",

      majorRepairsTitle: "Major Repairs",
      roofReplacement: "Roof replacement",
      plumbingFailure: "Plumbing failure",
      electricalSystem: "Electrical system",
      foundationProblems: "Foundation issues",

      complexManagementTitle: "Complex Management",
      tooMuchTimeRequired: "Too much time required",
      constantStress: "Constant stress",
      lowProfitability: "Low profitability",
      complexRegulations: "Complex regulations",

      solutionTitle: "We Solve ALL These Problems for You!",
      solutionDescription:
        "No matter the complexity of your situation, we buy your multi-unit as-is and handle everything.",
      freeYourselfButton: "Free Yourself from These Problems Now",

      // Types of multi-units section
      typesTitle: "Types of Multi-Units We Buy",
      typesSubtitle:
        "From small duplexes to large income-producing buildings, we buy all types of multi-unit properties.",

      // Multi-unit types
      duplexTitle: "Duplex",
      duplexDesc: "2 units, perfect for owner-occupant",
      duplexFeature1: "Upstairs/downstairs or side-by-side",
      duplexFeature2: "With or without tenants",
      duplexFeature3: "All conditions accepted",

      triplexTitle: "Triplex",
      triplexDesc: "3 units, excellent investment",
      triplexFeature1: "Various configurations",
      triplexFeature2: "Multiple income streams",
      triplexFeature3: "Simplified management",

      quadruplexTitle: "Quadruplex",
      quadruplexDesc: "4 units, optimized income",
      quadruplexFeature1: "Stable income",
      quadruplexFeature2: "Risk diversification",
      quadruplexFeature3: "Appreciation potential",

      building5PlusTitle: "Buildings 5+",
      building5PlusDesc: "5 units and more, major investment",
      building5PlusFeature1: "Significant income",
      building5PlusFeature2: "Economies of scale",
      building5PlusFeature3: "Professional management",

      // Why sell with us section
      whySellTitle: "Why Sell Your Multi-Unit with Us?",
      whySellSubtitle:
        "We understand the unique challenges of multi-unit property owners and offer tailored solutions.",

      // Benefits
      tenantManagementTitle: "Tenant Management",
      tenantManagementDesc:
        "We handle all tenants, even the most problematic ones. Evictions, negotiations, relocations - we manage it all.",
      tenantNegotiation: "Negotiation with tenants",
      legalProcedures: "Legal procedures",
      relocationHelp: "Relocation help",

      expertEvaluationTitle: "Expert Evaluation",
      expertEvaluationDesc:
        "Comprehensive analysis of rental income, expenses, improvement potential, and market value for a fair offer.",
      rentalIncomeAnalysis: "Rental income analysis",
      repairEvaluation: "Repair evaluation",
      improvementPotential: "Improvement potential",

      fastTransactionTitle: "Quick Transaction",
      fastTransactionDesc:
        "Closing in a maximum of 30-45 days, even with tenants in place. We manage all administrative complexity.",
      guaranteedFastClosing: "Guaranteed quick closing",
      administrativeManagement: "Administrative management",
      leaseTransfer: "Lease transfer",

      noFeesTitle: "No Fees",
      noFeesDesc: "No real estate agent commission, no repair or marketing fees. You receive the full amount.",
      zeroCommission: "0% commission",
      noRepairsRequired: "No repairs required",
      legalFeesPaid: "Legal fees paid",

      confidentialityTitle: "Confidentiality",
      confidentialityDesc:
        "Discreet transaction without public display. Your tenants are not disturbed during the sale process.",
      noSigns: "No signs",
      minimalVisits: "Minimal visits",
      discreteProcess: "Discrete process",

      realEstateExpertiseTitle: "Real Estate Expertise",
      realEstateExpertiseDesc:
        "Over 10 years of experience in buying multi-units. We know the market and its challenges.",
      marketExpertise: "Market expertise",
      professionalNetwork: "Professional network",
      creativeSolutions: "Creative solutions",

      // Purchase process section
      processTitle: "Our Multi-Unit Purchase Process",
      processSubtitle: "A process adapted to the specifics of multi-units, taking into account tenants and complexity.",

      // Process steps
      initialAnalysisTitle: "Initial Analysis",
      initialAnalysisDesc: "Evaluation of income, expenses, and tenant situation.",

      detailedVisitTitle: "Detailed Visit",
      detailedVisitDesc: "Comprehensive inspection of all units and common areas.",

      tenantMeetingTitle: "Tenant Meeting",
      tenantMeetingDesc: "Discussion with tenants to understand the situation.",

      offerCalculationTitle: "Offer Calculation",
      offerCalculationDesc: "Comprehensive financial analysis and fair offer calculation.",

      negotiationTitle: "Negotiation",
      negotiationDesc: "Discussion of transaction terms and conditions.",

      closingTitle: "Closing",
      closingDesc: "Notary signature and property transfer.",

      // Contact form section
      formTitle: "Get a Professional Evaluation",
      formSubtitle: "Fill out the form below to receive a detailed evaluation of your multi-unit.",

      formAnalysisTitle: "What We Analyze",
      financialAnalysis: "Financial analysis",
      financialAnalysisDesc: "Income, expenses, profitability",
      propertyCondition: "Property condition",
      propertyConditionDesc: "Structure, systems, repairs",
      rentalSituation: "Rental situation",
      rentalSituationDesc: "Leases, tenants, potential",
      improvementPotentialTitle: "Improvement Potential",
      improvementPotentialDesc: "Renovations, optimization",

      // Form fields
      numberOfUnits: "Number of units",
      selectUnits: "Select",
      twoUnits: "2 units",
      threeUnits: "3 units",
      fourUnits: "4 units",
      fiveUnits: "5 units",
      sixPlusUnits: "6 units and more",

      monthlyRevenue: "Monthly revenue",
      revenuePlaceholder: "Ex: 3500",

      currentSituation: "Current situation",
      situationPlaceholder: "Describe your situation (problems with tenants, necessary repairs, reason for sale, etc.)",

      submitButton: "Get My Free Evaluation",

      // Final CTA section
      ctaTitle: "Free Yourself from the Stress of Your Multi-Unit",
      ctaSubtitle: "Contact us today for a free evaluation and discover how we can solve your property owner problems.",
      ctaCallButton: "Call Now: 514-623-4280",
      ctaContactButton: "Contact Us",
    },
    // FAQ Page
    faq: {
      // Hero section
      title: "Questions",
      titleHighlight: "Frequently Asked",
      subtitle:
        "Have questions? It's normal. Here are the answers to the most frequently asked questions about our home buying process and our transparent approach.",

      // FAQ Section
      faqSectionTitle: "Frequently Asked Questions",

      // FAQ Items
      faq1Question: "Are you like other cash buyers on the Web, or are you different?",
      faq1Answer:
        "Great question. We are not real estate agents and have no intention of listing your property on the market. We are professional investors. Our goal is to buy your home directly from you. We do not use pressure tactics to convince you to sell. We simply present you with our best offer for your home and let you decide if it suits you or not. We will never ask you to make repairs or clean the house before selling it. We buy it as-is.",

      faq2Question: "If you are not a real estate agency, how do you make money?",
      faq2Answer:
        "A real estate agent makes money by guiding you through the selling process and taking a commission on the final sale price. Our business model is different. We buy your home directly from you at a price lower than its market value, then we invest our time and money to renovate it. Once the renovations are complete, we resell the home for profit. We take on all the risks and pay all the associated resale fees. We make our money through our expertise in home renovation to increase its value.",

      faq3Question: "How much will you offer for my home?",
      faq3Answer:
        "Each home is unique, and we need to evaluate your property before we can make an offer. We consider several factors such as location, property condition, necessary repairs, and current market trends. Our goal is to make you a fair offer that allows you to sell quickly without the hassle of a traditional sale, while also allowing us to make a reasonable profit after renovation.",

      faq4Question: "How do you determine the price to offer for my home?",
      faq4Answer:
        "Great question! We are completely transparent about this. Our evaluation process considers several factors: location, size, current condition, necessary repairs, current real estate market conditions, and the value of recently sold comparable properties in your neighborhood. We then subtract the anticipated renovation costs and our operating expenses, plus our profit margin.",

      faq5Question: "Are there any fees or commissions for working with you?",
      faq5Answer:
        "Absolutely not! This is one of the greatest advantages of working with us instead of a real estate agent. There are NO FEES or COMMISSIONS when you sell your home directly to us. You receive the exact amount of our offer, without any deductions. You do not have to pay for repairs, cleaning, or inspections. You do not even have to clean the house before leaving! We take the property as-is, in the condition it is in, and we handle everything else.",

      faq6Question: "Can I get fair prices for my property?",
      faq6Answer:
        "Yes, we strive to make fair offers based on the condition of your home, its location, and current market conditions. Our goal is to create a win-win situation where you can sell quickly and without hassle, and where we can make a reasonable profit after investing in renovations. While our offer may be lower than the market price, it reflects the 'as-is' value of your property, without the costs, time, and stress associated with a traditional sale.",

      faq7Question: "How can I know that you are legitimate?",
      faq7Answer:
        "That's a great question, and we're glad you asked! Transparency and honesty are fundamental values for our company. We invite you to consult our satisfied clients' testimonials on our website. We are a local business with a physical address and would be happy to meet you in person. We will provide you with all necessary documents and work with a notary to ensure that the transaction is legal and secure.",

      // Sidebar content
      sidebarQuestionsTitle: "Do You Have Other Questions?",
      sidebarQuestionsText: "Feel free to contact us directly. Our team is here to answer all your questions.",
      sidebarCallButton: "Call Us: 514-623-4280",
      sidebarContactButton: "Contact Us",

      sidebarOfferTitle: "Get Your Cash Offer Here",
      sidebarOfferButton: "Get My Cash Offer »",

      // Comparison table
      comparisonTitle: "Comparison of Options",
      comparisonSubtitle: "Here is a comparative table of the options available to you for selling your home.",

      comparisonAspectColumn: "Comparison / Fees",
      comparisonAgentColumn: "Sell with a Real Estate Agent",
      comparisonUsColumn: "Sell with Quoi Faire Avec Ma Maison",

      comparisonFeesRow: "Who Pays for All Fees?",
      comparisonFeesAgent: "You",
      comparisonFeesUs: "We pay all fees",

      comparisonCommissionRow: "Commissions?",
      comparisonCommissionAgent: "Yes (generally 5% for agents)",
      comparisonCommissionUs: "No commission",

      comparisonRepairsRow: "Who Pays for Repairs & Improvements?",
      comparisonRepairsAgent: "You",
      comparisonRepairsUs: "We pay all repairs",

      comparisonAppraisalRow: "Appraisal Required?",
      comparisonAppraisalAgent: "Yes, if buyer",
      comparisonAppraisalUs: "No",

      comparisonInspectionRow: "Buyer Inspection?",
      comparisonInspectionAgent: "Yes",
      comparisonInspectionUs: "No",

      comparisonTimeRow: "Average Number of Days Before Selling",
      comparisonTimeAgent: "+/- 91 Days",
      comparisonTimeUs: "We buy immediately",

      comparisonVisitsRow: "Number of Visits",
      comparisonVisitsAgent: "Multiple",
      comparisonVisitsUs: "1 (just us)",

      comparisonMovingRow: "Who Pays for Your Moving Fees?",
      comparisonMovingAgent: "You",
      comparisonMovingUs: "We pay for your moving",

      comparisonNote:
        "Your main priority when selling a home is to make choices that suit you financially and emotionally. We understand that every situation is unique, and we respect your decision, whatever it may be. Our goal is simply to offer you a quick and stress-free alternative to the traditional selling method.",

      // Guide download section
      guideTitle: "Discover the Advantages and Disadvantages of Selling Your Home to a Professional Buyer",
      guideText1:
        "Download our FREE Guide and discover all the advantages and disadvantages of selling your home to a professional buyer. This guide will help you make an informed decision about selling your real estate property.",
      guideText2:
        "This FREE Guide teaches you all the advantages and disadvantages of selling your home to a professional buyer. We wanted to be transparent and give you the tools to make the best decision for YOU!",
      guideDownloadButton: "Download the free guide",
      guideShareButton: "Share this guide",

      // Final CTA
      finalCtaTitle: "Ready to Get Your Cash Offer?",
      finalCtaSubtitle: "Fill out our quick form below to get a cash offer without any hassle or commitment.",
      finalCtaButton: "Get My Offer Now",
    },
    // About Page
    about: {
      // Hero section
      title: "About",
      titleHighlight: "Quoi Faire Avec Ma Maison",
      subtitle:
        "We help homeowners in Greater Montreal to free themselves from the stress of their real estate responsibilities. Our commitment to quality and respect has earned us the trust of many homeowners who wanted to sell quickly and without stress.",
      heroSubtitle:
        "We help homeowners in Greater Montreal to free themselves from the stress of their real estate responsibilities. Our commitment to quality and respect has earned us the trust of many sellers.",
      ourStoryTitle: "Our Story",
      storyTitle: "Our Story",
      storyParagraph1:
        "For years, the Quebec market had the same methods for selling homes in Montreal for all sellers. However, many people are looking for alternative solutions that allow them to sell their home quickly and without stress.",
      storyParagraph2:
        "That's why we created Quoi Faire Avec Ma Maison to offer a simple, quick, and effective solution to homeowners who want to sell their property quickly.",
      storyParagraph3:
        "We offer tailored solutions to help homeowners get out of difficult situations or simply sell quickly. Our goal is to offer you a positive experience. We buy a simple, quick, and effective solution so you can move on quickly to your next step.",

      // Team section
      teamTitle: "Our Team",
      teamSubtitle: "Meet the dedicated professionals who work to offer you the best possible service.",

      // David Manianga profile
      davidName: "David Manianga",
      davidTitle: "Founder & Director",
      founderTitle: "Founder & Director",
      davidBio1:
        "David is an experienced professional who has worked for over a decade in the financial sector. He has also studied in financial planning and business management, but it is his passion for real estate and his desire to help people improve their financial situation that led him to create QUOI FAIRE AVEC MA MAISON.",
      davidBio2:
        "Specialist in asset management and human relations, he excels in financial analysis, property evaluation, offer, and negotiation to make the best offers to sellers. His expertise in financial services and deep knowledge of the local real estate market are major assets for the team.",

      // Values section
      valuesTitle: "Our Values",
      valuesSubtitle:
        "These principles guide each of our actions and decisions to offer you the best possible service.",

      transparencyTitle: "Transparency",
      transparencyDesc:
        "We believe in open and honest communication at every step of the process. No surprises, no hidden fees.",

      integrityTitle: "Integrity",
      integrityDesc:
        "We respect our commitments and always act in the best interest of our clients with honesty and ethics.",

      excellenceTitle: "Excellence",
      excellenceDesc:
        "We constantly strive to improve our services and exceed our clients' expectations at every transaction.",

      // How we work section
      workTitle: "How We Work?",
      howWeWorkTitle: "How We Work?",
      workSubtitle: "Our approach is designed to make the sale of your home as simple and stress-free as possible.",

      philosophyTitle: "Our Philosophy",
      philosophyText1:
        "With our years of experience, we have realized that many buyers end up unsatisfied with not getting the home they really wanted. We have also noticed that many sellers end up unsatisfied with not selling their home at the price they wanted.",
      philosophyText2:
        "That's why we created Quoi Faire Avec Ma Maison to offer a simple, quick, and effective solution to homeowners who want to sell their property quickly. We are confident in a vision, an expression, a statement of unconventional approaches that we have called 'Quoi Faire Avec Ma Maison'.",
      philosophyDesc:
        "Thanks to our experience, we know that buyers and sellers are often dissatisfied with the traditional process. That's why we created Quoi Faire Avec Ma Maison to offer a simple, quick, and transparent solution.",

      commitmentTitle: "Our Commitment",
      commitmentText1:
        "We are convinced that we can help you sell your home quickly and without stress, regardless of your situation. Professionally supported by resources, we will make you an offer within 24 hours of our visit.",
      commitmentText2:
        "Our team is dedicated to offering you a personalized service and accompanying you at every step of the process. We understand that each situation is unique, and we adapt our approach accordingly.",
      commitmentDesc:
        "We make you a fair offer within 24 hours and manage every step so you can sell quickly, without fees or stress.",

      // Contact section
      contactTitle: "Contact Us",
      contactSubtitle:
        "Have questions or want to learn more about our services? Don't hesitate to contact us. Our team is here to help you.",

      phoneTitle: "Phone",
      emailTitle: "Email",
      serviceAreaTitle: "Service Area",
      serviceAreaText: "Greater Montreal, Laval, South Shore, North Shore",
      serviceAreaDesc: "Greater Montreal, Laval, South Shore, and North Shore",

      contactFormTitle: "Send Us a Message",
      contactFormButton: "Send the Message",

      // Final CTA
      finalCtaTitle: "Ready to Sell Your Home?",
      finalCtaSubtitle: "Get a cash offer for your home today and sell at your chosen date.",
      finalCtaButton1: "Get My Offer Now",
      finalCtaButton2: "Call Us: 514-623-4280",

      // Additional missing keys
      yearsExperience: "years of experience",
    },
    // Contact Page
    contact: {
      title: "Contact Our",
      titleHighlight: "Team",
      subtitle:
        "Have questions or want to get an offer for your property? Our team of experts is here to help. Contact us today for a free consultation with no commitment.",

      // Contact Info Section
      infoTitle: "How to Reach Us",
      infoSubtitle: "Multiple ways to contact us depending on your preferences and situation.",

      phoneTitle: "Phone",
      phoneDesc: "Call us directly for an immediate response",
      emailTitle: "Email",
      emailDesc: "Send us a detailed message",
      locationTitle: "Service Area",
      locationDesc: "We serve all of Greater Montreal",
      serviceArea: "Greater Montreal, Laval, South Shore, North Shore",

      // Contact Form Section
      formTitle: "Send Us a Message",
      formSubtitle: "Fill out the form below and we will respond to you as soon as possible.",

      whyContactTitle: "Why Contact Us?",
      personalizedServiceTitle: "Personalized Service",
      personalizedServiceDesc: "Each situation is unique, we adapt our approach to your specific needs.",
      quickResponseTitle: "Quick Response",
      quickResponseDesc: "We commit to responding to you within 24 hours of your request.",
      expertAdviceTitle: "Expert Advice",
      expertAdviceDesc: "Benefit from our over 15 years of expertise in real estate.",

      urgentTitle: "Urgent Situation?",
      urgentDesc: "For urgent situations, call us directly.",
      callNowButton: "Call Now",

      // Form Fields
      subjectLabel: "Subject of Your Request",
      subjectSelect: "Select a subject",
      subjectHouseSale: "House Sale",
      subjectLandSale: "Land Sale",
      subjectMultiUnit: "Multi-Unit Sale",
      subjectEvaluation: "Free Evaluation",
      subjectOther: "Other",

      messageLabel: "Your Message",
      messagePlaceholder: "Describe your situation, your needs, or ask us your questions...",

      consentText: "I agree to be contacted by Quoi Faire Avec Ma Maison regarding my request.",
      sendButton: "Send the Message",

      // Business Hours
      hoursTitle: "Business Hours",
      officeHoursTitle: "Office Hours",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      weekdayHours: "9:00 AM - 6:00 PM",
      saturdayHours: "10:00 AM - 4:00 PM",
      sundayHours: "Closed",

      emergencyTitle: "Emergency Contact",
      emergencyDesc: "For urgent situations outside of business hours, we are available.",
      emergencyCall: "Emergency Call",
      emergencyEmail: "Emergency Email",

      // FAQ Section
      faqTitle: "Frequently Asked Questions",
      faqSubtitle:
        "Here are some answers to the most common questions. For more information, consult our complete FAQ page.",

      faqQuestion1: "How long will it take to receive an offer?",
      faqAnswer1: "We will respond to you within 24 hours of your request.",
      faqQuestion2: "What types of properties do you buy?",
      faqAnswer2:
        "We buy all types of properties: single-family homes, duplexes, triplexes, land, and even abandoned or poor condition properties.",

      faqQuestion3: "Are there any fees for your service?",
      faqAnswer3: "No, our service is completely free. We don't charge any fees, commissions, or hidden costs.",

      faqQuestion4: "In which areas do you offer your services?",
      faqAnswer4: "We serve all of Greater Montreal, including Laval, South Shore, and North Shore.",
    },
  },
}

// -----------------------------------------------------------------------------
// Utility to safely fetch a translation by dot-notation key.
//
// If a key is missing, the original key is returned so that missing strings
// are obvious during development.
// -----------------------------------------------------------------------------
export function getTranslation(language: Language, key: string): string {
  const segments = key.split(".")
  let value: unknown = translations[language]

  for (const segment of segments) {
    if (value && typeof value === "object" && segment in (value as object)) {
      // @ts-expect-error – we gradually drill down
      value = value[segment]
    } else {
      return key // fallback for missing keys
    }
  }

  return typeof value === "string" ? (value as string) : key
}

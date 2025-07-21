// French translations for DERMIQT skincare website
import services from "./services.js";
import privacy from "./privacy.js";
import terms from "./terms.js";
import cookies from "./cookies.js";
import dataSecurity from "./dataSecurity.js";
import news from "./news.js";
import driver from "./driver.js";
import mechanic from "./mechanic.js";
import dockWorker from "./dockWorker.js";

export default {
  // Navigation
  nav: {
    menu: "Accueil",
    services: "Services",
    about: "À Propos",
    news: "Actualités",
    careers: "Carrières",
    careerssub: {
      driver: "Chauffeur",
      dockworker: "Dockworker",
      mechanic: "Mécanicien",
    },
    contact: "Contact",
    contactUs: "Nous Contacter",
    login: "Connexion",
    shopNow: "Commencer",
  },

  // Header
  header: {
    searchPlaceholder: "Rechercher dans Emi's Nest",
    brand: {
      name: "Emi's Nest Inc.",
      tagline: "Entreprise de Déménagement et Logistique",
    },
    language: {
      english: "Anglais",
      french: "Français",
    },
  },

  // Hero Section
  hero: {
    title: "Déménagement et Logistique Sans Stress",
    subtitle: "Entreprise de Déménagement de Confiance de Toronto",
    description:
      "Emi's Nest Inc. est une entreprise moderne et avant-gardiste de déménagement et logistique basée à Toronto, Canada. Nous rendons le déménagement sans stress, fluide et sécurisé grâce à l'innovation, la transparence et le dévouement à la satisfaction client.",
    trackingTitle: "Suivre Votre Expédition",
    trackingPlaceholder: "Entrez le numéro de suivi",
    features: [
      "Prix transparents",
      "Équipe professionnelle",
      "Réservation et suivi numériques",
      "Licencié et assuré",
    ],
    ctaButton: "Obtenir un Devis Gratuit",
  },

  // Award Badge
  award: {
    fortune: "EMI'S NEST INC.",
    title: "Entreprise de Déménagement la Plus Fiable de Toronto",
    year: "2024",
    deliveryRate: "Taux de Satisfaction Client",
  },

  // Take Control Section
  takeControl: {
    title: "Prenez le Contrôle de Votre Fret",
    subtitle:
      "Donnez du pouvoir à votre entreprise avec des solutions logistiques intelligentes qui vous mettent aux commandes",
    features: [
      {
        icon: "schedule",
        title: "Suivi en Temps Réel",
        description:
          "Surveillez vos expéditions avec une précision exacte et des mises à jour instantanées",
      },
      {
        icon: "analytics",
        title: "Analyses Intelligentes",
        description:
          "Prenez des décisions basées sur les données avec des insights et rapports complets",
      },
      {
        icon: "security",
        title: "Opérations Sécurisées",
        description:
          "Des protocoles de sécurité avancés garantissent que votre fret est toujours protégé",
      },
    ],
  },

  // Mission Critical Section
  mission: {
    badge: "Critique",
    title: "Le Fret LTL est Critique pour Votre Entreprise",
    description:
      "Chaque expédition compte. Nous comprenons que vos opérations de fret sont la colonne vertébrale du succès de votre entreprise.",
    items: [
      {
        icon: "access_time",
        title: "Ramassage & Livraison à Temps",
        description:
          "Planification fiable qui maintient vos opérations fluides",
      },
      {
        icon: "verified",
        title: "Expédition Sans Dommage",
        description:
          "Des protocoles de manipulation avancés garantissent l'arrivée intacte de votre fret",
      },
      {
        icon: "receipt",
        title: "Facturation Précise",
        description: "Prix transparents sans frais cachés ou surprises",
      },
    ],
  },

  // Freight First Section
  freightFirst: {
    title: "C'est Pourquoi Nous Mettons Votre Fret en Premier",
    description:
      "Nous avons créé un réseau de fret LTL équipé d'une capacité nationale, d'une technologie de pointe et d'une équipe de classe mondiale. Et nous construisons et améliorons constamment.",
    stats: [
      {
        number: "99.9%",
        label: "Taux à Temps",
      },
      {
        number: "24/7",
        label: "Support",
      },
      {
        number: "50+",
        label: "États Servis",
      },
    ],
  },

  // Coast to Coast Section
  coastToCoast: {
    title: "Réseau Côte à Côte",
    subtitle:
      "Nous sommes l'un des plus grands fournisseurs de fret LTL en Amérique du Nord, avec une couverture qui s'étend aux États-Unis, au Canada, au Mexique et aux Caraïbes.",
    east: "Côte Est",
    west: "Côte Ouest",
    central: "Hub Central",
    ctaButton: "Voir où nous expédions",
    stats: [
      {
        icon: "location_on",
        number: "50+",
        label: "États Couverts",
      },
      {
        icon: "public",
        number: "3",
        label: "Pays Servis",
      },
      {
        icon: "local_shipping",
        number: "500+",
        label: "Centres de Service",
      },
    ],
  },

  // Stats Slider Section
  statsSlider: {
    title: "Nos Chiffres Raconte l'Histoire",
    subtitle:
      "Découvrez l'ampleur et l'impact de notre réseau logistique à travers les indicateurs de performance clés",
    tabs: {
      fleet: "Flotte",
      network: "Réseau",
      performance: "Performance",
    },
    slides: {
      fleet: {
        stats: [
          {
            icon: "local_shipping",
            number: "13,000+",
            label: "Chauffeurs Professionnels",
          },
          {
            icon: "directions_car",
            number: "44,000+",
            label: "Tracteurs & Remorques",
          },
          {
            icon: "location_on",
            number: "99%",
            label: "Codes Postaux US Couverts",
          },
        ],
      },
      network: {
        stats: [
          {
            icon: "business",
            number: "500+",
            label: "Centres de Service",
          },
          {
            icon: "schedule",
            number: "15+",
            label: "Années d'Expérience",
          },
          {
            icon: "support_agent",
            number: "24/7",
            label: "Support Client",
          },
        ],
      },
      performance: {
        stats: [
          {
            icon: "verified",
            number: "99%",
            label: "Livraison à Temps",
          },
          {
            icon: "thumb_up",
            number: "100%",
            label: "Satisfaction Client",
          },
          {
            icon: "public",
            number: "50+",
            label: "États Servis",
          },
        ],
      },
    },
  },

  // Capacity Section
  capacity: {
    badge: "Croissance Forte",
    title: "Capacité pour Chaque Charge",
    description:
      "Nous grandissons pour nous assurer de toujours dire 'oui' aux clients, peu importe le volume. Notre infrastructure et nos capacités de flotte en expansion garantissent un service fiable pour les entreprises de toutes tailles.",
    ctaButton: "À Propos de Nous",
    growthPoints: ["2019", "2020", "2021", "2022", "2023", "2024"],
    stats: [
      {
        icon: "business",
        number: "301",
        label: "Centres de Service",
        trend: "+15% croissance",
      },
      {
        icon: "local_shipping",
        number: "2,300+",
        label: "Tracteurs Ajoutés en 2024",
        trend: "+25% augmentation",
      },
      {
        icon: "inventory_2",
        number: "4,400+",
        label: "Remorques Produites en 2024",
        trend: "+30% expansion",
      },
    ],
    features: [
      {
        icon: "scale",
        title: "Solutions Évolutives",
        description:
          "Des petits envois aux opérations à grande échelle, nous adaptons notre capacité à vos besoins spécifiques.",
      },
      {
        icon: "speed",
        title: "Expansion Rapide",
        description:
          "Notre infrastructure grandit avec la demande, garantissant que nous ne refusons jamais d'affaires en raison de contraintes de capacité.",
      },
      {
        icon: "verified",
        title: "Fiabilité Éprouvée",
        description:
          "Des années d'expérience dans la gestion de divers types de cargaisons et volumes avec une qualité et ponctualité constantes.",
      },
    ],
  },

  // Technology Section
  technology: {
    badge: "Technologie Intelligente",
    title: "Technologie pour l'Efficacité",
    description:
      "Rendez votre expédition de fret plus efficace et votre expérience plus simple, avec une technologie qui fonctionne pour vous.",
    ctaButton: "Outils Web",
    stats: [
      {
        icon: "local_shipping",
        number: "13 Millions",
        label: "Expéditions Déplacées Annuellement",
        description: "Par notre équipe de transport avec précision et soin",
      },
      {
        icon: "speed",
        number: "661 Millions",
        label: "Miles de Transport Par An",
        description: "Routes optimisées pour une efficacité maximale",
      },
      {
        icon: "schedule",
        number: "99.9%",
        label: "Performance à Temps",
        description: "Livraison fiable sur laquelle vous pouvez compter",
      },
    ],
    features: [
      {
        icon: "computer",
        title: "Outils d'Expédition Faciles à Utiliser",
        description:
          "Outils numériques rationalisés qui rendent l'expédition simple et efficace.",
        benefits: [
          "Suivi et gestion des expéditions",
          "Demande de devis et de ramassage",
          "Saisie des données d'expédition",
        ],
      },
      {
        icon: "psychology",
        title: "Science des Données & Apprentissage Automatique",
        description:
          "Algorithmes avancés qui optimisent continuellement vos opérations logistiques.",
        benefits: [
          "Optimisation constante du réseau",
          "Flux de fret gérés en temps réel",
          "Tarification et routage dynamiques",
        ],
      },
      {
        icon: "analytics",
        title: "Analyses Avancées",
        description:
          "Aperçus complets pour améliorer les performances de votre chaîne d'approvisionnement.",
        benefits: [
          "Métriques de performance en temps réel",
          "Analyses prédictives",
          "Tableaux de bord de rapports personnalisés",
        ],
      },
    ],
    dashboard: {
      title: "Tableau de Bord de Performance en Direct",
      status: "Tous les Systèmes Opérationnels",
      metrics: [
        {
          label: "Efficacité du Réseau",
          value: "98.5%",
          trend: "up",
          change: "+2.3%",
        },
        {
          label: "Vitesse de Livraison",
          value: "2.1 Jours",
          trend: "up",
          change: "-0.3 jours",
        },
        {
          label: "Économies de Coûts",
          value: "2.4M$",
          trend: "up",
          change: "+15.2%",
        },
      ],
    },
  },

  // Accountability Section
  accountability: {
    badge: "Confiance & Transparence",
    title: "Responsables envers Nos Clients",
    description:
      "Nos représentants locaux connaissent votre marché et votre industrie. Ils travaillent avec vous pour fournir des services qui répondent à vos besoins spécifiques de timing et de manipulation.",
    ctaButton: "Services",
    features: [
      {
        icon: "support_agent",
        title: "Expertise Locale",
        description:
          "Nos représentants comprennent votre marché local et les exigences spécifiques à votre industrie.",
      },
      {
        icon: "schedule",
        title: "Timing Personnalisé",
        description:
          "Nous travaillons avec vous pour respecter vos délais de livraison et de manipulation spécifiques.",
      },
      {
        icon: "verified",
        title: "Assurance Qualité",
        description:
          "Chaque expédition est manipulée avec soin et respecte nos normes de qualité élevées.",
      },
    ],
    testimonials: {
      title: "Ce que Disent Nos Clients",
      subtitle:
        "Vrais commentaires d'entreprises qui nous font confiance pour leur logistique",
      items: [
        {
          quote:
            "Nous offrons le package complet et sommes là pour les clients du début à la fin du mouvement de fret, peu importe quoi.",
          author: "Jamie Sheffield",
          title: "Directeur Local des Ventes",
          company: "Emi's Nest Inc.",
          avatar: "person",
          rating: 5,
        },
        {
          quote:
            "Les forces d'Emi's Nest résident dans leur capacité à résoudre les problèmes. Ils nous ont contactés de manière proactive, ont souligné quelque chose dans nos données et nous ont dit comment ils pourraient nous aider.",
          author: "Nicholas Evers",
          title: "Gestionnaire Logistique",
          company: "OshKosh Corporation",
          avatar: "person",
          rating: 5,
        },
        {
          quote:
            "Le niveau de transparence et de responsabilité qu'ils fournissent nous donne une confiance totale dans notre partenariat.",
          author: "Sarah Johnson",
          title: "Directrice de la Chaîne d'Approvisionnement",
          company: "Global Manufacturing Co.",
          avatar: "person",
          rating: 5,
        },
      ],
    },
    trust: {
      title: "Indicateurs de Confiance",
      items: [
        {
          icon: "verified",
          number: "99.9%",
          label: "Satisfaction Client",
        },
        {
          icon: "schedule",
          number: "24/7",
          label: "Support Disponible",
        },
        {
          icon: "security",
          number: "100%",
          label: "Manipulation Sécurisée",
        },
        {
          icon: "support_agent",
          number: "500+",
          label: "Représentants Locaux",
        },
      ],
    },
  },

  // Recruitment Section
  recruitment: {
    badge: "Rejoignez Notre Équipe",
    title: "Aidez-Nous à Livrer du LTL de Classe Mondiale",
    description:
      "Vous cherchez une carrière avec un leader de l'industrie ? Rejoignez notre équipe d'experts en technologie et transport engagés pour la sécurité, la croissance et les opportunités de chaque employé.",
    ctaButton: "Carrières",
    benefits: [
      {
        icon: "trending_up",
        title: "Croissance Professionnelle",
        description:
          "Opportunités d'apprentissage continu et voies d'avancement de carrière pour chaque membre de l'équipe.",
      },
      {
        icon: "groups",
        title: "Environnement Inclusif",
        description:
          "Lieu de travail diversifié et solidaire où chaque voix est valorisée et respectée.",
      },
      {
        icon: "card_giftcard",
        title: "Avantages Compétitifs",
        description:
          "Couverture santé complète, plans de retraite et récompenses basées sur la performance.",
      },
      {
        icon: "lightbulb",
        title: "Innovation Continue",
        description:
          "Travaillez avec une technologie de pointe et contribuez à des solutions de premier plan dans l'industrie.",
      },
    ],
    testimonials: {
      title: "Ce que Disent Nos Membres d'Équipe",
      subtitle:
        "Écoutez les employés qui ont bâti des carrières réussies avec nous",
      yearsLabel: "Années",
      projectsLabel: "Projets",
      items: [
        {
          quote:
            "Travailler chez Emi's Nest a été une expérience incroyable. L'entreprise valorise vraiment ses employés et offre des opportunités de croissance et de développement.",
          name: "Sarah Johnson",
          position: "Coordinatrice Logistique Senior",
          department: "Opérations",
          avatar: "person",
          years: "5+",
          projects: "150+",
        },
        {
          quote:
            "La culture ici est incroyable. Tout le monde est solidaire et collaboratif, et il y a toujours quelque chose de nouveau à apprendre.",
          name: "Michael Chen",
          position: "Gestionnaire d'Opérations",
          department: "Gestion",
          avatar: "person",
          years: "3+",
          projects: "80+",
        },
        {
          quote:
            "J'ai tellement grandi professionnellement depuis que j'ai rejoint l'entreprise. Les programmes de mentorat et de formation sont exceptionnels.",
          name: "Emily Rodriguez",
          position: "Spécialiste Technologique",
          department: "IT",
          avatar: "person",
          years: "2+",
          projects: "45+",
        },
      ],
    },
    categories: {
      title: "Postes Ouverts",
      openingsLabel: "Postes",
      items: [
        {
          icon: "local_shipping",
          name: "Chauffeurs",
          openings: "25",
          description:
            "Chauffeurs expérimentés avec des avantages compétitifs et des horaires de retour à la maison.",
        },
        {
          icon: "work",
          name: "Dockers",
          openings: "18",
          description:
            "Lieu de travail sécurisé avec des opportunités d'apprendre de nouvelles compétences et d'avancer.",
        },
        {
          icon: "build",
          name: "Mécaniciens",
          openings: "12",
          description:
            "Travail sur tous types d'équipements avec des options de croissance de carrière.",
        },
        {
          icon: "computer",
          name: "Technologie",
          openings: "8",
          description:
            "Rôles technologiques innovants dans les systèmes logistiques et de transport.",
        },
      ],
    },
    culture: {
      title: "Notre Culture d'Entreprise",
      subtitle:
        "Valeurs qui motivent notre succès et font de nous un excellent lieu de travail",
      items: [
        {
          icon: "favorite",
          text: "Approche Centrée sur l'Employé",
        },
        {
          icon: "security",
          text: "Sécurité Avant Tout",
        },
        {
          icon: "psychology",
          text: "Esprit d'Innovation",
        },
        {
          icon: "handshake",
          text: "Esprit Collaboratif",
        },
        {
          icon: "school",
          text: "Apprentissage Continu",
        },
        {
          icon: "celebration",
          text: "Reconnaissance & Récompenses",
        },
      ],
    },
  },

  // Footer
  footer: {
    company: {
      name: "Emi's Nest Inc.",
      tagline: "Solutions de Fret de Classe Mondiale",
      description:
        "Leader de l'industrie avec des solutions logistiques innovantes, une technologie de pointe et un service client inégalé. Votre partenaire de confiance en transport de fret.",
    },
    contact: {
      phone: "+1 (800) 299-1700",
      email: "info@emisnest.com",
      address: "123 Logistics Way, Suite 100, Dallas, TX 75201",
    },
    social: {
      title: "Suivez-Nous",
      platforms: [
        { name: "Facebook", icon: "fab fa-facebook-f" },
        { name: "Twitter", icon: "fab fa-twitter" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in" },
        { name: "Instagram", icon: "fab fa-instagram" },
        { name: "YouTube", icon: "fab fa-youtube" },
      ],
    },
    links: {
      services: {
        title: "Services",
        items: [
          "Fret LTL",
          "Camion Complet",
          "Expédition Accélérée",
          "Entreposage",
          "Solutions de Chaîne d'Approvisionnement",
          "Dédouanement",
        ],
      },
      company: {
        title: "Entreprise",
        items: [
          "À Propos de Nous",
          "Carrières",
          "Salle de Presse",
          "Direction",
          "Relations Investisseurs",
          "Durabilité",
        ],
      },
      support: {
        title: "Support",
        items: [
          "Suivre l'Expédition",
          "Soumettre une Réclamation",
          "Service Client",
          "Centre d'Aide",
          "Nous Contacter",
          "Portail Agent",
        ],
      },
      legal: {
        title: "Légal",
        items: [
          "Politique de Confidentialité",
          "Conditions de Service",
          "Sécurité des Données",
          "Politique des Cookies",
          "Accessibilité",
          "Plan du Site",
        ],
      },
    },
    newsletter: {
      title: "Restez Informé",
      description:
        "Recevez les dernières informations de l'industrie, les mises à jour de l'entreprise et les offres exclusives directement dans votre boîte de réception.",
      placeholder: "Entrez votre adresse e-mail",
      benefits: [
        "Aperçus et tendances de l'industrie",
        "Offres d'expédition exclusives",
        "Mises à jour et nouvelles de l'entreprise",
      ],
    },
    bottom: {
      copyright: "© 2025 Emi's Nest Inc. Tous droits réservés.",
      legal: "U.S. DOT No. 077949 / TxDMV No. (1-800-299-1700)",
      backToTop: "Retour en Haut",
    },
    floating: {
      chat: "Support Chat",
      quote: "Obtenir un Devis",
    },
  },

  // CTA Section
  cta: {
    badge: "Commencez Aujourd'hui",
    title: "Prêt à Expédier ?",
    description:
      "Obtenez votre devis instantané aujourd'hui et découvrez la puissance de notre réseau. Rejoignez des milliers de clients satisfaits qui nous font confiance pour leur logistique.",
    primaryButton: "Commencer",
    secondaryButton: "Nous Contacter",
    features: [
      {
        icon: "speed",
        text: "Devis Instantanés",
      },
      {
        icon: "verified",
        text: "Réseau de Confiance",
      },
      {
        icon: "support_agent",
        text: "Support 24/7",
      },
      {
        icon: "security",
        text: "Expédition Sécurisée",
      },
    ],
    trust: {
      label: "Approuvé par les Leaders de l'Industrie",
      logos: [
        {
          icon: "business",
          name: "Fortune 500",
        },
        {
          icon: "verified",
          name: "Certifié ISO",
        },
        {
          icon: "award",
          name: "Prix Gagnant",
        },
        {
          icon: "star",
          name: "Note 5 Étoiles",
        },
      ],
    },
  },

  // Common
  common: {
    navigation: "Navigation",
    home: "Accueil",
    learnMore: "En Savoir Plus",
    getStarted: "Commencer",
    contactUs: "Nous Contacter",
    trackShipment: "Suivre l'Expédition",
    requestQuote: "Demander un Devis",
    search: "Rechercher",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
  },

  // Form Labels
  forms: {
    trackingNumber: "Numéro de Suivi",
    email: "Adresse E-mail",
    name: "Nom",
    message: "Message",
    submit: "Envoyer",
    cancel: "Annuler",
  },

  // About Page
  about: {
    hero: {
      badge: "À Propos de Nous",
      title: "Votre Partenaire de Confiance en Déménagement & Logistique",
      description:
        "Depuis plus de 15 ans, nous fournissons des services de déménagement exceptionnels avec le même soin et la même attention aux détails qui nous ont rendus prospères dès le premier jour.",
      stats: {
        years: "Années d'Expérience",
        moves: "Déménagements Réussis",
        satisfaction: "Satisfaction Client",
      },
    },
    story: {
      badge: "Notre Histoire",
      title: "Des Débuts Humble au Leadership de l'Industrie",
      description:
        "Ce qui a commencé avec un seul camion et un rêve s'est transformé en l'une des entreprises de déménagement et de logistique les plus fiables de la région.",
      timeline: {
        founded: {
          title: "Fondation de l'Entreprise",
          description:
            "Emilia Rodriguez a fondé Emi's Nest avec une mission simple : fournir des services de déménagement exceptionnels.",
        },
        expansion: {
          title: "Expansion Régionale",
          description:
            "Expansion des opérations dans plusieurs états, construisant une réputation de fiabilité et de qualité.",
        },
        leadership: {
          title: "Leadership de l'Industrie",
          description:
            "Aujourd'hui, nous servons des milliers de familles et d'entreprises à travers le pays.",
        },
      },
      overlay: {
        title: "Valeurs Familiales",
        description:
          "Nous traitons les biens de chaque client comme s'ils étaient les nôtres.",
      },
    },
    values: {
      badge: "Nos Valeurs",
      title: "Les Principes Qui Guident Tout Ce Que Nous Faisons",
      description:
        "Notre engagement envers la qualité, la fiabilité et la satisfaction client est resté inchangé tout au long de notre parcours.",
      care: {
        title: "Soin & Respect",
        description:
          "Nous traitons chaque objet avec le même soin et le même respect que nous donnerions à nos propres biens, garantissant qu'aucun dommage ne survient pendant le processus de déménagement.",
      },
      reliability: {
        title: "Fiabilité",
        description:
          "Nous comprenons l'importance du timing dans le déménagement. Notre équipe s'engage à tenir ses promesses et à respecter chaque délai.",
      },
      community: {
        title: "Communauté",
        description:
          "Nous croyons en redonner aux communautés que nous servons et en soutenir les initiatives locales qui font une différence dans la vie des gens.",
      },
    },
    team: {
      badge: "Notre Équipe",
      title: "Rencontrez les Professionnels Dévoués",
      description:
        "L'équipe passionnée derrière chaque déménagement réussi, engagée à fournir un service exceptionnel.",
      ceo: {
        name: "Emilia Rodriguez",
        position: "Fondatrice & PDG",
        description:
          "Avec plus de 20 ans d'expérience dans l'industrie du déménagement, Emilia dirige notre entreprise avec passion et dévouement à la satisfaction client.",
        experience: "Années d'Expérience",
        projects: "Projets Dirigés",
      },
      operations: {
        name: "Michael Chen",
        position: "Directeur des Opérations",
        description:
          "Michael s'assure que chaque déménagement est exécuté parfaitement, coordonnant nos équipes et maintenant nos normes élevées de service.",
        experience: "Années d'Expérience",
        projects: "Projets Gérés",
      },
      customer: {
        name: "Sarah Johnson",
        position: "Relations Client",
        description:
          "Sarah se consacre à assurer que chaque client ait une expérience exceptionnelle, de la consultation initiale à la livraison finale.",
        experience: "Années d'Expérience",
        clients: "Clients Satisfaits",
      },
    },
    certifications: {
      badge: "Certifications & Prix",
      title: "Reconnaissance de Notre Engagement envers l'Excellence",
      description:
        "Notre dévouement à la qualité et à la satisfaction client nous a valu de nombreuses reconnaissances et certifications de l'industrie.",
      bbb: {
        title: "Note A+ BBB",
        description:
          "Maintenu une note A+ avec le Better Business Bureau pendant plus de 10 ans, démontrant notre engagement envers des pratiques commerciales éthiques.",
      },
      licensed: {
        title: "Entièrement Licencié & Assuré",
        description:
          "Licence complète et couverture d'assurance complète pour protéger vos biens et vous donner l'esprit tranquille.",
      },
      recognition: {
        title: "Reconnaissance de l'Industrie",
        description:
          "De nombreux prix et reconnaissances de l'industrie pour une qualité de service exceptionnelle et une satisfaction client.",
        award1: "Meilleure Entreprise de Déménagement 2024",
        award2: "Prix Choix des Clients",
      },
    },
    cta: {
      badge: "Commencez Aujourd'hui",
      title: "Prêt à Travailler Avec Nous ?",
      description:
        "Découvrez la différence de travailler avec une équipe qui se soucie vraiment de votre déménagement et livre des résultats exceptionnels.",
      primaryButton: "Obtenir un Devis Gratuit",
      secondaryButton: "Nos Services",
    },
  },

  // Messages
  messages: {
    trackingSuccess: "Informations de suivi affichées",
    searchPerformed: "Recherche effectuée pour: {query}",
    formSubmitted: "Formulaire envoyé avec succès",
    errorOccurred: "Une erreur s'est produite",
  },

  // Contact Page
  contact: {
    hero: {
      title: "Contactez-Nous",
      subtitle:
        "Contactez notre équipe pour toute question ou pour planifier votre déménagement",
    },
    info: {
      phone: {
        title: "Téléphone",
        main: "Bureau Principal",
        number: "(555) 123-4567",
        description: "Disponible 24/7 pour les urgences",
      },
      email: {
        title: "E-mail",
        main: "Demandes Générales",
        address: "info@emisnestinc.com",
        description: "Nous répondons dans les 2 heures",
      },
      office: {
        title: "Bureau",
        main: "Bureau Principal",
        address: "123 Moving Way",
        details: "Suite 100, Ville, État 12345",
      },
    },
    form: {
      title: "Envoyez-Nous un Message",
      subtitle:
        "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 2 heures. Pour les urgences, veuillez nous appeler directement.",
      firstName: "Prénom",
      lastName: "Nom de Famille",
      email: "Adresse E-mail",
      phone: "Numéro de Téléphone",
      subject: "Sujet",
      message: "Message",
      agreement: "J'accepte d'être contacté concernant ma demande",
      submit: "Envoyer le Message",
      subjects: {
        general: "Demande Générale",
        quote: "Demande de Devis",
        service: "Question sur le Service",
        complaint: "Plainte",
        partnership: "Partenariat",
        other: "Autre",
      },
    },
    office: {
      title: "Visitez Notre Bureau",
      subtitle:
        "Passez à notre bureau pour rencontrer notre équipe et discuter de vos besoins de déménagement en personne.",
      hours: {
        title: "Heures d'Ouverture",
        weekdays: "Lundi - Vendredi",
        weekdaysTime: "8h00 - 18h00",
        saturday: "Samedi",
        saturdayTime: "9h00 - 16h00",
        sunday: "Dimanche",
        sundayTime: "Fermé",
      },
      address: {
        title: "Adresse",
        line1: "123 Moving Way",
        line2: "Suite 100",
        line3: "Ville, État 12345",
        line4: "États-Unis",
      },
      directions: {
        title: "Directions",
        description:
          "Situé au cœur du centre-ville, notre bureau est facilement accessible par les transports publics et dispose d'un parking suffisant pour les visiteurs.",
      },
    },
    map: {
      title: "Trouvez-Nous",
      subtitle: "Carte interactive montrant l'emplacement de notre bureau",
      placeholder: "Carte Interactive",
      description: "L'intégration de la carte serait ajoutée ici",
      directions: "Obtenir les Directions",
    },
    emergency: {
      title: "Contact d'Urgence",
      subtitle: "Pour les urgences en dehors des heures de bureau",
      line: "Ligne d'Urgence 24/7",
      number: "(555) 911-MOVE",
      description: "Disponible pour les urgences de déménagement",
    },
    social: {
      title: "Suivez-Nous",
      subtitle:
        "Restez informé de nos dernières nouvelles et conseils de déménagement",
      platforms: {
        facebook: {
          name: "Facebook",
          description: "Suivez-nous pour des conseils de déménagement",
        },
        twitter: {
          name: "Twitter",
          description: "Mises à jour en temps réel",
        },
        instagram: {
          name: "Instagram",
          description: "Dans les coulisses",
        },
        linkedin: {
          name: "LinkedIn",
          description: "Mises à jour professionnelles",
        },
      },
    },
  },

  // Services
  services,
  // Privacy Policy
  privacy,
  // Terms of Service
  terms,
  // Cookie Policy
  cookies,
  // Data Security Policy
  dataSecurity,
  // News
  news,
  // Driver
  driver,
  // Mechanic
  mechanic,
  // DockWorker
  dockWorker,

  // Chat translations
  chat: {
    title: "Vos Conversations",
    welcomeMessage:
      "Bonjour ! Je suis là pour vous aider avec toutes vos questions sur les services d'Emi's Nest. Comment puis-je vous assister aujourd'hui ?",
    inputPlaceholder: "Tapez votre message...",
    status: {
      active: "Actif",
      ended: "Votre conversation a pris fin.",
    },
    responses: {
      tracking:
        "Vous pouvez suivre votre expédition en visitant notre page de suivi ou en saisissant votre numéro de suivi dans la barre de recherche. Nous fournissons des mises à jour en temps réel sur l'emplacement et le statut de votre expédition.",
      rates:
        "Nos tarifs d'expédition varient selon la distance, le poids et le type de service. Pour un devis précis, veuillez utiliser notre calculateur de devis en ligne ou contacter directement notre équipe commerciale.",
      deliveryTime:
        "Les délais de livraison varient généralement de 1 à 5 jours ouvrables pour les expéditions nationales, selon le niveau de service et la destination. Les expéditions internationales peuvent prendre 7 à 14 jours ouvrables.",
      services:
        "Nous offrons une gamme complète de services logistiques incluant le fret LTL, le camion complet, l'expédition express, l'entreposage et les solutions de chaîne d'approvisionnement. Quel service spécifique vous intéresse ?",
      contact:
        "Vous pouvez nous joindre au +1 (800) 299-1700 ou nous envoyer un email à info@emisnest.com. Notre équipe de service client est disponible 24h/24 et 7j/7 pour vous assister.",
      careers:
        "Nous recherchons toujours des personnes talentueuses pour rejoindre notre équipe ! Consultez notre page carrières pour les postes actuels en conduite, travail sur quai, mécanique et autres postes.",
      quote:
        "Pour obtenir un devis, vous pouvez utiliser notre calculateur de devis en ligne, nous appeler directement ou remplir le formulaire de demande de devis sur notre site web. Nous vous fournirons un tarif compétitif rapidement.",
      default:
        "Merci pour votre question ! Je serais ravi de vous aider avec cela. Pourriez-vous s'il vous plaît fournir plus de détails pour que je puisse vous donner les informations les plus précises ?",
    },
  },
};

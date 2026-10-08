/* ==========================================================================
   SITE CONTENT: edit everything about you in this one file.

   - English is first. The French version is further down (SITE_FR) and only
     holds the translated text; links, photos and email come from English.
   - Photos: put image files in the "assets" folder and write their names
     here, e.g. "assets/hiking.jpg". An empty "" shows a designed placeholder.
   - Save the file and refresh the browser to see your changes.
   ========================================================================== */

window.SITE = {
  name: "Mohammad Parsakhou",
  initials: "MP",

  // Your path, in order. The hero highlights them one after another.
  roles: ["Electronic Engineer", "Product Owner", "Founder", "Product Manager"],

  headline: "I turn business goals into products, projects and measurable results.",
  intro:
    "Electronics engineer turned founder and product manager. I connect technical teams and business stakeholders to plan, launch and grow products where every feature serves a real customer need.",

  location: "Toronto, Canada",
  availability: "Open to project, product and business analysis roles",

  // Three quick facts in the hero. Numbers count up when the page loads.
  highlights: [
    { value: "18", label: "years in engineering, product & business" },
    { value: "25+", label: "people hired and mentored" },
    { value: "4", label: "companies built or grown" },
  ],

  /* ---------------- Photos ----------------
     photo:      main portrait in the hero (square works best)
     aboutPhoto: second photo, shown in the About section (e.g. at work)
     lifePhoto:  third photo, shown in "Beyond work" (e.g. outdoors)      */
  photo: "assets/profile.jpg",
  photoAlt: "Portrait of Mohammad Parsakhou",
  aboutPhoto: "assets/about-meeting.jpg",
  aboutPhotoAlt: "Mohammad Parsakhou in a team meeting",
  lifePhoto: "",
  lifePhotoAlt: "Mohammad Parsakhou outdoors",

  // Your resume PDF. Leave "" to hide the download button.
  resume: "assets/Mohammad-Parsakhou-Resume.pdf",

  /* ---------------- About ---------------- */
  about: {
    summary:
      "I started in electronics, spent ten years in hardware design, then founded two companies. Along the way I found what I love most: building products around what customers really need.",
    background: "B.Sc. Electronics Engineering (2002–2006)",
    journey: [
      "2025–now · Co-founder & Business Operations Consultant, Hipros",
      "2023–now · Executive Manager, ProdtoB",
      "2015–2023 · Founder & CEO, Omid Talaie Atihe",
      "2017–2022 · Founder & Product Owner, Digizargar",
      "2008–2018 · Electronic Engineer, Aviation Industries",
    ],
    interests: ["Product management", "Startups", "AI & fast prototyping", "Nature, hiking & travel", "Ping pong"],
    motivation: "Building products where every feature serves a real customer need and the vision of the business.",
    currentFocus: "Learning AI to turn product ideas into prototypes that can be tested with the market.",
    certifications: [
      "Product Management, BOZHAN School (2022)",
      "Executive Management (MBA), Systemkaran (2018)",
      "Business Technology, AXELL Accelerator (2017)",
    ],
  },

  /* ---------------- My story ----------------
     Each chapter: when, title, text, optional "learned" tags and the
     roles it connects to ("links"). Keep each text to 2–3 sentences. */
  story: {
    title: "From circuit boards to products people use",
    intro: "My career didn't follow a straight line, but every step built on the one before it.",
    chapters: [
      {
        when: "Where it started",
        title: "Teaching electronics",
        text: "I began by teaching electrical courses at a technical and vocational school.",
        links: ["Teacher, technical & vocational school"],
      },
      {
        when: "2008–2018",
        title: "Ten years in hardware design",
        text: "I joined the hardware design team of a technology company in the aviation industry and worked across hardware and software design for almost ten years. Office life never quite matched who I am, but it taught me what I would later rely on as a founder.",
        learned: [
          "Teamwork",
          "Working with stakeholders & executives",
          "Outsourcing & negotiation",
          "Securing budgets",
          "Feasibility studies",
          "Project control",
          "Design, build & test",
          "Version control & standards",
        ],
        links: ["Electronic Engineer, Aviation Industries"],
      },
      {
        when: "Turning point",
        title: "From solar to software",
        text: "I became interested in solar energy and worked for myself in that field for a while. Step by step, my interest moved away from electronics and toward IT, software and the startup world.",
        links: ["Self-employed, solar energy"],
      },
      {
        when: "2015–2023",
        title: "Founding two companies",
        text: "I founded Omid Talaie Atihe to deliver software and IT services, and Digizargar as my own startup. Both became successful businesses. Beyond the founder and CEO role, what I loved most was product: discovering what customers truly need, and making sure every feature serves that need and the vision of the business.",
        links: ["Founder & CEO, Omid Talaie Atihe", "Founder & Product Owner, Digizargar"],
      },
      {
        when: "2023–now",
        title: "A new chapter in Canada",
        text: "In Canada I manage ProdtoB as Executive Manager and co-founded Hipros, where I lead business operations. The same product mindset shapes how I plan, launch and grow.",
        links: ["Executive Manager, ProdtoB", "Co-founder, Hipros"],
      },
      {
        when: "What's next",
        title: "Building with AI",
        text: "Today I feel the same excitement about AI. It gives product managers and founders with a head full of ideas something close to magic: a working prototype, fast enough to test with the market. I'm learning AI every day to make the most of that opportunity.",
        links: ["Learning AI"],
      },
    ],
  },

  /* ---------------- Skills ---------------- */
  skills: [
    {
      icon: "roadmap",
      title: "Product Strategy & Roadmapping",
      description: "Shaping a product vision into a prioritized roadmap backed by market research and data.",
      value: "Teams know what to build next and why, so effort goes where it creates the most value.",
      tags: ["Product Development & Roadmapping", "Market Research & Competitor Analysis", "Business Development & Strategic Planning"],
    },
    {
      icon: "users",
      title: "Requirements & User Discovery",
      description: "Turning business and customer needs into clear requirements, user stories, journeys and wireframes.",
      value: "Products solve real problems, and engineers get specs they can build without guesswork.",
      tags: ["Requirements Gathering & User Stories", "User Journeys & Story Mapping", "Wireframing & UX Collaboration", "A/B Testing & Usability Studies"],
    },
    {
      icon: "loop",
      title: "Project & Agile Delivery",
      description: "Planning, scheduling and running projects with Scrum, from kickoff to launch.",
      value: "Work ships on time and on budget, with risks raised early instead of at the deadline.",
      tags: ["Scrum & Agile Practices", "Project Planning & Milestone Tracking", "Budget Planning & Risk Management", "MS Project, Jira, Trello & Asana"],
    },
    {
      icon: "gauge",
      title: "Metrics, Quality & Process",
      description: "Defining KPIs, coordinating QA and user acceptance testing, and improving how teams work.",
      value: "Decisions rest on measurable results, and quality problems are caught before customers see them.",
      tags: ["KPI Development & Reporting", "QA & UAT Coordination", "Process Improvement & Workflow Analysis"],
    },
    {
      icon: "spark",
      title: "Entrepreneurship & Business Planning",
      description: "Building ventures from the ground up: business plans, financial models, fundraising and IT consulting.",
      value: "Early-stage ideas get a practical plan, funding and a working operation to grow from.",
      tags: ["Start-Up Operations & Business Planning", "Financial Models & Feasibility Studies", "Accelerator & VC Fundraising", "IT Consultation"],
    },
    {
      icon: "team",
      title: "Leadership & Collaboration",
      description: "Leading cross-functional teams of developers, designers and marketers, and keeping stakeholders aligned.",
      value: "Teams stay aligned, trust each other and move faster together.",
      tags: ["Cross-Functional Team Collaboration", "Stakeholder Management", "Recruiting & Mentoring", "Change Management"],
    },
  ],

  /* ---------------- Projects ----------------
     Set url to "" to hide the button. */
  projects: [
    {
      title: "Hipros.ca",
      role: "Co-founder & Business Operations Consultant",
      years: "2025–present",
      description:
        "An electrical services business in Canada for residential and commercial clients. I lead business operations, customer service and project coordination, in line with local safety standards.",
      tags: ["Operations", "Business Planning", "Customer Service"],
      url: "https://hipros.ca",
    },
    {
      title: "ProdtoB Tech Land Inc.",
      role: "Executive Manager",
      years: "2023–present",
      description:
        "Led the company's expansion into Canada, from incorporation to digital projects. I plan and deliver technology initiatives, run market research, and coordinate website and MVP development.",
      tags: ["Project Management", "Market Research", "MVP & SEO"],
      url: "https://prodtob.com",
    },
    {
      title: "Omid Talaie Atihe Inc.",
      role: "Founder & CEO",
      years: "2015–2023",
      description:
        "Founded and scaled an IT company delivering software and digital solutions, with a team of 25+. Raised early-stage funding through the AXELL accelerator and venture capital.",
      tags: ["Business Strategy", "Fundraising", "Team Leadership"],
      url: "",
    },
    {
      title: "Digizargar.com",
      role: "Founder & Product Owner",
      years: "2017–2022",
      description:
        "My own startup. I owned the product from concept to release; our SEO and UX work ranked the site #1 for 120+ keywords, raised CTR to 10%, improved user flow by 30% and grew average order value 2.5×.",
      tags: ["Product Roadmap", "Agile", "SEO & Analytics"],
      url: "https://digizargar.com",
    },
  ],

  /* ---------------- Beyond work ----------------
     Gallery photos: put files in assets and set "src". Empty "" shows a
     colored placeholder tile with the caption. "pos" (optional) picks which
     part of the photo stays in view, e.g. "70% center". */
  life: {
    title: "Beyond work",
    text: "I love nature trips, hiking and travel. My favourite sport is ping pong.",
    hobbies: [
      { icon: "leaf", label: "Nature trips" },
      { icon: "mountain", label: "Hiking" },
      { icon: "plane", label: "Travel" },
      { icon: "paddle", label: "Ping pong" },
    ],
    gallery: [
      { src: "assets/life-forest.jpg", caption: "Nature trips", tone: "forest" },
    ],
  },

  /* ---------------- Contact ---------------- */
  contact: {
    heading: "Let's work together",
    invitation:
      "Hiring for a project or product role, building a startup, or looking for a collaborator? Send me a message and I'll get back to you.",
    email: "m.parsakho@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamad-parsa",
    github: "", // e.g. "https://github.com/your-username"
  },
};

/* ---------------- Page labels (English) ---------------- */
window.SITE.ui = {
  pageTitle: "Mohammad Parsakhou | Product Manager & Product Owner",
  skip: "Skip to content",
  menu: "Menu",
  nav_home: "Home",
  nav_about: "About",
  nav_story: "Story",
  nav_skills: "Skills",
  nav_projects: "Projects",
  nav_life: "Life",
  nav_contact: "Contact",
  cta_touch: "Get in Touch",
  view_work: "View My Work",
  contact_me: "Contact Me",
  resume: "Download resume (PDF)",
  based_in: "Based in",
  status: "Status",
  how: "How I work",
  step1_t: "Discover", step1_d: "Research the market and the user",
  step2_t: "Define", step2_d: "Roadmap, stories and success metrics",
  step3_t: "Deliver", step3_d: "Agile sprints with the whole team",
  step4_t: "Measure", step4_d: "KPIs, A/B tests and iteration",
  about_eyebrow: "About me",
  about_title: "Engineer by training, product builder by choice.",
  l_background: "Background",
  l_journey: "Journey",
  l_interests: "Interests",
  l_motivation: "What motivates me",
  l_focus: "Working toward",
  l_certs: "Certifications",
  story_eyebrow: "My story",
  learned: "What it taught me",
  skills_eyebrow: "Skills",
  skills_title: "What I bring to a product team",
  why: "Why it helps",
  projects_eyebrow: "Projects",
  projects_title: "Companies and products I've built",
  view_project: "View Project",
  new_tab: "(opens in a new tab)",
  life_eyebrow: "Life",
  photo_soon: "Photo coming soon",
  contact_eyebrow: "Contact",
  copy: "Copy",
  copied: "Copied",
  press_copy: "Press Ctrl+C",
  back_top: "Back to top",
  switch_label: "FR",
  switch_aria: "Voir le site en français",
};

/* ==========================================================================
   FRENCH VERSION
   Only the text is here. Anything you leave out (links, photos, email)
   is taken from the English version above.
   ========================================================================== */
window.SITE_FR = {
  roles: ["Ingénieur en électronique", "Product Owner", "Fondateur", "Chef de produit"],
  headline: "Je transforme des objectifs d'affaires en produits, en projets et en résultats mesurables.",
  intro:
    "Ingénieur en électronique devenu fondateur et chef de produit. Je fais le lien entre les équipes techniques et les parties prenantes pour planifier, lancer et faire croître des produits où chaque fonctionnalité répond à un vrai besoin client.",
  location: "Toronto, Canada",
  availability: "Ouvert aux postes en gestion de projet, de produit et en analyse d'affaires",
  highlights: [
    { label: "ans en ingénierie, produit et affaires" },
    { label: "personnes recrutées et encadrées" },
    { label: "entreprises créées ou développées" },
  ],
  photoAlt: "Portrait de Mohammad Parsakhou",
  aboutPhotoAlt: "Mohammad Parsakhou en réunion d'équipe",
  lifePhotoAlt: "Mohammad Parsakhou en plein air",

  about: {
    summary:
      "J'ai commencé en électronique, passé dix ans en conception matérielle, puis fondé deux entreprises. En chemin, j'ai trouvé ce que j'aime le plus : créer des produits autour des vrais besoins des clients.",
    background: "Baccalauréat en génie électronique (2002–2006)",
    journey: [
      "2025–auj. · Cofondateur et consultant en opérations, Hipros",
      "2023–auj. · Directeur exécutif, ProdtoB",
      "2015–2023 · Fondateur et PDG, Omid Talaie Atihe",
      "2017–2022 · Fondateur et Product Owner, Digizargar",
      "2008–2018 · Ingénieur en électronique, industrie aéronautique",
    ],
    interests: ["Gestion de produit", "Startups", "IA et prototypage rapide", "Nature, randonnée et voyages", "Ping-pong"],
    motivation: "Créer des produits où chaque fonctionnalité sert un vrai besoin client et la vision de l'entreprise.",
    currentFocus: "Apprendre l'IA pour transformer des idées de produits en prototypes testables sur le marché.",
    certifications: [
      "Gestion de produit, BOZHAN School (2022)",
      "Management exécutif (MBA), Systemkaran (2018)",
      "Technologie d'affaires, Accélérateur AXELL (2017)",
    ],
  },

  story: {
    title: "Des circuits électroniques aux produits que les gens utilisent",
    intro: "Mon parcours n'a pas suivi une ligne droite, mais chaque étape s'est appuyée sur la précédente.",
    chapters: [
      {
        when: "Les débuts",
        title: "Enseigner l'électronique",
        text: "J'ai commencé en enseignant l'électricité dans une école technique et professionnelle.",
        links: ["Enseignant, école technique et professionnelle"],
      },
      {
        when: "2008–2018",
        title: "Dix ans en conception matérielle",
        text: "J'ai rejoint l'équipe de conception matérielle d'une entreprise technologique de l'industrie aéronautique et j'ai travaillé près de dix ans en conception matérielle et logicielle. La vie de bureau ne me correspondait pas vraiment, mais elle m'a appris ce sur quoi je m'appuierais plus tard comme fondateur.",
        learned: [
          "Travail d'équipe",
          "Relations avec les parties prenantes et dirigeants",
          "Sous-traitance et négociation",
          "Obtention de budgets",
          "Études de faisabilité",
          "Contrôle de projet",
          "Conception, fabrication et tests",
          "Gestion de versions et normes",
        ],
        links: ["Ingénieur en électronique, industrie aéronautique"],
      },
      {
        when: "Le tournant",
        title: "Du solaire au logiciel",
        text: "Je me suis intéressé à l'énergie solaire et j'ai travaillé à mon compte dans ce domaine pendant un temps. Peu à peu, mon intérêt s'est déplacé de l'électronique vers les TI, le logiciel et l'univers des startups.",
        links: ["Travailleur autonome, énergie solaire"],
      },
      {
        when: "2015–2023",
        title: "Fonder deux entreprises",
        text: "J'ai fondé Omid Talaie Atihe pour offrir des services logiciels et TI, et Digizargar, ma propre startup. Les deux sont devenues des entreprises prospères. Au-delà du rôle de fondateur et de PDG, ce que j'aimais le plus, c'était le produit : découvrir ce dont les clients ont vraiment besoin et faire en sorte que chaque fonctionnalité serve ce besoin et la vision de l'entreprise.",
        links: ["Fondateur et PDG, Omid Talaie Atihe", "Fondateur et Product Owner, Digizargar"],
      },
      {
        when: "2023–auj.",
        title: "Un nouveau chapitre au Canada",
        text: "Au Canada, je dirige ProdtoB comme directeur exécutif et j'ai cofondé Hipros, où je pilote les opérations. Le même état d'esprit produit guide ma façon de planifier, de lancer et de faire croître.",
        links: ["Directeur exécutif, ProdtoB", "Cofondateur, Hipros"],
      },
      {
        when: "La suite",
        title: "Construire avec l'IA",
        text: "Aujourd'hui, l'IA me procure le même enthousiasme. Elle offre aux chefs de produit et aux entrepreneurs pleins d'idées quelque chose de presque magique : un prototype fonctionnel, assez vite pour le tester sur le marché. J'apprends l'IA chaque jour pour saisir cette occasion.",
        links: ["Apprentissage de l'IA"],
      },
    ],
  },

  skills: [
    {
      title: "Stratégie produit et feuille de route",
      description: "Transformer une vision produit en feuille de route priorisée, appuyée par des études de marché et des données.",
      value: "Les équipes savent quoi construire ensuite et pourquoi, et l'effort va là où il crée le plus de valeur.",
      tags: ["Développement produit et feuille de route", "Études de marché et analyse concurrentielle", "Développement des affaires et planification stratégique"],
    },
    {
      title: "Besoins et découverte utilisateur",
      description: "Traduire les besoins d'affaires et des clients en exigences claires, récits utilisateurs, parcours et maquettes.",
      value: "Les produits résolvent de vrais problèmes, et les ingénieurs reçoivent des spécifications claires, sans devinettes.",
      tags: ["Collecte des besoins et récits utilisateurs", "Parcours utilisateurs et story mapping", "Maquettes et collaboration UX", "Tests A/B et tests d'utilisabilité"],
    },
    {
      title: "Gestion de projet et livraison agile",
      description: "Planifier, ordonnancer et piloter des projets avec Scrum, du lancement à la mise en production.",
      value: "Les livraisons respectent les délais et le budget, et les risques sont signalés tôt plutôt qu'à l'échéance.",
      tags: ["Pratiques Scrum et agiles", "Planification et suivi des jalons", "Budget et gestion des risques", "MS Project, Jira, Trello et Asana"],
    },
    {
      title: "Indicateurs, qualité et processus",
      description: "Définir des KPI, coordonner l'assurance qualité et les tests d'acceptation, et améliorer le fonctionnement des équipes.",
      value: "Les décisions reposent sur des résultats mesurables, et les problèmes de qualité sont détectés avant d'atteindre les clients.",
      tags: ["Définition des KPI et reporting", "Coordination AQ et tests d'acceptation", "Amélioration des processus et analyse des flux"],
    },
    {
      title: "Entrepreneuriat et plan d'affaires",
      description: "Bâtir des entreprises à partir de zéro : plans d'affaires, modèles financiers, financement et conseil en TI.",
      value: "Les idées en démarrage obtiennent un plan concret, du financement et une organisation solide pour croître.",
      tags: ["Opérations de startup et plan d'affaires", "Modèles financiers et études de faisabilité", "Levée de fonds (accélérateur et capital de risque)", "Conseil en TI"],
    },
    {
      title: "Leadership et collaboration",
      description: "Diriger des équipes pluridisciplinaires de développeurs, de designers et de spécialistes marketing, et garder les parties prenantes alignées.",
      value: "Les équipes restent alignées, se font confiance et avancent plus vite ensemble.",
      tags: ["Collaboration interfonctionnelle", "Gestion des parties prenantes", "Recrutement et mentorat", "Gestion du changement"],
    },
  ],

  projects: [
    {
      role: "Cofondateur et consultant en opérations",
      years: "2025–aujourd'hui",
      description:
        "Une entreprise de services électriques au Canada pour une clientèle résidentielle et commerciale. Je pilote les opérations, le service à la clientèle et la coordination des projets, dans le respect des normes de sécurité locales.",
      tags: ["Opérations", "Plan d'affaires", "Service à la clientèle"],
    },
    {
      role: "Directeur exécutif",
      years: "2023–aujourd'hui",
      description:
        "J'ai dirigé l'expansion de l'entreprise au Canada, de l'incorporation aux projets numériques. Je planifie et livre des initiatives technologiques, réalise des études de marché et coordonne le développement de sites web et de MVP.",
      tags: ["Gestion de projet", "Études de marché", "MVP et SEO"],
    },
    {
      role: "Fondateur et PDG",
      years: "2015–2023",
      description:
        "J'ai fondé et fait croître une entreprise de TI offrant des logiciels et des solutions numériques, avec une équipe de plus de 25 personnes. J'ai obtenu un financement de démarrage auprès de l'accélérateur AXELL et de fonds de capital de risque.",
      tags: ["Stratégie d'affaires", "Levée de fonds", "Leadership d'équipe"],
    },
    {
      role: "Fondateur et Product Owner",
      years: "2017–2022",
      description:
        "Ma propre startup. J'ai porté le produit de la conception à la mise en ligne ; notre travail en SEO et en UX a classé le site n° 1 sur plus de 120 mots-clés, porté le taux de clics à 10 %, amélioré le parcours utilisateur de 30 % et multiplié le panier moyen par 2,5.",
      tags: ["Feuille de route produit", "Agile", "SEO et analytique"],
    },
  ],

  life: {
    title: "En dehors du travail",
    text: "J'adore les sorties en nature, la randonnée et les voyages. Mon sport préféré est le ping-pong.",
    hobbies: [{ label: "Nature" }, { label: "Randonnée" }, { label: "Voyages" }, { label: "Ping-pong" }],
    gallery: [
      { caption: "Sorties en nature" },
    ],
  },

  contact: {
    heading: "Travaillons ensemble",
    invitation:
      "Vous recrutez pour un poste en gestion de projet ou de produit, lancez une startup ou cherchez un collaborateur ? Écrivez-moi et je vous répondrai rapidement.",
  },

  ui: {
    pageTitle: "Mohammad Parsakhou | Chef de produit et Product Owner",
    skip: "Aller au contenu",
    menu: "Menu",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_story: "Parcours",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_life: "Loisirs",
    nav_contact: "Contact",
    cta_touch: "Me contacter",
    view_work: "Voir mes projets",
    contact_me: "Me contacter",
    resume: "Télécharger mon CV (PDF, en anglais)",
    based_in: "Basé à",
    status: "Statut",
    how: "Ma méthode",
    step1_t: "Découvrir", step1_d: "Étudier le marché et l'utilisateur",
    step2_t: "Définir", step2_d: "Feuille de route, récits et indicateurs de succès",
    step3_t: "Livrer", step3_d: "Sprints agiles avec toute l'équipe",
    step4_t: "Mesurer", step4_d: "KPI, tests A/B et itérations",
    about_eyebrow: "À propos",
    about_title: "Ingénieur de formation, bâtisseur de produits par choix.",
    l_background: "Formation",
    l_journey: "Parcours",
    l_interests: "Intérêts",
    l_motivation: "Ce qui me motive",
    l_focus: "Mon objectif",
    l_certs: "Certifications",
    story_eyebrow: "Mon parcours",
    learned: "Ce que j'y ai appris",
    skills_eyebrow: "Compétences",
    skills_title: "Ce que j'apporte à une équipe produit",
    why: "Pourquoi c'est utile",
    projects_eyebrow: "Projets",
    projects_title: "Entreprises et produits que j'ai bâtis",
    view_project: "Voir le projet",
    new_tab: "(s'ouvre dans un nouvel onglet)",
    life_eyebrow: "Loisirs",
    photo_soon: "Photo à venir",
    contact_eyebrow: "Contact",
    copy: "Copier",
    copied: "Copié",
    press_copy: "Appuyez sur Ctrl+C",
    back_top: "Haut de page",
    switch_label: "EN",
    switch_aria: "View the site in English",
  },
};

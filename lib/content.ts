/**
 * Single source of truth for every piece of copy and data on the site.
 * Everything is bilingual (EN / FR) and read through `useLanguage().tr()`.
 */

export type L = { en: string; fr: string };

export type Status = "live" | "building" | "shipped" | "research";

export interface StackGroup {
  id: string;
  label: L;
  items: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  role: L;
  period: L;
  status: Status;
  hook: L;
  title: L;
  problem: L;
  approach: L;
  outcome: L;
  stack: string[];
}

export interface Project {
  id: string;
  title: string;
  blurb: L;
  stack: string[];
  period?: string;
  image?: string;
  videoUrl?: string;
  github?: string;
  kaggle?: string;
}

export interface Role {
  id: string;
  org: string;
  title: L;
  kind: L;
  period: L;
  current?: boolean;
  summary: L;
  stack: string[];
}

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const identity = {
  name: "Ibrahim Goumrane",
  initials: "IG",
  email: "ibrahimgoumrane01@gmail.com",
  phone: "+212 776 209 303",
  phoneHref: "tel:+212776209303",
  location: { en: "Casablanca, Morocco", fr: "Casablanca, Maroc" } as L,
  github: "https://github.com/ibrahimGoumrane",
  linkedin: "https://www.linkedin.com/in/ibrahim-goumrane",
  cv: {
    en: "/resume/Ibrahim_Goumrane_CV_en.pdf",
    fr: "/resume/Ibrahim_Goumrane_CV_fr.pdf",
  },
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: {
    en: "AI · RAG · Agentic systems",
    fr: "IA · RAG · Systèmes agentiques",
  } as L,
  status: {
    en: "Available for freelance & full-time",
    fr: "Disponible en freelance et en CDI",
  } as L,
  headline: {
    en: "I build RAG and multi-agent systems that run in production.",
    fr: "Je construis des systèmes RAG et multi-agents qui tournent en production.",
  } as L,
  lede: {
    en: "I work on RAG architecture, LangGraph agent orchestration, and the GCP infrastructure under both. My graduation project runs inside OCP Group. I am currently building a hybrid-RAG platform on GCP for a client.",
    fr: "Je travaille sur l'architecture RAG, l'orchestration d'agents LangGraph et l'infrastructure GCP qui porte les deux. Mon PFE tourne en interne au Groupe OCP. Je construis actuellement une plateforme RAG hybride sur GCP pour un client.",
  } as L,
  primaryCta: { en: "Read the case study", fr: "Lire l'étude de cas" } as L,
  secondaryCta: { en: "Get in touch", fr: "Me contacter" } as L,
  portraitAlt: {
    en: "Portrait of Ibrahim Goumrane",
    fr: "Portrait d'Ibrahim Goumrane",
  } as L,
};

export const metrics: { value: string; label: L }[] = [
  {
    value: "1st",
    label: {
      en: "Class rank at ENSAM Casablanca, certified",
      fr: "Major de promotion à l'ENSAM Casablanca, certifié",
    },
  },
  {
    value: "OCP",
    label: {
      en: "RAG platform in internal production at OCP Group",
      fr: "Plateforme RAG en production interne au Groupe OCP",
    },
  },
  {
    value: "<300ms",
    label: {
      en: "p95 on a live delivery eligibility engine",
      fr: "p95 sur un moteur d'éligibilité de livraison",
    },
  },
  {
    value: "6",
    label: {
      en: "Freelance clients delivered end to end",
      fr: "Clients freelance livrés de bout en bout",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Positioning                                                         */
/* ------------------------------------------------------------------ */

export const positioning = {
  title: { en: "What I do", fr: "Ce que je fais" } as L,
  body: [
    {
      en: "Most of my work is retrieval design. How documents get decomposed, indexed, retrieved and reranked decides whether a model answers reliably over a corpus it never saw in training.",
      fr: "L'essentiel de mon travail porte sur la conception du retrieval. La façon dont les documents sont décomposés, indexés, récupérés et reclassés détermine si un modèle répond de façon fiable sur un corpus qu'il n'a jamais vu à l'entraînement.",
    },
    {
      en: "On top of that I build the agent orchestration in LangGraph, with error recovery and human validation checkpoints. Underneath, the GCP infrastructure that runs it: Terraform, Cloud Run, Cloud SQL, Vertex AI.",
      fr: "Par-dessus, je construis l'orchestration d'agents en LangGraph, avec reprise sur erreur et points de validation humaine. En dessous, l'infrastructure GCP qui la fait tourner : Terraform, Cloud Run, Cloud SQL, Vertex AI.",
    },
    {
      en: "I work freelance and solo, so I also scope the engagement, price it, and renegotiate when the spec moves.",
      fr: "Je travaille en freelance et en solo : je cadre aussi la mission, je la chiffre et je renégocie quand le périmètre bouge.",
    },
  ] as L[],
  focusTitle: { en: "Current focus", fr: "Focus actuel" } as L,
  focus: [
    {
      en: "Hybrid RAG: Vertex AI RAG Engine paired with pgvector for filtered retrieval",
      fr: "RAG hybride : Vertex AI RAG Engine associé à pgvector pour le retrieval filtré",
    },
    {
      en: "LangGraph orchestration with human checkpoints and error recovery",
      fr: "Orchestration LangGraph avec points de contrôle humains et reprise sur erreur",
    },
    {
      en: "GCP infrastructure as code: Terraform, Workload Identity Federation, GitLab CI",
      fr: "Infrastructure GCP as code : Terraform, Workload Identity Federation, GitLab CI",
    },
  ] as L[],
};

/* ------------------------------------------------------------------ */
/* Flagship case study                                                 */
/* ------------------------------------------------------------------ */

export const flagship = {
  eyebrow: { en: "Flagship case study", fr: "Étude de cas principale" } as L,
  client: "OCP Solutions",
  clientNote: {
    en: "Groupe OCP subsidiary. Graduation project, defended 22 June 2026.",
    fr: "Filiale du Groupe OCP. Projet de fin d'études, soutenu le 22 juin 2026.",
  } as L,
  title: {
    en: "A multi-agent platform that writes documentary-analysis reports",
    fr: "Une plateforme multi-agents qui rédige des rapports d'analyse documentaire",
  } as L,
  role: { en: "Agentic AI Engineer", fr: "Ingénieur IA agentique" } as L,
  period: { en: "March – August 2026", fr: "Mars – août 2026" } as L,
  problem: {
    en: "Analysts wrote documentary-analysis reports by hand from large, mixed-format internal corpora. A naive RAG pass over that material returns plausible text with no traceable grounding, which is useless for a report someone has to sign.",
    fr: "Les analystes rédigeaient à la main des rapports d'analyse documentaire à partir de corpus internes volumineux et hétérogènes. Une passe RAG naïve renvoie un texte plausible sans ancrage traçable, inutilisable pour un rapport que quelqu'un doit valider.",
  } as L,
  approach: {
    en: "LangGraph orchestration behind FastAPI, with a React supervision UI over WebSocket. Retrieval indexes extracted facts, questions and atomic facts rather than raw chunks, in Milvus with Qwen Embedding 4B, retrieved by bi-encoder and reranked with BAAI/bge-reranker-v2-m3.",
    fr: "Orchestration LangGraph derrière FastAPI, avec une UI de supervision React en WebSocket. Le retrieval indexe des faits, questions et faits atomiques extraits plutôt que des chunks bruts, dans Milvus avec Qwen Embedding 4B, récupérés par bi-encodeur et reclassés avec BAAI/bge-reranker-v2-m3.",
  } as L,
  outcome: {
    en: "Deployed on OCP servers and used internally by the group. Supervisors: Pr. Samih Lazaiz (ENSAM), M. Mohammed Zouai (OCP).",
    fr: "Déployée sur les serveurs d'OCP et utilisée en interne par le groupe. Encadrants : Pr. Samih Lazaiz (ENSAM), M. Mohammed Zouai (OCP).",
  } as L,
  pipeline: [
    {
      step: "01",
      label: { en: "Ingest", fr: "Ingestion" } as L,
      detail: {
        en: "Multimodal internal documents",
        fr: "Documents internes multimodaux",
      } as L,
    },
    {
      step: "02",
      label: { en: "Decompose", fr: "Décomposition" } as L,
      detail: {
        en: "Facts, questions and atomic facts, not raw chunks",
        fr: "Faits, questions et faits atomiques, pas des chunks bruts",
      } as L,
    },
    {
      step: "03",
      label: { en: "Index", fr: "Indexation" } as L,
      detail: {
        en: "Milvus, Qwen Embedding 4B",
        fr: "Milvus, Qwen Embedding 4B",
      } as L,
    },
    {
      step: "04",
      label: { en: "Retrieve", fr: "Récupération" } as L,
      detail: {
        en: "Bi-encoder over the decomposed index",
        fr: "Bi-encodeur sur l'index décomposé",
      } as L,
    },
    {
      step: "05",
      label: { en: "Rerank", fr: "Reranking" } as L,
      detail: {
        en: "BAAI/bge-reranker-v2-m3",
        fr: "BAAI/bge-reranker-v2-m3",
      } as L,
    },
    {
      step: "06",
      label: { en: "Orchestrate", fr: "Orchestration" } as L,
      detail: {
        en: "LangGraph agent graph with error recovery",
        fr: "Graphe d'agents LangGraph avec reprise sur erreur",
      } as L,
    },
    {
      step: "07",
      label: { en: "Validate", fr: "Validation" } as L,
      detail: {
        en: "Human checkpoints inside the graph",
        fr: "Points de contrôle humains dans le graphe",
      } as L,
    },
    {
      step: "08",
      label: { en: "Stream", fr: "Diffusion" } as L,
      detail: {
        en: "WebSocket updates to the React UI",
        fr: "Mises à jour WebSocket vers l'UI React",
      } as L,
    },
  ],
  decisions: [
    {
      title: {
        en: "Atomic facts, not chunks",
        fr: "Des faits atomiques, pas des chunks",
      } as L,
      body: {
        en: "Chunking by token window splits a claim from its context. Indexing extracted facts gives the retriever units that stand on their own, so a generated report traces back to a source.",
        fr: "Découper par fenêtre de tokens sépare une affirmation de son contexte. Indexer des faits extraits donne au retriever des unités autonomes, ce qui rend un rapport généré traçable jusqu'à sa source.",
      } as L,
    },
    {
      title: {
        en: "Reranking as its own hop",
        fr: "Le reranking comme étape distincte",
      } as L,
      body: {
        en: "The bi-encoder is fast and favours recall. The cross-encoder reranker is slow and favours precision. Two stages avoid compromising on a single similarity threshold.",
        fr: "Le bi-encodeur est rapide et favorise le rappel. Le reranker cross-encodeur est lent et favorise la précision. Deux étapes évitent de transiger sur un seuil de similarité unique.",
      } as L,
    },
    {
      title: {
        en: "Checkpoints inside the graph",
        fr: "Les points de contrôle dans le graphe",
      } as L,
      body: {
        en: "Validation at the end of a pipeline only reports that a run was wrong. As nodes inside the graph, checkpoints stop a bad intermediate state before it reaches the rest of the report.",
        fr: "Une validation en fin de pipeline signale seulement que l'exécution était mauvaise. En nœuds dans le graphe, les contrôles arrêtent un état intermédiaire erroné avant qu'il n'atteigne le reste du rapport.",
      } as L,
    },
  ],
  stack: [
    "LangGraph",
    "FastAPI",
    "Milvus",
    "Qwen Embedding 4B",
    "bge-reranker-v2-m3",
    "React",
    "WebSocket",
    "Python",
  ],
};

/* ------------------------------------------------------------------ */
/* Currently building                                                  */
/* ------------------------------------------------------------------ */

export const now = {
  eyebrow: { en: "Currently building", fr: "En cours" } as L,
  client: "Seement",
  project: "fca-agentic-outlook",
  title: {
    en: "A hybrid-RAG platform on GCP, provisioned in Terraform",
    fr: "Une plateforme RAG hybride sur GCP, provisionnée en Terraform",
  } as L,
  role: {
    en: "Cloud / AI Infrastructure Engineer, freelance",
    fr: "Ingénieur infrastructure cloud / IA, freelance",
  } as L,
  summary: {
    en: "I own the GCP resource stack for an agentic RAG platform, plus part of the retrieval strategy. The engagement is active.",
    fr: "Je prends en charge la stack de ressources GCP d'une plateforme RAG agentique, ainsi qu'une partie de la stratégie de retrieval. La mission est en cours.",
  } as L,
  threads: [
    {
      status: "building" as Status,
      title: {
        en: "Hybrid retrieval: Vertex AI RAG Engine + pgvector",
        fr: "Retrieval hybride : Vertex AI RAG Engine + pgvector",
      } as L,
      body: {
        en: "Vertex AI RAG Engine does strong semantic search over a large corpus, but its native filtering and metadata search are limited. pgvector handles the filtered queries. Combining both beats either alone.",
        fr: "Vertex AI RAG Engine assure une recherche sémantique solide sur un gros corpus, mais son filtrage natif et sa recherche par métadonnées sont limités. pgvector prend en charge les requêtes filtrées. Combiner les deux dépasse chacun pris seul.",
      } as L,
    },
    {
      status: "building" as Status,
      title: {
        en: "The whole GCP stack as Terraform",
        fr: "Toute la stack GCP en Terraform",
      } as L,
      body: {
        en: "Cloud Run, Vertex AI RAG Engine, Cloud SQL and storage buckets, defined as code and applied from GitLab CI. The environment is reproducible instead of clicked together in a console.",
        fr: "Cloud Run, Vertex AI RAG Engine, Cloud SQL et buckets de stockage, définis en code et appliqués depuis GitLab CI. L'environnement est reproductible au lieu d'être assemblé à la main dans une console.",
      } as L,
    },
    {
      status: "shipped" as Status,
      title: {
        en: "CI auth without service-account keys",
        fr: "Authentification CI sans clé de compte de service",
      } as L,
      body: {
        en: "GitLab CI authenticates to GCP through Workload Identity Federation instead of a long-lived JSON key. Nothing secret sits in the repository or the CI variables.",
        fr: "GitLab CI s'authentifie à GCP via Workload Identity Federation plutôt qu'avec une clé JSON à longue durée de vie. Aucun secret ne se trouve dans le dépôt ni dans les variables CI.",
      } as L,
    },
    {
      status: "shipped" as Status,
      title: {
        en: "Private Cloud SQL through impersonation",
        fr: "Cloud SQL privé par usurpation d'identité",
      } as L,
      body: {
        en: "The Auth Proxy reaches a private Cloud SQL instance by impersonating a service account, so no developer account gets direct database access.",
        fr: "L'Auth Proxy atteint une instance Cloud SQL privée en usurpant l'identité d'un compte de service, sans donner d'accès direct à la base à un compte développeur.",
      } as L,
    },
  ],
  stack: [
    "Terraform",
    "GCP",
    "Vertex AI RAG Engine",
    "pgvector",
    "Cloud Run",
    "Cloud SQL",
    "GitLab CI",
    "Workload Identity Federation",
  ],
};

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    id: "ditoco",
    client: "DITOCO",
    role: {
      en: "Freelance engineer, 36 days in two phases",
      fr: "Ingénieur freelance, 36 jours en deux phases",
    },
    period: { en: "2026", fr: "2026" },
    status: "shipped",
    hook: {
      en: "Deciding at checkout whether a two-hour delivery is possible.",
      fr: "Décider au checkout si une livraison en deux heures est possible.",
    },
    title: {
      en: "A delivery test bench across Shopify, Odoo and Onfleet",
      fr: "Un banc d'essai de livraison entre Shopify, Odoo et Onfleet",
    },
    problem: {
      en: "A pre-launch logistics startup had to know whether a two-hour slot could be honoured before promising it. Three systems each hold part of the answer and none agree by default.",
      fr: "Une startup logistique en pré-lancement devait savoir si un créneau de deux heures pouvait être honoré avant de le promettre. Trois systèmes détiennent chacun une partie de la réponse et aucun ne s'accorde par défaut.",
    },
    approach: {
      en: "An eligibility engine answering under 300ms at p95, with atomic stock reservation and weighted hourly capacity, on an append-only event journal with periodic cross-system reconciliation. Three production APIs: Shopify Admin/GraphQL over OAuth client credentials, Odoo XML-RPC, and Onfleet REST plus webhooks with HMAC verification.",
      fr: "Un moteur d'éligibilité répondant sous 300 ms au p95, avec réservation de stock atomique et capacité horaire pondérée, sur un journal d'événements en append-only avec réconciliation périodique entre systèmes. Trois API de production : Shopify Admin/GraphQL en OAuth client credentials, Odoo XML-RPC, et Onfleet REST plus webhooks avec vérification HMAC.",
    },
    outcome: {
      en: "I negotiated the two-phase proposal (36 days, €2,650) from a 15+ page spec, pricing the gaps between stated scope and actual requirements. Also set up VPS deployment, Git CI/CD and secrets management.",
      fr: "J'ai négocié la proposition en deux phases (36 jours, 2 650 €) à partir d'un cahier des charges de 15+ pages, en chiffrant les écarts entre le périmètre annoncé et les besoins réels. J'ai aussi mis en place le déploiement VPS, le CI/CD Git et la gestion des secrets.",
    },
    stack: ["Event sourcing", "Shopify GraphQL", "Odoo XML-RPC", "Onfleet", "HMAC", "VPS"],
  },
  {
    id: "maroc-reforme",
    client: "Maroc Réforme",
    role: {
      en: "Freelance engineer: spec, data model, implementation",
      fr: "Ingénieur freelance : spécification, modèle de données, implémentation",
    },
    period: { en: "2026", fr: "2026" },
    status: "building",
    hook: {
      en: "Two client rules that contradicted each other, caught before any code.",
      fr: "Deux règles client qui se contredisaient, détectées avant la moindre ligne de code.",
    },
    title: {
      en: "A salvage-vehicle auction engine for Moroccan insurers",
      fr: "Un moteur d'enchères de véhicules épaves pour les assureurs marocains",
    },
    problem: {
      en: "Three organisation types share one lifecycle. Expert assessors record damage, insurers validate and release the dossier, approved scrap dealers bid. Each needs a different view, and the dossier must freeze the moment an auction opens.",
      fr: "Trois types d'organisations partagent un même cycle de vie. Les experts consignent les dommages, les assureurs valident et libèrent le dossier, les casseurs agréés enchérissent. Chacun a besoin d'une vue différente, et le dossier doit se figer dès l'ouverture d'une enchère.",
    },
    approach: {
      en: "A four-tier role system with a strict validation workflow, and a custom auction engine: per-bidder ceilings locked at 30% above each bidder's own opening bid, minimum increments that change in the final hour, and visibility limited to whether a bidder currently leads. All enforced server-side with row-level locking, with idempotent scheduled closure for shared hosting.",
      fr: "Un système de rôles à quatre niveaux avec workflow de validation strict, et un moteur d'enchères sur mesure : plafonds par enchérisseur verrouillés à 30 % au-dessus de sa propre mise d'ouverture, incréments minimaux qui changent lors de la dernière heure, et visibilité limitée au fait de mener ou non. Le tout appliqué côté serveur avec verrouillage au niveau ligne, et clôture planifiée idempotente pour hébergement mutualisé.",
    },
    outcome: {
      en: "Delivered the spec, data model, API contract, design system and implementation across two releases, so the client could validate the core workflow before funding the rest. The ceiling rule and the increment rule turned out to conflict, which I found while writing the spec.",
      fr: "Livraison de la spécification, du modèle de données, du contrat d'API, du design system et de l'implémentation en deux jalons, pour que le client valide le workflow central avant de financer la suite. La règle de plafond et la règle d'incrément se sont révélées incompatibles, ce que j'ai trouvé en rédigeant la spécification.",
    },
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "WebSocket", "Row-level locking"],
  },
  {
    id: "pierron",
    client: "Pierron Olivier",
    role: {
      en: "Freelance, solo: scoping through hand-off",
      fr: "Freelance, en solo : du cadrage à la livraison",
    },
    period: { en: "July 2026", fr: "Juillet 2026" },
    status: "shipped",
    hook: {
      en: "Automated prospect research a non-technical client can run.",
      fr: "Une recherche de prospects automatisée qu'un client non technique peut faire tourner.",
    },
    title: {
      en: "A prospecting system for a craft brewery, on HubSpot and Lemlist",
      fr: "Un système de prospection pour une brasserie artisanale, sur HubSpot et Lemlist",
    },
    problem: {
      en: "A craft brewery needed prospects across two motions, B2B distribution and events, with no sales team to research them.",
      fr: "Une brasserie artisanale avait besoin de prospects sur deux dynamiques, la distribution B2B et l'événementiel, sans équipe commerciale pour les rechercher.",
    },
    approach: {
      en: "A Python orchestrator runs cross-source web research, extracts name, city, website, email, phone, contact and source, deduplicates, then scores each prospect A+ to D on potential volume, seasonality and contact reliability before hand-off into two HubSpot pipelines.",
      fr: "Un orchestrateur Python mène une recherche web multi-sources, extrait nom, ville, site, email, téléphone, contact et source, déduplique, puis note chaque prospect de A+ à D selon le volume potentiel, la saisonnalité et la fiabilité du contact avant transfert vers deux pipelines HubSpot.",
    },
    outcome: {
      en: "Delivered with Lemlist sequences that auto-stop on reply, plus deliverability setup: SPF/DKIM/DMARC, progressive volume ramp-up and invalid-address cleanup. Won on a job-platform bid under €500.",
      fr: "Livré avec des séquences Lemlist qui s'arrêtent à la réponse, plus la délivrabilité : SPF/DKIM/DMARC, montée en volume progressive et nettoyage des adresses invalides. Mission remportée sur appel d'offres à moins de 500 €.",
    },
    stack: ["Python", "HubSpot", "Lemlist", "Lead scoring", "SPF/DKIM/DMARC"],
  },
  {
    id: "financiana",
    client: "FINANCIANA",
    role: { en: "Technical Lead, freelance", fr: "Lead technique, freelance" },
    period: { en: "June – September 2025", fr: "Juin – septembre 2025" },
    status: "shipped",
    hook: {
      en: "A formula interpreter, because every financial instrument computes differently.",
      fr: "Un interpréteur de formules, parce que chaque instrument financier se calcule différemment.",
    },
    title: {
      en: "A financial-health platform with generated expert reports",
      fr: "Une plateforme de santé financière avec rapports experts générés",
    },
    problem: {
      en: "Companies needed to study metrics by instrument, axis and theme, benchmark against their sector, and get a report an expert would sign, starting from balance sheets that arrive as documents in any currency.",
      fr: "Les entreprises devaient étudier des indicateurs par instrument, axe et thème, se comparer à leur secteur et obtenir un rapport qu'un expert signerait, à partir de bilans arrivant sous forme de documents dans n'importe quelle devise.",
    },
    approach: {
      en: "Three hard parts: a formula interpreter so each instrument carries its own computation instead of being hard-coded, currency detection and conversion to one unified currency, and value extraction from balance-sheet documents. On top, generated Word reports with computed KPIs.",
      fr: "Trois parties difficiles : un interpréteur de formules pour que chaque instrument porte son propre calcul au lieu d'être codé en dur, la détection et la conversion des devises vers une devise unique, et l'extraction de valeurs depuis les documents de bilan. Par-dessus, des rapports Word générés avec KPI calculés.",
    },
    outcome: {
      en: "I led the build as Technical Lead, client-facing, coordinating the dev team.",
      fr: "J'ai mené le projet comme lead technique, au contact du client, en coordonnant l'équipe.",
    },
    stack: ["Next.js", "Laravel", "Python", "OCR", "MySQL", "Nginx"],
  },
];

/* ------------------------------------------------------------------ */
/* Project archive                                                     */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: "rag-engine",
    title: "RAG-Engine",
    period: "07/2025 – 08/2025",
    blurb: {
      en: "Builds a knowledge base from a whole website: recursive multi-page scraping with JS rendering, hybrid semantic and TF-IDF ranking, FAISS search, and an MCP server so an agent can query it.",
      fr: "Construit une base de connaissances à partir d'un site entier : scraping récursif multi-pages avec rendu JS, ranking hybride sémantique et TF-IDF, recherche FAISS, et un serveur MCP pour qu'un agent l'interroge.",
    },
    stack: ["Python", "OpenAI API", "FAISS", "Sentence Transformers", "Playwright", "MCP"],
    github: "https://github.com/ibrahimGoumrane/DataProject",
  },
  {
    id: "fastdev",
    title: "FastDev",
    period: "10/2025 – 12/2025",
    blurb: {
      en: "Generates, tests and deploys full-stack projects from a natural-language description, using Gemini and the Model Context Protocol. Two-stage test/production pipeline with manual validation.",
      fr: "Génère, teste et déploie des projets full-stack à partir d'une description en langage naturel, via Gemini et le Model Context Protocol. Pipeline test/production en deux étapes avec validation manuelle.",
    },
    stack: ["Gemini API", "MCP", "Spring Boot", "Java 21", "React", "Keycloak", "Docker", "Loki"],
    image: "/photo/fastdev.png",
    videoUrl: "/video/fastdev.mp4",
  },
  {
    id: "autogradeai",
    title: "AutoGradeAI",
    blurb: {
      en: "Automated exam grading. Tesseract pulls text off scanned papers, an LLM generates the model answer, and sentence-transformer similarity scores the student. Presented at ENSAM Casablanca's AGIOS day.",
      fr: "Correction automatisée de copies. Tesseract extrait le texte des copies scannées, un LLM génère la réponse modèle, et une similarité par sentence-transformers note l'étudiant. Présenté à la journée AGIOS de l'ENSAM Casablanca.",
    },
    stack: ["Tesseract OCR", "OpenAI API", "Sentence Transformers", "Python"],
    image: "/photo/autogradeai.png",
    videoUrl: "/video/autogradeai.mp4",
  },
  {
    id: "ocr-model",
    title: "OCR model for long text sequences",
    period: "11/2024 – 02/2025",
    blurb: {
      en: "A CNN-LSTM model on a ResNet50 backbone, built around the CTC-loss alignment problem on long sequences. Notebook published on Kaggle.",
      fr: "Un modèle CNN-LSTM sur base ResNet50, construit autour du problème d'alignement de la CTC loss sur les séquences longues. Notebook publié sur Kaggle.",
    },
    stack: ["PyTorch", "CNN-LSTM", "CTC Loss", "ResNet50"],
    kaggle: "https://www.kaggle.com/code/ibrahimgoumrane/notebook30b116eaea",
  },
  {
    id: "faceattendance",
    title: "FaceAttendance.AI",
    period: "03/2025 – 06/2025",
    blurb: {
      en: "Classroom attendance by facial recognition, with Redis caching so it stays usable when a whole class arrives at once.",
      fr: "Suivi de présence en classe par reconnaissance faciale, avec cache Redis pour rester utilisable quand toute une classe arrive en même temps.",
    },
    stack: ["Django", "face_recognition", "Redis", "Next.js", "Docker"],
    github: "https://github.com/ibrahimGoumrane/classroom_absence_management",
  },
  {
    id: "microservices",
    title: "Microservices e-commerce platform",
    blurb: {
      en: "Auth, order, product, payment and file services, each with its own PostgreSQL, behind a JWT API gateway. Event-driven over RabbitMQ and Kafka, on Kubernetes after migrating off Docker Compose.",
      fr: "Services auth, commande, produit, paiement et fichiers, chacun avec son PostgreSQL, derrière une API gateway JWT. Événementiel via RabbitMQ et Kafka, sur Kubernetes après migration depuis Docker Compose.",
    },
    stack: ["Kubernetes", "Kafka", "RabbitMQ", "PostgreSQL", "Prometheus", "Grafana", "ELK"],
  },
  {
    id: "recruite",
    title: "Recruite, recruitment platform",
    period: "06/2025 – 11/2025",
    blurb: {
      en: "Recruitment workflow from application to interview: automated assessments, role-based access for candidate, recruiter and admin, real-time KPIs, CV building and interview prep.",
      fr: "Workflow de recrutement de la candidature à l'entretien : évaluations automatisées, accès par rôle candidat, recruteur et admin, KPI temps réel, création de CV et préparation aux entretiens.",
    },
    stack: ["React TS", "Spring Boot", "MySQL", "WebSockets", "Quartz", "JWT", "Nginx"],
    image: "/photo/recruite.png",
    videoUrl: "/video/recruite.mp4",
  },
  {
    id: "financiana-project",
    title: "Financiana, financial analysis platform",
    period: "06/2025 – 09/2025",
    blurb: {
      en: "Per-instrument formula interpretation, currency unification, balance-sheet extraction and generated Word reports. Full case study above.",
      fr: "Interprétation de formules par instrument, unification des devises, extraction de bilans et rapports Word générés. Étude de cas complète ci-dessus.",
    },
    stack: ["Next.js", "Laravel", "Python", "OCR", "MySQL"],
    image: "/photo/financiana.png",
    videoUrl: "/video/financiana.mp4",
  },
  {
    id: "rehab",
    title: "Rehabilitation management app",
    blurb: {
      en: "A CMS for rehabilitation agencies. Patients manage their own exercise routines, and an initial assessment tailors the programme by condition and age. Built after my own scoliosis rehab.",
      fr: "Un CMS pour cabinets de rééducation. Les patients gèrent leurs propres routines et un bilan initial adapte le programme selon la pathologie et l'âge. Né de ma propre rééducation d'une scoliose.",
    },
    stack: ["React", "TypeScript", "Express", "Prisma", "MySQL"],
  },
  {
    id: "artishare",
    title: "ArtiShare, article sharing platform",
    blurb: {
      en: "A Medium-style publishing platform built in two weeks with a classmate. Next.js front end, Laravel back end for auth, REST APIs and article management.",
      fr: "Une plateforme de publication façon Medium construite en deux semaines avec un camarade. Front Next.js, back Laravel pour l'authentification, les API REST et la gestion des articles.",
    },
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL"],
    image: "/photo/artishare.png",
    videoUrl: "/video/artishare.mp4",
  },
  {
    id: "jumia-pipeline",
    title: "Web sales analytics pipeline",
    blurb: {
      en: "A daily Airflow pipeline that scrapes 1,000+ products, cleans and validates them, and loads PostgreSQL, with a Streamlit dashboard for price and discount tracking. CI/CD on GitHub Actions with pytest.",
      fr: "Un pipeline Airflow quotidien qui scrape plus de 1 000 produits, les nettoie et les valide, puis charge PostgreSQL, avec un tableau de bord Streamlit pour le suivi des prix et des remises. CI/CD sur GitHub Actions avec pytest.",
    },
    stack: ["Apache Airflow", "BeautifulSoup", "PostgreSQL", "Streamlit", "Docker", "pytest"],
    github: "https://github.com/ibrahimGoumrane/web_sales_analytic_pipeline",
  },
  {
    id: "formafast-scraper",
    title: "FormaFastScraper, contact enrichment",
    blurb: {
      en: "Resolves full identity and contact data from a name alone. Anti-bot work throughout: Selenium migrated to nodriver, human-like delays, automatic pause on captcha. spaCy NER for extraction, geocoding for location.",
      fr: "Retrouve identité et coordonnées complètes à partir d'un simple nom. Travail anti-bot de bout en bout : migration de Selenium vers nodriver, délais réalistes, pause automatique sur captcha. NER spaCy pour l'extraction, géocodage pour la localisation.",
    },
    stack: ["FastAPI", "React", "nodriver", "spaCy", "MySQL", "Geocoding"],
  },
  {
    id: "spark-marketplace",
    title: "Marketplace scraping pipeline on Spark",
    blurb: {
      en: "A daily Apache Spark pipeline that scrapes marketplace listings, then cleans and reorganises the data before loading a remote MySQL instance.",
      fr: "Un pipeline Apache Spark quotidien qui scrape des annonces de marketplace, puis nettoie et réorganise les données avant de charger une instance MySQL distante.",
    },
    stack: ["Apache Spark", "Python", "MySQL"],
  },
  {
    id: "n8n-invoices",
    title: "Invoice extraction and fraud flagging",
    blurb: {
      en: "A locally-deployed n8n instance that automates invoice extraction and analysis, feeding a dashboard that supports board decisions and flags entities engaged in fraud.",
      fr: "Une instance n8n déployée en local qui automatise l'extraction et l'analyse de factures, alimentant un tableau de bord qui appuie les décisions de direction et signale les entités frauduleuses.",
    },
    stack: ["n8n", "Python", "Dashboarding"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const roles: Role[] = [
  {
    id: "seement",
    org: "Seement",
    title: {
      en: "Cloud / AI Infrastructure Engineer",
      fr: "Ingénieur infrastructure cloud / IA",
    },
    kind: { en: "Freelance", fr: "Freelance" },
    period: { en: "2026, ongoing", fr: "2026, en cours" },
    current: true,
    summary: {
      en: "Provisioning the GCP stack for an agentic RAG platform in Terraform: Cloud Run, Vertex AI RAG Engine, Cloud SQL, storage buckets, authenticated through Workload Identity Federation and wired into GitLab CI. I also own part of the retrieval strategy, a hybrid design pairing Vertex AI RAG Engine with pgvector for filtered queries.",
      fr: "Provisionnement en Terraform de la stack GCP d'une plateforme RAG agentique : Cloud Run, Vertex AI RAG Engine, Cloud SQL, buckets, authentifiés par Workload Identity Federation et intégrés à GitLab CI. Je porte aussi une partie de la stratégie de retrieval, une conception hybride associant Vertex AI RAG Engine et pgvector pour les requêtes filtrées.",
    },
    stack: ["Terraform", "GCP", "Vertex AI", "pgvector", "GitLab CI", "WIF"],
  },
  {
    id: "ocp",
    org: "OCP Solutions",
    title: { en: "Agentic AI Engineer", fr: "Ingénieur IA agentique" },
    kind: { en: "Graduation project", fr: "Projet de fin d'études" },
    period: { en: "March – August 2026", fr: "Mars – août 2026" },
    summary: {
      en: "Built a multi-agent platform that automates documentary-analysis report generation over a multimodal RAG architecture, deployed on OCP servers and used internally by the group. LangGraph orchestration behind FastAPI, React supervision UI over WebSocket, retrieval on atomic-fact decomposition indexed in Milvus.",
      fr: "Construction d'une plateforme multi-agents automatisant la génération de rapports d'analyse documentaire sur une architecture RAG multimodale, déployée sur les serveurs d'OCP et utilisée en interne. Orchestration LangGraph derrière FastAPI, UI de supervision React en WebSocket, retrieval sur décomposition en faits atomiques indexée dans Milvus.",
    },
    stack: ["LangGraph", "FastAPI", "Milvus", "React", "WebSocket"],
  },
  {
    id: "pierron",
    org: "Pierron Olivier",
    title: {
      en: "Prospecting automation engineer",
      fr: "Ingénieur automatisation commerciale",
    },
    kind: { en: "Freelance, solo", fr: "Freelance, en solo" },
    period: { en: "July 2026", fr: "Juillet 2026" },
    summary: {
      en: "Built a prospecting system for a craft brewery across HubSpot and Lemlist, on two pipelines. A Python orchestrator runs cross-source web research, deduplicates, and scores prospects A+ to D before hand-off. Also set up Lemlist sequences and email deliverability.",
      fr: "Système de prospection pour une brasserie artisanale entre HubSpot et Lemlist, sur deux pipelines. Un orchestrateur Python mène la recherche web multi-sources, déduplique et note les prospects de A+ à D avant transfert. Séquences Lemlist et délivrabilité email également mises en place.",
    },
    stack: ["Python", "HubSpot", "Lemlist", "Lead scoring"],
  },
  {
    id: "ditoco",
    org: "DITOCO",
    title: { en: "Freelance engineer", fr: "Ingénieur freelance" },
    kind: { en: "Freelance", fr: "Freelance" },
    period: { en: "2026, 36 days", fr: "2026, 36 jours" },
    summary: {
      en: "Built a two-hour delivery test bench for a pre-launch logistics startup, orchestrating Shopify, Odoo and Onfleet around an eligibility engine under 300ms at p95 and an event-sourced journal. Negotiated the two-phase proposal from a 15+ page spec.",
      fr: "Banc d'essai de livraison en deux heures pour une startup logistique en pré-lancement, orchestrant Shopify, Odoo et Onfleet autour d'un moteur d'éligibilité sous 300 ms au p95 et d'un journal event-sourced. Proposition en deux phases négociée à partir d'un cahier des charges de 15+ pages.",
    },
    stack: ["Event sourcing", "Shopify", "Odoo", "Onfleet", "VPS"],
  },
  {
    id: "maroc-reforme",
    org: "Maroc Réforme",
    title: { en: "Freelance engineer", fr: "Ingénieur freelance" },
    kind: { en: "Freelance, in development", fr: "Freelance, en développement" },
    period: { en: "2026", fr: "2026" },
    summary: {
      en: "Rebuilding a B2B salvage-vehicle auction platform for Moroccan insurers, connecting expert assessors, insurers and scrap dealers. Four-tier roles, strict validation workflow, dossier frozen once an auction opens, and a custom auction engine enforced server-side with row-level locking.",
      fr: "Refonte d'une plateforme B2B d'enchères de véhicules épaves pour les assureurs marocains, reliant experts, assureurs et casseurs. Rôles à quatre niveaux, workflow de validation strict, dossier figé dès l'ouverture d'une enchère, et moteur d'enchères appliqué côté serveur avec verrouillage au niveau ligne.",
    },
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "WebSocket"],
  },
  {
    id: "topnegoce",
    org: "Top Negoce",
    title: { en: "Automation Engineer", fr: "Ingénieur automatisation" },
    kind: { en: "Internship", fr: "Stage" },
    period: { en: "February 2026", fr: "Février 2026" },
    summary: {
      en: "Automated invoice extraction and analysis on a locally-deployed n8n instance, feeding a dashboard that supports board decisions and flags entities engaged in fraud.",
      fr: "Automatisation de l'extraction et de l'analyse de factures sur une instance n8n locale, alimentant un tableau de bord qui appuie les décisions de direction et signale les entités frauduleuses.",
    },
    stack: ["n8n", "Python", "Dashboarding"],
  },
  {
    id: "formafast",
    org: "Formafast Consulting",
    title: {
      en: "Automation & Systems Engineer",
      fr: "Ingénieur automatisation & systèmes",
    },
    kind: { en: "Part-time", fr: "Temps partiel" },
    period: { en: "September 2025 – June 2026", fr: "Septembre 2025 – juin 2026" },
    summary: {
      en: "The broadest role here: software, automation, data engineering and infrastructure. Refactored and deployed 10+ client sites, configured Postfix and SMTP relay for an internal mailer, built FormaFastScraper for contact enrichment, and a daily marketplace scraping pipeline on Spark. Also Linux administration, SSL/TLS and incident response, including a ransomware incident on a test database.",
      fr: "Le poste le plus large : développement, automatisation, data engineering et infrastructure. Refonte et déploiement de plus de 10 sites clients, configuration de Postfix et d'un relais SMTP pour un outil interne, développement de FormaFastScraper pour l'enrichissement de contacts, et d'un pipeline quotidien de scraping sur Spark. Également administration Linux, SSL/TLS et gestion d'incidents, dont un rançongiciel sur une base de test.",
    },
    stack: ["FastAPI", "Apache Spark", "Selenium", "spaCy", "Linux", "Postfix"],
  },
  {
    id: "financiana",
    org: "FINANCIANA",
    title: { en: "Technical Lead", fr: "Lead technique" },
    kind: { en: "Freelance", fr: "Freelance" },
    period: { en: "June – September 2025", fr: "Juin – septembre 2025" },
    summary: {
      en: "Financial analysis platform for studying financial health by instrument, axis and theme, with sector benchmarking and generated Word reports. The hard parts were a formula interpreter per instrument, currency detection and unification, and value extraction from balance sheets.",
      fr: "Plateforme d'analyse financière pour étudier la santé financière par instrument, axe et thème, avec comparaison sectorielle et rapports Word générés. Les parties difficiles : un interpréteur de formules par instrument, la détection et l'unification des devises, et l'extraction de valeurs depuis les bilans.",
    },
    stack: ["Next.js", "Laravel", "Python", "OCR", "MySQL"],
  },
  {
    id: "ehc",
    org: "EHC → Recruite",
    title: { en: "Technical Lead", fr: "Lead technique" },
    kind: { en: "Internship → freelance", fr: "Stage → freelance" },
    period: { en: "June – November 2025", fr: "Juin – novembre 2025" },
    summary: {
      en: "Full-stack recruitment platform covering applications, assessments and interviews. I led the technical vision, coordinated the dev team and bridged client and team. Role-based access, real-time analytics, CV building and interview prep. Deployed on a VPS with Nginx and Certbot.",
      fr: "Plateforme de recrutement full-stack couvrant candidatures, évaluations et entretiens. J'ai porté la vision technique, coordonné l'équipe et fait le lien avec le client. Accès par rôle, analytique temps réel, création de CV et préparation aux entretiens. Déployée sur VPS avec Nginx et Certbot.",
    },
    stack: ["React TS", "Spring Boot", "MySQL", "Quartz", "WebSockets"],
  },
  {
    id: "kanbanpro",
    org: "Numeric Way",
    title: { en: "Software Development Intern", fr: "Stagiaire développement" },
    kind: { en: "Internship", fr: "Stage" },
    period: { en: "June – August 2024", fr: "Juin – août 2024" },
    summary: {
      en: "Built KanBanPro, a Jira-style project management platform with Kanban boards, real-time collaboration and chat over WebSockets, and multi-user management per project.",
      fr: "Développement de KanBanPro, une plateforme de gestion de projet façon Jira avec tableaux Kanban, collaboration temps réel et chat en WebSockets, et gestion multi-utilisateurs par projet.",
    },
    stack: ["Express.js", "React", "WebSockets", "Material UI"],
  },
];

/* ------------------------------------------------------------------ */
/* Stack                                                               */
/* ------------------------------------------------------------------ */

export const stackGroups: StackGroup[] = [
  {
    id: "agentic",
    label: { en: "Agentic & LLM", fr: "Agentique & LLM" },
    items: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "Google Gemini API",
      "Model Context Protocol",
      "Prompt engineering",
    ],
  },
  {
    id: "retrieval",
    label: { en: "Retrieval & vector", fr: "Retrieval & vectoriel" },
    items: [
      "Hybrid RAG design",
      "Vertex AI RAG Engine",
      "Milvus",
      "pgvector",
      "FAISS",
      "Qwen Embedding 4B",
      "bge-reranker-v2-m3",
      "Sentence Transformers",
    ],
  },
  {
    id: "cloud",
    label: { en: "Cloud & infrastructure", fr: "Cloud & infrastructure" },
    items: [
      "Terraform",
      "GCP (Cloud Run, Cloud SQL, GCS)",
      "Workload Identity Federation",
      "Docker",
      "Kubernetes",
      "GitLab CI",
      "GitHub Actions",
      "Linux",
      "Nginx",
      "Keycloak",
    ],
  },
  {
    id: "backend",
    label: { en: "Backend & APIs", fr: "Backend & API" },
    items: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "Spring Security / JWT",
      "Node.js / Express",
      "Django",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "WebSockets",
      "Event sourcing",
    ],
  },
  {
    id: "data",
    label: { en: "Data engineering", fr: "Data engineering" },
    items: [
      "Apache Airflow",
      "Apache Spark",
      "n8n",
      "Selenium / nodriver",
      "Playwright",
      "BeautifulSoup",
      "spaCy NER",
      "ETL design",
    ],
  },
  {
    id: "observability",
    label: { en: "Observability & quality", fr: "Observabilité & qualité" },
    items: ["Grafana", "Prometheus", "Loki", "Promtail", "ELK", "pytest"],
  },
  {
    id: "frontend",
    label: { en: "Frontend", fr: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"],
  },
];

/** Short marquee list for the hero ticker. */
export const tickerItems = [
  "LangGraph",
  "Vertex AI RAG Engine",
  "Milvus",
  "pgvector",
  "Terraform",
  "FastAPI",
  "Cloud Run",
  "bge-reranker-v2-m3",
  "Apache Airflow",
  "Kubernetes",
  "Spring Boot",
  "Next.js",
  "GitLab CI",
  "Apache Spark",
  "Qwen Embedding 4B",
  "Model Context Protocol",
];

/* ------------------------------------------------------------------ */
/* Education & recognition                                             */
/* ------------------------------------------------------------------ */

export const education = [
  {
    id: "ensam",
    school: "ENSAM Casablanca",
    schoolFull: {
      en: "École Nationale Supérieure d'Arts et Métiers",
      fr: "École Nationale Supérieure d'Arts et Métiers",
    } as L,
    degree: {
      en: "Engineering degree, Artificial Intelligence & Software Engineering",
      fr: "Diplôme d'ingénieur, intelligence artificielle & génie logiciel",
    } as L,
    period: { en: "2021 – 2026", fr: "2021 – 2026" } as L,
    detail: {
      en: "Ranked 1st in the graduating class. Graduation project defended 22 June 2026 at OCP Solutions.",
      fr: "Major de promotion. Projet de fin d'études soutenu le 22 juin 2026 chez OCP Solutions.",
    } as L,
  },
  {
    id: "datacamp",
    school: "DataCamp",
    schoolFull: {
      en: "Data Science & Data Analyst career tracks",
      fr: "Parcours Data Science & Data Analyst",
    } as L,
    degree: {
      en: "Certified coursework: regression, classification, statistical inference",
      fr: "Formation certifiée : régression, classification, inférence statistique",
    } as L,
    period: { en: "Certification", fr: "Certification" } as L,
    detail: {
      en: "Listed as coursework, not applied production ML.",
      fr: "Présenté comme formation, non comme du ML de production.",
    } as L,
  },
];

export const recognition: L[] = [
  {
    en: "Ranked 1st of the graduating class at ENSAM Casablanca, certified",
    fr: "Major de promotion à l'ENSAM Casablanca, certifié",
  },
  {
    en: "Graduation project deployed a RAG system now used internally by OCP Group",
    fr: "PFE ayant abouti à un système RAG utilisé en interne par le Groupe OCP",
  },
  {
    en: "Presented AutoGradeAI at ENSAM Casablanca's AGIOS day",
    fr: "Présentation d'AutoGradeAI à la journée AGIOS de l'ENSAM Casablanca",
  },
  {
    en: "Technical Lead on several freelance engagements, client-facing",
    fr: "Lead technique sur plusieurs missions freelance, au contact du client",
  },
];

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  eyebrow: { en: "Contact", fr: "Contact" } as L,
  title: {
    en: "Available for freelance and full-time work",
    fr: "Disponible en freelance et en CDI",
  } as L,
  body: {
    en: "Email is fastest. Tell me the corpus, the question people need answered, and what makes the current answer unreliable.",
    fr: "Le plus rapide est un email. Décrivez le corpus, la question à laquelle il faut répondre, et ce qui rend la réponse actuelle peu fiable.",
  } as L,
  availableFor: [
    { en: "Freelance RAG & agentic work", fr: "Missions RAG & agentiques en freelance" },
    { en: "Full-time AI engineering roles", fr: "Postes d'ingénieur IA à temps plein" },
    { en: "RAG architecture consulting", fr: "Conseil en architecture RAG" },
    { en: "GCP infrastructure as code", fr: "Infrastructure GCP as code" },
  ] as L[],
  languages: [
    { name: { en: "Arabic", fr: "Arabe" } as L, level: { en: "Native", fr: "Natif" } as L },
    { name: { en: "French", fr: "Français" } as L, level: { en: "Fluent", fr: "Courant" } as L },
    { name: { en: "English", fr: "Anglais" } as L, level: { en: "Fluent", fr: "Courant" } as L },
  ],
};

/* ------------------------------------------------------------------ */
/* UI chrome                                                           */
/* ------------------------------------------------------------------ */

export const ui = {
  nav: [
    { href: "#work", label: { en: "Work", fr: "Travaux" } as L },
    { href: "#now", label: { en: "Now", fr: "En cours" } as L },
    { href: "#experience", label: { en: "Experience", fr: "Parcours" } as L },
    { href: "#projects", label: { en: "Projects", fr: "Projets" } as L },
    { href: "#stack", label: { en: "Stack", fr: "Stack" } as L },
    { href: "#contact", label: { en: "Contact", fr: "Contact" } as L },
  ],
  skipToContent: { en: "Skip to main content", fr: "Aller au contenu principal" } as L,
  downloadCv: { en: "CV", fr: "CV" } as L,
  downloadCvLong: { en: "Download CV (PDF)", fr: "Télécharger le CV (PDF)" } as L,
  openMenu: { en: "Open navigation menu", fr: "Ouvrir le menu de navigation" } as L,
  closeMenu: { en: "Close navigation menu", fr: "Fermer le menu de navigation" } as L,
  toggleLanguage: { en: "Switch to French", fr: "Passer en anglais" } as L,
  toggleTheme: { en: "Toggle colour theme", fr: "Changer de thème" } as L,
  watchDemo: { en: "Watch demo", fr: "Voir la démo" } as L,
  closeVideo: { en: "Close video", fr: "Fermer la vidéo" } as L,
  viewOnGithub: { en: "View on GitHub", fr: "Voir sur GitHub" } as L,
  viewOnKaggle: { en: "View on Kaggle", fr: "Voir sur Kaggle" } as L,
  theProblem: { en: "Problem", fr: "Problème" } as L,
  theApproach: { en: "Approach", fr: "Approche" } as L,
  theOutcome: { en: "Outcome", fr: "Résultat" } as L,
  architecture: { en: "Pipeline", fr: "Pipeline" } as L,
  decisions: { en: "Key decisions", fr: "Décisions clés" } as L,
  stackLabel: { en: "Stack", fr: "Stack" } as L,
  recognitionLabel: { en: "Recognition", fr: "Distinctions" } as L,
  availableForLabel: { en: "Available for", fr: "Disponible pour" } as L,
  languagesLabel: { en: "Languages", fr: "Langues" } as L,
  statusLabels: {
    live: { en: "Live", fr: "En production" } as L,
    building: { en: "In development", fr: "En développement" } as L,
    shipped: { en: "Delivered", fr: "Livré" } as L,
    research: { en: "Research", fr: "Recherche" } as L,
  },
  sections: {
    workEyebrow: { en: "Case studies", fr: "Études de cas" } as L,
    work: { en: "Selected work", fr: "Travaux sélectionnés" } as L,
    workLede: { en: "Four client engagements.", fr: "Quatre missions clients." } as L,
    projectsEyebrow: { en: "Archive", fr: "Archive" } as L,
    projects: { en: "Project archive", fr: "Archive de projets" } as L,
    projectsLede: {
      en: "Personal, academic and side work.",
      fr: "Travaux personnels, académiques et parallèles.",
    } as L,
    experienceEyebrow: { en: "Timeline", fr: "Chronologie" } as L,
    experience: { en: "Experience", fr: "Parcours" } as L,
    experienceLede: {
      en: "Some roles run concurrently: freelance work overlaps with employment.",
      fr: "Certains rôles se chevauchent : le freelance recouvre des périodes salariées.",
    } as L,
    stackEyebrow: { en: "Toolset", fr: "Outils" } as L,
    stack: { en: "Stack", fr: "Stack" } as L,
    stackLede: {
      en: "Tools with real project work behind them.",
      fr: "Des outils avec du vrai travail de projet derrière.",
    } as L,
    educationEyebrow: { en: "Background", fr: "Formation" } as L,
    education: { en: "Education & recognition", fr: "Formation & distinctions" } as L,
  },
  footerRights: { en: "All rights reserved.", fr: "Tous droits réservés." } as L,
  builtWith: {
    en: "Built with Next.js and Tailwind CSS.",
    fr: "Construit avec Next.js et Tailwind CSS.",
  } as L,
};

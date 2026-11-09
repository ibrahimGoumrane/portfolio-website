/**
 * Single source of truth for every piece of copy and data on the site.
 * Everything is bilingual (EN / FR) and read through `useLanguage().tr()`.
 * English lives at `/`, French at `/fr`; see lib/routes.ts.
 */

export type L = { en: string; fr: string };

export type Status = "live" | "building" | "shipped" | "research";

/**
 * The four kinds of work on the site. Each one owns a colour, used the same
 * way everywhere: the hero system map, case-study tabs and the timeline.
 */
export type Domain = "retrieval" | "agents" | "cloud" | "product";

export interface StackGroup {
  id: string;
  label: L;
  items: string[];
}

export interface CaseStudy {
  id: string;
  domain: Domain;
  client: string | L;
  role: L;
  period: L;
  status: Status;
  hook: L;
  title: L;
  problem: L;
  approach: L;
  outcome: L;
  stack: string[];
  /** Extra detail shown only on the case study's own page. */
  sections?: { title: L; points: L[] }[];
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
  domain: Domain;
  org: string | L;
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
  /** One CV, written in French, offered on both language versions. */
  cv: "/resume/cv_ibrahim_goumrane.pdf",
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  status: {
    en: "Available for freelance & full-time",
    fr: "Disponible en freelance et en CDI",
  } as L,
  headline: {
    en: "I build RAG and multi-agent systems that run in production.",
    fr: "Je construis des systèmes RAG et multi-agents qui tournent en production.",
  } as L,
  lede: {
    en: "Search over large document collections, agents that act on what they find, and the Google Cloud infrastructure under both. Recent work: 1.8 million passages of Moroccan law searchable in French or Arabic, and a report-writing agent platform used inside OCP Group.",
    fr: "La recherche dans de grands fonds documentaires, des agents qui agissent sur ce qu'ils trouvent, et l'infrastructure Google Cloud sous les deux. Récemment : 1,8 million de passages de droit marocain interrogeables en français ou en arabe, et une plateforme d'agents rédigeant des rapports, utilisée au Groupe OCP.",
  } as L,
  primaryCta: { en: "See selected work", fr: "Voir les travaux" } as L,
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
      en: "in my class at ENSAM Casablanca",
      fr: "de ma promotion à l'ENSAM Casablanca",
    },
  },
  {
    value: "14+",
    label: {
      en: "clients I have worked with",
      fr: "clients accompagnés",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Domains & system map                                                */
/* ------------------------------------------------------------------ */

export const domains: Record<Domain, L> = {
  retrieval: { en: "Search & RAG", fr: "Recherche & RAG" },
  agents: { en: "Agents & automation", fr: "Agents & automatisation" },
  cloud: { en: "Cloud infrastructure", fr: "Infrastructure cloud" },
  product: { en: "Product engineering", fr: "Ingénierie produit" },
};

/** The hero diagram: the system I usually build, with real proof per part. */
export const systemMap = {
  title: { en: "What I build, part by part", fr: "Ce que je construis, pièce par pièce" } as L,
  input: {
    label: { en: "Your documents", fr: "Vos documents" } as L,
    detail: {
      en: "Laws, court rulings, internal reports, scans, whole websites",
      fr: "Lois, décisions de justice, rapports internes, scans, sites entiers",
    } as L,
  },
  stages: [
    {
      domain: "retrieval" as Domain,
      label: { en: "Find", fr: "Retrouver" } as L,
      steps: [
        { en: "Clean, deduplicate, split", fr: "Nettoyer, dédoublonner, découper" },
        { en: "Embed and index", fr: "Vectoriser et indexer" },
        { en: "Retrieve and rerank", fr: "Récupérer et reclasser" },
      ] as L[],
      proof: {
        en: "1.8M legal passages, about 50ms per search",
        fr: "1,8 M de passages juridiques, environ 50 ms par recherche",
      } as L,
    },
    {
      domain: "agents" as Domain,
      label: { en: "Reason", fr: "Raisonner" } as L,
      steps: [
        { en: "LangGraph agent graphs", fr: "Graphes d'agents LangGraph" },
        { en: "MCP tools for Claude", fr: "Outils MCP pour Claude" },
        { en: "Human checkpoints", fr: "Points de validation humaine" },
      ] as L[],
      proof: {
        en: "Report platform in use at OCP Group",
        fr: "Plateforme de rapports utilisée au Groupe OCP",
      } as L,
    },
  ],
  output: {
    label: { en: "An answer you can check", fr: "Une réponse vérifiable" } as L,
    detail: {
      en: "Each claim points back to its source passage",
      fr: "Chaque affirmation renvoie à son passage source",
    } as L,
  },
  base: {
    domain: "cloud" as Domain,
    label: { en: "All of it runs on", fr: "Le tout tourne sur" } as L,
    items: ["Terraform", "Cloud Run", "Cloud SQL + pgvector", "Vertex AI", "Workload Identity"],
    proof: {
      en: "Provisioned as code for Seement",
      fr: "Provisionné en code pour Seement",
    } as L,
  },
};

/* ------------------------------------------------------------------ */
/* Flagship case study                                                 */
/* ------------------------------------------------------------------ */

export const flagship = {
  id: "ocp",
  hook: {
    en: "Documentary-analysis reports drafted by agents, with every claim traced back to a source.",
    fr: "Des rapports d'analyse documentaire rédigés par des agents, chaque affirmation reliée à sa source.",
  } as L,
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
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    id: "legal-rag",
    domain: "retrieval",
    client: { en: "Moroccan law firm", fr: "Cabinet d'avocats marocain" },
    role: {
      en: "Freelance, solo: data, search, cloud and MCP",
      fr: "Freelance, en solo : données, recherche, cloud et MCP",
    },
    period: { en: "November 2026", fr: "Novembre 2026" },
    status: "shipped",
    hook: {
      en: "Searching 1.8 million passages of Arabic case law by meaning, from a question asked in French.",
      fr: "Chercher par le sens dans 1,8 million de passages de jurisprudence arabe, à partir d'une question posée en français.",
    },
    title: {
      en: "An Arabic legal RAG served to Claude as a remote MCP connector",
      fr: "Un RAG juridique arabe servi à Claude comme connecteur MCP distant",
    },
    problem: {
      en: "The firm's library sat in about ten databases: legislation, Court of Cassation and appeal decisions, doctrine, and its own bank of past arguments, almost all in Arabic. Search ran through a local script on one computer that only matched exact words, and Arabic defeats exact matching: glued prefixes, optional vowel marks, variant letters.",
      fr: "La bibliothèque du cabinet était répartie dans une dizaine de bases : législation, arrêts de la Cour de cassation et des cours d'appel, doctrine, et sa propre banque d'argumentaires, presque tout en arabe. La recherche passait par un script local sur un seul poste, limité aux mots exacts, or l'arabe déjoue la correspondance exacte : préfixes collés, voyelles facultatives, variantes de lettres.",
    },
    approach: {
      en: "One reader per source, with deduplication of 191,000 decisions (an 80% word-overlap threshold, measured at 99% same case number), into Cloud SQL Postgres with pgvector. Vertex AI embeddings behind an HNSW index for search by meaning, plus Arabic-normalized full-text for exact words and case numbers. Six tools on a Cloud Run MCP server, including transactional updates from change files dropped in a bucket, dry-run by default.",
      fr: "Un lecteur par source, avec dédoublonnage de 191 000 décisions (seuil de 80 % de mots communs, mesuré à 99 % de même numéro de dossier), vers Cloud SQL Postgres avec pgvector. Embeddings Vertex AI derrière un index HNSW pour la recherche par le sens, plus un plein texte arabe normalisé pour les mots exacts et les numéros de dossier. Six outils sur un serveur MCP Cloud Run, dont des mises à jour transactionnelles à partir de fichiers déposés dans un bucket, en simulation par défaut.",
    },
    outcome: {
      en: "1,820,402 passages from 9 sources indexed, with searches by meaning in about 50ms in French or Arabic. The lawyer works only in Claude Desktop: searching, reading articles and updating the data all go through the connector. Embedding ran once as a parallel Cloud Run job (~120 USD), and I fixed a shared-memory crash in the HNSW build on Cloud SQL.",
      fr: "1 820 402 passages issus de 9 sources indexés, avec une recherche par le sens en 50 ms environ, en français ou en arabe. L'avocat travaille uniquement dans Claude Desktop : recherche, lecture d'articles et mise à jour des données passent par le connecteur. L'embedding a tourné une seule fois en job Cloud Run parallèle (~120 USD), et j'ai corrigé un crash de mémoire partagée lors de la construction de l'index HNSW sur Cloud SQL.",
    },
    stack: ["Python", "pgvector", "HNSW", "Cloud Run", "Vertex AI", "MCP", "Claude"],
    sections: [
      {
        title: { en: "Centralizing nine sources", fr: "Centraliser neuf sources" },
        points: [
          {
            en: "One reader per source turns the firm's records into passages of about 1,500 characters, each tagged with court, case number, date, law, article and chamber.",
            fr: "Un lecteur par source transforme les fiches du cabinet en passages d'environ 1 500 caractères, chacun annoté avec la juridiction, le numéro de dossier, la date, la loi, l'article et la chambre.",
          },
          {
            en: "Legislation: one article per passage, prefixed with the law's title. Packing several short articles together ranked the right article worse in tests, so I reverted to one per passage.",
            fr: "Législation : un article par passage, précédé du titre de la loi. Regrouper plusieurs articles courts classait moins bien le bon article lors des tests, je suis donc revenu à un article par passage.",
          },
          {
            en: "Court decisions (191,000 decisions, 1.27 million passages): exact copies are dropped, and two transcriptions count as one decision when they share at least 80% of their words. I measured that threshold first: 99% of the pairs it matched had the same case number.",
            fr: "Décisions de justice (191 000 décisions, 1,27 million de passages) : les copies exactes sont écartées, et deux transcriptions comptent comme une seule décision quand elles partagent au moins 80 % de leurs mots. J'ai d'abord mesuré ce seuil : 99 % des paires retenues avaient le même numéro de dossier.",
          },
          {
            en: "Doctrine (2,000 books): passages never cross a page boundary, so every quotation can be cited with its page.",
            fr: "Doctrine (2 000 ouvrages) : un passage ne franchit jamais une fin de page, ce qui permet de citer chaque extrait avec sa page.",
          },
          {
            en: "The firm's argument bank: party names are hidden, the file reference is kept, and citations of laws and decisions are stored as a citation graph.",
            fr: "La banque d'argumentaires du cabinet : les noms des parties sont masqués, la référence du dossier est conservée, et les citations de lois et de décisions forment un graphe de citations.",
          },
        ],
      },
      {
        title: { en: "Arabic-aware search, two ways", fr: "Une recherche adaptée à l'arabe, de deux façons" },
        points: [
          {
            en: "Search by meaning: Vertex AI gemini-embedding-001 vectors (768 dimensions) in Postgres with an HNSW index. A question in French finds Arabic passages, in about 50ms over 1.8 million vectors.",
            fr: "Recherche par le sens : vecteurs Vertex AI gemini-embedding-001 (768 dimensions) dans Postgres avec un index HNSW. Une question en français retrouve des passages arabes, en 50 ms environ sur 1,8 million de vecteurs.",
          },
          {
            en: "Exact words: Postgres full-text search on an Arabic-normalized column. Diacritics are stripped, letter variants folded and glued prefixes removed, while case numbers such as 2023/1/3/1543 stay one searchable token.",
            fr: "Mots exacts : recherche plein texte Postgres sur une colonne d'arabe normalisé. Les signes diacritiques sont retirés, les variantes de lettres unifiées et les préfixes collés supprimés, tandis que les numéros de dossier comme 2023/1/3/1543 restent un seul terme cherchable.",
          },
          {
            en: "Keyword results come with a count of matching documents per source, which gives the lawyer a coverage report.",
            fr: "Les résultats par mots-clés indiquent le nombre de documents trouvés par source, ce qui donne à l'avocat un état de couverture.",
          },
        ],
      },
      {
        title: { en: "Six tools Claude calls directly, over MCP", fr: "Six outils que Claude appelle directement, via MCP" },
        points: [
          {
            en: "search_documents searches by meaning, filtered by source and date. search_keywords finds exact words and phrases, with OR and exclusions, plus counts per source.",
            fr: "search_documents cherche par le sens, avec filtres par source et par date. search_keywords trouve des mots et expressions exacts, avec OU et exclusions, et des comptes par source.",
          },
          {
            en: "get_article returns one article of a law, named by number, alias or title words, with the authoritative version first. get_document_chunks returns the full text of a decision, a book passage or an argument.",
            fr: "get_article renvoie un article de loi, désignée par numéro, alias ou mots du titre, version de référence en premier. get_document_chunks renvoie le texte intégral d'une décision, d'un passage d'ouvrage ou d'un argumentaire.",
          },
          {
            en: "find_arguments lists the firm's past arguments that cite a given law or article.",
            fr: "find_arguments liste les argumentaires passés du cabinet qui citent une loi ou un article donné.",
          },
          {
            en: "apply_changes applies an update file the lawyer drops in a private bucket. By default it only reports what would change; with apply=true it writes the whole file in one transaction, or nothing. Unchanged documents keep their vectors, so nothing is paid twice.",
            fr: "apply_changes applique un fichier de mise à jour que l'avocat dépose dans un bucket privé. Par défaut il indique seulement ce qui changerait ; avec apply=true il écrit tout le fichier en une transaction, ou rien. Les documents inchangés gardent leurs vecteurs, rien n'est payé deux fois.",
          },
          {
            en: "I also rewrote the firm's two Claude skills, legal research and drafting, to call these tools. The legal method itself was kept unchanged.",
            fr: "J'ai aussi réécrit les deux skills Claude du cabinet, recherche juridique et rédaction, pour qu'ils appellent ces outils. La méthode juridique elle-même est restée inchangée.",
          },
        ],
      },
      {
        title: { en: "Cloud operations", fr: "Exploitation cloud" },
        points: [
          {
            en: "Embedding 1.8 million passages (about 790 million tokens, roughly 120 USD, paid once) ran as a Cloud Run job with 4 parallel tasks that resumes where it stopped and retries failures, so no computer had to stay on overnight.",
            fr: "La vectorisation de 1,8 million de passages (environ 790 millions de tokens, quelque 120 USD, payés une fois) a tourné en job Cloud Run à 4 tâches parallèles, qui reprend là où il s'est arrêté et relance les échecs : aucun ordinateur n'a dû rester allumé la nuit.",
          },
          {
            en: "The parallel HNSW index build crashed on Cloud SQL with \"could not resize shared memory segment\". I diagnosed it and built the index on a single worker with 6 GB of maintenance memory, in 56 minutes.",
            fr: "La construction parallèle de l'index HNSW plantait sur Cloud SQL (« could not resize shared memory segment »). J'ai diagnostiqué la cause et construit l'index sur un seul worker avec 6 Go de mémoire de maintenance, en 56 minutes.",
          },
          {
            en: "Security: the database is not open to the internet, secrets live in Secret Manager, runtime and developer service accounts are separate and the runtime has no key file, and the bucket is private. I also migrated the whole stack from us-east1 to europe-west1.",
            fr: "Sécurité : la base n'est pas exposée à internet, les secrets sont dans Secret Manager, les comptes de service d'exécution et de développement sont séparés et celui d'exécution n'a aucun fichier de clé, et le bucket est privé. J'ai aussi migré toute la stack de us-east1 vers europe-west1.",
          },
          {
            en: "The code stays small enough for one person to read in full, with 38 unit tests.",
            fr: "Le code reste assez court pour être lu en entier par une seule personne, avec 38 tests unitaires.",
          },
        ],
      },
    ],
  },
  {
    id: "ditoco",
    domain: "product",
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
    domain: "product",
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
    domain: "agents",
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
    domain: "product",
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
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

/**
 * Client testimonials, as the clients wrote them. The originals are in
 * French; the English versions are translations and are labelled as such.
 */
export const testimonials: {
  id: string;
  /** The review's own title, when the client gave one. */
  headline?: L;
  quote: L;
  source: L;
  project: L;
  date: L;
}[] = [
  {
    id: "legal-rag",
    quote: {
      en: "Ibrahim centralized our entire legal library, nearly two million passages of legislation, case law, doctrine and our own arguments, into a search engine hosted in the cloud. We query it in French or Arabic, and we update our databases, directly from our AI assistant, without installing anything. He turned our requirements as lawyers (the authoritative version of a text, the operative part of rulings, the confidentiality of the parties) into concrete solutions, while staying transparent about costs. Rigorous and highly professional work.",
      fr: "Ibrahim a centralisé toute notre bibliothèque juridique, soit près de deux millions de passages de législation, de jurisprudence, de doctrine et de nos argumentaires, dans un moteur de recherche hébergé dans le cloud. Nous l'interrogeons en français ou en arabe, et nous mettons nos bases à jour, directement depuis notre assistant IA, sans rien installer. Il a su traduire nos exigences de juristes (version qui fait foi, dispositif des arrêts, confidentialité des parties) en solutions concrètes, tout en restant transparent sur les coûts. Un travail rigoureux et très professionnel.",
    },
    source: { en: "A Moroccan law firm", fr: "Un cabinet d'avocats marocain" },
    project: {
      en: "Arabic legal search engine (RAG)",
      fr: "Moteur de recherche juridique arabe (RAG)",
    },
    date: { en: "November 2026", fr: "Novembre 2026" },
  },
  {
    id: "platform",
    headline: {
      en: "An exceptional developer, far beyond my expectations.",
      fr: "Un développeur d'exception, très largement au-dessus de mes attentes.",
    },
    quote: {
      en: "A project we had estimated at about two months of development was delivered in only three weeks of intensive work, with no compromise on quality. Communication was constant and very professional: regular progress updates, clear explanations of technical choices, problems raised immediately with solutions proposed before we had to ask. When external services had to be configured on my side, he prepared extremely detailed step-by-step procedures so I could do it without technical knowledge. I would work with Ibrahim again without the slightest hesitation.",
      fr: "Un projet que nous avions initialement estimé à environ deux mois de développement a finalement été réalisé en seulement trois semaines de travail intensif, sans compromis sur la qualité. La communication était constante et très professionnelle : points réguliers sur l'avancement, explications claires des choix techniques, remontée immédiate des difficultés éventuelles et propositions de solutions sans attendre qu'on lui demande. Lorsque certaines plateformes ou services externes devaient être configurés de mon côté, il prenait le temps de me préparer des procédures extrêmement détaillées, étape par étape. Je retravaillerai avec Ibrahim sans la moindre hésitation.",
    },
    source: { en: "Client review on Codeur.com", fr: "Avis client sur Codeur.com" },
    project: {
      en: "Platform development and architecture",
      fr: "Développement et architecture d'une plateforme",
    },
    date: { en: "September 2026", fr: "Septembre 2026" },
  },
  {
    id: "parking",
    headline: {
      en: "Excellent developer, skilled and very professional.",
      fr: "Excellent développeur, compétent et très professionnel !",
    },
    quote: {
      en: "Ibrahim fully understood our needs and delivered high-quality work, quickly and with a lot of autonomy. Very responsive, available and full of ideas, he anticipates problems and brings effective solutions. A smooth, professional collaboration from start to finish. I highly recommend Ibrahim and won't hesitate to hire him again for future projects.",
      fr: "Ibrahim a parfaitement compris nos besoins et a livré un travail de grande qualité, rapidement et avec beaucoup d'autonomie. Très réactif, disponible et force de proposition, il sait anticiper les problèmes et apporter des solutions efficaces. Une collaboration fluide et professionnelle du début à la fin. Je recommande vivement Ibrahim et je n'hésiterai pas à refaire appel à lui pour de futurs projets.",
    },
    source: { en: "Client review on Codeur.com", fr: "Avis client sur Codeur.com" },
    project: {
      en: "Parking-space booking website",
      fr: "Site e-commerce de réservation de places de parking",
    },
    date: { en: "September 2026", fr: "Septembre 2026" },
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
    github: "https://github.com/ibrahimGoumrane/website-rag-engine",
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
    id: "legal-rag",
    domain: "retrieval",
    org: { en: "Moroccan law firm", fr: "Cabinet d'avocats marocain" },
    title: { en: "RAG & Cloud Engineer", fr: "Ingénieur RAG & cloud" },
    kind: { en: "Freelance, solo", fr: "Freelance, en solo" },
    period: { en: "November 2026", fr: "Novembre 2026" },
    summary: {
      en: "Built a semantic search service over 1.8 million passages of Moroccan law (legislation, 191,000 court decisions, doctrine, the firm's past arguments), mostly in Arabic, on the firm's own Google Cloud. Postgres with pgvector and an HNSW index answers in about 50ms in French or Arabic, alongside Arabic-normalized keyword search. Exposed to Claude as a remote MCP connector with six tools, including all-or-nothing data updates the lawyer triggers from Claude Desktop.",
      fr: "Service de recherche sémantique sur 1,8 million de passages de droit marocain (législation, 191 000 décisions de justice, doctrine, argumentaires du cabinet), majoritairement en arabe, sur le Google Cloud du cabinet. Postgres avec pgvector et un index HNSW répond en 50 ms environ en français ou en arabe, avec une recherche par mots-clés sur texte arabe normalisé. Exposé à Claude comme connecteur MCP distant à six outils, dont des mises à jour tout-ou-rien que l'avocat déclenche depuis Claude Desktop.",
    },
    stack: ["Python", "PostgreSQL", "pgvector", "Cloud Run", "Vertex AI", "MCP"],
  },
  {
    id: "seement",
    domain: "cloud",
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
    domain: "agents",
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
    domain: "agents",
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
    domain: "product",
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
    domain: "product",
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
    domain: "agents",
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
    domain: "cloud",
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
    domain: "product",
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
    domain: "product",
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
    domain: "product",
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
    { href: "#experience", label: { en: "Experience", fr: "Parcours" } as L },
    { href: "#projects", label: { en: "Projects", fr: "Projets" } as L },
    { href: "#toolbox", label: { en: "Tools", fr: "Outils" } as L },
    { href: "#contact", label: { en: "Contact", fr: "Contact" } as L },
  ],
  skipToContent: { en: "Skip to main content", fr: "Aller au contenu principal" } as L,
  downloadCvLong: { en: "Download CV (PDF, French)", fr: "Télécharger le CV (PDF)" } as L,
  openMenu: { en: "Open navigation menu", fr: "Ouvrir le menu de navigation" } as L,
  closeMenu: { en: "Close navigation menu", fr: "Fermer le menu de navigation" } as L,
  toggleLanguage: { en: "Version française", fr: "English version" } as L,
  showMoreProjects: { en: "Show {n} more projects", fr: "Afficher {n} projets de plus" } as L,
  showFewerProjects: { en: "Show fewer projects", fr: "Afficher moins de projets" } as L,
  readDecisions: { en: "Why it was built this way", fr: "Pourquoi ces choix" } as L,
  featured: { en: "Featured project", fr: "Projet phare" } as L,
  translatedFromFrench: { en: "Translated from French", fr: "" } as L,
  readCaseStudy: { en: "Read the full case study", fr: "Lire l'étude de cas complète" } as L,
  backToWork: { en: "All work", fr: "Tous les travaux" } as L,
  home: { en: "Home", fr: "Accueil" } as L,
  otherWork: { en: "More work", fr: "Autres travaux" } as L,
  client: { en: "Client", fr: "Client" } as L,
  role: { en: "Role", fr: "Rôle" } as L,
  period: { en: "Period", fr: "Période" } as L,
  similarProject: {
    en: "Have a similar project? Email me.",
    fr: "Un projet similaire ? Écrivez-moi.",
  } as L,
  watchDemo: { en: "Watch demo", fr: "Voir la démo" } as L,
  closeVideo: { en: "Close video", fr: "Fermer la vidéo" } as L,
  viewOnGithub: { en: "View on GitHub", fr: "Voir sur GitHub" } as L,
  viewOnKaggle: { en: "View on Kaggle", fr: "Voir sur Kaggle" } as L,
  theProblem: { en: "Problem", fr: "Problème" } as L,
  theApproach: { en: "Approach", fr: "Approche" } as L,
  theOutcome: { en: "Outcome", fr: "Résultat" } as L,
  architecture: { en: "Pipeline", fr: "Pipeline" } as L,
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
    work: { en: "Selected work", fr: "Travaux sélectionnés" } as L,
    workLede: {
      en: "A graduation project now in production, and five client engagements.",
      fr: "Un projet de fin d'études aujourd'hui en production, et cinq missions clients.",
    } as L,
    projects: { en: "Side projects", fr: "Projets personnels" } as L,
    projectsLede: {
      en: "Personal and academic work. The first five have video demos.",
      fr: "Travaux personnels et académiques. Les cinq premiers ont une démo vidéo.",
    } as L,
    experience: { en: "Experience", fr: "Parcours" } as L,
    experienceLede: {
      en: "Some roles overlap: freelance work runs alongside employment.",
      fr: "Certains rôles se chevauchent : le freelance accompagne les périodes salariées.",
    } as L,
    testimonials: { en: "What clients say", fr: "Ce qu'en disent mes clients" } as L,
    testimonialsLede: {
      en: "In their own words: a direct client and two reviews from Codeur.com.",
      fr: "Dans leurs propres mots : un client direct et deux avis Codeur.com.",
    } as L,
    toolbox: { en: "Tools and training", fr: "Outils et formation" } as L,
    toolboxLede: {
      en: "Only tools I have used on real projects.",
      fr: "Uniquement des outils utilisés sur de vrais projets.",
    } as L,
    education: { en: "Education", fr: "Formation" } as L,
  },
  footerRights: { en: "All rights reserved.", fr: "Tous droits réservés." } as L,
  builtWith: {
    en: "Built with Next.js and Tailwind CSS.",
    fr: "Construit avec Next.js et Tailwind CSS.",
  } as L,
};

/* ------------------------------------------------------------------ */
/* Search engines                                                      */
/* ------------------------------------------------------------------ */

export const seo = {
  homeTitle: {
    en: "Ibrahim Goumrane | Freelance AI engineer: RAG, AI agents, Google Cloud",
    fr: "Ibrahim Goumrane | Ingénieur IA freelance : RAG, agents IA, Google Cloud",
  } as L,
  homeDescription: {
    en: "Freelance AI engineer in Casablanca, Morocco. I build RAG search over large document collections (including Arabic), LangGraph and MCP agents, and the Google Cloud infrastructure that runs them. Available for freelance and full-time work.",
    fr: "Ingénieur IA freelance à Casablanca, Maroc. Je construis des moteurs de recherche RAG sur de grands fonds documentaires (y compris en arabe), des agents LangGraph et MCP, et l'infrastructure Google Cloud qui les fait tourner. Disponible en freelance et en CDI.",
  } as L,
  jobTitle: {
    en: "Freelance AI engineer (RAG, AI agents, Google Cloud)",
    fr: "Ingénieur IA freelance (RAG, agents IA, Google Cloud)",
  } as L,
  serviceName: {
    en: "Ibrahim Goumrane, freelance AI engineering",
    fr: "Ibrahim Goumrane, ingénierie IA freelance",
  } as L,
  services: [
    { en: "RAG and semantic search development", fr: "Développement de RAG et de recherche sémantique" },
    { en: "AI agent development (LangGraph, MCP)", fr: "Développement d'agents IA (LangGraph, MCP)" },
    { en: "Google Cloud infrastructure for AI (Terraform)", fr: "Infrastructure Google Cloud pour l'IA (Terraform)" },
    { en: "Arabic and multilingual document search", fr: "Recherche documentaire en arabe et multilingue" },
  ] as L[],
  knowsAbout: [
    "Retrieval-augmented generation",
    "Semantic search",
    "AI agents",
    "LangGraph",
    "Model Context Protocol",
    "Claude",
    "Vector databases",
    "pgvector",
    "Milvus",
    "Google Cloud Platform",
    "Vertex AI",
    "Terraform",
    "Arabic natural language processing",
    "FastAPI",
    "Python",
  ],
};

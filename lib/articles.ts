/**
 * Long-form technical articles. Each one is bilingual and gets its own page
 * at /articles/<slug>/ and /fr/articles/<slug>/.
 */
import type { Domain, L } from "./content";

export type Block =
  | { type: "p"; text: L }
  | { type: "list"; items: L[] }
  | { type: "code"; text: string }
  | { type: "table"; head: L[]; rows: L[][] };

export interface Article {
  slug: string;
  domain: Domain;
  /** ISO date, used in structured data. */
  published: string;
  date: L;
  readingTime: L;
  title: L;
  description: L;
  intro: L;
  sections: { heading: L; blocks: Block[] }[];
  /** Case study this article expands on. */
  caseSlug?: string;
  keywords: string[];
}

const same = (text: string): L => ({ en: text, fr: text });

export const articles: Article[] = [
  {
    slug: "arabic-legal-rag",
    domain: "retrieval",
    published: "2026-11-10",
    date: { en: "November 10, 2026", fr: "10 novembre 2026" },
    readingTime: { en: "9 min read", fr: "9 min de lecture" },
    title: {
      en: "Building semantic search over 1.8 million passages of Arabic law",
      fr: "Construire une recherche sémantique sur 1,8 million de passages de droit arabe",
    },
    description: {
      en: "How I built a RAG search engine for a Moroccan law firm: 9 sources, Arabic text normalization, pgvector with HNSW, French-to-Arabic retrieval in 50 ms, and an MCP connector for Claude.",
      fr: "Comment j'ai construit un moteur RAG pour un cabinet d'avocats marocain : 9 sources, normalisation de l'arabe, pgvector avec HNSW, recherche du français vers l'arabe en 50 ms et un connecteur MCP pour Claude.",
    },
    intro: {
      en: "A Moroccan law firm asked me to replace a search script that ran on one computer and only matched exact words. Its library is mostly Arabic: legislation, Court of Cassation and appeal decisions, doctrine, and its own bank of past arguments. The lawyers wanted to ask questions in French or Arabic, find passages by meaning, and keep everything up to date without anyone running a script. This is how I built it, and the decisions I measured instead of guessing.",
      fr: "Un cabinet d'avocats marocain m'a demandé de remplacer un script de recherche qui tournait sur un seul ordinateur et ne trouvait que les mots exacts. Sa bibliothèque est surtout en arabe : législation, arrêts de la Cour de cassation et des cours d'appel, doctrine, et sa propre banque d'argumentaires. Les avocats voulaient poser leurs questions en français ou en arabe, trouver des passages par le sens, et tout garder à jour sans que personne n'ait à lancer de script. Voici comment je l'ai construit, et les choix que j'ai mesurés plutôt que devinés.",
    },
    sections: [
      {
        heading: { en: "Why exact-word search fails on Arabic", fr: "Pourquoi la recherche par mots exacts échoue en arabe" },
        blocks: [
          {
            type: "p",
            text: {
              en: "Arabic writing defeats naive keyword matching in three ways. Short words such as \"and\", \"by\", \"for\" and the article \"the\" are glued to the front of the next word, so the same noun appears under many spellings. Vowel marks are optional and used inconsistently between sources. Several letters have variant forms (the different shapes of alef, for instance) that writers swap freely. A lawyer searching for one spelling silently misses every passage written with another.",
              fr: "L'écriture arabe met en échec la recherche par mots-clés naïve de trois façons. Les mots courts comme « et », « par », « pour » et l'article « le » sont collés au mot suivant, si bien qu'un même nom apparaît sous de nombreuses graphies. Les voyelles sont facultatives et utilisées de façon irrégulière d'une source à l'autre. Plusieurs lettres ont des variantes (les différentes formes de l'alif, par exemple) que les rédacteurs interchangent librement. Un avocat qui cherche une graphie manque sans le savoir tous les passages écrits avec une autre.",
            },
          },
          {
            type: "p",
            text: {
              en: "On top of that, the firm thinks in French and its sources are in Arabic. Search had to work across languages, not just across spellings.",
              fr: "En plus, le cabinet raisonne en français alors que ses sources sont en arabe. La recherche devait fonctionner d'une langue à l'autre, pas seulement d'une graphie à l'autre.",
            },
          },
        ],
      },
      {
        heading: { en: "The architecture", fr: "L'architecture" },
        blocks: [
          {
            type: "p",
            text: {
              en: "Everything runs in the firm's own Google Cloud account. Nine source databases are read, cleaned, deduplicated and split into passages, then stored in one Postgres database with pgvector. The lawyers never see any of it: they talk to Claude Desktop, which calls a small MCP server on Cloud Run.",
              fr: "Tout tourne dans le compte Google Cloud du cabinet. Neuf bases sources sont lues, nettoyées, dédoublonnées et découpées en passages, puis stockées dans une seule base Postgres avec pgvector. Les avocats n'en voient rien : ils parlent à Claude Desktop, qui appelle un petit serveur MCP sur Cloud Run.",
            },
          },
          {
            type: "code",
            text: `9 source databases ──► centralization ──► Cloud SQL (Postgres + pgvector)
                         one reader per       1.82 M passages
                         source, cleaning,    768-dim vectors + HNSW index
                         dedup, chunking      + Arabic full-text column
                                                    ▲
Lawyer ⇄ Claude Desktop ⇄ MCP server (Cloud Run, bearer token)
                               │
                               └─ change files dropped in a Cloud Storage bucket`,
          },
        ],
      },
      {
        heading: { en: "One reader per source, and passages that make sense", fr: "Un lecteur par source, et des passages qui ont du sens" },
        blocks: [
          {
            type: "p",
            text: {
              en: "Each of the nine sources has its own reader that turns the firm's records into passages of about 1,500 characters. Every passage carries the metadata a lawyer filters on: court, case number, date, law, article and chamber. The interesting part is that each kind of document needs a different idea of what a passage is.",
              fr: "Chacune des neuf sources a son propre lecteur, qui transforme les fiches du cabinet en passages d'environ 1 500 caractères. Chaque passage porte les métadonnées sur lesquelles un avocat filtre : juridiction, numéro de dossier, date, loi, article et chambre. Le plus intéressant, c'est que chaque type de document demande une idée différente de ce qu'est un passage.",
            },
          },
          {
            type: "list",
            items: [
              {
                en: "Legislation: one article per passage, prefixed with the title of the law. I first packed several short articles into one passage to save vectors. Tests on real questions showed the right article then ranked lower, so I went back to one article per passage.",
                fr: "Législation : un article par passage, précédé du titre de la loi. J'ai d'abord regroupé plusieurs articles courts dans un passage pour économiser des vecteurs. Les tests sur de vraies questions ont montré que le bon article était alors moins bien classé, je suis donc revenu à un article par passage.",
              },
              {
                en: "Doctrine (2,000 books): a passage never crosses a page boundary, so every quotation can be cited with its page number.",
                fr: "Doctrine (2 000 ouvrages) : un passage ne franchit jamais une fin de page, ce qui permet de citer chaque extrait avec son numéro de page.",
              },
              {
                en: "The firm's own arguments: party names are hidden, the file reference is kept, and every law or decision an argument cites is stored as a citation graph. That later lets the assistant answer \"which of our past arguments relied on this article?\"",
                fr: "Les argumentaires du cabinet : les noms des parties sont masqués, la référence du dossier est conservée, et chaque loi ou décision citée est stockée dans un graphe de citations. L'assistant peut ainsi répondre à « lesquels de nos anciens argumentaires s'appuyaient sur cet article ? »",
              },
            ],
          },
        ],
      },
      {
        heading: { en: "Deduplicating 191,000 court decisions", fr: "Dédoublonner 191 000 décisions de justice" },
        blocks: [
          {
            type: "p",
            text: {
              en: "The same judgment often appears in several sources, transcribed slightly differently each time. Exact copies are easy to drop. Near copies are not: if the threshold is too strict, duplicates pollute the results; too loose, and two different decisions on the same subject get merged.",
              fr: "Un même arrêt apparaît souvent dans plusieurs sources, transcrit chaque fois un peu différemment. Les copies exactes sont faciles à écarter. Les quasi-copies, non : avec un seuil trop strict, les doublons polluent les résultats ; trop lâche, deux décisions différentes sur le même sujet sont fusionnées.",
            },
          },
          {
            type: "p",
            text: {
              en: "I treat two transcriptions as the same decision when they share at least 80% of their words over the full text. Before using that number, I checked it: among the pairs it matched, 99% had the same case number. The case number is not reliable enough to deduplicate on by itself, but it is a good way to verify a threshold. The result was 191,000 decisions and 1.27 million passages.",
              fr: "Je considère que deux transcriptions sont la même décision quand elles partagent au moins 80 % de leurs mots sur le texte entier. Avant d'utiliser ce chiffre, je l'ai vérifié : parmi les paires retenues, 99 % avaient le même numéro de dossier. Le numéro de dossier n'est pas assez fiable pour dédoublonner à lui seul, mais c'est un bon moyen de valider un seuil. Résultat : 191 000 décisions et 1,27 million de passages.",
            },
          },
        ],
      },
      {
        heading: { en: "Two kinds of search, side by side", fr: "Deux recherches, côte à côte" },
        blocks: [
          {
            type: "p",
            text: {
              en: "Lawyers need both: \"find me rulings about this situation\" and \"find every decision that mentions this exact phrase or case number\". So the database holds two indexes over the same passages.",
              fr: "Les avocats ont besoin des deux : « trouve-moi des arrêts sur cette situation » et « trouve toutes les décisions qui contiennent exactement cette expression ou ce numéro de dossier ». La base contient donc deux index sur les mêmes passages.",
            },
          },
          {
            type: "list",
            items: [
              {
                en: "By meaning: each passage is embedded with Vertex AI gemini-embedding-001 (768 dimensions) and searched by cosine distance through an HNSW index in pgvector. Because the model is multilingual, a question in French lands on Arabic passages. A search takes about 50 ms over 1.8 million vectors, with filters on source and date.",
                fr: "Par le sens : chaque passage est vectorisé avec Vertex AI gemini-embedding-001 (768 dimensions) et cherché par distance cosinus via un index HNSW dans pgvector. Comme le modèle est multilingue, une question en français tombe sur des passages arabes. Une recherche prend environ 50 ms sur 1,8 million de vecteurs, avec des filtres par source et par date.",
              },
              {
                en: "By exact words: Postgres full-text search on a separate, normalized copy of the text. Vowel marks are stripped, letter variants are folded to one form, and glued prefixes are removed. Case numbers such as 2023/1/3/1543 are kept as a single token so they stay searchable.",
                fr: "Par mots exacts : la recherche plein texte de Postgres sur une copie normalisée du texte. Les voyelles sont retirées, les variantes de lettres ramenées à une seule forme et les préfixes collés supprimés. Les numéros de dossier comme 2023/1/3/1543 restent un seul terme, donc cherchables.",
              },
            ],
          },
          {
            type: "p",
            text: {
              en: "Keyword results also return how many documents matched in each source. A lawyer reads that as a coverage report: \"12 decisions, 3 doctrine passages, nothing in our own arguments\" is useful before any passage is opened.",
              fr: "Les résultats par mots-clés indiquent aussi combien de documents correspondent dans chaque source. Un avocat le lit comme un état de couverture : « 12 décisions, 3 passages de doctrine, rien dans nos argumentaires » est utile avant même d'ouvrir un passage.",
            },
          },
        ],
      },
      {
        heading: { en: "Six tools Claude calls directly", fr: "Six outils que Claude appelle directement" },
        blocks: [
          {
            type: "p",
            text: {
              en: "Instead of building a web interface, I exposed the search as a remote MCP connector: a stateless HTTP server on Cloud Run, protected by a bearer token. Claude chooses the tool, reads the results and writes the answer with citations.",
              fr: "Plutôt que de construire une interface web, j'ai exposé la recherche comme un connecteur MCP distant : un serveur HTTP sans état sur Cloud Run, protégé par un jeton. Claude choisit l'outil, lit les résultats et rédige la réponse avec ses sources.",
            },
          },
          {
            type: "table",
            head: [{ en: "Tool", fr: "Outil" }, { en: "What it does", fr: "Ce qu'il fait" }],
            rows: [
              [same("search_documents"), { en: "Search by meaning, filtered by source and date, with pagination", fr: "Recherche par le sens, filtrée par source et date, avec pagination" }],
              [same("search_keywords"), { en: "Exact words and phrases with OR and exclusions, plus counts per source", fr: "Mots et expressions exacts avec OU et exclusions, et comptes par source" }],
              [same("get_article"), { en: "One article of a law, named by number, alias or title words; the authoritative version first", fr: "Un article de loi, désignée par numéro, alias ou mots du titre ; la version qui fait foi en premier" }],
              [same("get_document_chunks"), { en: "The full text of a decision, a book passage or an argument", fr: "Le texte intégral d'une décision, d'un passage d'ouvrage ou d'un argumentaire" }],
              [same("find_arguments"), { en: "The firm's past arguments that cite a given law or article", fr: "Les argumentaires du cabinet qui citent une loi ou un article donné" }],
              [same("apply_changes"), { en: "Applies an update file (see below)", fr: "Applique un fichier de mise à jour (voir plus bas)" }],
            ],
          },
          {
            type: "p",
            text: {
              en: "The firm already had two Claude skills, one for its legal research method and one for drafting. I rewrote them to call these tools instead of the old script, and left the legal method itself untouched. The lawyers kept their way of working; only the plumbing changed.",
              fr: "Le cabinet avait déjà deux skills Claude, un pour sa méthode de recherche juridique et un pour la rédaction. Je les ai réécrits pour appeler ces outils au lieu de l'ancien script, sans toucher à la méthode juridique elle-même. Les avocats ont gardé leur façon de travailler ; seule la tuyauterie a changé.",
            },
          },
        ],
      },
      {
        heading: { en: "Updates without touching a server", fr: "Des mises à jour sans toucher à un serveur" },
        blocks: [
          {
            type: "p",
            text: {
              en: "New decisions and new arguments keep arriving, and nobody at the firm is technical. The assistant writes a change file in the firm's own database columns, the lawyer drops it in a private Cloud Storage bucket, and Claude calls apply_changes.",
              fr: "De nouvelles décisions et de nouveaux argumentaires arrivent régulièrement, et personne au cabinet n'est technicien. L'assistant rédige un fichier de modifications dans les colonnes de la base du cabinet, l'avocat le dépose dans un bucket Cloud Storage privé, et Claude appelle apply_changes.",
            },
          },
          {
            type: "list",
            items: [
              { en: "By default it only reports what would be added, changed or deleted.", fr: "Par défaut, il indique seulement ce qui serait ajouté, modifié ou supprimé." },
              { en: "With apply=true it writes the whole file in one transaction: everything is applied, or nothing is.", fr: "Avec apply=true, il écrit tout le fichier en une seule transaction : tout est appliqué, ou rien." },
              { en: "Documents are rebuilt by the same code as the initial load, so an updated record is identical to a freshly loaded one.", fr: "Les documents sont reconstruits par le même code que le chargement initial : un enregistrement mis à jour est identique à un enregistrement chargé de zéro." },
              { en: "Unchanged documents keep their vectors, so no embedding is paid for twice.", fr: "Les documents inchangés gardent leurs vecteurs : aucune vectorisation n'est payée deux fois." },
            ],
          },
        ],
      },
      {
        heading: { en: "What went wrong in production, and the fix", fr: "Ce qui a coincé en production, et la solution" },
        blocks: [
          {
            type: "p",
            text: {
              en: "Embedding 1.8 million passages is about 790 million tokens, roughly 120 USD, paid once. I ran it as a Cloud Run job with four parallel tasks that resumes where it stopped and retries failed tasks, so no laptop had to stay on overnight.",
              fr: "Vectoriser 1,8 million de passages représente environ 790 millions de tokens, soit à peu près 120 USD, payés une seule fois. Je l'ai lancé en job Cloud Run à quatre tâches parallèles, qui reprend là où il s'est arrêté et relance les tâches en échec : aucun ordinateur n'a dû rester allumé la nuit.",
            },
          },
          {
            type: "p",
            text: {
              en: "The HNSW index was harder. Postgres builds it in parallel by default, and on Cloud SQL that build crashed with \"could not resize shared memory segment\": the parallel build needed more shared memory than the managed instance allows. The fix was to build on a single worker with 6 GB of maintenance memory. The build took 56 minutes.",
              fr: "L'index HNSW a été plus délicat. Postgres le construit en parallèle par défaut, et sur Cloud SQL cette construction plantait avec « could not resize shared memory segment » : la construction parallèle demandait plus de mémoire partagée que l'instance managée n'en autorise. La solution a été de construire l'index sur un seul worker avec 6 Go de mémoire de maintenance. La construction a pris 56 minutes.",
            },
          },
          {
            type: "code",
            text: `-- simplified: table and column names shortened
SET max_parallel_maintenance_workers = 0;
SET maintenance_work_mem = '6GB';
CREATE INDEX ON passages USING hnsw (embedding vector_cosine_ops);`,
          },
          {
            type: "p",
            text: {
              en: "On security: the database is not reachable from the internet, secrets live in Secret Manager, the runtime and developer service accounts are separate, the runtime account has no key file, and the bucket is private. I also migrated the whole stack from us-east1 to europe-west1.",
              fr: "Côté sécurité : la base n'est pas accessible depuis internet, les secrets sont dans Secret Manager, les comptes de service d'exécution et de développement sont séparés, celui d'exécution n'a aucun fichier de clé, et le bucket est privé. J'ai aussi migré toute la stack de us-east1 vers europe-west1.",
            },
          },
        ],
      },
      {
        heading: { en: "Results", fr: "Résultats" },
        blocks: [
          {
            type: "list",
            items: [
              { en: "1,820,402 passages from 9 sources, deduplicated, embedded and indexed.", fr: "1 820 402 passages issus de 9 sources, dédoublonnés, vectorisés et indexés." },
              { en: "Searches by meaning in about 50 ms, asked in French or Arabic.", fr: "Des recherches par le sens en 50 ms environ, posées en français ou en arabe." },
              { en: "The lawyers work only in Claude Desktop: searching, reading articles and updating the data all go through the connector.", fr: "Les avocats travaillent uniquement dans Claude Desktop : recherche, lecture d'articles et mise à jour des données passent par le connecteur." },
              { en: "A codebase small enough for one person to read in full, with 38 unit tests.", fr: "Un code assez court pour être lu en entier par une seule personne, avec 38 tests unitaires." },
            ],
          },
        ],
      },
      {
        heading: { en: "What I would tell anyone building legal RAG", fr: "Ce que je dirais à quiconque construit un RAG juridique" },
        blocks: [
          {
            type: "list",
            items: [
              {
                en: "Measure your defaults. Chunk size, the deduplication threshold and article packing each changed after a test on real questions. None of them would have been right by guessing.",
                fr: "Mesurez vos réglages par défaut. La taille des passages, le seuil de dédoublonnage et le regroupement d'articles ont chacun changé après un test sur de vraies questions. Aucun n'aurait été juste au jugé.",
              },
              {
                en: "Keep exact search next to semantic search. Lawyers cite case numbers and fixed phrases; vectors alone will not find them reliably.",
                fr: "Gardez la recherche exacte à côté de la recherche sémantique. Les avocats citent des numéros de dossier et des expressions figées ; les vecteurs seuls ne les retrouvent pas de façon fiable.",
              },
              {
                en: "Let the passage boundary follow the document: an article for a law, a page for a book. Citations depend on it.",
                fr: "Laissez la limite du passage suivre le document : un article pour une loi, une page pour un ouvrage. Les citations en dépendent.",
              },
              {
                en: "Design for the person who is not technical. Writes that default to a report and apply all-or-nothing are what make it safe to hand the controls to an assistant.",
                fr: "Concevez pour la personne qui n'est pas technicienne. Des écritures qui produisent d'abord un rapport et s'appliquent en tout-ou-rien, c'est ce qui permet de confier les commandes à un assistant sans risque.",
              },
            ],
          },
          {
            type: "p",
            text: {
              en: "If you have a large document collection, in Arabic or not, and the current search misses what people need, I'd be glad to look at it.",
              fr: "Si vous avez un grand fonds documentaire, en arabe ou non, et que la recherche actuelle rate ce dont vos équipes ont besoin, je serais ravi d'y jeter un œil.",
            },
          },
        ],
      },
    ],
    caseSlug: "legal-rag",
    keywords: [
      "RAG",
      "Arabic NLP",
      "legal search",
      "semantic search",
      "pgvector",
      "HNSW",
      "Vertex AI",
      "Model Context Protocol",
      "Claude",
      "Cloud Run",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

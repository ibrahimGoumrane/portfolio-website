# Ibrahim Goumrane — Profile Reference

> Paste this at the start of a new conversation to give full context for CV/cover letter/application work.

## Personal Info
- **Name:** Ibrahim Goumrane
- **Location:** Casablanca, Morocco
- **Phone:** +212 776 209 303
- **Email:** ibrahimgoumrane01@gmail.com
- **Website/Portfolio:** www.ibrahimgoumrane.dev
- **Languages:** English (fluent), French (fluent), Arabic (native/fluent)

## Education
- **Engineering Degree (Master's level) — Artificial Intelligence & Software Engineering**
- ENSAM Casablanca — École Nationale Supérieure d'Arts et Métiers
- 2021 – 2026, graduated/defended PFE **22 June 2026**
- **Ranked 1st in class (major de promotion / valedictorian), certified**
- PFE (graduation project) completed at OCP Solutions (see below)

## CV Formatting Preferences
- **Experience and Projects sections: 3–4 line paragraphs, NOT bullet-point lists.** This applies to every future CV.
- Never invent or add a skill/tool/framework without asking first and getting explicit confirmation.
- Never remove a skill without asking about real experience with it first.
- Don't compile LaTeX to PDF unless explicitly asked — deliver `.tex` source only by default (recent preference).
- Photo placeholder file extension: `main.jpeg` (not `.png`).
- Never claim a specific years-of-experience number; let dates speak for themselves.
- When a job posting has a real gap (seniority, missing tool), flag it honestly in the reply rather than silently omitting or overclaiming.

---

## Experience (chronological, most recent first)

**Seement (client: Mike) — Cloud/AI Infrastructure Engineer (Freelance, ongoing)** — *2026, in progress*
GitLab: gitlab.com/seement/agentic-outlook/fca-agentic-outlook. Provisioning the full GCP resource stack for an agentic RAG platform via **Terraform**: **Cloud Run**, **Vertex AI RAG Engine**, **Cloud SQL**, and storage buckets — authenticated through **Workload Identity Federation (WIF)** rather than service-account JSON keys, wired into **GitLab CI**. Also owns part of the RAG strategy: designed a **hybrid RAG approach** combining GCP's Vertex AI RAG Engine (strong semantic search over large corpora, but limited native filtering/metadata search) with **PostgreSQL + pgvector** for filtered/metadata-aware queries, combining both for higher retrieval accuracy. Learned to reach a private Cloud SQL instance through a proxy using **service-account impersonation** rather than granting direct account access. Client engagement is active and ongoing; client reports satisfaction with progress.

**Client: Pierron Olivier (local craft brewery) — HubSpot/Lemlist B2B & Events Prospecting System (Freelance, solo)** — *July 2026*
Won and delivered a freelance project (via job-platform bid, <500€ budget) to build a supervised prospecting system for a local craft brewery, combining **HubSpot CRM** and **Lemlist** across two dedicated pipelines: B2B/distribution (wholesalers, distributors, GMS/retail, HORECA, gift/tourism shops) and events (regional fairs/festivals, night markets, Christmas markets). Built a **Python orchestrator** to run automated, cross-source web research and fetch/reduce prospect and event information — extracting name, city, website, email, phone, contact and source — then deduplicating and feeding a commercial scoring layer (A+/A/B/C/D by potential volume, seasonality, and contact reliability) before hand-off into HubSpot's pipelines and custom fields. Also covered Lemlist sequence setup with reply-based auto-stop, and email-deliverability best practices (SPF/DKIM/DMARC, progressive volume ramp-up, invalid-email cleanup). Solo engagement, end-to-end from scoping the client's brief through configuration and hand-off.

**DITOCO — Fast-Delivery Logistics Platform (Freelance)** — *2026, 36-day two-phase engagement*
Designed and built a 2-hour delivery test bench for a pre-launch logistics startup, orchestrating **Shopify**, **Odoo**, and **Onfleet** around a real-time eligibility engine and an event-sourced journal. Negotiated a two-phase technical proposal (36 days, €2,650) from a 15+ page client spec, identifying and pricing gaps between initial scope and actual requirements. Built a real-time eligibility engine (<300ms p95) deciding live checkout delivery availability, with atomic stock reservation and weighted hourly capacity tracking, on an **event-sourced architecture** (append-only event journal) ensuring full traceability and consistency under load, with periodic cross-system reconciliation. Integrated 3 production third-party APIs — **Shopify Admin/GraphQL** (OAuth client-credentials flow), **Odoo XML-RPC**, and **Onfleet REST/webhooks** — including scope management, auth, and HMAC signature verification. Managed the client relationship iteratively end-to-end: from requirements negotiation, through proactively surfacing spec inconsistencies and proposing reasoned fixes, to transparent scope-change negotiation. Set up deployment infrastructure (VPS, Git CI/CD, secrets management) and a markdown-based project-tracking system for persistent AI-agent context.

*Reference bullets (for CV sections that use bullet format):*
- Negotiated a two-phase technical proposal (36 days, €2,650) from a 15+ page spec, identifying and pricing scope gaps
- Built a real-time eligibility engine (<300ms p95) for live checkout delivery decisions, with atomic stock reservation and weighted capacity tracking
- Designed an event-sourced architecture (append-only event journal) with full traceability and periodic cross-system reconciliation
- Integrated 3 production third-party APIs (Shopify Admin/GraphQL OAuth client-credentials, Odoo XML-RPC, Onfleet REST/webhooks) incl. HMAC signature verification
- Managed client relationship iteratively: proactive spec-inconsistency detection, reasoned fixes, transparent scope negotiation
- Set up VPS deployment, Git CI/CD, secrets management, and markdown-based project tracking for persistent AI-agent context

**Maroc Réforme — B2B Salvage Vehicle Auction Platform (Freelance, in development — NOT yet shipped)** — *2026*
Full rebuild of a platform for the Moroccan insurance market connecting three organisation types around the salvage-vehicle lifecycle: expert assessors record technical condition/damage, insurers validate and release the dossier, and approved scrap dealers bid at auction. Implemented a four-tier role system (user/manager levels per organisation) with a strict validation workflow and an immutable dossier state once an auction opens. Core engineering challenge was a custom **auction engine**: per-bidder ceilings locked at 30% above each bidder's own opening bid, time-windowed minimum increments that change in the final hour, restricted bid visibility (bidders see only whether they currently lead, not competing amounts) — all enforced server-side with row-level locking, plus idempotent scheduled auction closure for a shared-hosting deployment target. Delivered the technical specification, data model, API contract, design system and implementation, phased across two releases so the client could validate the core workflow before funding the full build. Caught and resolved a real conflict between the client's ceiling rule and increment rule during spec-writing, before any code was written. Stack: **Next.js** (static export), **Spring Boot** / **PostgreSQL**, **WebSocket** with polling fallback.

> ⚠️ Status note: as of last update this is specification + repo, **not a shipped/production system** — use "in development" phrasing on the CV/portfolio until it actually ships. Also confirm with the client whether "Maroc Réforme" can be named publicly; if not, use "a Moroccan insurance platform" instead (the portfolio-paragraph phrasing works unchanged with the name swapped out).

**OCP Solutions — PFE / Agentic AI Engineer** — *March 2026 – June 2026 (PFE, defended 22 June 2026)*
Graduation project (PFE) at OCP Solutions, a Groupe OCP subsidiary. Designed a multi-agent orchestration platform automating documentary-analysis report generation via a multimodal RAG architecture, deployed on OCP's servers and used internally by OCP Group. Built the orchestration engine with **LangGraph**, exposed via **FastAPI**, with a **React** interface for real-time supervision. The RAG pipeline used **fact/question/atomic-fact extraction** indexed in **Milvus**, bi-encoder retrieval, **Qwen Embedding 4B**, and reranking with **BAAI/bge-reranker-v2-m3**. Included **WebSocket** real-time updates, error-recovery mechanisms, and human validation checkpoints for reliability. Academic supervisor: Pr. Samih Lazaiz; company supervisor: M. Mohammed Zouai.

**Top Negoce — Automation Engineer (Internship)** — *February 2026 (1 month)*
Automated invoice (facture) extraction and analysis using a **locally-deployed n8n** instance. Built a board-facing dashboard to help leadership make decisions and flag entities engaged in fraudulent activity.

**Formafast Consulting — Automation & Systems Engineer** — *September 2025 – June 2026*
Broadest and most technically demanding experience, working alongside Mohamed Romdane across software development, automation, data engineering, and infrastructure. Refactored 10+ client websites and deployed them across both shared and dedicated hosting. Configured Postfix/webmail and SMTP relay servers so an internal tool could send automated client emails reliably. Built **FormaFastScraper**, a contact-enrichment and data-intelligence platform (FastAPI, React, Selenium, MySQL) able to resolve full identity/contact data from just a name — including advanced anti-bot evasion (migrated Selenium → nodriver), human-like delays, automatic pause-on-captcha-detection for human intervention, **spaCy NER** entity extraction (names, phones, org names), and **geocoding** for location data. Separately built a **daily marketplace web-scraping pipeline using Apache Spark**, cleaning/reorganizing data before loading into a remote MySQL instance. Also handled Linux server administration, SSL/TLS and SMTP configuration, incident resolution, and weathered a ransomware incident on a test database (reinforced backup/monitoring discipline).

**FINANCIANA — Technical Lead (Freelance, with Mohamed Romdane)** — *June – September 2025*
Financial analysis platform (**Next.js** + **Laravel**) letting companies analyze financial health, study metrics by instrument/axis/theme, benchmark against sector peers, and auto-generate detailed Word reports with expert improvement suggestions. Hardest technical challenges: building an actual **formula interpreter** per financial instrument, **currency detection and conversion** to a unified currency, and **document text/value extraction** from balance sheets (bilan). Acted as Technical Lead: client-facing, translating client vision into working features while coordinating the dev team.

**EHC → Recruite — Technical Lead (PFA internship → Freelance)** — *June – November 2025*
Full-stack recruitment platform ("Recruite") streamlining applications, assessments, and interviews. Led technical vision, coordinated the dev team, and acted as the client-team bridge. Features: unified recruitment workflow, automated candidate assessments, role-based access (Candidate/Recruiter/Admin), real-time analytics/KPIs, and candidate services (CV building, interview prep, career coaching). Tech stack: **React TS**, **Spring Boot** (JWT, Quartz Scheduler, WebSockets), **MySQL**. Deployed on a VPS with **Nginx**, SSL via **Certbot**, domain managed via **OVH**.

**KanBanPro (Numeric Way) — Software Development Intern** — *June – August 2024*
Built a Jira-like project management platform with Kanban boards. Implemented real-time collaborative workflow and chat functionality via **WebSockets**. Developed a multi-user management system per project. Tech: **Express.js**, **React**, Material UI, Tailwind CSS.

---

## Projects (personal/academic, not employer-attributed)

**AutoGradeAI — Automated Exam Grading** (presented at ENSAM Casablanca's AGIOS day, built with a classmate)
Pipeline combining **OCR** (Tesseract) for scanned exam extraction, **LLM-based generation** (OpenAI API) for model answers, and **semantic-similarity scoring** (Sentence Transformers) for automated grading. A concrete, working RAG-style/prompt-engineering system.

**FastDev — AI-Powered Full Stack Development Platform** (Oct – Dec 2025, with ENSAM Casablanca)
Platform generating, testing, and deploying full-stack projects from natural-language descriptions using **Google Gemini AI** and the **Model Context Protocol (MCP)**. Backend: **Spring Boot 3.5.6 / Java 21** with **Spring Security (JWT)**, **WebSocket**, **Quartz Scheduler**, MySQL. Frontend: **React/TypeScript** with a live code editor (CodeMirror). Two-stage (test/production) execution pipeline with manual validation. Integrated **Keycloak** for identity/access management. Containerized with Docker/Docker Compose; observability via **Loki**/**Promtail**.

**Microservices E-commerce Platform** (personal project)
Database-per-service microservices architecture (Auth, Order, Product, Payment, File services), each with its own PostgreSQL, behind an **API Gateway** with **JWT** auth, serving a Next.js client. Event-driven communication via **RabbitMQ** and **Kafka** (e.g. Order publishes `OrderCreated`). Deployed on **Kubernetes** (migrated from Docker Compose). Full observability: **Prometheus/Grafana** (metrics) + **ELK** (Elasticsearch, Logstash, Kibana) for centralized logging.

**Web Sales Analytics Pipeline — Jumia.ma Scraper**
Fully automated daily pipeline orchestrated with **Apache Airflow**: scrapes 1,000+ products (BeautifulSoup), cleans/validates data, loads into **PostgreSQL**. Real-time **Streamlit** dashboard (price tracking, discount monitoring, category/rating trends). Containerized with Docker; CI/CD via GitHub Actions with a **pytest** test suite.

**Rehabilitation Management App** (personal project, inspired by own scoliosis rehab experience)
CMS for rehabilitation agencies: patient self-management of exercise routines, tailored programs by condition/age, initial assessments for personalization. Frontend: **React + TypeScript**. Backend: **Express** + **MySQL** via **Prisma ORM**. UI: Material UI, Flowbite, Tailwind CSS. Forms/validation: React Hook Form + Yup. Routing: React Router DOM.

**ArtiShare — Article Sharing Platform (Medium clone)** (built with a classmate, 2 weeks, Backend Technologies course)
Frontend: **Next.js/TypeScript**. Backend: **Laravel** (MVC, REST APIs, auth, article management).

**GCP Infrastructure Provisioning Tool — Terraform** (in progress)
Building an infrastructure-as-code provisioning tool on **Google Cloud Platform** using **Terraform**.

**CV/Job Matching Tool** (minimal/early project)
Frontend in **Angular** connected to a **FastAPI** backend for CV analysis and job matching. Described by Ibrahim as minimal/not highly polished.

**Facial-Recognition Student Surveillance System** (academic project)
Django backend with a facial-recognition module for identifying students in class; frontend in Next.js/TypeScript.

**Early projects using Prisma, Supabase, React Native/Expo, Stripe** (confirmed real hands-on use, specific project names not yet detailed — ask if needed for a specific CV)

---

## Confirmed Skills (verified through direct confirmation in conversation)

### Languages & Frameworks
- **Python** (strong): FastAPI, scripting, automation, data engineering
- **Java**: Spring Boot, Spring Security (incl. JWT), Spring Batch, Hibernate, Maven, Quartz Scheduler
- **JavaScript/TypeScript**: Node.js/Express.js (real backend work — KanBanPro, Rehabilitation app), React, Next.js, some Angular
- **PHP**: Laravel (MVC, REST APIs)
- **Django**: confirmed hands-on (facial-recognition surveillance system backend)
- **SQL**: PostgreSQL, MySQL

### Third-Party API Integrations & Client Engagement
- Production integrations: **Shopify Admin API/GraphQL** (OAuth client-credentials flow), **Odoo XML-RPC**, **Onfleet REST/webhooks** (incl. HMAC signature verification) — confirmed real use (Ditoco)
- Client-facing scoping/negotiation: technical proposal writing, spec-gap analysis and pricing, iterative scope-change negotiation — confirmed real use (Ditoco, FINANCIANA, Recruite)
- Markdown-based project tracking for persistent AI-agent context across a client engagement — confirmed real use (Ditoco)
- **CRM/sales automation**: HubSpot (pipelines, custom fields, dashboards), Lemlist (email sequencing, reply-based auto-stop), commercial lead scoring, email-deliverability practices (SPF/DKIM/DMARC) — confirmed real use (Pierron Olivier / brewery prospecting project)

### AI / LLM / Agentic
- LangChain, LangGraph (multi-agent orchestration, real production use)
- OpenAI API, Google Gemini API (real use)
- RAG architecture (multimodal, fact/atomic-fact extraction, bi-encoder + reranking — BAAI/bge-reranker-v2-m3, Qwen Embedding 4B)
- Milvus, FAISS, **pgvector** (vector databases)
- **Hybrid RAG design**: combining a managed semantic engine (Vertex AI RAG Engine) with pgvector for metadata/filtered search
- **Google Vertex AI RAG Engine** (confirmed real use — Seement/fca-agentic-outlook)
- Prompt engineering
- AI coding agents — **confirmed daily/extensive use of**: GitHub Copilot, Cursor, Claude Code, Codex, Gemini CLI, Zed, Antigravity
- **No confirmed distinct hands-on Claude/Anthropic-specific project** (only general LLM API-level familiarity) — do not claim "Claude AI expertise" specifically
- **No confirmed Manus AI experience**

### Data Engineering
- Apache Airflow (real, confirmed hands-on DAG building)
- Apache Spark (real, confirmed — Formafast marketplace scraping pipeline)
- n8n (real, confirmed — Top Negoce)
- Web scraping: Selenium, nodriver, BeautifulSoup, Playwright; anti-bot evasion techniques (captcha detection/pause, human-like delays)
- NER: spaCy (entity extraction — names, phones, orgs)
- Geocoding
- ETL pipeline design, data validation/cleaning

### Databases
- PostgreSQL, MySQL (strong)
- MongoDB (NoSQL)
- Prisma ORM, Supabase (BaaS) — confirmed real use
- Milvus, FAISS, pgvector (vector)
- **Event-sourced architecture** (append-only event journals, cross-system reconciliation) — confirmed real use (Ditoco)
- **Multi-tenant platform design** with role-based validation workflows and immutable state transitions — confirmed real use (Maroc Réforme, in development)
- **Custom real-time auction/bidding engine logic** (time-windowed rules, server-side row-level locking, idempotent scheduled jobs) — confirmed real use (Maroc Réforme, in development)

### DevOps / Infrastructure
- Docker, Docker Compose, Kubernetes
- Terraform (IaC) — real, currently building a GCP provisioning tool with it
- CI/CD: GitHub Actions, **GitLab CI** (confirmed real)
- Git
- Linux administration: AlmaLinux, Ubuntu Server, Debian; Webmin/Virtualmin; SSL/TLS, SMTP (Postfix), SFTP
- Monitoring/Observability: **Grafana, Prometheus, Loki, Promtail** (all real, confirmed) + **ELK** (Elasticsearch, Logstash, Kibana)
- Keycloak (identity/access management — confirmed real)
- Google Cloud Platform (GCP) — confirmed real use (incl. Cassandra/Cloudera/Solr as GCP-managed services; also Cloud Run, Cloud SQL, GCS buckets, Vertex AI RAG Engine, IAM Workload Identity Federation — Seement project)
- **Workload Identity Federation (WIF)** for CI/CD auth to GCP (in place of service-account JSON keys), via GitLab CI — confirmed real use
- **Cloud SQL Auth Proxy with service-account impersonation** for private DB access — confirmed real use
- **No confirmed AWS experience**
- **No confirmed Azure experience**

### Security
- Spring Security, JWT, OAuth2, Keycloak
- OWASP-aware secure coding practices (general awareness, not certified expertise)

### Testing & Quality
- pytest (automated testing, real CI/CD integration)
- Code review experience — confirmed real mentoring/guiding of other developers (not just being reviewed)

### Statistics / ML Foundations
- **DataCamp certifications** in Data Science and Data Analyst tracks (~2 years old, regression, classification, statistical inference) — candidate describes this as rusty/dated, not currently sharp. **Always frame as certified coursework, not applied hands-on expertise.**
- General ML coursework: classification, regression, image processing (coursework-level, not applied production ML)

### Methodology
- Agile / Scrum (confirmed real experience)

---

## Confirmed GAPS — do NOT claim these without re-confirming first
- **Go / Golang** — no experience
- **Symfony, Zend Expressive, TWIG, AngularJS (classic)** — no experience (has Laravel instead for PHP; has modern Angular minimally)
- **Oracle, SQL Server** — studied academically ~long ago, rusty, not recent hands-on
- **Jenkins** — no experience (has GitHub Actions + GitLab CI instead)
- **RPA tools (UiPath, Automation Anywhere)** — no experience
- **DBT** — no experience (has Airflow)
- **Ansible** — no experience (has Terraform)
- **ArgoCD** — status unclear/unconfirmed in detail (was mid-clarification when conversation moved on — reconfirm before using)
- **C++, Rust** — no experience
- **ContainerD, Packer** — no confirmed experience
- **Groovy** — no confirmed experience (only asked combined with JEE; only JEE via Spring confirmed)
- **Apigee, IBM API Connect** — no experience (has built own API Gateways, not these specific products)
- **Zabbix, Centreon** — no experience
- **Tempo, Mimir** (LGTM stack components) — no experience (has Loki, Grafana, Prometheus/Mimir-adjacent only)
- Formal team-management / people-leadership track record at a multi-year scale — "Lead"/"Tech Lead" titles held reflect real technical leadership on small teams/freelance projects, not multi-year engineering-org management
- Total calendar experience is modest (~1–1.5 years accounting for overlapping concurrent roles, PFE completed June 2026) — never assert a specific "X years of experience" number

---

## Notable Achievements
- **Ranked 1st (valedictorian) in graduating class**, ENSAM Casablanca, certified
- PFE built and deployed a production RAG/agentic system used internally by OCP Group (large industrial group)
- Presented AutoGradeAI publicly at ENSAM's AGIOS day
- Multiple freelance Technical Lead roles with direct client-facing responsibility (FINANCIANA, Recruite/EHC)

---

## Portfolio Strategy (job-hunt positioning)

**Target: full-time or freelance roles in AI, RAG, and multi-agent systems.** Portfolio should lead with one clear specialization, not a flat list of equally-weighted skills — a portfolio (unlike a CV) is usually the first click from someone already curious, and it needs to answer "what would I hire this person to do?" fast.

**Spine: AI / RAG / agentic engineering.** This is the strongest, most differentiated, most senior-feeling work on record (OCP PFE, Seement/fca-agentic-outlook), matches the stated job-search target, and is the hardest thread to fake — makes it the best door-opener. Do NOT lead the portfolio with the AI-coding-tools angle (Copilot/Cursor/Claude Code usage) — per Ibrahim's preference, that's left out of the portfolio entirely.

**Structure: 1 flagship case study + a supporting tier, not a grid of equal tiles.**
- **Flagship** (pick whichever is more publicly shareable — OCP may have confidentiality limits, Seement/GCP work may be more open): go deep — architecture diagram, the actual hard decision made (e.g. why hybrid RAG over a single approach, why WIF over a JSON-key service account), a metric or outcome if available.
- **Supporting tier (3–4 shorter case studies proving range without diluting the spine):**
  - Ditoco — event-sourcing, real-time systems, client negotiation
  - Maroc Réforme — architecture/spec judgment (only once actually shipped — currently in development, see status note above)
  - Pierron Olivier (HubSpot/Lemlist) — shipping end-to-end for a non-technical client
  - Frame each in one sentence as "a different kind of hard problem solved," not "another tool known."
- **Skip or minimize:** early academic projects (KanBanPro, ArtiShare, CV/Job Matching Tool) — fine as CV history, too weak to spend portfolio space on.

---

*Last compiled: during ongoing job-application support conversation. Update this file if new experience/projects/skills are confirmed.*

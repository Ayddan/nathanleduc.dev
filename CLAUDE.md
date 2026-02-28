# CLAUDE.md - Project Guidelines

## Project Overview
Portfolio personnel de Nathan Leduc, développeur web fullstack.
Site construit avec Next.js 15 (Pages Router) + React 18.

## Tech Stack
- **Framework**: Next.js 15.5.12 (Pages Router)
- **Frontend**: React 18.3.1, GSAP (animations), react-lottie-player (Lottie animations, import dynamique SSR)
- **Styles**: SASS/SCSS compilé en CSS (pas de CSS modules)
- **Backend**: Next.js API Routes, Nodemailer (contact), API Notion (projets)
- **Linting**: ESLint 8 + eslint-config-next

## Project Structure
```
pages/
├── index.js              # Page principale (single page)
├── _app.js               # Entry point (CSS global)
├── admin/index.js        # Page admin (placeholder)
└── api/
    ├── contact.js        # Email via Nodemailer/Gmail
    └── project-infos.js  # Proxy vers API Notion
src/
├── components/           # React components (Hero, TechStack, Timeline, ContactForm)
├── assets/               # Images JPG, SVGs (light/dark variants), Lottie JSON
└── styles/
    ├── scss/             # Source SCSS (partials: _header, _hero, _techStack, etc.)
    └── css/              # CSS compilé (ne pas éditer directement)
```

## Key Conventions
- **Langue du site**: Français
- **Thème**: Support light/dark avec toggle Lottie, classe CSS sur `div.App`
- **Lottie imports**: Toujours utiliser `dynamic(() => import('react-lottie-player'), { ssr: false })` car la lib accède au DOM au chargement
- **Images/SVGs**: Import statique, accès via `.src` (ex: `image.src`)
- **Variables d'env**: Côté serveur uniquement (pas de préfixe), définies dans `.env` (gitignored):
  - `NOTION_DATABASE_ID`, `NOTION_TOKEN` (API Notion)
  - `SMTP_MAIL`, `SMTP_PASSWORD` (Nodemailer)

## Build & Scripts
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run sass` - Compile SCSS → CSS en watch mode

## Important Notes
- Le fichier `style.css` est généré depuis SCSS. Toujours modifier les fichiers `.scss` ET le `.css` compilé, ou utiliser `npm run sass`.
- Le SVG de la Timeline (`Timeline.js`) contient des animations GSAP avec des IDs (`circle-1`, `path-1`, `logo-1`, etc.). Respecter le pattern pour ajouter de nouvelles étapes.
- Les projets sont chargés dynamiquement depuis l'API Notion (base filtrée par status "public").
- Ne te cite pas dans les commit
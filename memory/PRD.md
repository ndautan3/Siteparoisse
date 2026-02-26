# PRD - Paroisse Notre Dame d'Autan

## Problème Original
Site web paroissial pour Notre Dame d'Autan (Castanet-Tolosan / Saint-Orens). Application full-stack React + FastAPI + MongoDB.

## Architecture
- **Frontend:** React, TailwindCSS, Shadcn/UI, Lucide icons
- **Backend:** FastAPI, MongoDB
- **Intégrations:** Resend (formulaire contact), Google Maps

## Ce qui est implémenté

### Fonctionnalités Core
- Site paroissial complet avec navigation multi-pages
- Formulaire de contact fonctionnel (Resend)
- Recherche site complète
- Responsive mobile

### Améliorations Visuelles (Feb 2026)
- Hero 40vh sur mobile (sous-pages), 80vh accueil
- Animations fade-in au scroll (IntersectionObserver)
- Icônes sociales repositionnées en haut à droite sur mobile

### SEO (Feb 2026)
- Langue FR (`lang="fr"`)
- Titres et meta descriptions dynamiques (hook custom)
- Alt images descriptifs en français
- `sitemap.xml` et `robots.txt`

## Backlog Priorisé

### P1
- **Page "Agenda"** — Page centralisée des événements paroissiaux

### P2
- Refactoring de `ContentPage.js` (composant trop volumineux)
- Amélioration du système d'indexation de recherche

## Notes Techniques
- Ne PAS utiliser `react-helmet-async` (cause écran blanc)
- Hook custom `useDocumentTitle.js` utilisé pour SEO
- `SocialIcons.js` : positionnement responsive (top-right mobile, bottom-right desktop)

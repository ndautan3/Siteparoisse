# PRD - Paroisse Notre Dame d'Autan

## Problème original
Site web paroissial pour Notre Dame d'Autan (Castanet-Tolosan, Saint-Orens et environs). Application full-stack React + FastAPI + MongoDB.

## Architecture
- **Frontend**: React 19, Tailwind CSS, Craco, react-router-dom v7
- **Backend**: FastAPI, MongoDB
- **Déploiement**: Railway avec Nixpacks
- **État**: React Context (DarkMode)

## Ce qui a été implémenté

### Sessions précédentes
- Fix déploiement Railway (ESLint CI=false)
- Refonte complète du CMS (AdminDashboard)
- Mode sombre site-wide (DarkModeContext + Tailwind class strategy)
- Bouton mode sombre en position flottante
- Bouton mode sombre en rose poudré
- Lazy loading images + Code splitting (P3)
- Fix z-index carte Leaflet
- Éditeur de liens personnalisé dans le CMS
- Renommage "Méditation Chrétienne" → "Prière Chrétienne"

### Session actuelle (Mars 2026)
- **Fix aperçu CMS** : Le modal d'aperçu (actualités et événements) utilise maintenant le même conteneur et traitement (`processRichText`) que la page publique (ActualitesPage). Layout identique : image avec gradient, badge catégorie, titre blanc, prose styling, bouton "Fermer"
- **Repositionnement bouton "Lien"** : Le bouton est maintenant à droite du bouton "Effacer le formatage" (même groupe dans la toolbar Quill)
- **Infobulles toolbar Quill** : Tous les boutons affichent leur fonction au survol (Gras, Italique, Souligné, Effacer le formatage, Insérer un lien, Liste numérotée, Liste à puces, Style de titre)

## Backlog priorisé

### P0 - Amélioration UX page d'accueil
Réorganiser le contenu, section "Événements à venir" dédiée, améliorer les CTA

### P1 - Calendrier interactif
Remplacer la liste statique d'événements par un calendrier dynamique et filtrable

### P2 - Lecteur de direct (streaming)
Intégrer un lecteur vidéo pour les messes/événements en direct

### P3 - Optimisation performances (FAIT)
- Lazy loading images
- Code splitting React.lazy
- Reste : optimisation images côté serveur (compression, WebP)

## Fichiers clés
- `frontend/src/App.js` - Routing + code splitting
- `frontend/src/pages/AdminDashboard.js` - CMS avec éditeur Quill, aperçu, tooltips
- `frontend/src/pages/ActualitesPage.js` - Page publique des actualités (référence pour l'aperçu)
- `frontend/src/lib/richText.js` - processRichText (sanitisation + target="_blank")
- `frontend/src/index.css` - Styles globaux, prose, Quill, z-index Leaflet
- `frontend/src/components/FloatingButtons.js` - Boutons flottants
- `frontend/src/components/DarkModeToggle.js` - Toggle mode sombre
- `frontend/src/components/LazyImage.js` - Composant image lazy
- `frontend/src/contexts/DarkModeContext.js` - Context mode sombre
- `frontend/tailwind.config.js` - Config Tailwind (gold = #d0ada6)

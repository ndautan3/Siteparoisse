# Plan du Site - Paroisse Notre Dame d'Autan

## 📱 Pages Principales

### 🏠 **Page d'Accueil** `/`
- Hero avec image de l'église
- Carrousel d'actualités (6 actualités)
- Présentation des 5 piliers

### 🔔 **Horaires des Messes** `/horaires-messes`
- Hero avec image du clocher
- Liste des horaires par jour et lieu
- Informations pratiques

### 📞 **Secrétariat** `/secretariat`
- Coordonnées de contact
- Horaires d'ouverture
- Formulaire de contact

### 🆕 **Je suis nouveau** `/je-suis-nouveau`
- Hero avec image d'accueil
- 4 vignettes : Horaires, Sacrements, Activités, Contact
- Présentation de la communauté

---

## 🏛️ PILIER 1 : Notre Dame d'Autan `/notre-dame-autan`

### Vignettes principales (7)
1. **Secrétariat** → `/secretariat`
2. **Équipe Pastorale** → `/equipe-pastorale`
   - Pages membres individuels : `/equipe-pastorale/:memberId`
3. **Vie Économique** → `/vie-economique`
   - Section "Soutenir" : Denier de l'Église, Legs et donations
   - Section "Comprendre" : Conseil finances, Commission travaux
4. **Nos Clochers** → `/nos-clochers`
   - 16 églises avec pages détails : `/nos-clochers/:clocherId`
5. **Services Transverses** → `/services-transverses`
   - Communication, Accueil, Secrétariat
6. **Liturgie et Musique** → `/liturgie-musique`
7. **Service Funérailles** → `/funerailles`

---

## 👨‍👩‍👧‍👦 PILIER 2 : Familles & Jeunesse `/familles-jeunesse`

### Vignettes principales (5)
1. **Éveil à la Foi** (3-7 ans) → `/eveil-foi`
2. **Catéchisme** (CE2-6ème) → `/catechisme`
3. **Aumônerie** (Collège-Lycée) → `/aumonerie`
4. **Mouvements de Jeunesse** → `/mouvements`
   - Scouts, MEJ, Patronage
5. **Servants d'autel & Vocations** → `/servants-vocations`

---

## ✝️ PILIER 3 : Vie Spirituelle & Sacrements `/vie-spirituelle`

### Page hub
**Demander un Sacrement** → `/demander-sacrement`

### 6 Sacrements (pages détaillées)
1. **Baptême** → `/sacrements/bapteme`
2. **Première Communion** → `/sacrements/premiere-communion`
3. **Confirmation** → `/sacrements/confirmation`
4. **Réconciliation** → `/sacrements/reconciliation`
5. **Mariage** → `/sacrements/mariage`
6. **Sacrement des Malades** → `/sacrements/sacrement-malades`

### Autres services
- **Liturgie et Musique** → `/liturgie-musique`
- **Service Funérailles** → `/funerailles`

---

## 📖 PILIER 4 : Grandir dans la Foi `/grandir-foi`

### Vignettes principales (4)
1. **Alpha & Catéchuménat** → `/alpha-catechumenat`
   - Parcours Alpha, RCIA pour adultes
2. **Groupes de Partage** → `/groupes-partage`
   - Groupes bibliques, fraternités
3. **Méditation & Prière** → `/meditation`
   - Adoration, chapelet, lectio divina
4. **Ressources Spirituelles** → `/ressources`
   - Livres, podcasts, formations

---

## ❤️ PILIER 5 : Solidarité & Écoute `/solidarite`

### Vignettes principales (3)
1. **Service d'Écoute** → `/service-ecoute`
2. **Visite des Malades** → `/visite-malades`
3. **Entraide Paroissiale** → `/entraide`
   - Secours Catholique, collectes, etc.

---

## 🔐 Espace Administration

### Pages admin (sans header/footer)
- **Connexion Admin** → `/admin/login`
  - Username: `admin` / Password: `password`
- **Dashboard Admin** → `/admin/dashboard`
  - Gestion des actualités (CRUD)
  - Gestion des horaires de messes (CRUD)

---

## 📊 Statistiques du Site

- **Total pages** : ~50 pages
- **Pages piliers** : 5 pages principales
- **Pages avec vignettes** : 12 pages
- **Pages de détail** : ~30 pages (sacrements, clochers, équipe)
- **Pages admin** : 2 pages

---

## 🎨 Caractéristiques Visuelles

### Couleurs principales
- Rose poudré (gold) : `#d0ada6`
- Blanc cassé (paper) : `#F9F9F7`
- Bleu ardoise (slate) : `#475569`

### Design patterns
- Hero sections avec images (h-[55vh])
- Vignettes avec alternance blanc/rose
- Icônes Lucide React
- Citations bibliques en bas de certaines pages
- Carrousel d'actualités (page d'accueil)

### Responsive
- Mobile : 2 vignettes par ligne
- Tablet : 2-3 vignettes par ligne
- Desktop : 3-5 vignettes par ligne

---

## 🔗 Navigation

### Menu principal (Header)
1. Notre Dame d'Autan
2. Familles & Jeunesse
3. Vie Spirituelle & Sacrements
4. Grandir dans la Foi
5. Solidarité & Écoute

### Boutons flottants
- Recherche
- Scroll to top
- (Autres actions possibles)

### Footer
- Liens rapides vers sections principales
- Coordonnées paroisse
- Copyright

---

## 📝 Base de données MongoDB

### Collections
- **news** : Actualités (6 documents)
- **mass_times** : Horaires des messes
- **users** : Comptes admin

### APIs Backend
- `GET /api/news` - Liste actualités
- `POST /api/news` - Créer actualité
- `PUT /api/news/:id` - Modifier actualité
- `DELETE /api/news/:id` - Supprimer actualité
- `GET /api/mass-times` - Liste horaires messes
- `POST /api/mass-times` - Créer horaire
- `PUT /api/mass-times/:id` - Modifier horaire
- `DELETE /api/mass-times/:id` - Supprimer horaire
- `POST /api/login` - Authentification admin

---

**Version:** Juillet 2025  
**Technologie:** React + FastAPI + MongoDB  
**Statut:** En production

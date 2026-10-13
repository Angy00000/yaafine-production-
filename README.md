# Yaafiné Production — site vitrine

Site du label audiovisuel Yaafiné Production (Keur Massar, Dakar) : couverture événementielle, réalisation vidéo, photographie.

Stack : Next.js 16, TypeScript, Tailwind CSS 4. Site 100 % statique, hébergeable gratuitement sur Vercel.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
```

Vérifications : `npm run lint`, `npm run typecheck`, `npm run build`.

## Modifier le contenu (sans toucher au design)

Tout est dans `src/content/` :

| Fichier | Contenu |
| --- | --- |
| `site.ts` | Nom, logo, image d'accueil, téléphones, e-mail, réseaux sociaux, domaine |
| `services.ts` | Les 3 prestations et leurs photos |
| `portfolio.ts` | Vidéos YouTube et photos des réalisations |
| `about.ts` | Présentation, biographie et photo du fondateur |

Les images vont dans `public/media/` (photos en JPG/WebP, 1600–2000 px de large maximum).

- **Logo** : déposer `public/logo.svg` (ou `.png`), puis `logo: "/logo.svg"` dans `site.ts`. Remplacer aussi `src/app/icon.svg` (favicon provisoire).
- **Vidéo** : dans `portfolio.ts`, mettre l'identifiant YouTube dans `youtubeId`, un vrai titre, et `demo: false`.
- Tant qu'un contenu manque, le site affiche un cadre « Exemple — à remplacer ».

## Formulaire de devis

Pas de serveur : le formulaire vérifie les champs, puis ouvre WhatsApp avec la demande déjà rédigée vers le numéro principal. Le visiteur appuie sur Envoyer dans WhatsApp. Aucun coût, aucune clé secrète.

## Déploiement (Vercel, gratuit)

1. vercel.com → Add New → Project → importer ce dépôt GitHub.
2. Laisser les réglages par défaut (Next.js détecté automatiquement) → Deploy.
3. Facultatif : variable `NEXT_PUBLIC_SITE_URL` = le domaine final (ex. `https://yaafine.sn`), puis Settings → Domains.

Chaque `git push` sur `main` redéploie automatiquement.

## Structure

```
src/app/            pages (accueil, /realisations), SEO (sitemap, robots, favicon)
src/components/     sections et éléments réutilisables
src/content/        contenus modifiables
public/media/       images
```

# GDG Pointe-Noire

Site officiel du Google Developer Group Pointe-Noire — la communauté tech de Pointe-Noire.

🔗 [gdg.leloeduk.com](https://gdg.leloeduk.com)

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- Bilingue FR/EN avec détection automatique de la langue du navigateur
- Déployé sur [Cloudflare Workers](https://workers.cloudflare.com/) via [vinext](https://github.com/cloudflare/vinext)

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build & déploiement

```bash
npm run build:vinext    # build pour Cloudflare Workers
npm run deploy:vinext   # déploie sur gdg.leloeduk.com
```

## Structure

- `app/[lang]/` — pages et layout (routes `/fr` et `/en`)
- `components/` — composants React de la page d'accueil
- `data/team.js` — données de l'équipe organisatrice
- `data/i18n.js` — dictionnaires de traduction FR/EN
- `middleware.js` — détection de langue et redirection

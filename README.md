# symponia.io

Marketing site for the Symponia iOS app. Next.js (App Router), nine languages, deployed on Netlify.

```
app/                 pages: home, about, credits, legal, /shadow-work guide
components/          Landing, PageShell, legal page renderers
lib/locales/         landing-page copy per language
lib/legal/           legal + pricing copy per language
lib/content/         /shadow-work articles (English)
lib/seo.ts           canonical + hreflang helpers
public/              images, llms.txt, llms-full.txt, og.png
```

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

The old AI marketing dashboard was removed from this repo. It lives on in `symponia-marketing-v2`.

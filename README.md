# Avancés Campus — web

Web de [avancescampus.es](https://avancescampus.es): avancés, sobreavancés y tiendas cocina para caravana a medida, fabricados en Barcelona.

- `public/index.html`: la web (HTML estático, sin WordPress).
- `public/motor-3d/`: el motor del 3D (three.js + GSAP + Lenis desde CDN).
- `public/assets/`: modelo 3D de la caravana, logo y póster.

Para publicarla basta con subir el contenido de `public/` a la carpeta `public_html` del hosting.

## Cloudflare

Se despliega como Worker de archivos estáticos (`wrangler.jsonc`). Cada push a `main` publica la web si el repo está conectado en Cloudflare → Workers & Pages → Import a repository.

## AEO (que la encuentren ChatGPT, Perplexity, Claude y Gemini)

- Todo el texto está en el HTML: los bots de IA no ejecutan JavaScript y lo leen entero.
- `robots.txt` permite a todos los buscadores y asistentes de IA y declara `Content-Signal`.
- `sitemap.xml`, `llms.txt` y `index.md` (versión en Markdown).
- `src/worker.js`: si un agente pide `Accept: text/markdown`, recibe `index.md`.
- Datos estructurados: WebSite, WebPage, LocalBusiness con sus productos y FAQPage.

**Dominio:** está puesto `https://avancescampus.com/`. Si se usa otro, cambiarlo en `public/index.html`, `robots.txt`, `sitemap.xml` y `llms.txt`.

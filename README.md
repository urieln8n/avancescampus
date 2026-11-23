# Avancés Campus — web

Web de [avancescampus.es](https://avancescampus.es): avancés, sobreavancés y tiendas cocina para caravana a medida, fabricados en Barcelona.

- `index.html`: la web (HTML estático, sin WordPress).
- `motor-3d/`: el motor del 3D (three.js + GSAP + Lenis desde CDN).
- `assets/`: modelo 3D de la caravana, logo y póster.

Para publicarla basta con subir estos archivos a la carpeta `public_html` del hosting.

## Cloudflare

Se despliega como Worker de archivos estáticos (`wrangler.jsonc`). Cada push a `main` publica la web si el repo está conectado en Cloudflare → Workers & Pages → Import a repository.

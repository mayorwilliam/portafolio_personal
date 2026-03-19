# Lecciones Aprendidas

## Next.js

- `create-next-app` no acepta nombres de proyecto con mayúsculas (npm restriction). Workaround: crear en directorio temporal y copiar archivos.
- Para fonts self-hosted con `next/font`, las variables CSS deben referenciarse como `var(--font-inter)` en el CSS global, no como el nombre de fuente directo.
- `scroll-margin-top` en `section[id]` reemplaza la lógica JS manual de offset para smooth scroll.

## Diseño / UX

- El usuario prefiere cards con gradientes de color sobre cards con imágenes/placeholders para la sección de proyectos.
- Menos es más: una sección "Projects" unificada con tags es mejor que 3 secciones separadas (carousel + featured + work grid).
- Hover overlays para detalles > mostrar toda la info de golpe en cada card.
- Para proyectos profesionales sin screenshots: gradientes sobrios + badge de empresa funciona bien visualmente.

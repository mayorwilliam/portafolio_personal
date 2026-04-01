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

## Stitch MCP / Herramientas de diseño AI

- Stitch genera buenos mockups individuales pero tiene limitaciones al generar múltiples screens en paralelo — solo la primera suele funcionar bien.
- Usar herramientas AI de diseño para inspiración selectiva (una sección) es más efectivo que intentar reemplazar todo el diseño de golpe.

## Credibilidad en portafolios

- Logos de empresas reales como elemento visual principal transmiten más credibilidad que mockups generados por AI.
- Ordenar proyectos profesionales primero demuestra experiencia tangible — proyectos personales/en progreso van al final.
- Mockups AI son buen fallback para proyectos sin assets visuales, pero no deben dominar sobre logos reales.

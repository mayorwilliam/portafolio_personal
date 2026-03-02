# Historial del Proyecto — Portafolio Personal

## Índice

- [Fase 1: Setup inicial](#fase-1-setup-inicial)
- [Fase 2: Mejoras de prioridad alta](#fase-2-mejoras-de-prioridad-alta)
- [Fase 3: Mejoras de prioridad media](#fase-3-mejoras-de-prioridad-media)
- [Fase 4: Mejoras de prioridad baja](#fase-4-mejoras-de-prioridad-baja)
- [Fase 5: Rediseño visual — Warm Minimalism](#fase-5-rediseño-visual--warm-minimalism)

---

## Fase 1: Setup inicial

Proyecto base creado con Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion. Incluye:

- Páginas: Home, Projects (con filtros), Blog, detalle de proyecto y post
- Componentes: Navbar, Footer, Hero, Experience, Skills, Testimonials, Contact
- Datos servidos desde JSON estáticos en `src/data/`
- Docker + docker-compose listos para deploy
- ESLint + TypeScript strict habilitados

---

## Fase 2: Mejoras de prioridad alta

- **Página 404 personalizada** (`not-found.tsx`) con diseño consistente y navegación
- **sitemap.xml** generado dinámicamente con todas las rutas (estáticas + dinámicas)
- **robots.txt** permitiendo crawlers y apuntando al sitemap
- **Loading skeletons** en 4 rutas: `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`

---

## Fase 3: Mejoras de prioridad media

- **Error boundaries** (`error.tsx`) en root, `/projects` y `/blog` con botón retry
- **Vercel Analytics + Speed Insights** integrados en layout
- **Light/Dark mode toggle** con ThemeProvider, ThemeToggle en Navbar, script anti-FOUC
- **CSS light mode** con primary púrpura (`oklch(0.45 0.22 280)`), secondary/accent con tinte
- **20+ archivos migrados** de `border-white/X` a `border-border` y `prose-invert` a `dark:prose-invert`
- **Problema resuelto**: `border-white/10` era invisible en light mode → reemplazado por token semántico

---

## Fase 4: Mejoras de prioridad baja

- **Notion CMS** (`scripts/sync-notion.ts`): script standalone para sincronizar Notion → JSON
  - Soporta paginación, helpers tipados, documentación de schemas esperados
  - **Problema resuelto**: SDK v5 de Notion no compilaba en build de Next.js → se movió lógica al script (excluido de tsconfig)
- **Tests con Vitest** (25 tests, 3 archivos):
  - `data.test.ts` — sorting, filtering, slugs, featured, categories (18 tests)
  - `metadata.test.ts` — OpenGraph y Twitter cards (3 tests)
  - `TestimonialCard.test.tsx` — render de componente, iniciales vs avatar (4 tests)
  - **Problema resuelto**: `screen.getByAlt` no existe en Testing Library → corregido a `getByAltText`
- **PWA manifest** (`manifest.ts`) generado por Next.js con iconos placeholder
- **Skills de Claude** (`commit-espanol`, `update-docs`) copiados desde ayuda247bot

---

## Fase 5: Rediseño visual — Warm Minimalism

Rediseño inspirado en [eduardbodak.com](https://eduardbodak.com): minimalismo cálido con alto contraste.

- **Paleta light**: fondo crema `#f9f4eb`, foreground negro puro `#000` (antes charcoal/teal)
- **Paleta dark**: negro cálido hue 60 (antes navy frío hue 265)
- **Hero H1**: uppercase + `tracking-[-0.06em]` + `clamp(3rem,10vw,8rem)` — impacto visual tipo editorial
- **Footer negro sólido**: `bg-foreground text-background` con links monospace uppercase (antes mismo fondo que body)
- **Section labels**: pills negros monospace (`bg-foreground text-background rounded-full`) en 8 archivos
- **Navbar**: pill container con borde, item activo con fondo negro sólido
- **Eliminados**: orbes de fondo, dot grid, noise texture, `@keyframes grain`, `@keyframes pulse-glow`
- **Simplificados**: progress bars de skills → lista simple, hover de cards más sutil
- **MCP Playwright**: configurado en `.mcp.json` para verificación visual con screenshots
- **Problema resuelto**: primer intento sin referencia visual fue insuficiente → se usó Playwright MCP para extraer estilos exactos de Bodak (colores, font sizes, letter-spacing, text-transform)

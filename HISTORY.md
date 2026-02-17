# Historial del Proyecto — Portafolio Personal

## Índice

- [Fase 1: Setup inicial](#fase-1-setup-inicial)
- [Fase 2: Mejoras de prioridad alta](#fase-2-mejoras-de-prioridad-alta)
- [Fase 3: Mejoras de prioridad media](#fase-3-mejoras-de-prioridad-media)
- [Fase 4: Mejoras de prioridad baja](#fase-4-mejoras-de-prioridad-baja)

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

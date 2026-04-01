# Historial de Cambios

## Índice

1. [Sesión 1 — Migración Next.js + Rediseño Projects](#sesión-1)
2. [Sesión 2 — Grid Projects + Logos + CV + Mockups Stitch](#sesión-2)

---

## Sesión 1

**Fecha**: 2026-03-19
**Branch**: `react-version`

### Migración HTML estático → Next.js

- Scaffolding Next.js 16 con App Router, TypeScript, src dir
- Imágenes movidas de `assets/images/` → `public/images/`
- CSS global copiado y adaptado (variables de font apuntan a next/font)
- JS vanilla convertido a 3 custom hooks: `useScrollReveal`, `useNavbarScroll`, `useActiveSection`
- 9 componentes React: Navbar, Hero, Showcase, About, Projects, Contact, Footer, ScrollReveal, MdxComponents
- Blog MDX funcional con listado + post individual + generateStaticParams
- SEO: metadata, Open Graph, sitemap.ts, robots.ts
- Archivos estáticos viejos eliminados (index.html, css/, js/, assets/)

### Rediseño sección Projects

- Inicialmente se crearon 3 secciones separadas (carousel, featured grid, work grid)
- Usuario pidió unificar en una sola sección "Projects" con tags
- Primera iteración: cards con imagen/placeholder — usuario no le gustó la presentación
- **Versión final**: Cards con gradientes de color (estilo original), tags como pills con backdrop blur, hover overlay con descripción + links
- Featured card ocupa 2 columnas para dar protagonismo
- Professional cards: gradientes oscuros/claros + badge de empresa
- Responsive: 3 cols → 2 cols (tablet) → 1 col (mobile)

### Problema resuelto

- `create-next-app` falló por nombre con mayúsculas → solución: crear en dir temporal y copiar archivos

---

## Sesión 2

**Fecha**: 2026-03-31
**Branch**: `react-version`

### Rediseño Projects: Scroll horizontal → Grid con logos

- Evaluación de Stitch MCP (Google) para generar mockups — solo Projects resultó mejor
- Reescritura completa de `Projects.tsx`: de scroll horizontal a CSS Grid (3/2/1 columnas responsive)
- Logos de empresa como elemento visual principal en cada card (centrados, 65% max-width)
- Mockups de Stitch como fallback solo para proyectos sin logo
- Reordenamiento de proyectos: profesionales primero (VendePunto, GlassHive, Ksquare, Yaydoo, Tresthold), personales al final (ayudame247, InmobiliariaXL)
- Generación de 6 mockups con Stitch MCP para proyectos que los necesitaban

### Integración CV Download

- CV PDF copiado a `public/CV_Guillermo_Granados.pdf`
- `site.ts`: actualizado `cvUrl` de `"#"` a `"/CV_Guillermo_Granados.pdf"`
- `Contact.tsx`: agregados atributos `target="_blank"`, `rel="noopener noreferrer"`, `download`

### Datos y configuración

- `projects.ts`: datos reales de 8 proyectos con descripciones, tech stacks, timelines y highlights
- `site.ts`: email real, social links actualizados, capabilities y tech stack completos
- Componentes `Experience.tsx`, `HeroIntro.tsx`, `ProjectModal.tsx` creados

### Evaluación de deployment

- Comparativa Dokploy vs Vercel — recomendación: Vercel por integración nativa con Next.js

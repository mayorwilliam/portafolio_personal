# Historial de Cambios

## Índice

1. [Sesión 1 — Migración Next.js + Rediseño Projects](#sesión-1)

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

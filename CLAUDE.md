# PortafolioWeb - Claude Instructions

## Project Overview

Portafolio personal de Guillermo, migrado de HTML/CSS/JS estático a Next.js 16 con App Router, TypeScript, y soporte MDX para blog.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Global CSS (variables CSS, sin Tailwind)
- **Blog**: next-mdx-remote + gray-matter (archivos MDX en `/content/blog/`)
- **Fonts**: Inter + JetBrains Mono (self-hosted via next/font)
- **Images**: next/image (optimización automática WebP/AVIF)

## Commands

```bash
npm run dev    # Servidor de desarrollo (http://localhost:3000)
npm run build  # Build de producción
npm run start  # Servir build de producción
npm run lint   # ESLint
```

## Project Structure

```
src/
├── app/           # App Router pages + layout
│   ├── blog/      # Blog listing + [slug] pages
│   └── globals.css
├── components/    # React components (server + client)
├── hooks/         # Custom hooks (scroll, navbar, active section)
├── data/          # TypeScript data files (site config, projects)
├── lib/           # MDX utilities (getAllPosts, getPostBySlug)
content/blog/      # MDX blog posts
public/images/     # Static images
```

## Current Status

- **Branch**: `taste-skill`
- **Phase**: Listo para deploy (landing + blog + SEO + datos reales)
- **Landing sections**: HeroIntro → Where I've Worked (accordion) → Projects (grid asimétrico) → Contact → Footer
- **Experience section**: Eliminada — absorbida por "Where I've Worked" con accordion expandible
- **CV Download**: Funcional desde Contact section
- **Datos**: Proyectos reales con descripciones, tech stacks, y highlights

## Architecture

### Page Sections (src/app/page.tsx)
```
ScrollReveal > HeroIntro > Projects (contains worked-section + projects-section) > Contact
```
- `worked-section`: 4 company cards con accordion (Ksquare, GlassHive, Yaydoo, Tresthold)
- `projects-section`: 4 project cards (WallyMe, VendePunto, ayudame247, InmobiliariaXL)
- Company data lives in Projects.tsx (not in a data file)

### Color System (globals.css :root)
- Dark theme con variaciones tonales (frío vs cálido), NO alternancia blanco/negro
- `--bg-dark: #0F0F12` (base frío), `--bg-dark-warm: #151318` (secciones intermedias)
- `--bg-surface-warm: #1E1B18` (cards sobre fondo cálido)
- `--glow-warm` / `--glow-warm-strong`: radial gradients amber para atmósfera
- Accent: amber cálido (`#E8911E → #D4860A → #A85C0A`), saturation <80%
- Cada sección tiene un radial-gradient ::before/::after para profundidad

## Design Decisions

- Global CSS con variables (sin Tailwind) — 0 riesgo visual en la migración
- Custom hooks con IntersectionObserver en vez de framer-motion (evita 30KB+)
- Datos de proyectos en TypeScript data files, sin CMS externo
- Blog con MDX archivos → push → deploy automático
- taste-skill como guía de diseño: DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 4
- Grids asimétricos (3fr/2fr), NO 3 columnas iguales (taste-skill rule)
- Sin gradient-text en headers grandes (taste-skill rule)

## Next Steps

- [x] Reemplazar datos placeholder con proyectos reales
- [ ] Configurar deploy en Vercel
- [ ] Agregar posts de blog reales
- [x] Actualizar social links y email en `src/data/site.ts`

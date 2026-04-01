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

- **Branch**: `react-version`
- **Phase**: Listo para deploy (landing + blog + SEO + datos reales)
- **Sección Projects**: Grid layout con logos de empresa prominentes, mockups Stitch como fallback
- **CV Download**: Funcional desde Contact section
- **Datos**: Proyectos reales con descripciones, tech stacks, y highlights

## Design Decisions

- Global CSS (copia del original) para 0 riesgo visual en la migración
- Custom hooks con IntersectionObserver en vez de framer-motion (evita 30KB+)
- Datos de proyectos en TypeScript data files, sin CMS externo
- Blog con MDX archivos → push → deploy automático

## Next Steps

- [x] Reemplazar datos placeholder con proyectos reales
- [ ] Configurar deploy en Vercel
- [ ] Agregar posts de blog reales
- [x] Actualizar social links y email en `src/data/site.ts`

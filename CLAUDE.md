# CLAUDE.md — Portafolio Personal

## Proyecto

Portafolio personal construido con Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion.

## Comandos

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm test             # Tests con Vitest (25 tests)
npm run test:watch   # Tests en modo watch
npm run lint         # ESLint
npm run sync:notion  # Sincronizar Notion → JSON (requiere .env)
```

## Arquitectura

- **Datos**: JSON estáticos en `src/data/` → accedidos por `src/lib/data.ts`
- **Notion**: Opcional. Script en `scripts/sync-notion.ts` escribe a los JSON
- **Tema**: Light/Dark con ThemeProvider + script anti-FOUC en `<head>`
- **Analytics**: Vercel Analytics + Speed Insights (se activan en deploy)
- **Tests**: Vitest + Testing Library + jsdom

## Estructura clave

```
src/
  app/           # Páginas Next.js (App Router)
  components/    # home/, layout/, shared/, ui/
  data/          # JSONs: personal, projects, experience, skills, testimonials, posts, site
  lib/           # data.ts, metadata.ts, notion.ts, utils.ts
  types/         # schema.ts (interfaces TypeScript)
  __tests__/     # Tests unitarios y de componentes
scripts/         # sync-notion.ts (excluido de tsconfig)
```

## Estilo visual

Estética **Warm Minimalism** inspirada en eduardbodak.com:
- **Light**: fondo crema cálido + negro puro. **Dark**: negro cálido + crema
- **Section labels**: pills negros monospace (`bg-foreground text-background rounded-full`)
- **H1**: uppercase, tracking negativo agresivo (`-0.06em`)
- **Footer**: fondo negro sólido (`bg-foreground text-background`)
- **font-mono**: usar en labels decorativos y datos técnicos (NO en headings ni body text)

## Reglas

- **Idioma commits**: Español (usar `/commit-espanol`)
- **Bordes**: Usar `border-border` (NUNCA `border-white/X`) para compatibilidad light/dark
- **Prose**: Usar `dark:prose-invert` (NUNCA `prose-invert` solo)
- **Scripts externos**: Excluir de `tsconfig.json` en `exclude` array
- **Verificación visual**: Usar MCP Playwright (`.mcp.json`) para screenshots antes/después de cambios de diseño

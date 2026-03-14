# Portafolio Web — Guía del Proyecto

## Stack
- **HTML5** / **CSS3** / **JavaScript** vanilla (sin framework, sin build tools)
- Fuentes: Google Fonts (Syne, DM Sans, Space Mono)
- Single-page scrollable con smooth scroll

## Estructura
```
PortafolioWeb/
├── index.html              # Página principal
├── css/styles.css           # Estilos (design system + componentes + responsive)
├── js/main.js               # JS (reveals, navbar, mobile menu, magnetic buttons)
├── assets/images/           # Imágenes del portafolio
├── HISTORY.md               # Historial de fases del proyecto
├── CLAUDE.md                # Esta guía
└── .claude/skills/          # Skills de Claude Code
    ├── commit-espanol/
    └── update-docs/
```

## Design System
- **Paleta**: Negro profundo (#09090b), dorado cálido (#c9a55a), blancos cálidos (#edebe8)
- **Tipografía**: Syne (headings), DM Sans (body), Space Mono (labels/código)
- **Estética**: "Noir Architect" — editorial, geométrico, textura grain

## Convenciones
- **Idioma**: Español para commits y documentación
- **Commits**: Usar `/commit-espanol` — formato HEREDOC, sin Co-Authored-By
- **CSS**: Variables custom en :root, mobile-first breakpoints (1024/768/480)
- **JS**: IIFE con strict mode, Intersection Observer para animaciones

## Reglas Críticas
- NO usar emojis como elementos de UI (usar numeración o líneas geométricas)
- NO usar Inter, Roboto, o gradientes púrpura (estética genérica)
- NO repetir las mismas imágenes en múltiples secciones
- NO commitear archivos sensibles (.env, secrets)

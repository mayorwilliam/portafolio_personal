---
name: update-docs
description: Actualiza CLAUDE.md y HISTORY.md con lo hecho en esta sesión
disable-model-invocation: true
---

# Actualizar Documentación del Proyecto

Actualiza la documentación del proyecto basado en esta sesión.

## Instrucciones

### 1. Usa tu memoria de la sesión actual (ya la tienes, 0 tokens extra)

- **QUÉ** se implementó/arregló/cambió
- **Problemas** encontrados y cómo se resolvieron
- **Lecciones aprendidas** (para no repetir errores)

### 2. Actualiza HISTORY.md

- Agregar nueva fase o actualizar fase existente
- Formato conciso: **5-10 bullets máximo**
- Incluir problema resuelto si hubo
- Actualizar índice si es nueva sección

### 3. Actualiza CLAUDE.md solo si aplica

- Current Status (si existe sección de estado)
- Nueva regla crítica si error se repitió 3+ veces
- Nueva config importante (Commands, Env Vars, etc)

### 4. Ejecución eficiente

- Lee con offset+limit solo secciones a editar
- Usa **Edit** (NO Write) para cambios quirúrgicos
- Preserva formato e índices existentes

### 5. Al terminar

- Resumen de updates realizados
- Invocar `/commit-espanol` para crear commits de:
  - Cambios en documentación (HISTORY.md, CLAUDE.md)
  - Todos los cambios pendientes de la sesión
- El skill commit-espanol separará cambios en commits atómicos automáticamente

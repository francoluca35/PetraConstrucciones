# Análisis del bundle (Bundle Analyzer)

Resumen de los chunks principales y qué los compone. Tamaños en **gzip** (lo que realmente se transfiere).

---

## Chunks principales (por tamaño gzip)

| Chunk | ~Gzip | Contenido principal | ¿Optimizable? |
|-------|--------|----------------------|----------------|
| **517** | ~100 KB | Next.js runtime, app-router, React, react-dev-overlay, compiled | No. Es el core del framework. |
| **4bd1b696** | ~52 KB | react-dom (production) | No. Dependencia de React. |
| **framework** | ~44 KB | react-dom (cjs) | No. |
| **439** | **~38 KB** | **framer-motion** (proxy.mjs + ~250 módulos) | **Sí.** Cargar solo donde se use o sustituir por algo más liviano. |
| **main** | ~36 KB | Next.js router, script, utils | No. |
| **179** | **~11 KB** | **translations.ts** (i18n) | **Sí.** Cargar solo el idioma activo. |
| **app/page** | ~8.5 KB | Home (Hero, etc.) | Parcial. Lazy de secciones below-the-fold. |
| **565** | ~6 KB | (revisar en analyzer) | Depende del contenido. |
| **layout** | ~5.4 KB | Layout raíz, providers | Bajo. |
| **quienes-somos** | ~4.7 KB | AboutPage | Aceptable. |
| **173** | ~4 KB | (revisar en analyzer) | Depende del contenido. |
| **contacto** | ~3.5 KB | ContactPage | Aceptable. |
| **portfolio/[slug]** | ~3 KB | Detalle de proyecto | Aceptable. |
| Resto | &lt;3 KB c/u | Páginas y chunks pequeños | Ya están bien. |

---

## Dónde atacar (orden sugerido)

### 1. **Chunk 439 – Motion (framer-motion)** (~38 KB gzip)
- **Qué es:** La librería de animaciones (`motion/react`). Se usa en Navbar, Hero, cards, etc.
- **Opciones:**
  - **Dynamic import:** Cargar `motion` solo en las rutas que animan (p. ej. no en contacto ni en páginas de servicio). Requiere envolver en `next/dynamic` o cargar el provider con `import()`.
  - **Sustituir:** Usar solo CSS (transitions/animations) donde baste, y dejar motion solo donde aporte valor (ej. Hero, Navbar).
  - **Mantener:** Si las animaciones son parte clave del diseño, 38 KB gzip puede ser aceptable.

### 2. **Chunk 179 – translations** (~11 KB gzip)
- **Qué es:** Todo el objeto de traducciones (ES + EN) en un solo módulo.
- **Opciones:**
  - **Split por idioma:** Dos chunks: `translations.es.js` y `translations.en.js`, y cargar solo el del `locale` activo (dynamic import en el provider o en layout).
  - Reduce ~5–6 KB gzip por visita si solo se envía un idioma.

### 3. **Chunk 517 – Next/React runtime** (~100 KB gzip)
- No se puede reducir sin cambiar de framework o versión.
- Lo que queda de “legacy” o “unused” dentro de 517 suele venir de dependencias; el Browserslist y `optimizePackageImports` ya ayudan. Para más, habría que ver en el analyzer qué submódulos concretos pesan y si alguna dependencia se puede reemplazar o cargar en lazy.

---

## Cómo volver a analizar

```bash
npm run clean
npm run analyze
```

Se abre el treemap en el navegador. Podés hacer clic en cada chunk para ver el detalle de módulos y decidir qué lazy-load o split aplicar.

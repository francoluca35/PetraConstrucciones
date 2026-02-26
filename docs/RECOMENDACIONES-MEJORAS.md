# Recomendaciones para mejorar el sitio (Petra / Constructora Conesa)

Resumen priorizado según impacto: **Rendimiento**, **Accesibilidad**, **SEO** y **Assets**.

---

## 1. Rendimiento (Performance)

### Ya implementado
- Logo LCP con `priority` y `sizes` en Navbar.
- Imágenes de portfolio, about y hero con `next/image` y `sizes` adecuados.
- Preload de fuentes Good Times y 911 en el layout.

### Pendiente (alto impacto)

| Acción | Dónde | Beneficio |
|--------|--------|-----------|
| **Comprimir y redimensionar imágenes en `/public/Assets`** | `sigladef1.png`, `sigla1.png`, `about.jpg`, `quienes-somos.jpg`, imágenes de Proyecto-1/2/3 | Lighthouse indicó ~6 MB de ahorro: usar WebP/AVIF y tamaños máximos acordes al uso (ej. logo ≤400px ancho, fotos de proyecto ≤1200px). |
| **Sustituir `<img>` por `next/image`** en AboutPage hero | `AboutPage.tsx` – imagen `quienes-somos.jpg` | Optimización automática (formato, tamaño) y mejor LCP en esa página. |
| **Reducir CSS bloqueante** | CSS global / Tailwind | Valorar incluir solo “critical CSS” inline o cargar el resto de forma asíncrona (avanzado). |
| **Revisar JS legacy/polyfills** | Build (chunk 517) | Si el target son navegadores modernos, ajustar `browserslist` para no incluir polyfills innecesarios (~11 KB). |

### Herramientas sugeridas para assets
- **Imágenes**: [Squoosh](https://squoosh.app), Sharp (script) o exportar WebP desde diseño.
- **Redimensionar**: que ningún PNG/JPG supere el doble del tamaño de visualización (ej. logo ~220px → archivo 440px o menos).

---

## 2. Accesibilidad (Lighthouse ~90 → 95+)

### Textos alternativos

| Ubicación | Actual | Recomendación |
|-----------|--------|----------------|
| Banderas idioma (Navbar) | `alt=""` | Mantener `alt=""` (decorativas; el botón ya tiene `aria-label`). Opcional: `alt="Bandera México"` / `"Bandera USA"` si quieres más contexto. |
| Hero (fondos del carrusel) | `alt=""` | Correcto: son decorativos. Opcional: `role="presentation"` para dejar claro que son presentacionales. |
| About hero `quienes-somos.jpg` | `alt=""` | Usar descripción breve, ej.: "Obra de construcción en Mérida, equipo de Constructora Conesa". |
| About sección Misión (fondo) | `alt=""` | Ej.: "Fondo de obra - Misión y visión de Constructora Conesa". |
| Marca de agua en PortfolioPreview | `alt=""` + `aria-hidden` en contenedor | Correcto; no hace falta cambiar. |
| Instagram mockup (avatar, imágenes) | `alt=""` + `aria-hidden` en sección | Correcto para contenido decorativo/mockup. |

### Otros
- **Contraste**: Revisar que todos los textos cumplan WCAG AA (4.5:1 normal, 3:1 grande).
- **Focus visible**: Confirmar que botones y enlaces tengan anillo de foco visible (ya usas estilos `focus-visible`).
- **Encabezados**: Mantener un solo H1 por página y orden lógico (H1 → H2 → H3).

---

## 3. SEO (ya en 100)

- Metadata, canonical, JSON-LD, sitemap y robots están bien planteados.
- **Opcional**: Si en el futuro usas `?locale=en` o rutas por idioma, incluir `hreflang` y canonical por idioma.

---

## 4. Buenas prácticas y mantenimiento

- **next/image en todas las imágenes propias**: Evitar `<img>` para assets en `/public`; usar siempre `next/image` con `sizes` para mejorar rendimiento y consistencia.
- **Dominios externos**: Las imágenes de Unsplash y flagcdn están bien; si flagcdn se usa mucho, valorar `remotePatterns` en `next.config` y usar `next/image` para las banderas (optimización y consistencia).
- **Lazy loading**: No usar `priority` salvo en el elemento LCP (logo) y, si aplica, la primera imagen del hero; el resto puede quedar con carga diferida por defecto.

---

## 5. Orden sugerido de implementación

1. **Rápido (código)**: AboutPage – reemplazar `<img>` de `quienes-somos.jpg` por `next/image` y poner `alt` descriptivos en hero y sección Misión.
2. **Medio (código)**: Añadir `alt` descriptivos donde se indicó en la tabla de accesibilidad.
3. **Alto impacto (assets)**: Comprimir y redimensionar `sigladef1.png`, `sigla1.png`, `about.jpg`, `quienes-somos.jpg` y fotos de proyectos; preferible WebP/AVIF.
4. **Opcional**: Ajustar `browserslist` y revisar CSS crítico para seguir subiendo Performance.

Si quieres, el siguiente paso puede ser aplicar en el repo los cambios del punto 1 (y los `alt` del punto 2) y dejar listo un script o instrucciones para el punto 3 (assets).

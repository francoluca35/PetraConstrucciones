

# 📌 README.md — Constructora Estrategia Conesa S.A.

---

## 🏗️ Constructora en Mérida, Yucatán

> **Construimos más que estructuras… creamos legados.**
> Sitio web oficial de **Constructora Estrategia Conesa S.A.**, especializada en casas, oficinas, piscinas, obras civiles y municipales en Mérida y la península de Yucatán.

Este es el repositorio del frontend de la página web oficial de Constructora Conesa, desarrollada con Next.js y enfocada en una experiencia visual profesional, SEO e indexación en Google.

👉 [https://www.constructoraconesa.com](https://www.constructoraconesa.com)

---

## 🧠 Tecnologías usadas

El proyecto está construido con:

* **Next.js** (React + App Router)
* **Tailwind CSS** para estilos
* **Motion / AnimatePresence** para animaciones
* **Context API** para manejo de idiomas y traducciones
* Optimización de imágenes y performance
* Responsive design (móvil, tablet, desktop)

---

## 📁 Estructura del repositorio

```
/app
  /components       # Componentes reutilizables
  /(public)         # Páginas públicas
  /quienes-somos    # Página “Quiénes Somos”
  /portfolio        # Portfolio de proyectos
  /contacto         # Página de contacto
/public
  /Assets           # Imágenes y recursos estáticos
/src
  /context          # Contexto de idioma y estado global
  /locales          # Archivos de traducción
README.md           # Documentación del proyecto
package.json        # Dependencias y scripts
```

---

## 🌐 Internacionalización

La web soporta **dos idiomas**:

* Español
* Inglés

Gracias a un sistema de traducciones centralizado en:

```
/src/locales/es.json  
/src/locales/en.json
```

Y gestionado por el contexto:

```
/src/context/LanguageContext.tsx
```

---

## 🛠️ Funcionalidades principales

### ✔ Carrusel de imágenes

Componentes como `AboutPreview` permiten:

* Cambio automático de imagen
* Animaciones suaves
* Indicadores visuales

### ✔ Secciones animadas

Secciones del sitio aparecen con animaciones de entrada, mejorando el UX.

### ✔ Navegación fluida

La navegación interna es rápida, responsiva y compatible con scroll suave.

### ✔ Contacto directo

Integración con WhatsApp y formulario de contacto funcional.

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/francoluca35/PetraConstrucciones.git
```

Instalar dependencias:

```bash
pnpm install
# o npm install / yarn install
```

Correr en modo desarrollo:

```bash
pnpm dev
```

Abrir en el navegador:

```
http://localhost:3000
```

---

## 📌 Scripts disponibles

| Script  | Descripción                             |
| ------- | --------------------------------------- |
| `dev`   | Inicia el servidor de desarrollo        |
| `build` | Genera la versión lista para producción |
| `start` | Corre la build optimizada               |
| `lint`  | Ejecuta reglas de linting               |

---

## 🚀 Deployment

Este proyecto está preparado para deployment en:

* Vercel
* Netlify
* Servidores estáticos compatibles

Se recomienda usar **Vercel** para mejor integración con Next.js.

---

## 🔍 Indexación y Google Search Console

### ✅ Lo que ya está en el código (listo para indexar)

| Elemento | Estado |
| -------- | ------ |
| **robots.txt** | Permite rastreo (`allow: /`), bloquea `/api/` y `/_next/`, indica sitemap y host. |
| **sitemap.xml** | Todas las rutas: home, quienes-somos, portfolio, galeria, contacto, 6 servicios, cada proyecto del portfolio. |
| **URL canónica** | Cada página tiene `alternates.canonical` con `https://www.constructoraconesa.com`. |
| **Meta robots** | `index, follow` y `googleBot: index, follow` en el layout. |
| **Structured Data** | JSON-LD LocalBusiness + WebSite (nombre, dirección, teléfono, servicios, área). |
| **Verificación por meta tag** | Si configurás `GOOGLE_SITE_VERIFICATION` en el entorno, se genera la etiqueta en el `<head>`. |
| **HTTPS** | `metadataBase` y todas las URLs usan `https://www.constructoraconesa.com`. |
| **Idioma** | `<html lang="es">` para contenido en español. |

### 📋 Pasos que tenés que hacer vos (para que Search Console quede completo)

1. **Verificar la propiedad**
   - Entrá a [Google Search Console](https://search.google.com/search-console).
   - Añadí la propiedad con la URL **`https://www.constructoraconesa.com`** (con `www` si ese es tu dominio final).
   - Método **Etiqueta HTML**: copiá el valor de `content` que te da Google.
   - En el hosting (Vercel, etc.) agregá la variable de entorno:
     ```env
     GOOGLE_SITE_VERIFICATION=el_codigo_que_te_dio_google
     ```
   - Volvé a desplegar y en GSC hacé clic en **Comprobar**.

2. **Enviar el sitemap**
   - En GSC: **Índice** → **Sitemaps**.
   - En “Añadir un sitemap nuevo” poné: **`sitemap.xml`** y guardá.
   - Google irá rastreando e indexando las URLs del sitemap.

3. **Dominio en producción con HTTPS**
   - El sitio debe estar publicado en `https://www.constructoraconesa.com` con certificado SSL (Vercel/Netlify lo dan por defecto).

4. **Revisar cobertura y rendimiento**
   - **Cobertura**: Índice → Páginas. Ahí ves qué URLs están indexadas, con error o excluidas.
   - **Core Web Vitals**: Experiencia → Core Web Vitals. Si algo sale en rojo, conviene mejorar velocidad y estabilidad (imágenes, JS).
   - **Usabilidad móvil**: Experiencia → Usabilidad móvil. Con el diseño responsive actual no debería haber problemas.

5. **Opcional: Google Business Profile**
   - Si tenés perfil de negocio en Google (Mérida), vinculalo a esta web. Ayuda al SEO local y a que coincidan datos con el JSON-LD (nombre, dirección, teléfono).

6. **Opcional: Solicitar indexación de URLs clave**
   - En **Inspección de URLs** podés pegar la URL de la home o de páginas importantes y usar **Solicitar indexación** para que Google las procese antes.

Resumen: en el repo ya está todo lo técnico (robots, sitemap, canonical, meta, datos estructurados). Para que Search Console quede bien completo solo falta **verificar la propiedad**, **enviar el sitemap** y tener el **dominio en producción con HTTPS**.

---

## 📐 Diseño y UX

La web fue diseñada para:

✅ Enfocar la atención en los valores de la empresa
✅ Mostrar proyectos de obra y piscinas
✅ Incentivar la generación de leads
✅ Adaptarse a dispositivos móviles y pantallas grandes

---

## 🤝 Contacto

Si querés hacer mejoras, sugerir features o colaborar:

📩 Franco Luca
💻 GitHub: [https://github.com/francoluca35](https://github.com/francoluca35)
🌐 Sitio web cliente: [https://www.constructoraconesa.com](https://www.constructoraconesa.com)

---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia MIT.
Podés adaptarlo libremente a nuevos proyectos.

---


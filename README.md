

# 📌 README.md — Proyecto **Petra Construcciones**

---

## 🏗️ Petra Construcciones

> **Construimos más que estructuras… creamos legados.**
> Sitio web oficial de la empresa constructora **Petra Construcciones**, especializada en obras civiles, residenciales, comerciales y construcción de piscinas en Mérida y la península de Yucatán.

Este es el repositorio del frontend de la página web oficial de Petra Construcciones, desarrollada con tecnologías modernas y enfocada en brindar una experiencia visual profesional, intuitiva y compatible con múltiples dispositivos.

👉 [https://www.petraconstrucciones.com](https://www.petraconstrucciones.com)

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
🌐 Sitio web cliente: [https://www.petraconstrucciones.com](https://www.petraconstrucciones.com)

---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia MIT.
Podés adaptarlo libremente a nuevos proyectos.

---


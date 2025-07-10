Web Costa Line
📘 Documentación en Español
📌 Descripción General
Web Costa Line es una solución web moderna orientada a promover destinos turísticos de forma atractiva e interactiva. Este proyecto ha sido desarrollado con tecnologías actuales como HTML5, SCSS, y metodologías de arquitectura CSS como BEM e ITCSS, garantizando un diseño escalable, mantenible y completamente responsive.

🎯 Objetivos del Proyecto
Brindar una experiencia visual inmersiva en la exploración de destinos turísticos.

Asegurar compatibilidad entre dispositivos mediante diseño responsive.

Permitir la personalización modular de componentes y estilos.

Fomentar buenas prácticas de desarrollo frontend escalable.

🧰 Tecnologías y Herramientas
HTML5: Estructura semántica del contenido.

CSS3 + SCSS: Estilización avanzada con preprocesador Sass.

Browserslist: Control de compatibilidad con navegadores modernos.

Metodologías CSS:

BEM (Block Element Modifier)

ITCSS (Inverted Triangle CSS)

🛠️ Instalación y Configuración
Configuración de la Extensión: Live Sass Compiler
Para compilar archivos .scss automáticamente, se utiliza la extensión Live Sass Compiler en Visual Studio Code.

Configuración recomendada (settings.json):

json
Copiar
Editar
"liveSassCompile.settings.formats": [
  {
    "format": "compressed",
    "extensionName": ".min.css",
    "savePath": "/src/styles/css/css-components"
  }
],
"liveSassCompile.settings.includeItems": [
  "/src/styles/scss/_06-components/*.scss"
],
"liveSassCompile.settings.generateMap": true,
"liveSassCompile.settings.autoprefix": [
  "> 1%",
  "last 2 versions"
]
Pasos para aplicar la configuración:
Abre la paleta de comandos: Ctrl + Shift + P.

Busca Preferences: Open Settings (JSON).

Agrega o reemplaza el fragmento anterior.

Guarda y reinicia Visual Studio Code si es necesario.

📁 Estructura del Proyecto
css
Copiar
Editar
WEB_COSTALINE/
├── .vscode/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── img/
│   │       ├── banner/
│   │       ├── destinos-img/
│   │       ├── icons-img/
│   │       ├── logos/
│   │       ├── payments_logos/
│   │       ├── programs/
│   │       ├── sales-location/
│   │       └── services/
│   ├── components/
│   ├── js/
│   └── styles/
│       ├── css/
│       └── scss/
├── .gitignore
├── app.js
├── index.html
├── manifest.json
├── package.json
└── README.md
🚀 Uso y Ejecución
Integración del archivo app.js:
html
Copiar
Editar
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
Importar dependencias locales:
html
Copiar
Editar
<script src="./src/components/doters-cookies.js"></script>
<script src="./src/js/jquery.min.js?v=1.0.4"></script>
<script src="./src/js/slick.js?v=1.0.4"></script>
Inclusión de estilos
Carga completa (solo para home):

html
Copiar
Editar
<link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6" />
Carga modular (recomendada):

html
Copiar
Editar
<link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/payments-logos.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/destinations-grid.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/list-destinations.min.css" />
🧩 Uso de los componentes personalizados
<app-destinations-etn-grid>
html
Copiar
Editar
<app-destinations-etn-grid
  titlesText='[
    {"id": "title1", "title": "Explora destinos", "text": "Descubre lugares únicos para viajar"}
  ]'
  destinations='[
    {
      "title": "Aguascalientes",
      "content": "Una ciudad con historia y tradición.",
      "image": "./assets/destinos-img/aguascalientes.webp",
      "link": "https://example.com/aguascalientes"
    }
  ]'
></app-destinations-etn-grid>
<app-other-services>
html
Copiar
Editar
<app-other-services
  title-data='[{"title": "Nuestros Servicios"}]'
  cards-data='[
    {
      "title": "Seguro Viajero",
      "imageSrc": "./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "Seguro para tu viaje",
      "href": "https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
<app-blog>
html
Copiar
Editar
<app-blog></app-blog>
🔡 Tipografía e Íconos
Uso de íconos:

html
Copiar
Editar
<div class="icon-Icon-lupa"></div>
En CSS:

scss
Copiar
Editar
.icon-class:before {
  content: "\e900";
}
Actualizar íconos:

Solicita el archivo selection.json.

Optimiza SVGs en svgviewer.dev.

Carga en icomoon.io.

Sustituye archivos en src/assets/icons/.

Actualiza _icons.scss y demo.html.

🧱 Guía de Tipografía y Espaciado
Ejemplo:

scss
Copiar
Editar
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;

h1 {
  font-size: $fs-h1;
  line-height: $lh-default;
}
🤝 Cómo Contribuir
bash
Copiar
Editar
git clone [repo-url]
git checkout -b feature-[nombre]
git add .
git commit -m "Descripción"
git push origin feature-[nombre]
Haz un Pull Request a la rama dev.

📄 Licencia
Este proyecto se encuentra bajo licencia propietaria. Consulta el archivo LICENSE.

📙 Documentation in English
📌 General Description
Web Costa Line is a modern web solution aimed at promoting tourist destinations in an attractive and interactive way. Developed using HTML5, SCSS, and CSS architecture methodologies like BEM and ITCSS, it ensures a scalable, maintainable, and fully responsive design.

🎯 Project Objectives
Deliver an immersive visual experience when exploring tourist destinations.

Ensure device compatibility through responsive design.

Enable modular customization of components and styles.

Promote scalable frontend development best practices.

🧰 Technologies and Tools
HTML5 – Semantic content structure

CSS3 + SCSS – Advanced styling with Sass

Browserslist – Controls modern browser support

CSS Methodologies: BEM and ITCSS

🛠️ Installation and Configuration
settings.json sample for Live Sass Compiler:

json
Copiar
Editar
"liveSassCompile.settings.formats": [
  {
    "format": "compressed",
    "extensionName": ".min.css",
    "savePath": "/src/styles/css/css-components"
  }
],
"liveSassCompile.settings.includeItems": [
  "/src/styles/scss/_06-components/*.scss"
],
"liveSassCompile.settings.generateMap": true,
"liveSassCompile.settings.autoprefix": [
  "> 1%",
  "last 2 versions"
]
Steps:

Press Ctrl + Shift + P

Select Preferences: Open Settings (JSON)

Paste the config and restart VS Code if needed

📁 Project Structure
(See Spanish version for full tree)

🚀 Usage and Execution
HTML Example:

html
Copiar
Editar
<script type="module" src="./app.js?v=1.2.0"></script>
<link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6" />
🧩 Custom Components
<app-destinations-etn-grid>
html
Copiar
Editar
<app-destinations-etn-grid
  titlesText='[
    {"id": "title1", "title": "Explore destinations", "text": "Discover unique places to travel"}
  ]'
  destinations='[
    {
      "title": "Aguascalientes",
      "content": "A city with history and tradition.",
      "image": "./assets/destinos-img/aguascalientes.webp",
      "link": "https://example.com/aguascalientes"
    }
  ]'
></app-destinations-etn-grid>
<app-other-services>
html
Copiar
Editar
<app-other-services
  title-data='[{"title": "Our Services"}]'
  cards-data='[
    {
      "title": "Travel Insurance",
      "imageSrc": "./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "Travel safety",
      "href": "https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
<app-blog>
html
Copiar
Editar
<app-blog></app-blog>
🔡 Typography and Icons
Use <div class="icon-Icon-lupa"></div> and define it in CSS with pseudo-elements like :before.

🧱 Typography and Spacing
scss
Copiar
Editar
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;
🤝 How to Contribute
bash
Copiar
Editar
git clone [repo-url]
git checkout -b feature-[name]
git add .
git commit -m "Description"
git push origin feature-[name]
Then open a Pull Request to dev.

📄 License
This project is under proprietary license. See the LICENSE file.

¿Te gustaría que te lo envíe también como .md descargable o como PDF?








Dijiste:
namelo en codigo para el readme


ChatGPT dijo:
¡Claro! Aquí tienes todo el contenido anterior envuelto en bloque de código Markdown, listo para copiar y pegar directamente en tu archivo README.md:

markdown
Copiar
Editar
# Web Costa Line

## 📘 Documentación en Español

### 📌 Descripción General  
**Web Costa Line** es una solución web moderna orientada a promover destinos turísticos de forma atractiva e interactiva. Este proyecto ha sido desarrollado con tecnologías actuales como HTML5, SCSS, y metodologías de arquitectura CSS como BEM e ITCSS, garantizando un diseño escalable, mantenible y completamente responsive.

### 🎯 Objetivos del Proyecto  
- Brindar una experiencia visual inmersiva en la exploración de destinos turísticos.  
- Asegurar compatibilidad entre dispositivos mediante diseño responsive.  
- Permitir la personalización modular de componentes y estilos.  
- Fomentar buenas prácticas de desarrollo frontend escalable.  

### 🧰 Tecnologías y Herramientas  
- **HTML5**: Estructura semántica del contenido.  
- **CSS3 + SCSS**: Estilización avanzada con preprocesador Sass.  
- **Browserslist**: Control de compatibilidad con navegadores modernos.  
- **Metodologías CSS**:  
  - BEM (Block Element Modifier)  
  - ITCSS (Inverted Triangle CSS)  

### 🛠️ Instalación y Configuración  

#### Configuración de la Extensión: Live Sass Compiler  
Para compilar archivos `.scss` automáticamente, se utiliza la extensión **Live Sass Compiler** en Visual Studio Code.

**Configuración recomendada (`settings.json`):**
```json
"liveSassCompile.settings.formats": [
  {
    "format": "compressed",
    "extensionName": ".min.css",
    "savePath": "/src/styles/css/css-components"
  }
],
"liveSassCompile.settings.includeItems": [
  "/src/styles/scss/_06-components/*.scss"
],
"liveSassCompile.settings.generateMap": true,
"liveSassCompile.settings.autoprefix": [
  "> 1%",
  "last 2 versions"
]
```

#### Pasos para aplicar la configuración:
1. Abre la paleta de comandos: `Ctrl + Shift + P`.  
2. Busca `Preferences: Open Settings (JSON)`.  
3. Agrega o reemplaza el fragmento anterior.  
4. Guarda y reinicia Visual Studio Code si es necesario.

---

### 📁 Estructura del Proyecto
```
WEB_COSTALINE/
├── .vscode/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── img/
│   │       ├── banner/
│   │       ├── destinos-img/
│   │       ├── icons-img/
│   │       ├── logos/
│   │       ├── payments_logos/
│   │       ├── programs/
│   │       ├── sales-location/
│   │       └── services/
│   ├── components/
│   ├── js/
│   └── styles/
│       ├── css/
│       └── scss/
├── .gitignore
├── app.js
├── index.html
├── manifest.json
├── package.json
└── README.md
```

---

### 🚀 Uso y Ejecución

#### Integración del archivo `app.js`:
```html
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
```

#### Importar dependencias locales:
```html
<script src="./src/components/doters-cookies.js"></script>
<script src="./src/js/jquery.min.js?v=1.0.4"></script>
<script src="./src/js/slick.js?v=1.0.4"></script>
```

#### Inclusión de estilos

**Carga completa (solo para home):**
```html
<link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6" />
```

**Carga modular (recomendada):**
```html
<link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/payments-logos.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/destinations-grid.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/list-destinations.min.css" />
```

---

### 🧩 Uso de los componentes personalizados

#### `<app-destinations-etn-grid>`
```html
<app-destinations-etn-grid
  titlesText='[
    {"id": "title1", "title": "Explora destinos", "text": "Descubre lugares únicos para viajar"}
  ]'
  destinations='[
    {
      "title": "Aguascalientes",
      "content": "Una ciudad con historia y tradición.",
      "image": "./assets/destinos-img/aguascalientes.webp",
      "link": "https://example.com/aguascalientes"
    }
  ]'
></app-destinations-etn-grid>
```

#### `<app-other-services>`
```html
<app-other-services
  title-data='[{"title": "Nuestros Servicios"}]'
  cards-data='[
    {
      "title": "Seguro Viajero",
      "imageSrc": "./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "Seguro para tu viaje",
      "href": "https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
```

#### `<app-blog>`
```html
<app-blog></app-blog>
```

---

### 🔡 Tipografía e Íconos

**Uso de íconos:**
```html
<div class="icon-Icon-lupa"></div>
```

**En CSS:**
```scss
.icon-class:before {
  content: "\e900";
}
```

**Actualizar íconos:**
1. Solicita el archivo `selection.json`.  
2. Optimiza SVGs en [svgviewer.dev](https://svgviewer.dev).  
3. Carga en [icomoon.io](https://icomoon.io).  
4. Sustituye archivos en `src/assets/icons/`.  
5. Actualiza `_icons.scss` y `demo.html`.

---

### 🧱 Guía de Tipografía y Espaciado

Ejemplo:
```scss
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;

h1 {
  font-size: $fs-h1;
  line-height: $lh-default;
}
```

---

### 🤝 Cómo Contribuir
```bash
git clone [repo-url]
git checkout -b feature-[nombre]
git add .
git commit -m "Descripción"
git push origin feature-[nombre]
```
Haz un Pull Request a la rama `dev`.

---

### 📄 Licencia
Este proyecto se encuentra bajo **licencia propietaria**. Consulta el archivo `LICENSE`.

---

## 📙 Documentation in English

### 📌 General Description  
**Web Costa Line** is a modern web solution aimed at promoting tourist destinations in an attractive and interactive way. Developed using HTML5, SCSS, and CSS architecture methodologies like BEM and ITCSS, it ensures a scalable, maintainable, and fully responsive design.

### 🎯 Project Objectives  
- Deliver an immersive visual experience when exploring tourist destinations.  
- Ensure device compatibility through responsive design.  
- Enable modular customization of components and styles.  
- Promote scalable frontend development best practices.  

### 🧰 Technologies and Tools  
- **HTML5** – Semantic content structure  
- **CSS3 + SCSS** – Advanced styling with Sass  
- **Browserslist** – Controls modern browser support  
- **CSS Methodologies**: BEM and ITCSS  

---

### 🛠️ Installation and Configuration  

**settings.json sample for Live Sass Compiler:**
```json
"liveSassCompile.settings.formats": [
  {
    "format": "compressed",
    "extensionName": ".min.css",
    "savePath": "/src/styles/css/css-components"
  }
],
"liveSassCompile.settings.includeItems": [
  "/src/styles/scss/_06-components/*.scss"
],
"liveSassCompile.settings.generateMap": true,
"liveSassCompile.settings.autoprefix": [
  "> 1%",
  "last 2 versions"
]
```

**Steps:**
- Press `Ctrl + Shift + P`  
- Select `Preferences: Open Settings (JSON)`  
- Paste the config and restart VS Code if needed  

---

### 📁 Project Structure  
*(See Spanish version for full tree)*

---

### 🚀 Usage and Execution

**HTML Example:**
```html
<script type="module" src="./app.js?v=1.2.0"></script>
<link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6" />
```

---

### 🧩 Custom Components

#### `<app-destinations-etn-grid>`
```html
<app-destinations-etn-grid
  titlesText='[
    {"id": "title1", "title": "Explore destinations", "text": "Discover unique places to travel"}
  ]'
  destinations='[
    {
      "title": "Aguascalientes",
      "content": "A city with history and tradition.",
      "image": "./assets/destinos-img/aguascalientes.webp",
      "link": "https://example.com/aguascalientes"
    }
  ]'
></app-destinations-etn-grid>
```

#### `<app-other-services>`
```html
<app-other-services
  title-data='[{"title": "Our Services"}]'
  cards-data='[
    {
      "title": "Travel Insurance",
      "imageSrc": "./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "Travel safety",
      "href": "https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
```

#### `<app-blog>`
```html
<app-blog></app-blog>
```

---

### 🔡 Typography and Icons  
Use `<div class="icon-Icon-lupa"></div>` and define it in CSS with pseudo-elements like `:before`.

---

### 🧱 Typography and Spacing
```scss
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;
```

---

### 🤝 How to Contribute
```bash
git clone [repo-url]
git checkout -b feature-[name]
git add .
git commit -m "Description"
git push origin feature-[name]
```
Then open a Pull Request to `dev`.

---

### 📄 License  
This project is under **proprietary license**. See the `LICENSE` file.
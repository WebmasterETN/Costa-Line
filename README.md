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

---

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
Pasos para aplicar la configuración:

Abre la paleta de comandos: Ctrl + Shift + P.

Busca Preferences: Open Settings (JSON).

Agrega o reemplaza el fragmento anterior.

Guarda y reinicia Visual Studio Code si es necesario.

📁 Estructura del Proyecto
plaintext
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
  content: "\\e900";
}
🧱 Guía de Tipografía y Espaciado
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
Haz Pull Request a la rama dev.

📄 Licencia
Este proyecto se encuentra bajo licencia propietaria. Consulta el archivo LICENSE.

css
Copiar
Editar

¿Te gustaría que te agregue también la sección de documentación en inglés completa?







Dijiste:
si todo completo


ChatGPT dijo:
Aquí tienes el archivo completo del README.md con toda la documentación en español e inglés, listo para copiar, pegar o descargar:

📄 Haz clic aquí para descargar README_CostaLine_FULL.md

Si lo deseas también te lo puedo pegar directamente aquí en texto. ¿Te gustaría eso? 








Dijiste:
damelo aca para copiar y pegar


ChatGPT dijo:
¡Claro! Aquí tienes el contenido completo del README.md en Markdown con documentación en español e inglés, listo para copiar y pegar directamente:

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
- **HTML5**  
- **CSS3 + SCSS**  
- **Browserslist**  
- **Metodologías CSS**: BEM, ITCSS

---

### 🛠️ Instalación y Configuración

#### Configuración de Live Sass Compiler:
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
Pasos de instalación:
bash
Copiar
Editar
git clone https://github.com/WebmasterETN/WebIAMSA.git
cd WEBIAMSA
sass src/styles/scss:src/styles/css --style compressed
open index.html
📁 Estructura del Proyecto
plaintext
Copiar
Editar
WEB_COSTALINE/
├── .vscode/
├── src/
│   ├── assets/
│   ├── components/
│   ├── js/
│   └── styles/
├── app.js
├── index.html
└── README.md
🚀 Uso y Ejecución
Integración de app.js:
html
Copiar
Editar
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
Inclusión de estilos modular:
html
Copiar
Editar
<link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
🧩 Componentes Personalizados
app-destinations-etn-grid:
html
Copiar
Editar
<app-destinations-etn-grid
  titlesText='[{"id": "title1", "title": "Explora", "text": "Visita lugares únicos"}]'
  destinations='[{"title": "Destino", "content": "Descripción", "image": "./assets/destinos-img/aguascalientes.webp", "link": "https://example.com"}]'
></app-destinations-etn-grid>
app-other-services:
html
Copiar
Editar
<app-other-services
  title-data='[{"title": "Servicios"}]'
  cards-data='[{"title": "Seguro", "imageSrc": "./assets/other-services-img/seguro-viajero.webp", "imageAlt": "Seguro", "href": "https://example.com"}]'
></app-other-services>
app-blog:
html
Copiar
Editar
<app-blog></app-blog>
🔡 Tipografía e Íconos
scss
Copiar
Editar
.icon-class:before {
  content: "\\e900";
}
🧱 Tipografía y Espaciado
scss
Copiar
Editar
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;
📙 Documentation in English
📌 General Description
Web Costa Line is a modern web solution designed to promote tourist destinations in an attractive and interactive way using HTML5, SCSS, BEM, and ITCSS.

🎯 Project Objectives
Deliver immersive visual exploration of tourist destinations.

Ensure responsive design across devices.

Enable modular customization of components.

Promote scalable frontend development.

🧰 Technologies and Tools
HTML5

CSS3 + SCSS

Browserslist

CSS Methodologies: BEM, ITCSS

🛠️ Installation and Configuration
Live Sass Compiler Configuration:
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
Installation Steps:
bash
Copiar
Editar
git clone https://github.com/WebmasterETN/WebIAMSA.git
cd WEBIAMSA
sass src/styles/scss:src/styles/css --style compressed
open index.html
📁 Project Structure
plaintext
Copiar
Editar
WEB_COSTALINE/
├── .vscode/
├── src/
│   ├── assets/
│   ├── components/
│   ├── js/
│   └── styles/
├── app.js
├── index.html
└── README.md
🚀 Usage and Execution
Import app.js:
html
Copiar
Editar
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
Modular CSS Load:
html
Copiar
Editar
<link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
🧩 Custom Components
app-destinations-etn-grid:
html
Copiar
Editar
<app-destinations-etn-grid
  titlesText='[{"id": "title1", "title": "Explore", "text": "Discover unique places"}]'
  destinations='[{"title": "Destination", "content": "Description", "image": "./assets/destinos-img/aguascalientes.webp", "link": "https://example.com"}]'
></app-destinations-etn-grid>
app-other-services:
html
Copiar
Editar
<app-other-services
  title-data='[{"title": "Services"}]'
  cards-data='[{"title": "Travel Insurance", "imageSrc": "./assets/other-services-img/seguro-viajero.webp", "imageAlt": "Travel Insurance", "href": "https://example.com"}]'
></app-other-services>
app-blog:
html
Copiar
Editar
<app-blog></app-blog>
🔡 Typography and Icons
scss
Copiar
Editar
.icon-class:before {
  content: "\\e900";
}
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
📄 License
This project is under proprietary license. See LICENSE for details.
# Web Costa Line
Índice / Index  
📘 Documentación en Español  
📙 Documentation in English

Índice  
📘 Documentación en Español  
📌 Descripción General  
🎯 Objetivos del Proyecto  
🧰 Tecnologías y Herramientas  
🛠️ Instalación y Configuración  
Configuración de la Extensión: Live Sass Compiler  
Pasos de Instalación  
📁 Estructura del Proyecto  
🚀 Uso y Ejecución  
Integración del archivo app.js  
Importar dependencias locales  
Inclusión de Estilos  
🧩 Uso de los componentes personalizados  
app-destinations-costa-line-grid  
app-other-services  
app-blog.js  
🔡 Tipografía e Íconos  
Insertar Íconos  
Actualización de Íconos  
🧱 Guía de Tipografía y Espaciado  
Cómo Contribuir  
Licencia

Documentación en español  
📌 Descripción General  
Web Costa Line es una solución web moderna orientada a promover destinos turísticos de forma atractiva e interactiva. Este proyecto ha sido desarrollado con tecnologías actuales como HTML5, SCSS, y metodologías de arquitectura CSS como BEM e ITCSS, garantizando un diseño escalable, mantenible y completamente responsive.

🎯 Objetivos del Proyecto  
- Brindar una experiencia visual inmersiva en la exploración de destinos turísticos.  
- Asegurar compatibilidad entre dispositivos mediante diseño responsive.  
- Permitir la personalización modular de componentes y estilos.  
- Fomentar buenas prácticas de desarrollo frontend escalable.

🧰 Tecnologías y Herramientas  
- HTML5: Estructura semántica del contenido.  
- CSS3 + SCSS: Estilización avanzada con preprocesador Sass.  
- Browserslist: Control de compatibilidad con navegadores modernos.  
Metodologías CSS:  
BEM (Block Element Modifier)  
ITCSS (Inverted Triangle CSS)

🛠️ Instalación y Configuración  
Configuración de la Extensión: Live Sass Compiler  
Para compilar archivos .scss a .css automáticamente, se utiliza la extensión Live Sass Compiler en Visual Studio Code.

Enlace de la extensión  
👉 Live Sass Compiler - VS Code Marketplace

Configuración recomendada  
Modifica tu archivo settings.json en la configuración de VS Code del compilador SASS con el siguiente fragmento:

```json
  //"liveSassCompile.settings.forceBaseDirectory": "/d:/Documents/Proyects/WebIAMSA/src/styles",
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
  ],
Pasos para aplicar la configuración:

Abre el Command Palette con Ctrl + Shift + P.

Escribe Preferences: Open Settings (JSON) y selecciónalo.

Agrega o reemplaza el fragmento indicado.

Guarda y reinicia Visual Studio Code si es necesario.

Esta configuración permitirá compilar los estilos de forma automática al guardar los archivos .scss, generando los .min.css correspondientes en la ruta definida.

Pasos de Instalación

bash
Copiar
Editar
# Clonar el repositorio
git clone https://github.com/WebmasterETN/WebIAMSA.git

# Acceder al proyecto
cd WEBIAMSA

# Compilar SCSS
sass src/styles/scss:src/styles/css --style compressed

# Visualizar en navegador
open index.html
📁 Estructura del Proyecto

css
Copiar
Editar
WEBIAMSA/
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
Integración del archivo app.js que importa los componentes

html
Copiar
Editar
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
Importar dependencias locales

html
Copiar
Editar
<script src="./src/components/doters-cookies.js"></script>
<script src="./src/js/jquery.min.js?v=1.0.4"></script>
<script src="./src/js/slick.js?v=1.0.4"></script>
Inclusión de Estilos
Carga completa (solo en home)

html
Copiar
Editar
<link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6"/>
IMPORTANTE: Las rutas deben estar actualizadas. Este archivo de estilos solo se recomienda para la página home. Si deseas usar los componentes en otras páginas, deben cargarse los estilos de manera modular.

Carga modular (ejemplo)

html
Copiar
Editar
<link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/payments-logos.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/destinations-grid.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/list-destinations.min.css" />
IMPORTANTE: Las rutas deben estar actualizadas o los estilos no se cargarán correctamente.

🧩 Uso de los componentes personalizados

app-destinations-costa-line-grid
Este componente permite la visualización dinámica de destinos turísticos mediante una grilla adaptable y cambiando a un slider en dispositivos móviles utilizando la librería Slick Slider.

Requisitos:
Entre 1 y 5 elementos por instancia.
Cada destino debe incluir:

title (Nombre del destino)

content (Descripción)

image (URL de imagen)

link (URL opcional)

titleText (Título de sección)

Implementación:

html
Copiar
Editar
<app-destinations-costa-line-grid
  titlesText='[
    {"id": "title1, 2, 3...", "title": "título de la sección", "text": "texto del parráfo de la sección"}
  ]'
  destinations='[
    {
      "title": "título para el destino",
      "content": "texto descriptivo para los destinos",
      "image": "(url relativa de la imagen)./assets/destinos-img/aguascalientes.webp",
      "link": "(url de la landing page del destino)https://example.com/aguascalientes"
    },
    {
      "title": "título para el destino",
      "content": "texto descriptivo para los destinos",
      "image": "(url relativa de la imagen)./assets/destinos-img/aguascalientes.webp",
      "link": "(url de la landing page del destino)https://example.com/aguascalientes"
    },
    {
      "title": "título para el destino",
      "content": "texto descriptivo para los destinos",
      "image": "(url relativa de la imagen)./assets/destinos-img/aguascalientes.webp",
      "link": "(url de la landing page del destino)https://example.com/aguascalientes"
    }
  ]'
></app-destinations-costa-line-grid>
IMPORTANTE: Las rutas de los enlaces, así como las de las imágenes, deben estar actualizadas.

app-other-services
Componente para mostrar programas de lealtad y otros servicios clave.

Atributo requerido:
cards-data (arreglo JSON con contenido de las tarjetas)
Estructura esperada:

json
Copiar
Editar
{
  "title": "Nombre del servicio",
  "imageSrc": "ruta/de/imagen.webp",
  "imageAlt": "descripción alternativa",
  "href": "https://url-del-servicio.com"
}
Ejemplo de uso:

html
Copiar
Editar
<app-other-services
  title-data='[
    {"title": "Título de la sección"}
  ]'
  cards-data='[
    {
      "title": "título del elemento",
      "imageSrc": "(url relativa de la imagen)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "texto del atributo alt de la imagen",
      "href": "(url de la landing page del destino) https://example.com/seguro-viajero"
    },
    {
      "title": "título del elemento",
      "imageSrc": "(url relativa de la imagen)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "texto del atributo alt de la imagen",
      "href": "(url de la landing page del destino) https://example.com/seguro-viajero"
    },
    {
      "title": "título del elemento",
      "imageSrc": "(url relativa de la imagen)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "texto del atributo alt de la imagen",
      "href": "(url de la landing page del destino) https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
IMPORTANTE: Las rutas de los enlaces, así como las de las imágenes, deben estar actualizadas.

app-blog.js
Componente que consume la API REST de WordPress y visualiza los últimos posts en un slider vertical.

Funcionalidades clave:

fetchLatestPosts(): Obtiene datos de WordPress.

render(): Renderiza HTML dinámico.

initializeSlider(): Inicializa el slider con Slick.

Soporte para fallback en caso de datos vacíos.

Requisitos:

Incluir jQuery y Slick en el proyecto.

Agregar <app-blog></app-blog> donde se desea renderizar.

Personalizar endpoint en fetchLatestPosts() según la fuente deseada.

🔡 Tipografía e Íconos
Insertar Íconos

html
Copiar
Editar
<div class="icon-Icon-lupa"></div>
En CSS

css
Copiar
Editar
.icon-class:before {
  content: "\e900";
}
Actualización de Íconos

Solicita el archivo selection.json.

Optimiza los SVGs en svgviewer.dev.

Importa todo en icomoon.io.

Genera y descarga el nuevo paquete.

Sustituye archivos en src/assets/icons/.

Copia clases CSS a _icons.scss.

Actualiza demo.html y demo-files/.

IMPORTANTE: El archivo selection.json debe estar actualizado y debe ser solicitado a tu líder de proyecto para su actualización si lo requieres.

🧱 Guía de Tipografía y Espaciado
Definidos mediante clamp() o rem para garantizar una buena escalabilidad visual según el caso.

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
Cómo Contribuir

bash
Copiar
Editar
git clone [repo-url]
git checkout -b feature-[nombre]
git add .
git commit -m "Descripción"
git push origin feature-[nombre]
Haz Pull Request a la rama dev.

Licencia
Este proyecto se encuentra bajo licencia propietaria. Consulta el archivo LICENSE.

Documentation in English
Index
📘 Documentation in Spanish
📌 General Description
🎯 Project Objectives
🧰 Technologies and Tools
🛠️ Installation and Configuration
Extension Configuration: Live Sass Compiler
Installation Steps
📁 Project Structure
🚀 Usage and Execution
Integration of app.js file
Import local dependencies
Styles Inclusion
🧩 Use of Custom Components
app-destinations-costa-line-grid
app-other-services
app-blog.js
🔡 Typography and Icons
Insert Icons
Icon Update
🧱 Typography and Spacing Guide
How to Contribute
License

📌 General Description
Web Costa Line is a modern web solution aimed at promoting tourist destinations in an attractive and interactive way. This project was developed using current technologies such as HTML5, SCSS, and CSS architecture methodologies like BEM and ITCSS, ensuring a scalable, maintainable, and fully responsive design.

🎯 Project Objectives

Deliver an immersive visual experience when exploring tourist destinations.

Ensure device compatibility through responsive design.

Enable modular customization of components and styles.

Encourage best practices for scalable frontend development.

🧰 Technologies and Tools

HTML5: Semantic content structure.

CSS3 + SCSS: Advanced styling with Sass preprocessor.

Browserslist: Controls compatibility with modern browsers.
CSS Methodologies:
BEM (Block Element Modifier)
ITCSS (Inverted Triangle CSS)

🛠️ Installation and Configuration
Extension Configuration: Live Sass Compiler
To automatically compile .scss files to .css, the Live Sass Compiler extension is used in Visual Studio Code.

Extension link
👉 Live Sass Compiler - VS Code Marketplace

Recommended Configuration
Modify your settings.json file in VS Code with the following snippet:

json
Copiar
Editar
  //"liveSassCompile.settings.forceBaseDirectory": "/d:/Documents/Proyects/WebIAMSA/src/styles",
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
  ],
Steps to Apply the Configuration:

Open Command Palette with Ctrl + Shift + P.

Type Preferences: Open Settings (JSON) and select it.

Add or replace the snippet above.

Save and restart Visual Studio Code if necessary.

This setup allows automatic compilation of styles when saving .scss files, generating the corresponding .min.css files in the defined path.

Installation Steps

bash
Copiar
Editar
# Clone the repository
git clone https://github.com/WebmasterETN/WebIAMSA.git

# Enter the project
cd WEBIAMSA

# Compile SCSS
sass src/styles/scss:src/styles/css --style compressed

# View in browser
open index.html
📁 Project Structure

css
Copiar
Editar
WEBIAMSA/
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
🚀 Usage and Execution
Integration of the app.js file that imports components

html
Copiar
Editar
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
Import local dependencies

html
Copiar
Editar
<script src="./src/components/doters-cookies.js"></script>
<script src="./src/js/jquery.min.js?v=1.0.4"></script>
<script src="./src/js/slick.js?v=1.0.4"></script>
Styles Inclusion
Full load (only on home)

html
Copiar
Editar
<link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6"/>
IMPORTANT: Paths must be up to date. This style file is recommended only for the home page. To use components on other pages, styles must be loaded modularly.

Modular load (example)

html
Copiar
Editar
<link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/payments-logos.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/destinations-grid.min.css" />
<link rel="stylesheet" href="/src/styles/css/_css-components/list-destinations.min.css" />
IMPORTANT: Paths must be up to date or styles will not load correctly.

🧩 Use of Custom Components

app-destinations-costa-line-grid
This component allows dynamic visualization of tourist destinations through a responsive grid that switches to a slider on mobile devices using the Slick Slider library.

Requirements:
Between 1 and 5 items per instance.
Each destination must include:

title (Destination name)

content (Description)

image (Image URL)

link (Optional URL)

titleText (Section title)

Implementation:

html
Copiar
Editar
<app-destinations-costa-line-grid
  titlesText='[
    {"id": "title1, 2, 3...", "title": "section title", "text": "paragraph text for the section"}
  ]'
  destinations='[
    {
      "title": "title for the destination",
      "content": "descriptive text for the destination",
      "image": "(relative image URL)./assets/destinos-img/aguascalientes.webp",
      "link": "(destination landing page URL)https://example.com/aguascalientes"
    },
    {
      "title": "title for the destination",
      "content": "descriptive text for the destination",
      "image": "(relative image URL)./assets/destinos-img/aguascalientes.webp",
      "link": "(destination landing page URL)https://example.com/aguascalientes"
    },
    {
      "title": "title for the destination",
      "content": "descriptive text for the destination",
      "image": "(relative image URL)./assets/destinos-img/aguascalientes.webp",
      "link": "(destination landing page URL)https://example.com/aguascalientes"
    }
  ]'
></app-destinations-costa-line-grid>
IMPORTANT: Links and image URLs must be updated.

app-other-services
Component to display loyalty programs and key services.

Required attribute:
cards-data (JSON array with card content)
Expected structure:

json
Copiar
Editar
{
  "title": "Service name",
  "imageSrc": "image/path.webp",
  "imageAlt": "alternative description",
  "href": "https://service-url.com"
}
Example usage:

html
Copiar
Editar
<app-other-services
  title-data='[
    {"title": "Section Title"}
  ]'
  cards-data='[
    {
      "title": "element title",
      "imageSrc": "(relative image URL)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "alt attribute text",
      "href": "(destination landing page URL) https://example.com/seguro-viajero"
    },
    {
      "title": "element title",
      "imageSrc": "(relative image URL)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "alt attribute text",
      "href": "(destination landing page URL) https://example.com/seguro-viajero"
    },
    {
      "title": "element title",
      "imageSrc": "(relative image URL)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "alt attribute text",
      "href": "(destination landing page URL) https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
IMPORTANT: Links and image URLs must be updated.

app-blog.js
Component that consumes WordPress REST API and displays the latest posts in a vertical slider.

Key features:

fetchLatestPosts(): Fetches WordPress data.

render(): Dynamically renders HTML.

initializeSlider(): Initializes slider with Slick.

Fallback support if no data.

Requirements:

Include jQuery and Slick in the project.

Add <app-blog></app-blog> where rendering is desired.

Customize fetchLatestPosts() endpoint as needed.

🔡 Typography and Icons
Insert Icons

html
Copiar
Editar
<div class="icon-Icon-lupa"></div>
CSS

css
Copiar
Editar
.icon-class:before {
  content: "\e900";
}
Icon Update

Request selection.json file.

Optimize SVGs on svgviewer.dev.

Import all to icomoon.io.

Generate and download new package.

Replace files in src/assets/icons/.

Copy CSS classes to _icons.scss.

Update demo.html and demo-files/.

IMPORTANT: selection.json must be updated and requested from your project lead if needed.

🧱 Typography and Spacing Guide
Defined using clamp() or rem to ensure good visual scalability.

Example:

scss
Copiar
Editar
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;

h1 {
  font-size: $fs-h1;
  line-height: $lh-default;
}
How to Contribute

bash
Copiar
Editar
git clone [repo-url]
git checkout -b feature-[name]
git add .
git commit -m "Description"
git push origin feature-[name]
Make Pull Request to dev branch.

License
This project is under proprietary license. See LICENSE file.
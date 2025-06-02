/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-dropdown.js"; // Importar el componente dropdown

class LayoutTerminalesTaquillas extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_Doters_Feria_Tacambaro1_Autovias.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.png", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/Bw_Patio_Santa_Fe_Morelia2_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet.png","smallImage": "../src/assets/img/banner/Movil.png", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/Bw_Playas_Semana_Santa_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet-1.png","smallImage": "../src/assets/img/banner/Movil-1.png", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            <section class="__section __section__encuentra-taquilla">
                <app-section-title section-title="Encuentra tu taquilla ETN Turistar: ubicaciones y horarios"></app-section-title>
                <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
                <article class="__grid-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>
                <p class="__section-paragraph-xl">Explora más rutas y destinos de ETN Turistar para planificar tu viaje.</>
            </section>

            <section class="__section __section__FATQs">
                <app-section-title section-title="Preguntas frecuentes sobre las taquillas ETN"></app-section-title>
                <h3 class="__subtitle-center-xl">¿Por qué comprar en las taquillas ETN Turistar?</h3>
                <p class="__paragraph-left">Comprar tus boletos en las taquillas de ETN Turistar ofrece múltiples ventajas. Además de contar con un servicio rápido y eficiente, nuestras taquillas están estratégicamente ubicadas para facilitarte el acceso desde cualquier punto de la ciudad. Al comprar en taquilla, tienes la posibilidad de recibir asesoría personalizada, resolver cualquier duda sobre tu viaje y asegurarte de que todos los detalles están perfectamente organizados antes de tu salida. Además, en nuestras taquillas también puedes acceder a promociones exclusivas y obtener información actualizada sobre los horarios ETN y los destinos más populares. Ya sea que estés buscando ETN cerca de mí o prefieras comprar tus boletos directamente en una central de ETN, nuestras taquillas son la opción más confiable y conveniente.</p>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <!-- Contenedor para los dropdowns -->
                </article>
            </section>
        `;

    this.loadAndRenderImageCards();
    this.loadAndRenderDropdowns();
  }
  async loadAndRenderImageCards() {
    const imageCardContainer = this.querySelector(".__grid-cards-container");
    if (!imageCardContainer) {
      console.error(
        "El contenedor '.__grid-cards-container' para app-card-image no fue encontrado."
      );
      return;
    }

    try {
      const response = await fetch("../src/data/card-image-term-taqui.json");
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} al cargar card-image-term-taqui.json`
        );
      }
      const cardsData = await response.json();

      if (!cardsData || !Array.isArray(cardsData)) {
        throw new Error(
          "Formato de datos incorrecto o vacío para card-image-term-taqui.json"
        );
      }

      cardsData.forEach((data) => {
        const cardElement = document.createElement("app-card-image");
        imageCardContainer.appendChild(cardElement);
        cardElement.populateCard(data);
      });

      // Añadir el div "center-botton" después de las tarjetas
      const centerButtonDiv = document.createElement("div");
      centerButtonDiv.classList.add("center-botton");
      centerButtonDiv.innerHTML = "<p>Taquillas de autobuses ETN: ubicaciones principales</p>";
      imageCardContainer.appendChild(centerButtonDiv);
    } catch (error) {
      console.error("Error al cargar o renderizar app-card-image:", error);
      if (imageCardContainer) {
        imageCardContainer.innerHTML =
          "<p>Error al cargar la información de las tarjetas de imagen.</p>";
      }
    }
  }

  async loadAndRenderDropdowns() {
    try {
      const response = await fetch("../src/data/dropdown-preguntas-frecuentes.json"); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dropdownsData = await response.json();
      this.renderDropdowns(dropdownsData);
    } catch (error) {
      console.error("Error al cargar o parsear dropdown-data.json:", error);
      const container = this.querySelector('#dropdowns-container');
      if (container) {
        container.innerHTML = "<p>Error al cargar las preguntas frecuentes.</p>";
      }
    }
  }

  renderDropdowns(dropdownsData) {
    const container = this.querySelector('#dropdowns-container');
    if (!container) {
      console.error('El contenedor #dropdowns-container no fue encontrado.');
      return;
    }
    container.innerHTML = ''; // Limpiar contenido previo

    dropdownsData.forEach(data => {
      const dropdownElement = document.createElement('app-dropdown');
      dropdownElement.setAttribute('title-dropdown', data['title-dropdown']);
      dropdownElement.setAttribute('content-dropdown', data['content-dropdown']);
      container.appendChild(dropdownElement);
    });
  }
}
customElements.define("layout-terminales-taquillas", LayoutTerminalesTaquillas);

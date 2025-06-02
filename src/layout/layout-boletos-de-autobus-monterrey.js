/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-card-open-modal.js";
import "../components/app-dropdown.js";
import "../components/app-card-destination-opacity.js";
import "../components/app-slider-opacity.js";
import "../components/app-modal-multi-image.js";
import "../components/app-modal-image.js";


class AppBoletosAutobusMonterrey extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/banner-monterrey.png","mediumImage": "./src/assets/img/banner/banner-monterrey-tablet.png", "smallImage": "./src/assets/img/banner/banner-monterrey-sm.png", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__monterrey__destinations">
                <app-section-title section-title="Viaja a Monterrey en autobús con ETN Turistar"></app-section-title>
                <p class="__subtitle__destinos">Monterrey</p>
                <p class="__paragraph">Monterrey, ubicada en el norte de México, es una ciudad vibrante que ofrece una combinación única de belleza natural, riqueza cultural y comodidades modernas. ETN Turistar ofrece un servicio de autobús de lujo desde la Ciudad de México, brindando una experiencia de viaje segura, cómoda y sin estrés. Ya sea que planee una escapada de fin de semana o una estancia prolongada, ETN Turistar le garantiza que su viaje será tan excepcional como su destino.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Monterrey?</p>
                <p class="__paragraph">Bienvenido a Monterrey, la vibrante capital del estado de Nuevo León, al noreste de México. Conocida como la "Sultán del Norte", Monterrey es una ciudad que combina armoniosamente su rico patrimonio cultural con la vida urbana moderna. Enclavada a los pies de la Sierra Madre Oriental, Monterrey ofrece impresionantes paisajes naturales, como el icónico Cerro de la Silla, y un vibrante entorno urbano.</p>
             </section>

             <section class="__section __section__grid" id="monterrey-grid-section">
                <article class="grid-container">
                    <!-- Los elementos del grid se cargarán aquí -->
                </article>
             </section>

              <section class="__section __section__monterrey__food">
                <p class="__paragraph__xl">Monterrey, la vibrante capital de Nuevo León, es reconocida por su rico y diverso patrimonio culinario.La gastronomía de la ciudad es una exquisita mezcla de influencias indígenas, españolas y estadounidenses, lo queda como resultado unagama única de sabores y platillos que reflejan su diversidad cultural.</p>
                 <article class="container-cards__food">
                    <!-- Las tarjetas de comida se cargarán aquí dinámicamente -->
                </article>
             </section>

             <section class="__section __section__monterrey__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <!-- Contenedor para los dropdowns -->
                </article>
             </section>

              <section class="__section __section__monterrey__other">
                <app-section-title section-title="Otros destinos"></app-section-title>
                <article class="container-slider-other">
                    <app-slider-opacity></app-slider-opacity>
                </article>
             </section>

             <app-modal-multi-image></app-modal-multi-image>
              <app-modal-image></app-modal-image>


        `;
    await this.loadAndRenderGridItems();
    await this.loadAndRenderFoodCards();
    await this.loadAndRenderDropdowns(); 
    await this._configureDestinationSlider(); 
  }

  async loadAndRenderGridItems() {
    const gridContainer = this.querySelector(
      "#monterrey-grid-section .grid-container"
    );
    if (!gridContainer) {
      console.error("El contenedor del grid no fue encontrado.");
      return;
    }

    try {
      const response = await fetch("../src/data/lugares-monterrey.json");
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const items = await response.json();

      items.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `card ${item.className || ""}`.trim();
        const bgValue = item.backgroundImage;

        if (bgValue) {
          if (bgValue.includes(".") || bgValue.includes("/")) {
            cardDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${bgValue}')`;
          } else {
            cardDiv.style.backgroundColor = bgValue;
          }
        }

        cardDiv.innerHTML = `<span>${item.text}</span>`;
        gridContainer.appendChild(cardDiv);

        cardDiv.addEventListener('click', () => this.openMultiImageModal(item));
      });
    } catch (error) {
      console.error("Error al cargar los items del grid:", error);
      gridContainer.innerHTML = "<p>Error al cargar el contenido del grid.</p>";
    }
  }

  async loadAndRenderFoodCards() {
    const foodContainer = this.querySelector(".container-cards__food");
    if (!foodContainer) {
      console.error(
        "El contenedor '.container-cards__food' no fue encontrado."
      );
      return;
    }
    foodContainer.innerHTML = "";

    try {
      const response = await fetch(
        "../src/data/card-open-modal-platillos.json"
      );
      if (!response.ok) {
        throw new Error(
          `Error HTTP al cargar card-open-modal-platillos.json: ${response.status}`
        );
      }
      const foodData = await response.json(); 

      if (!foodData || !Array.isArray(foodData) || foodData.length === 0) {
        foodContainer.innerHTML =
          "<p>No hay platillos para mostrar en este momento.</p>";
        console.warn(
          "No se encontraron datos de platillos en food-monterrey.json"
        );
        return;
      }

      foodData.forEach((foodItem) => {
        const cardElement = document.createElement("app-card-open-modal");
        
        cardElement.setAttribute(
          "card-title",
          foodItem.title || "Título no disponible"
        );
        cardElement.setAttribute(
          "card-modal-description",
          foodItem.description || "Descripción no disponible"
        );
        cardElement.setAttribute(
          "card-image",
          foodItem.imageSrc || "src/assets/img/platillos/default-card.png"
        );
        cardElement.setAttribute(
          "card-modal-image",
          foodItem.imageModal || foodItem.imageSrc || "src/assets/img/platillos/default-modal.png"
        );
        cardElement.setAttribute(
          "card-alt",
          foodItem.altText || foodItem.title || "Platillo"
        );
        cardElement.setAttribute(
          "card-link-text",
          foodItem.linkText || "Ver más..."
        );
        foodContainer.appendChild(cardElement);
      });
    } catch (error) {
      console.error(
        "Error al cargar o renderizar las tarjetas de comida:",
        error
      );
      foodContainer.innerHTML =
        "<p>Error al cargar la información de los platillos. Intente más tarde.</p>";
    }
  }
  async loadAndRenderDropdowns() {
    try {
      const response = await fetch(
        "../src/data/dropdown-preguntas-monterrey.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dropdownsData = await response.json();
      this.renderDropdowns(dropdownsData);
    } catch (error) {
      console.error("Error al cargar o parsear dropdown-data.json:", error);
      const container = this.querySelector("#dropdowns-container");
      if (container) {
        container.innerHTML =
          "<p>Error al cargar las preguntas frecuentes.</p>";
      }
    }
  }

  renderDropdowns(dropdownsData) {
    const container = this.querySelector("#dropdowns-container");
    if (!container) {
      console.error("El contenedor #dropdowns-container no fue encontrado.");
      return;
    }
    container.innerHTML = "";

    dropdownsData.forEach((data) => {
      const dropdownElement = document.createElement("app-dropdown");
      dropdownElement.setAttribute("title-dropdown", data["title-dropdown"]);
      dropdownElement.setAttribute(
        "content-dropdown",
        data["content-dropdown"]
      );
      container.appendChild(dropdownElement);
    });
  }

  async _configureDestinationSlider() {
    const sliderElement = this.querySelector('app-slider-opacity');
    if (!sliderElement) {
      console.error('AppBoletosAutobusMonterrey: app-slider-opacity element not found.');
      return;
    }

    try {
      const response = await fetch(
        "../src/data/card-opacity-destinations.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error loading destination slider data! status: ${response.status}`);
      }
      const destinationsData = await response.json();
      
      sliderElement.setAttribute('destinations-data', JSON.stringify(destinationsData));
      
    } catch (error) {
      console.error('AppBoletosAutobusMonterrey: Error loading or setting data for destination slider:', error);
      sliderElement.innerHTML = '<p style="color: red; text-align: center;">Could not load destination slider.</p>';
    }
  }

  openMultiImageModal(itemData) {
    const modal = this.querySelector('app-modal-multi-image');
    if (!modal) {
        console.error('AppBoletosAutobusMonterrey: app-modal-multi-image element not found.');
        return;
    }

    modal.setAttribute('modal-title', itemData.text || 'Detalles del Lugar');

    modal.setAttribute('content-title', itemData.title || ''); 
    modal.setAttribute('content-description', itemData.description || ''); 

    modal.setAttribute('image-1', itemData.backgroundImage || '');
    modal.setAttribute('alt-1', `Imagen principal de ${itemData.text || 'lugar'}`);

    modal.setAttribute('image-2', itemData.image2 || '');
    modal.setAttribute('alt-2', `Imagen adicional 1 de ${itemData.text || 'lugar'}`);

    modal.setAttribute('image-3', itemData.image3 || '');
    modal.setAttribute('alt-3', `Imagen adicional 2 de ${itemData.text || 'lugar'}`);

    modal.setAttribute('image-4', itemData.image4 || '');
    modal.setAttribute('alt-4', `Imagen adicional 3 de ${itemData.text || 'lugar'}`);

    if (typeof modal.openModal === 'function') {
        modal.openModal();
    } else if (typeof modal.open === 'function') {
        modal.open();
    } else if (typeof modal.show === 'function') {
        modal.show();
    } else {
        console.warn('AppBoletosAutobusMonterrey: app-modal-multi-image necesita un método openModal(), open() o show(). Alternativamente, podría usar un atributo como "opened" para controlar la visibilidad.');
      
    }
  }
}
customElements.define(
  "layout-boletos-de-autobus-monterrey",
  AppBoletosAutobusMonterrey
);

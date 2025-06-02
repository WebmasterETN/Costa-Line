/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-card-text.js";
import "../components/app-map.js";
import "../components/app-card-title-icon.js"; 

class LayoutDestinos extends HTMLElement {
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

        <app-map></app-map>

        <section class="__section __section__quest-shop-tickets">
            <app-section-title section-title="¿Dónde puedo comprar Boletos de autobús en ETN Turistar?"></app-section-title>
            <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
            <article class="__cards-text-container" id="grid-cards-container">
                <!-- generate the cards dynamically here -->
            </article>
        </section>
        
        <section class="__section __section__main-destinations">
            <app-section-title section-title="Principales destinos de ETN Turistar"></app-section-title>
            <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
            <article class="__icons-title-cards-container" id="title-icon-cards-container">
                      <!-- Contenedor para las nuevas tarjetas con título e icono -->
            </article>
        </section>
       
        <section class="__section __section__schedules">
            <app-section-title section-title="Horarios flexibles y adaptados a tu itinerario"></app-section-title>
            <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
            <article class="__icons-title-cards-horarios-container" id="title-icon-cards-horarios-container">
                      <!-- Contenedor para las nuevas tarjetas con título e icono -->
            </article>
            <p class="__paragraph-left">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
        </section>

        <section class="__section __section__rates">
            <app-section-title section-title="Tarifas competitivas: viajar con confort sin comprometer tu presupuesto"></app-section-title>
            <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
                <article class="__icons-title-cards-rates-container" id="title-icon-cards-rates-container">
                      <!-- Contenedor para las nuevas tarjetas con título e icono -->
            </article>
        </section>

        <section class="__section __section__confort">
            <app-section-title section-title="Confort y seguridad en cada kilómetro"></app-section-title>
            <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
            <article class="__icons-title-cards-confort-container" id="title-icon-cards-confort-container">
                      <!-- Contenedor para las nuevas tarjetas con título e icono -->
            </article>
        </section>
    `;
    this.loadAndRenderCardsText();
    this.loadAndRenderTitleIconCards(); 
    this.loadAndRenderTitleIconHorariosCards();
    this.loadAndRenderTitleIconRatesCards();
    this.loadAndRenderTitleIconConfortCards();
  }

  async loadAndRenderCardsText() {
    const cardsContainer = this.querySelector("#grid-cards-container");
    if (!cardsContainer) {
        console.error('El contenedor con ID "grid-cards-container" no fue encontrado.');
        return;
    }
    try {
        const responseCardsText = await fetch("../src/data/card-text-data.json");
        if (!responseCardsText.ok) {
            throw new Error(`Error HTTP al cargar card-text-data.json: ${responseCardsText.status}`);
        }
        const cardsTextData = await responseCardsText.json();
        this.renderCardsText(cardsTextData, cardsContainer);
        console.log('Datos de tarjetas cargados y renderizados correctamente.');
    } catch (error) {
        console.error('Error al cargar o renderizar los datos de tarjetas:', error);
        cardsContainer.innerHTML = '<p>Error al cargar la información de las tarjetas.</p>';
    }
  }

  renderCardsText(cardsTextData, targetContainer) {
    if (!targetContainer) {
      console.error("Error en renderCardsText: El contenedor de destino no es válido o no fue proporcionado.");
      return;
    }
    if (
      !cardsTextData ||
      !Array.isArray(cardsTextData) ||
      cardsTextData.length === 0
    ) {
      console.error(
        "No se pudieron cargar los datos para las cards, están vacíos o el formato es incorrecto."
      );
      targetContainer.innerHTML =
        "<p>No hay datos disponibles para mostrar las cards.</p>";
      return;
    }

    cardsTextData.forEach((data) => {
        const cardElement = document.createElement("app-card-text");
        if (data.title) {
            cardElement.setAttribute("title", data.title);
        }
        if (data.description) {
            cardElement.setAttribute("description", data.description);
        }
        if (data.width) {
            cardElement.setAttribute("card-width", data.width);
        }
        if (data.height) {
            cardElement.setAttribute("card-height", data.height);
        }
        targetContainer.appendChild(cardElement);
    });
  }

  async loadAndRenderTitleIconCards() {
    try {
      const response = await fetch("../src/data/card-title-icon.json"); // Ruta al nuevo JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      this.renderTitleIconCards(cardsData);
    } catch (error) {
      console.error("Error al cargar o parsear card-title-icon.json:", error);
      const container = this.querySelector('#title-icon-cards-container');
      if (container) {
        container.innerHTML = "<p>Error al cargar la información de las tarjetas.</p>";
      }
    }
  }

  renderTitleIconCards(cardsData) {
    const container = this.querySelector('#title-icon-cards-container');
    if (!container) {
      console.error('El contenedor #title-icon-cards-container no fue encontrado.');
      return;
    }
    container.innerHTML = ''; // Limpiar contenido previo

    cardsData.forEach(data => {
      const cardElement = document.createElement('app-card-title-icon');
      cardElement.setAttribute('card-title', data.cardTitle);
      cardElement.setAttribute('card-content', data.cardContent);
      cardElement.setAttribute('card-icon', data.cardIcon); // Pasar la cadena SVG
      container.appendChild(cardElement);
    });
  }
  async loadAndRenderTitleIconHorariosCards() {
    try {
      const response = await fetch("../src/data/card-title-icon-horario.json"); // Ruta al nuevo JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      this.renderTitleIconCardsHorarios(cardsData);
    } catch (error) {
      console.error("Error al cargar o parsear card-title-icon.json:", error);
      const container = this.querySelector('#title-icon-cards-horarios-container');
      if (container) {
        container.innerHTML = "<p>Error al cargar la información de las tarjetas.</p>";
      }
    }
  }

  renderTitleIconCardsHorarios(cardsData) {
    const container = this.querySelector('#title-icon-cards-horarios-container');
    if (!container) {
      console.error('El contenedor #title-icon-cards-container no fue encontrado.');
      return;
    }
    container.innerHTML = ''; // Limpiar contenido previo

    cardsData.forEach(data => {
      const cardElement = document.createElement('app-card-title-icon');
      cardElement.setAttribute('card-title', data.cardTitle);
      cardElement.setAttribute('card-content', data.cardContent);
      cardElement.setAttribute('card-icon', data.cardIcon); // Pasar la cadena SVG
      container.appendChild(cardElement);
    });
  }

   async loadAndRenderTitleIconRatesCards() {
    try {
      const response = await fetch("../src/data/card-title-icon-rates.json"); // Ruta al nuevo JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      this.renderTitleIconCardsRates(cardsData);
    } catch (error) {
      console.error("Error al cargar o parsear card-title-icon.json:", error);
      const container = this.querySelector('#title-icon-cards-rates-container');
      if (container) {
        container.innerHTML = "<p>Error al cargar la información de las tarjetas.</p>";
      }
    }
  }

  renderTitleIconCardsRates(cardsData) {
    const container = this.querySelector('#title-icon-cards-rates-container');
    if (!container) {
      console.error('El contenedor #title-icon-cards-container no fue encontrado.');
      return;
    }
    container.innerHTML = ''; // Limpiar contenido previo

    cardsData.forEach(data => {
      const cardElement = document.createElement('app-card-title-icon');
      cardElement.setAttribute('card-title', data.cardTitle);
      cardElement.setAttribute('card-content', data.cardContent);
      cardElement.setAttribute('card-icon', data.cardIcon); // Pasar la cadena SVG
      container.appendChild(cardElement);
    });
  }

  async loadAndRenderTitleIconConfortCards() {
    try {
      const response = await fetch("../src/data/card-title-icon-confort.json"); // Ruta al nuevo JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      this.renderTitleIconCardsConfort(cardsData);
    } catch (error) {
      console.error("Error al cargar o parsear card-title-icon.json:", error);
      const container = this.querySelector('#title-icon-cards-confort-container');
      if (container) {
        container.innerHTML = "<p>Error al cargar la información de las tarjetas.</p>";
      }
    }
  }

  renderTitleIconCardsConfort(cardsData) {
    const container = this.querySelector('#title-icon-cards-confort-container');
    if (!container) {
      console.error('El contenedor #title-icon-cards-container no fue encontrado.');
      return;
    }
    container.innerHTML = ''; // Limpiar contenido previo

    cardsData.forEach(data => {
      const cardElement = document.createElement('app-card-title-icon');
      cardElement.setAttribute('card-title', data.cardTitle);
      cardElement.setAttribute('card-content', data.cardContent);
      cardElement.setAttribute('card-icon', data.cardIcon); // Pasar la cadena SVG
      container.appendChild(cardElement);
    });
  }
}

customElements.define('layout-destinos', LayoutDestinos);
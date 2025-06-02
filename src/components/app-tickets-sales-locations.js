import "../components/app-section-title.js";
import "../components/app-cards-title-img-text.js";

class AppTicketsSalesLocations extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <section class="__section-tickets-sales-locations">
        <app-section-title section-title="¿Dónde puedo comprar boletos de autobús ETN Turistar?"></app-section-title>
        <article class="__article-tickets-sales-locations">
          <h3 class="__subtitle">Compra boletos de autobús ETN Turistar de manera fácil y segura</h3>
          <div class="__cards-container">
            <!-- Las tarjetas se insertarán aquí dinámicamente -->
          </div>
        </article>
      </section>
    `;
    await this.loadAndRenderCards();
  }

  async loadAndRenderCards() {
    try {
      const response = await fetch("./src/data/tickets-cards-data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      this.renderCards(cardsData);
    } catch (error) {
      console.error("Error al cargar los datos de las tarjetas:", error);
      const container = this.querySelector(".__cards-container");
      if (container) {
        container.innerHTML =
          "<p>Error al cargar el contenido. Por favor, inténtalo más tarde.</p>";
      }
    }
  }

  renderCards(cardsDataToRender) {
    const container = this.querySelector(".__cards-container");
    if (!container) return;

    cardsDataToRender.forEach((data) => {
      const cardElement = document.createElement("app-cards-title-img-text");
      cardElement.setAttribute("logo-url", data.logoUrl);
      cardElement.setAttribute("bg-image-url", data.backgroundImageUrl);
      cardElement.setAttribute("card-text", data.text);
      cardElement.setAttribute("href-url", data.href);
      cardElement.setAttribute("link-label", data.ariaLabel); // <-- aquí el cambio
      cardElement.setAttribute("logo-alt-text", data.logoAlt);
      cardElement.setAttribute("card-img-alt-text", data.cardImageAlt);
      container.appendChild(cardElement);
    });
  }
}
customElements.define("app-tickets-sales-locations", AppTicketsSalesLocations);

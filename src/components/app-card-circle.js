class AppCardCircle extends HTMLElement {
  static get observedAttributes() {
    return ["cards-data-src"];
  }

  connectedCallback() {
    const src = this.getAttribute("cards-data-src");
    if (src) {
      this._loadAndRenderCards(src);
    } else {
      // Fallback for single hardcoded card if no src is provided
      this.innerHTML = `
        <div class="card-circle">
            <div class="card-circle__overlay color-primary">
                <img src="../../src/assets/img/paqueteria/joyas.webp" alt="Dinero en efectivo" class="card-circle__overlay__image">
            </div>
            <div class="card-circle__text">
                <p class="card-circle__text__content">Dinero en efectivo</p>
            </div>
        </div>
      `;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "cards-data-src" && oldValue !== newValue) {
      this._loadAndRenderCards(newValue);
    }
  }

  async _loadAndRenderCards(jsonPath) {
    // Remove the container class from the host element, if it exists, to avoid conflicts.
    this.classList.remove("app-card-circle-container");
    this.innerHTML = `<p>Cargando tarjetas...</p>`; // Initial loading message

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      if (!cardsData || !Array.isArray(cardsData) || cardsData.length === 0) {
        this.innerHTML = "<p>No hay tarjetas para mostrar.</p>";
        return;
      }

      let cardsHTML = "";
      cardsData.forEach((card, index) => {
        const colorClass = index % 2 === 0 ? "color-primary" : "color-secondary"; // Alternating colors
        cardsHTML += `
          <div class="card-circle">
              <div class="card-circle__overlay ${colorClass}">
                  <img src="${card.imageSrc}" alt="${card.imageAlt || ''}" class="card-circle__overlay__image">
              </div>
              <div class="card-circle__text">
                  <p class="card-circle__text__content">${card.text}</p>
              </div>
          </div>
        `;
      });
      this.innerHTML = `
        <div class="app-card-circle-container">
          ${cardsHTML}
        </div>
      `;
    } catch (error) {
      console.error(`Error al cargar tarjetas desde ${jsonPath}:`, error);
      this.innerHTML = "<p>Error al cargar las tarjetas.</p>";
    }
  }
}
customElements.define("app-card-circle", AppCardCircle);

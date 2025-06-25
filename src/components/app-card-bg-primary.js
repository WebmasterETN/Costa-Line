class AppCardBgPrimary extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["src"];
  }

  connectedCallback() {
    const src = this.getAttribute("src");
    if (src) {
      this._loadAndRenderCards(src);
    } else {
      this._renderSingleCard();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      this._loadAndRenderCards(newValue);
    }
  }

  _renderSingleCard() {
    this.innerHTML = `
      <div class="cards-scroll-wrapper">
        <div class="cards-grid-container">
          <div class="card-no-border card-color-primary">
            <div class="overlay card-color-primary">
              <img src="../src/assets/img/paqueteria/pack-urgente.webp" alt="Paquete urgente" class="card-image-img">
            </div>
            <div class="text-card">Aprovecha la siguiente corrida disponible.</div>
          </div>
        </div>
      </div>
    `;
  }

  async _loadAndRenderCards(jsonPath) {
    this.innerHTML = `
      <div class="cards-scroll-wrapper">
        <div class="cards-grid-container"><p>Cargando tarjetas...</p></div>
      </div>
    `;
    const gridContainer = this.querySelector(".cards-grid-container");

    try {
      const response = await fetch(jsonPath);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const cardsData = await response.json();

      gridContainer.innerHTML = cardsData
        .map((card, index) => {
          const colorClass = "card-color-primary"; // Siempre usa el color primario
          return `
          <div class="card-no-border ${colorClass}">
            <div class="overlay ${colorClass}">
              <img src="${card.imageSrc}" alt="${
            card.imageAlt || ""
          }" class="card-image-img">
            </div>
            <div class="text-card">${card.text}</div>
          </div>
        `;
        })
        .join("");
    } catch (error) {
      console.error(`Error loading cards from ${jsonPath}:`, error);
      gridContainer.innerHTML = "<p>Error al cargar tarjetas.</p>";
    }
  }
}

customElements.define("app-card-bg-primary", AppCardBgPrimary);

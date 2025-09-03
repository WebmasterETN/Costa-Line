class AppCardImageTagText extends HTMLElement {
  static get observedAttributes() {
    return ["data-src"];
  }

  connectedCallback() {
    const src = this.getAttribute("data-src");
    if (src) {
      this._loadAndRender(src);
    } else {
      this.innerHTML =
        '<div class="__cards-container"><p>Error: El atributo data-src es requerido.</p></div>';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-src" && oldValue !== newValue) {
      this._loadAndRender(newValue);
    }
  }

  async _loadAndRender(src) {
    this.innerHTML = '<div class="__cards-container"><p>Cargando...</p></div>';
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const cardsData = await response.json();

      if (!cardsData || !Array.isArray(cardsData)) {
        throw new Error(
          "Formato de datos inválido. Se esperaba un array de tarjetas."
        );
      }

      const cardsHTML = cardsData.map((card) => this._getCardHTML(card)).join("");
      this.innerHTML = `<article class="__cards-container">${cardsHTML}</article>`;
    } catch (error) {
      console.error(`Error al cargar las tarjetas desde ${src}:`, error);
      this.innerHTML =
        '<div class="__cards-container"><p>Error al cargar el contenido.</p></div>';
    }
  }

  _getCardHTML(card) {
    const { imageSrc, imageAlt, tag, text } = card;
    return `
      <div class="card-itt">
          <div class="card-itt__image-container">
              <img src="${imageSrc || ""}" class="card-itt__img" alt="${
      imageAlt || "Imagen de la tarjeta"
    }" loading="lazy" />
              <p class="card-itt__tag">${tag || "Sin etiqueta"}</p>
          </div>
          <div class="card-itt__text-container">
            <p class="card-itt__text-tag">${tag || "Sin etiqueta"}</p>
            <p class="card-itt__text">${text || "Sin descripción"}</p>
          </div>
      </div>
    `;
  }
}
customElements.define("app-card-image-tag-text", AppCardImageTagText);

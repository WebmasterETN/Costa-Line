class AppCardBgSecondary extends HTMLElement {
  static get observedAttributes() {
    return ['cards-data-src'];
  }

  async connectedCallback() {
    const src = this.getAttribute('cards-data-src');
    if (src) {
      await this._loadAndRenderCards(src);
    }
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'cards-data-src' && oldValue !== newValue) {
      await this._loadAndRenderCards(newValue);
    }
  }

  async _loadAndRenderCards(src) {
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      this.innerHTML = this._render(cardsData);
    } catch (error) {
      console.error('Error loading or rendering secondary cards:', error);
      this.innerHTML = '<p>Error al cargar las tarjetas.</p>';
    }
  }

  _render(cardsData) {
    const cardsHTML = cardsData.map(card => `
      <div class="card-secondary">
        <div class="overlay-secondary">
          <img src="${card.imageSrc}" alt="${card.altText}" class="card-image-img-secondary">
        </div>
        <div class="text-card-secondary">${card.text}</div>
      </div>
    `).join('');

    return `
      <div class="cards-grid-secondary-container">
        ${cardsHTML}
      </div>
    `;
  }
}

customElements.define("app-card-bg-secondary", AppCardBgSecondary);
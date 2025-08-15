class AppCardLeftDescription extends HTMLElement {
  static get observedAttributes() {
    return ['src'];
  }

  connectedCallback() {
    const src = this.getAttribute('src');
    if (src) {
      this._loadAndRenderCards(src);
    } else {
      this.innerHTML = this._getCardHTML({
        imageSrc: "../src/assets/img/autobuses/pantalla-autobus.webp",
        imageAlt: "Pantallas individuales",
        title: "Individual screens",
        description: "Individual screens with onboard entertainment to keep you company along the way."
      });
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && oldValue !== newValue) {
      this._loadAndRenderCards(newValue);
    }
  }

  async _loadAndRenderCards(jsonPath) {
    this.innerHTML = `<div class="card-left-container"><p>Loading special services...</p></div>`;
    const container = this.querySelector('.card-left-container');

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      if (!cardsData || !Array.isArray(cardsData)) {
        throw new Error('Invalid data format. Expected an array of cards.');
      }

      container.innerHTML = cardsData.map(card => this._getCardHTML(card)).join('');

    } catch (error) {
      console.error(`Error loading cards from ${jsonPath}:`, error);
      container.innerHTML = '<p>Error loading special services.</p>';
    }
  }

  _getCardHTML(card) {
    const { imageSrc, imageAlt, title, description } = card;
    return `
      <div class="card-left">
          <figure class="card-image">
              <img src="${imageSrc || ''}" alt="${imageAlt || ''}">
          </figure>
          <section class="card-content">
              <h2 class="title-card">${title || 'No title'}</h2>
              <p class="text-card">${description || 'No description'}</p>
          </section>
      </div>
    `;
  }
}

customElements.define("app-card-left-description", AppCardLeftDescription);

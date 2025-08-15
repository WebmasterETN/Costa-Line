class AppExploreSection extends HTMLElement {
  static get observedAttributes() {
    return ["cards-data"];
  }

  connectedCallback() {
    // Prepara el contenedor, puede estar vacío o mostrar un estado de carga.
    this.innerHTML = `<article class="__explore-section"></article>`;
    // Si el atributo ya existe cuando el componente se conecta, renderiza los datos.
    if (this.hasAttribute("cards-data")) {
      this._render();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Vuelve a renderizar cuando el atributo 'cards-data' cambia.
    if (name === "cards-data" && newValue && oldValue !== newValue) {
      this._render();
    }
  }

  _render() {
    const cardsDataString = this.getAttribute("cards-data");
    const container = this.querySelector(".__explore-section");

    if (!cardsDataString) {
      container.innerHTML = ""; // Limpia el contenido si se elimina el atributo.
      return;
    }

    try {
      const cards = JSON.parse(cardsDataString);
      container.innerHTML = this.renderCards(cards);
    } catch (e) {
      console.error("Error al parsear cards-data en app-explore-section:", e);
      container.innerHTML = "<p>Error al mostrar los datos.</p>";
    }
  }

  renderCards(cards) {
    return cards.map(card => `
        <div class="explore-card">
          <img class="__img-card" src="${card.image}" alt="${card.title}" title="${card.title}" loading="lazy" width="427" height="259">

          <div class="__description-card">
            <h3 class="__title-card">${card.title}</h3>
            <p class="__paragraph-card">${card.description}</p>
          </div>
        </div>
      `).join('');
  }
}
customElements.define("app-explore-section", AppExploreSection);
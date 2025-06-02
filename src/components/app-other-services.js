class AppOtherServices extends HTMLElement {
  async connectedCallback() {
    await this._initializeData();
  }

  async _loadAndParseJson(srcAttributeName, directAttributeName, defaultValue = "[]") {
    const srcPath = this.getAttribute(srcAttributeName);
    let data;

    if (srcPath) {
      try {
        const response = await fetch(srcPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} for ${srcPath}`);
        }
        data = await response.json();
      } catch (error) {
        console.error(`Error loading data from ${srcPath}:`, error);
        const directDataAttr = this.getAttribute(directAttributeName) || defaultValue;
        try {
          data = JSON.parse(directDataAttr);
        } catch (parseError) {
          console.error(`Error parsing fallback data from attribute ${directAttributeName}:`, parseError);
          data = JSON.parse(defaultValue);
        }
      }
    } else {
      const directDataAttr = this.getAttribute(directAttributeName) || defaultValue;
      try {
        data = JSON.parse(directDataAttr);
      } catch (parseError) {
        console.error(`Error parsing data from attribute ${directAttributeName}:`, parseError);
        data = JSON.parse(defaultValue);
      }
    }
    return data;
  }

  async _initializeData() {
    this.cards = await this._loadAndParseJson("cards-data-src", "cards-data", "[]");
    this.titles = await this._loadAndParseJson("title-data-src", "title-data", "[]");
    // Generate a unique ID for the section title if not provided
    this.sectionTitleId =
      this.getAttribute("section-title-id") ||
      `other-services-title-${Math.random().toString(36).substring(2, 9)}`;

    this._render();
  }

  _render() {
    const currentTitles = this.titles || [];
    const currentCards = this.cards || [];

    this.innerHTML = `
      <section class="section__other-services" aria-labelledby="${this.sectionTitleId}">
          <div class="section__other-services__container">
            <app-section-title section-title="${
              currentTitles[0]?.title || "Otros Servicios"
            }" section-title-id="${this.sectionTitleId}"></app-section-title>
            <div class="section__other-services__container__cards" role="group">
                ${this.renderCards(currentCards)}
            </div>
          </div>
      </section>
    `;
  }

  renderCards(cards) {
    return cards
      .map(
        (card) => `
        <a href="${card.href || "#"}" 
          class="section__other-services__container__card" 
          role="button" 
          aria-label="${card.title || "Título por defecto"}" 
          tabindex="0" 
          target="_blank" 
          title="${card.title || "Título por defecto"}" 
          rel="noopener noreferrer">
          <img src="${
            card.imageSrc || "../src/assets/other-services-img/default-image.webp"
          }" alt="${
          card.imageAlt || "Descripción de la imagen"
        }" class="section__other-services__container__card__img" loading="lazy" width="453" height="453">
        </a>
      `
      )
      .join("");
  }
}

customElements.define("app-other-services", AppOtherServices);

class AppCardsTextImage extends HTMLElement {
  connectedCallback() {
    const sectionDescription = this.getAttribute("title-text");
    const sectionLogo = this.getAttribute("icon-src");

    let logoHTML = "";
    if (sectionLogo) {
      logoHTML = `
          <div class="__text-image__logo">
              ${sectionLogo}
          </div>
      `;
    }

    let descriptionHTML = "";
    if (sectionDescription) {
      descriptionHTML = `
          <div class="__text-image__description">
              <p>${sectionDescription}</p>
          </div>
      `;
    }

    if (logoHTML || descriptionHTML) {
      this.innerHTML = `
        <div class="__text-image">
            ${logoHTML}
            ${descriptionHTML}
        </div>     
      `;
    } else {
      this.innerHTML = "";
    }
  }
}

customElements.define("app-cards-text-image", AppCardsTextImage);

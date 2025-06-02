class AppCardsTitleImgText extends HTMLElement {
  static get observedAttributes() {
    return [
      "logo-url",
      "bg-image-url",
      "card-text",
      "href-url",
      "link-label", // Cambiado aquí
      "logo-alt-text",
      "card-img-alt-text",
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const logoUrl = this.getAttribute("logo-url") || " ";
    const bgImageUrl = this.getAttribute("bg-image-url") || "";
    const cardText = this.getAttribute("card-text") || "";
    const hrefUrl = this.getAttribute("href-url") || "#";
    const linkLabel = this.getAttribute("link-label") || "Card Link"; // Cambiado aquí
    const logoAltText = this.getAttribute("logo-alt-text") || "Card Logo";
    const cardImgAltText =
      this.getAttribute("card-img-alt-text") || "Card Background Image";

    this.innerHTML = `
        <a class="__card" href="${hrefUrl}" target="_blank" rel="noopener noreferrer" aria-label="${linkLabel}">
            <div class="__card-logo">
                <img src="${logoUrl}" alt="${logoAltText}" class="__logo" loading="lazy" width="1" height="1">
            </div>
            <img src="${bgImageUrl}" alt="${cardImgAltText}" class="__img-card" loading="lazy" width="1" height="1">
            <div class="__card-text">
                <p class="__text-card">${cardText}</p>
            </div>
        </a>
    `;
  }
}
customElements.define("app-cards-title-img-text", AppCardsTitleImgText);

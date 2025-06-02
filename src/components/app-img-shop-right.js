class AppImgShopRight extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute('image-src');
    const altText = this.getAttribute('alt-text');
    const cardTitle = this.getAttribute('card-title');
    const cardLink = this.getAttribute('card-link');

    this.innerHTML = `
      <a href="${cardLink}" class="contact-card">
        <div class="contact-card">
          <h3>${cardTitle}</h3>
          <div class="image-container-right">
            <img src="${imgSrc}" alt="${altText}" />
          </div>
        </div>
      </a>
        `;
  }
}

customElements.define("app-img-shop-right", AppImgShopRight);

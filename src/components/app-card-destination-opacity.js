class AppCardDestinationOpacity extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute('image-src') || 'src/assets/img/destinos-img/default.webp';
    const imgAlt = this.getAttribute('image-alt') || 'Imagen de destino';
    const destinationName = this.getAttribute('destination-name') || 'Nombre del Destino';
    const destinationTagline = this.getAttribute('destination-tagline') || 'Un eslogan atractivo aquí.';
    const buttonText = this.getAttribute('button-text') || 'Ver Destino';
    const buttonLink = this.getAttribute('button-link') || '#';

    this.innerHTML = `
              <div class="card-destination">
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <div class="overlay"></div>
                    <div class="card-info">
                        <p class="card-text">
                        <span class="icon-pin-ubicacion"></span>
                        Destino<br>
                        ${destinationName}<br>
                        "${destinationTagline}"
                        </p>
                    </div>
                    <a href="${buttonLink}" class="btn-destination">${buttonText}</a>
              </div>

          `;
  }
}

// Corrected custom element name for consistency
customElements.define(
  "app-card-destination-opacity",
  AppCardDestinationOpacity
);

class AppModalImage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', (e) => {
      if (e.target === this && this.hasAttribute('opened')) {
        this.closeModal();
      }
    });
  }

  openModal(data) {
    this.innerHTML = `
      <div class="app-modal-image-container">
        <button class="app-modal-image-close-button" aria-label="Cerrar modal">&times;</button>
        <h2 class="__title">${data.title || 'Detalles'}</h2>
        <div class="app-modal-image-content">
          <div class="app-modal-image">
            <img src="${data.imageSrc || 'src/assets/img/placeholder.png'}" alt="${data.title || 'Imagen descriptiva'}">
          </div>
          <div class="app-modal-image-text">
            <p class="__text__description">${data.description || 'No hay descripción disponible.'}</p>
          </div>
        </div>
      </div>
    `;

    const closeButton = this.querySelector('.app-modal-image-close-button');
    if (closeButton) {
      closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeModal();
      });
    }
    this.setAttribute('opened', '');
    document.body.style.overflow = 'hidden'; 
  }

  closeModal() {
    this.removeAttribute('opened');
    this.innerHTML = '';
    document.body.style.overflow = ''; 
  }
}

customElements.define("app-modal-image", AppModalImage);

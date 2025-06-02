class AppCardOpenModal extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute("card-title") || "Título predeterminado";
    this.modalDescription =
      this.getAttribute("card-modal-description") ||
      "Descripción detallada no disponible.";
    const cardImgSrc =
      this.getAttribute("card-image") ||
      "src/assets/img/platillos/dulce-gloria.png";
    this.modalImageSrc = this.getAttribute("card-modal-image") || cardImgSrc;

    const altText = this.getAttribute("card-alt") || "Imagen del platillo";
    const linkText = this.getAttribute("card-link-text") || "Ver más...";

    this.innerHTML = `
      <div class="__card-open-modal">
        <img src="${cardImgSrc}" alt="${altText}">
        <div class="__card-body">
          <a href="#" class="__card-text">${this.title} <br> ${linkText}</a>
        </div>
      </div>
    `;

    this._boundClickHandler = this.openAssociatedModal.bind(this);
    this.querySelector("a").addEventListener("click", this._boundClickHandler);
  }

  openAssociatedModal(event) {
    event.preventDefault();

    const modalElement = document.querySelector("app-modal-image");
    if (modalElement && typeof modalElement.openModal === "function") {
      modalElement.openModal({
        title: this.title,
        imageSrc: this.modalImageSrc,
        description: this.modalDescription,
      });
    } else {
      console.error(
        'Modal "app-modal-image" no encontrado o el método openModal no está disponible.'
      );
    }
  }

  disconnectedCallback() {
    const link = this.querySelector("a");
    if (link && this._boundClickHandler) {
      link.removeEventListener("click", this._boundClickHandler);
    }
  }
}

customElements.define("app-card-open-modal", AppCardOpenModal);

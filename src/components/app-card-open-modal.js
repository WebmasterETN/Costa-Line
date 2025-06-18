class AppCardOpenModal extends HTMLElement {
  constructor() {
    super();
    this._eventHandlers = []; // Para almacenar manejadores de eventos y facilitar su limpieza
  }

  async connectedCallback() {
    const cardsDataSrc = this.getAttribute("cards-data-src");

    if (cardsDataSrc) {
      await this._loadAndRenderMultipleCards(cardsDataSrc);
    } else {
      this._renderSingleCard();
    }
  }

  _renderSingleCard() {
    const title = this.getAttribute("card-title") || "Título predeterminado";
    const modalDescription = this.getAttribute("card-modal-description") || "Descripción detallada no disponible.";
    const cardImgSrc = this.getAttribute("card-image") || "src/assets/img/platillos/dulce-gloria.png";
    const modalImageSrc = this.getAttribute("card-modal-image") || cardImgSrc;
    const altText = this.getAttribute("card-alt") || "Imagen del platillo";
    const linkText = this.getAttribute("card-link-text") || "Ver más...";

    this.innerHTML = this._getCardHTML(title, cardImgSrc, altText, linkText, "single");

    const link = this.querySelector("a");
    if (link) {
      const modalData = { title, imageSrc: modalImageSrc, description: modalDescription };
      const handler = (event) => this._openAssociatedModal(event, modalData);
      link.addEventListener("click", handler);
      this._eventHandlers.push({ element: link, type: "click", handler });
    }
  }

  async _loadAndRenderMultipleCards(jsonPath) {
    this.innerHTML = ""; // Limpiar contenido actual
    let cardsData = []; // Almacenar datos para la delegación de eventos

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`Error HTTP al cargar ${jsonPath}: ${response.status}`);
      }
      cardsData = await response.json();

      if (!cardsData || !Array.isArray(cardsData) || cardsData.length === 0) {
        this.innerHTML = "<p>No hay platillos para mostrar.</p>";
        console.warn(`No se encontraron datos en ${jsonPath}`);
        return;
      }

      let allCardsHTML = "";
      cardsData.forEach((cardItem, index) => {
        const title = cardItem.title || "Título no disponible";
        const cardImgSrc = cardItem.imageSrc || "src/assets/img/platillos/default-card.png";
        const altText = cardItem.altText || title || "Platillo";
        const linkText = cardItem.linkText || "Ver más...";
        allCardsHTML += this._getCardHTML(title, cardImgSrc, altText, linkText, index.toString());
      });
      this.innerHTML = allCardsHTML;
      this.style.display = "contents"; // Para que las tarjetas fluyan correctamente en el layout del padre

      // Delegación de eventos en el componente anfitrión (this)
      const handler = (event) => {
        const clickedLink = event.target.closest(".__card-open-modal a");
        if (!clickedLink) return;

        const cardDiv = clickedLink.closest(".__card-open-modal");
        if (!cardDiv) return;
        
        const cardId = cardDiv.dataset.cardId;
        if (cardId === undefined) return;

        const cardIndex = parseInt(cardId, 10);
        const cardItem = cardsData[cardIndex];

        if (cardItem) {
          const modalData = {
            title: cardItem.title || "Título no disponible",
            imageSrc: cardItem.imageModal || cardItem.imageSrc || "src/assets/img/platillos/default-modal.png",
            description: cardItem.description || "Descripción no disponible.",
          };
          this._openAssociatedModal(event, modalData);
        }
      };
      this.addEventListener('click', handler);
      this._eventHandlers.push({ element: this, type: 'click', handler });

    } catch (error) {
      console.error(`Error al cargar o renderizar tarjetas desde ${jsonPath}:`, error);
      this.innerHTML = "<p>Error al cargar la información de los platillos.</p>";
    }
  }

  _getCardHTML(title, cardImgSrc, altText, linkText, cardId) {
    // cardId se usa para data-card-id para la delegación de eventos
    return `
      <div class="__card-open-modal" data-card-id="${cardId}">
        <img src="${cardImgSrc}" alt="${altText}">
        <div class="__card-body">
          <a href="#" class="__card-text">${title} <br> ${linkText}</a>
        </div>
      </div>
    `;
  }

  _openAssociatedModal(event, modalData) {
    event.preventDefault();
    const modalElement = document.querySelector("app-modal-image");
    if (modalElement && typeof modalElement.openModal === "function") {
      modalElement.openModal(modalData);
    } else {
      console.error(
        'Modal "app-modal-image" no encontrado o el método openModal no está disponible.'
      );
    }
  }
  
  disconnectedCallback() {
    // Limpiar todos los manejadores de eventos registrados
    this._eventHandlers.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this._eventHandlers = []; // Resetear la lista
  }
}

customElements.define("app-card-open-modal", AppCardOpenModal);

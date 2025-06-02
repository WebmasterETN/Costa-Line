class AppCardImage extends HTMLElement {
    constructor() {
        super();
        this._dataPopulated = false; // Flag to check if data was set programmatically
    }

    populateCard(data) {
      const cardTitle = data.title || "Título no disponible";
      const cardContent = data.content || "Contenido no disponible";
      const cardImage = data.image || ""; // Default to empty string if no image
      const cardImageAlt = data.alt || "Imagen de la tarjeta"; // Default alt text

      this.innerHTML = `
              <div class="card-image-container">
                <p class="card-image-title">${cardTitle}</p>
                <p class="card-image-content">${cardContent}</p>
                <img src="${cardImage}" alt="${cardImageAlt}" class="card-image-img">
              </div>
          `;
      this._dataPopulated = true;
    }

    connectedCallback() {
      // If populateCard hasn't been called, try to render from attributes
      if (!this._dataPopulated) {
        const cardTitle = this.getAttribute("card-title");
        const cardContent = this.getAttribute("card-content");
        const cardImage = this.getAttribute("card-image");
            
        // Only render from attributes if at least one key attribute is present
        if (cardTitle || cardContent || cardImage) {
            const cardImageAlt = this.getAttribute("card-alt") || "Imagen de la tarjeta";
            this.innerHTML = `
                <div class="card-image-container">
                    <p class="card-image-title">${cardTitle || "Título no disponible"}</p>
                    <p class="card-image-content">${cardContent || "Contenido no disponible"}</p>
                    <img src="${cardImage || ""}" alt="${cardImageAlt}" class="card-image-img">
                </div>
            `;
        }
      }
    }
  }
  
  customElements.define("app-card-image", AppCardImage);
  
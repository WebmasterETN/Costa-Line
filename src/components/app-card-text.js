class AppCardText extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title") || "Título predeterminado";
        const description = this.getAttribute("description") || "Descripción predeterminada";
        const cardWidth = this.getAttribute("card-width") || "auto"; // Valor por defecto 'auto'
        const cardHeight = this.getAttribute("card-height") || "auto"; // Valor por defecto 'auto'

        this.innerHTML = `
            <div class="_card-text" style="width: ${cardWidth}; height: ${cardHeight};">
                <h3 class="_card-text-title">${title}</h3>
                <p class="_card-text-description">${description}</p>
            </div>
        `;

        // Si prefieres no usar estilos inline, puedes hacer esto:
        // const cardDiv = this.querySelector('._card-text');
        // if (cardDiv) {
        //     cardDiv.style.width = cardWidth;
        //     cardDiv.style.height = cardHeight;
        // }
    }

    /**
     * Populates or updates the card's content from a data object.
     * This method expects a single object with 'title' and 'description' properties.
     * @param {object} data - The data object, e.g., { title: "Card Title", description: "Card description." }
     */
    contentCardsText(jsonData) {
        // Corrected selectors with '.' for class names
        const cardTitleElement = this.querySelector('._card-text-title');
        const cardDescriptionElement = this.querySelector('._card-text-description');

        if (!jsonData) {
          console.warn('AppCardsText: No se proporcionaron datos JSON a contentCardsText.');
          return;
        }

        // This method should handle a single data object for a single card.
        // If jsonData is an array, it's a misuse for this component's instance.
        // We'll log a warning and use the first item, or expect a single object.
        let dataToDisplay = jsonData;
        if (Array.isArray(jsonData)) {
          console.warn('AppCardsText: contentCardsText received an array. A single card instance should receive a single data object. Using the first item if available.');
          if (jsonData.length > 0) {
            dataToDisplay = jsonData[0];
          } else {
            console.warn('AppCardsText: contentCardsText received an empty array.');
            return;
          }
        }

        if (cardTitleElement) {
          cardTitleElement.textContent = dataToDisplay.title !== undefined ? dataToDisplay.title : (this.getAttribute("title") || "");
        } else {
          console.error('AppCardsText: _card-text-title element not found.');
        }

        if (cardDescriptionElement) {
          cardDescriptionElement.textContent = dataToDisplay.description !== undefined ? dataToDisplay.description : (this.getAttribute("description") || "");
        } else {
          console.error('AppCardsText: _card-text-description element not found.');
        }
    }
}
customElements.define("app-card-text", AppCardText);
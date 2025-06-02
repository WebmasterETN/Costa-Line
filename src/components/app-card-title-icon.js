class AppCardTitleIcon extends HTMLElement {
  connectedCallback() {
    const cardTitle = this.getAttribute('card-title') || 'Título no disponible';
    const cardContent = this.getAttribute('card-content') || 'Contenido no disponible.';
    let cardIconString = this.getAttribute('card-icon') || '';

    if (cardIconString.includes('&amp;lt;') || cardIconString.includes('&amp;gt;') || cardIconString.includes('&amp;quot;')) {
      const textarea = document.createElement('textarea');
      textarea.innerHTML = cardIconString; 
      cardIconString = textarea.value; 
    }

    this.innerHTML = `
        <div class="__card-title-icon">
            <h2 class="__card-title-icon__title">
                ${cardIconString}
                ${cardTitle}
                
            </h2>
            <p class="__card-title-icon__content">
                ${cardContent}
            </p>
        </div>
        `;
    const iconContainer = this.querySelector('.__card-title-icon__icon-container');

    if (iconContainer) {
      iconContainer.innerHTML = cardIconString;
    } else {
      console.error("Error: No se encontró el contenedor del ícono (.__card-title-icon__icon-container) en AppCardTitleIcon.");
    }
  }
}
customElements.define("app-card-title-icon", AppCardTitleIcon);

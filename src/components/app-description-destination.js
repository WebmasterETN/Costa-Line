class AppDescriptionDestination extends HTMLElement {
	connectedCallback() {
		const titleText = this.getAttribute("title-text") || "Aguascalientes";
		const paragraphText =
			this.getAttribute("paragraph-text") ||
			"Aguascalientes is a hidden gem in the heart of Mexico.";
		const imageData = this.getAttribute("image-data") || "[]";
		const images = JSON.parse(imageData);

		this.innerHTML = `
      <article class="__description-destination">
        <h3 class="__subtitle-section">${titleText}</h3>
        <div class="__destinations-scroll-wrapper">
          <div class="__list__destinations-images">
            ${this.renderDestinationsImages(images)}
          </div>
        </div>
        <p class="__paragraph-description">
          ${paragraphText}
        </p>
      </article>
    `;
	}

	renderDestinationsImages(images) {
		return images
			.map(
				(image) => `
          <div id="${image.id}" class="__item-image"><img class="__img-destination" src="${image.src}" alt="${image.alt}" title="${image.alt}" loading="lazy" width="427" height="285"></div>
        `
			)
			.join("");
	}
}
customElements.define("app-description-destination", AppDescriptionDestination);

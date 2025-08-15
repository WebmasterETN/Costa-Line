class AppDestinationsGridEnglish extends HTMLElement {
	connectedCallback() {
		const destinationsData = this.getAttribute("destinations") || "[]";
		const destinations = JSON.parse(destinationsData);
		const titleTextData = this.getAttribute("titlesText") || "[]";
		const titleTexts = JSON.parse(titleTextData);

		this.innerHTML = `
      <article class="__section__destinations">
        <h3 class="__destinations-title">Welcome to ETN.</h3>
        <p>Your journey through Mexico starts here.</p>
        
        <ul class="__destinations__list-grid">
          ${this.renderDestinations(destinations)}
        </ul>
      </article>
    `;
	}
	renderText(titleTexts) {
		return titleTexts
			.map(
				(titleText) => `
        <h2 class="section__destinatons__container__title">${
					titleText.title || "Conoce mas de nuestros destinos"
				}</h2>
        <p class="section__destinations__text">${
					titleText.text || "Elije el destino que mas te agrade para viajar"
				}</p>
      `
			)
			.join("");
	}

	renderDestinations(destinations) {
		return destinations
			.map(
				(destination) => `
          <li class="__item-grid" style="background-image: url('${
						destination.image
					}')">
            <a href="${
							destination.link || "../../boletos-de-autobus-a-monterrey.html"
						}"
              rel="noopener noreferrer"
              aria-label="Ir a ${destination.title}"
              title="Ir a ${destination.title}">
              <div class="__overlay-content">
                <h4>${destination.title}</h4>
                <p>${destination.content}</p>
              </div>
            </a>
          </li>
      `
			)
			.join("");
	}
}
customElements.define(
	"app-destinations-grid-english",
	AppDestinationsGridEnglish
);

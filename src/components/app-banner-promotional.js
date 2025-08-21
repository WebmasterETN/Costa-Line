class AppBannerPromotional extends HTMLElement {
	connectedCallback() {
		const desktopSrc = this.getAttribute("image-src");
		const tabletSrc = this.getAttribute("image-src-tablet");
		const mobileSrc = this.getAttribute("image-src-mobile");
		const imgAlt = this.getAttribute("image-alt") || "Banner promocional";
		const linkHref = this.getAttribute("link-href") || "#";

		if (!desktopSrc) {
			console.error(
				'AppBannerPromotional: El atributo "image-src" es obligatorio.'
			);
			this.innerHTML = ""; // Limpiar el componente si no se proporciona la imagen principal
			return;
		}

		this.innerHTML = `
      <a href="${linkHref}" class="banner-promotional-link" title="${imgAlt}">
        <picture>
          ${
						mobileSrc
							? `<source media="(max-width: 767px)" srcset="${mobileSrc}">`
							: ""
					}
          ${
						tabletSrc
							? `<source media="(max-width: 1023px)" srcset="${tabletSrc}">`
							: ""
					}
          <img src="${desktopSrc}" alt="${imgAlt}" class="banner-promotional-image" loading="lazy">
        </picture>
      </a>
    `;
	}
}
customElements.define("app-banner-promotional", AppBannerPromotional);

class AppBannerPromotional extends HTMLElement {
	connectedCallback() {
    const imgSrc = this.getAttribute('image-src') || '../../src/assets/img/banner/banner-viajero-protegido.webp';
    const linkHref = this.getAttribute('link-href') || '#';
    const imgAlt = this.getAttribute('image-alt') || 'Banner promocional';

		this.innerHTML = `
      <article class="__banner-promotional">
        <a href="${linkHref}" class="__banner-promotional__link" target="_blank" rel="noopener noreferrer" >
          <img src="${imgSrc}" alt="${imgAlt}" class="__banner-promotional__img" width="1900" height="520" loading="lazy" />
        </a>
      </article>
    `;
	}
}
customElements.define("app-banner-promotional", AppBannerPromotional);
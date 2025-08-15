class AppBannerImage extends HTMLElement {
	connectedCallback() {
    const imgSrc = this.getAttribute('image-src') || '../../src/assets/img/banner/banner-viajero-protegido.webp';
    const imgAlt = this.getAttribute('image-alt') || 'Banner promocional';

		this.innerHTML = `
      <article class="__banner-container">
        <img src="${imgSrc}" alt="${imgAlt}" title="${imgAlt}" class="__banner-img" width="1900" height="520" loading="lazy" />
      </article>
    `;
	}
}
customElements.define("app-banner-image", AppBannerImage);
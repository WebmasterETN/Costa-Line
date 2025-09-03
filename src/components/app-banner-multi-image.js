class AppBannerMultiImage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="__banner-multi-image">
        <a href="" class="__banner-multi-image__link" target="_blank" rel="noopener noreferrer" >
          <img src="../../src/assets/img/english/food/banner-food.webp" alt="" class="__banner-multi-image__img"  loading="lazy" />
        </a>
        <p class="__banner-promotional__text">Savor the essence of Mexico in every bite.</p>
      <article>
    `;
  }
}
customElements.define("app-banner-multi-image", AppBannerMultiImage

);

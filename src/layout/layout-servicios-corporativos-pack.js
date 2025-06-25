/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza-pack.js";
import "../components/app-banner-slider.js";
import "../components/app-section-title.js";
import "../js/slick.js?v=1.0.0";
import "../components/app-card-bg-primary.js";
import "../components/app-card-small-list.js";
import "../components/app-header-pack-multienlace.js";
import'../components/app-card-bg-secondary.js';


class LayoutServiciosCorporativosPack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/paqueteria/servicios-c-banner.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
               
                ]'
            >
            </app-banner-slider>
            <section class="__section__pack-description">
                <app-section-title section-title="Paquetería para negocios: rápida y efectiva"></app-section-title>
                <h3 class="__subtitle">Ofrecemos servicios especiales de envíos de paquetería para empresas:</h3>
                <app-card-bg-secondary cards-data-src="../src/data/pack-multienlace/servicios-corporativos.json"></app-card-bg-secondary>
               
            </section>

        `;
  }
}
customElements.define(
  "layout-servicios-corporativos-pack",
  LayoutServiciosCorporativosPack
);

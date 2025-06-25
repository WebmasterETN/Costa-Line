/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-header-pack-multienlace.js";
import "../components/app-cotiza-pack.js";
import "../components/app-banner-slider.js";
import "../components/app-section-title.js";
import "../components/app-map-pack.js";
import "../components/app-footer-pack-multienlace.js";
import "../js/slick.js?v=1.0.0";

class LayoutTerminalesPack extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
                slides-data='[
                  {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/ofertas-1-click.png","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>
            <app-section-title section-title="Cotiza tu paquete"></app-section-title>

        <app-map-pack></app-map-pack>
    `;
  }
}

customElements.define("layout-terminales-pack", LayoutTerminalesPack);
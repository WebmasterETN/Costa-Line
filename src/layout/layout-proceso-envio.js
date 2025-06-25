/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-section-title.js";
import "../components/app-cotizador-pack.js";
import "../components/app-header-pack-multienlace.js";
import "../components/app-footer-pack-multienlace.js";
import "../components/app-time-line-packm.js";
import "../js/slick.js?v=1.0.0";

class LayoutProcesoEnvio extends HTMLElement {
  connectedCallback() {
    this.innerHTML =`
            <app-cotiza></app-cotiza>

            <app-banner-slider
                slides-data='[
                  {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/ofertas-1-click.png","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>
            <app-section-title section-title="Proceso de envío."></app-section-title>

            <section class="__description">
              <p class="__description-text">
                En <b>Pack Multienclace</b>, hemos simplificado el proceso de envío de paquetes para que sea rápido y sin complicaciones. Sigue estos sencillos pasos para asegurarte de que tu paquete llegue a su destino de manera eficiente y segura:
              </p>
              <article class="__cards-image">
                <app-time-line-packm></app-time-line-packm>
              </article>
            </section>
    `;
  }
}

customElements.define("layout-proceso-envio", LayoutProcesoEnvio);
/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-dropdown.js"; // Importar el componente dropdown
import "../js/slick.js?v=1.0.2";

class PagePreguntasFrecuentes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

             <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/home-doters-web.webp","mediumImage": "../src/assets/img/banner/tablet/home-doters-tablet.webp", "smallImage": "../src/assets/img/banner/movil/home-doters-mobile.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/web/home-pago-web.webp", "mediumImage": "../src/assets/img/banner/tablet/home-pago-tablet.webp","smallImage": "../src/assets/img/banner/movil/home-pago-mobile.webp", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/web/home-verano-web.webp", "mediumImage": "../src/assets/img/banner/tablet/home-verano-tablet.webp","smallImage": "../src/assets/img/banner/movil/home-verano-mobile.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            <section class="__section __section__FATQs">
                <app-section-title section-title="Preguntas frecuentes"></app-section-title>
               <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-costa-line.json"></app-dropdown>
                </article>
            </section>
        `;
  }
}
customElements.define("page-preguntas-frecuentes", PagePreguntasFrecuentes);

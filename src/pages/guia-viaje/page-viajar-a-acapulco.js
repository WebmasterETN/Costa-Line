import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraAcapulco extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-acapulco.webp","mediumImage": "../src/assets/img/banner/tablet/banner-acapulco.webp", "smallImage": "../src/assets/img/banner/movil/banner-acapulco.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Qué Ver y Hacer en Acapulco: Imprescindibles en tu Recorrido"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Deleitate con la gastronomia de Acapulco"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Consejos Prácticos para tu Viaje a Acapulco"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="¿Listo para Conocer Acapulco?"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Preguntas Frecuentes sobre Viajar a Acapulco"></app-section-title>
            </section>


        `;
  }
}
customElements.define("page-viajar-a-acapulco", PageViajaraAcapulco);

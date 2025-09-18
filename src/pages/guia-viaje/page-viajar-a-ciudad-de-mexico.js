import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraCiudadDeMexico extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-ciudad-de-mexico.webp","mediumImage": "../src/assets/img/banner/tablet/banner-ciudad-de-mexico.webp", "smallImage": "../src/assets/img/banner/movil/banner-ciudad-de-mexico.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Qué Ver y Hacer en Ciudad de México: Imprescindibles en tu Recorrido"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Deleitate con la gastronomía de Ciudad de México"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Consejos Prácticos para tu Viaje a Ciudad de México"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="¿Listo para Conocer Ciudad de México?"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Preguntas Frecuentes sobre Viajar a Ciudad de México"></app-section-title>
            </section>


        `;
  }
}
customElements.define(
  "page-viajar-a-ciudad-de-mexico",
  PageViajaraCiudadDeMexico
);

import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageTecpan extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-tecpan.webp","mediumImage": "../src/assets/img/banner/tablet/banner-tecpan.webp", "smallImage": "../src/assets/img/banner/movil/banner-tecpan.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Costa Line: Tu Mejor Opción para un Viaje Inolvidable a Tecpan"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Tecpan te Espera: Descubre "></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Conecta con Tecpan: Nuestras Rutas Más Populares"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Nuestra Flota: Conoce los Autobuses que te Llevarán a Tecpan"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Servicios Generales que Disfrutarás en tu Viaje:"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="¡Compra tus Boletos a Tecpan en 3 Sencillos Pasos!"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="¡Aprovecha Nuestras Promociones Especiales a Tecpan!"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Preguntas Frecuentes sobre tu Viaje a Tecpan"></app-section-title>
            </section>


        `;
  }
}
customElements.define("page-tecpan", PageTecpan);

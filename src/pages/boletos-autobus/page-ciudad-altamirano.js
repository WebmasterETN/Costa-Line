import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageCiudadAltamirano extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-ciudad-altamirano.webp","mediumImage": "../src/assets/img/banner/tablet/banner-ciudad-altamirano.webp", "smallImage": "../src/assets/img/banner/movil/banner-ciudad-altamirano.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Costa Line: Tu Mejor Opción para un Viaje Inolvidable a Ciudad Altamirano"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Ciudad Altamirano te Espera: Descubre "></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Conecta con Ciudad Altamirano: Nuestras Rutas Más Populares"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Nuestra Flota: Conoce los Autobuses que te Llevarán a Ciudad Altamirano"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Servicios Generales que Disfrutarás en tu Viaje:"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="¡Compra tus Boletos a Ciudad Altamirano en 3 Sencillos Pasos!"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="¡Aprovecha Nuestras Promociones Especiales a Ciudad Altamirano!"></app-section-title>
            </section>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Preguntas Frecuentes sobre tu Viaje a Ciudad Altamirano"></app-section-title>
            </section>


        `;
  }
}
customElements.define("page-ciudad-altamirano", PageCiudadAltamirano);

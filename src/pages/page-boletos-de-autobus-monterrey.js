/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-card-open-modal.js";
import "../components/app-dropdown.js";
import "../components/app-card-destination-opacity.js";
import "../components/app-slider-opacity.js";
import "../components/app-modal-multi-image.js";
import "../components/app-modal-image.js";
import "../components/app-destiny-grid.js";
import "../js/slick.js?v=1.0.2";

class AppBoletosAutobusMonterrey extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/banner-acapulco.webp","mediumImage": "./src/assets/img/banner/banner-acapulco-tablet.webp", "smallImage": "./src/assets/img/banner/banner-monterrey-sm.png", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Monterrey en autobús con ETN Turistar"></app-section-title>
                <p class="__subtitle__destinos">Monterrey</p>
                <p class="__paragraph">Monterrey, ubicada en el norte de México, es una ciudad vibrante que ofrece una combinación única de belleza natural, riqueza cultural y comodidades modernas. ETN Turistar ofrece un servicio de autobús de lujo desde la Ciudad de México, brindando una experiencia de viaje segura, cómoda y sin estrés. Ya sea que planee una escapada de fin de semana o una estancia prolongada, ETN Turistar le garantiza que su viaje será tan excepcional como su destino.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Monterrey?</p>
                <p class="__paragraph">Bienvenido a Monterrey, la vibrante capital del estado de Nuevo León, al noreste de México. Conocida como la "Sultán del Norte", Monterrey es una ciudad que combina armoniosamente su rico patrimonio cultural con la vida urbana moderna. Enclavada a los pies de la Sierra Madre Oriental, Monterrey ofrece impresionantes paisajes naturales, como el icónico Cerro de la Silla, y un vibrante entorno urbano.</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-monterrey.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Monterrey, la vibrante capital de Nuevo León, es reconocida por su rico y diverso patrimonio culinario.La gastronomía de la ciudad es una exquisita mezcla de influencias indígenas, españolas y estadounidenses, lo queda como resultado unagama única de sabores y platillos que reflejan su diversidad cultural.</p>
                 <article class="container-cards__food">
                    <!-- Las tarjetas de comida se cargarán aquí dinámicamente -->
                    <app-card-open-modal cards-data-src="../src/data/card-open-modal-platillos.json"></app-card-open-modal>
                </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-acapulco.json"></app-dropdown>
                </article>
             </section>

              <section class="__section __section__destiny__other">
                <app-section-title section-title="Otros destinos"></app-section-title>
                <article class="container-slider-other">
                    <app-slider-opacity destinations-src="../src/data/card-opacity-destinations.json"></app-slider-opacity>
                </article>
             </section>

             <app-modal-multi-image></app-modal-multi-image>
              <app-modal-image></app-modal-image>
        `;
  }
}
customElements.define(
  "page-boletos-de-autobus-monterrey",
  AppBoletosAutobusMonterrey
);

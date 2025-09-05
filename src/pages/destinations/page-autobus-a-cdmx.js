/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";

class PageAutobusACdmx extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/cdmx-web.webp","mediumImage": "./src/assets/img/banner/tablet/cdmx-tablet.webp", "smallImage": "./src/assets/img/banner/movil/cdmx-mobile.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a la Ciudad de México en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Ciudad de México</p>
                <p class="__paragraph">Ciudad de México, la metrópoli vibrante y corazón cultural del país, es un crisol de historia, arte, gastronomía y modernidad. Costa Line le conecta con esta fascinante urbe a través de su servicio de autobús de lujo desde diversos puntos del país, brindando una experiencia de viaje segura, cómoda y sin estrés. Ya sea que planee explorar sus sitios históricos, sumergirse en su escena artística o disfrutar de su animada vida nocturna, Costa Line le garantiza que su viaje será tan memorable como su destino.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en la Ciudad de México?</p>
                <p class="__paragraph">Bienvenido a Ciudad de México, una metrópoli vibrante y palpitante ubicada en el corazón del país. Conocida por su rica historia, su diversidad cultural y su energía inagotable, Ciudad de México es un lugar donde convergen tradiciones ancestrales y tendencias modernas. Rodeada por un impresionante paisaje montañoso, esta ciudad ofrece una experiencia inmersiva en la esencia misma de México, una conexión profunda con su pasado, presente y futuro.</p>
             </section>

              <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-cdmx.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Ciudad de México, epicentro cultural del país, es un destino donde la gastronomía refleja la diversidad y la innovación de su gente. Su cocina, enriquecida por siglos de influencias y las aportaciones de todas las regiones de México, ofrece un caleidoscopio de sabores sofisticados y reconfortantes. Aquí, los mercados bulliciosos y los restaurantes de vanguardia se unen para crear ingredientes únicos que dan vida a platillos que narran la historia de una metrópoli orgullosa de su evolución.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-cdmx.json"></app-card-open-modal>
                </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-acapulco.json"></app-dropdown>
                </article>
             </section>

              <section class="__section __section__monterrey__other">
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
customElements.define("page-autobus-a-cdmx", PageAutobusACdmx);

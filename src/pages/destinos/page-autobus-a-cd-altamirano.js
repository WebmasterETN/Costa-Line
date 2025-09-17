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

class PageAutobusACdAltamirano extends HTMLElement {
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
                <app-section-title section-title="Viaja a Ciudad Altamirano en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Ciudad Altamirano</p>
                <p class="__paragraph">Ciudad Altamirano, un importante centro económico y cultural en la región de Tierra Caliente de Guerrero, ofrece una mezcla de tradiciones locales, hospitalidad cálida y una conexión auténtica con la vida rural mexicana. Costa Line le conecta con este destino significativo a través de su servicio de autobús, brindando una experiencia de viaje segura y cómoda desde diversos puntos. Ya sea que viaje por negocios, familia o para explorar la región, Costa Line le garantiza un traslado placentero hacia Ciudad Altamirano.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Ciudad Altamirano?</p>
                <p class="__paragraph">Bienvenido a Ciudad Altamirano, un importante centro urbano en la región de Tierra Caliente del estado de Guerrero, en el corazón del sur de México. Conocida por su dinamismo comercial y su rica cultura regional, Ciudad Altamirano es un lugar que combina la actividad de su vida cotidiana con la calidez y hospitalidad de su gente. Rodeada por el paisaje característico de la Tierra Caliente, esta ciudad ofrece experiencias auténticas y una conexión genuina con la vida del estado de Guerrero.</p>
             </section>

              <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-cd-altamirano.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Ciudad Altamirano, puerta de entrada a la Tierra Caliente, es un destino donde la gastronomía refleja la autenticidad y calidez de su gente. Su cocina, impregnada de tradiciones indígenas y costumbres ganaderas, ofrece un mosaico de sabores robustos y generosos. Aquí, la tierra fértil y el río Balsas se unen para crear ingredientes únicos que dan vida a platillos que narran la historia de una región orgullosa de sus raíces.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-cd-altamirano.json"></app-card-open-modal>
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
customElements.define("page-autobus-a-cd-altamirano", PageAutobusACdAltamirano);

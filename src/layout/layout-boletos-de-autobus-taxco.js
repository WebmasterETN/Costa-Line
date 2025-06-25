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
import "../js/slick.js?v=1.0.0";



class AppBoletosAutobusTaxco extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_taxco.webp","mediumImage": "./src/assets/img/banner/Bw_taxco_tablet.webp", "smallImage": "./src/assets/img/banner/Bw_taxco_mobile.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Taxco en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Taxco</p>
                <p class="__paragraph">Taxco de Alarcón, ubicada en las montañas del estado de Guerrero, es una ciudad colonial que ofrece una combinación única de calles empedradas, arquitectura histórica y la tradición de la plata. Costa Line ofrece un servicio de autobús confortable desde la Ciudad de México, brindando una experiencia de viaje segura y relajante. Ya sea que planee una escapada de fin de semana o una estancia prolongada, Costa Line le garantiza que su viaje será el inicio perfecto de su destino de plata.
</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Taxco?</p>
                <p class="__paragraph">Bienvenido a Taxco de Alarcón, la joya plateada del estado de Guerrero, enclavada en las montañas del sur de México. Conocida como la "Ciudad de la Plata", Taxco es un tesoro colonial que armoniza sus calles empedradas y casas blancas con un ambiente mágico y artesanal. Rodeada de impresionantes paisajes montañosos, Taxco ofrece sitios emblemáticos como su imponente Iglesia de Santa Prisca, sus talleres de platería y sus vistas panorámicas, invitando a explorar su belleza arquitectónica y su rica tradición artesanal.
</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-taxco.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Taxco de Alarcón, la joya de plata de Guerrero, es reconocida por su singular patrimonio culinario. La gastronomía de la ciudad es una deliciosa fusión de influencias indígenas y españolas, con un toque único de sabor montañoso, dando como resultado una variedad de platillos que reflejan la identidad cultural de la región.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/card-open-modal-platillos-taxco.json"></app-card-open-modal>
                </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                 <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-monterrey.json"></app-dropdown>
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
  "layout-boletos-de-autobus-taxco",
  AppBoletosAutobusTaxco
);

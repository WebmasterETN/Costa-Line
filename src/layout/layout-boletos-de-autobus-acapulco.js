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
import "../js/slick.js?v=1.0.0";


class AppBoletosAutobusAcapulco extends HTMLElement {
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
                <app-section-title section-title="Viaja a Acapulco en autobús con ETN Turistar"></app-section-title>
                <p class="__subtitle__destinos">Acapulco</p>
                <p class="__paragraph">Acapulco, el legendario puerto en la costa del Pacífico mexicano, es un paraíso que vibra con una mezcla inigualable de playas doradas, emocionante vida nocturna y belleza natural. ETN Turistar le conecta con este icónico destino a través de su servicio de autobús de lujo desde la Ciudad de México, brindando una experiencia de viaje segura, cómoda y sin estrés. Ya sea que planee una escapada de fin de semana o unas vacaciones prolongadas, ETN Turistar le garantiza que su viaje será tan espectacular como su destino.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Acapulco?</p>
                <p class="__paragraph">Bienvenido a Acapulco, el legendario puerto del estado de Guerrero, en la costa del Pacífico de México. Conocido como la "Perla del Pacífico", Acapulco es un destino que combina armoniosamente la serenidad de sus playas con una vibrante y emocionante vida nocturna. Abrazado por la majestuosa Bahía de Acapulco, este paraíso ofrece paisajes inolvidables, como los espectaculares clavadistas de La Quebrada, y un ambiente festivo que cautiva a sus visitantes.</p>
             </section>

              <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-acapulco.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Acapulco, el icónico destino de la costa del Pacífico, es célebre por su rica y diversa herencia culinaria. La gastronomía del puerto es una fascinante fusión de sabores del mar, con la influencia de las tradiciones indígenas de Guerrero y el legado histórico del comercio con Asia y España, creando una explosión de sabores que cuentan la historia de este cruce de culturas.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/card-open-modal-platillos-acapulco.json"></app-card-open-modal>
                </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-monterrey.json"></app-dropdown>
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
customElements.define(
  "layout-boletos-de-autobus-acapulco",
  AppBoletosAutobusAcapulco
);

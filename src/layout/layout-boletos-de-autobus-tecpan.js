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

class AppBoletosAutobusTecpan extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/tecpan-web.webp","mediumImage": "./src/assets/img/banner/tablet/tecpan-tablet.webp", "smallImage": "./src/assets/img/banner/movil/tecpan-mobile.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Tecpan en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Tecpan</p>
                <p class="__paragraph">Tecpan de Galeana se ubica en la región Costa Grande del estado de Guerrero, entre montañas, ríos y el Océano Pacífico. Este municipio combina naturaleza, historia y cultura, ofreciendo paisajes montañosos, playas vírgenes y sitios arqueológicos. Su clima cálido y su vegetación tropical hacen de Tecpan un destino ideal para quienes buscan aventura, gastronomía costeña y tradiciones auténticas en un entorno natural privilegiado.
</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Tecpan?</p>
                <p class="__paragraph">¡Bienvenido a Tecpan de Galeana! Descubre un rincón encantador de la Costa Grande de Guerrero, donde la calidez de su gente se une con paisajes naturales impresionantes. Desde sus playas tranquilas hasta sus montañas cubiertas de vegetación, Tecpan te invita a vivir una experiencia auténtica llena de historia, sabores tradicionales y aventuras inolvidables. Ya sea que busques descanso, cultura o naturaleza, aquí siempre encontrarás algo que te enamore. ¡Tecpan te espera con los brazos abiertos!
</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-tecpan.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">La gastronomía de Tecpan de Galeana es un reflejo vivo de sus raíces culturales y de la riqueza natural de la región. Con ingredientes frescos del campo y del mar, cada receta transmite el alma del lugar y la tradición de generaciones. Las técnicas ancestrales, el uso de productos locales y el sazón casero se combinan para ofrecer una experiencia culinaria única. Comer en Tecpan es una manera de conocer su historia, su gente y el profundo vínculo que existe entre el territorio y su cocina.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-tecpan.json"></app-card-open-modal>
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
  "layout-boletos-de-autobus-tecpan",
  AppBoletosAutobusTecpan
);

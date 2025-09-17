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
import "../../components/app-destiny-grid.js";

class PageAutobusAToluca extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-toluca.webp", "mediumImage": "../src/assets/img/banner/tablet/banner-toluca.webp", "smallImage": "../src/assets/img/banner/movil/banner-toluca.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Toluca en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Toluca</p>
                <p class="__paragraph">Toluca de Lerdo, capital del Estado de México, es una ciudad que fusiona modernidad con un rico pasado. A los pies del majestuoso Nevado de Toluca, ofrece un clima fresco y una vibrante vida cultural. Sus calles y edificios coloniales, plazas históricas y museos de primer nivel hacen de este destino un lugar ideal para el turismo cultural y de negocios.</p>
                <p class="__subtitle__destinos">¿Qué lugares visitar en Toluca?</p>
                <p class="__paragraph">¡Descubre Toluca! Comienza tu recorrido en el **Cosmovitral**, un impresionante jardín botánico dentro de un edificio Art Nouveau, famoso por sus vitrales gigantescos. Explora el centro histórico, visita la Catedral de San José y el majestuoso Templo del Carmen. Para los amantes de la naturaleza, el **Nevado de Toluca** (Xinantécatl) ofrece paisajes espectaculares y la oportunidad de escalar o simplemente admirar su belleza. Toluca es un destino con muchas sorpresas esperando ser descubiertas.</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-toluca.json"></app-destiny-grid>
             </section>

             <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomía</p>
                <p class="__paragraph__xl">La gastronomía toluqueña es conocida por su sabor y tradición. No puedes irte sin probar el famoso **chorizo verde y rojo**, especialidad de la ciudad. También, las tortas de obispo, los tamales de frijol y las famosas "papas de San Pedro" son platillos que reflejan la identidad local. Los mercados y restaurantes de la ciudad ofrecen una experiencia culinaria auténtica que combina ingredientes frescos de la región con recetas ancestrales. ¡Una delicia para el paladar!</p>
                 <article class="container-cards__food">
                     <app-card-open-modal cards-data-src="../src/data/platillos-toluca.json"></app-card-open-modal>
                 </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                 <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                     <app-dropdown items-src="../src/data/dropdown-preguntas-toluca.json"></app-dropdown>
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
customElements.define("page-autobus-a-toluca", PageAutobusAToluca);

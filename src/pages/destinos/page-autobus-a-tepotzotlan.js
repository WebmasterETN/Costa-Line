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

class PageAutobusATepotzotlan extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-tepotzotlan.webp","mediumImage": "../src/assets/img/banner/tablet/banner-tepotzotlan.webp", "smallImage": "../src/assets/img/banner/movil/banner-tepotzotlan.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Tepotzotlán en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Tepotzotlán</p>
                <p class="__paragraph">Tepotzotlán, un Pueblo Mágico del Estado de México, te invita a un viaje en el tiempo. Su centro histórico, dominado por el Templo de San Francisco Javier, es una joya del barroco mexicano. Pasea por sus calles adoquinadas, descubre talleres de artesanías y déjate llevar por su atmósfera colonial. Es un destino ideal para quienes buscan cultura, historia y una escapada de la vida urbana, a pocos kilómetros de la Ciudad de México.</p>
                <p class="__subtitle__destinos">¿Qué lugares visitar en Tepotzotlán?</p>
                <p class="__paragraph">¡Bienvenido a Tepotzotlán! Este rincón mágico te espera para que descubras su rica historia y su legado cultural. Desde el imponente Museo Nacional del Virreinato, que alberga una de las colecciones más importantes del país, hasta el Acueducto de Xalpa, conocido como los "Arcos del Sitio", cada rincón de este pueblo cuenta una historia. Tepotzotlán es perfecto para disfrutar de la tranquilidad, la arquitectura y la gastronomía tradicional del Estado de México.</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-tepotzotlan.json"></app-destiny-grid>
             </section>

             <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomía</p>
                <p class="__paragraph__xl">La gastronomía de Tepotzotlán es un deleite para el paladar, fusionando sabores prehispánicos y coloniales. Sus platillos tradicionales, como las quesadillas de flor de calabaza, los tlacoyos y la barbacoa de borrego, son un reflejo de su identidad. Además, podrás disfrutar de antojitos típicos en el mercado local y de postres tradicionales que endulzan el recorrido. No olvides probar el pulque y las aguas frescas que complementan la experiencia culinaria.</p>
                 <article class="container-cards__food">
                     <app-card-open-modal cards-data-src="../src/data/platillos-tepotzotlan.json"></app-card-open-modal>
                 </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                 <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                     <app-dropdown items-src="../src/data/dropdown-preguntas-tepotzotlan.json"></app-dropdown>
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
customElements.define("page-autobus-a-tepotzotlan", PageAutobusATepotzotlan);

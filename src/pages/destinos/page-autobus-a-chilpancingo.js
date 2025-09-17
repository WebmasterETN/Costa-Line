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

class PageAutobusAChilpancingo extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-chilpancingo.webp","mediumImage": "../src/assets/img/banner/tablet/banner-chilpancingo.webp", "smallImage": "../src/assets/img/banner/movil/banner-chilpancingo.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Chilpancingo en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Chilpancingo</p>
                <p class="__paragraph">Chilpancingo, ubicada en el corazón del estado de Guerrero, es una ciudad que ofrece una combinación única de rica historia, cultura vibrante y cercanía a la naturaleza. Costa Line ofrece un servicio de autobús confortable desde la Ciudad de México, brindando una experiencia de viaje segura y relajante. Ya sea que planee una visita rápida o una estancia prolongada, Costa Line le garantiza que su viaje será un buen comienzo para descubrir el corazón de Guerrero.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Chilpancingo?</p>
                <p class="__paragraph">Bienvenido a Chilpancingo, la capital del estado de Guerrero, ubicada en el corazón del sur de México. Conocida por su rica historia y su importancia política y cultural, Chilpancingo armoniza su legado independentista con un ambiente dinámico y progresista. Rodeada de paisajes montañosos y una rica tradición, Chilpancingo ofrece sitios emblemáticos como el Congreso del Estado, la Catedral de Santa María de la Asunción y el Museo Regional de Guerrero, invitando a explorar su historia y su vitalidad cultural.</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-chilpancingo.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Chilpancingo guarda secretos ancestrales que se revelan a través de su cocina. Esta ciudad, enclavada en el corazón de Guerrero, te invita a descubrir una gastronomía sorprendente, donde los sabores intensos y los ingredientes exóticos se combinan para crear platillos que te transportarán a un mundo de sensaciones únicas. ¿Te atreves a explorar su patrimonio culinario?.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-chilpancingo.json"></app-card-open-modal>
                </article>
             </section>

             <section class="__section __section__destiny__ask">
                <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
                 <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-chilpancingo.json"></app-dropdown>
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
customElements.define("page-autobus-a-chilpancingo", PageAutobusAChilpancingo);

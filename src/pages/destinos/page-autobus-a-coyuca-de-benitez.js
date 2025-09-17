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

class PageAutobusACoyucaDeBenitez extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-coyuca-de-benitez.webp","mediumImage": "../src/assets/img/banner/tablet/banner-coyuca-de-benitez.webp", "smallImage": "../src/assets/img/banner/movil/banner-coyuca-de-benitez.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Coyuca de Benítez en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Coyuca de Benítez</p>
                <p class="__paragraph">Coyuca de Benítez, un tesoro escondido en la costa de Guerrero, es un refugio de tranquilidad que cautiva con sus serenas lagunas, playas vírgenes y exuberante vegetación. Costa Line le conecta con este apacible destino a través de su servicio de autobús desde la Ciudad de México, brindando una experiencia de viaje segura, cómoda y sin estrés. Ya sea que planee una escapada para relajarse y conectar con la naturaleza o explorar sus encantadores rincones, Costa Line le garantiza que su viaje será tan placentero como su destino.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Coyu de Benítez?</p>
                <p class="__paragraph">Bienvenido a Coyuca de Benítez, un encantador rincón costero en el estado de Guerrero, ubicado en el corazón del Pacífico mexicano. Conocida por su tranquilidad, sus hermosas lagunas y su ambiente relajado, Coyuca de Benítez es un lugar que combina la serenidad de la naturaleza con la calidez y hospitalidad de sus habitantes. Rodeada por playas doradas y exuberante vegetación, esta comunidad ofrece experiencias auténticas y una conexión genuina con la belleza natural del estado de Guerrero.</p>
             </section>

              <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-coyuca-de-benitez.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Coyuca de Benítez, un paraíso costero con alma propia, es un destino donde la gastronomía refleja la frescura del mar y la riqueza de su tierra. Su cocina, influenciada por las tradiciones pesqueras y la abundancia de productos locales, ofrece un abanico de sabores suaves y delicados. Aquí, la laguna y el océano se unen para brindar ingredientes únicos que dan vida a platillos que narran la historia de una comunidad orgullosa de su entorno natural.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-coyuca-de-benitez.json"></app-card-open-modal>
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
customElements.define(
  "page-autobus-a-coyuca-de-benitez",
  PageAutobusACoyucaDeBenitez
);

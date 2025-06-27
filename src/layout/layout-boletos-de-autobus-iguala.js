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

class AppBoletosAutobusIguala extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/iguala-web.webp","mediumImage": "./src/assets/img/banner/tablet/iguala-tablet.webp", "smallImage": "./src/assets/img/banner/movil/iguala-mobile.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Iguala en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Iguala</p>
                <p class="__paragraph">Iguala, Ciudad histórica donde se proclamó el Plan de Iguala, símbolo clave de la Independencia de México. Destaca por su imponente Bandera Monumental, su pintoresco Zócalo y la hermosa Laguna de Tuxpan. Un lugar lleno de cultura, tradiciones y encanto.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Iguala?</p>
                <p class="__paragraph">¡Bienvenidos a Iguala, Guerrero! Esta ciudad histórica te invita a descubrir sus principales atractivos llenos de cultura y tradición. No te pierdas la imponente Bandera Monumental, símbolo nacional y punto panorámico único. Pasea por el pintoresco Zócalo, disfruta la tranquilidad de la Laguna de Tuxpan y explora sus mercados llenos de artesanías y joyería tradicional. Iguala es un destino que combina historia, belleza natural y calidez en cada rincón. ¡Haz de tu visita una experiencia inolvidable!</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-iguala.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">La gastronomía de Iguala es una expresión auténtica de la cultura local, caracterizada por sabores intensos y tradicionales que reflejan la riqueza de Guerrero. Sus preparaciones se elaboran con ingredientes frescos y técnicas heredadas de generación en generación, ofreciendo una experiencia culinaria llena de historia y sabor. Visitar Iguala es también deleitarse con su oferta gastronómica única y casera.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-iguala.json"></app-card-open-modal>
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
  "layout-boletos-de-autobus-iguala",
  AppBoletosAutobusIguala
);

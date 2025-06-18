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



class AppBoletosAutobusCuernavaca extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/banner-cuernavaca.webp","mediumImage": "./src/assets/img/banner/banner-cuernavaca-tablet.webp", "smallImage": "./src/assets/img/banner/banner-monterrey-sm.png", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Cuernavaca en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Cuernavaca</p>
                <p class="__paragraph">Cuernavaca, ubicada en el corazón de México, es una ciudad primaveral que ofrece una combinación única de clima agradable, rica historia y tranquilidad. Costa Line ofrece un servicio de autobús confortable desde la Ciudad de México, brindando una experiencia de viaje segura y relajante. Ya sea que planee una escapada de fin de semana o una estancia prolongada, Costa Line le garantiza que su viaje será el inicio perfecto de su destino primaveral.</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Cuernavaca?</p>
                <p class="__paragraph">Bienvenido a Cuernavaca, la "Ciudad de la Eterna Primavera", capital del estado de Morelos, en el centro de México. Cuernavaca es un refugio con un clima privilegiado que armoniza su rica historia con un ambiente relajado y natural. Rodeada de hermosos jardines y exuberante vegetación, Cuernavaca ofrece sitios emblemáticos como su imponente Catedral, el Palacio de Cortés y los Jardines de México, invitando a explorar su belleza histórica y su encanto primaveral.</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-cuernavaca.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Cuernavaca, un paraíso cerca de la Ciudad de México, es famosa por su excepcional patrimonio culinario. La gastronomía de la región es una deliciosa combinación de ingredientes frescos, técnicas tradicionales y toques innovadores, dando lugar a platillos emblemáticos como el mole verde, el huauzontle y las nieves artesanales, que deleitan a los paladares más exigentes.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/card-open-modal-platillos-cuernavaca.json"></app-card-open-modal>
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
  "layout-boletos-de-autobus-cuernavaca",
  AppBoletosAutobusCuernavaca
);

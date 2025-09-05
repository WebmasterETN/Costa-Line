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

class PageAutobusAIxtapaZihuatanejo extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/zihuatanejo-web.webp","mediumImage": "./src/assets/img/banner/tablet/zihuatanejo-tablet.webp", "smallImage": "./src/assets/img/banner/movil/zihuatanejo-mobile.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Ixtapa Zihuatanejo en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Ixtapa Zihuatanejo</p>
                <p class="__paragraph">Ixtapa Zihuatanejo, ubicada en la costa del Pacífico de México, ofrece una combinación única de resorts modernos, playas tranquilas y el encanto de un pueblo pesquero tradicional. Costa Line ofrece un servicio de autobús confortable desde la Ciudad de México, brindando una experiencia de viaje segura y relajante. Ya sea que planee una escapada de fin de semana o una estancia prolongada, Costa Line le garantiza que su viaje será el inicio perfecto para descubrir este paraíso de dos caras.
</p>
                <p class="__subtitle__destinos">¿Que lugares visitar en Ixtapa Zihuatanejo?</p>
                <p class="__paragraph">Bienvenido a Ixtapa Zihuatanejo, un destino único en la costa del Pacífico mexicano, en el estado de Guerrero. Donde conviven el lujo moderno de Ixtapa y el encanto tradicional de Zihuatanejo, creando un equilibrio perfecto. Ofreciendo una gran vegetación, sitios emblemáticos como la playa la Ropa, playa el Palmar y playa las Gatas, invitando a explorar sus playas doradas y a disfrutar de su riqueza marítima y cultural.
</p>
             </section>

             <section class="__section__grid" id="destiny-grid-section">
                <app-destiny-grid grid-src="../src/data/lugares-ixtapa-zihuatanejo.json"></app-destiny-grid>
             </section>

              <section class="__section __section__destiny__food">
                <p class="__subtitle__destinos">Gastronomia</p>
                <p class="__paragraph__xl">Ixtapa Zihuatanejo, un destino de ensueño frente al Pacífico, deleita a sus visitantes con una gastronomía basada en la frescura del mar y las tradiciones de la costa guerrerense. Desde los pescados a la talla hasta los ceviches, los mariscos y los platillos elaborados con coco, la cocina local ofrece una experiencia única que captura la esencia del paraíso tropical.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/platillos-ixtapa-zihuatanejo.json"></app-card-open-modal>
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
  "page-autobus-a-ixtapa-zihuatanejo",
  PageAutobusAIxtapaZihuatanejo
);

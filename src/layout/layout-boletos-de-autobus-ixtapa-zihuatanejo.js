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



class AppBoletosAutobusIxtapaZihuatanejo extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_zihuatanejo.webp","mediumImage": "./src/assets/img/banner/Bw_zihuatanejo_tablet.webp", "smallImage": "./src/assets/img/banner/Bw_zihuatanejo_mobile.webp", "link": "#index.html/banner1"}]'
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
                <p class="__paragraph__xl">Taxco de Alarcón, la joya de plata de Guerrero, es reconocida por su singular patrimonio culinario. La gastronomía de la ciudad es una deliciosa fusión de influencias indígenas y españolas, con un toque único de sabor montañoso, dando como resultado una variedad de platillos que reflejan la identidad cultural de la región.</p>
                 <article class="container-cards__food">
                    <app-card-open-modal cards-data-src="../src/data/card-open-modal-platillos-ixtapa-zihuatanejo.json"></app-card-open-modal>
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
  "layout-boletos-de-autobus-ixtapa-zihuatanejo",
  AppBoletosAutobusIxtapaZihuatanejo
);

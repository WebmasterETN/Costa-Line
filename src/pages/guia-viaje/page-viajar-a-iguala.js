import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraIguala extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-iguala.webp");' data-alt="Vista panorámica de Iguala, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Iguala: La Cuna de la Bandera
    </h1>
    <h2 class="hero__subtitle">
      Historia, tradición y un ambiente cálido en el corazón de Guerrero.
    </h2>
    <a href="../destinos/iguala.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Iguala de la Independencia es una ciudad histórica reconocida por ser el lugar donde nació la Bandera de México. Con su emblemático cerro, su laguna, su ambiente tranquilo y su relevancia cultural, es un destino ideal para explorar, aprender y disfrutar de la gastronomía guerrerense.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/iguala/monumento-bandera.webp");' data-alt="Monumento a la Bandera Iguala"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Monumento a la Bandera</p>
            <p class="place-card__description">
              Uno de los puntos más representativos del país, donde se conmemora la creación de la Bandera Nacional. Un símbolo histórico y cultural de México.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/iguala/laguna-tuxpan.webp");' data-alt="Laguna de Tuxpan Iguala"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Laguna de Tuxpan</p>
            <p class="place-card__description">
              Hermoso cuerpo de agua ideal para paseos en lancha, disfrutar del atardecer y probar antojitos típicos a su alrededor.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/iguala/parroquia-san-francisco.webp");' data-alt="Parroquia de San Francisco Iguala"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Parroquia de San Francisco de Asís</p>
            <p class="place-card__description">
              Un templo histórico y uno de los más importantes de Iguala, perfecto para apreciar arquitectura y tradiciones religiosas locales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/iguala/bandera-monumental.webp");' data-alt="Bandera Monumental Iguala"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Bandera Monumental</p>
            <p class="place-card__description">
              Una de las banderas monumentales más grandes de México, un símbolo patriótico que se puede apreciar desde varios puntos de la ciudad.
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/iguala/museo-historia.webp");' data-alt="Museo de la Bandera e Historia Iguala"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Museo de la Bandera y Santuario a la Patria</p>
            <p class="place-card__description">
              Un espacio cultural dedicado a la historia de la Bandera Nacional, con exhibiciones históricas y objetos emblemáticos.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Iguala</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Pozole guerrerense" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/iguala/pozole-guerrero.webp">
        <h3 class="food-card__title">Pozole Guerrerense</h3>
        <p class="food-card__description">Un clásico del estado, con su sabor profundo, acompañamientos frescos y un toque local que lo hace único.</p>
      </div>

      <div class="food-card">
        <img alt="Tacos de cecina" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/iguala/cecina.webp">
        <h3 class="food-card__title">Cecina y Longaniza</h3>
        <p class="food-card__description">Producto local muy apreciado, servida asada con crema, queso y tortillas recién hechas.</p>
      </div>

      <div class="food-card">
        <img alt="Atole de grano" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/iguala/atole-grano.webp">
        <h3 class="food-card__title">Atole de Grano</h3>
        <p class="food-card__description">Una bebida tradicional espesa y reconfortante, perfecta para las tardes en la ciudad.</p>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container container--narrow">
    <h2 class="section-title">Tips de Viaje</h2>

    <div class="faq-list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Iguala?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a marzo el clima es más templado y agradable, ideal para recorrer la ciudad cómodamente.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Iguala?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se puede llegar fácilmente desde Chilpancingo, Taxco o CDMX por carretera. Es un punto muy conectado dentro del norte de Guerrero.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La Fiesta de la Bandera, celebrada en febrero, es la más importante con desfiles, actos cívicos y actividades culturales.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Iguala?</h2>
  <p class="cta-section__text">Historia, tradición y sabores auténticos te esperan en la Cuna de la Bandera. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/iguala.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Iguala" tabindex="0">Ver más sobre Iguala</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-viajar-a-iguala", PageViajaraIguala);

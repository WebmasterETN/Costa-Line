import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraCuernavaca extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-cuernavaca.webp");' data-alt="Vista panorámica de Cuernavaca, Morelos">
  <div class="hero__content">
    <h1 class="hero__title">
      Cuernavaca: La Ciudad de la Eterna Primavera
    </h1>
    <h2 class="hero__subtitle">
      Un destino lleno de historia, jardines, arquitectura colonial y un clima perfecto todo el año.
    </h2>
    <a href="../destinos/cuernavaca.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Cuernavaca, capital de Morelos, es famosa por su clima cálido, su herencia colonial, sus jardines exuberantes y su ambiente relajado. Es un destino ideal para descansar, explorar su historia, visitar museos y disfrutar de espacios naturales.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cuernavaca/palacio-cortes.webp");' data-alt="Palacio de Cortés Cuernavaca"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Palacio de Cortés</p>
            <p class="place-card__description">
              Uno de los edificios más antiguos de México, hoy convertido en museo donde se aprecia la historia regional y murales de Diego Rivera.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cuernavaca/jardin-borda.webp");' data-alt="Jardín Borda Cuernavaca"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Jardín Borda</p>
            <p class="place-card__description">
              Un histórico jardín del siglo XVIII con estanques, vegetación hermosa y espacios culturales para caminar y relajarse.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cuernavaca/catedral-cuernavaca.webp");' data-alt="Catedral de Cuernavaca"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Catedral de Cuernavaca</p>
            <p class="place-card__description">
              Un conjunto arquitectónico del siglo XVI con un museo y murales únicos que cuentan la historia de la evangelización en la región.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cuernavaca/teopanzolco.webp");' data-alt="Zona Arqueológica de Teopanzolco"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Zona Arqueológica de Teopanzolco</p>
            <p class="place-card__description">
              Un sitio arqueológico ubicado en la ciudad, con pirámides y plataformas que muestran el legado tlahuica prehispánico.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cuernavaca/museo-brady.webp");' data-alt="Museo Robert Brady Cuernavaca"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Museo Robert Brady</p>
            <p class="place-card__description">
              Una hermosa casona que alberga la colección personal del artista Robert Brady, llena de arte, diseño y piezas de todo el mundo.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Cuernavaca</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Cecina de Yecapixtla" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/cuernavaca/cecina.webp">
        <h3 class="food-card__title">Cecina Morelense</h3>
        <p class="food-card__description">Un clásico de la región, servida con crema, queso, salsa, arroz y tortillas hechas a mano.</p>
      </div>

      <div class="food-card">
        <img alt="Tacos acorazados de Cuernavaca" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/cuernavaca/acorazados.webp">
        <h3 class="food-card__title">Tacos Acorazados</h3>
        <p class="food-card__description">Tortillas gruesas rellenas de guisos tradicionales como milanesa, tinga o chicharrón, acompañados de arroz rojo.</p>
      </div>

      <div class="food-card">
        <img alt="Pozole estilo Morelos" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/cuernavaca/pozole.webp">
        <h3 class="food-card__title">Pozole Morelense</h3>
        <p class="food-card__description">Una versión local del pozole, ligera, aromática y perfecta para disfrutar cualquier día del año.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Cuernavaca?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Cuernavaca tiene clima agradable todo el año, pero de noviembre a mayo es ideal por sus días soleados y temperaturas templadas.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Cuernavaca?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Desde CDMX se llega fácilmente en autobús o por carretera. También hay rutas desde Puebla, Toluca y estados del centro-sur.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Las festividades de la Catedral, la Feria de la Primavera y eventos culturales en el Jardín Borda son algunos de los más representativos.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Cuernavaca?</h2>
  <p class="cta-section__text">Disfruta su clima, su historia, sus jardines y todo el encanto de la Eterna Primavera. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/cuernavaca.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Cuernavaca" tabindex="0">Ver más sobre Cuernavaca</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-viajar-a-cuernavaca", PageViajaraCuernavaca);

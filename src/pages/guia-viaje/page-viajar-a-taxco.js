import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraTaxco extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-taxco.webp");' data-alt="Vista panorámica de Taxco, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Taxco: La Ciudad de la Plata
    </h1>
    <h2 class="hero__subtitle">
      Historia, arquitectura colonial y artesanía en plata en el corazón de Guerrero.
    </h2>
    <a href="../destinos/taxco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Taxco de Alarcón es famosa por su arquitectura colonial, sus callejones empedrados y, por supuesto, la tradición en la plata. Es un destino ideal para quienes buscan historia, cultura, compras de artesanías y vistas panorámicas impresionantes.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/taxco/iglesia-santa-prisca.webp");' data-alt="Iglesia de Santa Prisca Taxco"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Iglesia de Santa Prisca</p>
            <p class="place-card__description">
              Icono de la ciudad, con su impresionante arquitectura barroca y detalles decorativos que reflejan la riqueza histórica de Taxco.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/taxco/centro-historico.webp");' data-alt="Centro Histórico de Taxco"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Centro Histórico</p>
            <p class="place-card__description">
              Callejones empedrados, plazas y casas blancas con techos de teja roja, perfecto para caminar, comprar plata y disfrutar de la esencia colonial.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/taxco/mercado-plata.webp");' data-alt="Mercado de Plata Taxco"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Mercado de Plata</p>
            <p class="place-card__description">
              El lugar ideal para adquirir joyería, artesanías y piezas únicas de plata, directamente de los talleres locales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/taxco/mirador-taxco.webp");' data-alt="Mirador de Taxco"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Mirador de Taxco</p>
            <p class="place-card__description">
              Ofrece vistas panorámicas de toda la ciudad y sus colinas, ideal para fotografías y contemplar la arquitectura colonial desde lo alto.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/taxco/mina-taxco.webp");' data-alt="Museo de la Plateria Taxco"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mina Prehispanica de Chalco</p>
            <p class="place-card__description">
              Un sitio arqueológico que ofrece una mirada al pasado prehispánico de la región, con túneles y galerías antiguas para explorar.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Taxco</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Dulces típicos de Taxco" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/taxco/dulces-tipicos.webp">
        <h3 class="food-card__title">Dulces Típicos</h3>
        <p class="food-card__description">Alfeñiques, chocolates y conservas tradicionales, perfectos para un recuerdo dulce de la ciudad.</p>
      </div>

      <div class="food-card">
        <img alt="Mole Rosa" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/taxco/mole-rosa.webp">
        <h3 class="food-card__title">Mole Rosa</h3>
        <p class="food-card__description">Un mole tradicional de la región, caracterizado por su color rosado y sabor único, preparado con ingredientes locales y petalos de rosa.</p>
      </div>

      <div class="food-card">
        <img alt="Tamales de Taxco" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/taxco/tamales.webp">
        <h3 class="food-card__title">Tamales de Dulce y Sal</h3>
        <p class="food-card__description">Una tradición culinaria que puedes disfrutar en mercados y puestos locales.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Taxco?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a marzo el clima es más fresco y seco, ideal para recorrer calles empedradas y disfrutar de actividades al aire libre.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Taxco?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se puede llegar fácilmente desde CDMX, Iguala o Chilpancingo por carretera. Taxco está bien conectado con la región central de Guerrero.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La Semana Santa en Taxco es famosa, con procesiones, celebraciones religiosas y la tradicional Feria de la Plata en noviembre.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Taxco?</h2>
  <p class="cta-section__text">Historia, arquitectura colonial y la tradición en plata te esperan en la Ciudad de la Plata. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/taxco.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Taxco" tabindex="0">Ver más sobre Taxco</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-viajar-a-taxco", PageViajaraTaxco);

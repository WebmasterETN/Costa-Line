import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraCoyucaDeBenitez extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
          <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-coyuca-de-benitez.webp");' data-alt="Vista panorámica de Coyuca de Benítez, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Coyuca de Benítez: Naturaleza, tradición y lagunas sorpresivas
    </h1>
    <h2 class="hero__subtitle">
      Un destino lleno de belleza natural — lagunas, ríos, playas tranquilas y la calidez característica de la Costa Grande de Guerrero.
    </h2>
    <a href="../destinos/coyuca-de-benitez.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Coyuca de Benítez, ubicado en la Costa Grande de Guerrero, es famoso por su laguna, sus paisajes tropicales, su gastronomía costeña y su ambiente tranquilo. Es ideal para quienes buscan relajación, naturaleza, paseos en lancha y playas menos concurridas.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/coyuca/laguna-coyuca.webp");' data-alt="Laguna de Coyuca"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Laguna de Coyuca</p>
            <p class="place-card__description">
              Uno de los tesoros naturales más reconocidos del municipio. Ideal para paseos en lancha, avistamiento de aves y disfrutar de atardeceres inolvidables.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/coyuca/playa-coyuca.webp");' data-alt="Playa en Coyuca de Benítez"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Playas de la Barra de Coyuca</p>
            <p class="place-card__description">
              Amplias, tranquilas y perfectas para relajarse frente al mar, probar comida fresca y disfrutar del ambiente costero sin multitudes.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/coyuca/rio-coyuca.webp");' data-alt="Río Coyuca"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Río Coyuca</p>
            <p class="place-card__description">
              Un espacio natural ideal para nadar, convivir y descansar rodeado de naturaleza, con palapas y áreas para pasar el día.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/coyuca/mirador-coyuca.webp");' data-alt="Miradores de Coyuca de Benítez"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Miradores de la Sierra</p>
            <p class="place-card__description">
              Puntos elevados con vistas panorámicas hacia la laguna, el océano y la vegetación tropical de la Costa Grande.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/coyuca/mercado-coyuca.webp");' data-alt="Mercado de Coyuca de Benítez"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado Municipal de Coyuca</p>
            <p class="place-card__description">
              El punto ideal para conocer los productos frescos de la región, desde pescado y mariscos hasta dulces típicos y artesanías locales.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Coyuca de Benítez</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Pescado a la talla en Coyuca" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/coyuca/pescado-a-la-talla.webp">
        <h3 class="food-card__title">Pescado a la Talla</h3>
        <p class="food-card__description">Típico de la Costa Grande: marinado en adobo rojo, asado al carbón y acompañado de tortillas y salsas frescas.</p>
      </div>

      <div class="food-card">
        <img alt="Tiritas de pescado estilo Costa Grande" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/coyuca/tiritas.webp">
        <h3 class="food-card__title">Tiritas de Pescado</h3>
        <p class="food-card__description">Un clásico costeño preparado con pescado fresco, limón, cebolla morada y chile verde.</p>
      </div>

      <div class="food-card">
        <img alt="Coco fresco de Coyuca" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/coyuca/coco-coyuca.webp">
        <h3 class="food-card__title">Coco Fresco</h3>
        <p class="food-card__description">Ideal para refrescarte en la playa o la laguna, servido frío y con un sabor naturalmente dulce.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Coyuca de Benítez?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a mayo encontrarás clima más seco y perfecto para disfrutar la laguna y las playas. En verano, el paisaje es más verde y fresco.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Coyuca de Benítez?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se puede llegar por carretera desde Acapulco, Zihuatanejo y la Costa Grande. También hay rutas directas de autobuses regionales.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Las fiestas patronales de San Miguel Arcángel y las celebraciones en torno a la laguna son de las más representativas del municipio.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Coyuca de Benítez?</h2>
  <p class="cta-section__text">Explora su laguna, disfruta sus playas tranquilas y conoce la esencia de la Costa Grande. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/coyuca-de-benitez.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Coyuca de Benítez" tabindex="0">Ver más sobre Coyuca de Benítez</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define(
  "page-viajar-a-coyuca-de-benitez",
  PageViajaraCoyucaDeBenitez
);

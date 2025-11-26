import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraTecpan extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-tecpan.webp");' data-alt="Vista panorámica de Tecpan, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Tecpan: Tradición y Naturaleza en la Costa Chica
    </h1>
    <h2 class="hero__subtitle">
      Playas tranquilas, paisajes verdes y la calidez de un pueblo lleno de historia.
    </h2>
    <a href="../destinos/tecpan.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Tecpan de Galeana es un pueblo de la Costa Chica de Guerrero, conocido por su ambiente relajado, playas poco concurridas y rica tradición cultural. Es ideal para quienes buscan naturaleza, pesca, gastronomía local y descanso junto al mar.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tecpan/playa-principal.webp");' data-alt="Playa Principal Tecpan"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Playa Principal</p>
            <p class="place-card__description">
              Una playa tranquila con arena dorada y aguas templadas, ideal para nadar, relajarse y disfrutar del atardecer.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tecpan/lago-tecpan.webp");' data-alt="Laguna de Tecpan"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Laguna de Tecpan</p>
            <p class="place-card__description">
              Un espacio natural perfecto para paseos en lancha, pesca y observación de aves en un entorno relajante.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tecpan/playa-michigan.webp");' data-alt="Playa Michigan Tecpan"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Playa Michigan</p>
            <p class="place-card__description">
              Una playa menos concurrida, ideal para quienes buscan tranquilidad y contacto directo con la naturaleza.
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tecpan/mirador-tecpan.webp");' data-alt="Mirador de Tecpan"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Mirador del Cerro</p>
            <p class="place-card__description">
              Desde este punto elevado se pueden apreciar vistas panorámicas del pueblo, la laguna y la costa cercana.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tecpan/iglesia.webp");' data-alt="Iglesia de Tecpan"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Parroquia de Tecpan</p>
            <p class="place-card__description">
              Un templo tradicional del pueblo, ideal para conocer la historia local y participar en festividades religiosas.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Tecpan</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Mariscos frescos de Tecpan" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/tecpan/mariscos.webp">
        <h3 class="food-card__title">Mariscos Frescos</h3>
        <p class="food-card__description">Preparados al estilo local, incluyendo ceviches, cocteles y pescados a la talla.</p>
      </div>

      <div class="food-card">
        <img alt="Pozole de Tecpan" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/tecpan/pozole.webp">
        <h3 class="food-card__title">Pozole Costa Chica</h3>
        <p class="food-card__description">Versión local del pozole, ideal para disfrutar en festividades o reuniones familiares.</p>
      </div>

      <div class="food-card">
        <img alt="Dulces tradicionales" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/tecpan/dulces.webp">
        <h3 class="food-card__title">Dulces Tradicionales</h3>
        <p class="food-card__description">Una variedad de dulces artesanales típicos de la región, perfectos para acompañar tu visita.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Tecpan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a mayo, cuando el clima es más seco y agradable para disfrutar de la playa y la laguna.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Tecpan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se llega por carretera desde Acapulco, Zihuatanejo o Chilpancingo. También hay rutas locales de autobús desde pueblos cercanos.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Las fiestas patronales en honor a San Juan Bautista y celebraciones locales en torno a la laguna son muy representativas del municipio.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Tecpan?</h2>
  <p class="cta-section__text">Relájate en playas tranquilas, disfruta de la naturaleza y conoce la calidez de la Costa Chica. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/tecpan.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Tecpan" tabindex="0">Ver más sobre Tecpan</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-viajar-a-tecpan", PageViajaraTecpan);

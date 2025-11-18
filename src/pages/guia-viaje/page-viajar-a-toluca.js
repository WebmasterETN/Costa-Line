import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraToluca extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
       <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-toluca.webp");' data-alt="Vista panorámica de Toluca, Estado de México">
  <div class="hero__content">
    <h1 class="hero__title">
      Toluca: Cultura y Naturaleza
    </h1>
    <h2 class="hero__subtitle">
      Museos, parques y arquitectura histórica a pocos minutos de CDMX.
    </h2>
    <a href="../destinos/toluca.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Toluca es la capital del Estado de México, conocida por su rica historia, arquitectura colonial y modernos centros culturales. Es ideal para turismo urbano, paseos gastronómicos y actividades al aire libre.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/toluca/museo-galeria.webp");' data-alt="Museo de Arte Moderno Toluca"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Museo de Arte Moderno</p>
            <p class="place-card__description">
              Exhibiciones permanentes y temporales de artistas nacionales e internacionales, ubicado en el corazón de Toluca.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/toluca/plaza-de-los-martires.webp");' data-alt="Plaza de los Mártires Toluca"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Plaza de los Mártires</p>
            <p class="place-card__description">
              Centro histórico con arquitectura colonial, cafés, tiendas y eventos culturales al aire libre.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/toluca/catedral.webp");' data-alt="Catedral de Toluca"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Catedral de Toluca</p>
            <p class="place-card__description">
              Icono religioso y arquitectónico de la ciudad, con impresionantes vitrales y detalles barrocos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/toluca/parque-metropolitano.webp");' data-alt="Parque Metropolitano Toluca"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Parque Metropolitano</p>
            <p class="place-card__description">
              Ideal para actividades al aire libre, caminatas, ciclopistas y espacios recreativos en plena naturaleza urbana.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/toluca/mercado-2.webp");' data-alt="Mercado de Artesanías Toluca"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado de Artesanías</p>
            <p class="place-card__description">
              Un lugar perfecto para adquirir artesanías, textiles y productos locales de la región.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Toluca</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Chorizo y carnitas" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/toluca/chorizo-carnitas.webp">
        <h3 class="food-card__title">Chorizo y Carnitas</h3>
        <p class="food-card__description">Especialidades locales, perfectas para disfrutar con tortillas recién hechas.</p>
      </div>

      <div class="food-card">
        <img alt="Dulces típicos" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/toluca/dulces-tipicos.webp">
        <h3 class="food-card__title">Dulces Típicos</h3>
        <p class="food-card__description">Gastronomía dulce tradicional elaborada artesanalmente en Toluca.</p>
      </div>

      <div class="food-card">
        <img alt="Bebidas tradicionales" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/toluca/bebidas-tradicionales.webp">
        <h3 class="food-card__title">Bebidas Tradicionales</h3>
        <p class="food-card__description">Bebidas locales ideales para acompañar la visita y conocer los sabores de Toluca.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Toluca?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a abril, con clima fresco y agradable, ideal para recorrer plazas, museos y parques.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Toluca?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se encuentra a aproximadamente 1 hora de CDMX, accesible por carretera o transporte público desde la capital y municipios cercanos.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La Feria del Alfeñique, celebraciones religiosas y eventos culturales en museos y plazas del centro histórico son los más representativos.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Toluca?</h2>
  <p class="cta-section__text">Descubre su cultura, parques, arquitectura histórica y disfruta de los sabores tradicionales del Estado de México. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/toluca.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Toluca" tabindex="0">Ver más sobre Toluca</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-viajar-a-toluca", PageViajaraToluca);

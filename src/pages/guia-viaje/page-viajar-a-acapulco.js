/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";
import "../../js/slick.js?v=1.0.0";

class PageViajarAAcapulco extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
   <app-cotiza></app-cotiza>

<!-- Components for page -->

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-acapulco.webp");' data-alt="Vista panorámica de la Bahía de Acapulco">
  <div class="hero__content">
    <h1 class="hero__title">
      Vive el Encanto y la Energía de Acapulco
    </h1>
    <h2 class="hero__subtitle">
      Viaja desde Ciudad de México con ETN Turistar Lujo y descubre playas legendarias, espectáculos de clavadistas y una vida nocturna vibrante en la Perla del Pacífico.
    </h2>
    <a href="../destinos/autobus-a-acapulco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Acapulco, en la costa del Pacífico, combina playas doradas, historia y tradición turística. Famosa por sus clavadistas en La Quebrada, su bahía y sus barrios costeros, ofrece actividades para quienes buscan sol, mar y cultura local.
    </p>
    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/acapulco/quebrada-acapulco.webp");' data-alt="Clavadistas de La Quebrada, Acapulco"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. La Quebrada</p>
            <p class="place-card__description">
              El icónico mirador donde los clavadistas se lanzan desde altos acantilados frente a la bahía —un espectáculo tradicional que atrae a visitantes de todo el mundo.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/acapulco/fuerte-san-diego.webp");' data-alt="Fuerte de San Diego"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Fuerte de San Diego</p>
            <p class="place-card__description">
              Antigua fortaleza convertida en museo que muestra la historia naval y comercial de Acapulco, con vistas increíbles de la bahía.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/acapulco/isla-la-roqueta.webp");' data-alt="Isla La Roqueta"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Isla La Roqueta</p>
            <p class="place-card__description">
              Una isla perfecta para nadar, hacer snorkel, caminar entre senderos naturales y disfrutar de playas más tranquilas.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/acapulco/playa-condesa.webp");' data-alt="Playa La Condesa"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Playa La Condesa</p>
            <p class="place-card__description">
              Una de las playas más populares de la Costera Miguel Alemán, ideal para disfrutar de ambiente, comida y deportes acuáticos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/acapulco/capilla-de-la-paz.webp");' data-alt="Capilla de la Paz"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Capilla de la Paz</p>
            <p class="place-card__description">
              Uno de los miradores más hermosos de la ciudad, ubicado en lo alto del cerro. Perfecto para ver el atardecer y contemplar Acapulco desde las alturas.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Acapulco</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Ceviche estilo Acapulco" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/acapulco/ceviche-acapulco.webp">
        <h3 class="food-card__title">Ceviche estilo Acapulco</h3>
        <p class="food-card__description">Mariscos frescos marinados con limón, jitomate y cebolla, un clásico refrescante para el clima cálido del puerto.</p>
      </div>

      <div class="food-card">
        <img alt="Tacos de pescado Acapulco" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/acapulco/tacos-pescado-acapulco.webp">
        <h3 class="food-card__title">Tacos de Pescado</h3>
        <p class="food-card__description">Una delicia costera preparada con pescado fresco, capeado o asado, acompañados de salsas y limón.</p>
      </div>

      <div class="food-card">
        <img alt="Camarones estilo Acapulco" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/acapulco/camarones-acapulco.webp">
        <h3 class="food-card__title">Camarones a la Diabla</h3>
        <p class="food-card__description">Un clásico picante de Acapulco: camarones salteados en salsa roja intensa, perfectos para los amantes del sabor fuerte.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor época para visitar Acapulco?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a abril, cuando hay menos lluvias y el clima es más agradable para disfrutar la playa.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar desde Ciudad de México?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Puedes viajar desde la Ciudad de México en autobús saliendo desde Taxqueña u otras terminales. El trayecto suele durar entre 4.5 y 6 horas.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comprar en Acapulco?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Artesanías, recuerdos de playa, joyería con conchas marinas y productos locales como dulces y botanas.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Acapulco?</h2>
  <p class="cta-section__text">Vive playas, espectáculos y la vibrante gastronomía de Acapulco. Compra tus boletos y viaja con la comodidad y elegancia que solo ETN Turistar Lujo puede ofrecerte.</p>
  <a href="../destinos/autobus-a-acapulco.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver Horarios y Precios a Acapulco</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>


    `;
  }
}
customElements.define("viajar-a-acapulco", PageViajarAAcapulco);

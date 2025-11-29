import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraChilpancingo extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
   <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-chilpancingo.webp");' data-alt="Vista panorámica de Chilpancingo, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Descubre el Corazón Cultural de Guerrero: Chilpancingo
    </h1>
    <h2 class="hero__subtitle">
      Historia, naturaleza y tradición en la capital de Guerrero — desde museos y zonas arqueológicas hasta senderos serranos.
    </h2>
    <a href="../destinos/autobus-a-chilpancingo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Chilpancingo de los Bravo, capital del estado de Guerrero, es un destino lleno de historia y tradición. Sus museos, monumentos, comunidades rurales y paisajes serranos ofrecen una experiencia auténtica para quienes buscan conocer la esencia cultural del estado.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/chilpancingo/museo-regional-guerrero.webp");' data-alt="Museo Regional de Guerrero"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Museo Regional de Guerrero</p>
            <p class="place-card__description">
              Uno de los recintos culturales más importantes del estado, donde se exhiben piezas arqueológicas, históricas y artísticas que muestran la identidad de Guerrero.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/chilpancingo/catedral-chilpancingo.webp");' data-alt="Catedral de Santa María de la Asunción"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Catedral de la Asunción</p>
            <p class="place-card__description">
              La iglesia principal de la ciudad, de estilo neoclásico y rodeada de vida local. Es un punto clave para tomar fotografías y pasear por el centro histórico.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/chilpancingo/la-avispa-museo-interactivo.webp");' data-alt="Museo Interactivo La Avispa"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Museo Interactivo La Avispa</p>
            <p class="place-card__description">
              Un museo interactivo ideal para familias y niños, con salas educativas, juegos, actividades científicas y áreas temáticas.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/chilpancingo/ruinas-tehuacalco.webp");' data-alt="Zona Arqueológica de Tehuacalco"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Zona Arqueológica de Tehuacalco</p>
            <p class="place-card__description">
              Un sitio ceremonial rodeado de naturaleza donde se conservan estructuras, montículos y espacios rituales de antiguas culturas de la región.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/chilpancingo/zoologico-zoochilpan.webp");' data-alt="Zoológico Zoochilpan"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Zoológico Zoochilpan</p>
            <p class="place-card__description">
              Un espacio recreativo y educativo con animales, jardines y atracciones ideales para pasar una tarde tranquila en familia.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Chilpancingo</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Pozole de camagua Chilpancingo" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/chilpancingo/pozole-camagua.webp">
        <h3 class="food-card__title">Pozole de Camagua</h3>
        <p class="food-card__description">Preparado con maíz maduro y frijol, este platillo es uno de los sabores más tradicionales y distintivos de la región.</p>
      </div>

      <div class="food-card">
        <img alt="Pozole verde de Guerrero" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/chilpancingo/pozole-verde-guerrero.webp">
        <h3 class="food-card__title">Pozole Verde de Guerrero</h3>
        <p class="food-card__description">Una de las especialidades más famosas del estado, preparado con maíz cacahuazintle y una combinación de hierbas que le dan su característico color verde.</p>
      </div>

      <div class="food-card">
        <img alt="Bebida tradicional chilate" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/chilpancingo/chilate.webp">
        <h3 class="food-card__title">Chilate</h3>
        <p class="food-card__description">Bebida típica de Guerrero elaborada con cacao, arroz y azúcar, perfecta para refrescarse y acompañar la gastronomía local.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Chilpancingo?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">El clima es agradable gran parte del año, pero si te gustan los eventos culturales y gastronómicos, visita durante ferias y festivales tradicionales.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué comunidades cercanas puedo visitar?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Amojileca y Xocomanatlán son excelentes para actividades al aire libre, senderismo y turismo rural.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Hay rutas para hacer senderismo?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Sí, la Sierra Madre del Sur ofrece senderos con vistas panorámicas ideales para caminatas y fotografía de naturaleza.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Chilpancingo?</h2>
  <p class="cta-section__text">Explora la historia, gastronomía y tradiciones de la capital de Guerrero. Planea tu visita y descubre la esencia cultural de Chilpancingo.</p>
  <a href="../destinos/autobus-a-chilpancingo.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Chilpancingo" tabindex="0">Ver más sobre Chilpancingo</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>


        `;
  }
}
customElements.define("page-viajar-a-chilpancingo", PageViajaraChilpancingo);

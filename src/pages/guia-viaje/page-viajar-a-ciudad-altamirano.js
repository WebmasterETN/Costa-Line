import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraCiudadAltamirano extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
           <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-altamirano.webp");' data-alt="Vista panorámica de Ciudad Altamirano, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Descubre la Tierra Caliente de Guerrero: Ciudad Altamirano
    </h1>
    <h2 class="hero__subtitle">
      Tradición, cultura y sabor en la capital económica de la región — desde su catedral y plazas hasta paisajes serranos y festividades únicas.
    </h2>
    <a href="../destinos/ciudad-altamirano.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Ciudad Altamirano, cabecera del municipio de Pungarabato, es uno de los puntos más importantes de la Tierra Caliente de Guerrero. Su cultura, comercio regional, tradiciones religiosas y gastronomía la convierten en un destino auténtico para quienes desean conocer la vida y esencia calienteña.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/altamirano/catedral-altamirano.webp");' data-alt="Catedral de San Juan Bautista"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Catedral de San Juan Bautista</p>
            <p class="place-card__description">
              La iglesia principal de la ciudad y sede de la Diócesis de Ciudad Altamirano. Un punto de encuentro emblemático, perfecto para recorrer y fotografiar.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/altamirano/cerro-chuperio.webp");' data-alt="Cerro Chuperio"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Cerro Chuperio</p>
            <p class="place-card__description">
              Uno de los símbolos naturales del municipio, ideal para caminatas cortas, contemplación del paisaje y fotografía panorámica.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/altamirano/piramide-altamirano.webp");' data-alt="Pirámide de Pungarabato"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. “La Pirámide” de Pungarabato</p>
            <p class="place-card__description">
              Un punto turístico distintivo en la zona, muy visitado por locales y viajeros que buscan conocer los alrededores de la ciudad.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/altamirano/parque-municipal-altamirano.webp");' data-alt="Parque Municipal de Altamirano"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Parque Municipal</p>
            <p class="place-card__description">
              Punto central de convivencia familiar en la ciudad. Áreas verdes, sombra, bancas y un ambiente tranquilo para descansar.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/altamirano/mercado-altamirano.webp");' data-alt="Mercado Municipal Ciudad Altamirano"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado Municipal</p>
            <p class="place-card__description">
              Ciudad Altamirano es un centro comercial clave de la región. Su mercado es ideal para probar comida local, comprar semillas, artesanías y productos regionales.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de la Tierra Caliente</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Enchiladas Calentanas" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/altamirano/enchiladas-calentanas.webp">
        <h3 class="food-card__title">Enchiladas Calentanas</h3>
        <p class="food-card__description">Tortillas hechas a mano, fritas en comal y bañadas en una salsa tradicional de la región. Un clásico imperdible.</p>
      </div>

      <div class="food-card">
        <img alt="Pozole estilo Tierra Caliente" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/altamirano/pozole-tierra-caliente.webp">
        <h3 class="food-card__title">Pozole Calentano</h3>
        <p class="food-card__description">Una variación local del pozole guerrerense, más condimentado y con un estilo muy característico de la zona.</p>
      </div>

      <div class="food-card">
        <img alt="Atole local calentano" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/altamirano/atole-calentano.webp">
        <h3 class="food-card__title">Atole Calentano</h3>
        <p class="food-card__description">Bebida tradicional preparada con maíz y especies locales, ideal para acompañar antojitos típicos.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Ciudad Altamirano?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La ciudad tiene clima cálido la mayor parte del año. Si prefieres evitar lluvias, viaja entre noviembre y mayo.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Ciudad Altamirano?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Puedes llegar en autobús con rutas de CostaLine y otras líneas que conectan con Acapulco, Chilpancingo, Iguala y más destinos del estado.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Las fiestas de San Juan Bautista en junio y las celebraciones del Cristo de Esquipulas en enero son de las más importantes en la región.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Ciudad Altamirano?</h2>
  <p class="cta-section__text">Explora la vida, tradición y gastronomía de la Tierra Caliente. Planea tu viaje y descubre todo lo que Altamirano tiene para ti.</p>
  <a href="../destinos/ciudad-altamirano.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Ciudad Altamirano" tabindex="0">Ver más sobre Ciudad Altamirano</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define(
  "page-viajar-a-ciudad-altamirano",
  PageViajaraCiudadAltamirano
);

import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraCiudadDeMexico extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
           <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-ciudad-de-mexico.webp");' data-alt="Vista panorámica de la Ciudad de México">
  <div class="hero__content">
    <h1 class="hero__title">
      Descubre la Gran Capital de México: Ciudad de México
    </h1>
    <h2 class="hero__subtitle">
      Cultura, historia, modernidad y sabores únicos — desde su Centro Histórico hasta museos de clase mundial, barrios emblemáticos y experiencias inolvidables.
    </h2>
    <a href="../destinos/ciudad-de-mexico.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      La Ciudad de México, una de las metrópolis más grandes del mundo, combina tradición y modernidad en cada rincón. Su arquitectura histórica, museos, gastronomía, arte urbano, parques inmensos y vibrante vida cultural la convierten en un destino imprescindible para viajeros nacionales e internacionales.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cdmx/zocalo-cdmx.webp");' data-alt="Zócalo de la Ciudad de México"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Zócalo y Centro Histórico</p>
            <p class="place-card__description">
              El corazón de la ciudad: la Catedral Metropolitana, el Palacio Nacional y calles llenas de historia, museos y arquitectura colonial.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cdmx/chapultepec-cdmx.webp");' data-alt="Bosque de Chapultepec"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Bosque de Chapultepec</p>
            <p class="place-card__description">
              Uno de los parques urbanos más grandes del mundo, con museos icónicos, áreas verdes, lagos y el Castillo de Chapultepec.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cdmx/frida-kahlo-cdmx.webp");' data-alt="Museo Frida Kahlo en Coyoacán"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Museo Frida Kahlo en Coyoacán</p>
            <p class="place-card__description">
              La famosa Casa Azul, uno de los museos más visitados de México, rodeado de calles coloridas, artesanías y cafés tradicionales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cdmx/xochimilco-cdmx.webp");' data-alt="Trajineras de Xochimilco"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Xochimilco</p>
            <p class="place-card__description">
              Un patrimonio cultural donde puedes recorrer canales en trajinera, disfrutar música tradicional y probar antojitos mexicanos.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/cdmx/angel-independencia-cdmx.webp");' data-alt="Ángel de la Independencia"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Paseo de la Reforma y el Ángel</p>
            <p class="place-card__description">
              Una de las avenidas más emblemáticas del país, rodeada de monumentos, rascacielos, restaurantes y zonas culturales.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de la Ciudad de México</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Tacos al pastor en Ciudad de México" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/cdmx/tacos-al-pastor.webp">
        <h3 class="food-card__title">Tacos al Pastor</h3>
        <p class="food-card__description">El platillo estrella de la capital: carne adobada al trompo, piña, cebolla y cilantro. Un clásico imperdible.</p>
      </div>

      <div class="food-card">
        <img alt="Quesadillas tradicionales de CDMX" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/cdmx/quesadillas-cdmx.webp">
        <h3 class="food-card__title">Quesadillas (¿con queso o sin queso?)</h3>
        <p class="food-card__description">Un debate eterno, pero un antojito delicioso preparado en comal con ingredientes tradicionales.</p>
      </div>

      <div class="food-card">
        <img alt="Churros mexicanos" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/cdmx/churros-cdmx.webp">
        <h3 class="food-card__title">Churros con Chocolate</h3>
        <p class="food-card__description">Una parada obligada para quienes buscan probar algo dulce en cualquier momento del día.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar la Ciudad de México?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La CDMX tiene clima templado todo el año. De marzo a junio hay más calor; de julio a octubre llueve más; noviembre y diciembre son frescos y agradables.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a la Ciudad de México?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La capital conecta con todo el país por autobús, avión y carretera. Cuenta con múltiples terminales como TAPO, Terminal Norte, Poniente y Sur.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Desfile de Día de Muertos, Día de la Independencia, Noche de Museos, Feria de las Culturas Amigas y múltiples eventos culturales durante todo el año.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a la Ciudad de México?</h2>
  <p class="cta-section__text">Descubre museos, barrios históricos, gastronomía única y toda la vida cultural de la capital. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/ciudad-de-mexico.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre la Ciudad de México" tabindex="0">Ver más sobre Ciudad de México</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define(
  "page-viajar-a-ciudad-de-mexico",
  PageViajaraCiudadDeMexico
);

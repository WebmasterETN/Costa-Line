import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraIxtapaZihuatanejo extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
           <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-ixtapa-zihuatanejo.webp");' data-alt="Vista panorámica de Ixtapa-Zihuatanejo, Guerrero">
  <div class="hero__content">
    <h1 class="hero__title">
      Ixtapa-Zihuatanejo: Playas, sol y tradición
    </h1>
    <h2 class="hero__subtitle">
      Un destino de playa único, combinando resorts modernos, calidez local y paisajes naturales impresionantes.
    </h2>
    <a href="../destinos/autobus-a-ixtapa-zihuatanejo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Ixtapa y Zihuatanejo, aunque cercanas, ofrecen experiencias distintas: Ixtapa con sus resorts modernos y playas ideales para el descanso, y Zihuatanejo con su encanto de pueblo pesquero, calles empedradas y vida local auténtica. Perfecto para quienes buscan sol, playa, gastronomía y actividades acuáticas.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/ixtapa-zihuatanejo/playa-la-ropa.webp");' data-alt="Playa la Ropa"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Playa la Ropa</p>
            <p class="place-card__description">
              Una playa amplia, ideal para nadar, practicar deportes acuáticos o simplemente relajarse bajo el sol. Perfecta para toda la familia.
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/ixtapa-zihuatanejo/playa-la-madera.webp");' data-alt="Playa la Madera"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Playa la Madera</p>
            <p class="place-card__description">
              Con su ambiente tranquilo y pintoresco, esta playa es ideal para paseos en lancha, disfrutar mariscos frescos y apreciar atardeceres inolvidables.
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/ixtapa-zihuatanejo/malecon-zihuatanejo.webp");' data-alt="Malecón de Zihuatanejo"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Malecón de Zihuatanejo</p>
            <p class="place-card__description">
              Paseo peatonal frente al mar, con tiendas de artesanías, restaurantes y un ambiente local auténtico, ideal para caminar al atardecer.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/ixtapa-zihuatanejo/isla.webp");' data-alt="Islas cercanas a Ixtapa"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Excursiones a islas cercanas</p>
            <p class="place-card__description">
              Actividades como snorkel, pesca deportiva y paseos en bote a pequeñas islas y calas paradisíacas de la región.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/ixtapa-zihuatanejo/mercado-artesanal.webp");' data-alt="Mercado Artesanal Ixtapa-Zihuatanejo"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado Artesanal</p>
            <p class="place-card__description">
              Perfecto para adquirir artesanías locales, recuerdos y productos frescos de la región, como frutas, salsas y dulces típicos.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Ixtapa-Zihuatanejo</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Ceviche fresco de la Costa Grande" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/ixtapa-zihuatanejo/ceviche.webp">
        <h3 class="food-card__title">Ceviche Fresco</h3>
        <p class="food-card__description">Preparado con pescado y mariscos locales, limón, tomate y chile. Refrescante y perfecto para la playa.</p>
      </div>

      <div class="food-card">
        <img alt="Pescado a la talla" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/ixtapa-zihuatanejo/pescado.webp">
        <h3 class="food-card__title">Pescado a la Talla</h3>
        <p class="food-card__description">Marinado en adobo rojo y asado al carbón, acompañado de tortillas, salsas frescas y guarniciones locales.</p>
      </div>

      <div class="food-card">
        <img alt="Tiritas de pescado estilo Zihuatanejo" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/ixtapa-zihuatanejo/tiritas-pescado.webp">
        <h3 class="food-card__title">Tiritas de Pescado</h3>
        <p class="food-card__description">Un clásico de la Costa Grande, preparado con pescado fresco, limón, cebolla morada y chile verde.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Ixtapa-Zihuatanejo?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a mayo encontrarás clima seco y cálido, ideal para disfrutar playas, actividades acuáticas y paseos al aire libre.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Ixtapa-Zihuatanejo?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se puede llegar por carretera desde Acapulco, Chilpancingo y otras ciudades de Guerrero, o por avión al aeropuerto internacional de Ixtapa-Zihuatanejo.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">El Festival Internacional de la Guelaguetza, celebraciones de Semana Santa y eventos culturales en el Malecón son los más importantes.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Ixtapa-Zihuatanejo?</h2>
  <p class="cta-section__text">Sol, playas paradisíacas y gastronomía costera te esperan en este destino único de Guerrero. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/autobus-a-ixtapa-zihuatanejo.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Ixtapa-Zihuatanejo" tabindex="0">Ver más sobre Ixtapa-Zihuatanejo</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>



        `;
  }
}
customElements.define(
  "page-viajar-a-ixtapa-zihuatanejo",
  PageViajaraIxtapaZihuatanejo
);

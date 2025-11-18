import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageViajaraTepotzotlan extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

<section class="hero" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("../src/assets/img/guia-viajes/banners/banner-guia-viaje-tepotzotlan.webp");' data-alt="Vista panorámica de Tepotzotlán, Estado de México">
  <div class="hero__content">
    <h1 class="hero__title">
      Tepotzotlán: Historia y Arte Colonial
    </h1>
    <h2 class="hero__subtitle">
      Museos, arquitectura virreinal y calles llenas de tradición a solo minutos de CDMX.
    </h2>
    <a href="../destinos/tepotzotlan.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver más sobre el destino" tabindex="0">Ver más sobre el destino</a>
  </div>
</section>

<section class="content-section content-section--light">
  <div class="container">
    <p class="intro-text">
      Tepotzotlán es un pueblo mágico del Estado de México, famoso por su arquitectura colonial, plazas históricas y museos de arte sacro. Es ideal para paseos culturales, fotografía y disfrutar de la gastronomía tradicional mexicana.
    </p>

    <hr class="divider">
    <h2 class="section-title">Top 5 Lugares Imperdibles</h2>

    <div class="place-list">

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tepotzotlan/museo-nacional-arquitectura.webp");' data-alt="Museo Nacional del Virreinato Tepotzotlán"></div>
          <div class="place-card__content">
            <p class="place-card__title">1. Museo Nacional del Virreinato</p>
            <p class="place-card__description">
              Ubicado en un antiguo convento jesuita, exhibe arte sacro, mobiliario y objetos de la época virreinal de México.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tepotzotlan/plaza-principal.webp");' data-alt="Plaza Principal Tepotzotlán"></div>
          <div class="place-card__content">
            <p class="place-card__title">2. Plaza Principal</p>
            <p class="place-card__description">
              Centro histórico del pueblo, rodeado de arquitectura colonial, cafés y tiendas de artesanías locales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tepotzotlan/iglesia-santo-domingo.webp");' data-alt="Iglesia de Santo Domingo Tepotzotlán"></div>
          <div class="place-card__content">
            <p class="place-card__title">3. Iglesia de Santo Domingo</p>
            <p class="place-card__description">
              Una joya arquitectónica con impresionantes murales, retablos y detalles ornamentales que reflejan el arte colonial.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tepotzotlan/avenida-comercial.webp");' data-alt="Calles y avenidas de Tepotzotlán"></div>
          <div class="place-card__content">
            <p class="place-card__title">4. Calles y Avenidas Coloniales</p>
            <p class="place-card__description">
              Pasear por las calles empedradas es recorrer la historia y admirar fachadas virreinales y tiendas tradicionales.
            </p>
          </div>
        </div>
      </div>

      <div class="place-card-wrapper">
        <div class="place-card">
          <div class="place-card__image" style='background-image: url("../src/assets/img/guia-viajes/destinos/tepotzotlan/mercado-artesanias.webp");' data-alt="Mercado de Artesanías Tepotzotlán"></div>
          <div class="place-card__content">
            <p class="place-card__title">5. Mercado de Artesanías</p>
            <p class="place-card__description">
              Ideal para llevar recuerdos, desde cerámica y textiles hasta dulces típicos y objetos decorativos locales.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="content-section content-section--darker">
  <div class="container">
    <h2 class="section-title">Sabores de Tepotzotlán</h2>
    <div class="food-grid">

      <div class="food-card">
        <img alt="Gorditas de maíz" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/tepotzotlan/gorditas.webp">
        <h3 class="food-card__title">Gorditas Tradicionales</h3>
        <p class="food-card__description">Hechas a mano con rellenos típicos como chicharrón, frijol o requesón.</p>
      </div>

      <div class="food-card">
        <img alt="Dulces de convento" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/tepotzotlan/dulces-convento.webp">
        <h3 class="food-card__title">Dulces de Convento</h3>
        <p class="food-card__description">Especialidades dulces típicas de la región, elaboradas artesanalmente.</p>
      </div>

      <div class="food-card">
        <img alt="Pulque y bebidas tradicionales" class="food-card__image" src="../src/assets/img/guia-viajes/platillos/tepotzotlan/pulque.webp">
        <h3 class="food-card__title">Pulque y Bebidas Tradicionales</h3>
        <p class="food-card__description">Bebidas locales ideales para acompañar la visita y conocer los sabores del Estado de México.</p>
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
          <span class="faq-item__question">¿Cuál es la mejor temporada para visitar Tepotzotlán?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">De noviembre a abril, con clima agradable, ideal para recorrer plazas, museos y calles empedradas.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cómo llegar a Tepotzotlán?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">Se encuentra a solo 45 minutos de CDMX, accesible por carretera o transporte público desde la capital y municipios cercanos.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué festividades destacan?</span>
          <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
        </summary>
        <p class="faq-item__answer">La Feria de Tepotzotlán, celebraciones religiosas y festivales culturales en el Museo Nacional del Virreinato son las más destacadas.</p>
      </details>

    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="cta-section__title">¿Listo para tu Viaje a Tepotzotlán?</h2>
  <p class="cta-section__text">Explora su historia, su arquitectura virreinal y disfruta de los sabores tradicionales del Estado de México. Planea tu viaje hoy mismo.</p>
  <a href="../destinos/tepotzotlan.html" class="btn btn--light" target="_blank" rel="noopener noreferrer" aria-label="Ir a ver horarios y más información sobre Tepotzotlán" tabindex="0">Ver más sobre Tepotzotlán</a>
</section>

<app-cookies-policy></app-cookies-policy>
<app-button-whats></app-button-whats>
<app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-viajar-a-tepotzotlan", PageViajaraTepotzotlan);

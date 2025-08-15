/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-destinations-grid-english.js";
import "../../components/app-banner-promotional.js";
import "../../components/app-card-left-description.js";
import "../../components/app-grid-text.js";
import "../../js/slick.js?v=1.0.0";

class AppHomeEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-doters></app-modal-doters>
      <div class="__first-section">
        <app-payments></app-payments>
      </div>
      <section class="__section">
        <app-section-title section-title="Is this your first trip with ETN? Discover everything we’ve prepared for you."></app-section-title>
        <!-- Grid here -->
        <app-destinations-grid-english
          destinations='[
            {"id": "destination1", "title": "Aguascalientes", "content": "Discover the beauty of Aguascalientes", "image": "../../src/assets/img/destinos-img/grid-english/aguascalientes-background.webp", "link": "../../-de-autobus-a-aguascalientes.html"},

            {"id": "destination2", "title": "Culiacán", "content": "Explore the city of gardensCuliacán It welcomes you with gardens, ocean flavors, and sunsets that stay with you.", "image": "../../src/assets/img/destinos-img/grid-english/culiacan-background.webp", "link": "../../-de-autobus-a-culiacan.html"},

            {"id": "destination3", "title": "Guadalajara", "content": "It’s the art that blooms between colonial walls, and the design that reinvents itself every day.", "image": "../../src/assets/img/destinos-img/grid-english/guadalajara-background.webp", "link": "../../-de-autobus-a-guadalajara.html"},

            {"id": "destination4", "title": "León", "content": "It welcomes you with neo-Gothic architecture, urban parks, and a creative scene full of surprises.", "image": "../../src/assets/img/destinos-img/grid-english/leon-background.webp", "link": "../../-de-autobus-a-leon.html"},

            {"id": "destination5", "title": "Guanajuato", "content": "It’s a journey to the heart of history—colorful alleys, living legends, and plazas that sing at sunset.", "image": "../../src/assets/img/destinos-img/grid-english/guanajuato-background.webp", "link": "../../-de-autobus-a-guanajuato.html"},
            
            {"id": "destination6", "title": "Querétaro", "content": "It invites you to savor Mexico with all your senses.", "image": "../../src/assets/img/destinos-img/grid-english/queretaro-background.webp", "link": "../../-de-autobus-a-queretaro.html"}
            ]'
        ></app-destinations-grid-english>
      </section>

      <section class="__section">
        <app-section-title section-title="Benefits from your very first trip."></app-section-title>
        <!-- Banner promotional "viajero protegido" here-->
        
        <app-banner-promotional
          image-src="../../src/assets/img/banner/banner-viajero-protegido.webp"
          image-alt="Promotional banner for Aguascalientes"
          link-href="#"
        ></app-banner-promotional>
      </section>

      <section class="__section">
        <app-section-title section-title="Your comfort is our top priority."></app-section-title>
        <article class="description_text">
          At ETN, we know the journey matters just as much as the destination. That’s why our luxury coaches are designed for you to enjoy every kilometer with peace of mind, style, and attention to detail.
        </article>
        <article class="subtitle_text">
          These are just a few of the services that make your journey truly special:
        </article>
        <app-card-left-description src="../../src/data/special-services-data.json"></app-card-left-description>
      </section>

      <section class="__section">
        <app-section-title section-title="Mexico awaits with unforgettable routes. Travel comfortably, safely, and at your own pace with ETN."></app-section-title>
        <app-grid-text src="../../src/data/grid-text-data.json"></app-grid-text>
      </section>

    `;
	}
}
customElements.define("app-home-english", AppHomeEnglish);

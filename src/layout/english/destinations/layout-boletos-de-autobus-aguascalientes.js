/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-section-title.js";
import "../../../components/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

class AppBoletosAutobusAguascalientesEnglish extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/banner/english/destinos/aguascalientes/banner-aguascalientes-english.webp"
              image-alt="Promotional banner for Aguascalientes"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Aguascalientes is waiting. ETN will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/destinos-img/aguascalientes-english/templo-san-antonio-paduba.webp", "alt": "San Marcos Fair"},
                {"id": "2", "src": "../../src/assets/img/destinos-img/aguascalientes-english/museo-aguascalientes.webp", "alt": "Cathedral Basilica of Our Lady of the Assumption"},
                {"id": "3", "src": "../../src/assets/img/destinos-img/aguascalientes-english/templo-san-antonio.webp", "alt": "Tres Centurias Park"}
              ]'
              paragraph-text="Aguascalientes is a hidden gem in the heart of Mexico. Renowned for its warm hospitality, colonial architecture, vibrant festivals, and one of a kind museums, this destination blends history, culture, and modern charm in every corner. From the iconic San Marcos Fair to its temples, plazas, and cultural spaces, Aguascalientes offers an authentic and safe experience for travelers seeking to explore the soul of Mexico — with style and peace of mind."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Aguascalientes"></app-section-title>
            <app-explore-section></app-explore-section>
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Travel Mexico in style with ETN Turistar—luxury and reliability from start to finish"></app-section-title>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Explore more destinations with ETN Turistar Mexico is waiting for you."></app-section-title>
            
          </section>
        `;
    this._loadExploreSectionData();
  }

  async _loadExploreSectionData() {
    try {
      const response = await fetch(
        "../../src/data/english/destinations/aguascalientes/cards-explore-section.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();
      const exploreSection = this.querySelector("app-explore-section");
      if (exploreSection) {
        exploreSection.setAttribute("cards-data", JSON.stringify(cardsData));
      }
    } catch (error) {
      console.error("Could not load explore section data:", error);
    }
  }
}
customElements.define(
  "layout-boletos-de-autobus-aguascalientes-english",
  AppBoletosAutobusAguascalientesEnglish
);

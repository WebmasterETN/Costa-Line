/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-card-text-bg-white.js";

class LayoutSalidasCharters extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_Doters_Feria_Tacambaro1_Autovias.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.png", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/Bw_Patio_Santa_Fe_Morelia2_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet.png","smallImage": "../src/assets/img/banner/Movil.png", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/Bw_Playas_Semana_Santa_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet-1.png","smallImage": "../src/assets/img/banner/Movil-1.png", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            <section class="__section __section--salidas-charters">
                <app-section-title section-title="Salidas Charters"></app-section-title>
                <article class="__article-grid">
                    <p class="__paragraph">Para tu comodidad ETN yTuristar te ofrece un servicio de autobuses de lujo con salidas exclusivas en hoteles y centros comerciales de la Ciudad de México y Guadalajara.</p>
                    <div class="__grid-container" id="grid-cards-container"></div>
                </article>
            </section>
        `;

        await this.loadCharterCards();
    }

    async loadCharterCards() {
        try {
            // Construye la URL al archivo JSON de forma robusta usando import.meta.url
            const jsonFileUrl = new URL('../data/cards-salidas-charters-data.json', import.meta.url);
            const response = await fetch(jsonFileUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cardsData = await response.json();
            
            const container = this.querySelector('#grid-cards-container');
            if (container) {
                cardsData.forEach(cardInfo => {
                    const cardElement = document.createElement('app-card-text-bg-white');
                    cardElement.setAttribute('card-title', cardInfo.title);
                    cardElement.setAttribute('card-description', cardInfo.description);
                    container.appendChild(cardElement);
                });
            } else {
                console.error('El contenedor #grid-cards-container no fue encontrado.');
            }
        } catch (error) {
            console.error('Error al cargar los datos de las tarjetas de salidas charters:', error);
        }
    }
}
customElements.define("layout-salidas-charters", LayoutSalidasCharters);
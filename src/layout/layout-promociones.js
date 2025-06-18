/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-forms.js";
import "../js/slick.js?v=1.0.0";

class LayoutPromociones extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_Doters_Feria_Tacambaro1_Autovias.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/Bw_Patio_Santa_Fe_Morelia2_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet.png","smallImage": "../src/assets/img/banner/Movil.png", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/Bw_Playas_Semana_Santa_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet-1.png","smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            <section class="__section __section__promo">
                <app-section-title section-title="Conoce nuestras promociones que tenemos para ti"></app-section-title>
                  <div class="__grid-container">
                    <article class="__article__promo">
                        <h3 class="__article-title">Compra con descuento </h3>
                       <a class="__article-link" href="../../../ofertas-en-1-click.html">  <img src="src/assets/img/programs/mosaico-web-5-10-2025_small.jpg" alt="Atencion a clientes"> </a>
                    </article>
                    <article class="__article__promo">
                        <h3 class="__article-title">Acumula Puntos Doters</h3>
                       <a class="__article-link" href="https://etn.com.mx/doters/"> <img src="src/assets/img/programs/Mosaico_Doters_ETN_small.jpg" alt="Atencion a clientes">  </a>
                    </article>
                </div>
              <app-section-title section-title="Descuentos de Temporadas"></app-section-title>
                  <article class="__article__banner">
                      <h3 class="__article-title">Buen fin </h3>
                      <a class="__article-banner-link" href="../../../buen-fin/index.html">  <img src="src/assets/img/banner/banner-buen-fin.png" alt="Atencion a clientes"> </a>
                  </article>
              <app-section-title section-title="Convenios"></app-section-title>
                  <article class="__article__guide">
                      <h3 class="__article-title">Guía de Descuentos</h3>
                      <div class="__article-guide"> </div>
                  </article>
            </section>
        `;
	}
}
customElements.define("layout-promociones", LayoutPromociones);

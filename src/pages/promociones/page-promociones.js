/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-modal-doters.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-forms.js";

class PagePromociones extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

             <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/doters-web.webp","mediumImage": "../src/assets/img/banner/tablet/doters-tablet.webp", "smallImage": "../src/assets/img/banner/movil/doters-mobile.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/web/10-desc-web.webp", "mediumImage": "../src/assets/img/banner/tablet/10-desc-tablet.webp","smallImage": "../src/assets/img/banner/movil/10-desc-mobile.webp", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/web/home-verano-web.webp", "mediumImage": "../src/assets/img/banner/tablet/home-verano-tablet.webp","smallImage": "../src/assets/img/banner/movil/home-verano-mobile.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section __section__promo">
                <app-section-title section-title="Conoce nuestras promociones que tenemos para ti"></app-section-title>
                  <div class="__grid-container">
                    <article class="__article__promo">
                        <h3 class="__article-title">Compra con descuento </h3>
                       <a class="__article-link" href="../../../ofertas-en-1-click.html">  <img src="../src/assets/img/promociones/costa-descuentos.webp" alt="Atencion a clientes"> </a>
                    </article>
                    <article class="__article__promo">
                        <h3 class="__article-title">Acumula Puntos Doters</h3>
                       <a class="__article-link" href="https://costaline.com.mx/doters/"> <img src="../src/assets/img/promociones/costa-doters.webp" alt="Atencion a clientes">  </a>
                    </article>
                </div>
              <app-section-title section-title="Descuentos de Temporadas"></app-section-title>
                  <article class="__article__banner">
                      <h3 class="__article-title">Buen fin </h3>
                      <a class="__article-banner-link" href="../../../buen-fin/index.html">  <img src="../src/assets/img/banner/promociones/web/buen-fin-web.webp" alt="Atencion a clientes"> </a>
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
customElements.define("page-promociones", PagePromociones);

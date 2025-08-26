/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-table-pets.js";
import "../js/slick.js?v=1.0.2";
import "../components/app-destinations-table.js";

class PageKueskiPay extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/promociones/web/costa-kueski-web.webp","mediumImage": "../src/assets/img/banner/promociones/tablet/costa-kueski-tablet.webp", "smallImage": "../src/assets/img/banner/promociones/movil/costa-kueski-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="Compra tus boletos de autobús con Kueski Pay"></app-section-title>
            </section>

            <p class="__welcome-text">
                Ahora en Costa Line te ofrecemos una nueva forma de pago flexible y segura con Kueski Pay. Esta opción te permite adquirir tus boletos de autobús sin necesidad de tarjeta de crédito, pagando después en cómodos plazos.
            </p>

            <section class="__sections">
                <article class="__bg-blue">

                    <h3 class="__subtitle-section">¿Cómo funciona?</h3>

                    <ol type="1" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Selecciona tu destino y elige Kueski Pay como método de pago al finalizar tu compra.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Serás redirigido a la plataforma de Kueski Pay, donde podrás completar tu solicitud de pago.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Recibe la confirmación y prepárate para viajar con la comodidad y seguridad de Costa Line.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        📢 Importante: La autorización y gestión del pago se realizan directamente en Kueski Pay, por lo que este proceso es independiente de nuestro sitio web.
                    </p>


                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">

                    <h3 class="__subtitle-section">Ventajas de pagar con Kueski Pay</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Compra hoy y paga después en plazos flexibles.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                No necesitas tarjeta de crédito.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Proceso 100% en línea, rápido y seguro.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        📌 Consulta los términos y condiciones de <a class="__link-text" href="https://preguntas.frecuentes.kueski.com/hc/es/sections/12385659058203-T%C3%A9rminos-y-condiciones">Kueski Pay aquí</a>
                    </p>
                    
                </article>
            </section>

           
    `;
  }
}

customElements.define("page-kueski-pay", PageKueskiPay);

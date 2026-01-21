/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-modal-doters.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-table-pets.js";

class PageFacturacion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <div class="__panthom_space"></div>

            <section class="__section">
                <app-section-title section-title="Facturación CFDI 4.0."></app-section-title>
            </section>


                    <p class="__text__info" style="">
                         <strong>Conoce los datos que necesitas y cómo registrarlos correctamente para generar tu factura.</strong>
                    </p>
             

            <section class="__sections">
                <a href="https://ventas.costaline.com.mx/request.aspx?PRGNAME=Facturacion&_ga=2.32171326.1421465980.1688335622-27413750.1682467979&_gl=1*gcc1g0*_gcl_au*MTkyNjkzNzc5MS4xNzY4NTA0ODI2" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Facturación Costa Line" tabindex="0">
                    🧾 Factura aquí
                </a>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">📋 DATOS OBLIGATORIOS</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>RFC</strong> del receptor
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Nombre completo</strong> (en MAYÚSCULAS, como aparece en tu Constancia de Situación Fiscal)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Código Postal</strong> del domicilio fiscal
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Régimen Fiscal</strong> registrado ante el SAT
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Uso del CFDI</strong> adecuado
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Correo electrónico (opcional)
                            </p>
                        </li>
                    </ul>
                   
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">🔍 ¿DÓNDE CONSULTAR ESTOS DATOS?</h3>

                    <p>
                        Accede fácilmente desde los servicios del SAT:
                    </p>
                    
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <a class="__link-text" href="https://www.sat.gob.mx/portal/public/tramites/constancia-de-situacion-fiscal">Generar Constancia</a>
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <a class="__link-text" href="https://www.sat.gob.mx/aplicacion/login/28889/obten-tu-cedula-de-identificacion-fiscal">Obtener Cédula Fiscal</a>
                            </p>
                        </li>
                    </ul>
                   
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">✍️ EJEMPLO DE LLENADO CORRECTO</h3>

                    <div class="info-card">
                        <p><strong>Nombre:</strong> RAFAELI CAMPOSORIO RUÍZO</p>
                        <p><strong>Código Postal:</strong> 01001</p>
                        <p><strong>Uso CFDI:</strong> D01 - Honorarios médicos, dentales y gastos hospitalarios</p>
                        <p><strong>Régimen Fiscal:</strong> 605 - Actividades empresariales y profesionales</p>
                    </div>
            </article>
            <section class="__sections">
                <div class="warning-card">
                    <p>
                        <strong>⚠️Importante:</strong>
                        Todos estos datos son requeridos por el SAT de acuerdo al Artículo 29-A
                        del Código Fiscal de la Federación. Vigente desde el 1 de enero de 2022.
                    </p>


                </div>
                
                <a href="https://ventas.costaline.com.mx/request.aspx?PRGNAME=Facturacion&_ga=2.32171326.1421465980.1688335622-27413750.1682467979&_gl=1*gcc1g0*_gcl_au*MTkyNjkzNzc5MS4xNzY4NTA0ODI2" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Facturación Costa Line" tabindex="0">
                    🧾 Factura aquí
                </a>

            </section>

          
        `;
    
  }

}
customElements.define("page-facturacion", PageFacturacion);

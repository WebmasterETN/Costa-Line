/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-table-pets.js";


class LayoutTerminosHotTravel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-modal-doters></app-modal-doters>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/banner-hot-sale.jpg","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.png", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
                
        <app-payments></app-payments>
                    
        <section class="__section">
            <app-section-title section-title="Términos y Condiciones"></app-section-title>
            <h3 class="__subtitle">Términos y Condiciones Hot Travel</h3>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Hot Travel</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            <b>Hot Travel</b> aplica para venta en línea <b>(App ETN y sitio web)</b> y centro de contacto telefónico y se puede realizar la compra con cualquier forma de pago.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No aplica venta en taquillas, puntos de venta propios <b>ETN</b> ni canales o puntos de venta externos.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En las rutas definidas para <b>Hot Travel</b> no se podrán vender boletos abiertos, solo confirmados. Se podrán vender boletos abiertos pero con una tarifa a precio de adulto.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Las tarifas de <b>Hot Travel</b> no aplican ni son acumulables con otro tipo de descuentos o promociones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Las Tarifas de <b>Hot Travel</b> son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El periodo para comprar boletos de autobús y obtener la tarifa de <b>Hot Travel</b> es a partir del primer minuto del día siguiente a la consulta y hasta un mes posterior. En caso de NO contar con tarifa anticipada, aplica el descuento del 10% por compra en internet por viaje sencillo y 15% por viaje redondo comprando en línea o bien aplica el 10% por viaje redondo comprando en taquilla.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La tarifa y los descuentos siempre estarán sujetos a disponibilidad.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La tarifa de <b>Hot Travel</b> no aplica en la compra de boletos con beneficios de INAPAM, menores, estudiantes, maestros y boletos abiertos.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La acumulación de puntos Doters de un boleto con tarifa de <b>Hot Travel</b>, deberá calcularse sobre la tarifa que pagó el cliente en efectivo o tarjeta bancaria y/o cualquier otra forma de pago (Pagos referenciados, exceptuando los puntos). Los puntos Doters generados pueden ser utilizados como forma de pago y se apegaran las mismas políticas y restricciones de Pago con puntos de Doters.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Se reubicará sin costo a la próxima salida disponible al pasajero que haya perdido su viaje y llegue a la terminal dentro de los próximos 30 minutos a su hora de salida. Si llega después de los 30 minutos a su hora de salida o requiere salir después u otro día se cobrará 50% de la tarifa adulto.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Políticas de Pagos Referenciados Hot Travel:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para las referencias que genere el sistema por operaciones de <b>Hot Travel</b> el cliente tendrá 24 horas para realizar el pago correspondiente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El pago de las reservación de viaje de operaciones de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En las reservaciones que involucren operaciones de <b>Hot Travel</b> y Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Las Tarifas de <b>Hot Travel</b> son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El cliente puede realizar cambios de clases de servicio, fecha y horario. Para Tarifas de Viajero Anticipado no aplica cambio de nombre de pasajero, teniendo que pagar el cliente la diferencia con la tarifa vigente en taquilla al momento de realizar el viaje.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Políticas de Intercambio de Boletos:</h3>

                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para tarifas de Hot Travel no aplica cambio de nombre de pasajero.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.etn.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en taquillas y/o puntos de venta <b>ETN</b> presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a un máximo de dos cambios por boleto.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa Hot Travel pagada, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago podrá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa de <b>Hot Travel</b> pagada, no habrá devoluciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Con la tarifa de <b>Hot Travel</b> no se aceptan cancelaciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Aplica todas las formas de pago en sitio web.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Asientos sujetos a disponibilidad, consúltalos en <b>www.etn.com.mx</b> y <b>App ETN</b>
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para dudas y comentarios, comunícate a nuestro centro de atención a clientes al <b>800 8000 386</b> Opción 1.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Rutas Participantes:</h3>
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Vigencia de compra del - al - de -- 2025.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para viajar del --- de --- al -- --- ---- y del -- --- al -- --- de 2025
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Descuentos de hasta el 45%.
                        </p>
                    </li>
                </ol>
            </article>
        </section>
    `;
  }
}
customElements.define("layout-terminos-hot-travel", LayoutTerminosHotTravel);
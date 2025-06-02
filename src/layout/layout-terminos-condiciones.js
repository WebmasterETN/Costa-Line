/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-table-pets.js";

class LayoutTerminosCondiciones extends HTMLElement {
  connectedCallback() {
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
            
            <section class="__section">
                <app-section-title section-title="Términos y Condiciones"></app-section-title>
                <h3 class="__subtitle">Bienvenido a ETN Turistar</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Compra de Boletos</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Puede comprar sus boletos hasta una hora antes de la salida deseada.</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si durante el proceso de compra usted tiene algún problema o duda, contamos con
                                asistencia personalizada, en el Contact Center marcando al 800 8000 386
                                (opción 1 y 4) o a través del chat, donde con gusto le atenderemos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los boletos o pases de abordar son válidos únicamente para la fecha y hora especificadas en los mismos, verifíquese al adquirirlo y consérvelo hasta el final de su recorrido, ya que le da derecho al seguro de viaje y a 25 kilos de equipaje sin costo.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sus boletos son válidos única y exclusivamente para la fecha y hora anotados
                                en el mismo, verifíquese al adquirirlo.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los viajes perdidos por no abordar el autobús en tiempo y forma no serán reembolsables; los reembolsos que procedan de acuerdo a la ley serán realizados de la misma forma en que se haya efectuado el pago.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Doters</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Estos términos y condiciones del servicio regulan la relación entre ETN
                                Turistar Lujo y las personas que usan sus servicios (“Personas Usuarias”).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las Personas Usuarias aceptan estos términos y condiciones desde el momento
                                en que se registran en el sitio y usan el servicio adquiriendo boletos de ETN
                                Turistar.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cuando debamos hacer cambios importantes en nuestros servicios, publicaremos
                                las modificaciones con 10 días de anticipación para que las Personas
                                Usuarias puedan revisarlas y seguir usando el servicio. En ningún caso
                                afectarán las operaciones que ya hayan finalizado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las Personas Usuarias que no tengan servicios pendientes con ETN Turistar o
                                con otras Personas Usuarias, podrán finalizar su relación con ETN Turistar
                                cancelando su cuenta.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Forma de pagos</h3>
                    
                    <h4>Tarjetas Bancarias.</h4>

                    <p>
                        Se aceptan pagos con tarjetas bancarias (débito y crédito) respaldadas por
                        Visa, Mastercard y American Express (aplican restricciones).
                    </p>
                    
                    <p>
                        Pagos Electrónicos con PayPal (aplican restricciones, su uso está regido por
                        las normativas que tanto PayPal como ETN han establecido para su operación).
                    </p>
                    
                    <p>En compras por INTERNET NO HAY CANCELACIONES NI DEVOLUCIONES</p>
                
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Pagos referenciados OXXO</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Esta referencia no es un comprobante de pago, por lo tanto, en ningún caso puede ser válida para viajar.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                            El pago de las reservaciones de viaje de operaciones sin Tarifa Completa podrá efectuarse 24 hrs. antes de la salida del autobús.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pasado el tiempo mencionado, sin excepción alguna, la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los pagos solo serán recibidos en los horarios de servicio de los establecimientos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Solo se reciben pagos en efectivo y en una sola exhibición.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Una vez efectuado el pago correspondiente, el sistema enviará de forma automática al correo electrónico capturado en el registro previo, la confirmación del viaje con el pase de abordar.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El pago de la reservación de Pago Referenciado OXXO puede efectuarse en cualquiera de las sucursales de Oxxo, presentando en caja el comprobante impreso con el número de referencia para confirmar su boleto. Los pagos solo serán recibidos en los horarios de servicio del establecimiento.
                            </p>
                        </li>
                    </ul>
                </article>

            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Tarifa de viajero anticipado</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Viajero Anticipado aplica tanto para venta en línea (App ETN y sitio web), taquillas, puntos de venta propios ETN, puede realizar la compra con cualquier forma de pago.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                No aplica para canales o puntos de venta externos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En las rutas definidas para Viajero Anticipado no se podrán vender Boletos Abiertos, solo confirmados. Se podrán vender boletos abiertos, pero con una tarifa a precio de adulto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las tarifas de Viajero Anticipado no aplican ni son acumulables con otro tipo de descuentos o promociones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las tarifas de Viajero Anticipado no aplican ni son acumulables con otro tipo de descuentos o promociones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las tarifas de Viajero Anticipado son personales e intransferibles. Para hacerla efectiva, el cliente deberá presentar una identificación oficial antes de abordar el autobús; si no cumple con el requisito deberá pagar la Tarifa Completa.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El periodo para comprar boletos de autobús y obtener la tarifa de Viajero Anticipado es a partir del primer minuto del día siguiente a la consulta y hasta dos meses posteriores, disponible en internet, taquillas y centro telefónico. En caso de NO contar con tarifa anticipada, aplica el descuento del 5% por compra en internet por viaje sencillo y 10% por viaje redondo comprando en línea o bien aplica el 10% por viaje redondo comprando en taquilla.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La tarifa y los descuentos siempre estarán sujetos a disponibilidad para viajar martes, miércoles y jueves.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La promoción de 50% de descuento para pasajeros de Viva Aerobús será únicamente sobre la tarifa de adulto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La tarifa de Viajero Anticipado no aplica en la compra de boletos con beneficios de INAPAM, menores, estudiantes, maestros y boletos abiertos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se reubicará sin costo a la próxima salida disponible al pasajero que haya perdido su viaje y llegue a la terminal dentro de los próximos 30 minutos a su hora de salida. Si llega después de los 30 minutos a su hora de salida o requiere salir después u otro día, se cobrará 50% de la tarifa de adulto.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections-links">
                <h3 class="__subtitle-section">Ver Rutas participantes:</h3>
                <a href="https://etn.com.mx/viajero-anticipado/" target="_blank" class="__link" aria-label="enlace para ver Rutas participantes" title="enlace para ver Rutas" role="link" tabindex="0" rel="noopener noreferrer">https://etn.com.mx/viajero-anticipado/</a>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Tiempo mínimo de presentación y abordaje.</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Al término de su compra deberá imprimir, descargar o guardar su pase de abordar en su dispositivo móvil; con él, tendrá que presentarse directamente en la sala de espera (donde aplique) o en el área de andenes, de preferencia media hora antes de su salida para documentar su equipaje y abordar el autobús sin necesidad de canje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Además, deberá proporcionar al momento de abordar el autobús el número de operación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Compras de boletos efectuadas a través del Contact Center deberán en todo momento ser recogidas en taquillas por lo menos 30 minutos antes del abordaje del autobús, con todos los requisitos necesarios. De lo contrario, el pasajero no podrá hacer uso del servicio.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Boleto electrónico e-ticket</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Durante el proceso de compra de su boleto en Taquillas, nuestros agentes de ventas le darán la opción de enviarle su boleto electrónico “E-TICKET” a su correo electrónico, el cual es un boleto que se podrá presentar directamente en el andén y le permitirá el abordaje a su unidad solo presentando su identificación oficial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Este tipo de boleto se rige por todas las consideraciones mencionadas en este apartado de términos y condiciones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Este tipo de boleto NO aplica para boletos abiertos, ni para boletos comprados por el Centro Telefónico, solo para viajes confirmados sencillos o redondos comprados en Taquilla y Puntos de Venta propios de ETN Turistar.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Boleto abierto</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Usted podrá adquirir su boleto abierto en viaje sencillo, redondo o con enlace.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Este tipo de boleto cuenta con una vigencia de 6 meses a partir de la fecha de su compra y queda sujeto a disponibilidad de asientos y descuentos por autobús.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los boletos abiertos que no hayan sido utilizados dentro del periodo de vigencia perderán toda validez y no podrán ser usados, cancelados o reembolsados.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                No está permitida la venta de boletos abiertos a pasajeros con descuento de Estudiantes y Profesores.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los boletos abiertos adquiridos por internet solo pueden ser pagados con tarjeta bancaria (débito o crédito) Visa, Mastercard, American Express, Pagos Electrónicos con PayPal y OXXO. (No aplican pagos en efectivo).
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Confirmación de boleto abierto</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si su boleto abierto fue adquirido por internet, deberá acceder a nuestro sitio web www.etn.com.mx y en la sección “Boleto Abierto” podrá realizar la confirmación de su viaje con el número de operación y NIT, hasta 90 minutos antes de la salida deseada.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La confirmación del boleto abierto también se puede solicitar directamente en taquillas, presentando su pase de abordar impreso, preferentemente hasta una hora antes de la salida deseada. También puede hacer su reservación previamente vía telefónica, llamando al 800 8000 386, opción 1 del menú principal.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Todo boleto abierto deberá ser confirmado previamente; de lo contrario, el pasajero no podrá abordar el autobús.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Cambios y cancelaciones (modificación de itinerario)</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En este tipo de compra (internet) no hay cancelaciones de boletos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Nuestro servicio de cambios no tiene ningún costo adicional y solo se podrán realizar hasta un máximo de dos cambios por boleto, incluyendo, en el caso de la compra de boleto abierto, la confirmación del mismo. El costo adicional solo aplica en caso de que, para la fecha seleccionada, la tarifa sea mayor.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cambios en internet: Solo podrá cambiar fechas y horarios. Aplica para aquellas compras que hayan sido realizadas por este medio. Si desea modificar el viaje, deberá acceder al sitio web www.etn.com.mx y en la sección “Modifique su Itinerario” ingresar el número de operación y NIT de su boleto. Solo podrá realizar cambio de fecha y hora. No está permitida la modificación de origen, destino, nombre o tipo de pasajero, y solo podrá aplicarse 90 minutos después de su compra y hasta 90 minutos antes del horario de salida.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si necesita cambiar más de un boleto con un itinerario diferente, podrá ingresar tantos números de operación como desee, separados por un espacio. Si el viaje incluye boletos de algún menor, el cambio de itinerario deberá realizarse ingresando el número de operación del boleto del menor junto con el de un adulto; de lo contrario, el sistema no permitirá la modificación si se realiza de manera independiente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cambios en taquillas: Los cambios de fecha y horario podrán realizarse en las taquillas o puntos de venta de ETN Turistar. No está permitida la modificación de origen, destino, nombre o tipo de pasajero, y solo podrá aplicarse 90 minutos después de su compra y hasta 90 minutos antes del horario de salida. Es indispensable presentar el pase de abordar generado en el portal o el “E-Ticket” enviado a su correo, así como una identificación oficial vigente (solo se aceptarán credencial para votar, cédula profesional, licencia de manejo y pasaporte) para solicitar el cambio correspondiente. Deberá presentarse con un tiempo mínimo de 90 minutos antes de la salida.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Intercambio de Boletos de Viajero Anticipado:</h3>
                                        
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para tarifas de Viajero Anticipado no aplica el cambio de nombre de pasajero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.etn.com.mx) en la sección “Modifique su Itinerario” o también en taquillas y/o puntos de venta de ETN, presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a 2 cambios por internet y 1 en taquilla.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa pagada de Viajero Anticipado, el cliente deberá pagar la diferencia entre la tarifa pagada y la tarifa vigente al momento del cambio de la corrida original. Dicho pago deberá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa pagada de Viajero Anticipado, no habrá devoluciones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los asientos están sujetos a disponibilidad. Consúltelos en www.etn.com.mx, App ETN y taquillas. www.etn.com.mx, App ETN y taquillas.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para dudas y comentarios, comuníquese a nuestro centro de atención a clientes al 800 8000 386.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">

                    <h3 class="__subtitle-section">Tipos de descuentos</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En ETN Turistar se otorgan los siguientes descuentos (sujetos a disponibilidad):
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                3 Menores 50% (Todo el año).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                3 Menores 50% (Todo el año).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                3 Estudiantes 50% (Solo temporada vacacional).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                2 Profesores 25% (Solo temporada vacacional).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                2 Personas con Discapacidad (PCD) 50% de descuentos todo el año.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Restricciones</h3>

                    <p>
                        Los pasajeros registrados con descuento de INAPAM, deberán mostrar la
                        credencial expedida por esta institución antes de abordar el autobús para
                        acreditar el descuento, de no presentarla se le cobrará la diferencia del
                        costo total del boleto.
                    </p>
                    
                    <p>
                        Los descuentos de menor solo se aplican si el pasajero tiene entre 3 y 11 años
                        de edad; los niños de menos de 3 años no pagan boleto, viajan en el mismo
                        asiento que el adulto y abordarán con la identificación del adulto que los
                        acompaña. Si el menor representa físicamente una edad mayor de 11 años será
                        necesario acreditar la edad presentando acta de nacimiento o CURP del menor
                        de lo contrario deberá pagar el boleto completo.
                    </p>
                    
                    <p>
                        Los descuentos de Estudiante y de Profesor, solo se otorgan durante los
                        periodos vacacionales publicados por la Secretaría de Educación Pública y se
                        aplican si el interesado presenta al momento de la compra, la credencial con
                        fotografía vigente que lo acredite como Estudiante o Profesor activo, de no
                        cumplir con las condiciones especificadas o no presentarla al momento de
                        abordar se le cobrará la diferencia del costo total del boleto.
                    </p>
                    
                    <p>
                        Estos descuentos solo son aplicables a instituciones educativas que cuenten
                        con reconocimiento de validez oficial o que estén incorporadas a la SEP.
                    </p>
                    
                    <p>
                        El descuento de “PCD” (persona con discapacidad) solo se otorgará a aquellos
                        pasajeros que presenten la credencial vigente que expide el DIF en donde se
                        especifica la discapacidad del solicitante, de no presentarla al momento de
                        la compra y/o al abordar el autobús, se cobrará al pasajero la diferencia
                        del costo total del boleto.
                    </p>
                    
                    <p>
                        ETN Turistar no se hace responsable por el mal pasajeros que presenten la credencial vigente que expide el DIF en donde se especifica la discapacidad del solicitante, de no presentarla al momento de la compra y/o al abordar el autobús, se cobrará al pasajero la diferencia del costo total del boleto.
                    </p>
                    
                        del costo total del boleto.            
                    </p>

                    <p>
                        ETN Turistar no se hace responsable por el mal uso que se haga del pase de
                        abordar, siendo esto obligación exclusivamente de la persona o pasajero que
                        lo imprime.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Documentación de equipaje</h3>

                    <p>
                        La documentación de equipaje se podrá realizar hasta media hora antes de la
                        salida del autobús. Cada pasajero podrá llevar hasta 25 Kilogramos de
                        equipaje libre de cargo (excepto carga). Entiéndase por equipaje: objetos
                        de uso personal, ropa, instrumentos musicales, sillas de ruedas,
                        bicicletas, carriolas, juguetes, herramientas de un arte u oficio, los
                        cuales deberán ser transportados en maletas, bolsas, cajas, etc. solo se
                        permite llevar abordo equipaje de mano como: computadoras portátiles,
                        bolsos pequeños, mochilas y todo artículo que no exceda el tamaño de la
                        gaveta del autobús. En caso de exceder el limite permitido, se cobrará
                        por cada kilo excedente el 1% sobre la tarifa base del costo del boleto
                        (no aplica en tarifas con descuento y/o promociones) .
                    </p>

                    <p>
                        La empresa no se hace responsable por equipajes y/o bultos sin talón o
                        bien bultos y otras pertenencias de mano que el pasajero lleve consigo en
                        el interior del salón del autobús, en caso de pérdida y/o extravío de
                        equipaje documentado, se pagará una indemnización hasta por el
                        equivalente a 20 días de salario mínimo general vigente en la Ciudad de
                        México.
                    </p>

                    <p>
                        Queda prohibida la transportación en el equipaje documentado y de mano lo
                        siguiente: billetes o anuncios de lotería nacional y extranjera;
                        materiales y residuos peligrosos, psicotrópicos y estupefacientes, salvo
                        que su posesión o traslado sea lícita conforme a las disposiciones
                        legales aplicables; armas de fuego y explosivos; animales o perecederos,
                        cuando no se cumplan las condiciones de higiene y seguridad adecuadas, de
                        acuerdo con la normatividad aplicable; dinero o títulos de crédito al
                        portador o negociables; cualquier otro bien cuyo tránsito requiera de
                        permiso específico o bien lo restrinja alguna ley en particular, sin que
                        se cuente con dicho permiso específico, cualquier otro bien que prohíban
                        las leyes específicas de la materia, así como cualquier otro artículo,
                        material o cosa que ponga en riesgo a los pasajeros y a su equipaje
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Abordaje de menores solos</h3>

                    <p>
                        No se aceptarán, por ninguna circunstancia, menores viajando solos que no
                        hayan alcanzado los 11 años de edad. Todo menor que viaje solo debe
                        presentar la carta responsiva otorgada por los padres o tutores, donde se
                        exime de toda responsabilidad a la Empresa. El menor debe tener la edad de
                        11 a 17 años. (Toda vez que los niños mayores de 11 años cuentan con la
                        capacidad tanto de hablar, escuchar claramente, así como de reconocer a
                        los padres o tutores y a las personas que los recogerán y de tener la
                        lucidez debida a su edad). El Padre o Tutor del menor, debe permanecer en
                        la central de origen hasta que el autobús salga a su destino.
                    </p>
                </article>

            </section>
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Viaje con mascotas</h3>

                    <p>
                        En nuestra empresa entendemos lo importantes que son sus mascotas para
                        usted y sus seres queridos, por este motivo nos esforzamos por extender
                        nuestro servicio para que puedan acompañarlo en sus viajes, los clientes
                        de la empresa podrán llevar consigo mascotas siempre y cuando se cumpla con
                        las políticas establecidas por la organización.
                    </p>

                    <p>
                        Unicamente viajarán en las corridas “Petfriendly” (identificadas con el
                        logotipo) estas corridas que se ofrecen, están sujetas a ciertos destinos
                        y horarios y sin excepción deberá firmar la carta responsiva
                        correspondiente que exime de cualquier responsabilidad a la organización de
                        la integridad de la mascota. <a href="https://etn.com.mx/docpdf/CARTA-RESPONSIVA-ETN.pdf" target="_blank" rel="noopener noreferrer" class="__link-text" aria-label="Descarga de PDF de la carta responsiva" target="_blank">DESCARGA AQUÍ</a> o solicita en
                        taquilla. Los clientes de la empresa podrán llevar consigo mascotas
                        (perros y gatos) siempre y cuando se cumpla con las políticas
                        establecidas por la organización, exceptuando las establecidas por el
                        gobierno federal en la NOM-059-SEMARNAT-2010.
                    </p>

                    <p>
                        <strong>
                        *ESTÁ PROHIBIDO EL TRASLADO DE MASCOTAS EN EL COMPARTIMIENTO DE
                        EQUIPAJE PARA UNIDADES DE DOBLE PISO.
                        </strong>
                    </p>

                    <p>La empresa tiene definidas tres tipos de mascotas y/o animales de servicio:</p>

                    <ol class="__order-list-row">
                        <li class="__order-list-item"> 
                            <p class="__item-text-bold">1) Mascotas Abordo</p>
                            <p class="__item-text">(Cabina de Pasajeros)</p>
                        </li>
                        <li class="__order-list-item">
                            <p class="__item-text-bold">2) Mascotas Documentadas</p>
                            <p class="__item-text">(Compartimiento Equipaje)</p>
                         </li>
                        <li class="__order-list-item">
                            <p class="__item-text-bold">3) Animales de Apoyo</p>
                            <p class="__item-text">(Discapacidad Visual o Emocional)</p>
                        </li>
                    </ol>
                    
                    <p>*Perros de servicio y/o animales de compañía no tienen costo</p>
                    <p>*Puntos Doters solamente son acumulables a nombre del pasajero.</p>
                    <p>*Sujeto a disponibilidad</p>
                    <p>*No hay cambios ni devoluciones</p>
                </article>
            </section>
               
            <h3 class="__subtitle-section__center">Descarga y llena tu documento de responsabilidad</h3>
            <a href="https://etn.com.mx/docpdf/CARTA-RESPONSIVA-ETN.pdf"  class="__link-section__center">Descarga aquí</a>

            <section class="__section __section__pets-info">
                <h3>Descarga y llena tu documento de responsabilidad</h3>
                <app-table-pets id="pets-table"></app-table-pets>
            </section>
          
            <h3 class="__subtitle-section__left">Mascotas + Contenedor</h3>
          
              <section class="__section __section__pets-info">
                <h3>Costos</h3>
                <app-table-pets id="costs-table"></app-table-pets>
            </section>

            <h3 class="__subtitle-section__left">Si excede el peso maximpo debera cubrir el costo correspondiente</h3>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Políticas Mascotas Abordo Cabina Pasajeros</h3>

                    <p>
                        Los clientes podrán llevar consigo mascotas en la cabina de pasajeros: solo se
                        permitirán perros y gatos cumpliendo los siguientes requisitos:
                    </p>
                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Las mascotas deberán viajar dentro de un contenedor o transportadora rígida
                            tipo Kennel o semirrígida que cumpla las siguientes especificaciones:</p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        El peso máximo de la mascota deberá de ser de 15 kg (incluyendo transportadora), las dimensiones máximas de la transportadora son: 71 cm de largo x 52 cm de ancho x 54 cm de alto, solo se permite una mascota por transportadora. Debe contar con espacio suficiente para que tu mascota esté parada, y pueda moverse y girar de forma natural sin tocar las paredes. Nota: si excede de 15 kg de peso, NO PODRÁ VIAJAR.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Debe contar con espacio suficiente para que tu mascota esté parada, y pueda moverse y girar de forma natural sin tocar las paredes. Las mascotas de apoyo emocional, apoyo a alguna discapacidad visual o física pueden viajar sin transportadora.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se deberá presentar cartilla de vacunación con esquema completo de acuerdo a la edad de la mascota, que especifique la fecha de aplicación de la vacuna contra la rabia y la vigencia de la misma. No es necesario la mascota viaje sedada (Consultar a su médico veterinario).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Solo se permitirá trasladar una mascota por pasajero, limitado a 2 mascotas por autobús identificados con la imagen o sujeto a disponibilidad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El pasajero deberá llevar consigo un kit de limpieza consistente: pañal o tapete absorbente, trapo, bolsa para deshechos. Será responsabilidad del dueño limpiar completamente los desechos de su mascota.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La empresa transportará Animales Domésticos braquicéfalos en la cabina de pasajeros cumpliendo con las dimensiones, peso y documentos requeridos, en todos los casos el cliente deberá llenar la carta responsiva correspondiente que especifique que el viaje de la mascota será bajo entera responsabilidad del pasajero debido a la posibilidad de desarrollar el síndrome respiratorio propio de dichas razas.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                No se permitirá viajar en la cabina de pasajeros a perros de razas catalogadas como peligrosas: Pit Bull Terrier, Staffordshire Bull Terrier, American Staffordshire Terrier, Rottweiler, Dogo Argentino, Fila Brasileiro, Tosa Inu y Akita Inu. O también, dependiendo de su complexión física, musculatura, altura y peso. Solo se permitirá su transportación documentadas en el compartimiento de equipaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se deberá cubrir el monto establecido para el traslado de la mascota de acuerdo a la temporada: Baja el 75% del valor del asiento; Alta el 100% del valor del asiento, ambos tomando de base la tarifa de adulto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En todos los casos se deberá llenar la carta responsiva correspondiente para poder trasladar la mascota.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Mascotas Documentadas</h3>

                    <p>
                        Se podrán llevar consigo mascotas documentadas en el compartimiento de
                        equipaje de la unidades de un piso sin cargo adicional si se cumplen con los
                        siguientes requisitos:
                    </p>

                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las mascotas deberán viajar dentro de un contenedor o transportadora rígida tipo Kennel que cumpla las siguientes especificaciones:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        El peso máximo de la mascota deberá de ser de 32 kg (incluyendo transportadora), las dimensiones máximas de la transportadora son: 128 cm de largo x 45 cm de ancho x 65 cm de alto. Solo se permite una mascota por transportadora.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        La transportadora debe contar con espacio suficiente para que tu mascota esté parada, y pueda moverse y girar de forma natural sin tocar las paredes.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        No debe llevar implementos o accesorios (juguetes, golosinas, premios u otros objetos, elaborados con ingredientes de origen rumiante), de lo contrario, serán retirados para su destrucción.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En el caso de perros y gatos se deberá presentar Cartilla de vacunación con esquema completo de acuerdo a la edad de la mascota, que especifique la fecha de aplicación de la vacuna contra la rabia y la vigencia de la misma. No es necesario la mascota viaje sedada (Consultar a su médico veterinario).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En el caso de perros y gatos la mascota deberá tener por lo menos ocho semanas de nacido al momento de realizar el viaje y no requerir de su madre para la alimentación. Al momento del viaje la mascota no debe presentar signos de enfermedades infectocontagiosas, que no presenten heridas recientes o en proceso de cicatrización.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La empresa no transportará mascotas en el compartimiento de equipaje de las unidades de doble piso, lo anterior con la intención de velar por la vida de la mascota debido a la posibilidad de desarrollar el síndrome respiratorio o cualquier otra afectación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En estos casos donde la mascota viaje documentada el cliente deberá llenar la carta responsiva correspondiente que especifique que el viaje de la mascota será bajo entera responsabilidad del pasajero excluyendo a la empresa de cualquier responsabilidad de la salud y vida de la mascota trasladada.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Animales de apoyo</h3>

                    <p class="__terms-purchase-text">
                        Las personas con discapacidad física, visual, auditiva, mental o intelectual tienen derecho a viajar con un animal de servicio sin cargo adicional. Los animales de servicio serán aceptados en la cabina de pasajeros junto con la persona con discapacidad sin cargo extra, siempre y cuando cumplan los siguientes requisitos:
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Animales de apoyo emocional</h3>

                    <p class="__terms-purchase-text">
                        Las mascotas de apoyo emocional deberán cumplir todos los requisitos estipulados para las mascotas abordo.
                    </p>

                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Presentar documento emitido antes del viaje por el médico tratante (psiquiatra, psicólogo) o institución tratante de la persona con discapacidad emocional que avale la necesidad de un animal de apoyo emocional. Deberá ser presentado en original, firmado y sellado por el médico o institución especialista.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los Animales de Apoyo Emocional deberán portar correa, arnés y placa de identificación.
                            </p>
                        </li>
                        <li>
                            <p class="__terms-purchase-text">
                                El limite de peso para poder transportar una mascota de apoyo emocional será de 12 kilogramos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de no cumplir con alguno de los requisitos aquí señalados, el Animal de Apoyo Emocional será transportado en calidad de mascota en el compartimiento de carga del autobús, bajo las políticas de las mascotas documentadas.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Animales de apoyo visual</h3>

                    <p class="__terms-purchase-text">
                        La empresa permite a los pasajeros con discapacidad visual y/o movilidad reducida estar acompañados durante el viaje de un animal de servicio sin costo, cumpliendo las siguientes políticas:
                    </p>

                    <ol type="A" class="__order-list-column">
                        <li class="__terms-purchase-item">
                            Presentar el documento que avale la condición de Animal de Apoyo Visual:
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Identificación del Animal de Servicio emitida por alguna autoridad en materia de sanidad animal y/u organismo reconocido
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Documento del médico y/o de alguna institución de salud tratante del Pasajero con Discapacidad y/o Movilidad Reducida, o algún otro documento que evidencie que el Pasajero con Discapacidad y/o Movilidad Reducida necesita de un Animal de Servicio para su movilidad y/o acompañamiento.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los perros deberán portar collar y correa o arnés en todo momento.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los perros de apoyo visual deberán utilizar preferente los espacios definidos para su traslado en cabina (Asientos 1,2 y 3 en unidades de un piso; y asientos de planta baja en unidades de dos pisos). Los pasajeros y sus animales de apoyo visual tendrán preferencia en el abordaje para ingresar al autobús antes que los demás pasajeros.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cartilla de vacunación con esquema completo de acuerdo a la edad de la mascota, que especifique la fecha de aplicación de la vacuna contra la rabia y la vigencia de la misma.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Comprobación fiscal (facturación electrónica)</h3>

                    <p>
                        Los pases de abordar emitidos por este tipo de compra no tienen validez
                        fiscal, en caso de requerir el comprobante fiscal, deberá generarlo desde
                        nuestro portal web www.etn.com.mx en el apartado de “Facturación
                        Electrónica” dentro del menú al margen superior derecho, para ello es
                        necesario el número de operación del boleto o pase de abordar, número de
                        asiento y los datos fiscales completos.
                    </p>
                </article>
            </section>
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Restricciones para facturación</h3>

                    <p>
                        En el caso de los boletos abiertos, sólo se podrán facturar una vez que
                        sean utilizados, dentro del lapso de 30 días naturales, contados a partir
                        de la fecha del viaje. Una vez generada la factura, ya no se podrá hacer
                        ningún cambio o cancelación en el documento emitido.
                    </p>
                </article>
            </section>
            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Recuperación de factura</h3>

                    <p>
                        Si durante el proceso de facturación no recibió en su correo electrónico el
                        archivo PDF y XML de su comprobante fiscal, podrá recuperarlo accediendo a
                        nuestro portal web www.etn.com.mx en el apartado de "Facturación
                        Electrónica" debiendo capturar el RFC y correo electrónico. Una vez que
                        haya ingresado al módulo, deberá seleccionar "Consultar Historial" e
                        identificar el documento que desee recuperar ya sea reenviándolo nuevamente
                        a su correo, a una cuenta diferente o bien, imprimir la factura
                        nuevamente.
                    </p>
                </article>
            </section>
        `;
    this.loadAndSetPetsTableData("#pets-table", "../src/data/table-pets.json");
    this.loadAndSetPetsTableData("#costs-table","../src/data/table-pets-2.json");
  }
   async loadAndSetPetsTableData(tableElementSelector, jsonPath) {
    const tableElement = this.querySelector(tableElementSelector);
    const response = await fetch(jsonPath);
    const data = await response.json();
    tableElement.setTableData(data);
  }
}
customElements.define("layout-terminos-condiciones", LayoutTerminosCondiciones);

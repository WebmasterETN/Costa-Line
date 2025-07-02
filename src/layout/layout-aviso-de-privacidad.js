/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-table-pets.js";
import "../js/slick.js?v=1.0.2";
import "../components/app-destinations-table.js";

class LayoutAvisoDePrivacidad extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
           <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/promociones/web/buen-fin-web.webp","mediumImage": "../src/assets/img/banner/promociones/tablet/buen-fin-tablet.webp", "smallImage": "../src/assets/img/banner/promociones/movil/buen-fin-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            
            
            <section class="__section">
                <app-section-title section-title="AVISOS DE PRIVACIDAD"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                <h3 class="__title__section">AVISO DE PRIVACIDAD INTEGRAL PARA ÁREAS COMERCIALES Y DE PROVEEDORES</h3>
                        <p class="__terms-purchase-text">
                            El tratamiento legítimo, controlado e informado de sus datos personales es de vital importancia para alcanzar los objetivos corporativos de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., a través de todas las áreas del negocio reiterando nuestro compromiso con su privacidad y el derecho a la autodeterminación informativa, por lo que, en cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, ponemos a su disposición nuestro AVISO DE PRIVACIDAD.
                        </p>
                        <p class="__terms-purchase-text">
                            Aplicará para todos los productos, servicios, programas, y/o sitios web, que tenga, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., de acuerdo a la naturaleza de los Datos Personales recabados y conforme a la legislación vigente en materia de privacidad y protección de Datos Personales, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá publicar nuevos Avisos de Privacidad específicos o actualizaciones y para los cuales se podrá requerir o no, el consentimiento expreso del titular de los Datos Personales, sin embargo a través de nuestra página web <a class="__link-text" href="../../index.html">www.costaline.com.mx</a> o en nuestras oficinas centrales, se hacen del conocimiento público las políticas de privacidad aplicables a los Datos Personales que nos hayan sido otorgados.
                        </p>

                        <h3 class="__subtitle-section">A. NOMBRE Y DOMICILIO DEL RESPONSABLE</h3>

                        <p class="__terms-purchase-text">
                            Para efectos de la divulgación y tratamiento de los Datos Personales que Usted haya divulgado o pudiera llegar a divulgar, a través de diversos medios y formas incluyendo nuestros sitios de Internet, herramientas tecnológicas, o directamente a nuestros representantes, con motivo de la relación o posible relación por el uso de uno de nuestros productos y/o servicios, así como para cualquier actividad relacionada, se considerará que el responsable es AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., quien es una sociedad constituida de conformidad con las leyes de la República Mexicana, con domicilio de oficina central en avenida Heroica Escuela Naval Militar, número 220, col. Magdalena Culhuacán, alcaldía Coyoacán, CDMX, código postal 04260,.
                        </p>
                        <p class="__terms-purchase-text">
                            Para cualquier información sobre este Aviso de Privacidad, o para el ejercicio de cualquiera de sus derechos derivados de sus Datos Personales, el presente Aviso de Privacidad o de la ley aplicable, incluyendo sin limitación sus derechos de acceso, rectificación, cancelación y oposición, por favor contactar a nuestro Departamento de Privacidad, mediante el correo electrónico atencionaclientes@grupoaers.com.mx o al 01800 0037 635 / 01800 249 0460, de lunes a viernes, de 9 a 18 horas.
                        </p>

                        <h3 class="__subtitle-section">B. DATOS PERSONALES QUE SE RECABAN</h3>

                        <p class="__terms-purchase-text">
                            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad por AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá recabar y, en su caso, tratar los datos personales que a continuación se especifican, con base en la relación jurídica o no jurídica que con el Titular exista:
                        </p>
                        <ul class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Nombre completo
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Edad
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Fecha de nacimiento
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    IFE o INE
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Domicilio
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Correo electrónico
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Número(s) telefónico de contacto, móvil, trabajo, particular
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cuentas de redes sociales
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Datos laborales
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Información URL e IP
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Video grabaciones
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Web Beacons
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cookies
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Registro Federal de Contribuyentes (RFC)
                                </p>
                            </li>
                        </ul>

                        <h3 class="__subtitle-section">B. DATOS PERSONALES QUE SE RECABAN</h3>

                        <p class="__terms-purchase-text">
                            Los datos personales que recabamos de usted, son necesarios para el cumplimiento de las obligaciones, la relación y/o prestación de servicios que exista o pudiera existir entre el Titular y AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., quien los utiliza, almacena, transmite o transfiere en la medida en que la Ley lo permite, para cumplir con las obligaciones derivadas de la relación jurídica o no jurídica que con él Titular se creé.
                        </p>

                        <p class="__terms-purchase-text">
                            Así mismo le informamos que las instalaciones, sucursales y oficinas corporativas de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., contamos con sistema de video vigilancia, por lo cual, podrá ser obtenido por medio de nuestras cámaras de seguridad, imágenes y audio del Titular de Datos Personales, para fines de identificación, control y seguridad de los usuarios, proveedores y personal de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                        </p>
                        
                        <p class="__terms-purchase-text">
                            A continuación enlistamos las finalidades para las que trataremos sus Datos Personales:
                        </p>

                        <ul class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Identificación
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Contacto
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Localización
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Historial del usuario de los servicios
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cumplimiento de obligaciones contractuales
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    De control
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Seguridad
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Mejoras en el servicio
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cobro
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Rectificar vínculo comercial
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Mejorar nuestras iniciativas comerciales y promocionales (mercadotecnia)
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Enviar información o mensajes sobre nuevos productos y/o servicios
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Atender su solicitud de información, de productos o solicitud de uso de los mismos, incluyendo única y expresamente los servicios Destinos Parhikuni, S.A. de C.V.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Atender cualquier queja, pregunta o comentario
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Envío de notificaciones, avisos, propaganda o publicidad sobre nuestros productos o servicios en la medida que así lo permita la legislación aplicable
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Envío de información y noticias de nuestros servicios, así como comunicaciones o publicidad de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., o sus empresas relacionadas
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Crear bases de datos para fines estadísticos, de investigación y desarrollo de nuevos productos o servicios
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Transferirse a otros participantes en los eventos asistidos, para realización de temas comerciales, profesionales y de negocios, así como a prestadores de servicios cuyos productos y servicios resulten de aplicación en el sector
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Envío de notificaciones de cambios a este aviso de privacidad
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Venta de seguros
                                </p>
                            </li>
                        </ul>

                        <h3 class="__subtitle-section">D. REGISTROS PÚBLICOS</h3>

                        <p class="__terms-purchase-text">
                            El Registro Público de Consumidores, de Usuarios y demás afines, señalados en disposiciones relativas a la Protección de Datos Personales, continuarán vigentes y se regirán de conformidad con lo que establezcan las leyes en cita y las disposiciones aplicables que de ellas deriven, junto con los derechos que ellas se consignen.
                        </p>

                        <h3 class="__subtitle-section">E. TRANSFERENCIA Y REMISION DE LOS DATOS PERSONALES</h3>

                        <p class="__terms-purchase-text">
                            Como parte de las operaciones propias del negocio y a fin de cumplir con las finalidades descritas, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá compartir con terceros, nacionales o extranjeros, algunos o todos sus datos personales.
                        </p>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., se asegurará a través de la firma de convenios y la adopción de otros documentos vinculantes, que dichos terceros mantengan medidas de seguridad, administrativas, técnicas y físicas adecuadas para resguardar sus datos personales, así como que dichos terceros únicamente utilicen sus datos personales para las finalidades para los cuales fueron recabados y de conformidad con el presente Aviso de Privacidad.
                        </p>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá compartir todos o parte de sus Datos Personales con entidades autorizadas de acuerdo a la Legislación Mexicana para la supervisión de la realización de nuestras actividades y operaciones de nuestros productos, quienes podrán o no tratar sus Datos Personales por cuenta de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., conforme a las Finalidades y Usos previstos en el presente aviso de privacidad.  Asimismo, se reserva el derecho de compartir sus Datos Personales con autoridades administrativas, judiciales o gubernamentales de cualquier tipo, en los Estados Unidos Mexicanos.
                        </p>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá transferir sus Datos Personales a asesores y prestadores de servicio de cobranza, cualquier adquirente de la empresa, compañías matrices, afiliadas o subsidiarias de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., a asesores profesionales externos y otros prestadores que ofrezcan servicios, soporte técnico, tecnologías de la información y en general, cualquier tercero que actúe como encargado a nombre y por cuenta de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                        </p>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá realizar la remisión de Datos Personales a empresas encargadas de recibir, resguardar y tratar los datos personales del Titular en términos del presente Aviso de Privacidad.
                        </p>

                        <p class="__terms-purchase-text">
                            Salvo esos casos, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., no compartirá o transferirá sus Datos Personales a terceros salvo en los casos previstos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares o cualquier otra legislación o reglamento aplicable.
                        </p>

                        <h3 class="__subtitle-section">F. MECANISMOS DE SEGURIDAD</h3>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., implementará las medidas de seguridad, técnicas, administrativas y físicas, necesarias para procurar la integridad de sus datos personales y evitar su daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Únicamente el personal autorizado de AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., que ha cumplido y observado los correspondientes requisitos de confidencialidad, podrá participar en el tratamiento de sus datos personales. El personal autorizado tiene prohibido permitir el acceso de personas no autorizadas y utilizar sus datos personales para fines distintos a los establecidos en el presente Aviso de Privacidad. La obligación de confidencialidad de las personas que participan en el tratamiento de sus datos personales subsiste aun después de terminada la relación con AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                        </p>

                        <h3 class="__subtitle-section">G. ALMACENAMIENTO DE SUS DATOS PERSONALES</h3>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., podrá conservar sus Datos Personales en bases de datos ubicadas en los Estados Unidos Mexicanos o en el extranjero sin limitación alguna, en el entendido de que se han implementado políticas y estándares comerciales razonables de tecnología y seguridad para proteger la información que nos haya sido proporcionada.
                        </p>

                        <h3 class="__subtitle-section">H. MODIFICACIONES AL AVISO DE PRIVACIDAD</h3>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., se reserva el derecho a modificar los términos y condiciones de este Aviso de Privacidad, en cuyo caso la modificación se notificará a través del medio de comunicación que AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., considere más adecuados para tal efecto pudiendo ser, correo electrónico, avisos en medios de comunicación, comunicación directa, y/o un anuncio en nuestra página de Internet o en nuestras sucursales.
                        </p>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., así como el Titular, reconocen que este Aviso de Privacidad es de vigencia ilimitada. Sin embargo, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., mantendrá actualizado el presente Aviso.
                        </p>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., recomienda al Titular que vuelva a leer con regularidad este documento, de forma que se mantenga siempre informado sobre eventuales modificaciones.
                        </p>

                        <p class="__terms-purchase-text">
                            Las alteraciones o modificaciones al presente Aviso de Privacidad se volverán efectivas inmediatamente después de su publicación en nuestras oficinas centrales, sin perjuicio del uso de algún otro medio para que AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., de las mencionadas publicaciones.
                        </p>

                        <p class="__terms-purchase-text">
                            Una vez realizadas las modificaciones, se presumirá que el Titular que continúe usando o solicitado sus servicios, o realizando los actos que dieron origen a la relación con AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., tendrá pleno conocimiento, habrá leído y consentido el Aviso de Privacidad reformado.
                        </p>

                        <h3 class="__subtitle-section">I. CONSENTIMIENTO</h3>

                        <p class="__terms-purchase-text">
                            El Titular manifiesta y consiente el presente Aviso de Privacidad, de conformidad con la Ley de Protección de Datos Personales en Posesión de los Particulares, no oponiéndose al Aviso de Privacidad. Ningún dato será tratado sino hasta cinco días después de que hayan sido proporcionados por el usuario y este no haya manifestado su negativa.
                        </p>

                        <h3 class="__subtitle-section">J. DERECHOS ARCO</h3>

                        <p class="__terms-purchase-text">
                            De igual forma, Usted podrá solicitar acceder a sus datos, rectificarlos, cancelarlos, oponerse, limitar su uso o divulgación o revocar su consentimiento, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás disposiciones aplicables.  Para ejercer estos derechos, Usted deberá contactar al Departamento de Privacidad, al correo electrónico y/o teléfono que aparecen anteriormente en nuestros datos de contacto.
                        </p>

                        <p class="__terms-purchase-text">
                            En términos de la ley aplicable, cualquier solicitud de ejercicio de los derechos mencionados deberé indicar:
                        </p>

                        <ol class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Nombre y domicilio requisito indispensable para darle respuesta a su solicitud.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Los documentos que acrediten su identidad o, en su caso, la representación legal de la persona que realiza la solicitud a su nombre.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    La descripción clara y precisa de los Datos Personales a los que desea acceder o que desea rectificar, cancelar u oponerse y cualquier otro elemento que facilite la localización de sus datos.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cualquier otro requisito establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y/o demás disposiciones aplicables.
                                </p>
                            </li>
                        </ol>

                        <p class="__terms-purchase-text">
                            En cualquier momento usted podrá solicitar que se suspenda o cancele el envío de mensajes o avisos comerciales e información de nuevos productos, a través de nuestro Departamento de Privacidad.
                        </p>

                        <p class="__terms-purchase-text">
                            En caso de solicitar la rectificación de datos personales, adicionalmente deberá indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.
                        </p>

                        <p class="__terms-purchase-text">
                            La respuesta a su solicitud se le comunicará en un plazo de 10 (diez) días hábiles, contados desde la fecha en que se recibió, pudiendo ampliarse a 5 (cinco) días más en los casos que así lo establezcan la Ley; a efecto de que de resultar procedente, se lleven a cabo las medidas adoptadas para cumplir con su solicitud, mismas que se llevarán a cabo dentro de los 15 (quince) días hábiles siguientes a la fecha en que se comunique la respuesta.
                        </p>

                        <p class="__terms-purchase-text">
                            El Titular de los Datos Personales, deberá cubrir los gastos justificados de envío o con el costo de reproducción en copias u otros formatos. Dependiendo de la información, sea electrónica o física la entrega de la información, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., necesitará un domicilio para enviar la información.
                        </p>

                        <p class="__terms-purchase-text">
                            Cuando los datos hayan dejado de ser necesarios para el cumplimiento de las finalidades previstas por este Aviso de Privacidad y las disposiciones legales aplicables, deberán ser cancelados, bloqueados y suprimidos por ministerio de Ley.
                        </p>

                        <p class="__terms-purchase-text">
                            La Solicitud no será válida ante la omisión de lo señalado anteriormente.
                        </p>

                        <p class="__terms-purchase-text">
                            En caso de haber solicitado el derecho de Oposición al tratamiento de Datos Personales AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., considerará lo siguiente:
                        </p>

                        <ol class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Exista causa legítima y su situación específica así lo requiera, lo cual debe justificar que aun siendo lícito el tratamiento, el mismo debe cesar para evitar que su persistencia cause un perjuicio al titular.                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Requiera manifestar su oposición para el tratamiento de sus datos personales a fin de que no se lleve a cabo el tratamiento para fines específicos.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Que el tratamiento no sea necesario para el cumplimiento de una obligación legal impuesta al responsable.
                                </p>
                            </li>
                        </ol>

                        <p class="__terms-purchase-text">
                            En caso de haber ejercido el derecho de Oposición al tratamiento de los Datos Personales AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., mandará a un Listado de Exclusión los Datos Personales de conformidad con la Ley.
                        </p>
                        
                        <h3 class="__subtitle-section">K. PROCEDIMIENTOS PARA BLOQUEO Y SUPRESIÓN DE LOS DATOS PERSONALES</h3>

                         <p class="__terms-purchase-text">
                            Una vez que los datos hayan sido cancelados, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., conservará un mes más los datos personales del Titular, para fines de aclaraciones y preparación para la supresión. Una vez vencido este plazo, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., bloqueará de manera definitiva los datos personales del titular, no teniendo oportunidad de localización ni contacto con el titular.
                        </p>

                         <p class="__terms-purchase-text">
                            Si el titular llegare a realizar otro acto con AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., deberá de iniciarlo como si la relación nunca hubiera existido. Lo anterior, observando lo señalado en las Políticas de Privacidad para efectos de conservar información por ministerio de ley o de autoridad.
                        </p>

                        <p class="__terms-purchase-text">
                            Los datos personales que hayan sido cumplidos sus fines, pero que no puedan ser cancelados y/o suprimidos por ministerio de ley o contractual, serán bloqueados de los fines a los que eran sometidos, hasta que se pueda suprimir. Durante dicho periodo, los datos personales no podrán ser objeto de tratamiento mayor a la conservación y resguardo.
                        </p>

                        <h3 class="__subtitle-section">L. REVOCACIÓN DEL CONSENTIMIENTO</h3>

                        <p class="__terms-purchase-text">
                            El consentimiento podrá ser revocado en cualquier momento sin que se le atribuyan efectos retroactivos. Para revocar el consentimiento el Titular debe de enviar una Solicitud por escrito a atencionaclientes@grupoaers.com.mx con los siguientes requisitos:
                        </p>
                        
                        <ul class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                Exista causa legítima y su situación específica así lo requiera, lo cual debe justificar que aun siendo lícito el tratamiento, el mismo debe cesar para evitar que su persistencia cause un perjuicio al titular.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                Requiera manifestar su oposición para el tratamiento de sus datos personales a fin de que no se lleve a cabo el tratamiento para fines específicos.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                Que el tratamiento no sea necesario para el cumplimiento de una obligación legal impuesta al responsable.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                Los documentos que acrediten la identidad, IFE y/o PASAPORTE, o en su caso, la representación legal del titular.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                La descripción clara y precisa del vínculo que tiene con la Empresa.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                Aportar la documentación que sustente su petición.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                La solicitud deberá estar dirigida a AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                Documentos que acrediten que la relación que sostiene con AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. ha terminado.
                                </p>
                            </li>
                        </ul>

                        <p class="__terms-purchase-text">
                            AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., emitirá una respuesta en la cual confirmará la revocación del consentimiento, o en su caso, señalará el razonamiento dependiendo del caso en concreto, contando con 15 (quince) días para emitir esta respuesta. Los plazos serán contados a partir del momento en que el correo entra a nuestro servidor, emitiendo AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., el respectivo Acuse de Recibido de Solicitud.
                        </p>

                        <p class="__terms-purchase-text">
                            Cualquier Solicitud ulterior a la mencionada en el párrafo anterior tendrá el mismo efecto que una de inicio, estando el Titular y AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., obligadas a los mismos plazos señalados anteriormente.
                        </p>

                        <p class="__terms-purchase-text">
                            La Solicitud no será válida ante la omisión de lo señalado anteriormente.
                        </p>

                        <h3 class="__subtitle-section">M. JURISDICCIÓN</h3>

                        <p class="__terms-purchase-text">
                            Este Aviso de Privacidad, el tratamiento de sus Datos Personales y/o todos los documentos relacionados se rigen por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y las demás leyes y reglamentos de los Estados Unidos Mexicanos.  La aceptación de este Aviso de Privacidad o la simple continuación en la solicitud de servicios una vez publicado y puesto a disposición el Aviso de Privacidad implica una aceptación expresa de los términos del mismo y su sometimiento expreso a los tribunales de la Ciudad de México, para cualquier controversia o reclamación derivada de este Aviso de Privacidad.
                        </p>

                        <p class="__terms-purchase-text">
                            Manifiesto que he leído y entiendo el presente Aviso de Privacidad y otorgo mi consentimiento, para los casos en que es necesario, para el tratamiento de mis datos personales en los términos del presente. Confirmo que he informado a las personas de las cuales he proporcionado datos personales, sobre el tratamiento que se hará de sus datos.
                        </p>














                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Políticas de Pagos Referenciados BUEN FIN:</h3>
                     <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para las referencias que genere el sistema por operaciones de BUEN FIN el cliente tendrá 24 horas para realizar el pago correspondiente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El pago de las reservación de viaje de operaciones de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En las reservaciones que involucren operaciones de BUEN FIN y Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las Tarifas de BUEN FIN son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
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
                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para tarifas de BUEN FIN no aplica cambio de nombre de pasajero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.etn.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en taquillas y/o puntos de venta ETN presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a un máximo de dos cambios por boleto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                               En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa BUEN FIN pagada, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago podrá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa de BUEN FIN pagada, no habrá devoluciones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Con la tarifa de BUEN FIN no se aceptan cancelaciones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                               Aplica todas las formas de pago en sitio web.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                               Asientos sujetos a disponibilidad, consúltalos en <a class="__link-text" href="../../index.html">www.costaline.com.mx</a> y App AERS Costa Line
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para dudas y comentarios, comunícate a nuestro centro de atención a clientes al 800 0037 635 Opción 1.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Rutas Participantes:</h3>
                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Vigencia de compra del 15-18 de noviembre 2024
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para viajar del 6 de noviembre al 17 diciembre 2024 y del 9 enero al 15 febrero de 2025
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Descuentos sujeto a disponibilidad
                            </p>
                        </li>
                    </ol>
                </article>
            </section>
            
            <h3 class="__title__section">Rutas</h3>

            <section class="__sections __destinations-table-section">
                <app-destinations-table src="../src/data/destinos-cl.json"></app-destinations-table>
            </section>
    `;
  }
}

customElements.define("layout-aviso-de-privacidad", LayoutAvisoDePrivacidad);

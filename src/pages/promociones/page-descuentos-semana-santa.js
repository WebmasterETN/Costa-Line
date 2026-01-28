/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/english/app-banner-image.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-right-description.js";
import "../../components/app-faqs.js";
import "../../components/card-image-top.js";

class DescuentosSemanaSanta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-modal-doters></app-modal-doters>

      <div class="__first-section">
        <app-payments></app-payments>
      </div>

      <section class="__sections">
        <h2 class="__first-title">En Autovías La Línea te invitamos a conocer los eventos y festividades que se celebrarán en los próximos meses.</h2>
      </section>

      <app-banner-image
        image-src="../src/assets/img/global/banner/web/banner-semana-santa.webp"
        image-alt="Banner promocional de descuento de temporada para estudiantes y profesores"
      ></app-banner-image>
      
      <section class="__sections">
        <app-card-right-description cards='[
          {
            "imageSrc": "../src/assets/img/promociones/desc-temp/semana-santa/festividades.webp",
            "imageAlt": "Asientos reclinables",
            "title": "Descubre un calendario vibrante de eventos y festividades que te esperan en los próximos meses.",
            "description": "Prepárate para vivir experiencias inigualables, compartir momentos memorables con tus seres queridos y crear recuerdos que durarán toda la vida."
          }
        ]'></app-card-right-description>
      </section>

      <section class="__sections">
      <div class="__bg-blue">
        <p class="__section_subtittle">Sumérgete en la cultura y tradiciones</p>
       <p class="__section_tittle">En sus coloridas fiestas, vibrantes carnavales, ferias llenas de alegría y eventos deportivos que te llenarán de emoción.</p>
        <article class="__section-cards-image-top">
        <app-card-image-top cards='[
          {"imageSrc":"../src/assets/img/eventos/festival-guitarra-zihuatanejo.webp","imageAlt":"Festival de la Guitarra Zihuatanejo","title":"Festival de la Guitarra Zihuatanejo","content":"El festival presenta a guitarristas de todo el mundo, del 2 al 19 de marzo. ¡No te lo puedes perder!"},
          {"imageSrc":"../src/assets/img/eventos/dia-mujer.webp","imageAlt":"Día Internacional de la Mujer","title":"Día Internacional de la Mujer","content":"Celebrando logros y luchando por la igualdad, el 8 de marzo es un día para reflexionar. ¡Celebra tu día!"},
          {"imageSrc":"../src/assets/img/eventos/carnaval-zihuatanejo.webp","imageAlt":"Carnaval de Zihuatanejo","title":"Carnaval de Zihuatanejo","content":"Disfruta de uno de los carnavales más grandes y populares de México, del 15 al 17 de marzo presenta una variedad de eventos."},
          {"imageSrc":"../src/assets/img/eventos/festival-flores-amealco.webp","imageAlt":"Festival de las flores Amealco","title":"Festival de las flores Amealco","content":"Es uno de los festivales de música más grandes e importantes de Latinoamérica, 16 y 17 de mayo. ¡No te puedes perder de esta gran experiencia!"}]'></app-card-image-top>

        </article>
      </div>
      </section>

      <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "¿Aún no sabes a dónde viajar?", "text": "Conoce nuestros destinos Autovías La Línea y elige tu lugar favorito"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Ciudad de México", "content": "Sumérgete en la esencia vibrante y cultural de la Ciudad de México.", "image": "../src/assets/img/destinos-img/cdmx/lugares/palacio-de-bellas-artes-2.webp", "link": "../guia-viaje/viajar-a-ciudad-de-mexico.html"},
        
                {"id": "destination2", "title": "Colima", "content": "Explora la serenidad y riqueza natural de Colima.", "image": "../src/assets/img/destinos-img/colima/lugares/comala.webp", "link": "../guia-viaje/viajar-a-colima.html"},
        
                {"id": "destination3", "title": "Guadalajara", "content": "Déjate envolver por la energía y el sabor vibrante de Guadalajara.", "image": "../src/assets/img/destinos-img/guadalajara/lugares/centrohistorico1.webp", "link": "../guia-viaje/viajar-a-guadalajara.html"},
                
                {"id": "destination5", "title": "Morelia", "content": "Descubre el encanto colonial y la riqueza histórica de Morelia.", "image": "../src/assets/img/destinos-img/morelia/lugares/aqueducto-morelia.webp", "link": "../guia-viaje/viajar-a-morelia.html"},
        
                {"id": "destination4", "title": "Zitácuaro", "content": "Descubre la esencia natural y cultural de Zitácuaro.", "image": "../src/assets/img/destinos-img/zitacuaro/lugares/centro-historico.webp", "link": "../guia-viaje/viajar-a-zitacuaro.html"}
                ]'
            >
      </app-destinations-grid>

      <section class="__sections">
        <article class="__bg-white">
          <p class="__section_brand">Viaja con Autovías La Línea</p>
          <h2 class="__subtitle-section">Descuentos Exclusivos para tu Viaje</h2>

          <p class="__terms-purchase-text">
            Aprovecha nuestros descuentos exclusivos para hacer tu viaje aún más especial:
          </p>

          <ul class="__terms-purchase-list">
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                <strong>Descuento del 50% para Estudiantes:</strong> Compra tu boleto de autobús durante la vigencia de la promoción y obtén un 40% de descuento en tu boleto. Viaja y disfruta de estas vacaciones.
              </p>
            </li>
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                <strong>Descuentos 25% Profesores:</strong> ¡No dejes escapar los mejores destinos para disfrutar en familia estas vacaciones!
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section class="__sections">
        <app-faqs
          title="Recomendaciones Turísticas"
          faqs='[
            {
              "question": "Actividades que puedes realizar en tu destino:",
              "answer": "<ul><li><strong>Carnaval de Zihuatanejo:</strong> Este evento anual cuenta con guitarristas de todo el mundo. El festival incluye conciertos, talleres y concursos.</li><li><strong>Playa La Ropa:</strong> Esta playa en forma de media luna es conocida por su arena suave, aguas cristalinas y olas tranquilas. Es un gran lugar para nadar, tomar el sol y practicar deportes acuáticos.</li><li><strong>El Paseo del Pescador:</strong> Este malecón es un gran lugar para caminar, andar en bicicleta o simplemente relajarse y disfrutar de la vista.</li><li><strong>Mercado de Artesanías:</strong> Este mercado es un gran lugar para comprar recuerdos, artesanías y productos locales.</li></ul>"
            },
            {
              "question": "Lleva ropa ligera y transpirable:",
              "answer": "<ul><li><strong>Enrolla tu ropa en lugar de doblarla.</strong> Esto ayudará a ahorrar espacio en tu maleta y evitará que la ropa se arrugue.</li><li><strong>Utiliza bolsas de compresión.</strong> Estas bolsas te ayudarán a reducir aún más el volumen de tu ropa.</li><li><strong>Lleva una maleta o mochila ligera.</strong> Esto te ayudará a evitar pagar tarifas de equipaje por exceso de peso.</li></ul>"
            },
            {
              "question": "Cuida tu piel contra los rayos UV:",
              "answer": "<ul><li><strong>Elige un protector solar adecuado:</strong> Busca un protector solar de amplio espectro que proteja contra los rayos UVA y UVB.</li><li><strong>Protégete del sol:</strong> Evita la exposición prolongada al sol, especialmente entre las 10 a.m. y las 4 p.m., cuando los rayos UV son más fuertes.</li><li><strong>Cuida tu piel después de la exposición al sol:</strong> Hidrata tu piel con una crema o loción humectante.</li></ul>"
            }
          ]'
        ></app-faqs>

        <p class="__terms-purchase-text">
          ¡Aventúrate a lo extraordinario con  Autovías La Línea! No importa si buscas un viaje de aventura, de relajación o cultural, en Autovías La Línea tenemos la opción perfecta para ti.
        </p>
      </section>

    `;
  }
}
customElements.define("page-descuentos-semana-santa", DescuentosSemanaSanta);

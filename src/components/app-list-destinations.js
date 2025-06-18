class AppListDestinations extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="main-container">
        <h2 class="accordion-title">
          Destinos con Costa Line
          <button id="accordion-button" aria-expanded="false" aria-controls="accordion-panel" aria-label="Botón para expandir o contraer la seccion del acordeón de destinos" class="accordion-button" type="button"></button>
        </h2>
        <section id="accordion-panel" class="destinations-list panel" aria-labelledby="accordion-button">
          <article class="region_column" role="region">
            <h3 id="region-bajio">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Bajío (Aguascalientes, Guanajuato, Querétaro, San Luis Potosí)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Aguascalientes"
                  title="Boletos de Autobús a Aguascalientes"
                  >Boletos de Autobús a Aguascalientes</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Celaya"
                  title="Boletos de Autobús a Celaya"
                  >Boletos de Autobús a Celaya</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a León"
                  title="Boletos de Autobús a León"
                  >Boletos de Autobús a León</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Querétaro"
                  title="Boletos de Autobús a Querétaro"
                  >Boletos de Autobús a Querétaro</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a San Juan de los Lagos"
                  title="Boletos de Autobús a San Juan de los Lagos"
                  >Boletos de Autobús a San Juan de los Lagos</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a San Luis Potosí"
                  title="Boletos de Autobús a San Luis Potosí"
                  >Boletos de Autobús a San Luis Potosí</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Centro (CDMX, Estado de México, Morelos)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús al aeropuerto de la Ciudad de México"
                  title="Boletos de Autobús al aeropuerto de la Ciudad de México"
                  >Boletos de Autobús al AICM</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús al AIFA"
                  title="Boletos de Autobús al AIFA"
                  >Boletos de Autobús al AIFA</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cuautla"
                  title="Boletos de Autobús a Cuautla"
                  >Boletos de Autobús a Cuautla</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cuernavaca"
                  title="Boletos de Autobús a Cuernavaca"
                  >Boletos de Autobús a Cuernavaca</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a El Ángel Río Tiber"
                  title="Boletos de Autobús a El Ángel Río Tiber"
                  >Boletos de Autobús a Río Tiber</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Hotel Benidorm"
                  title="Boletos de Autobús a Hotel Benidorm"
                  >Boletos de Autobús a Hotel Benidorm</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Las Américas Ecatepec"
                  title="Boletos de Autobús a Las Américas Ecatepec"
                  >Boletos de Autobús a Las Américas Ecatepec</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Norte"
                  title="Boletos de Autobús a México Norte"
                  >Boletos de Autobús a México Norte</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Poniente"
                  title="Boletos de Autobús a México Poniente"
                  >Boletos de Autobús a México Poniente</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Sur"
                  title="Boletos de Autobús a México Sur"
                  >Boletos de Autobús a México Sur</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tepotzotlán"
                  title="Boletos de Autobús a Tepotzotlán"
                  >Boletos de Autobús a Tepotzotlán</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Puente de Ixtla"
                  title="Boletos de Autobús a Puente de Ixtla"
                  >Boletos de Autobús a Puente de Ixtla</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Toluca"
                  title="Boletos de Autobús a Toluca"
                  >Boletos de Autobús a Toluca</a
                >
              </li>

            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-norte">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Norte (Nuevo León)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Monterrey Central"
                  title="Boletos de Autobús a Monterrey Central"
                  >Boletos de Autobús a Monterrey Central</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Monterrey Churubusco"
                  title="Boletos de Autobús a Monterrey Churubusco"
                  >Boletos de Autobús a Monterrey Churubusco</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-occidente">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Occidente (Jalisco, Michoacán)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Guadalajara"
                  title="Boletos de Autobús a Guadalajara"
                  >Boletos de Autobús a Guadalajara</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Guadalajara Mod. 7"
                  title="Boletos de Autobús a Guadalajara Mod. 7"
                  >Boletos de Autobús a Guadalajara Mod.7</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Lázaro Cárdenas"
                  title="Boletos de Autobús a Lázaro Cárdenas"
                  >Boletos de Autobús a Lázaro Cárdenas</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Morelia"
                  title="Boletos de Autobús a Morelia"
                  >Boletos de Autobús a Morelia</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Uruapan"
                  title="Boletos de Autobús a Uruapan"
                  >Boletos de Autobús a Uruapan</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Zapopan"
                  title="Boletos de Autobús a Zapopan"
                  >Boletos de Autobús a Zapopan</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-sur">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Sur y Sureste (Guerrero, Oaxaca)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco Centro"
                  title="Boletos de Autobús a Acapulco Centro"
                  >Boletos de Autobús a Acapulco Centro</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco Ejido"
                  title="Boletos de Autobús a Acapulco Ejido"
                  >Boletos de Autobús a Acapulco Ejido</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco Papagayo"
                  title="Boletos de Autobús a Acapulco Papagayo"
                  >Boletos de Autobús a Acapulco Papagayo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Alcholoa"
                  title="Boletos de Autobús a Alcholoa"
                  >Boletos de Autobús a Alcholoa</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Buenavista"
                  title="Boletos de Autobús a Buenavista"
                  >Boletos de Autobús a Buenavista</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cacahutla"
                  title="Boletos de Autobús a Cacahutla"
                  >Boletos de Autobús a Cacahutla</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cayacal"
                  title="Boletos de Autobús a Cayacal"
                  >Boletos de Autobús a Cayacal</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cayaco"
                  title="Boletos de Autobús a Cayaco"
                  >Boletos de Autobús a Cayaco</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Chilpancingo"
                  title="Boletos de Autobús a Chilpancingo"
                  >Boletos de Autobús a Chilpancingo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Chutla"
                  title="Boletos de Autobús a Chutla"
                  >Boletos de Autobús a Chutla</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Ciudad Altamirano"
                  title="Boletos de Autobús a Ciudad Altamirano"
                  >Boletos de Autobús a Ciudad Altamirano</a
                >
              </li>
                            <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Coacoyul"
                  title="Boletos de Autobús a Coacoyul"
                  >Boletos de Autobús a Coacoyul</a
                >
              </li>
            </ul>
          </article>
        </section>
      </div>
    `;

    let acc = this.querySelectorAll(".accordion-title");
    let button = this.querySelectorAll("#accordion-button");

    function checkWindowsSize(acc) {
      const w = window.innerWidth;
      let firstPanel = acc[0].nextElementSibling;

      if (w >= 835) {
        firstPanel.classList.add("open");
        button[0].setAttribute("aria-expanded", "true");
      } else {
        firstPanel.classList.remove("open");
        button[0].setAttribute("aria-expanded", "false");
      }
    }

    checkWindowsSize(acc);

    window.addEventListener("resize", () => checkWindowsSize(acc));

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active-item");
        let panel = this.nextElementSibling;
        panel.classList.toggle("open");
        const isExpanded = panel.classList.contains("open");
        button[i].setAttribute("aria-expanded", isExpanded.toString());
      });
    }
  }
}
customElements.define("app-list-destinations", AppListDestinations);

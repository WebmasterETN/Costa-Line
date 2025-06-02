class AppListDestinations extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="main-container">
        <h2 class="accordion-title">
          Destinos con ETN Turistar
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
                  aria-label="Boletos de Autobús a Guanajuato"
                  title="Boletos de Autobús a Guanajuato"
                  >Boletos de Autobús a Guanajuato</a
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
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a San Miguel de Allende"
                  title="Boletos de Autobús a San Miguel de Allende"
                  >Boletos de Autobús a San Miguel de Allende</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Centro (CDMX, Estado de México, Morelos, Puebla)
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
                  aria-label="Boletos de Autobús a Puebla"
                  title="Boletos de Autobús a Puebla"
                  >Boletos de Autobús a Puebla</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Puebla 2 Poniente"
                  title="Boletos de Autobús a Puebla 2 Poniente"
                  >Boletos de Autobús a Puebla 2 Poniente</a
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
              Norte (Coahuila, Nuevo León, Sinaloa, Sonora)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Culiacán"
                  title="Boletos de Autobús a Culiacán"
                  >Boletos de Autobús a Culiacán</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Hermosillo"
                  title="Boletos de Autobús a Hermosillo"
                  >Boletos de Autobús a Hermosillo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Los Mochis"
                  title="Boletos de Autobús a Los Mochis"
                  >Boletos de Autobús a Los Mochis</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Monterrey"
                  title="Boletos de Autobús a Monterrey"
                  >Boletos de Autobús a Monterrey</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Torreón"
                  title="Boletos de Autobús a Torreón"
                  >Boletos de Autobús a Torreón</a
                >
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-occidente">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Occidente (Jalisco, Michoacán, Nayarit)
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
                  aria-label="Boletos de Autobús a Jalisco"
                  title="Boletos de Autobús a Jalisco"
                  >Boletos de Autobús a Jalisco</a
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
                  aria-label="Boletos de Autobús a Puerto Vallarta"
                  title="Boletos de Autobús a Puerto Vallarta"
                  >Boletos de Autobús a Puerto Vallarta</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tepic"
                  title="Boletos de Autobús a Tepic"
                  >Boletos de Autobús a Tepic</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tlaquepaque"
                  title="Boletos de Autobús a Tlaquepaque"
                  >Boletos de Autobús a Tlaquepaque</a
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
              Sur y Sureste (Guerrero, Veracruz)
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco"
                  title="Boletos de Autobús a Acapulco"
                  >Boletos de Autobús a Acapulco</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco Diamante"
                  title="Boletos de Autobús a Acapulco Diamante"
                  >Boletos de Autobús a Acapulco Diamante</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco Diamante de Bajio"
                  title="Boletos de Autobús a Acapulco Diamante de Bajio"
                  >Boletos de Autobús a Acapulco Diamante de Bajio</a
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
                  aria-label="Boletos de Autobús a Ixtapa Zihuatanejo"
                  title="Boletos de Autobús a Ixtapa Zihuatanejo"
                  >Boletos de Autobús a Ixtapa Zihuatanejo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Poza Rica"
                  title="Boletos de Autobús a Poza Rica"
                  >Boletos de Autobús a Poza Rica</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Taxco"
                  title="Boletos de Autobús a Taxco"
                  >Boletos de Autobús a Taxco</a
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

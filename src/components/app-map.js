class AppMap extends HTMLElement {
  connectedCallback() {
    console.log("AppMap conectado");
    this.innerHTML = `
      <section class="map">
        <app-section-title section-title="¿Dónde puedo comprar Boletos de autobús en ETN Turistar?"></app-section-title>
        <!--Mapa-->
        <article id="container-chart" class="__map-container">
          <div id="map"></div>
        </article>

        <!--Modal search-->
        <div class="__map-search">
          <form action="" class="__map-search--form" id="searchForm">
            <input
              class="__search--input"
              type="text"
              id="searchBox"
              placeholder="Buscar sucursal por nombre o dirección..."
              oninput="searchMarkers()"
            />
          </form>
          <div id="modalSide" class="__map-search--modal">
            <h2 id="modalStateTitle" style="display: none"></h2>
            <ul id="results" class="__search--results"></ul>
          </div>
        </div>

        <!--Modal map-->
        <div class="__map-modal" id="modalMap">
          <button id="btn-close" class="__btn-close icon-close" onclick="closeModal()">
          </button>
          <div id="modalMapContainer"></div>
        </div>
      </section>
    `;

    this.initializeMap();
  }

  async initializeMap() {
    const mapContainer = this.querySelector("#modalMapContainer");
    if (!mapContainer) {
      console.error("Error: El contenedor del mapa no existe.");
      return;
    }

    const topology = await fetch("/src/data/mx-all.topo.json").then(
      (response) => response.json()
    );

    let locationsData = [];
    try {
      const response = await fetch("/src/data/map-data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      locationsData = await response.json();
    } catch (error) {
      console.error("Error cargando data.json:", error);
      this.querySelector("#container-chart").innerHTML =
        "<p>Error al cargar datos.</p>";
      return;
    }

    const statesFromJson = [...new Set(locationsData.map((loc) => loc.state))];

    const stateNameToCodeMap = {
      Aguascalientes: "mx-ag",
      Chihuahua: "mx-ch",
      Coahuila: "mx-co",
      Colima: "mx-cl",
      "Distrito Federal": "mx-df",
      Guanajuato: "mx-gj",
      Guerrero: "mx-gr",
      Jalisco: "mx-ja",
      México: "mx-mx",
      Michoacán: "mx-mi",
      Morelos: "mx-mo",
      Nayarit: "mx-na",
      "Nuevo León": "mx-nl",
      Oaxaca: "mx-oa",
      Puebla: "mx-pu",
      Querétaro: "mx-qt",
      "San Luis Potosí": "mx-sl",
      Sinaloa: "mx-si",
      Sonora: "mx-so",
      Tamaulipas: "mx-tm",
      Veracruz: "mx-ve",
      Zacatecas: "mx-za",
    };

    const highchartsData = statesFromJson
      .map((stateName) => stateNameToCodeMap[stateName])
      .filter((code) => code)
      .map((code) => ({
        "hc-key": code,
        value: 1,
      }));

    this.chart = Highcharts.mapChart(this.querySelector("#container-chart"), {
      chart: {
        map: topology,
      },
      title: {
        text: "Conoce nuestra amplia cobertura de sucursales en México",
      },
      subtitle: {
        text: "Haz clic en uno de los estados azul oscuro para ver las direcciones de nuestras sucursales",
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      accessibility: {
        enabled: false,
      },
      plotOptions: {
        series: {
          nullColor: "#016F86",
          joinBy: "hc-key",
        },
      },
      tooltip: {
        enabled: true,
        headerFormat: "",
        pointFormat: "{point.name}",
      },
      series: [
        {
          data: highchartsData,
          name: "Cobertura",
          color: "#15395a",
          borderColor: "#FFFFFF",
          borderWidth: 1,
          states: {
            hover: {
              color: "#15395a",
              borderColor: "#FFFFFF",
              borderWidth: 2,
            },
          },
          dataLabels: {
            enabled: false,
          },
          point: {
            events: {
              mouseOver: function () {
                this.graphic.element.style.transform = "scale(1.007)";
                this.graphic.element.style.transition = "transform 0.2s";
              },
              mouseOut: function () {
                this.graphic.element.style.transform = "scale(1)";
                this.graphic.element.style.transition = "transform 0.2s";
              },
              click: function () {
                if (this.value !== null) {
                  console.log("Clic en estado con datos:", this.name);

                  const previouslySelected =
                    document.querySelector(".selected-state");
                  if (previouslySelected) {
                    previouslySelected.classList.remove("selected-state");
                  }

                  this.graphic.element.classList.add("selected-state");

                  openModal(this.name);
                  chart.setTitle(null, {
                    text: `${this.name}`,
                  });
                }
              },
            },
          },
        },
      ],
    });
  }
}

customElements.define("app-map", AppMap);

document.addEventListener("DOMContentLoaded", function () {
  let userLocation = null;
  let markers = [];
  let map;
  let currentStateMarkers = [];

  // Esta función maneja la obtención de la ubicación del usuario.
  function obtenerUbicacion(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("Ubicación del usuario obtenida:", userLocation);
          callback(userLocation);
        },
        function (error) {
          console.error("Error al obtener la ubicación:", error);
          callback(null);
        }
      );
    } else {
      alert("Geolocalización no soportada en este navegador.");
      callback(null); // Llamar al callback con null si no hay soporte
    }
  }

  function abrirGoogleMaps(lat, lng, destinationLat, destinationLng) {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${destinationLat},${destinationLng}`;
    window.open(url, "_blank");
  }

  // Cargar los marcadores desde un archivo JSON
  async function loadMarkers() {
    const response = await fetch("/src/data/map-data.json");
    const data = await response.json();
    markers = data;

    // Inicializar el mapa
    const mapContainer = document
      .querySelector("app-map-pack")
      .querySelector("#modalMapContainer");
    if (!mapContainer) {
      console.error("Error: El contenedor del mapa no existe.");
      return;
    }

    map = L.map(mapContainer).setView([19.2835, -99.6598], 15);

    // Capa base de OpenStreetMap
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Agregar marcadores al mapa
    markers.forEach(function (marker) {
      var lat = marker.position[0];
      var lon = marker.position[1];
      marker.leafletMarker = L.marker(marker.position).addTo(map).bindPopup(`
                        <h2>${marker.name}</h2>
                        <p>${marker.address}</p>
                        <a href="javascript:void(0);" onclick="handleOpenGoogleMaps(${JSON.stringify(
                          marker.position
                        )})">Ver en Google Maps</a>
                    `);
    });
  }
  loadMarkers().catch((error) =>
    console.error("Error al cargar los marcadores:", error)
  );

  //Funcion para generalizar la busqueda
  function removePunctuationAndAccents(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡"']/g, "")
      .replace(/\s{2,}/g, " ");
  }

  // Función para buscar marcadores dentro de un estado
  // Función para buscar marcadores dentro de un estado
  // Función para buscar marcadores
  window.searchMarkers = function () {
    const sidePanel = document.getElementById("modalSide");
    const resultsList = document.getElementById("results");
    const searchInput = document.getElementById("searchBox");
    const query = removePunctuationAndAccents(searchInput.value);

    if (query.trim() === "") {
      if (currentStateMarkers.length === 0) {
        if (sidePanel) {
          sidePanel.style.display = "none";
        }
        if (resultsList) {
          resultsList.innerHTML = "";
        }
        return;
      }
    }

    if (sidePanel) {
      sidePanel.style.display = "block";
    }

    let filteredMarkers;

    if (currentStateMarkers.length > 0) {
      if (query.trim() === "") {
        filteredMarkers = currentStateMarkers;
      } else {
        filteredMarkers = currentStateMarkers.filter((marker) => {
          const name = removePunctuationAndAccents(marker.name);
          const address = removePunctuationAndAccents(marker.address);
          return name.includes(query) || address.includes(query);
        });
      }
    } else {
      filteredMarkers = markers.filter((marker) => {
        const name = removePunctuationAndAccents(marker.name);
        const address = removePunctuationAndAccents(marker.address);
        return name.includes(query) || address.includes(query);
      });
    }

    resultsList.innerHTML = "";

    if (filteredMarkers.length === 0) {
      resultsList.innerHTML = "<li>No se encontraron sucursales.</li>";
    } else {
      filteredMarkers.forEach(function (marker) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${marker.name}</strong> - ${marker.address}`;

        listItem.onclick = function () {
          openNewModal(marker);
        };
        resultsList.appendChild(listItem);
      });
    }
  };

  window.openNewModal = function (marker) {
    // Mostrar el modal
    document.getElementById("modalMap").style.display = "flex";

    // Obtener el contenedor del mapa dentro del modal
    const modalMapContainer = document.getElementById("modalMapContainer");

    // Asegurarse de que el mapa se inicialice solo una vez
    if (!modalMapContainer._leaflet_id) {
      map = L.map(modalMapContainer).setView(marker.position, 15);

      // Capa base de OpenStreetMap
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } else {
      // Si el mapa ya está inicializado, simplemente centra la vista
      map.setView(marker.position, 15);
    }

    // Limpiar marcadores anteriores
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Crear un marcador y agregarlo al mapa
    L.marker(marker.position)
      .addTo(map)
      .bindPopup(
        `
      <h2>${marker.name}</h2>
      <p>${marker.address}</p>
      <a href="javascript:void(0);" onclick="handleOpenGoogleMaps(${JSON.stringify(
        marker.position
      )})">Ver en Google Maps</a>
    `
      )
      .openPopup();

    map.invalidateSize(); // Asegurarse de que el mapa se redibuje correctamente
  };

  // Función para abrir el modal y mostrar solo los marcadores del estado seleccionado
  window.openModal = function (state) {
    // Filtrar los marcadores por estado (opcional)
    currentStateMarkers = markers.filter(function (marker) {
      return marker.state === state;
    });

    // Mostrar el modal
    document.getElementById("modalMap").style.display = "flex";

    document.getElementById("modalSide").style.display = "block";
    document.getElementById("modalStateTitle").textContent = state;

    // Limpiar los marcadores del mapa antes de agregar los nuevos
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Si hay marcadores, establecer la vista del mapa
    if (currentStateMarkers.length > 0) {
      var firstMarker = currentStateMarkers[0];
      map.setView(firstMarker.position, 10);

      currentStateMarkers.forEach(function (marker) {
        marker.leafletMarker = L.marker(marker.position).addTo(map).bindPopup(`
                        <h2>${marker.name}</h2>
                        <p>${marker.address}</p>
                        <a href="javascript:void(0);" onclick="handleOpenGoogleMaps(${JSON.stringify(
                          marker.position
                        )})">Ver en Google Maps</a>
                    `);
      });
    }

    // Mostrar los resultados en la lista lateral
    var resultsList = document.getElementById("results");
    resultsList.innerHTML = "";
    currentStateMarkers.forEach(function (marker) {
      var listItem = document.createElement("li");
      listItem.innerHTML = `
                <strong>${marker.name}</strong> <p> ${marker.address}</p>
            `;
      listItem.onclick = function () {
        map.setView(marker.position, 15);
        marker.leafletMarker.openPopup();
      };
      resultsList.appendChild(listItem);
    });

    map.invalidateSize();
  };

  // Función para cerrar el modal y limpiar los resultados
  window.closeModal = function () {
    const modal = document.getElementById("modalMap");
    const sidePanel = document.getElementById("modalSide");
    const searchInput = document.getElementById("searchBox");
    const resultsList = document.getElementById("results");
    const stateTitle = document.getElementById("modalStateTitle");

    if (modal) {
      modal.style.display = "none";
    }
    if (sidePanel) {
      sidePanel.style.display = "none";
    }

    const previouslySelected = document.querySelector(".selected-state");
    if (previouslySelected) {
      previouslySelected.classList.remove("selected-state");
    }
    if (typeof chart !== "undefined" && chart) {
      chart.setTitle(
        {
          text: "Conoce nuestra amplia cobertura de sucursales en México",
        },
        null,
        false
      );

      chart.setSubtitle(
        {
          text: "Haz clic en uno de los estados azul oscuro para ver las direcciones de nuestras sucursales",
        },
        false
      );

      chart.series[0].points.forEach((point) => {
        if (point.selected) {
          point.select(false, false);
        }
      });
      chart.redraw();
    }

    if (searchInput) {
      searchInput.value = "";
    }
    if (resultsList) {
      resultsList.innerHTML = "";
    }
    if (stateTitle) {
      stateTitle.innerText = "";
      stateTitle.style.display = "none";
    }

    currentStateMarkers = [];
  };

  // Función para manejar la apertura de Google Maps
  window.handleOpenGoogleMaps = function (destinationPosition) {
    obtenerUbicacion(function (userLocation) {
      if (userLocation) {
        abrirGoogleMaps(
          userLocation.lat,
          userLocation.lng,
          destinationPosition[0],
          destinationPosition[1]
        );
      } else {
        abrirGoogleMaps(0, 0, destinationPosition[0], destinationPosition[1]);
      }
      userLocation = null;
    });
  };
});

class AppDestinyGrid extends HTMLElement {
  static get observedAttributes() {
    return ["grid-src"];
  }

  async connectedCallback() {
    this.innerHTML = `
      <div class="grid-container">
          <!-- Los elementos del grid se cargarán aquí -->
      </div>
    `;
    const src = this.getAttribute("grid-src");
    if (src) {
      await this._loadAndRenderGridItems(src);
    } else {
      this.querySelector(".grid-container").innerHTML =
        "<p>Error: Fuente de datos no especificada para el grid.</p>";
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "grid-src" && oldValue !== newValue && newValue) {
      this._loadAndRenderGridItems(newValue);
    }
  }

  async _loadAndRenderGridItems(jsonPath) {
    const gridContainer = this.querySelector(".grid-container");
    if (!gridContainer) {
      console.error(
        "AppMonterreyGrid: El contenedor del grid no fue encontrado00."
      );
      return;
    }
    gridContainer.innerHTML = "<p>Cargando lugares...</p>"; // Mensaje de carga

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const items = await response.json();

      items.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `card ${item.className || ""}`.trim();
        const bgValue = item.backgroundImage;

        if (bgValue) {
          if (bgValue.includes(".") || bgValue.includes("/")) {
            cardDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${bgValue}')`;
          } else {
            cardDiv.style.backgroundColor = bgValue;
          }
        } else {
          // Fallback si no hay bgValue, para que la tarjeta no quede vacía
          // y el ::before pueda heredar un color.
          cardDiv.style.backgroundColor = "#EEEEEE"; // Un color gris claro como placeholder
        }

        cardDiv.innerHTML = `<span>${item.text}</span>`;
        gridContainer.appendChild(cardDiv);

        cardDiv.addEventListener("click", () =>
          this._openMultiImageModal(item)
        );
      });
      // Limpiar el mensaje de carga si todo salió bien y se añadieron items
      if (gridContainer.querySelector("p")) {
        // Si aún está el mensaje de carga
        const loadingMessage = gridContainer.querySelector("p");
        if (
          loadingMessage &&
          loadingMessage.textContent.includes("Cargando lugares...")
        ) {
          gridContainer.removeChild(loadingMessage);
        }
      }
      if (items.length === 0) {
        gridContainer.innerHTML = "<p>No hay lugares para mostrar.</p>";
      }
    } catch (error) {
      console.error(
        "AppMonterreyGrid: Error al cargar los items del grid:",
        error
      );
      gridContainer.innerHTML = "<p>Error al cargar el contenido del grid.</p>";
    }
  }

  _openMultiImageModal(itemData) {
    // Busca el modal en el documento principal, ya que el layout lo incluye.
    const modal = document.querySelector("app-modal-multi-image");
    if (!modal) {
      console.error(
        "AppMonterreyGrid: app-modal-multi-image element not found in the document."
      );
      return;
    }

    modal.setAttribute("modal-title", itemData.text || "Detalles del Lugar");
    modal.setAttribute("content-title", itemData.title || "");
    modal.setAttribute("content-description", itemData.description || "");

    modal.setAttribute("image-1", itemData.backgroundImage || "");
    modal.setAttribute(
      "alt-1",
      `Imagen principal de ${itemData.text || "lugar"}`
    );

    modal.setAttribute("image-2", itemData.image2 || "");
    modal.setAttribute(
      "alt-2",
      `Imagen adicional 1 de ${itemData.text || "lugar"}`
    );

    modal.setAttribute("image-3", itemData.image3 || "");
    modal.setAttribute(
      "alt-3",
      `Imagen adicional 2 de ${itemData.text || "lugar"}`
    );

    modal.setAttribute("image-4", itemData.image4 || "");
    modal.setAttribute(
      "alt-4",
      `Imagen adicional 3 de ${itemData.text || "lugar"}`
    );

    // Intenta llamar a un método estándar para abrir el modal
    if (typeof modal.openModal === "function") {
      modal.openModal();
    } else if (typeof modal.open === "function") {
      // Algunos componentes podrían usar 'open'
      modal.open();
    } else if (typeof modal.show === "function") {
      // Otros podrían usar 'show'
      modal.show();
    } else {
      // Como último recurso, si no hay un método, intenta controlar por atributo.
      // Esto asume que el modal reacciona al cambio del atributo 'opened'.
      modal.setAttribute("opened", "");
      console.warn(
        'AppMonterreyGrid: app-modal-multi-image necesita un método openModal(), open() o show(). Se intentó abrir mediante el atributo "opened".'
      );
    }
  }
}

customElements.define("app-destiny-grid", AppDestinyGrid);

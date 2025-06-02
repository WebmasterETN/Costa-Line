class AppCardsContactWhats extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="__card-whats-container">
                <p class="__title__card-whats"></p>
                <div class="__card__body">
                    <span class="icon-whatsapp-bg-blue __icon-card-whats"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                    <div class="__text-card-whats-container">
                        <!-- Text paragraphs will be added here dynamically -->
                    </div>
                </div>
            </div>
        `;
    }

  /**
   * Configura el contenido del componente (clase del icono y texto del párrafo)
   * a partir de un objeto JSON.
   * @param {object} jsonData - El objeto JSON con los datos.
   * @param {string} jsonData.titleParrafo - El texto que se mostrará en el párrafo del título.
   * @param {string} jsonData.claseIcono - La clase CSS que se agregará al span del icono.
   * @param {string} jsonData.textoParrafo - El texto que se mostrará en el párrafo.
   * @param {string} jsonData.textoParrafoDos - El texto que se mostrará en el párrafo.
   */
  contentCardsWhats(jsonData) {
    const titleP = this.querySelector('.__title__card-whats');
    const iconSpan = this.querySelector('.__icon-card-whats');
    const textContainer = this.querySelector('.__text-card-whats-container'); // Select the container

    if (!jsonData) {
      console.warn('AppCardsContactWhats: No se proporcionaron datos JSON a contentCardsWhats.');
      return;
    }
    
    if (titleP && jsonData.titleParrafo !== undefined && jsonData.titleParrafo !== null) {
        titleP.textContent = jsonData.titleParrafo;
    } else if (!titleP) {
        console.warn('AppCardsContactWhats: No se encontró el elemento <p> del título (__title__card-whats).');
    } else {
        // Optional: Clear title if data is missing, or keep previous. Let's clear it.
        titleP.textContent = '';
        console.warn('AppCardsContactWhats: No se proporcionó titleParrafo.');
    }

    if (iconSpan && jsonData.claseIcono) {
      // Assuming icon-whatsapp-bg-blue is always present, and we just add the specific icon class.
      // We should probably remove the old specific icon class before adding the new one.
      // Let's find existing specific icon classes and remove them.
      // This requires knowing which classes are potential icon classes.
      // A simpler approach for now is to just add the new one, assuming the CSS handles conflicts or that only one specific icon class is ever added.
      // A better approach would be to manage this more explicitly, perhaps storing the current icon class.
      // For this request, let's just add the new class.
      iconSpan.classList.add(jsonData.claseIcono);
    } else if (!iconSpan) {
      console.warn('AppCardsContactWhats: No se encontró el elemento <span> del icono (__icon-card-whats).');
    } else {
        console.warn('AppCardsContactWhats: No se proporcionó claseIcono.');
    }

    if (!textContainer) {
        console.warn('AppCardsContactWhats: No se encontró el contenedor de texto (__text-card-whats-container).');
        return; // Cannot proceed without the container
    }

    // Clear any previously added text paragraphs
    textContainer.innerHTML = '';

    // Add first text paragraph
    if (jsonData.textoParrafo !== undefined && jsonData.textoParrafo !== null) {
        const p1 = document.createElement('p');
        p1.classList.add('__text__card-whats'); // Add class for potential styling
        p1.textContent = jsonData.textoParrafo;
        textContainer.appendChild(p1);
    } else {
         console.warn('AppCardsContactWhats: No se proporcionó textoParrafo.');
    }

    // Add second text paragraph if it exists
    if (jsonData.textoParrafoDos !== undefined && jsonData.textoParrafoDos !== null) {
        const p2 = document.createElement('p');
        p2.classList.add('__text__card-whats'); // Add class for potential styling
        p2.textContent = jsonData.textoParrafoDos;
        textContainer.appendChild(p2);
    }
  }
}
customElements.define("app-cards-contact-whats", AppCardsContactWhats);
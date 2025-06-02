class AppCardsIcons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="__card__icon">
                <!-- El icono (span) se insertará aquí dinámicamente -->
                <p class="__text__card"></p>
            </div>
        `;
    // Guardar referencias a elementos clave para eficiencia
    this._iconContainer = this.querySelector('.__card__icon');
    this._textP = this.querySelector('.__text__card');
  }

  /**
   * Configura el contenido del componente (HTML del icono y texto del párrafo)
   * a partir de un objeto JSON.
   * @param {object} jsonData - El objeto JSON con los datos.
   * @param {string} [jsonData.iconoHtml] - El string HTML para el span del icono. Si no se provee o es inválido, no se mostrará ningún icono.
   * @param {string} [jsonData.textoParrafo] - El texto que se mostrará en el párrafo. Si no se provee, el texto se limpiará.
   */
  contentCardsIcons(jsonData) {
    if (!this._iconContainer || !this._textP) {
      console.error('AppCardsIcons: Elementos base del componente no encontrados. El componente no se inicializó correctamente.');
      return;
    }

    // Limpiar cualquier icono insertado previamente
    const existingIcon = this._iconContainer.querySelector('span:not(.__text__card span)'); // Busca un span que no sea parte del texto
    if (existingIcon && existingIcon.parentElement === this._iconContainer) {
      existingIcon.remove();
    }

    if (!jsonData) {
      console.warn('AppCardsIcons: No se proporcionaron datos JSON a contentCardsIcons.');
      this._textP.textContent = ''; // Limpiar texto si no hay datos
      return;
    }

    // Manejo del icono desde iconoHtml
    if (jsonData.iconoHtml && typeof jsonData.iconoHtml === 'string' && jsonData.iconoHtml.trim() !== '') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = jsonData.iconoHtml.trim();
      const newIconElement = tempDiv.firstElementChild;

      if (newIconElement && newIconElement.tagName === 'SPAN') {
        // Insertar el nuevo icono antes del párrafo de texto
        this._iconContainer.insertBefore(newIconElement, this._textP);
      } else if (newIconElement) {
        console.warn(`AppCardsIcons: jsonData.iconoHtml ("${jsonData.iconoHtml}") produjo un elemento, pero no es un SPAN. Icono no insertado.`);
      } else {
        console.warn(`AppCardsIcons: jsonData.iconoHtml ("${jsonData.iconoHtml}") no produjo un elemento HTML válido. Icono no insertado.`);
      }
    } else if (jsonData.hasOwnProperty('iconoHtml')) {
      // Si la propiedad iconoHtml existe pero está vacía o no es un string válido
      console.warn(`AppCardsIcons: jsonData.iconoHtml está presente pero es inválido ("${jsonData.iconoHtml}"). Ningún icono será mostrado.`);
    }
    // Si jsonData.iconoHtml no se proporciona en absoluto, no se añade ningún icono (el anterior ya fue removido).

    // Manejo del texto del párrafo
    if (jsonData.textoParrafo !== undefined && jsonData.textoParrafo !== null) {
      this._textP.textContent = jsonData.textoParrafo;
    } else {
      this._textP.textContent = ''; // Limpiar el texto si no se proporciona o es null
    }
  }
}
customElements.define("app-cards-icons", AppCardsIcons);
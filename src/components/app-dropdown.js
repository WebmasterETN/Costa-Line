 class AppDropdown extends HTMLElement {
  constructor() {
    super();
    this._eventHandlers = []; 
  }

  static get observedAttributes() {
    return ['items-src', 'title-dropdown', 'content-dropdown'];
  }

  async connectedCallback() {
    const itemsSrc = this.getAttribute('items-src');
    if (itemsSrc) {
      await this._loadAndRenderMultipleItems(itemsSrc);
    } else {
      this._renderSingleItem();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    // Si items-src cambia, recargar.
    // Si title-dropdown o content-dropdown cambian y no hay items-src, re-renderizar el único item.
    if (name === 'items-src' && newValue) {
      this._loadAndRenderMultipleItems(newValue);
    } else if (['title-dropdown', 'content-dropdown'].includes(name) && !this.getAttribute('items-src')) {
      this._renderSingleItem();
    }
  }

  _renderSingleItem() {
    this._clearEventListeners();
    const title = this.getAttribute('title-dropdown') || 'Título del Dropdown';
    const content = this.getAttribute('content-dropdown') || 'Contenido no disponible.';
    this.innerHTML = this._getDropdownItemHTML(title, content);
    this._attachToggleBehavior(this.querySelector('.app-dropdown__title-button'));
  }

  async _loadAndRenderMultipleItems(jsonPath) {
    this._clearEventListeners();
    this.innerHTML = '<p>Cargando preguntas...</p>'; // Mensaje de carga

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`Error HTTP al cargar ${jsonPath}: ${response.status}`);
      }
      const itemsData = await response.json();

      if (!itemsData || !Array.isArray(itemsData) || itemsData.length === 0) {
        this.innerHTML = "<p>No hay preguntas para mostrar.</p>";
        console.warn(`No se encontraron datos en ${jsonPath} para app-dropdown.`);
        return;
      }

      let allItemsHTML = "";
      itemsData.forEach(item => {
        const title = item['title-dropdown'] || 'Título no disponible';
        const content = item['content-dropdown'] || 'Contenido no disponible.';
        allItemsHTML += this._getDropdownItemHTML(title, content);
      });
      
      this.innerHTML = allItemsHTML;
      this.style.display = "contents"; // Para que los items fluyan en el contenedor padre

      this.querySelectorAll('.app-dropdown__title-button').forEach(button => {
        this._attachToggleBehavior(button);
      });

    } catch (error) {
      console.error(`Error al cargar o renderizar dropdowns desde ${jsonPath}:`, error);
      this.innerHTML = "<p>Error al cargar las preguntas frecuentes.</p>";
    }
  }

  _getDropdownItemHTML(title, content) {
    return `
      <div class="app-dropdown__item">
        <button type="button" class="app-dropdown__title-button" aria-expanded="false">
          <span class="app-dropdown__title-text">${title}</span>
          <span class="app-dropdown__toggle-indicator" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </span>
        </button>
        <div class="app-dropdown__content-panel">
          <div class="app-dropdown__content-inner">
            ${content}
          </div>
        </div>
      </div>
    `;
  }

  _attachToggleBehavior(buttonElement) {
    if (!buttonElement) return;
    const contentPanel = buttonElement.nextElementSibling; // Asume que el panel es el siguiente hermano
    const dropdownItem = buttonElement.closest('.app-dropdown__item');

    const handler = () => {
      const isExpanded = buttonElement.getAttribute('aria-expanded') === 'true';
      buttonElement.setAttribute('aria-expanded', !isExpanded);
      contentPanel.style.maxHeight = isExpanded ? null : contentPanel.scrollHeight + 'px';
      if (dropdownItem) dropdownItem.classList.toggle('active', !isExpanded);
    };
    buttonElement.addEventListener('click', handler);
    this._eventHandlers.push({ element: buttonElement, type: 'click', handler });
  }

  _clearEventListeners() {
    this._eventHandlers.forEach(({ element, type, handler }) => element.removeEventListener(type, handler));
    this._eventHandlers = [];
  }

  disconnectedCallback() {
    this._clearEventListeners();
  }
}
  customElements.define("app-dropdown", AppDropdown);
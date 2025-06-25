class AppDropdownQuestServices extends HTMLElement {
  connectedCallback() {
    // Initial empty state or loading message
    this.innerHTML = `<p>Cargando servicios...</p>`;
  }

  /**
   * Sets the data for the dropdowns and renders them.
   * @param {Array<Object>} data An array of objects, where each object
   *                             should have 'title-dropdown' and 'content-dropdown' properties.
   */
  setDropdownData(data) {
    this.innerHTML = ''; // Clear existing content

    if (!Array.isArray(data) || data.length === 0) {
      this.innerHTML = '<p>No hay servicios de preguntas frecuentes disponibles.</p>';
      return;
    }

    data.forEach(item => {
      const dropdownElement = document.createElement('app-dropdown');
      dropdownElement.setAttribute('title-dropdown', item['title-dropdown'] || 'Sin título');
      dropdownElement.setAttribute('content-dropdown', item['content-dropdown'] || 'Sin contenido');
      this.appendChild(dropdownElement);
    });
  }
}

customElements.define("app-dropdown-quest-services", AppDropdownQuestServices);
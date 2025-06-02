 class AppDropdown extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute('title-dropdown') || 'Título del Dropdown';
      const content = this.getAttribute('content-dropdown') || 'Contenido no disponible.';

      this.innerHTML = `
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

      const button = this.querySelector('.app-dropdown__title-button');
      const contentPanel = this.querySelector('.app-dropdown__content-panel');

      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);

        if (isExpanded) {
          contentPanel.style.maxHeight = null;
        } else {
          contentPanel.style.maxHeight = contentPanel.scrollHeight + 'px';
        }

        this.classList.toggle('active', !isExpanded); // Aplica clase para rotación
      });
    }
  }

  customElements.define("app-dropdown", AppDropdown);
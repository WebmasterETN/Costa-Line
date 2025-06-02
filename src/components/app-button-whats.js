class AppButtonWhats extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="https://wa.me/5215545252017?text=Hola" rel="noopener noreferrer" target="_blank" aria-label="Whatsapp" title="Whatsapp" role="button" tabindex="0" class="button-whats">
          <i class="icon-whatsapp"></i>
        </a>
    `;

    this.button = this.querySelector('.button-whats'); // Get a reference to the button element

    // Listen for the buy-element-visible event
    window.addEventListener('buy-element-visible', () => {
      this.hideButton();
    });

    // Listen for the buy-element-hidden event
    window.addEventListener('buy-element-hidden', () => {
      this.showButton();
    });
  }

  hideButton() {
    this.button.style.display = 'none';
  }

  showButton() {
    this.button.style.display = 'flex';
  }
}
customElements.define("app-button-whats", AppButtonWhats);

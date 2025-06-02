class AppButtonEvaTrip extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="http://iamsateescucha.com/survey/#/pull" rel="noopener noreferrer" target="_blank" aria-label="Evalua tu viaje" title="Evalua tu viaje" role="button" tabindex="0" class="button-eva-trip">
          Evalua tu viaje
        </a>
    `;

    this.button = this.querySelector('.button-eva-trip'); // Get a reference to the button element

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
    this.button.style.display = 'block';
  }
}
customElements.define("app-button-eva-trip", AppButtonEvaTrip);

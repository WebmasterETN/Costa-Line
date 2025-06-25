class AppTimeLinePackM extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="__timeline-items">
        <div class="__timeline-image">
          <img src="../src/assets/img/paqueteria/paso-1.webp" alt="Paso 1 del envío">
        </div>
        <div class="__timeline-image">
          <img src="../src/assets/img/paqueteria/paso-2.webp" alt="Paso 2 del envío">
        </div>
        <div class="__timeline-image">
          <img src="../src/assets/img/paqueteria/paso-3.webp" alt="Paso 3 del envío">
        </div>
        <div class="__timeline-image">
          <img src="../src/assets/img/paqueteria/paso-4.webp" alt="Paso 4 del envío">
        </div>
      </div>
    `;
  }
}

customElements.define("app-time-line-packm", AppTimeLinePackM);
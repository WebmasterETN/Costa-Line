class FooterPackMultienlace extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-pack-multienlace">
        <p class="__copyright">© ${new Date().getFullYear()} Pack Multienlace</p>
        <a href="https://www.packmultienlace.com" class="__link" target="_blank" rel="noopener noreferrer">Políticas  de envío, entrega y facturación</a>
      </footer>
    `;
  }
}
customElements.define('app-footer-pack-multienlace', FooterPackMultienlace);
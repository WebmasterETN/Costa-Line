class AppCardTextBgWhite extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('card-title') || 'Título predeterminado';
        const description = this.getAttribute('card-description') || 'Descripción predeterminada';

        this.innerHTML = `
            <div class="__card-text-bg-white">
                <h3 class="__card-title">${title}</h3>
                <div class="__card-body">
                    <p class="__card-text">${description}</p>
                </div>
            </div>
        `;
    }
}
customElements.define("app-card-text-bg-white", AppCardTextBgWhite);
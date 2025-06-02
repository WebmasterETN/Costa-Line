class AppCardTextBGBlueGray extends HTMLElement { // Corrected class name typo
    connectedCallback() {
        const title = this.getAttribute('card-title') || 'Título predeterminado';
        const description = this.getAttribute('card-description') || 'Descripción predeterminada';

        this.innerHTML = `
            <div class="__card-text-bg-blue-gray">
                <h3 class="__card-title">${title}</h3>
                <div class="__card-body">
                    <p class="__card-text">${description}</p>
                </div>
            </div>
        `;
    }
}
customElements.define("app-card-text-bg-blue-gray", AppCardTextBGBlueGray);
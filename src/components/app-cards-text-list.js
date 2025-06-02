class AppCardsTextList extends HTMLElement {
    /**
     * Decodifica entidades HTML de una cadena.
     * @param {string} html La cadena con entidades HTML.
     * @returns {string} La cadena decodificada.
     */
    decodeHTMLAttribute(html) {
        if (!html) return html;
        const textarea = document.createElement('textarea');
        textarea.innerHTML = html;
        return textarea.value;
    }

    connectedCallback() {
        const title = this.getAttribute('card-title') || 'Título no especificado';
        const mainText = this.getAttribute('main-text') || 'Texto principal no especificado.';
        const secondaryText = this.getAttribute('secondary-text') || 'Texto secundario no especificado.';
        const listItemsAttributeValue = this.getAttribute('list-items');

        let items = [];
        if (listItemsAttributeValue) {
            try {
                // El atributo list-items ahora contendrá un string JSON válido directamente.
                items = JSON.parse(listItemsAttributeValue);
            } catch (e) {
                console.error('Error al parsear list-items JSON en app-cards-text-list:', e, "\nValor original del atributo:", listItemsAttributeValue);
                items = ['Error al cargar ítems']; // Fallback
            }
        }

        const listItemsHtml = items.map(item => `
            <li class="__card-item">
                <span class="icon-arrow-bg-blue"><span class="path1"></span><span class="path2"></span></span>
                <p class="__card-text">${this.escapeHTML(item)}</p>
            </li>
        `).join('');

        this.innerHTML = `
            <div class="__card">
                <div class="__card-header">
                    <h3 class="__card-title">
                        ${this.escapeHTML(title)}
                    </h3>
                </div>
                <section class="__card-body">
                    <p class="__card-text">
                        ${this.escapeHTML(mainText)}
                    </p>
                    <p class="__card-text">
                        ${this.escapeHTML(secondaryText)}
                    </p>
                    <ul class="__card-list">
                        ${listItemsHtml}
                    </ul>
                </section>
            </div>
        `;
    }

    escapeHTML(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
}

customElements.define("app-cards-text-list", AppCardsTextList);
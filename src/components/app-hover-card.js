class AppHoverCard extends HTMLElement {
    static get observedAttributes() {
        return ['card-title', 'icon-src'];
    }

    constructor() {
        super();
        // Inicializar propiedades donde se guardarán las referencias a los elementos del DOM
        this.cardElement = null;
        this.titleElement = null;
        this.iconElement = null;
    }

    connectedCallback() {
        // Establecer la estructura HTML inicial del componente
        this.innerHTML = `
            <div class="card-image-hover">
                <p class="card-image-hover-title"></p>
                <span class="hover-icon"></span>
            </div>
        `;

        // Obtener referencias a los elementos internos
        this.cardElement = this.querySelector('.card-image-hover');
        this.titleElement = this.querySelector('.card-image-hover-title');
        this.iconElement = this.querySelector('.hover-icon');

        // Renderizar el contenido basado en los atributos actuales
        this._render();

        // Adjuntar los listeners de eventos para el efecto hover
        if (this.cardElement && this.iconElement) {
            this.cardElement.addEventListener('mouseenter', () => {
                this.iconElement.style.display = 'flex'; // Mantenemos 'flex' como en el original
            });

            this.cardElement.addEventListener('mouseleave', () => {
                this.iconElement.style.display = 'none';
            });
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this._render();
        }
    }

    _render() {
        const title = this.getAttribute('card-title') || 'Título por defecto';
        const iconSrc = this.getAttribute('icon-src');

        if (this.titleElement) this.titleElement.textContent = title;
        if (this.iconElement) this.iconElement.style.backgroundImage = iconSrc ? `url('${iconSrc}')` : 'none';
    }
}
customElements.define("app-hover-card", AppHoverCard);
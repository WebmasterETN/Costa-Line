
  class AppCardSmallList extends HTMLElement {
    constructor() {
      super();
    }

    static get observedAttributes() {
      return ["src"];
    }

    connectedCallback() {
      const src = this.getAttribute("src");
      if (src) {
        this._loadAndRenderCards(src);
      } else {
        this._renderSingleCard();
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "src" && oldValue !== newValue) {
        this._loadAndRenderCards(newValue);
      }
    }

    _renderSingleCard() {
      this.innerHTML = `
        <div class="card-small-list">
          <div class="card-body">
            <div class="left-side">
              <div class="vertical-bar-arrow">
                <div class="circle-icon">↑</div>
                <div class="vertical-line"></div>
              </div>
              <div class="content">
                <h2 class="title">Título de ejemplo</h2>
                <ul class="item-list">
                  <li><span class="icon-check">✔</span> Ejemplo 1</li>
                </ul>
              </div>
            </div>
            <div class="card-image-container">
              <img src="./img/demo.webp" alt="demo" class="card-side-image">
            </div>
          </div>
        </div>
      `;
    }

    async _loadAndRenderCards(jsonPath) {
      this.innerHTML = '<div class="cards-small-grid"><p>Cargando...</p></div>';
      const grid = this.querySelector('.cards-small-grid');

      try {
        const response = await fetch(jsonPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        grid.innerHTML = data.map(card => {
          const items = card.list.map(item => `
            <li>
              <span class="icon-check"> 
              </span>${item}
            </li>
          `).join("");

          return `
            <div class="card-small-list">
              <div class="card-body">
                <div class="left-side">
                  <div class="vertical-bar-arrow">
                    <div class="circle-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6L12 11L18 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 13L12 18L18 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div> 
                    <div class="vertical-line"></div>
                  </div>
                  <div class="content">
                    <h2 class="title">${card.titulo}</h2>
                    <ul class="item-list">${items}</ul>
                  </div>
                </div>
                <div class="card-image-container">
                  <img src="${card.imageSrc}" alt="${card.imageAlt || ''}" class="card-side-image">
                </div>
              </div>
            </div>
          `;
        }).join('');
      } catch (error) {
        console.error(`Error al cargar tarjetas:`, error);
        grid.innerHTML = "<p>Error al cargar las tarjetas.</p>";
      }
    }
  }

  customElements.define("app-card-small-list", AppCardSmallList);

class AppDestinySlider extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  connectedCallback() {
    const src = this.getAttribute("src");
    if (src) {
      this._loadAndRenderData(src);
    } else {
      this.innerHTML = "<p>Error: src attribute is missing.</p>";
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      this._loadAndRenderData(newValue);
    }
  }

  async _loadAndRenderData(src) {
    this.innerHTML = "<p>Loading...</p>";
    try {
      const response = await fetch(src);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      this._render(data);
    } catch (error) {
      console.error("Error loading or rendering destiny-slider:", error);
      this.innerHTML = "<p>Error loading content.</p>";
    }
  }

  _render(data) {
    if (!data || !Array.isArray(data)) {
      console.error("Invalid data structure for destiny-slider:", data);
      this.innerHTML = "<p>Error: Invalid data format.</p>";
      return;
    }

    const cardsHtml = data
      .map(
        (card) => `
      <div class="destiny-card">
        <img src="${card.imageSrc || ""}" alt="${card.alt || ""}">
        <a class="destiny-card-btn" href="${
          card.href || "#"
        }" target="_blank" rel="noopener noreferrer">
          ${card.text || ""}
        </a>
      </div>
    `
      )
      .join("");

    const prevIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="144" viewBox="0 0 24 144" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 108 9 72 15 36" stroke="white" stroke-width="10"></polyline>
  <polyline points="15 108 9 72 15 36" stroke="currentColor" stroke-width="6"></polyline>
</svg>`;

    const nextIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="144" viewBox="0 0 24 144" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 108 15 72 9 36" stroke="white" stroke-width="10"></polyline>
  <polyline points="9 108 15 72 9 36" stroke="currentColor" stroke-width="6"></polyline>
</svg>`;

    this.innerHTML = `
      <div class="destiny-slider">
        <div class="destiny-slider-wrapper">
          <div class="destiny-slide-track">
            ${cardsHtml}
          </div>
          <button class="destiny-slider-btn prev" aria-label="Anterior">${prevIcon}</button>
          <button class="destiny-slider-btn next" aria-label="Siguiente">${nextIcon}</button>
        </div>
      </div>
    `;

    this._setupSliderControls();
  }

  _setupSliderControls() {
    const track = this.querySelector(".destiny-slide-track");
    const prevBtn = this.querySelector(".destiny-slider-btn.prev");
    const nextBtn = this.querySelector(".destiny-slider-btn.next");

    if (!track || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => {
      const card = track.querySelector(".destiny-card");
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return card.offsetWidth + gap;
    };

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });
  }
}

customElements.define("app-destiny-slider", AppDestinySlider);

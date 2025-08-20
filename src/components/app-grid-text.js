class AppGridText extends HTMLElement {
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
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this._render(data);
    } catch (error) {
      console.error("Error loading or rendering app-grid-text:", error);
      this.innerHTML = "<p>Error loading content.</p>";
    }
  }

  _render(data) {
    if (
      !data ||
      !Array.isArray(data.cards) ||
      !data.textSection ||
      !Array.isArray(data.textSection.paragraphs)
    ) {
      console.error("Invalid data structure for app-grid-text:", data);
      this.innerHTML = "<p>Error: Invalid data format.</p>";
      return;
    }

    const { cards, textSection } = data;

    const cardsHtml = cards
      .map(
        (card) => `
          <div class="card">
            <img src="${card.imageSrc || ""}" alt="${card.alt || ""}">
            <a class="button-grid" href="${
              card.href || "#"
            }" target="_blank" rel="noopener noreferrer">
              ${card.text || ""}
            </a>
          </div>
        `
      )
      .join("");

    const paragraphsHtml = textSection.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");

    // Iconos SVG para los botones del slider
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
      <div class="app-grid-text">
        <div class="grid-slider-wrapper">
          <div class="grid-section">
            ${cardsHtml}
          </div>
          <button class="slider-btn prev" aria-label="Anterior">${prevIcon}</button>
          <button class="slider-btn next" aria-label="Siguiente">${nextIcon}</button>
        </div>
        
        <div class="text-section">
          ${paragraphsHtml}
        </div>
      </div>
    `;

    this._setupSliderControls();
  }

  _setupSliderControls() {
    const gridSection = this.querySelector(".grid-section");
    const prevBtn = this.querySelector(".slider-btn.prev");
    const nextBtn = this.querySelector(".slider-btn.next");

    if (!gridSection || !prevBtn || !nextBtn) {
      return;
    }

    const updateButtons = () => {
      const tolerance = 1;
      const isAtStart = gridSection.scrollLeft <= tolerance;
      const isAtEnd =
        gridSection.scrollLeft >=
        gridSection.scrollWidth - gridSection.clientWidth - tolerance;

      prevBtn.disabled = isAtStart;
      nextBtn.disabled = isAtEnd;
    };

    gridSection.addEventListener("scroll", updateButtons, { passive: true });

    prevBtn.addEventListener("click", () => {
      const card = gridSection.querySelector(".card");
      if (!card) return;

      const scrollAmount =
        card.offsetWidth + parseFloat(getComputedStyle(gridSection).gap);
      gridSection.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    nextBtn.addEventListener("click", () => {
      const card = gridSection.querySelector(".card");
      if (!card) return;

      const scrollAmount =
        card.offsetWidth + parseFloat(getComputedStyle(gridSection).gap);
      gridSection.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateButtons();
          observer.unobserve(this);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this);

    window.addEventListener("resize", updateButtons);
  }
}
customElements.define("app-grid-text", AppGridText);

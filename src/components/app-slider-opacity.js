class AppSliderOpacity extends HTMLElement {
  constructor() {
    super();
    this._destinations = [];
  }

  static get observedAttributes() {
    return ["destinations-src"];
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="MultiCarousel">
        <div class="MultiCarousel-inner"></div>
        <button class="leftLst">&lt;</button>
        <button class="rightLst">&gt;</button>
      </div>
    `;

    const src = this.getAttribute("destinations-src");
    if (src) {
      this._loadDataFromSrc(src);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "destinations-src" && oldValue !== newValue) {
      this._loadDataFromSrc(newValue);
    }
  }

  async _loadDataFromSrc(src) {
    const container = this.querySelector(".MultiCarousel-inner");
    container.innerHTML = "<p>Loading...</p>";

    try {
      const res = await fetch(src);
      this._destinations = await res.json();
    } catch (e) {
      console.error("Error loading:", e);
      container.innerHTML = "<p>Error loading data</p>";
      return;
    }

    await this._renderItems();
    requestAnimationFrame(() =>
      requestAnimationFrame(() => this._initializeCarousel())
    );
  }

  async _renderItems() {
    const container = this.querySelector(".MultiCarousel-inner");
    container.innerHTML = "";

    for (const dest of this._destinations) {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
        <div class="card-wrapper">
          <div class="card-destination">
            <img src="${dest.imageSrc}" alt="${dest.imageAlt}">
            <div class="overlay"></div>
            <div class="card-info">
              <p class="card-text">
                <span class="icon-pin-ubicacion"></span>${dest.destinationName}<br>
                "${dest.destinationTagline}"
              </p>
            </div>
            <a class="btn-destination" href="${dest.buttonLink}">${dest.buttonText}</a>
          </div>
        </div>
      `;
      container.appendChild(item);
    }
  }

  _initializeCarousel() {
    const $root = $(this);
    const $inner = $root.find(".MultiCarousel-inner");
    const $items = $inner.find(".item");

    if (!$items.length) return;

    let currentIndex = 0;
    const itemWidth = $items.first().outerWidth(true);
    const visibleWidth = $root.find(".MultiCarousel").width();
    const totalItems = $items.length;

    // Cuántas tarjetas caben completamente
    const itemsPerView = Math.floor(visibleWidth / itemWidth);
    const maxIndex = Math.max(0, totalItems - itemsPerView);

    const updateTransform = () => {
      let moveX = -currentIndex * itemWidth;

      const maxMove = totalItems * itemWidth - visibleWidth;
      if (-moveX > maxMove) moveX = -maxMove;

      $inner.css("transform", `translateX(${moveX}px)`);
    };

    $root
      .find(".leftLst, .rightLst")
      .off("click")
      .on("click", function () {
        if ($(this).hasClass("leftLst")) {
          if (currentIndex > 0) currentIndex--;
        } else {
          if (currentIndex < maxIndex) currentIndex++;
        }
        updateTransform();
      });

    // Autoavance cada 3 segundos
    setInterval(() => {
      currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
      updateTransform();
    }, 3000);
  }
}

customElements.define("app-slider-opacity", AppSliderOpacity);

class AppSliderOpacity extends HTMLElement {
  constructor() {
    super();
    this._destinations = [];
  }

  static get observedAttributes() {
    return ["destinations-data"];
  }

  connectedCallback() {
    if (!this.querySelector(".MultiCarousel")) {
      this.innerHTML = `
         <div class="container">
              <div class="row">
                  <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                      <div class="MultiCarousel-inner">
                          <!-- Destination items will be dynamically inserted here -->
                          <p>Loading slider...</p> 
                      </div>
                      <button class="btn btn-primary leftLst"><</button>
                      <button class="btn btn-primary rightLst">></button>
                  </div>
              </div>
          </div>
        `;
    }

    // Siempre llama a _updateSliderContent, manejará datos nulos/vacíos.
    this._updateSliderContent(this.getAttribute("destinations-data"));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "destinations-data" && oldValue !== newValue) {
      this._updateSliderContent(newValue);
    }
  }

  _updateSliderContent(jsonData) {
    const innerCarousel = this.querySelector(".MultiCarousel-inner");
    if (!innerCarousel) {
      console.error(
        "AppSliderOpacity: MultiCarousel-inner not found during data update."
      );
      return;
    }

    let parseError = false;
    if (!jsonData) {
      this._destinations = [];
    } else {
      try {
        const parsedData = JSON.parse(jsonData);
        if (!Array.isArray(parsedData)) {
          console.error(
            "AppSliderOpacity: Parsed destinations-data is not an array."
          );
          this._destinations = [];
          parseError = true;
        } else {
          this._destinations = parsedData;
        }
      } catch (e) {
        console.error(
          "AppSliderOpacity: Failed to parse destinations-data attribute:",
          e
        );
        this._destinations = [];
        parseError = true;
      }
    }

    if (parseError) {
      innerCarousel.innerHTML = "<p>Error loading slider data.</p>";
    } else {
      this._renderItems().then(() => {
        this._initializeCarousel(); // ← AHORA sí se ejecuta cuando las imágenes ya están listas
      });
    }
  }

  async _renderItems() {
    const innerCarousel = this.querySelector(".MultiCarousel-inner");
    if (!innerCarousel) {
      console.error(
        "AppSliderOpacity: MultiCarousel-inner not found for rendering items."
      );
      return;
    }
    innerCarousel.innerHTML = "";

    if (!this._destinations || this._destinations.length === 0) {
      innerCarousel.innerHTML = "<p>No destinations to display.</p>";
      return;
    }

    const imageLoadPromises = [];

    this._destinations.forEach((dest) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
        <div class="card-destination">
            <img 
                src="${dest.imageSrc}" 
                alt="${dest.imageAlt}" 
                loading="lazy" 
                decoding="async"
                class="fade-in-image"
            >
            <div class="overlay"></div>
            <div class="card-info">
                <p class="card-text">
                    <span class="icon-pin-ubicacion"></span>
                    Destino<br>
                    ${dest.destinationName}<br>
                    "${dest.destinationTagline}"
                </p>
            </div>
            <a href="${dest.buttonLink}" class="btn-destination">${dest.buttonText}</a>
        </div>
      `;

      const img = itemDiv.querySelector("img");
      const imgPromise = new Promise((resolve) => {
        if (img.complete) resolve();
        else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });

      imageLoadPromises.push(imgPromise);
      innerCarousel.appendChild(itemDiv);
    });

    await Promise.all(imageLoadPromises); 
  }

  _initializeCarousel() {
    const $componentRoot = $(this);
    const $carousel = $componentRoot.find(".MultiCarousel");
    if (!$carousel.length) {
      return;
    }

    const itemsInnerSel = ".MultiCarousel-inner";
    const itemSel = ".MultiCarousel-inner .item";

    let currentIndex = 0;
    const $itemsInner = $componentRoot.find(itemsInnerSel);

    const updateAndGetState = () => {
      const $items = $componentRoot.find(itemSel);
      if (!$items.length) {
        $itemsInner.css("transform", "translateX(0px)");
        return null;
      }
      const totalItems = $items.length;

      const itemWidth = $items.first().outerWidth(true) || 0;
      const containerWidth = $carousel.width() || 0;

      if (itemWidth === 0 && totalItems > 0) {
        return null;
      }

      const maxScroll = Math.max(0, itemWidth * totalItems - containerWidth);
      return { $items, totalItems, itemWidth, containerWidth, maxScroll };
    };

    $componentRoot
      .find(".leftLst, .rightLst")
      .off("click")
      .on("click", function () {
        const state = updateAndGetState();
        if (!state) return;

        const { totalItems, itemWidth, containerWidth, maxScroll } = state;
        let nextIndex = currentIndex;

        if ($(this).hasClass("leftLst")) {
          if (currentIndex > 0) {
            nextIndex--;
          }
        } else {
          if ((currentIndex + 1) * itemWidth <= maxScroll) {
            nextIndex++;
          } else {
            if (itemWidth > 0) {
              nextIndex = Math.ceil(maxScroll / itemWidth);
            } else {
              nextIndex = currentIndex;
            }
          }
        }

        currentIndex = nextIndex;
        let moveX = -itemWidth * currentIndex;

        if (moveX > 0) moveX = 0;
        if (moveX < -maxScroll) {
          moveX = -maxScroll;
        }

        $itemsInner.css("transform", "translateX(" + moveX + "px)");
      });
  }
}

customElements.define("app-slider-opacity", AppSliderOpacity);

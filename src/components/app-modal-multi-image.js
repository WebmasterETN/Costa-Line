class AppModalMultiImage extends HTMLElement {
  static get observedAttributes() {
    return [
      "modal-title",
      "image-1",
      "alt-1",
      "image-2",
      "alt-2",
      "image-3",
      "alt-3",
      "image-4",
      "alt-4",
      "content-title",
      "content-description",
      "opened",
    ];
  }

  constructor() {
    super();
    this._isOpen = false;
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this._boundHandleOverlayClick = this._handleOverlayClick.bind(this);
  }

  connectedCallback() {
    this.setAttribute("role", "dialog");
    this.setAttribute("aria-modal", "true");

    this._titleId = `modal-title-${Math.random().toString(36).substr(2, 9)}`;
    this.setAttribute("aria-labelledby", this._titleId);

    this.innerHTML = `
      <div class="app-modal-multi-image-overlay">
        <div class="app-modal-multi-image-container">
          <button class="app-modal-multi-image-close-button" aria-label="Cerrar modal">&times;</button>
          <h2 class="__title__modal" id="${this._titleId}"></h2> 
          <div class="app-modal-multi-image-content">
            <div class="app-modal-multi-image-grid">
              <img data-img-id="1" class="modal-image" src="" alt="">
              <img data-img-id="2" class="modal-image" src="" alt="">
              <img data-img-id="3" class="modal-image" src="" alt="">
              <img data-img-id="4" class="modal-image" src="" alt="">
            </div>
            <div class="app-modal-multi-image-text">
                   <h3 class="__text__title"></h3>
                   <p class="__text__description"></p>
            </div>
          </div>
        </div>
      </div>
      `;

    this._overlay = this.querySelector(".app-modal-multi-image-overlay");
    this._modalContainer = this.querySelector(
      ".app-modal-multi-image-container"
    );
    this._titleElement = this.querySelector(".__title__modal");
    this._contentTitleElement = this.querySelector(".__text__title");
    this._contentDescriptionElement = this.querySelector(
      ".__text__description"
    );
    this._imageElements = this.querySelectorAll(".modal-image");
    this._closeButton = this.querySelector(
      ".app-modal-multi-image-close-button"
    );

    this._closeButton.addEventListener("click", () => this.closeModal());
    this._overlay.addEventListener("click", this._boundHandleOverlayClick);

    this._render();
    if (
      this.hasAttribute("opened") &&
      this.getAttribute("opened") !== "false"
    ) {
      this.openModal();
    }
  }

  disconnectedCallback() {
    this._closeButton.removeEventListener("click", () => this.closeModal());
    this._overlay.removeEventListener("click", this._boundHandleOverlayClick);
    document.removeEventListener("keydown", this._boundHandleKeyDown);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    switch (name) {
      case "opened":
        if (newValue !== null && newValue !== "false") {
          this.openModal();
        } else {
          this.closeModal();
        }
        break;
      default:
        this._render();
        break;
    }
  }

  _render() {
    if (
      !this._titleElement ||
      !this._imageElements ||
      !this._contentTitleElement ||
      !this._contentDescriptionElement
    ) {
      return;
    }

    const title = this.getAttribute("modal-title") || "Detalles del Lugar";
    const contentTitle = this.getAttribute("content-title") || "";
    const contentDescription = this.getAttribute("content-description") || "";
    this._titleElement.textContent = title;
    this.setAttribute("aria-label", title);

    for (let i = 1; i <= 4; i++) {
      const imgElement = this.querySelector(`img[data-img-id="${i}"]`);
      if (imgElement) {
        const imgSrc = this.getAttribute(`image-${i}`);
        const imgAlt =
          this.getAttribute(`alt-${i}`) || `Imagen ${i} de ${title}`;

        if (imgSrc) {
          imgElement.src = imgSrc;
          imgElement.alt = imgAlt;
        } else {
          imgElement.src = "";
          imgElement.alt = "";
        }
      }
    }

    this._contentTitleElement.textContent = contentTitle;
    this._contentDescriptionElement.textContent = contentDescription;
  }

  _handleOverlayClick(event) {
    if (event.target === this._overlay) {
      this.closeModal();
    }
  }

  _handleKeyDown(event) {
    if (event.key === "Escape") {
      this.closeModal();
    }
    if (event.key === "Tab" && this._isOpen) {
      const focusableElements = Array.from(
        this._modalContainer.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.disabled && el.offsetParent !== null);

      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          event.preventDefault();
        }
      }
    }
  }

  openModal() {
    if (this._isOpen) return;
    this._isOpen = true;
    this.setAttribute("opened", "");

    if (this._overlay) {
      this._overlay.classList.add("opened");
    }

    document.addEventListener("keydown", this._boundHandleKeyDown);
    const firstFocusable = this._modalContainer.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocusable) {
      firstFocusable.focus();
    } else {
      this._modalContainer.setAttribute("tabindex", "-1");
      this._modalContainer.focus();
    }

    document.body.classList.add("modal-active-no-scroll");
    this.dispatchEvent(
      new CustomEvent("modal-opened", { bubbles: true, composed: true })
    );
  }

  closeModal() {
    if (!this._isOpen) return;
    this._isOpen = false;
    this.removeAttribute("opened");

    if (this._overlay) {
      this._overlay.classList.remove("opened");
    }

    document.removeEventListener("keydown", this._boundHandleKeyDown);
    document.body.classList.remove("modal-active-no-scroll");

    this.dispatchEvent(
      new CustomEvent("modal-closed", { bubbles: true, composed: true })
    );
  }
}

customElements.define("app-modal-multi-image", AppModalMultiImage);

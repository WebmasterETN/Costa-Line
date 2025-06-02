class AppDestinationsGrid extends HTMLElement {
  connectedCallback() {
    const destinationsData = this.getAttribute("destinations") || "[]";
    const destinations = JSON.parse(destinationsData);
    const titleTextData = this.getAttribute("titlesText") || "[]";
    const titleTexts = JSON.parse(titleTextData);
    const gridClass = this.getGridClass(destinations.length);

    this.innerHTML = `
      <section class="section__destinations" loading="lazy">
          <div class="section__destinations-container">
              ${this.renderText(titleTexts)}
              
              <div id="destinations-container">
                <button class="slider-btn prev icon-next-button" aria-label="Anterior" aria-controls="destinations-wrapper" tabindex="0" style="display: none;"></button>
                <div id="destinations-wrapper" class="section__destinations__container__grid ${gridClass}" role="group">
                  ${this.renderDestinations(destinations)}
                </div>
                <button class="slider-btn next icon-next-button" aria-label="Siguiente" aria-controls="destinations-wrapper" tabindex="0" style="display: none;"></button>
              </div>
          </div>
      </section>
    `;

    this.actualizarClases = this.actualizarClases.bind(this);
    window.addEventListener("resize", this.actualizarClases);
    // Ejecutar actualización una vez al cargar
    this.actualizarClases();
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.actualizarClases);
  }

  getGridClass(count) {
    return `grid-${Math.min(count, 5)}`;
  }

  renderText(titleTexts) {
    return titleTexts
      .map(
        (titleText) => `
        <h2 class="section__destinatons__container__title">${
          titleText.title || "Conoce mas de nuestros destinos"
        }</h2>
        <p class="section__destinations__text">${
          titleText.text || "Elije el destino que mas te agrade para viajar"
        }</p>
      `
      )
      .join("");
  }

  renderDestinations(destinations) {
    return destinations
      .map(
        (destination, index) => `
          <div class="destinations__item slide"
              style="background-image: url('${
                destination.image
              }'); grid-area: item${index + 1};">
            <a href="${
              destination.link || "../../boletos-de-autobus-a-monterrey.html"
            }"
              class="destinations__item__text destination__item__text--slide"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Ir a ${destination.title}"
              title="Ir a ${destination.title}">
              <h3 class="destinations__item__text__title">${
                destination.title
              }</h3>
              <p class="destinations__item__text__content">${
                destination.content
              }</p>
            </a>
          </div>
      `
      )
      .join("");
  }

  actualizarClases() {
    const destinationsContainer = this.querySelector("#destinations-container");
    const destinationsWrapper = this.querySelector("#destinations-wrapper");
    const prevButton = this.querySelector(".prev");
    const nextButton = this.querySelector(".next");

    if (!destinationsContainer || !destinationsWrapper) return;

    const isMobile = window.innerWidth <= 440;
    //const isMobileLandScape = window.innerWidth && window.innerWidth <=440 > window.innerHeight && window.innerHeight <= 956;
    const isMobileLandScape =
      window.innerWidth <= 1024 && window.innerWidth > window.innerHeight;

    if (isMobile || isMobileLandScape) {
      if (!destinationsContainer.classList.contains("slider-container")) {
        destinationsContainer.classList.add("slider-container");
      }
      destinationsWrapper.classList.remove(
        "section__destinations__container__grid"
      );
      destinationsWrapper.classList.add("slider");

      prevButton.style.display = "block";
      nextButton.style.display = "block";

      if (!$(destinationsWrapper).hasClass("slick-initialized")) {
        $(destinationsWrapper).slick({
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        });

        prevButton.onclick = () => $(destinationsWrapper).slick("slickPrev");
        nextButton.onclick = () => $(destinationsWrapper).slick("slickNext");

        function updateSlideTabindex() {
          $(destinationsWrapper)
            .find(
              '.slick-slide[aria-hidden="true"] a, .slick-cloned[aria-hidden="true"] a'
            )
            .attr("tabindex", -1);
          $(destinationsWrapper)
            .find(
              '.slick-slide[aria-hidden="false"] a, .slick-cloned[aria-hidden="false"] a'
            )
            .attr("tabindex", 0);
        }

        $(destinationsWrapper).on(
          "afterChange init reInit",
          updateSlideTabindex
        );

        setTimeout(updateSlideTabindex, 100);
      }
    } else {
      if ($(destinationsWrapper).hasClass("slick-initialized")) {
        $(destinationsWrapper).slick("unslick");
      }

      // Limpia cualquier tabindex residual en modo grid
      $(destinationsWrapper).find("a").attr("tabindex", 0);

      destinationsContainer.classList.remove("slider-container");
      destinationsWrapper.classList.remove("slider");

      const destinationsData = this.getAttribute("destinations") || "[]";
      const destinations = JSON.parse(destinationsData);
      const gridClass = this.getGridClass(destinations.length);

      destinationsWrapper.classList.add(
        "section__destinations__container__grid",
        gridClass
      );
      destinationsWrapper.innerHTML = this.renderDestinations(destinations);

      prevButton.style.display = "none";
      nextButton.style.display = "none";
    }
  }
}
customElements.define("app-destinations-grid", AppDestinationsGrid);

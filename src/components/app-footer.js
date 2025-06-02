class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer" aria-labelledby="footer-title">
        <h2 id="footer-title" class="visually-hidden">Información del pie de página</h2>
        <div class="footer__content main-container">
          <div class="footer__content__footer-logo">
            <a href="/" aria-label="Ir a página de inicio de NombreDeLaEmpresa">
              <img src="../src/assets/img/logos/logo.svg" alt="Logo de [Nombre de la empresa]" class="footer__logo" width="922" height="143" loading="lazy"/>
            </a>
          </div>
          <div class="footer__content__columns"></div>
        </div>
        <div class="footer__content__copyright">
          <p>
            © ${new Date().getFullYear()} ETN Turistar Lujos.
          </p>
        </div>
      </footer>
    `;

    this.fillFooterColumns();
    window.addEventListener("resize", this.handleResize);
  }

  fillFooterColumns() {
    const footerContent = [
      {
        title: "Sobre la empresa",
        links: [
          { text: "¿Quiénes somos?", href: "#" },
          { text: "Certificaciones", href: "#" },
          { text: "Bolsa de trabajo", href: "#" },
        ],
      },
      {
        title: "Legales",
        links: [
          { text: "Avisos de privacidad", href: "#" },
          { text: "Términos y condiciones", href: "../terminos-condiciones.html" },
        ],
      },
      {
        sublevel: [
          {
            title: "Servicio al cliente",
            links: [
              { text: "Viaje protegido MAX", href: "#" },
              { text: "Agencias", href: "#" },
            ],
          },
          {
            title: "Ubicaciones",
            links: [{ text: "Terminales en destinos", href: "#" }],
          },
        ],
      },
      {
        title: "Ayuda",
        links: [
          { text: "Preguntas frecuentes", href: "#" },
          { text: "Tipos de boletos", href: "#" },
          { text: "Dónde comprar", href: "#" },
          { text: "Formas de pago", href: "#" },
        ],
      },
      {
        sublevel: [
          {
            title: "Contáctanos",
            links: [
              { text: "800 8000 386", href: "tel:8008000386", type: "tel" },
            ],
          },
          {
            title: "Síguenos",
            links: [
              { text: "Facebook", href: "#", type: "icon-fb" },
              { text: "Instagram", href: "#", type: "icon-ig" },
              { text: "X", href: "#", type: "icon-x" },
              { text: "YouTube", href: "#", type: "icon-yt" },
            ],
          },
        ],
      },
    ];

    const columnsContainer = this.querySelector(".footer__content__columns");

    footerContent.forEach((col, index) => {
      const section = document.createElement("section");
      section.classList.add("footer__column");

      if (index === footerContent.length - 1 && col.sublevel) {
        // Último .footer__column con sublevels: Siempre usar <h3> y mostrar <ul>
        col.sublevel.forEach(({ title, links }) => {
          const subSection = document.createElement("section");
          subSection.classList.add("footer__sublevel");
          subSection.append(
            this.createTitle(title, false),
            this.createLinkList(links, false)
          );
          section.appendChild(subSection);
        });
      } else if (col.sublevel) {
        col.sublevel.forEach(({ title, links }) => {
          const subSection = document.createElement("section");
          subSection.classList.add("footer__sublevel");
          subSection.append(
            this.createTitleOrButton(title),
            this.createLinkList(links)
          );
          section.appendChild(subSection);
        });
      } else {
        section.append(
          this.createTitleOrButton(col.title),
          this.createLinkList(col.links)
        );
      }

      columnsContainer.appendChild(section);
    });

    this.handleResize(); // Aplicar cambios según la resolución inicial
  }

  createLinkList(links, collapsible = true) {
    const ul = document.createElement("ul");
    ul.classList.add("footer__list");
    if (collapsible) ul.classList.add("panel-content", "hidden");

    links.forEach(({ text, href, type }) => {
      const li = document.createElement("li");
      li.classList.add("footer__item");

      if (type?.includes("icon")) {
        li.innerHTML = `<a href="${href}" aria-label="${text}" class="social_media_link"><i class="${type}"></i></a>`;
      } else if (type?.includes("tel")) {
        li.innerHTML = `<a class="footer__link tel_link" href="${href}" >${text}</a>`;
      } else {
        li.innerHTML = `<a class="footer__link" href="${href}">${text}</a>`;
      }

      ul.appendChild(li);
    });

    return ul;
  }

  createTitleOrButton(title) {
    const isMobile = window.innerWidth <= 1200;
    return this.createTitle(title, isMobile);
  }

  createTitle(title, isButton) {
    if (isButton) {
      const button = document.createElement("button");
      button.classList.add("accordion-btn");
      button.textContent = title;
      button.addEventListener("click", () => {
        const list = button.nextElementSibling;
        list.classList.toggle("hidden");
        button.classList.toggle("open");
      });
      return button;
    } else {
      const h3 = document.createElement("h3");
      h3.classList.add("footer__title");
      h3.textContent = title;
      return h3;
    }
  }

  handleResize() {
    const isMobile = window.innerWidth <= 1200;
    const columns = this.querySelectorAll(".footer__column");

    columns.forEach((column, index) => {
      if (index === columns.length - 1) return; // Última columna: No se cambia

      column
        .querySelectorAll(".footer__title, .accordion-btn")
        .forEach((titleElement) => {
          const newTitle = this.createTitle(titleElement.textContent, isMobile);
          titleElement.replaceWith(newTitle);
        });

      column.querySelectorAll(".footer__list").forEach((list) => {
        if (isMobile) {
          list.classList.add("hidden");
        } else {
          list.classList.remove("hidden");
        }
      });
    });
  }
}

customElements.define("app-footer", AppFooter);

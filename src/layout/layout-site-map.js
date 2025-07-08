/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-section-title.js";

class LayoutSiteMap extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-doters></app-modal-doters>
      <div class="space"></div>
      <section class="__section">
        <app-section-title section-title="Site Map | ETN Turistar Lujo"></app-section-title>
        <div id="site-map-listas">Cargando...</div>
      </section>
    `;

    // Cargar el JSON externo
    try {
      const resp = await fetch("/src/data/sitemap.json");
      const data = await resp.json();

      // Generar HTML de listas por categorías
      const listasHTML = data
        .map(
          (cat) => `
      <div class="site-map-category">
        <h3>${cat.categoria}</h3>
        <hr class="site-map-divider" />
        <ul>
          ${cat.landings
            .map(
              (landing) => `
            <li><a href="${landing.url}">${landing.nombre}</a></li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
        )
        .join("");

      this.querySelector("#site-map-listas").innerHTML = listasHTML;
    } catch (e) {
      this.querySelector("#site-map-listas").innerHTML =
        "No se pudo cargar el mapa del sitio.";
    }
  }
}
customElements.define("layout-site-map", LayoutSiteMap);

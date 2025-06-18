/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-cards-text-image.js";
import "../js/slick.js?v=1.0.0";

class LayoutSalasDeEsperaVip extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/Bw_Doters_Feria_Tacambaro1_Autovias.webp","mediumImage": "../src/assets/img/banner/Tablet-1.png", "smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/Bw_Patio_Santa_Fe_Morelia2_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet.png","smallImage": "../src/assets/img/banner/Movil.png", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/Bw_Playas_Semana_Santa_Autovias.webp", "mediumImage": "../src/assets/img/banner/Tablet-1.png","smallImage": "../src/assets/img/banner/Movil-1.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

            <section class="__section __section__salas">
                <app-section-title section-title="Salas de espera"></app-section-title>
                <p class="__paragraph">En ETN Turistar contamos con cómodas salas de espera VIP, para que disfrutesde la línea más cómoda desde antes de abordar el autobús.</p>
                <div class="__grid-container">
                    <aside class="__aside-image">
                        <img class="__aside-img" src="src/assets/img/salas-espera/salas-de-espera-etn.webp" alt="salas de espera vip">
                    </aside>
                    <article class="__article-buttons">
                        <h3 class="__article-title">Servicios Disponibles</h3>
                          <div class="services-container" id="services-cards-container">
                                <!-- Las tarjetas de tiendas se cargarán aquí -->
                          </div>
                    </article>
                </div>
            </section>
           
        `;

		// Mapper para app-cards-text-image
		const textImageMapper = (element, data) => {
			if (data.title) {
				element.setAttribute("title-text", data.title);
			}
			if (data.iconSrc) {
				element.setAttribute("icon-src", data.iconSrc);
			}
		};

		this.loadAndRenderComponentList(
			"../src/data/cards-text-image.json",
			"#services-cards-container",
			"app-cards-text-image",
			textImageMapper
		);
	}

	async loadAndRenderComponentList(
		jsonPath,
		containerSelector,
		componentTag,
		dataToAttributesMapper
	) {
		const container = this.querySelector(containerSelector);
		if (!container) {
			console.error(`El contenedor ${containerSelector} no fue encontrado.`);
			return;
		}
		container.innerHTML = ""; // Opcional: Limpiar o mostrar estado de carga

		try {
			const response = await fetch(jsonPath);
			if (!response.ok) {
				throw new Error(
					`Error HTTP! status: ${response.status} al cargar ${jsonPath}`
				);
			}
			const itemsData = await response.json();

			if (!itemsData || !Array.isArray(itemsData) || itemsData.length === 0) {
				console.warn(
					`No hay datos en ${jsonPath}, están vacíos o el formato es incorrecto.`
				);
				container.innerHTML = "<p>No hay datos disponibles para mostrar.</p>";
				return;
			}

			itemsData.forEach((data) => {
				const element = document.createElement(componentTag);
				dataToAttributesMapper(element, data); // Aplicar atributos usando el mapper
				container.appendChild(element);
			});
		} catch (error) {
			console.error(
				`Error al cargar o renderizar desde ${jsonPath} en ${containerSelector}:`,
				error
			);
			if (container) {
				container.innerHTML = `<p>Error al cargar la información desde ${jsonPath}.</p>`;
			}
		}
	}
}
customElements.define("layout-salas-de-espera-vip", LayoutSalasDeEsperaVip);

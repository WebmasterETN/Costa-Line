/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-forms.js";
import "../js/slick.js?v=1.0.0";

class LayoutAtencionAClientes extends HTMLElement {
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

            <section class="__section __section__atencion-clientes">
                <app-section-title section-title="Atencion a Clientes""></app-section-title>
                <div class="__grid-cards-container">
                    <div class="__container-image">
                        <p class="__container__title">Ponte en contacto con nosotros</p>
                         <img class="__img" src="src/assets/img/sales-location/atencion-clientes.webp" alt="Atencion a clientes" loading="lazy"> 
                        <p class="__container-image__footer">Resolveremos tus dudas</p>
                    </div>
                    <div class="__container-form">
                        <p class="__container__title">Completa el formulario y estaremos en contacto</p>
                        <app-forms></app-forms>
                    </div>
                </div>
            </section>

            
        `;

		this.loadAndSetFormDataToAppForms();
	}
	//JS para renderizar los forms
	async loadAndSetFormDataToAppForms() {
		const appFormsElement = this.querySelector("app-forms");
		const response = await fetch("../src/data/forms-atencion-cliente.json");
		const formData = await response.json();
		appFormsElement.setFormData(formData);
	}

	//js para renderizar componentes
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
		container.innerHTML = "";

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
				dataToAttributesMapper(element, data);
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
customElements.define("layout-atencion-a-clientes", LayoutAtencionAClientes);

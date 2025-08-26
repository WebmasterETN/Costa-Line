class AppTablePets extends HTMLElement {
  connectedCallback() {
    this.lang = this.getAttribute("lang") || "es"; // idioma por defecto
    this.innerHTML = `<div class="app-table-pets-container">Cargando información de mascotas...</div>`;
  }

  setTableData(data) {
    const container = this.querySelector(".app-table-pets-container") || this;

    if (!data || !Array.isArray(data.columns) || !Array.isArray(data.rows)) {
      container.innerHTML = `<p class="error-message">Error: Datos inválidos para la tabla de mascotas.</p>`;
      console.error(
        "Datos inválidos o no proporcionados para app-table-pets:",
        data
      );
      return;
    }

    const { columns, rows } = data;

    // Diccionario de traducciones
    const translations = {
      en: {
        CATEGORIA: "CATEGORY",
        "A BORDO": "ON BOARD",
        DOCUMENTADA: "DOCUMENTED",
        "APOYO VISUAL": "VISUAL SUPPORT",
        "APOYO EMOCIONAL": "EMOTIONAL SUPPORT",
        PERROS: "DOGS",
        GATOS: "CATS",
        "CUALQUIER PESO": "ANY WEIGHT",
        "HASTA 12 KG": "UP TO 12 KG",
        SI: "YES",
        NO: "NO",
      },
      es: {}, // Por defecto, dejamos los valores originales en español
    };

    const t = translations[this.lang] || {};

    let tableHTML = `
            <table class="app-table">
                <thead>
                    <tr>
                        ${columns
                          .map(
                            (col) =>
                              `<th>${this._escapeHtml(
                                t[col.label] || col.label
                              )}</th>`
                          )
                          .join("")}
                    </tr>
                </thead>
                <tbody>
                    ${rows
                      .map(
                        (row) => `
                        <tr>
                            ${columns
                              .map(
                                (col) =>
                                  `<td data-label="${this._escapeHtml(
                                    t[col.label] || col.label
                                  )}">${this._escapeHtml(
                                    t[row[col.key]] || row[col.key]
                                  )}</td>`
                              )
                              .join("")}
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        `;
    container.innerHTML = tableHTML;
  }

  _escapeHtml(unsafe) {
    if (unsafe === null || typeof unsafe === "undefined") return "";
    const text = String(unsafe);
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

customElements.define("app-table-pets", AppTablePets);

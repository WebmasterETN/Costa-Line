class AppTablePets extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div class="app-table-pets-container">Cargando información de mascotas...</div>`;
    }

    setTableData(data) {
        const container = this.querySelector('.app-table-pets-container') || this;

        if (!data || !Array.isArray(data.columns) || !Array.isArray(data.rows)) {
            container.innerHTML = `<p class="error-message">Error: Datos para la tabla de mascotas inválidos o no proporcionados.</p>`;
            console.error("Datos inválidos o no proporcionados para app-table-pets:", data);
            return;
        }

        const { columns, rows } = data;

        let tableHTML = `
            <table class="app-table">
                <thead>
                    <tr>
                        ${columns.map(col => `<th>${this._escapeHtml(col.label || col.key)}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(row => `
                        <tr>
                            ${columns.map(col => `<td data-label="${this._escapeHtml(col.label || col.key)}">${row[col.key] !== undefined ? this._escapeHtml(row[col.key]) : ''}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        container.innerHTML = tableHTML;
    }

    _escapeHtml(unsafe) {
        if (unsafe === null || typeof unsafe === 'undefined') return '';
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
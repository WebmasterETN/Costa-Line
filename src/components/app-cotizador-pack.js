class CotizadorPack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="__section-cotizador-pack">
        <form action="./cotizador-datos.html" method="get" class="form-cotizacion">
          <!-- Sección de origen y destino -->
          <fieldset class="form-cotizacion__ubicaciones">
            <h2>Realiza una cotización</h2>

            <div class="form-groups">

              <div class="form-group">
                <label for="origen" class="visually-hidden">Origen</label>
                <input type="text" id="origen" class="" name="origen" placeholder="Origen..." required>
              </div>

              <div class="form-group">
                <label for="destino" class="visually-hidden">Destino</label>
                <input type="text" id="destino" name="destino" placeholder="Destino..." required>
              </div>

            </div>

            <div class="form-check">
              <input type="checkbox" id="diferente-destino" name="diferente_destino">
              <label for="diferente-destino">Diferente destino para cada paquete</label>
            </div>
          </fieldset>

          <!-- Fieldset para tipo de paquete y dimensiones -->
          <fieldset class="form-cotizacion__paquete">
            <div class="form-group">
              <select id="tipo-paquete" name="tipo_paquete" required>
                <option value="" disabled selected>Tipo de paquete</option>
                <option value="paquete">Paquete</option>
                <option value="sobre">Sobre</option>
              </select>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="peso">Peso</label>
                <input type="number" id="peso" name="peso" placeholder="kg" required>
              </div>

              <div class="form-group">
                <label for="alto">Alto</label>
                <input type="number" id="alto" name="alto" placeholder="cm" required>
              </div>

              <div class="form-group">
                <label for="ancho">Ancho</label>
                <input type="number" id="ancho" name="ancho" placeholder="cm" required>
              </div>

              <div class="form-group">
                <label for="largo">Largo</label>
                <input type="number" id="largo" name="largo" placeholder="cm" required>
              </div>
            </div>

            <div class="form-group">
              <label for="contenido">Contenido</label>
              <textarea id="contenido" name="contenido" rows="4" placeholder="Escribe la descripción del contenido de tu paquete..." required></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-continuar">Continuar</button>
            </div>

          </fieldset>

        </form>
      </section>
    `;
  }
}

customElements.define("app-cotizador-pack", CotizadorPack);
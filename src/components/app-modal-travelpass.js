class AppModalTravelpass extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <!-- Modal de inicio de sesión con selector de marca -->
      <div id="modalTravelPass" class="ModalTravelPs">
          <div class="modal-content">
            <button class="close" class="close" id="close-login-modal"><span>&times;</span></button>
            <div class="card-modal">
              <div class="modal-header">
                  <img src="../src/assets/img/gho-img/logos/logo-travel-pass.png" alt="Logotipo TravelPass" title="Travel Pass Formulario" width="100" height="32" class="modal-logo"> 
              </div>

              <div>
                <h2 class="titulo-2">¡Bienvenido!</h2>
                <h3 class="subtitle">Ingresa tu cuenta a Travelpass</h3>
              </div>

              <!-- Selector de marca -->
              <div id="brand-selector" class="brand-selector">
                  <button type="button" class="brand-btn" data-brand="surdejalisco">
                      <img src="https://rsrvms-vanda-prod.s3.us-east-1.amazonaws.com/funnel/test/surdejalisco.png" class="__image__button-size" alt="Sur de Jalisco">
                  </button>
                  <button type="button" class="brand-btn" data-brand="pegasso">
                      <img src="../src/assets/img/gho-img/logos/logo_Pegasso.webp" class="__image__button-size" alt="Viajero">
                  </button>
              </div>
              
              <form id="login-form" class="__login-form">
                <fieldset class="__section-inputs">
                  <input type="hidden" id="brand" value="viajero"> <!-- Valor por defecto -->
                  <label for="email">Correo electrónico:</label>
                  <input type="email" id="email" required>
                  <label for="password">Contraseña:</label>
                  <input type="password" id="password" required>
                </fieldset>
                  <button type="submit" class="__submit-button">Iniciar sesión</button>
              </form>

              <div class="__card-footer">
                <a class="w-modal-link color-1 center" href="https://autovias.com.mx/sur-de-jalisco/travel-pass.html">Conoce aquí&nbsp; <span class="bold"> ¿Qué es Travel Pass?</span></a>
                <a id="register-link" class="w-modal-link color-1" href="#">¿No tienes cuenta? <span class="bold"> Regístrate</span></a>
                <div id="message" class="message"></div>
              </div>
            </div>
          </div>
      </div>

      <!-- Modal de usuario logueado -->
      <div id="modalTravelPassLogueado" class="ModalTravelPs">
            <div class="modal-content">
                <button class="close" id="close-profile-modal"><span>&times;</span></button>
                <div class="card-modal">
                    <div class="modal-header">
                        <img src="../src/assets/img/gho-img/logos/logo-travel-pass.png" alt="Logotipo TravelPass" title="Logo Travel Pass" width="100" height="32" class="modal-logo">
                    </div>
                    <div class="modalContenido">
                        <h2>Información del Usuario</h2>
                        <p id="user-name"></p>
                        <p id="user-balance"></p>
                        <a id="miCuentaBtn" class="btn-cuenta">Mi cuenta</a>
                        <a href="#" id="logout-link" class="btn-logout" title="cerrar sesion">Cerrar sesión</a>
                    </div>
                </div>
            </div>  
      </div>
    `;
  }
}

customElements.define('app-modal-travelpass', AppModalTravelpass);
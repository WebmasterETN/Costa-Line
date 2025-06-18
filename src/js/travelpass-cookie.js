document.addEventListener('DOMContentLoaded', function () {
    const loginIconDesktop = document.getElementById('login-icon'); // Botón de escritorio para actualización visual
    const loginModal = document.getElementById('modalTravelPass');
    const openLoginModalTriggers = document.querySelectorAll('.js-open-travelpass-login-modal'); // Todos los botones que abren el modal
    const profileModal = document.getElementById('modalTravelPassLogueado');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');
    const userNameElement = document.getElementById('user-name');
    const userBalanceElement = document.getElementById('user-balance');
    const logoutLink = document.getElementById('logout-link');
    const brandButtons = document.querySelectorAll('.brand-btn');
    const brandInput = document.getElementById('brand');
    const miCuentaBtn = document.getElementById('miCuentaBtn');
    const registerLink = document.getElementById('register-link');
    const infoLink = document.getElementById('info-link');

    const loginUrl = 'https://one-api.autovias.com.mx/api/v2/ewallet/login';
    const profileUrl = 'https://one-api.autovias.com.mx/api/v2/ewallet/profile';

    const dashboardUrls = {
        'surdejalisco': 'https://travelpass-sur-de-jalisco.autovias.com.mx/dashboard',
        'pegasso': 'https://travelpass-pegasso.autovias.com.mx/dashboard'
    };

    const registerUrls = {
        'surdejalisco': 'https://travelpass-sur-de-jalisco.autovias.com.mx/signup',
        'pegasso': 'https://travelpass-pegasso.autovias.com.mx/signup'
    };

    const infoUrls = {
        'surdejalisco': 'https://www.autovias.com.mx/sur-de-jalisco/travel-pass.html',
        'pegasso': 'https://www.autovias.com.mx/pegasso/travel-pass.html'
    };

    // Funciones para manejo de cookies
    function setCookie(name, value, days = 7) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; domain=autovias.com.mx; SameSite=None; Secure`;
    }

    function getCookie(name) {
        return document.cookie.split('; ').find(row => row.startsWith(name))?.split('=')[1] || null;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=autovias.com.mx; SameSite=None; Secure`;
    }

    function getToken() {
        return getCookie('costapassToken');
    }

    function setToken(token) {
        setCookie('costapassToken', token, 7);
    }

    function removeToken() {
        deleteCookie('costapassToken');
    }

    function closeModals() {
        loginModal.style.display = 'none';
        profileModal.style.display = 'none';
    }

    // Manejadores de eventos para abrir los modales
    const openLoginModalStatic = function (event) {
        event.preventDefault();
        closeModals();
        if (loginModal) loginModal.style.display = 'flex';
    };

    const openProfileModalStatic = function (event) {
        event.preventDefault();
        closeModals();
        if (profileModal) profileModal.style.display = 'flex';
    };

    function updateLoginIcon(profileData) {
        // Esta función solo actualiza el HTML interno del botón de escritorio
        if (loginIconDesktop) {
            loginIconDesktop.innerHTML = profileData ?
                `<a href="#" id="open-profile-modal-link"><img src="https://autovias.com.mx/gho-test/gho-img-web/iconos/icono-travel-pass.webp" class="icono-travel" alt="Travel Pass" title="Perfil Travel Pass"> Hola, ${profileData.name}</a>` :
                `<a href="#" id="open-login-modal-link"><img src="../src/assets/img/gho-img/logos/logo-travel-pass.png" alt="Iniciar sesión en Travel Pass" title="Ingresa a Travel Pass" width="100" height="32" style="cursor: pointer;"></a>`;
        }
    }
    function checkSession() {
        const token = getToken();
        if (token) {
            fetch(profileUrl, { method: 'GET', headers: { 'Authorization': `Bearer ${token}` } })
                .then(response => response.json())
                .then(profileData => {
                    if (profileData.name) {
                        updateLoginIcon(profileData);
                        userNameElement.textContent = `Nombre: ${profileData.name}`;
                        userBalanceElement.textContent = `Saldo: ${profileData.balance !== undefined ? profileData.balance : 'N/A'} MXN`;
                        // Adjuntar el manejador para abrir el modal de perfil a todos los triggers
                        openLoginModalTriggers.forEach(trigger => {
                            trigger.removeEventListener('click', openLoginModalStatic); // Limpiar listener anterior
                            trigger.removeEventListener('click', openProfileModalStatic); // Limpiar listener anterior
                            trigger.addEventListener('click', openProfileModalStatic);
                        });
                    } else {
                        removeToken(); // Si los datos del perfil no son válidos, limpiar el token
                        updateLoginIcon(null);
                        // Adjuntar el manejador para abrir el modal de login a todos los triggers
                        openLoginModalTriggers.forEach(trigger => {
                            trigger.removeEventListener('click', openProfileModalStatic); // Limpiar listener anterior
                            trigger.removeEventListener('click', openLoginModalStatic); // Limpiar listener anterior
                            trigger.addEventListener('click', openLoginModalStatic);
                        });
                    }
                })
                .catch(() => {
                    updateLoginIcon(null);
                    // Adjuntar el manejador para abrir el modal de login a todos los triggers en caso de error
                    openLoginModalTriggers.forEach(trigger => {
                        trigger.removeEventListener('click', openProfileModalStatic);
                        trigger.removeEventListener('click', openLoginModalStatic);
                        trigger.addEventListener('click', openLoginModalStatic);
                    });
                });
        } else {
            updateLoginIcon(null);
            // Adjuntar el manejador para abrir el modal de login a todos los triggers
            openLoginModalTriggers.forEach(trigger => {
                trigger.removeEventListener('click', openProfileModalStatic);
                trigger.removeEventListener('click', openLoginModalStatic);
                trigger.addEventListener('click', openLoginModalStatic);
            });
        }
    }

    // Actualiza enlace de registro
    function updateRegisterLink() {
        const selectedBrand = brandInput.value;
        if (registerUrls[selectedBrand]) {
            registerLink.href = registerUrls[selectedBrand];
        }
    }

    // Actualiza enlace de "¿Qué es Travel Pass?"
    function updateInfoLink() {
        const selectedBrand = brandInput.value;
        if (infoUrls[selectedBrand]) {
            infoLink.href = infoUrls[selectedBrand];
        }
    }

    // Selector de marca
    brandButtons.forEach(button => {
        button.addEventListener('click', function () {
            brandButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            brandInput.value = this.dataset.brand;

            updateRegisterLink();
            updateInfoLink();
        });
    });

    // Envío del formulario de login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const brand = brandInput.value;

        fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, brand })
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    setToken(data.token);
                    localStorage.setItem('userBrand', brand);
                    message.textContent = 'Inicio de sesión exitoso!';
                    message.style.color = 'green';
                    checkSession();
                    loginModal.style.display = 'none';
                } else {
                    message.textContent = 'Inicio de sesión fallido. Verifica tus credenciales.';
                    message.style.color = 'red';
                }
            })
            .catch(() => {
                message.textContent = 'Ocurrió un error al iniciar sesión.';
                message.style.color = 'red';
            });
    });

    logoutLink.addEventListener('click', function (event) {
        event.preventDefault();
        removeToken();
        updateLoginIcon(null);
        closeModals();
    });

    if (miCuentaBtn) {
        miCuentaBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const userBrand = localStorage.getItem('userBrand');
            if (userBrand && dashboardUrls[userBrand]) {
                window.open(dashboardUrls[userBrand], '_blank');
            }
        });
    }

    document.getElementById('close-login-modal')?.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    document.getElementById('close-profile-modal')?.addEventListener('click', function () {
        profileModal.style.display = 'none';
    });

    updateRegisterLink();
    updateInfoLink();
    checkSession();
});
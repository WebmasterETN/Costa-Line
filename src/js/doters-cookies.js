// Función para abrir el modal de inicio de sesión
function openLoginModal() {
    document.getElementById('modalDoters-loginModal').style.display = 'block';
}

// Función para cerrar el modal de inicio de sesión
function closeLoginModal() {
    document.getElementById('modalDoters-loginModal').style.display = 'none';
}

// Función para cerrar el modal de perfil
function closeProfileModal() {
    document.getElementById('modalDoters-profileModal').style.display = 'none';
}

// Función para redireccionar al iniciar sesión
function redirectToLogin() {
    document.getElementById('modalDoters-logo').style.display = 'none'; // Ocultar logo inmediatamente después de login
    window.location.href = 'https://auth.doters.com/v2/?clientId=etn-web&clientSecret=NTEx51n22xZK&language=es-MX&redirectUri=https://one-api.etn.com.mx/api/v2/doters/providers-login/etn';
}

// Función para redireccionar al unirse
function redirectToRegister() {
    document.getElementById('modalDoters-logo').style.display = 'none'; // Ocultar logo inmediatamente después de registro
    window.location.href = 'https://auth.doters.com/v2/?clientId=etn-web&clientSecret=NTEx51n22xZK&language=es-MX&redirectUri=https://one-api.etn.com.mx/api/v2/doters/providers-login/etn';
}

// Función para obtener la información del perfil del usuario
function fetchUserProfile() {
    document.getElementById('modalDoters-logo').style.display = 'none'; // Ocultar logo mientras carga el perfil

    fetch('https://one-api.etn.com.mx/api/v2/doters/profile', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getCookie('token')}` // Obtén el token de la cookie
        }
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar la información del usuario
        const welcomeMessage = document.getElementById('modalDoters-welcomeMessage');
        welcomeMessage.innerHTML = `<i class="icon-user-info doters-basic doters-bigger"></i> Bienvenido, <span id="modalDoters-username" style="cursor: pointer; font-weight: 700;">${data.first_name}</span>`;
        welcomeMessage.style.display = 'block';

        // Asignar los datos al modal de perfil
        document.getElementById('modalDoters-username').innerText = `${data.first_name}`;
        document.getElementById('modalDoters-dotersId').innerText = data.doters_id;
        document.getElementById('modalDoters-availablePoints').innerText = data.available_points;

        // Mostrar el botón de cerrar sesión
        const logoutButton = document.getElementById('modalDoters-logoutButton');
        logoutButton.style.display = 'block';
        
        // Asignar la función de logout al botón
        logoutButton.onclick = logoutDoters;

        // Hacer clic en el mensaje de bienvenida para abrir el modal de perfil
        welcomeMessage.onclick = openProfileModal;
    })
    .catch(error => {
        console.error('Error fetching user profile:', error);
    });
}

// Función para abrir el modal de perfil del usuario
function openProfileModal() {
    document.getElementById('modalDoters-profileModal').style.display = 'block';
}

// Función para cerrar sesión y redirigir
function logoutDoters() {
    console.log("Intentando cerrar sesión...");
    
    // Eliminar la cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.etn.com.mx; path=/";
    
    // Redirigir al usuario después del cierre de sesión
    window.location.href = "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.etn.com.mx/sso/logout&client_id=etn-web";
}

// Función para obtener la cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Llamar a la función fetchUserProfile si ya hay una cookie válida
if (getCookie('token')) {
    document.getElementById('modalDoters-logo').style.display = 'none'; // Ocultar logo si hay token
    fetchUserProfile();
} else {
    // Mostrar el logo si no hay token
    document.getElementById('modalDoters-logo').style.display = 'block';
    // Asegurarse de que el mensaje de bienvenida y el modal de perfil no se muestren
    document.getElementById('modalDoters-welcomeMessage').style.display = 'none';
}

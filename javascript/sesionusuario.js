
// JAVASCRIPT PARA CAMBIAR HEADER Y VERIFICAR REGISTRO

var USUARIO_NO_EXISTE = document.getElementById("USERS-NO-REGISTRADOS");
var USUARIO_SI_EXISTE = document.getElementById("USERS-SI-REGISTRADOS");

var nombreUsuarioLink = document.getElementById("nombre-usuario-link");

var estaLogueado = sessionStorage.getItem("ingreso") === "true";
var nombreUsuario = sessionStorage.getItem("nuevoUsuarioLogueado");


if (estaLogueado) {

    if (USUARIO_NO_EXISTE) USUARIO_NO_EXISTE.style.display = "none";
    if (USUARIO_SI_EXISTE) USUARIO_SI_EXISTE.style.display = "flex"; 
    
    if (nombreUsuarioLink && nombreUsuario) {
        nombreUsuarioLink.textContent = nombreUsuario;
    }
} else {
    if (USUARIO_NO_EXISTE) USUARIO_NO_EXISTE.style.display = "flex";
    if (USUARIO_SI_EXISTE) USUARIO_SI_EXISTE.style.display = "none";
}


// BOTÓN PARA CERRAR SESIÓN 

function cerrarSesion() {
    sessionStorage.removeItem("nuevoUsuarioLogueado");
    window.location.href = "login.html"; 
}

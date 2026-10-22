
// JAVASCRIPT PARA CAMBIAR HEADER Y VERIFICAR REGISTRO

var USUARIO_NO_EXISTE = document.getElementById("USERS-NO-REGISTRADOS");
var USUARIO_SI_EXISTE = document.getElementById("USERS-SI-REGISTRADOS");

var nombreUsuarioLink = document.getElementById("nombre-usuario-link");

var estaLogueado = sessionStorage.getItem("ingreso") === "true";
var nombreUsuario = sessionStorage.getItem("nuevoUsuarioLogueado");


if (estaLogueado) {
    // Si está logueado: ocultamos el de invitados y mostramos el de registrados
    if (USUARIO_NO_EXISTE) USUARIO_NO_EXISTE.style.display = "none";
    if (USUARIO_SI_EXISTE) USUARIO_SI_EXISTE.style.display = "flex"; 
    
    if (nombreUsuarioLink && nombreUsuario) {
        nombreUsuarioLink.textContent = nombreUsuario;
    }
} else {
    // Si no está logueado: mostramos el de invitados y ocultamos el de registrados
    if (USUARIO_NO_EXISTE) USUARIO_NO_EXISTE.style.display = "flex";
    if (USUARIO_SI_EXISTE) USUARIO_SI_EXISTE.style.display = "none";
}

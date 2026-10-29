
// JAVASCRIPT DE LA PUBLICACION

// BOTONES DE ME GUSTA Y GUARDAR EN FAVORITOS


var estadoMegusta = false;
var estadoMeencanta = false;

function meGusta() {
    var boton = document.getElementById("megusta");
    var contador = boton.querySelector(".cont");
    var numeroActual = parseInt(contador.textContent);

    if (estadoMegusta === false) {
        contador.textContent = numeroActual + 1;
        estadoMegusta = true;
    } else {
        contador.textContent = numeroActual - 1;
        estadoMegusta = false;
    }
}

function meEncanta() {
    var boton = document.getElementById("meencanta");
    var contador = boton.querySelector(".cont");
    var numeroActual = parseInt(contador.textContent);
    if (estadoMeencanta === false) {
        contador.textContent = numeroActual + 1;
        estadoMeencanta = true;
    } else {
        contador.textContent = numeroActual - 1;
        estadoMeencanta = false;
    }
}

// FUNCIÓN PARA COMENTAR
function mostrarTexto() {
    var cuadroComentar = document.getElementById("cuadroTexto");

    if (cuadroComentar.style.display === "none" || cuadroComentar.style.display === "") {
        cuadroComentar.style.display = "block";
    } else {
        cuadroComentar.style.display = "none";
    }
}
// FUNCIÓN PARA Q EL COMENTARIO SE PUBLIQUE

var contadorComentarios = 0;

function publicarComentario() {
    var futuroComentario = document.getElementById("futuroComentario");
    var comentario = futuroComentario.value;

    const comentarioInvalido = document.getElementById("comentarioInvalido");

    var contenedorLista = document.getElementById("listaComentarios");


    if (comentario.trim() === "") {
        comentarioInvalido.textContent = "El comentario no puede quedar vacío.";
    } else {
        comentarioInvalido.textContent = "";
        var mensajeVacio = document.getElementById("mensajeSinComentarios");
        if (mensajeVacio) {
            mensajeVacio.style.display = "none";
        }

        var nombreUsuario = sessionStorage.getItem("nuevoUsuarioLogueado");

        const nuevoComentario = document.createElement("div");
        nuevoComentario.className = "comentario";
        nuevoComentario.innerText = comentario;

        const usuario = document.createElement("span");
        usuario.className = "comentario-usuario";
        usuario.innerText = nombreUsuario;

        contenedorLista.prepend(nuevoComentario);
        contenedorLista.prepend(usuario);


        contadorComentarios = contadorComentarios + 1;
        var cantComent = document.getElementById("contadorComentarios");
        cantComent.innerText = contadorComentarios;

        futuroComentario.value = "";
        document.getElementById("cuadroTexto").style.display = "none";
    }
}

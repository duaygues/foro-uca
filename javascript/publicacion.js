
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

// FIN DE BOTONES DE ME GUSTA Y GUARDAR EN FAVORITOS



// Función para mostrar el cuadro de texto cuando hacen clic en "Comentar"
function mostrarFormulario() {
    var contenedorBoton = document.getElementById("contenedorBotonComentar");
    
    // Evita que se abra el formulario varias veces si ya está abierto
    if (document.getElementById("formComentario")) {
        return;
    }

    // Creamos un contenedor temporal para el formulario de comentario
    var divForm = document.createElement("div");
    divForm.id = "formComentario";
    divForm.style.marginTop = "10px";

    // Creamos el cuadro de texto (textarea)
    var textarea = document.createElement("textarea");
    textarea.id = "textoComentario";
    textarea.placeholder = "Escribí tu comentario...";
    textarea.rows = "3";
    textarea.style.width = "100%";

    // Creamos el botón de enviar
    var botonEnviar = document.createElement("button");
    botonEnviar.textContent = "Enviar";
    botonEnviar.onclick = enviarComentario; // Vinculamos el evento clic

    // Agregamos los elementos creados al formulario
    divForm.appendChild(textarea);
    divForm.appendChild(document.createElement("br"));
    divForm.appendChild(botonEnviar);
    
    // Insertamos el formulario debajo del enlace de comentar
    contenedorBoton.appendChild(divForm);
}

// Función para procesar y enviar el comentario a la parte superior
function enviarComentario() {
    var textarea = document.getElementById("textoComentario");
    var textoIngresado = textarea.value.trim();

    if (textoIngresado === "") {
        alert("Por favor, escribí un comentario antes de enviar.");
        return;
    }

    var cuerpoComentarios = document.getElementById("cuerpoComentarios");
    var mensajeVacio = document.getElementById("mensajeVacio");

    if (mensajeVacio) {
        mensajeVacio.remove();
    }

    var nuevoComentario = document.createElement("div");
    nuevoComentario.style.borderBottom = "1px solid #ddd";
    nuevoComentario.style.padding = "8px 0";
    nuevoComentario.style.marginBottom = "8px";

    var parrafo = document.createElement("p");
    parrafo.textContent = textoIngresado;
    nuevoComentario.appendChild(parrafo);

    cuerpoComentarios.insertBefore(nuevoComentario, cuerpoComentarios.firstChild);

    var contador = document.getElementById("contadorComentarios");
    var textoContador = contador.textContent; // Ej: "Comentarios (0)"
    
    var numeroActual = parseInt(textoContador.replace("Comentarios (", "").replace(")", ""));
    
    contador.textContent = "Comentarios (" + (numeroActual + 1) + ")";

    var formComentario = document.getElementById("formComentario");
    formComentario.remove();
}


// JAVASCRIPT DEL PUBLICAR

// CAMBIO DE HEADER

function actualizarHeaderPublicar() {
    const nuevoUsuarioLogueado = sessionStorage.getItem("nuevoUsuarioLogueado");
    const navBar = document.querySelector("header");
    
    const ingreso = sessionStorage.getItem("ingreso"); 

    if (navBar && nuevoUsuarioLogueado && ingreso === "true") {
        navBar.innerHTML = `
            <div class="logo">
                UCA Foro
            </div>

            <nav class="navPerfil">
                <a href="index.html">Inicio</a>
                <a href="carreras.html">Carreras</a>
                <a href="publicar.html">Publicar</a>
            </nav>

            <nav class="navFotoPerfil">
                <img class="fotoPerfil" src="Def_per.png" alt="Foto de Perfil">
                <a href="perfil2.html">${nuevoUsuarioLogueado}</a>
            </nav>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarHeaderPublicar();
});

// FIN DE CAMBIO DE HEADER

const cuerpoTexto = document.querySelector("#cuerpoTexto");
const contador = document.querySelector("#cont-form");
const cuerpoTitulo = document.querySelector("#cuerpoTitulo");
const contador2 = document.querySelector("#cont-Titulo")

const seleccion = document.querySelector("#seleccion-carre");
const foroSeleccion = document.querySelector("#SelectForum");

const botonPublicar = document.querySelector("#BOTONP");
const errorPublicar = document.querySelector("#error-publicar");

function actualizarContador() {
	contador.textContent = `${cuerpoTexto.value.length} / ${cuerpoTexto.maxLength}`;
    contador2.textContent = `${cuerpoTitulo.value.length} / ${cuerpoTitulo.maxLength}`;
}

function mostrarForoElegido() {
	if (foroSeleccion.value === "") {
		seleccion.textContent = "Todavía no se eligió un foro.";
	} else {
		seleccion.textContent = `Seleccionado: ${foroSeleccion.value}`;
	}
}

function validarPublicacion(evento) {
    let esValido = true;

    const foroVacio = foroSeleccion.value === "";
    const tituloVacio = cuerpoTitulo.value.trim() === "";

    if (foroVacio || tituloVacio) {
        esValido = false;
    }

    if (!esValido) {
        evento.preventDefault();
        errorPublicar.textContent = "Los campos no pueden quedar vacíos.";     
    } else {
        errorPublicar.textContent = "";
        window.location.href = "estado.html";
    }
}


const botonGuardar = document.querySelector(".boton-guardar");
const mensajeBorrador = document.querySelector("#mensaje-borrador");

// BORRADOR

function editarPublicacion() {

    const titulo = document.getElementById("cuerpoTitulo");
    const descripcion = document.getElementById("cuerpoTexto");
    const boton = document.getElementById("BOTONGUARDAR");

    if (titulo.disabled) {
        titulo.disabled = false;
        descripcion.disabled = false;

        boton.textContent = "Guardar borrador";

    } else {
        titulo.disabled = true;
        descripcion.disabled = true;
        boton.textContent = "Editar borrador";
    }
}

const botonBorrar = document.getElementById("BOTONBORRAR");

function resetearPubli() {
    const titulo = document.getElementById("cuerpoTitulo");
    const descripcion = document.getElementById("cuerpoTexto");

    if (titulo.value.length > 0 || descripcion.value.length > 0) {
        titulo.value = "";
        descripcion.value = "";
        actualizarContador()
        foroSeleccion.value = "";
        mostrarForoElegido()
    }
}


function eventosPublicar() {
    cuerpoTexto.addEventListener("input", actualizarContador);
    cuerpoTitulo.addEventListener("input",actualizarContador);
    foroSeleccion.addEventListener("change", mostrarForoElegido);

    botonPublicar.addEventListener("click", validarPublicacion);

    botonBorrar.addEventListener("click", resetearPubli);
}

eventosPublicar();

// FIN DEL JAVASCRIPT DEL PUBLICAR


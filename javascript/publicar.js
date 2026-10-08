// JAVASCRIPT DE LA PUBLICACIÓN (CANT. DE LIKES)
const botonesReacciones = document.querySelectorAll(".REACCIONES button");

botonesReacciones.forEach((button) => {
    button.addEventListener("click", () => {
    const cont=button.querySelector(".cont");
        if (cont) {
            let num=parseInt(cont.textContent);
            cont.textContent=num+1;
        }
    });
});


// JAVASCRIPT DEL PUBLICAR

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

function guardarBorrador(evento) {
    evento.preventDefault();

    const nuevoPost = {
        titulo: cuerpoTitulo.value,
        texto: cuerpoTexto.value,
        foro: foroSeleccion.value
    };

    let borradores = JSON.parse(localStorage.getItem("misBorradores")) || [];
    borradores.push(nuevoPost);
    localStorage.setItem("misBorradores", JSON.stringify(borradores));

    mensajeBorrador.textContent = "¡Borrador guardado con éxito!";
}



function eventosPublicar() {
    cuerpoTexto.addEventListener("input", actualizarContador);
    cuerpoTitulo.addEventListener("input",actualizarContador);
    foroSeleccion.addEventListener("change", mostrarForoElegido);

    botonPublicar.addEventListener("click", validarPublicacion);

    botonGuardar.addEventListener("click", guardarBorrador);
}

eventosPublicar();

// FIN DEL JAVASCRIPT DEL PUBLICAR


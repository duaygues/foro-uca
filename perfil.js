function editarPerfil() {

    const nombre = document.getElementById("nombre_u");
    const descripcion = document.getElementById("descripcion_u");
    const boton = document.getElementById("editar_perfil");

    if (nombre.disabled) {

        nombre.disabled = false;
        descripcion.disabled = false;

        boton.textContent = "Guardar cambios";

    } else {

        nombre.disabled = true;
        descripcion.disabled = true;

        boton.textContent = "Editar perfil";
    }
}

let usuarioSilenciado = false;

function silenciarUsuario() {

    const boton = document.getElementById("silenciar_u");

    if (usuarioSilenciado === false) {

        usuarioSilenciado = true;
        boton.textContent = "Usuario silenciado";

    } else {

        usuarioSilenciado = false;
        boton.textContent = "Silenciar usuario";

    }
}

function mostrarPublicaciones() {

    const contenido = document.getElementById("cont_publi");

    contenido.innerHTML = `
        <h2>Publicaciones previas</h2>

        <p>Publicación 1</p>
        <p>Publicación 2</p>
        <p>Publicación 3</p>
    `;
}


function mostrarMeGusta() {

    const contenido = document.getElementById("cont_publi");

    contenido.innerHTML = `
        <h2>Publicaciones que le gustan al usuario</h2>

        <p>Publicación que le gustó 1</p>
        <p>Publicación que le gustó 2</p>
    `;
}

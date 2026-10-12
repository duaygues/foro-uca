// JAVASCRIPT DE CARRERAS

// CAMBIO DE HEADER

function actualizarHeaderCarreras() {
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
    actualizarHeaderCarreras();
});

// FIN DE CAMBIO DE HEADER

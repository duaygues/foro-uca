
// JAVASCRIPT DEL PERFIL2

// CAMBIO DE HEADER

function actualizarHeaderPerfil() {
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
    actualizarHeaderPerfil();
});

// FIN DE CAMBIO DE HEADER


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

function mostrarPublicaciones() {

    const contenido = document.getElementById("cont_publi");

    contenido.innerHTML = `
        <h2>Publicados</h2>

        <div class="publicacion">

            <div>
                 <h3>¿Alguien tiene resumen de Probabilidad?</h3>
                <p>Ingeniería • Hace 20 minutos</p>
            </div>
            <div>
                <a href="publicacion.html">Ver publicación →</a>
            </div>

        </div>

        <div class="publicacion">
            <div>
                <h3>Final fisica</h3>
                <p>Ingeniería • Hace 1 hora</p>
            </div>
            <div>
                <a href="publicacion.html">Ver publicación →</a>
            </div>

        </div>

        <div class="publicacion">
                
            <div>
                <h3>Apuntes de Matemática I</h3>
                <p>Ingeniería • Hace 3 horas</p>
            </div>
            <div>
                <a href="publicacion.html">Ver publicación →</a>
            </div>

        </div>
    `;
}


function mostrarMeGusta() {

    const contenido = document.getElementById("cont_publi");

    contenido.innerHTML = `
        <h2>Favoritos</h2>

        <div class="publicacion">

            <div>
                 <h3>Apuntes Final Informática General</h3>
                <p>Ingeniería • Hace 30 minutos</p>
            </div>
            <div>
                <span>⭐</span>
                <a href="publicacion.html">Ver publicación →</a>
            </div>

        </div>

        <div class="publicacion">
            <div>
                <h3>Cálculo Elemental (Derivadas)</h3>
                <p>Ingeniería • Hace 2 hora</p>
            </div>
            <div>
                <span>⭐</span>
                <a href="publicacion.html">Ver publicación →</a>
            </div>

        </div>

        <div class="publicacion">
                
            <div>
                <h3>Software para PWM</h3>
                <p>Ingeniería • Hace 6 horas</p>
            </div>
            <div>
                <span>⭐</span>
                <a href="publicacion.html">Ver publicación →</a>
            </div>

        </div>
    `;
}


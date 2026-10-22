
// JAVASCRIPT DEL PERFIL2

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

var nombre_usuario = document.getElementById("nombre_u");

var registro_Username = sessionStorage.getItem("nuevoUsuarioLogueado");

if (nombre_usuario && registro_Username) {
    nombre_usuario.value = registro_Username;
}


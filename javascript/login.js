// JAVASCRIPT DEL LOGIN 

const formLogin = document.querySelector("#FORM-LOGIN");
const usuario = document.querySelector("#user");
const errorUsu = document.querySelector("#ERROR-USER");
const contraseña = document.querySelector("#password");
const errorContra = document.querySelector("#ERROR-PASSWORD");
const errorTodo = document.querySelector("#ERROR-GENERAL");


function validarUsuario() {
    const usuarioLimpio = usuario.value.trim();
    let esValido = false;

    if (usuarioLimpio.length > 0) {
        usuario.classList.remove("invalido");
        errorUsu.textContent = "";
        esValido = true;
    } else {
        usuario.classList.add("invalido");
        errorUsu.textContent = "Ingrese un usuario o correo válido.";
    }

    return esValido;
}

function validarContraseña() {
	const contraseñaLimpia = contraseña.value.trim();
	let esValido = false;

	if (contraseñaLimpia.length >= 8) {
		contraseña.classList.remove("invalido");
		errorContra.textContent = "";
		esValido = true;
	} else {
		contraseña.classList.add("invalido");
		errorContra.textContent = "Escriba mínimo 8 caracteres.";
	}

	return esValido;
}

function validarFormulario(evento) {

	const usuarioValido = validarUsuario();
	const contraseñaValida = validarContraseña();

	if (usuarioValido && contraseñaValida) {
        errorTodo.classList.add("valido");
        alert("Inicio de Sesión exitoso");

	} else {
        evento.preventDefault();
        errorTodo.classList.remove("valido");
        errorTodo.textContent = "Revisar los campos marcados antes de continuar.";
	}
}

function eventosLogin() {
    usuario.addEventListener("input", validarUsuario);
    contraseña.addEventListener("input", validarContraseña);
    formLogin.addEventListener("submit", validarFormulario);
}

eventosLogin();

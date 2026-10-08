
// CODIGO JAVASCRIPT
const formReg = document.querySelector("#FORM-REGISTRO");
const newUser = document.querySelector("#new-user");
const errorUser = document.querySelector("#ERROR-NEW-USER");
const nameUser = document.querySelector("#name-user");
const errorNameUser = document.querySelector("#ERROR-NAME-USER");
const newPassw = document.querySelector("#new-password");
const errorNewPassw = document.querySelector("#ERROR-NEWPASSW");
const finalNewPassw = document.querySelector("#final-new-password");
const errorFNewP = document.querySelector("#ERROR-FNEWP");
const errorTodo = document.querySelector("#ERROR-GENERAL");


function validarCorreo() {
    const usuarioLimpio = newUser.value.trim();
    let esValido = false;

    if (usuarioLimpio.length > 0) {
        newUser.classList.remove("invalido");
        errorUser.textContent = "";
        esValido = true;
    } else {
        newUser.classList.add("invalido");
        errorUser.textContent = "Este campo no puede quedar vacío.";
    }

    return esValido;
}

function validarNuevoUsuario() {
    const nuevoUsuarioLimpio = nameUser.value.trim();
    let esValido = false;

    if (nuevoUsuarioLimpio.length > 0) {
        nameUser.classList.remove("invalido");
        errorNameUser.textContent = "";
        esValido = true;
    } else {
        nameUser.classList.add("invalido");
        errorNameUser.textContent = "Este campo no puede quedar vacío.";
    }

    return esValido;
}

function validarNuevaContraseña() {
	const nuevaContraseñaLimpia = newPassw.value.trim();
	let esValido = false;

	if (nuevaContraseñaLimpia.length >= 8) {
		newPassw.classList.remove("invalido");
		errorNewPassw.textContent = "";
		esValido = true;
	} else {
		newPassw.classList.add("invalido");
		errorNewPassw.textContent = "Escriba mínimo 8 caracteres.";
	}

	return esValido;
}

function validarRepetirNuevaContraseña() {
    const nuevaContraseñaLimpia = newPassw.value.trim();
	const repNuevaContraseñaLimpia = finalNewPassw.value.trim();
	let esValido = false;

	if (nuevaContraseñaLimpia === repNuevaContraseñaLimpia ) {
		finalNewPassw.classList.remove("invalido");
		errorFNewP.textContent = "";
		esValido = true;
	} else {
		finalNewPassw.classList.add("invalido");
		errorFNewP.textContent = "La contraseña debe ser igual que la anterior.";
	}

	return esValido;
}


function validarFormulario(evento) {
    const correoValido = validarCorreo();
	const nuevoUsuarioValido = validarNuevoUsuario();
	const nuevaContraseñaValida = validarNuevaContraseña();
    const repNuevaContraseña = validarRepetirNuevaContraseña();

	if (correoValido && nuevoUsuarioValido && nuevaContraseñaValida && repNuevaContraseña) {
        errorTodo.classList.add("valido");
        alert("¡Registro exitoso!");
	} else {
        evento.preventDefault();
        errorTodo.classList.remove("valido");
        errorTodo.textContent = "Revisar los campos marcados antes de continuar.";
	}
}

function eventosRegistro() {
    newUser.addEventListener("input", validarCorreo);
    nameUser.addEventListener("input", validarNuevoUsuario);
    newPassw.addEventListener("input", validarNuevaContraseña);
    finalNewPassw.addEventListener("input", validarRepetirNuevaContraseña);
    formReg.addEventListener("submit", validarFormulario);
}

eventosRegistro();


//  JAVASCRIPT REGISTRO
const formReg = document.querySelector("#FORM-REGISTRO");
const newUser = document.getElementById("new-user");
const errorUser = document.querySelector("#ERROR-NEW-USER");
const nameUser = document.getElementById("name-user");
const errorNameUser = document.querySelector("#ERROR-NAME-USER");
const newPassw = document.querySelector("#new-password");
const errorNewPassw = document.querySelector("#ERROR-NEWPASSW");
const finalNewPassw = document.querySelector("#final-new-password");
const errorFNewP = document.querySelector("#ERROR-FNEWP");
const errorTodo = document.querySelector("#ERROR-GENERAL");

const PATRÓN_EMAIL = /^[a-zA-Z0-9]+@(uca)\.(edu)\.(ar)$/;
const RESULT_EMAIL = document.querySelector("#RESULT-EMAIL");

const PATRON_CONTRASEÑA = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,*&#$%/()=+-])[a-zA-Z0-9.,*&#$%/()=+-]+/;
const RESULT_CONTRA = document.querySelector("#RESULT-CONTRA");

const RESULT_NEW_CONTRA = document.querySelector("#RESULT-NEW-CONTRA");

const RESULT_USER = document.querySelector("#RESULT-USER");

function validarCorreo() {
    const usuarioLimpio = newUser.value.trim();
    const emailValido = PATRÓN_EMAIL.test(usuarioLimpio);
    let esValido = false;

    if (emailValido) {
        newUser.classList.remove("invalido");
        newUser.classList.add("valido");
        errorUser.textContent = "";
        RESULT_EMAIL.textContent = "Formato de email válido."
        esValido = true;
    } else {
        newUser.classList.add("invalido");
        newUser.classList.remove("valido");
        errorUser.textContent = "Ingrese un correo válido.";
        RESULT_EMAIL.textContent =  "";
    }

    return esValido;
}

function validarNuevoUsuario() {
    const nuevoUsuarioLimpio = nameUser.value.trim();
    let esValido = false;

    if (nuevoUsuarioLimpio.length > 0) {
        nameUser.classList.remove("invalido");
        nameUser.classList.add("valido");
        RESULT_USER.textContent = "Nombre de usuario válido."
        errorNameUser.textContent = ""
        esValido = true;
    } else {
        nameUser.classList.add("invalido");
        nameUser.classList.remove("valido");
        errorNameUser.textContent = "Este campo no puede quedar vacío.";
        RESULT_USER.textContent = ""
    }

    return esValido;
}

function validarNuevaContraseña() {
	const nuevaContraseñaLimpia = newPassw.value.trim();
    const nuevaContraValida = PATRON_CONTRASEÑA.test(nuevaContraseñaLimpia);
    const longNuevaContra = nuevaContraseñaLimpia.length >= 8 && nuevaContraseñaLimpia.length <= 16;
	let esValido = false;

	if (nuevaContraValida && longNuevaContra) {
		newPassw.classList.remove("invalido");
        newPassw.classList.add("valido");
		errorNewPassw.textContent = "";
        RESULT_CONTRA.textContent = "Formato de contraseña válida.";
		esValido = true;
	} else {
		newPassw.classList.add("invalido");
        newPassw.classList.remove("valido");
		errorNewPassw.textContent = "Escriba entre 8-16 caracteres y use al menos una mayúscula, una minúscula, un número y un caracter especial (&, $, #, %, -).";
        RESULT_CONTRA.textContent = "";
	}

	return esValido;
}

function validarRepetirNuevaContraseña() {
    const nuevaContraseñaLimpia = newPassw.value.trim();
	const repNuevaContraseñaLimpia = finalNewPassw.value.trim();
	let esValido = false;

	if (repNuevaContraseñaLimpia.length > 0 && repNuevaContraseñaLimpia == nuevaContraseñaLimpia) {
		finalNewPassw.classList.remove("invalido");
        finalNewPassw.classList.add("valido");
		errorFNewP.textContent = "";
        RESULT_NEW_CONTRA.textContent = "Las contraseñas son iguales.";
		esValido = true;
	} else {
		finalNewPassw.classList.add("invalido");
        finalNewPassw.classList.remove("valido");

        if (repNuevaContraseñaLimpia.length === 0) {
            errorFNewP.textContent = "Este campo no puede quedar vacío.";
        } else {
            errorFNewP.textContent = "La contraseña debe ser igual que la anterior.";
        }
        RESULT_NEW_CONTRA.textContent = "";
	}

	return esValido;
}


function validarFormulario(evento) {
    const correoValido = validarCorreo();
	const nuevoUsuarioValido = validarNuevoUsuario();
	const nuevaContraseñaValida = validarNuevaContraseña();
    const repNuevaContraseña = validarRepetirNuevaContraseña();


	if (correoValido && nuevoUsuarioValido && nuevaContraseñaValida && repNuevaContraseña) {
        errorTodo.textContent = ""
        sessionStorage.setItem("nuevoUsuarioLogueado", nameUser.value);
        sessionStorage.setItem("ingreso", "true"); 
        window.location.href = "index.html"; 
	} else {
        evento.preventDefault();
        errorTodo.textContent = "Revisar los campos marcados antes de continuar.";
        sessionStorage.setItem("ingreso", "false"); 
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

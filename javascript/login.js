
// JAVASCRIPT DEL LOGIN 
const formLogin = document.querySelector("#FORM-LOGIN");
const usuario = document.getElementById("user");
const errorUsu = document.querySelector("#ERROR-USER");
const contraseña = document.querySelector("#password");
const errorContra = document.querySelector("#ERROR-PASSWORD");
const errorTodo = document.querySelector("#ERROR-GENERAL");

const PATRÓN_EMAIL = /^[a-zA-Z0-9]+@(uca)\.(edu)\.(ar)$/;
const RESULT_EMAIL = document.querySelector("#RESULT-EMAIL");

const PATRON_CONTRASEÑA = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,*&#$%/()=+-])[a-zA-Z0-9.,*&#$%/()=+-]+/;
const RESULT_CONTRA = document.querySelector("#RESULT-CONTRA");

function validarUsuario(evento) {
    const usuarioLimpio = usuario.value.trim();
    const emailValido = PATRÓN_EMAIL.test(usuarioLimpio);
    let esValido = false;

    if (emailValido) {
        usuario.classList.add("valido");
        usuario.classList.remove("invalido");
        errorUsu.textContent = "";
        RESULT_EMAIL.textContent = "Formato de email válido."
        esValido = true;
    } else {
        usuario.classList.add("invalido");
        usuario.classList.remove("valido");
        errorUsu.textContent = "Ingrese un correo válido.";
        RESULT_EMAIL.textContent = "";
    }
    return(esValido)
}

function validarContraseña(evento) {
	const contraseñaLimpia = contraseña.value.trim();
    const contraValida = PATRON_CONTRASEÑA.test(contraseñaLimpia);
    const longContra = contraseñaLimpia.length >= 8 && contraseñaLimpia.length <= 16;
    let esValido = false;

	if (contraValida && longContra) {
		contraseña.classList.remove("invalido");
        contraseña.classList.add("valido");
		errorContra.textContent = "";
		RESULT_CONTRA.textContent = "Formato de contraseña válida."
        esValido = true;
	} else {
		contraseña.classList.add("invalido");
        contraseña.classList.remove("valido");
		errorContra.textContent = "Escriba entre 8-16 caracteres y use al menos una mayúscula, una minúscula, un número y un caracter especial (&, $, #, %, -).";
        RESULT_CONTRA.textContent = "";
	}
    return(esValido);
}

function validarFormulario(evento) {

	const usuarioValido = validarUsuario();
	const contraseñaValida = validarContraseña();
   

    if (usuarioValido && contraseñaValida) {
        errorTodo.textContent = ""
        //sessionStorage.setItem("usuarioLogueado", usuario.value);
        //sessionStorage.setItem("ingreso", "true"); 
        //window.location.href = "index.html"; 

	} else {
        evento.preventDefault();
        //sessionStorage.setItem("ingreso", "false"); 
        errorTodo.textContent = "Revisar los campos marcados antes de continuar.";
	}
}

function eventosLogin() {
    usuario.addEventListener("input", validarUsuario);
    contraseña.addEventListener("input", validarContraseña);
    formLogin.addEventListener("submit", validarFormulario);
}

eventosLogin();

function alternarPassword() {
  var inputPassword = document.getElementById("password");
  var botonOjo = document.getElementById("mostrar/ocultar");
  var textoMuestra = document.getElementById("mostrarOno");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    botonOjo.src = "eye-slash.svg";
    textoMuestra.textContent = "Ocultar contraseña"
  } else {
    inputPassword.type = "password";
    botonOjo.src = "eye.svg";
    textoMuestra.textContent = "Mostrar contraseña"
  }
}

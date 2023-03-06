const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const contrasena = document.getElementById("contrasena");
const contrasenaValid = document.getElementById("contrasenaValid");
const checkbox = document.getElementById('checkbox');

form.addEventListener("submit", (e) => {
	e.preventDefault();

	chequearInputs();
});

function chequearInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const edadValue = edad.value.trim();
	const contrasenaValue = contrasena.value.trim();
	const contrasenaValidValue = contrasenaValid.value.trim();


	if (usernameValue === "") {
		setearError(username, "Debes ingresar un nombre de usuario");
	} else {
		esCorrecto(username);
	}

	// validacion email (luego con regex)
	if (emailValue === "") {
		setearError(email, "Ingresa tu email");
	} else if (!isEmailValid(emailValue)) {
		setearError(email, "El email ingresado no es correcto");
	} else {
		esCorrecto(email);
	}

	// validar edad
	if (edadValue === "") {
		setearError(edad, "Debes ingresar tu edad");
	}	else if (edadValue <= 17){
		setearError(edad, "Debes ser mayor de 18");
	} 
	else {
		esCorrecto(edad);
	}


	// validar pass
	if (contrasenaValue === "") {
		setearError(contrasena, "Ingresa una contraseña");
	} else {
		esCorrecto(contrasena);
	}

	// revalidacion pass x coincidencia
	if (contrasenaValidValue === "") {
		setearError(contrasenaValid, "Repite tu contraseña");
	} else if (contrasenaValidValue != contrasenaValue) {
		setearError(contrasenaValid, "Las contraseñas ingresadas no coinciden");
	} else {
		esCorrecto(contrasenaValid);
	}
}

// si las contraseñas no coinciden 
function setearError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");

	small.innerText = message;
	formControl.className = "form-control error";
}

// si contraseñas coinciden
function esCorrecto(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// chequedo de email con regex

function emailEsValido(email) {
	let reg =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}

// validar check

function validarCheckbox()
{
  let checked = checkbox.checked;
  if(checked){
    alert('¡Gracias por suscribirte!');
  }
}

checkbox.addEventListener("change", validarCheckbox, false);


// Validad caracteres email
function validarEmailModal(idEmail, btn, mens) {
  const continueButtonId = document.getElementById(btn);
  const mensajeId = document.getElementById(mens);
  const emailId = document.getElementById(idEmail).value;

  if (!emailId.includes("@")) {
    mensajeId.innerHTML = "El email debe contener un @!";
    mensajeId.className = "alert alert-danger mt-2";
    continueButtonId.disabled = true;  // Mejor usar true en lugar de "disabled"
  } else {
    mensajeId.innerHTML = "";
    mensajeId.className = "";
    continueButtonId.disabled = false;  // Mejor usar false en lugar de ""
  }
}
// Fin validad caracteres email

// Validad caracteres password
function validarPassModal(idPass, btn, mens) {
  const buttonPassId = document.getElementById(btn);
  const mensajePassId = document.getElementById(mens);
  const passId = document.getElementById(idPass).value;

  const regExpMin = new RegExp("(?=.*[a-z])");
  const regExpMay = new RegExp("(?=.*[A-Z])");
  const regExpCantChar = new RegExp(".{8,}");

  if (!regExpMin.test(passId)) {
    mensajePassId.innerHTML = "La contraseña debe tener MINÚSCULAS!";
    mensajePassId.className = "alert alert-danger mt-2";
    buttonPassId.disabled = true;  
  } else if (!regExpMay.test(passId)) {
    mensajePassId.innerHTML = "La contraseña debe tener MAYÚSCULAS!";
    mensajePassId.className = "alert alert-danger mt-2";
    buttonPassId.disabled = true;
  } else if (!regExpCantChar.test(passId)) {
    mensajePassId.innerHTML = "La contraseña debe tener más de 8 caracteres";
    mensajePassId.className = "alert alert-danger mt-2";
    buttonPassId.disabled = true;
  } else {
    mensajePassId.innerHTML = "";
    mensajePassId.className = "";
    buttonPassId.disabled = false;
  }
}
// Fin validad caracteres password


// Inicio de  verificar todas las condiciones antes de habilitar el botón
function validarCampos() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const password = document.getElementById("passwordAgregar").value;
  const email = document.getElementById("emailAgregar").value;
  const telefono = document.getElementById("telefono").value;

  // Verificar todas las condiciones
  const condicionesCumplidas = 
    validarPassModal("passwordAgregar", "buttonAgregar", "mensajeAlerta") &&
    validarEmailModal("emailAgregar", "buttonAgregar", "mensajeAlerta") &&
    nombre.trim() !== "" &&
    apellido.trim() !== "" &&
    password.trim() !== "" &&
    email.trim() !== "" &&
    telefono.trim() !== "";

  // Habilitar o deshabilitar el botón según las condiciones
  const buttonAgregar = document.getElementById("buttonAgregar");
  buttonAgregar.disabled = !condicionesCumplidas;
}

// Fin de Verificar todas las condiciones antes de habilitar el botóns

// Agregar eventos onkeyup a los campos relevantes
document.getElementById("nombre").addEventListener("keyup", validarCampos);
document.getElementById("apellido").addEventListener("keyup", validarCampos);
document.getElementById("passwordAgregar").addEventListener("keyup", validarCampos);
document.getElementById("emailAgregar").addEventListener("keyup", validarCampos);
document.getElementById("telefono").addEventListener("keyup", validarCampos);





// Oculta o muestra la contraseña
function mostrarPass(index) {
  const passInputs = document.getElementsByClassName("pass");
  const eyeIcons = document.getElementsByClassName("icon-eye");
  const passInput = passInputs[index];
  const eyeIcon = eyeIcons[index];
  
  passInput.setAttribute("type", "text");
  eyeIcon.src = "/static/img/icons/eye-solid.svg";
  eyeIcon.setAttribute("onclick", `ocultarPass(${index})`);
}

function ocultarPass(index) {
  const passInputs = document.getElementsByClassName("pass");
  const eyeIcons = document.getElementsByClassName("icon-eye");
  const passInput = passInputs[index];
  const eyeIcon = eyeIcons[index];
  
  passInput.setAttribute("type", "password");
  eyeIcon.src = "/static/img/icons/eye-slash-solid.svg";
  eyeIcon.setAttribute("onclick", `mostrarPass(${index})`);
}
// Fin ocultar contraseña


// Verificar que las pass sean iguales

function compararPass(idPassNew, idPassConf, idMenaje, btn) {
  let pass=document.getElementById(idPassNew).value
  let repPass=document.getElementById(idPassConf).value

      
  if (pass!=repPass) {
      document.getElementById(idMenaje).innerHTML="Las contraseñas deben coincidir"
      document.getElementById(idMenaje).className="mensaje-login"        
      document.getElementById(btn).disabled="disabled"
  } else {
      document.getElementById(idMenaje).innerHTML=""
      document.getElementById(idMenaje).className=""        
      document.getElementById(btn).disabled=""
      document.getElementById(btn).className = "login-in";
  }	
}
// Fin de Verificar que las pass sean iguales


// Redirigir a la página de error (message.html)

const errorPage = () => {
  window.location.href = "./message.html";
};
 // Fin Redirigir a la página de error (message.html)


// Envio de cv
 

function updateFileName(input) {
  const fileInput = document.getElementById("cv");
  const fileName = fileInput.files[0].name;
  const button = document.getElementById("submitBtn"); 
  const inputCv = document.querySelector(".upload-file .upload-btn");

  if (fileName) {
    inputCv.textContent = fileName;
    button.className = "cv-btn-submit"; 
    button.disabled = ""; 
  } else {
    inputCv.textContent = "Cargar CV (PDF)";
    button.classList = "cv-btn-disabled"; 
    button.disabled = "disabled"; 
  }
}

const sendCv = () => {
  window.location.href = "./cv-send.html";
};
  
// Fin de envio de cv


// Obtén el elemento por su ID
let conexionHtml = document.getElementById("conexionJs");

// Asigna el contenido utilizando innerHTML
conexionHtml.innerHTML = 'Estamos conectados';
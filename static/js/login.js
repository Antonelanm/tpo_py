// Validad caracteres user y email

function validarUserEmail(type, btn, mens) {
  const continueButtonId = document.getElementById(btn);
  const mensajeId = document.getElementById(mens);

  if (type == "user" || type == "userSingUp") {
    user = document.getElementById("user").value;
    if (!user.includes("@")) {
      mensajeId.innerHTML = "El usuario debe contener un @";
      mensajeId.className = "mensaje-login";
      continueButtonId.disabled = "disabled";
      continueButtonId.className = "btn-disabled";
    } else {
      mensajeId.innerHTML = "";
      mensajeId.className = "";
      continueButtonId.disabled = "disabled";
      continueButtonId.className = "btn-disabled";
    }
  } else if (type == "email") {
    userEmail = document.getElementById("email").value;
    if (!userEmail.includes("@")) {
      document.getElementById("mensajeAlerta").innerHTML = "El email debe contener un @";
      document.getElementById("mensajeAlerta").className = "mensaje-login";
      document.getElementById("form-btn").disabled = "disabled";
      document.getElementById("form-btn").className = "btn-disabled";
    } else {
      document.getElementById("mensajeAlerta").innerHTML = "";
      document.getElementById("mensajeAlerta").className = "";
      document.getElementById("form-btn").disabled = "";
      document.getElementById("form-btn").className = "form-btn-submit";
    }
  }
}
// Fin validad caracteres user y email

// Validar caracteres password
function validarPass(idPass, btn, mens) {
  const pass = document.getElementById(idPass).value;
  const continueButton = document.getElementById(btn);
  const mensajeId = document.getElementById(mens);

  const regExpMin = new RegExp("(?=.*[a-z])");
  const regExpMay = new RegExp("(?=.*[A-Z])");
  const regExpCantChar = new RegExp(".{8,}");

  if (idPass == "passLogin"){
    if (!regExpMin.test(pass)) {
      mensajeId.innerHTML = "La contraseña debe tener minúsculas";
      mensajeId.className = "mensaje-login";
      continueButton.className = "btn-disabled";
    } else if (!regExpMay.test(pass)) {
      mensajeId.innerHTML = "La contraseña debe tener mayúsculas";
      mensajeId.className = "mensaje-login";
      continueButton.disabled = "disabled";
      continueButton.className = "btn-disabled";
    } else if (!regExpCantChar.test(pass)) {
      mensajeId.innerHTML = "La contraseña debe tener más de 8 caracteres";
      mensajeId.className = "mensaje-login";
      continueButton.disabled = "disabled";
      continueButton.className = "btn-disabled";
    } else {
      mensajeId.innerHTML = "";
      mensajeId.className = "";
      continueButton.disabled = "";
      continueButton.className = "login-in";
    }
  } else if (idPass == "passNew"){ 
    if (!regExpMin.test(pass)) {
      mensajeId.innerHTML = "La contraseña debe tener minúsculas";
      mensajeId.className = "mensaje-login";
      continueButton.className = "btn-disabled";
    } else if (!regExpMay.test(pass)) {
      mensajeId.innerHTML = "La contraseña debe tener mayúsculas";
      mensajeId.className = "mensaje-login";
      continueButton.disabled = "disabled";
      continueButton.className = "btn-disabled";
    } else if (!regExpCantChar.test(pass)) {
      mensajeId.innerHTML = "La contraseña debe tener más de 8 caracteres";
      mensajeId.className = "mensaje-login";
      continueButton.disabled = "disabled";
      continueButton.className = "btn-disabled";
    } else {
      mensajeId.innerHTML = "";
      mensajeId.className = "";
      continueButton.disabled = "";
      continueButton.className = "btn-disabled";
    }
 }
}
// Fin validad password


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
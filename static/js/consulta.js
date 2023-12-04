function validarConsulta() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var confirmarCorreo = document.getElementById("confirmarEmail").value;
    var mensajeError = document.getElementById("mensajeError");

    if (nombre === "" || correo === "" || confirmarCorreo === "") {
        mensajeError.textContent = "Hay campos vacíos";
    } else if (correo !== confirmarCorreo) {
        mensajeError.textContent = "Las direcciones de correo electrónico no coinciden";
    } else {
        //alert("Formulario enviado con éxito");
    }
}

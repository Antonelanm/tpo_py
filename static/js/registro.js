
// valida que el usuario tenga un @ y tenga el dominio codoACodo.edu.ar
function validarUser() {
    console.log("ingreso a validarUser")
    
    //obtendo lo que ingreso el usuario en el input luego lo pongo en la variable user
    let user=document.getElementById("user").value 
    console.log(`user= ${user}`)

    // console.log(user.includes("@"))
    user.includes("")

    if (!user.includes("@")) {
        // console.log("El usuario debe contener un @")
        document.getElementById("mensaje").innerHTML="El usuario debe contener un @"
        document.getElementById("mensaje").className="text-danger  m-1 p-1 text-center "
    } else if(!user.toLowerCase().includes("bicitienda.com")){    
        document.getElementById("mensaje").innerHTML="El usuario debe contener dominio codoacodo.edu.ar"
        document.getElementById("mensaje").className="text-danger  m-1 p-1 text-center"

    } else {
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""
        
    }

}


// muestra la fortaleza de seguridad de las pass
function mostrarFortCant() {
    console.log("mostrarfor")
    let pass=document.getElementById("pass").value

    if (pass.length<=4) {
        document.getElementById("mensaje").innerHTML="Fortaleza Baja"
        document.getElementById("mensaje").className="bg-danger  m-1 p-1 border rounded text-center "        
    } else if(pass.length<=8) {
        document.getElementById("mensaje").innerHTML="Fortaleza Media"
        document.getElementById("mensaje").className="bg-info m-1 p-1 border rounded text-center "        
    } else {
        document.getElementById("mensaje").innerHTML="Fortaleza Alta"
        document.getElementById("mensaje").className="bg-success m-1 p-1 border rounded text-center "        

    }
}

function validarPass() {
    let pass=document.getElementById("pass").value

    let regExp=new RegExp("(?=.*[a-z])(?=.*[A-Z]).{8,}")
    
    if (!regExp.test(pass)) {
        document.getElementById("mensaje").innerHTML="La contraseña debe tener una minúscula, una mayúscula y ser mayor a 8 caracteres"
        document.getElementById("mensaje").className="text-danger m-1 p-1 text-center "        
        
    } else {
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""        
        
    }
    
}


function validarPassDiscriminada() {
    let pass=document.getElementById("pass").value

    let regExpMin=new RegExp("(?=.*[a-z])")
    let regExpMay=new RegExp("(?=.*[A-Z])")
    let regExpCantChar=new RegExp(".{8,}")
    
    if (!regExpMin.test(pass)) {
        document.getElementById("mensaje").innerHTML="La contraseña debe tener minúsculas"
        document.getElementById("mensaje").className="bg-danger m-1 p-1 border rounded text-center "        
        
    } else if (!regExpMay.test(pass)) {
        document.getElementById("mensaje").innerHTML="La contraseña debe tener mayúsculas"
        document.getElementById("mensaje").className="bg-danger m-1 p-1 border rounded text-center "        
            
    } else if (!regExpCantChar.test(pass)) {
        document.getElementById("mensaje").innerHTML="La contraseña debe tener más de 8 caracteres"
        document.getElementById("mensaje").className="bg-danger m-1 p-1 border rounded text-center "        
    } else {
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""        
        
    }
    
}

//todo: verificar que las pass sean iguales

function compararPass() {
    let pass=document.getElementById("pass").value
    let repPass=document.getElementById("repPass").value

        
    if (pass!=repPass) {
        document.getElementById("mensaje").innerHTML="Las contraseñas deben coincidir"
        document.getElementById("mensaje").className="text-danger m-1 p-1 text-center "        
        
    } else {
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""        
        
    }	
}


const togglePasswordIcons = document.querySelectorAll('.toggle-password');

togglePasswordIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const targetInput = document.getElementById(targetId);
    const type = targetInput.getAttribute('type') === 'password' ? 'text' : 'password';
    targetInput.setAttribute('type', type);
    this.classList.toggle('bi-toggle-off');
    this.classList.toggle('bi-toggle-on');
  });
});
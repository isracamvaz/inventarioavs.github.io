const nombre = document.getElementById("name")
const correo = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


//Cuando el form se envie ejecutara una accion de tipo flecha
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = true
    let entrar2 = true
    let entrar3 = true
    let paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/  
    //Para que antes de dar click se reinicien los valores
    parrafo.innerHTML = ''
    if(nombre.value.length < 6){
        warnings += '-El nombre es muy corto <br>'
        entrar = false
    }
    
    
    if(!regexEmail.test(correo.value)){
        warnings += '-El email no es valido <br>'
        entrar2 = false
    }

    if(paswd.test(pass.value)) { 
        entrar3 = true
    }else{
        warnings += '-La contraseña debe contener 7-15 caracteres que tenga al menos un numero y un caracter especial(!@#$%^&*) <br>'
        entrar3 = false
    }


    if(entrar && entrar2 && entrar3){
        window.location.href='../Empleados/empleados.html'
    }else{
        parrafo.innerHTML = warnings
    }
})
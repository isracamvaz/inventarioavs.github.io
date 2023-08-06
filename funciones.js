
const form = document.getElementById("form")



//Cuando el form se envie ejecutara una accion de tipo flecha
form.addEventListener("submit", e=>{
    e.preventDefault()
        window.location.href = 'Inicio/inicio.html'
})